# Streaming is the infrastructure. The new front end is now forming.

*Brief · For Labels & A&R · April 2026*
*By Matthew Hartley — Founder, Imagine Peak Studios*

---

How AI agents are reshaping music discovery, and what catalog labels, A&R, and rights holders should be paying attention to now — not next year.

## The thesis

Streaming made music infinitely available and infinitely passive. Playlists became the discovery layer. The next layer is doing the opposite — structured, intent-driven, AI-mediated delivery. Agents like Claude, ChatGPT, and Perplexity are becoming the surface where listeners ask *"what should I listen to,"* and they don't ask in a way a playlist can answer.

The AI agent does **dynamic matching** between user intent and artist intent — pairing them in real time, in context. Artists who expose their catalog to those AI agents control how their work shows up in those moments. Traditional streaming platforms don't.

> The discovery layer is moving from *"what do users like"* to dynamic matching between user intent and artist intent.

## Why now

Plain English first: **MCP — the Model Context Protocol** — is a standard that lets AI agents plug directly into external data sources. When an artist runs an MCP server, agents like Claude, ChatGPT, or Perplexity can query the catalog directly: songs, themes, recommended sequencing, even how the artist wants their music introduced. It's the protocol that makes the new front end possible.

The timeline:

- **November 2024** — Anthropic releases MCP. The standard exists.
- **February 2025** — Anthropic releases Claude Code. AI engineering starts becoming a daily-driver workflow.
- **February 2026** — Claude Opus 4.6 lands. Combined with Claude Code, AI code generation crosses into production quality and on-the-fly UI creation becomes viable. Effectively no barrier to entry for technical creators. **Apps are being democratized.** A single person can now ship real apps end-to-end.
- **April 2026** — The first artist-owned MCP server ships. Proof of all of the above, in production.

Throughout this period, AI agents (Claude, ChatGPT, Perplexity) have become primary discovery surfaces in technical and influential user pockets — the demand surface for what's now possible. None of the major DSPs have built this layer yet — or haven't announced it publicly. That's the window.

## The hidden risk of staying in the streaming model

DSPs solved distribution. They made global reach normal, measurable, and accessible. But they also introduced a new set of dependencies that labels, artists, and rights holders now have to manage.

Artists no longer fully control how their work is discovered, experienced, or monetized. Streaming revenue is shaped by platform-wide activity, not only by the relationship between an artist and their own listeners. Discovery is mediated by playlists and recommendation systems that tend to reward scale. The format itself can bend creative incentives toward shorter, repeatable, passive-consumption tracks. And the rise of streaming fraud, AI-generated spam, impersonation, and distributor loopholes is diluting both attention and earnings.

None of this means streaming is broken. It means the model has tradeoffs. The artist's relationship with the audience is increasingly mediated — and often abstracted — by the platform itself. The next phase of discovery will favor rights holders who can preserve the reach of streaming while rebuilding control around identity, context, and direct AI-native presentation — without handing source media to the discovery layer.

## What it means for labels

### Catalog activation

Existing catalogs can be reformatted as structured experiences — narrative arcs, chapter-based delivery, scene-aware metadata. The same recordings, presented through a different layer, become a new product. Legacy catalogs especially benefit: this is rights-light, distribution-heavy work that surfaces dormant value.

### Discovery economics

As AI agents become primary discovery surfaces, the economics of how plays are valued and attributed will likely evolve. The playlist-driven royalty model assumes a finite set of curated lists. Agent-driven sessions are unbounded, contextual, and creator-defined. Labels should be thinking now about how royalty frameworks adapt.

### IP & control

Most *"AI for creators"* platforms today work by ingesting your bytes — songs, video, text — and licensing them broadly for training, derivatives, and reuse. Once the bytes are absorbed, control is gone in practice even if a contract claims otherwise.

A copyright-preserving alternative exists: architectures where AI agents see metadata and a proxied URL only, never the source bytes. Access is verified per-request; pausing or unpublishing kills it instantly. Labels retain rights *and* retain control over how those rights flow through the new discovery surface.

This is the key distinction: the catalog can become discoverable, narratable, and playable by AI agents without becoming training material, derivative fodder, or an ungoverned file floating around someone else's system. Copyright preservation is not a defensive feature. It is the condition that lets rights holders participate in AI-native discovery without surrendering control of the work.

Rights without exposure to the new discovery surface are worth less every quarter. Exposure without copyright preservation creates a different problem: visibility at the cost of control. Whoever *does* expose the catalog to agents — through a copyright-preserving architecture, not by feeding bytes into a training pipeline — owns the recommendation layer. That's a strategic question, not a technical one.

## What it means for A&R

The artists who break in this layer won't all come from TikTok, Instagram, or YouTube. Some will come from AI clients surfacing artists with rich, structured catalogs — chapter-based releases, narrative-aware metadata, intent that an agent can articulate.

