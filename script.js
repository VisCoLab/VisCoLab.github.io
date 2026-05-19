// ---------- Shared chrome (header + footer) ----------
const NAV_LINKS = [
  { href: "research.html", label: "Research" },
  { href: "projects.html", label: "Projects" },
  { href: "people.html", label: "People" },
  { href: "publications.html", label: "Publications" },
  { href: "videos.html", label: "Videos" },
  { href: "contact.html", label: "Contact" },
];

function currentPage() {
  const path = location.pathname.split("/").pop() || "index.html";
  return path;
}

function renderHeader() {
  const here = currentPage();
  const links = NAV_LINKS
    .map((l) => {
      const active = l.href === here ? ' aria-current="page"' : "";
      return `<a href="${l.href}"${active}>${l.label}</a>`;
    })
    .join("");

  return `
<header class="site-header">
  <div class="wrap nav">
    <a class="brand" href="index.html" aria-label="VisCo — Visual Computing Lab — home">
      <span class="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="28" height="28">
          <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" stroke-width="1.5"/>
          <path d="M16 27 V14 M16 14 L10 8 M16 14 L22 8 M16 18 L11 14 M16 18 L21 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </span>
      <span class="brand-text">
        <strong>VisCo</strong>
        <em>Visual Computing Lab</em>
      </span>
    </a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle navigation">
      <span></span><span></span><span></span>
    </button>
    <nav id="primary-nav" class="primary-nav">${links}</nav>
  </div>
</header>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
<footer class="site-footer">
  <div class="wrap footer-inner">
    <p>© ${year} VisCo · Visual Computing Lab · Adam Mickiewicz University in Poznań</p>
    <p class="footer-links">
      <a href="https://wp.faculty.wmi.amu.edu.pl/" target="_blank" rel="noopener">Lab head</a>
      <a href="https://www.youtube.com/@VCAMULab" target="_blank" rel="noopener">YouTube</a>
      <a href="https://amu.edu.pl/en" target="_blank" rel="noopener">AMU</a>
    </p>
  </div>
</footer>`;
}

function mountChrome() {
  const headerSlot = document.getElementById("site-header");
  const footerSlot = document.getElementById("site-footer");
  if (headerSlot) headerSlot.outerHTML = renderHeader();
  if (footerSlot) footerSlot.outerHTML = renderFooter();

  const header = document.querySelector(".site-header");
  const toggle = header?.querySelector(".nav-toggle");
  const nav = header?.querySelector(".primary-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.addEventListener("DOMContentLoaded", mountChrome);
