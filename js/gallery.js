/* ==========================================================================
   Apple.com Clone — "Endless entertainment" gallery carousel
   Autoplaying slides with service-tab switching and dot navigation.
   ========================================================================== */
(function () {
  "use strict";

  const GALLERY_DATA = {
    tv: [
      { bg: "images/gallery/tv-ted-lasso.jpg", logo: "images/gallery/logo-hero-light.png", title: "Ted Lasso", note: "Comedy — New season.", cta: "Stream now", color: "#1c1c1e" },
      { bg: "images/gallery/tv-lucky.jpg", logo: "images/gallery/logo-hero-light.png", title: "Lucky", note: "Action — Anya Taylor-Joy is a grifter running for her life.", cta: "Stream now", color: "#1c1c1e" },
      { bg: "images/gallery/tv-f1.jpg", logo: "images/gallery/logo-hero-light.png", title: "F1 on Apple TV", note: "Every Grand Prix, live and on demand — all in one place, all year long.", cta: "Learn more", color: "#1c1c1e" },
      { bg: "images/gallery/tv-silo.jpg", logo: "images/gallery/logo-hero-light.png", title: "Silo", note: "Sci-Fi — The truth lies in the past.", cta: "Stream now", color: "#1c1c1e" },
      { bg: "images/gallery/tv-mls.jpg", logo: "images/gallery/logo-hero-light.png", title: "MLS on Apple TV", note: "Watch every club, every match, live — all season long.", cta: "Learn more", color: "#1c1c1e" },
      { bg: "images/gallery/tv-dink.jpg", logo: "images/gallery/logo-hero-light.png", title: "The Dink", note: "Comedy — It's pickleball vs. tennis in the hilarious new movie.", cta: "Stream now", color: "#1c1c1e" },
      { bg: "images/gallery/tv-fnb.jpg", logo: "images/gallery/logo-hero-light.png", title: "Friday Night Baseball", note: "Live MLB games, every Friday.", cta: "See the schedule", color: "#1c1c1e" },
      { bg: "images/gallery/tv-cape-fear.jpg", logo: "images/gallery/logo-hero-light.png", title: "Cape Fear", note: "Thriller — Fear takes hold.", cta: "Stream now", color: "#1c1c1e" },
      { bg: "images/gallery/tv-widows-bay.jpg", logo: "images/gallery/logo-hero-light.png", title: "Widow's Bay", note: "Mystery — 19 Emmy Nominations Including Best Comedy.", cta: "Stream now", color: "#1c1c1e" },
    ],
    apps: [
      { bg: "images/gallery/fam-sabrina.jpg", title: "Sabrina Carpenter: The Zane Lowe Interview", note: "Apple Music", cta: "Listen now", color: "#000" },
      { bg: "images/gallery/fam-hello-kitty.jpg", title: "Hello Kitty Island Adventure", note: "Apple Arcade", cta: "Play now", color: "#000" },
      { bg: "images/gallery/fam-david-bowie.jpg", title: "David Bowie", note: "Apple Fitness+", cta: "Watch now", color: "#000" },
      { bg: "images/gallery/fam-a-list-pop.jpg", title: "A-List Pop", note: "Apple Music", cta: "Listen now", color: "#000" },
      { bg: "images/gallery/fam-powerwash.jpg", title: "PowerWash Simulator", note: "Apple Arcade", cta: "Play now", color: "#000" },
      { bg: "images/gallery/fam-hiit.jpg", title: "HIIT with Bakari", note: "Apple Fitness+", cta: "Watch now", color: "#000" },
      { bg: "images/gallery/fam-new-music.jpg", title: "New Music Daily", note: "Apple Music", cta: "Listen now", color: "#000" },
      { bg: "images/gallery/fam-balatro.jpg", title: "Balatro+", note: "Apple Arcade", cta: "Play now", color: "#000" },
      { bg: "images/gallery/fam-programs.jpg", title: "Programs", note: "Apple Fitness+", cta: "Watch now", color: "#000" },
    ],
  };

  const TABS = [
    { key: "tv", label: "Apple TV+" },
    { key: "apps", label: "Apps &amp; Services" },
  ];

  let currentGroup = "tv";
  let currentSlide = 0;
  let timer = null;
  let paused = false;
  const INTERVAL = 5000;

  function getEls() {
    return {
      tabs: document.querySelectorAll("[data-gallery-tab]"),
      bgImg: document.getElementById("gallery-bg"),
      logoImg: document.getElementById("gallery-logo"),
      titleEl: document.getElementById("gallery-title"),
      noteEl: document.getElementById("gallery-note"),
      ctaBtn: document.getElementById("gallery-cta"),
      dots: document.querySelectorAll("[data-gallery-dot]"),
      playPauseBtn: document.getElementById("gallery-playpause"),
      wrap: document.getElementById("entertainment-gallery"),
    };
  }

  function render(index) {
    const el = getEls();
    const item = GALLERY_DATA[currentGroup][index];
    if (!item) return;
    el.bgImg.src = item.bg;
    el.titleEl.textContent = item.title;
    el.noteEl.textContent = item.note;
    el.ctaBtn.textContent = item.cta;
    el.wrap.style.background = item.color;
    if (item.logo) {
      el.logoImg.src = item.logo;
      el.logoImg.style.display = "block";
    } else {
      el.logoImg.style.display = "none";
    }
    el.dots.forEach((d, i) => d.classList.toggle("active", i === index));
  }

  function next() {
    currentSlide = (currentSlide + 1) % GALLERY_DATA[currentGroup].length;
    render(currentSlide);
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(() => { if (!paused) next(); }, INTERVAL);
  }

  function stopAutoplay() {
    clearInterval(timer);
    timer = null;
  }

  function switchGroup(group) {
    currentGroup = group;
    currentSlide = 0;
    render(0);
    if (!paused) startAutoplay();
    getEls().tabs.forEach((t) => t.classList.toggle("active", t.dataset.galleryTab === group));
  }

  function buildHTML() {
    let dotsHTML = "";
    for (let i = 0; i < 9; i++) {
      dotsHTML += `<li class="dot"><button data-gallery-dot="${i}" aria-label="Go to slide ${i + 1}" class="${i === 0 ? "active" : ""}"></button></li>`;
    }
    let tabsHTML = TABS.map((t, i) => `<button class="gallery-tab ${i === 0 ? "active" : ""}" data-gallery-tab="${t.key}">${t.label}</button>`).join("");

    return `
      <section id="entertainment-gallery" class="section-entertainment theme-dark" style="background:#1c1c1e">
        <div class="container">
          <h2 class="section-headline reveal">Endless entertainment.</h2>
        </div>
        <div class="gallery-tabs">${tabsHTML}</div>
        <div class="gallery-banner">
          <img id="gallery-bg" src="images/gallery/tv-ted-lasso.jpg" alt="" class="gallery-bg">
          <div class="gallery-content">
            <div class="gallery-top">
              <img id="gallery-logo" src="images/gallery/logo-hero-light.png" alt="" class="gallery-logo">
            </div>
            <div class="gallery-bottom">
              <p id="gallery-title" class="gallery-title">Ted Lasso</p>
              <p id="gallery-note" class="gallery-note">Comedy — New season.</p>
              <button id="gallery-cta" class="button button-neutral">Stream now</button>
            </div>
          </div>
        </div>
        <div class="gallery-nav">
          <button id="gallery-playpause" class="gallery-playpause" aria-label="Pause">
            <svg class="icon-pause" viewBox="0 0 56 56" width="24" height="24"><rect x="18" y="16" width="6" height="24" rx="1" fill="#f5f5f7"/><rect x="32" y="16" width="6" height="24" rx="1" fill="#f5f5f7"/></svg>
            <svg class="icon-play" viewBox="0 0 56 56" width="24" height="24" style="display:none"><polygon points="20,16 40,28 20,40" fill="#f5f5f7"/></svg>
          </button>
          <ul class="gallery-dots">${dotsHTML}</ul>
        </div>
      </section>`;
  }

  function init() {
    const placeholder = document.getElementById("gallery-placeholder");
    if (placeholder) placeholder.outerHTML = buildHTML();

    const el = getEls();
    if (!el.wrap) return;

    el.tabs.forEach((t) => {
      t.addEventListener("click", () => switchGroup(t.dataset.galleryTab));
    });

    el.dots.forEach((d) => {
      d.addEventListener("click", () => {
        currentSlide = parseInt(d.dataset.galleryDot, 10);
        render(currentSlide);
        if (!paused) startAutoplay();
      });
    });

    el.playPauseBtn.addEventListener("click", () => {
      paused = !paused;
      el.playPauseBtn.querySelector(".icon-pause").style.display = paused ? "none" : "block";
      el.playPauseBtn.querySelector(".icon-play").style.display = paused ? "block" : "none";
      el.playPauseBtn.setAttribute("aria-label", paused ? "Play" : "Pause");
      if (!paused) startAutoplay();
      else stopAutoplay();
    });

    el.wrap.addEventListener("mouseenter", () => { paused = true; stopAutoplay(); });
    el.wrap.addEventListener("mouseleave", () => { paused = false; startAutoplay(); });

    startAutoplay();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