The new skill stack to evaluate isn't just songcraft. It's catalog architecture: can this artist think of their work as a structured experience, not just a track dump? Can they define what an agent should *say* when introducing their music? That's an A&R question now.

## Where Harmonic Wave fits

[Harmonic Wave](https://harmonicwave.ai) is the platform behind the first artist-owned MCP — built to expose a music catalog as an AI-native structured experience while preserving copyright control over the underlying media. It launched in April 2026 with the release of *The Time Is Now*, an album produced in part by Grammy-winning producer David Kershenbaum (Tracy Chapman, Joe Jackson, Bryan Adams) and released chapter by chapter rather than as a single drop.

### Why use Harmonic Wave when you could build your own?

Because the platform itself is not prompt-and-go. *"Here's a prompt, generate me an MCP platform"* doesn't work. Real platforms take months of architectural decisions, schema iteration, integration work, and active management — built and maintained by an experienced team, evolving continuously as the protocol layer evolves.

**But once a real platform exists, the app side IS prompt-and-go.** That's the asymmetry: someone does the hard architecture work once, and everyone after gets to spin up listening experiences with the new democratized app tooling.

**The trick is decoupling.** Harmonic Wave architecturally separates the app layer from the infrastructure layer — and lets AI generate the app layer on the fly. The infrastructure (the MCP server, the schema, the catalog data) stays put. The apps (players, listening experiences, voice presentations) get spun up dynamically, whenever and however they're needed.

**Apps come and go. The infrastructure stays.** Listeners may interact with a catalog through Claude today, ChatGPT or Perplexity tomorrow, a custom narrative-aware player next year, a voice agent the year after. The apps are disposable. The MCP server, the schema, the architecture — that's where the durable value sits. That's what Harmonic Wave is.

The MCP server is the easy part. The hard parts are:

- **Copyright-preserving architecture.** AI agents never see your bytes — only metadata and per-request proxied URLs. Bytes stay in your storage. Pausing or unpublishing kills access immediately. No training-corpus exposure, no signed-URL leak risk, no *"uploaded into a model"* loss of control. Patent-pending.
- **A standardized schema** so every catalog interoperates with every player. One-off MCPs don't.
- **A universal player generator** that produces custom listening experiences from any catalog on the platform — narrative-aware, audio-reactive, voice-narrated.
- **Audio + delivery infrastructure.** Signed-URL streaming, release gating, chapter-aware access control. Full stack from metadata to bytes.
- **AI narration baked in.** Artist-defined voiceover that introduces, contextualizes, and threads songs together. The catalog speaks with its own voice on every surface.
- **Distribution everywhere.** One MCP server, accessible from any AI client — Claude, ChatGPT, Perplexity, enterprise tools. Expose once, surface everywhere.
- **Cross-format extensibility.** Music today. Podcasts, video, narrative media tomorrow. Multi-format catalogs in one place.
- **Team-maintained architecture** that evolves with MCP, agents, and listening surfaces. Your catalog stays current without tracking every protocol change.

The platform is currently in open beta with a v1.0 planned launch in May 2026. It extends beyond music into podcasts, video, and narrative media — anywhere structured AI delivery matters. The underlying technology is patent pending.

## What to do this quarter

- **Experience it firsthand.** Open [experience.matthewhartleymusic.com](https://experience.matthewhartleymusic.com) — the live Experience Media Player for *The Time Is Now* debut album. This is what Harmonic Wave–powered listening feels like.
- **Inspect the first artist-owned MCP server** — connect it to Claude, ChatGPT, Perplexity, or any compatible AI client and stream the available catalog yourself: [github.com/imaginepeakstudios/matthewhartleymusic-mcp](https://github.com/imaginepeakstudios/matthewhartleymusic-mcp)
- **Visit the artist site** for context: [matthewhartleymusic.com](https://matthewhartleymusic.com)
- **Book a working session** if your team is wrestling with AI strategy, catalog activation, or A&R direction in this layer.

---

## Talk to Matthew

**Twenty minutes. No pitch. Your questions.**

A short working session for A&R, label leadership, and catalog strategy folks thinking about how this shift affects your roster, your catalog, or your business model. These are conversations, not pitches.

- **Book a 20-min strategy call:** https://calendly.com/matthew-hartley/strategy
- **Or reply by email:** hello@imaginepeakstudios.com

---

*Matthew Hartley is the founder of Imagine Peak Studios — a consulting practice covering product strategy, sonic direction, and AI engineering. 25+ year software industry veteran with multiple USPTO patent filings. Independent artist behind *The Time Is Now*, the first artist-owned MCP server.*

*Imagine Peak Studios · 8051 N Tamiami Trail Ste E6 · Sarasota FL 34243 · hello@imaginepeakstudios.com*
