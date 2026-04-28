const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealSections = document.querySelectorAll(".reveal-section");

if (reduceMotion) {
  revealSections.forEach((section) => section.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealSections.forEach((section) => observer.observe(section));
}

document.addEventListener("visibilitychange", () => {
  const state = document.visibilityState === "hidden" ? "paused" : "running";
  document.body.style.setProperty("--ambient-play-state", state);
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.getElementById("site-nav");
const navBackdrop = document.querySelector(".nav-backdrop");

function setNavOpen(isOpen) {
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  siteNav.classList.toggle("is-open", isOpen);
  navBackdrop.classList.toggle("is-visible", isOpen);
  navBackdrop.hidden = !isOpen;
  document.body.classList.toggle("nav-open", isOpen);
}

if (navToggle && siteNav && navBackdrop) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setNavOpen(!isOpen);
  });

  navBackdrop.addEventListener("click", () => setNavOpen(false));

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
      setNavOpen(false);
      navToggle.focus();
    }
  });

  window.matchMedia("(min-width: 721px)").addEventListener("change", (e) => {
    if (e.matches) setNavOpen(false);
  });
}

const consentBanner = document.getElementById("consent-banner");

if (consentBanner) {
  let stored = null;
  try { stored = localStorage.getItem("ips-consent"); } catch (e) {}

  if (!stored) {
    consentBanner.hidden = false;
    requestAnimationFrame(() => consentBanner.classList.add("is-visible"));
  }

  consentBanner.querySelectorAll("[data-consent]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const choice = btn.getAttribute("data-consent");
      try { localStorage.setItem("ips-consent", choice); } catch (e) {}

      if (typeof gtag === "function") {
        gtag("consent", "update", {
          ad_storage: choice === "granted" ? "granted" : "denied",
          ad_user_data: choice === "granted" ? "granted" : "denied",
          ad_personalization: choice === "granted" ? "granted" : "denied",
          analytics_storage: choice === "granted" ? "granted" : "denied",
          personalization_storage: choice === "granted" ? "granted" : "denied",
        });
      }

      consentBanner.classList.remove("is-visible");
      setTimeout(() => { consentBanner.hidden = true; }, 220);
    });
  });
}
