/* =========================================================
   IMAZIGHN™ STORE – JavaScript Core
   Author: You
   File: app.js
   ========================================================= */

/* ------------------------------
   SETTINGS (EDIT HERE ONLY)
------------------------------- */

// رقم الواتساب (بدون +)
const WHATSAPP_NUMBER = "2120642138756";

// العملة
const CURRENCY = "MAD";

// المقاسات المتوفرة
const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

// ألوان الكابوش
const HOODIE_COLORS = [
  { id: "black", label: "أسود" },
  { id: "white", label: "أبيض" }
];

// أنواع الشعار
const LOGO_VARIANTS = [
  { id: "amazigh", label: "ألوان أمازيغية" },
  { id: "white", label: "أبيض" },
  { id: "black", label: "أسود" }
];

/* ------------------------------
   PRODUCTS DATA (EDITABLE)
   🔴 هنا تبدل:
   - العناوين
   - الأثمنة
   - المدن
   - روابط الصور
------------------------------- */

const PRODUCTS = [
  {
    id: "tinghir-amazigh",
    city: "تنغير",
    title: "IMAZIGHN – Tinghir",
    price: 299,
    logoVariant: "amazigh",
    images: [
      "imazighn_colors_tinghir.png",
      "imazighn_black_tinghir.png",
      "imazighn_white_tinghir.png",
      "https://via.placeholder.com/600x450?text=Tinghir+Amazigh+4"
    ]
  },
  {
    id: "tinghir-white",
    city: "تنغير",
    title: "IMAZIGHN – Tinghir (White)",
    price: 299,
    logoVariant: "white",
    images: [
      "imazighn_white_tinghir.png",
      "imazighn_black_tinghir.png",
      "imazighn_colors_tinghir.png",
      "https://via.placeholder.com/600x450?text=Tinghir+White+4"
    ]
  },
  {
    id: "zagora-amazigh",
    city: "زاكورة",
    title: "IMAZIGHN – Zagora",
    price: 319,
    logoVariant: "amazigh",
    images: [
      "imazighn_colors_zagora.png",
      "imazighn_black_zagora.png",
      "imazighn_white_zagora.png",
      "https://via.placeholder.com/600x450?text=Zagora+Amazigh+4"
    ]
  },
  {
    id: "agadir-black",
    city: "أكادير",
    title: "IMAZIGHN – Agadir",
    price: 329,
    logoVariant: "black",
    images: [
      "https://fouadofficial5.github.io/imazighncapuche.store/images/imazighn_agadir/imazighn_black_agadir.png",
      "https://fouadofficial5.github.io/imazighncapuche.store/images/imazighn_agadir/imazighn_colors_agadir.png",
      "https://fouadofficial5.github.io/imazighncapuche.store/images/imazighn_agadir/imazighn_white_agadir.png",
      "https://via.placeholder.com/600x450?text=Agadir+Black+4"
    ]
  },
  {
    id: "imazighn-classic",
    city: "—",
    title: "IMAZIGHN – Classic",
    price: 279,
    logoVariant: "amazigh",
    images: [
      "https://fouadofficial5.github.io/imazighncapuche.store/images/imazighn/imazighn_colors.png",
      "https://fouadofficial5.github.io/imazighncapuche.store/images/imazighn/imazighn_black.png",
      "https://fouadofficial5.github.io/imazighncapuche.store/images/imazighn/imazighn_white.png",
      "https://via.placeholder.com/600x450?text=IMAZIGHN+Classic+4"
    ]
  }
];


/* ------------------------------
   DOM ELEMENTS
------------------------------- */

const productsGrid = document.getElementById("productsGrid");
const filterCity = document.getElementById("filterCity");
const filterLogo = document.getElementById("filterLogoVariant");
const filterColor = document.getElementById("filterHoodieColor");
const heroImage = document.getElementById("heroImage");
const heroPrice = document.getElementById("heroPrice");
const navToggle = document.getElementById("navToggle");

/* ------------------------------
   INIT
------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initFilters();
  renderProducts(PRODUCTS);
  setHeroProduct(PRODUCTS[0]);
  document.getElementById("yearNow").textContent = new Date().getFullYear();
});

/* ------------------------------
   NAVIGATION
------------------------------- */

function initNavigation() {
  if (!navToggle) return;
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });
}

/* ------------------------------
   FILTERS
------------------------------- */

function initFilters() {
  // Cities
  const cities = [...new Set(PRODUCTS.map(p => p.city))];
  cities.forEach(city => {
    const opt = document.createElement("option");
    opt.value = city;
    opt.textContent = city;
    filterCity.appendChild(opt);
  });

  filterCity.addEventListener("change", applyFilters);
  filterLogo.addEventListener("change", applyFilters);
  filterColor.addEventListener("change", applyFilters);
}

function applyFilters() {
  let filtered = [...PRODUCTS];

  if (filterCity.value !== "all") {
    filtered = filtered.filter(p => p.city === filterCity.value);
  }

  if (filterLogo.value !== "all") {
    filtered = filtered.filter(p => p.logoVariant === filterLogo.value);
  }

  // لون الكابوش (حالياً فقط اختيار – يمكن ربطه بالطباعة لاحقاً)
  renderProducts(filtered);
}

/* ------------------------------
   RENDER PRODUCTS
------------------------------- */

function renderProducts(list) {
  productsGrid.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.images[0]}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p class="price">${product.price} ${CURRENCY}</p>
      <button class="btn btn--primary">شراء</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      openOrder(product);
    });

    productsGrid.appendChild(card);
  });
}

/* ------------------------------
   HERO PRODUCT
------------------------------- */

function setHeroProduct(product) {
  if (!heroImage || !heroPrice) return;
  heroImage.style.backgroundImage = `url(${product.images[0]})`;
  heroImage.style.backgroundSize = "cover";
  heroImage.style.backgroundPosition = "center";
  heroPrice.textContent = `${product.price} ${CURRENCY}`;
}

/* ------------------------------
   ORDER / WHATSAPP
------------------------------- */

function openOrder(product) {
  const size = prompt(`اختر المقاس:\n${SIZES.join(" / ")}`, "M");
  if (!size) return;

  const hoodieColor = prompt("لون الكابوش: أسود أو أبيض", "أسود");
  if (!hoodieColor) return;

  const message = `
سلام،
بغيت نطلب كابوش:

🧵 المنتج: ${product.title}
🏙️ المدينة: ${product.city}
🎨 نوع الشعار: ${getLogoLabel(product.logoVariant)}
🖤 لون الكابوش: ${hoodieColor}
📏 المقاس: ${size}
💰 الثمن: ${product.price} ${CURRENCY}

شكراً
`.trim();

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

/* ------------------------------
   HELPERS
------------------------------- */

function getLogoLabel(id) {
  const l = LOGO_VARIANTS.find(v => v.id === id);
  return l ? l.label : id;
}
