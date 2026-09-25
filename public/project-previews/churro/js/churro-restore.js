/*
 * Restoration layer added while adapting Holy Churro for the portfolio.
 * The original data source for these sections (Firebase Storage combo
 * photos, and several third-party hotlinked product/Instagram images)
 * has gone dead since the site was built in 2019. This script swaps
 * those broken/fragile remote images for local copies once React has
 * rendered them, and replaces the "Nuestra Historia" slide with an
 * editorial layout, all without touching the app's own source or its
 * live Firestore data.
 */
(function () {
  var PRODUCT_IMAGE_MAP = [
    { match: "combo_01", src: "img/products/combo-12-churros.jpg" },
    { match: "combo_03", src: "img/products/combo-6-churros.jpg" },
    { match: "combo_02", src: "img/products/combo-3-churro.jpg" },
    { match: "png-school-bag", src: "img/products/morral-feo.png" },
    { match: "Sweater-PNG-Image", src: "img/products/sweater.png" },
    { match: "shirt-png-hd-ad-hd", src: "img/products/tshirt.png" },
    { match: "taza-con-foto-magia", src: "img/products/taza-dona.png" },
  ];

  var INSTAGRAM_IMAGES = [
    "img/instagram/post-1.jpg",
    "img/instagram/post-2.jpg",
    "img/instagram/post-3.jpg",
    "img/instagram/post-4.jpg",
    "img/instagram/post-5.jpg",
  ];

  var HISTORIA_HTML =
    '<div class="historia-restored__grid">' +
    '<div class="historia-restored__media"><img src="img/frontal.jpg" alt="Local de Holy Churro en Vicente López"></div>' +
    '<div class="historia-restored__copy">' +
    '<span class="historia-restored__year">2019</span>' +
    '<h2 class="historia-restored__title">Nuestra Historia</h2>' +
    '<p class="historia-restored__lede">Ponemos corazón en cada churro.</p>' +
    "<p>Fundamos Holy Churro en 2019 tratando de traer nuevos sabores y espectaculares creaciones a esta región donde poco se ofrecía. Fue un proceso largo, pero logramos crear un negocio de calidad para todos y todas las personas que nos visiten.</p>" +
    "</div>" +
    "</div>";

  function localizeProductImages() {
    var imgs = document.querySelectorAll('img[src^="http"]');
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      if (img.dataset.restored === "1") continue;
      for (var j = 0; j < PRODUCT_IMAGE_MAP.length; j++) {
        if (img.src.indexOf(PRODUCT_IMAGE_MAP[j].match) !== -1) {
          img.src = PRODUCT_IMAGE_MAP[j].src;
          img.dataset.restored = "1";
          break;
        }
      }
    }
  }

  function localizeInstagram() {
    var links = document.querySelectorAll(
      '.instagram-grid__item > a[style*="background-image"]'
    );
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      if (a.dataset.restored === "1") continue;
      a.style.backgroundImage =
        "url(" + INSTAGRAM_IMAGES[i % INSTAGRAM_IMAGES.length] + ")";
      a.removeAttribute("href");
      var img = a.querySelector("img");
      if (img) img.setAttribute("alt", "Publicación de Holy Churro en Instagram");
      a.dataset.restored = "1";
    }
  }

  function restoreHistoria() {
    var historia = document.getElementById("historia");
    if (!historia) return;
    var container = historia.querySelector(".contenedorro");
    if (!container || container.dataset.restored === "1") return;
    container.dataset.restored = "1";
    container.classList.add("historia-restored");
    container.innerHTML = HISTORIA_HTML;
  }

  function applyFixes() {
    localizeProductImages();
    localizeInstagram();
    restoreHistoria();
  }

  function start() {
    applyFixes();
    var root = document.getElementById("root");
    if (root && window.MutationObserver) {
      var observer = new MutationObserver(applyFixes);
      observer.observe(root, { childList: true, subtree: true });
    }
    // Safety net for the Firestore-backed sections, which render after
    // an async query resolves and may land after the observer attaches.
    setTimeout(applyFixes, 1500);
    setTimeout(applyFixes, 4000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
