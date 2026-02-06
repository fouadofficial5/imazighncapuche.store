/* =========================================================
   IMAZIGHN™ STORE – PROFESSIONAL JAVASCRIPT
   WhatsApp COD • Mobile First • Clean UX
   ========================================================= */

/* ================= SETTINGS ================= */

// رقم الواتساب بدون +
const WHATSAPP_NUMBER = "212642138756";

// السعر الثابت
const PRICE = 279;

// العملة
const CURRENCY = "DH";

/* ================= HELPERS ================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function encode(text) {
  return encodeURIComponent(text);
}

/* ================= YEAR ================= */

const yearEl = $("#year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* ================= MOBILE NAV ================= */

const navToggle = $("#navToggle");
const mobileNav = $("#mobileNav");

if (navToggle && mobileNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.hidden = isOpen;
  });

  $$("#mobileNav a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.hidden = true;
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ================= PRODUCT MODAL ================= */

const modal = $("#productModal");
const modalOverlay = modal?.querySelector(".modal__overlay");
const modalCloseBtns = modal?.querySelectorAll("[data-close]");

const pdpTitle = $("#pdpTitle");
const pdpPrice = $("#pdpPrice");
const pdpDesc = $("#pdpDesc");
const mainImg = $("#pdpMainImg");
const thumbFrontImg = $("#thumbFrontImg");
const thumbBackImg = $("#thumbBackImg");
const thumbFront = $("#thumbFront");
const thumbBack = $("#thumbBack");

let currentProduct = {};

/* Open product */
$$(".js-open-product").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".productCard");
    if (!card) return;

    currentProduct = {
      id: card.dataset.id,
      title: card.dataset.title,
      price: card.dataset.price,
      desc: card.dataset.desc,
      frontImg: card.dataset.frontImg,
      backImg: card.dataset.backImg
    };

    pdpTitle.textContent = currentProduct.title;
    pdpPrice.textContent = currentProduct.price;
    pdpDesc.textContent = currentProduct.desc;

    mainImg.src = currentProduct.frontImg;
    thumbFrontImg.src = currentProduct.frontImg;
    thumbBackImg.src = currentProduct.backImg;

    thumbFront.classList.add("is-active");
    thumbBack.classList.remove("is-active");

    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

/* Close modal */
function closeModal() {
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalOverlay?.addEventListener("click", closeModal);
modalCloseBtns?.forEach(btn => btn.addEventListener("click", closeModal));

/* Switch images */
thumbFront?.addEventListener("click", () => {
  mainImg.src = currentProduct.frontImg;
  thumbFront.classList.add("is-active");
  thumbBack.classList.remove("is-active");
});

thumbBack?.addEventListener("click", () => {
  mainImg.src = currentProduct.backImg;
  thumbBack.classList.add("is-active");
  thumbFront.classList.remove("is-active");
});

/* ================= FILTER PRODUCTS ================= */

$$(".filterBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    $$(".filterBtn").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    const filter = btn.dataset.filter;
    $$(".productCard").forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

/* ================= ORDER FORM ================= */

const orderForm = $("#orderForm");

orderForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const size = $("#sizeSelect").value;
  const logoColor = $("#logoColorSelect").value;
  const shirtColor = document.querySelector("input[name='shirtColor']:checked")?.value;

  const fullName = $("#fullName").value.trim();
  const phone = $("#phone").value.trim();
  const city = $("#city").value.trim();
  const postal = $("#postal").value.trim();
  const address = $("#address").value.trim();
  const notes = $("#notes").value.trim();

  if (!size || !logoColor || !shirtColor) {
    alert("❌ المرجو اختيار المقاس ولون القميص ولون الشعار.");
    return;
  }

  if (!fullName || !phone || !city || !postal || !address) {
    alert("❌ المرجو ملء جميع معلومات الشحن.");
    return;
  }

  /* WhatsApp Message */
  let message = `
🛍️ *طلب جديد – IMAZIGHN™*

📦 *المنتج:* ${currentProduct.title}
📏 *المقاس:* ${size}
👕 *لون القميص:* ${shirtColor}
🎨 *لون الشعار:* ${logoColor}

💰 *السعر:* ${PRICE} ${CURRENCY}
🚚 *الشحن:* مجاني
💳 *الدفع:* عند الاستلام

👤 *الاسم:* ${fullName}
📞 *الهاتف:* ${phone}
🏙️ *المدينة:* ${city}
📮 *الكود البريدي:* ${postal}
📍 *العنوان:* ${address}
📝 *ملاحظة:* ${notes || "—"}

🙏 شكراً لاختياركم IMAZIGHN™
`;

  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(message)}`;

  window.open(whatsappURL, "_blank");
});

/* ================= SUPPORT WHATSAPP ================= */

const supportBtn = $("#supportWhatsapp");
if (supportBtn) {
  supportBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const msg = "السلام عليكم، عندي سؤال بخصوص قمصان IMAZIGHN™.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encode(msg)}`, "_blank");
  });
}

/* ================= BACK TO TOP ================= */

const toTop = $("#toTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    toTop.hidden = false;
  } else {
    toTop.hidden = true;
  }
});

toTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
