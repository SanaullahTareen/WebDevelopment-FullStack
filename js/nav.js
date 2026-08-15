/* ==========================================================================
   Apple.com Clone — Global navigation
   Builds the nav bar + mega-menus + mobile menu, binds interactions.
   ========================================================================== */
(function () {
  "use strict";

  const ICONS = {
    apple: `<svg viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg">
      <path d="m13.07 30.82c-1.68 1.3-3.47 1.26-4.61.41-1.14-.85-2.21-.83-3.34 0-1.44 1.09-3.27 1.22-4.58.41-2.27-1.36-3.16-4.29-3.53-7.02-.16-1.21-.24-2.42.23-3.73 1.06-2.98 3.9-3.14 4.88-3.14.63 0 1.38.2 2.22.67.7.38 1.22.67 1.88.67.43 0 .86-.1 1.26-.18.38-.08.72-.16 1.07-.16 2.64 0 4.23 1.65 4.61 4.39.67 4.91-3.72 8.33-5.2 9.84z"/>
      <path d="m11.39 7.2c.11-.34.17-.68.17-1.02 0-.93-.29-1.88-.92-2.55-.53-.55-1.35-.98-2.15-1.02h-.03c-.63 0-1.42.42-1.83.72-.66.48-1.26 1.17-1.52 1.89-.34.92-.27 1.86.24 2.65.41.64 1.12 1.16 1.97 1.35.55.12 1.09.14 1.59.05.71-.13 1.37-.41 1.97-.81z"/>
    </svg>`,
    search: `<svg viewBox="0 0 15 44" xmlns="http://www.w3.org/2000/svg">
      <path d="m14.298,27.202 l-3.87,-3.87 c0.701,-0.929 1.122,-2.081 1.122,-3.332 c0,-3.06 -2.489,-5.55 -5.55,-5.55 c-3.06,0 -5.55,2.49 -5.55,5.55 s2.49,5.55 5.55,5.55 c1.251,0 2.403,-0.421 3.332,-1.122 l3.87,3.87 c0.151,0.151 0.35,0.228 0.548,0.228 s0.396,-0.076 0.548,-0.228 c0.306,-0.306 0.306,-0.801 0,-1.103 z m-10.048,-5.55 c0,-1.663 1.357,-3.02 3.02,-3.02 s3.02,1.357 3.02,3.02 s-1.357,3.02 -3.02,3.02 s-3.02,-1.357 -3.02,-3.02 z"/>
    </svg>`,
    bag: `<svg viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg">
      <path d="m11.35 15.13 h-1.42 c-.27-1.86-1.84-3.3-3.79-3.3 -2.07 0-3.71 1.48-3.84 3.3 h-1.42c-1.36 0-2.46 1.13-2.46 2.53v15.13c0 1.36 1.09 2.46 2.46 2.46h10.24c1.36 0 2.46-1.13 2.46-2.53v-15.13c0-1.41-1.09-2.53-2.46-2.53zm-5.36-1.77c1.11 0 2.1.76 2.55 1.77h-5.09c.44-1.01 1.44-1.77 2.55-1.77zm5.09 19.47h-10.24c-.4 0-.72-.33-.72-.73v-15.13c0-.4.32-.72.72-.72h10.24c.4 0 .72.32.72.72v15.13c0 .4-.33.73-.72.73z"/>
    </svg>`,
    close: `<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path d="m15.55,12.1 2.87,2.87c.41.41.41 1.07 0 1.48 l-1.48,1.48c-.41.41-1.07.41-1.48 0l-2.87-2.87 -2.87,2.87c-.41.41-1.07.41-1.48 0l-1.48-1.48c-.41-.41-.41-1.07 0-1.48l2.87-2.87 -2.87-2.87c-.41-.41-.41-1.07 0-1.48l1.48-1.48c.41-.41 1.07-.41 1.48 0l2.87,2.87 2.87-2.87c.41-.41 1.07-.41 1.48 0l1.48,1.48c.41.41.41 1.07 0 1.48z"/>
    </svg>`,
    burger: `<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M1,5 L17,5 M1,9 L17,9 M1,13 L17,13" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,
  };

  const MENUS = {
    Store: [
      { title: "Shop and Learn", links: ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"] },
      { title: "Apple Wallet", links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"] },
      { title: "Account", links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"] },
    ],
    Mac: [
      { title: "Explore Mac", links: ["Explore All Mac", "MacBook Air", "MacBook", "MacBook Pro", "iMac", "Mac mini", "Mac Studio", "Mac Pro", "Compare Mac"] },
      { title: "Shop Mac", links: ["Shop Mac", "Mac Accessories", "Apple Trade In", "Financing", "Order Status"] },
      { title: "More from Mac", links: ["Mac Support", "AppleCare+ for Mac", "macOS", "Apps by Apple"] },
    ],
    iPad: [
      { title: "Explore iPad", links: ["Explore All iPad", "iPad", "iPad Air", "iPad mini", "iPad Pro", "Apple Pencil", "Magic Keyboard"] },
      { title: "Shop iPad", links: ["Shop iPad", "iPad Accessories", "Apple Trade In", "Financing"] },
      { title: "More from iPad", links: ["iPad Support", "AppleCare+ for iPad", "iPadOS"] },
    ],
    iPhone: [
      { title: "Explore iPhone", links: ["Explore All iPhone", "iPhone 17 Pro", "iPhone 17", "iPhone 17e", "iPhone Air", "iPhone 16"] },
      { title: "Shop iPhone", links: ["Shop iPhone", "iPhone Accessories", "Apple Trade In", "Financing", "Carrier Deals"] },
      { title: "More from iPhone", links: ["iPhone Support", "AppleCare+ for iPhone", "iOS", "Apple Intelligence"] },
    ],
    Watch: [
      { title: "Explore Apple Watch", links: ["Explore All Apple Watch", "Apple Watch Series 11", "Apple Watch SE", "Apple Watch Ultra 3"] },
      { title: "Shop Apple Watch", links: ["Shop Apple Watch", "Apple Watch Bands", "Apple Watch Accessories"] },
      { title: "More from Watch", links: ["Apple Watch Support", "AppleCare+", "watchOS"] },
    ],
    Vision: [
      { title: "Explore Apple Vision Pro", links: ["Explore All Apple Vision Pro", "Apple Vision Pro", "Compare"] },
      { title: "More from Vision", links: ["Apple Vision Pro Support", "AppleCare+", "visionOS"] },
    ],
    AirPods: [
      { title: "Explore AirPods", links: ["Explore All AirPods", "AirPods 4", "AirPods Pro 2", "AirPods Max"] },
      { title: "More from AirPods", links: ["AirPods Support", "AppleCare+"] },
    ],
    "TV & Home": [
      { title: "Explore TV & Home", links: ["Explore All TV & Home", "Apple TV+", "Apple TV 4K", "HomePod", "HomePod mini"] },
      { title: "More from TV & Home", links: ["Apple TV+ Support", "HomePod Support", "AppleCare+"] },
    ],
    Entertainment: [
      { title: "Entertainment", links: ["Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books"] },
      { title: "Services", links: ["iCloud+", "Apple One", "App Store"] },
    ],
    Accessories: [
      { title: "Shop Accessories", links: ["All Accessories", "AirTag", "Mac", "iPhone", "iPad", "Apple Watch", "AirPods"] },
      { title: "Explore Accessories", links: ["Featured Accessories", "MagSafe", "Gift Cards"] },
    ],
    Support: [
      { title: "AppleCare+", links: ["AppleCare+", "Get a Repair", "Coverage Check"] },
      { title: "Helpful Topics", links: ["Apple Support", "Apple Support App", "Contact Us"] },
      { title: "Resources", links: ["Community", "Apple Store App", "Apple Trade In", "Financing"] },
    ],
  };

  const NAV_ORDER = ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "Entertainment", "Accessories", "Support"];

  function buildNav(currentPage) {
    let linksHTML = "";
    NAV_ORDER.forEach((name) => {
      const id = name.replace(/[^a-z]/gi, "").toLowerCase();
      let colsHTML = "";
      MENUS[name].forEach((col) => {
        if (!col.links.length) return;
        let aHTML = col.links.map((l) => `<a href="#">${l}</a>`).join("");
        colsHTML += `<div class="globalnav-col"><h4>${col.title}</h4>${aHTML}</div>`;
      });
      linksHTML += `
        <li class="globalnav-item" data-menu="${id}">
          <a class="globalnav-link" href="#">${name}</a>
          <div class="globalnav-panel"><div class="globalnav-panel-inner">${colsHTML}</div></div>
        </li>`;
    });

    return `
    <header id="globalnav" class="globalnav">
      <nav class="globalnav-content" aria-label="Global">
        <ul class="globalnav-list">
          <li class="globalnav-item globalnav-item-icon">
            <a class="globalnav-link" href="index.html" aria-label="Apple">${ICONS.apple}</a>
          </li>
          ${linksHTML}
          <li class="globalnav-item globalnav-item-icon globalnav-item-search">
            <a class="globalnav-link" href="#">${ICONS.search}<span class="visuallyhidden">Search</span></a>
          </li>
          <li class="globalnav-item globalnav-item-icon globalnav-item-bag">
            <a class="globalnav-link" href="#">${ICONS.bag}<span class="visuallyhidden">Bag</span></a>
          </li>
          <li class="globalnav-item globalnav-item-icon globalnav-item-hamburger">
            <button class="globalnav-burger" aria-label="Menu" aria-expanded="false">${ICONS.burger}</button>
          </li>
        </ul>
      </nav>
      <div class="globalnav-scrim"></div>
      <div class="globalnav-mobile">
        <div class="globalnav-mobile-head">
          <span></span>
          <button class="globalnav-mobile-close" aria-label="Close">${ICONS.close}</button>
        </div>
        <ul class="globalnav-mobile-list">
          ${NAV_ORDER.map((name) => {
            let subLinks = MENUS[name].flatMap((c) => c.links).slice(0, 8);
            let subHTML = subLinks.map((l) => `<a href="#">${l}</a>`).join("");
            return `<li class="m-item"><a class="m-link" href="#">${name}<span class="caret"></span></a><div class="m-sub">${subHTML}</div></li>`;
          }).join("")}
        </ul>
      </div>
    </header>`;
  }

  function buildFooter() {
    return `
    <footer class="globalfooter">
      <div class="footer-note">
        <p>More ways to shop: <a href="#">Find an Apple Store</a> or other retailer near you. Or call 1-800-MY-APPLE (1-800-692-7753).</p>
      </div>
      <div class="footer-columns">
        <div class="footer-col">
          <h3>Shop and Learn</h3>
          <a href="#">Store</a><a href="#">Mac</a><a href="#">iPad</a><a href="#">iPhone</a><a href="#">Watch</a><a href="#">Vision</a><a href="#">AirPods</a><a href="#">TV &amp; Home</a><a href="#">AirTag</a><a href="#">Accessories</a><a href="#">Gift Cards</a>
        </div>
        <div class="footer-col">
          <h3>Apple Wallet</h3>
          <a href="#">Wallet</a><a href="#">Apple Card</a><a href="#">Apple Pay</a><a href="#">Apple Cash</a>
          <h3 style="margin-top:18px;">Account</h3>
          <a href="#">Manage Your Apple Account</a><a href="#">Apple Store Account</a><a href="#">iCloud.com</a>
        </div>
        <div class="footer-col">
          <h3>Entertainment</h3>
          <a href="#">Apple One</a><a href="#">Apple TV+</a><a href="#">Apple Music</a><a href="#">Apple Arcade</a><a href="#">Apple Fitness+</a><a href="#">Apple News+</a><a href="#">Apple Podcasts</a><a href="#">Apple Books</a><a href="#">App Store</a>
        </div>
        <div class="footer-col">
          <h3>Apple Store</h3>
          <a href="#">Find a Store</a><a href="#">Genius Bar</a><a href="#">Today at Apple</a><a href="#">Group Reservations</a><a href="#">Apple Camp</a><a href="#">Apple Store App</a><a href="#">Certified Refurbished</a><a href="#">Apple Trade In</a><a href="#">Financing</a><a href="#">Order Status</a><a href="#">Shopping Help</a>
        </div>
        <div class="footer-col">
          <h3>For Business</h3>
          <a href="#">Apple and Business</a><a href="#">Shop for Business</a>
          <h3 style="margin-top:18px;">For Education</h3>
          <a href="#">Apple and Education</a><a href="#">Shop for K-12</a><a href="#">Shop for College</a>
          <h3 style="margin-top:18px;">For Healthcare</h3>
          <a href="#">Apple in Healthcare</a>
        </div>
        <div class="footer-col">
          <h3>Apple Values</h3>
          <a href="#">Accessibility</a><a href="#">Education</a><a href="#">Environment</a><a href="#">Inclusion and Diversity</a><a href="#">Privacy</a><a href="#">Racial Equity and Justice</a><a href="#">Supply Chain Innovation</a>
          <h3 style="margin-top:18px;">About Apple</h3>
          <a href="#">Newsroom</a><a href="#">Apple Leadership</a><a href="#">Career Opportunities</a><a href="#">Investors</a><a href="#">Ethics &amp; Compliance</a><a href="#">Events</a><a href="#">Contact Apple</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Copyright &copy; 2026 Apple Inc. All rights reserved.</p>
        <div class="footer-bottom-row">
          <div class="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sales and Refunds</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>
          <div class="footer-locale"><a href="#">United States</a></div>
        </div>
      </div>
    </footer>`;
  }

  function init() {
    const currentPage = location.pathname.match(/\/(iphone|mac|ipad|watch)\/?$/i)?.[1] || "";
    const placeholder = document.getElementById("globalnav-placeholder");
    if (placeholder) {
      placeholder.outerHTML = buildNav(currentPage);
    } else {
      document.body.insertAdjacentHTML("afterbegin", buildNav(currentPage));
    }

    const footerPlaceholder = document.getElementById("globalfooter-placeholder");
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = buildFooter();
    } else {
      document.body.insertAdjacentHTML("beforeend", buildFooter());
    }

    const nav = document.getElementById("globalnav");
    window.addEventListener("scroll", () => {
      nav?.classList.toggle("scrolled", window.scrollY > 10);
    }, { passive: true });

    let openMenu = null;
    const scrim = document.querySelector(".globalnav-scrim");
    const items = nav?.querySelectorAll(".globalnav-item[data-menu]") || [];

    function closeAllMenus() {
      items.forEach((i) => i.classList.remove("open"));
      scrim?.classList.remove("show");
      openMenu = null;
    }
    function openMenuFor(el) {
      closeAllMenus();
      el.classList.add("open");
      scrim?.classList.add("show");
      openMenu = el;
    }

    items.forEach((item) => {
      item.addEventListener("pointerenter", () => openMenuFor(item));
      item.addEventListener("pointerleave", () => {
        setTimeout(() => {
          if (!item.matches(":hover") && openMenu === item) closeAllMenus();
        }, 80);
      });
      const trigger = item.querySelector(".globalnav-link");
      trigger?.addEventListener("click", (e) => {
        e.preventDefault();
        if (item.classList.contains("open")) closeAllMenus();
        else openMenuFor(item);
      });
      trigger?.addEventListener("focusin", () => openMenuFor(item));
    });

    scrim?.addEventListener("click", closeAllMenus);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAllMenus();
    });

    const burgerBtn = document.querySelector(".globalnav-burger");
    const mobileMenu = document.querySelector(".globalnav-mobile");
    const mobileCloseBtn = document.querySelector(".globalnav-mobile-close");
    const mobileItems = document.querySelectorAll(".globalnav-mobile .m-item");

    burgerBtn?.addEventListener("click", () => {
      closeAllMenus();
      mobileMenu?.classList.add("open");
      burgerBtn.setAttribute("aria-expanded", "true");
    });
    mobileCloseBtn?.addEventListener("click", () => {
      mobileMenu?.classList.remove("open");
      burgerBtn?.setAttribute("aria-expanded", "false");
    });
    mobileItems.forEach((item) => {
      item.querySelector(".m-link")?.addEventListener("click", (e) => {
        e.preventDefault();
        item.classList.toggle("open");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
