#!/usr/bin/env python3
"""Content-hash the unversioned assets and stamp the hash into every reference.

Runs against the DEPLOY DIRECTORY, never the source tree, so local dev keeps
loading plain /styles.css and /script.js with no build step.

Why this exists: styles.css and script.js are referenced unversioned, and a
Cloudflare zone-level Browser Cache TTL can override the Cache-Control that
_headers sets. When that happens a visitor keeps the old stylesheet against new
HTML for hours, which renders as a broken page rather than a stale one. A
content hash in the query string sidesteps caching entirely — change the file,
change the URL.

Usage:  python3 scripts/stamp-assets.py /tmp/ips-deploy
"""
import hashlib
import pathlib
import re
import sys

ASSETS = ("styles.css", "script.js")


def main(root: str) -> int:
    base = pathlib.Path(root)
    if not base.is_dir():
        print(f"error: {root} is not a directory", file=sys.stderr)
        return 1

    versions = {}
    for name in ASSETS:
        f = base / name
        if not f.is_file():
            print(f"error: {name} missing from {root}", file=sys.stderr)
            return 1
        versions[name] = hashlib.sha256(f.read_bytes()).hexdigest()[:10]

    stamped = 0
    for page in sorted(base.rglob("*.html")):
        text = original = page.read_text(encoding="utf-8")
        for name, digest in versions.items():
            # matches href="/styles.css", src="script.js", etc. Anything that
            # already carries a query string is left alone.
            text = re.sub(
                r'((?:href|src)=")((?:\./|/)?' + re.escape(name) + r')(")',
                lambda m: f"{m.group(1)}{m.group(2)}?v={versions[name]}{m.group(3)}",
                text,
            )
        if text != original:
            page.write_text(text, encoding="utf-8")
            stamped += 1

    for name, digest in versions.items():
        print(f"  {name} -> ?v={digest}")
    print(f"  stamped {stamped} page(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1] if len(sys.argv) > 1 else "."))
