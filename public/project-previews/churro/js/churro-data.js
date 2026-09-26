/*
 * Local data for the "Destacados" and "Productos Más Vendidos" sections.
 * In the original site both lists were read live from Firebase Firestore
 * (collections "destacados" and "featured"). The portfolio preview no
 * longer talks to Firebase, and the original names, flavours, prices and
 * descriptions were never kept locally, so only the product images that
 * the restoration layer had already mapped to local files are listed here.
 * The bundle renders name/sabores/price/description only when present:
 * add them here if the real values are ever recovered, never guess them.
 */
window.HOLY_CHURRO_DATA = {
  destacados: [
    { id: "combo_01", imagen: "img/products/combo-12-churros.jpg" },
    { id: "combo_02", imagen: "img/products/combo-3-churro.jpg" },
    { id: "combo_03", imagen: "img/products/combo-6-churros.jpg" },
  ],
  featured: [
    { id: "morral", imagen: "img/products/morral-feo.png" },
    { id: "sweater", imagen: "img/products/sweater.png" },
    { id: "tshirt", imagen: "img/products/tshirt.png" },
    { id: "taza", imagen: "img/products/taza-dona.png" },
  ],
};
