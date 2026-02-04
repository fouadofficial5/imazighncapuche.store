/* =========================================================
   IMAZIGHN HOODIES — JAVASCRIPT CORE
   Compatible with index.html + styles.css
   ========================================================= */

/* =========================
   GLOBAL CONFIG
   ========================= */

// 📞 رقم الواتساب (بدّله متى بغيت)
const WHATSAPP_NUMBER = "2120642138756";

// 💰 العملة
const CURRENCY = "MAD";

// 📏 المقاسات المتوفرة
const AVAILABLE_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

// 🎨 أنواع الشعار
const LOGO_VARIANTS = {
  amazigh_colors: "ألوان أمازيغية",
  white: "شعار أبيض",
  black: "شعار أسود"
};

// 🎽 ألوان الكابوش
const HOODIE_COLORS = {
  hoodie_black: "كابوش أسود",
  hoodie_white: "كابوش أبيض"
};

/* =========================
   PRODUCTS DATA (✏️ عدّل هنا)
   ========================= */

const PRODUCTS = [
  {
    id: "imazighn-kalaat",
    title: "IMAZIGHN Hoodie",
    city: "Kalaat M’Gouna",
    basePrice: 249,
    description: "كابوش أمازيغي بطباعة ⵣ — مدينة قلعة مݣونة.",
    images: {
      main: "https://via.placeholder.com/800x800?text=Kalaat+Main",
      gallery: [
        "https://via.placeholder.com/800x800?text=Kalaat+Image+1",
        "https://via.placeholder.com/800x800?text=Kalaat+Image+2",
        "https://via.placeholder.com/800x800?text=Kalaat+Image+3"
      ]
    }
  },
  {
    id: "imazighn-tinghir",
    title: "IMAZIGHN Hoodie",
    city: "Tinghir",
    basePrice: 249,
    description: "تصميم أمازيغي أصلي مستوحى من مدينة تنغير.",
    images: {
      main: "https://via.placeholder.com/800x800?text=Tinghir+Main",
      gallery: [
        "https://via.placeholder.com/800x800?text=Tinghir+Image+1",
        "https://via.placeholder.com/800x800?text=Tinghir+Image+2",
        "https://via.placeholder.com/800x800?text=Tinghir+Image+3"
      ]
    }
  },
  {
    id: "imazighn-zagora",
    title: "IMAZIGHN Hoodie",
    city: "Zagora",
    basePrice: 249,
    description: "شعار IMAZIGHN مستوحى من زاكورة.",
    images: {
      main: "https://via.placeholder.com/800x800?text=Zagora+Main",
      gallery: [
        "https://via.placeholder.com/800x800?text=Zagora+Image+1",
        "https://via.placeholder.com/800x800?text=Zagora+Image+2",
        "https://via.placeholder.com/800x800?text=Zagora+Image+3"
      ]
    }
  },
  {
    id: "imazighn-agadir",
    title: "IMAZIGHN Hoodie",
    city: "Agadir",
    basePrice: 249,
    description: "كابوش أمازيغي أنيق — مدينة أكادير.",
    images: {
      main: "https://via.placeholder.com/800x800?text=Agadir+Main",
      gallery: [
        "https://via.placeholder.com/800x800?text=Agadir+Image+1",
        "https://via.placeholder.com/800x800?text=Agadir+Image+2",
        "https://via.placeholder.com/800x800?text=Agadir+Image+3"
      ]
    }
  },
  {
    id: "imazighn-classic",
    title: "IMAZIGHN Hoodie",
    city: "بدون مدينة",
    basePrice: 239,
    description: "نسخة عامة بدون اسم مدينة — ستايل أمازيغي خالص.",
    images: {
      main: "https://via.placeholder.com/800x800?text=Classic+Main",
      gallery: [
        "https://via.placeholder.com/800x800?text=Classic+Image+1",
        "https://via.placeholder.com/800x800?text=Classic+Image+2",
        "https://via.placeholder.com/800x800?text=Classic+Image+3"
      ]
    }
  }
];

/* =========================
   DOM ELEMENTS
   ========================= */

const productsGrid = document.getElementById("productsGrid");
const productModal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalPrice = document.getElementById("modalPrice");
const modalMainImage = document.getElementById("modalMainImage");
const modalThumbs = document.getElementById("modalThumbs");

const pickCity = document.getElementById("pickCity");
const pickLogoVariant = document.getElementById("pickLogoVariant");
const pickHoodieColor = document.getElementById("pickHoodieColor");
const pickSize = document.getElementById("pickSize");
const pickNote = document.getElementById("pickNote");

const buyViaWhatsAppBtn = document.getElementById("buyViaWhatsAppBtn");

/* =========================
   INIT
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  populateSizes();
});

/* =========================
   RENDER PRODUCTS
   ========================= */

function renderProducts() {
  productsGrid.innerHTML = "";

  PRODUCTS.forEach(product => {
    const card = document.createElement("div");
    card.className = "productCard";

    card.innerHTML = `
      <div class="productCard__image">
        <img src="${product.images.main}" alt="${product.title} ${product.city}">
      </div>
      <div class="productCard__body">
        <h3 class="productCard__title">${product.title}</h3>
        <p class="productCard__city">${product.city}</p>
        <p class="productCard__price">${product.basePrice} ${CURRENCY}</p>
        <button class="btn btn--primary">عرض / شراء</button>
      </div>
    `;

    card.querySelector("button").addEventListener("click", () => {
      openProductModal(product);
    });

    productsGrid.appendChild(card);
  });
}

/* =========================
   MODAL LOGIC
   ========================= */

function openProductModal(product) {
  modalTitle.textContent = product.title;
  modalSubtitle.textContent = product.city;
  modalPrice.textContent = product.basePrice;

  // Main image
  modalMainImage.innerHTML = `<img src="${product.images.main}" alt="">`;

  // Thumbnails
  modalThumbs.innerHTML = "";
  product.images.gallery.forEach(img => {
    const thumb = document.createElement("img");
    thumb.src = img;
    thumb.addEventListener("click", () => {
      modalMainImage.innerHTML = `<img src="${img}" alt="">`;
    });
    modalThumbs.appendChild(thumb);
  });

  // City select
  pickCity.innerHTML = `<option>${product.city}</option>`;

  productModal.showModal();

  buyViaWhatsAppBtn.onclick = () => {
    sendWhatsAppOrder(product);
  };
}

/* =========================
   SIZE SELECT
   ========================= */

function populateSizes() {
  AVAILABLE_SIZES.forEach(size => {
    const opt = document.createElement("option");
    opt.value = size;
    opt.textContent = size;
    pickSize.appendChild(opt);
  });
}

/* =========================
   WHATSAPP ORDER
   ========================= */

function sendWhatsAppOrder(product) {
  const message = `
طلب جديد 🛒
------------------
📦 المنتج: ${product.title}
🏙️ المدينة: ${pickCity.value}
🎨 الشعار: ${LOGO_VARIANTS[pickLogoVariant.value]}
🎽 لون الكابوش: ${HOODIE_COLORS[pickHoodieColor.value]}
📏 المقاس: ${pickSize.value}
💰 السعر: ${product.basePrice} ${CURRENCY}
📝 ملاحظة: ${pickNote.value || "لا توجد"}
------------------
`.trim();

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
