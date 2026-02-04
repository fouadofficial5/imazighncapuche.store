/* =========================================================
   IMAZIGHN Store – app.js
   - All content (images/prices/text/whatsapp) is editable here.
   - Works with the provided HTML structure.
   ========================================================= */

(() => {
  "use strict";

  /* =========================================================
     1) EDIT HERE: Store Config
     ========================================================= */
  const STORE_CONFIG = {
    brandName: "IMAZIGHN",
    whatsappNumberE164: "+2120642138756", // ✅ عدّل الرقم هنا إذا تغيّر
    currency: "MAD",
    shippingText: "التوصيل مجاني لجميع مدن المغرب",
    basePrice: 199, // ✅ ثمن عرض (يمكنك تغييره)
    // رسالة “طلب سريع” بدون اختيار منتج
    quickWhatsAppMessage:
      "سلام، بغيت نسول على كابوش IMAZIGHN 👋\n" +
      "التوصيل: مجاني داخل المغرب.\n" +
      "ممكن تعطيني التفاصيل (الأثمنة/المقاسات/المدن المتوفرة)؟",

    // المدن المتوفرة
    cities: [
      { id: "kalaat_mgouna", label: "قلعة مگونة" },
      { id: "tinghir", label: "تنغير" },
      { id: "zagora", label: "زاكورة" },
      { id: "agadir", label: "أڭادير" },
      { id: "no_city", label: "بدون مدينة" },
    ],

    // ستايلات الشعار
    logoStyles: [
      { id: "amazigh_colors", label: "ألوان أمازيغية" },
      { id: "white", label: "أبيض" },
      { id: "black", label: "أسود" },
    ],

    // ألوان الكابوش المتوفرة
    hoodieColors: [
      { id: "black", label: "أسود" },
      { id: "white", label: "أبيض" },
    ],

    // المقاسات
    sizes: ["S", "M", "L", "XL", "XXL"],

    // روابط افتراضية للصور (Placeholder)
    // ✅ بدّل الروابط هنا أو على مستوى كل منتج داخل PRODUCTS.images
    placeholders: {
      heroImage: "", // ضع رابط صورة الهيرو هنا (اختياري)
      productFallback:
        "", // رابط بديل إذا ماكانش موجود
    },

    // نصوص معلومات (Info modal)
    infoPages: {
      shipping: {
        title: "الشحن والتوصيل",
        subtitle: "معلومات مهمة قبل الطلب",
        content: `
          <h3>التوصيل داخل المغرب</h3>
          <ul>
            <li><strong>التوصيل:</strong> مجاني لجميع المدن المغربية.</li>
            <li><strong>المدة:</strong> غالباً 1–3 أيام (قد تختلف حسب المدينة والضغط).</li>
            <li><strong>التأكيد:</strong> كنأكدوا معاك التفاصيل عبر واتساب قبل الإرسال.</li>
            <li><strong>التغليف:</strong> تغليف آمن ومحمي.</li>
          </ul>
          <p class="muted">ملاحظة: الثمن اللي كتشوف فالمتجر شامل التوصيل (حيلة تسويقية لتكون التجربة بسيطة وواضحة).</p>
        `,
      },
      privacy: {
        title: "الخصوصية",
        subtitle: "كيفاش كنستعملو المعلومات ديالك",
        content: `
          <h3>البيانات</h3>
          <p>هاد المتجر ماكيطلبش منك تسجيل حساب. الطلب كيكون عبر واتساب فقط.</p>
          <ul>
            <li>كنستعملو معلوماتك (الاسم/العنوان/الهاتف) غير باش نوصلو الطلب.</li>
            <li>ممكن تطلب حذف أي معلومات فأي وقت عبر واتساب.</li>
          </ul>
        `,
      },
      returns: {
        title: "سياسة الاستبدال",
        subtitle: "باش تكون مرتاح",
        content: `
          <h3>الاستبدال</h3>
          <ul>
            <li>إلى كان خطأ من جهتنا (لون/مقاس/طباعة): كنصلحو الوضع بأسرع وقت.</li>
            <li>إلى بغيتي تبدّل المقاس من بعد (بسبب اختيار خاطئ): كنحاولو نعاونوك حسب الحالة.</li>
          </ul>
          <p class="muted">حيت الطباعة عند الطلب، كنأكدوا معاك الاختيارات قبل ما نطبع.</p>
        `,
      },
      support: {
        title: "الدعم",
        subtitle: "حنا هنا باش نعاونوك",
        content: `
          <h3>الدعم عبر واتساب</h3>
          <p>إلى بغيتي مساعدة فالمقاس أو فالاختيار، سيفط لينا رسالة.</p>
          <ul>
            <li>رد سريع غالباً نفس النهار.</li>
            <li>اقتراح مقاس حسب الطول والوزن.</li>
            <li>تأكيد اللون والمدينة قبل الطباعة.</li>
          </ul>
        `,
      },
    },
  };

  /* =========================================================
     2) EDIT HERE: Products + Images
     - Each product can have 4 images:
       main + 3 styles (amazigh_colors, white, black)
     - Also you can include “mockups” (hoodie black/white) later.
     ========================================================= */
  const PRODUCTS = [
    {
      id: "p1",
      isBestSeller: true,
      tag: "الأكثر طلباً",
      title: "كابوش IMAZIGHN – (تنغير)",
      shortDesc: "شعار أمازيغي + مدينة تنغير • طباعة قوية • توصيل مجاني.",
      description:
        "كابوش بجودة ممتازة بطباعة أمازيغية احترافية. اختار المدينة والستايل ولون الكابوش والمقاس، وطلب مباشرة عبر واتساب برسالة جاهزة.",
      price: 199, // ✅ عدّل الثمن هنا
      defaultCity: "tinghir",
      images: {
        // ✅ ضع هنا روابط الصور ديالك
        main: "", // صورة رئيسية للكارت
        amazigh_colors: "", // ستايل الألوان
        white: "", // ستايل أبيض
        black: "", // ستايل أسود
        // اختياري: صور موكاب إضافية
        extra: ["", "", ""], // إذا بغيت 4 thumbs مختلفين
      },
    },
    {
      id: "p2",
      isNew: true,
      tag: "جديد",
      title: "كابوش IMAZIGHN – (قلعة مگونة)",
      shortDesc: "شعار أمازيغي + مدينة قلعة مگونة • تصميم نظيف وفاخر.",
      description:
        "تصميم فاخر مناسب للستايل اليومي. تقدر تختار: (ألوان/أبيض/أسود) + لون الكابوش + المقاس. التوصيل مجاني داخل المغرب.",
      price: 199,
      defaultCity: "kalaat_mgouna",
      images: {
        main: "",
        amazigh_colors: "",
        white: "",
        black: "",
        extra: ["", "", ""],
      },
    },
    {
      id: "p3",
      tag: "مدينة",
      title: "كابوش IMAZIGHN – (زاكورة)",
      shortDesc: "زاكورة • ثلاث ستايلات للشعار • مناسب للهدايا.",
      description:
        "مناسب للهدايا ولعشاق الهوية الأمازيغية. كابوش مريح وطباعة ثابتة. اطلب عبر واتساب.",
      price: 199,
      defaultCity: "zagora",
      images: {
        main: "",
        amazigh_colors: "",
        white: "",
        black: "",
        extra: ["", "", ""],
      },
    },
    {
      id: "p4",
      tag: "بدون مدينة",
      title: "كابوش IMAZIGHN – (بدون مدينة)",
      shortDesc: "الشعار فقط بدون مدينة • خيار نظيف وبسيط.",
      description:
        "إذا بغيتي الشعار فقط بلا مدينة، هذا هو الخيار المناسب. نفس الجودة ونفس الطباعة الاحترافية.",
      price: 199,
      defaultCity: "no_city",
      images: {
        main: "",
        amazigh_colors: "",
        white: "",
        black: "",
        extra: ["", "", ""],
      },
    },
  ];

  /* =========================================================
     3) Small Utilities
     ========================================================= */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const clampText = (s, max = 120) => (s.length > max ? s.slice(0, max - 1) + "…" : s);

  const formatPrice = (value) => {
    if (value === null || value === undefined || value === "") return "—";
    return `${Number(value).toFixed(0)} ${STORE_CONFIG.currency}`;
  };

  const cityLabel = (cityId) =>
    (STORE_CONFIG.cities.find((c) => c.id === cityId) || { label: "—" }).label;

  const styleLabel = (styleId) =>
    (STORE_CONFIG.logoStyles.find((s) => s.id === styleId) || { label: "—" }).label;

  const hoodieLabel = (hoodieId) =>
    (STORE_CONFIG.hoodieColors.find((h) => h.id === hoodieId) || { label: "—" }).label;

  const safeImage = (url) => url || STORE_CONFIG.placeholders.productFallback || "";

  const openWhatsApp = (message) => {
    const phone = STORE_CONFIG.whatsappNumberE164.replace(/[^\d+]/g, "");
    const encoded = encodeURIComponent(message);
    // wa.me requires country code, no "+"
    const waNumber = phone.startsWith("+") ? phone.slice(1) : phone;
    const url = `https://wa.me/${waNumber}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast("تم نسخ الرقم ✅");
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      toast("تم نسخ الرقم ✅");
    }
  };

  /* =========================================================
     4) Toast (mini notification)
     ========================================================= */
  let toastEl = null;
  const toast = (msg) => {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.style.position = "fixed";
      toastEl.style.left = "16px";
      toastEl.style.right = "16px";
      toastEl.style.bottom = "18px";
      toastEl.style.zIndex = "3000";
      toastEl.style.padding = "14px 16px";
      toastEl.style.borderRadius = "16px";
      toastEl.style.background = "rgba(20,20,22,0.92)";
      toastEl.style.backdropFilter = "blur(10px)";
      toastEl.style.color = "#fff";
      toastEl.style.border = "1px solid rgba(255,255,255,0.08)";
      toastEl.style.boxShadow = "0 16px 40px rgba(0,0,0,0.35)";
      toastEl.style.fontSize = "14px";
      toastEl.style.transform = "translateY(20px)";
      toastEl.style.opacity = "0";
      toastEl.style.transition = "all 260ms ease";
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    requestAnimationFrame(() => {
      toastEl.style.opacity = "1";
      toastEl.style.transform = "translateY(0)";
    });
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(() => {
      toastEl.style.opacity = "0";
      toastEl.style.transform = "translateY(20px)";
    }, 1800);
  };

  /* =========================================================
     5) UI References
     ========================================================= */
  const UI = {
    mobileMenu: $('[data-ui="mobileMenu"]'),
    productsGrid: $('[data-ui="productsGrid"]'),
    productModal: $('[data-ui="productModal"]'),
    infoModal: $('[data-ui="infoModal"]'),
    searchModal: $('[data-ui="searchModal"]'),
    cartModal: $('[data-ui="cartModal"]'),
    searchResults: $('[data-ui="searchResults"]'),
    cartItems: $('[data-ui="cartItems"]'),
  };

  /* =========================================================
     6) State
     ========================================================= */
  const state = {
    currentProductId: null,
    filters: {
      city: "all",
      logoStyle: "all",
      hoodieColor: "all",
    },
    searchQuery: "",
    cart: [],
  };

  /* =========================================================
     7) Content Binding on Page Load
     ========================================================= */
  function bindGlobal() {
    // Year
    const yearEl = $('[data-bind="year"]');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // WhatsApp number text in support area + footer
    const w1 = $('[data-bind="whatsappNumberText"]');
    const w2 = $('[data-bind="whatsappNumberTextFooter"]');
    if (w1) w1.textContent = STORE_CONFIG.whatsappNumberE164;
    if (w2) w2.textContent = STORE_CONFIG.whatsappNumberE164;

    // Base price in hero
    const basePrice = $('[data-bind="basePrice"]');
    if (basePrice) basePrice.textContent = formatPrice(STORE_CONFIG.basePrice);

    // Hero image (optional)
    const heroImg = $('[data-bind="heroImage"]');
    if (heroImg) heroImg.src = safeImage(STORE_CONFIG.placeholders.heroImage);

    // Cart count
    updateCartCount();
  }

  function bindProductsToCards() {
    // Fill the 4 existing cards in HTML (p1..p4)
    for (const p of PRODUCTS) {
      const titleEl = $(`[data-product-title="${p.id}"]`);
      const shortEl = $(`[data-product-short="${p.id}"]`);
      const priceEl = $(`[data-product-price="${p.id}"]`);
      const imgEl = $(`[data-product-image="${p.id}_main"]`);

      if (titleEl) titleEl.textContent = p.title;
      if (shortEl) shortEl.textContent = p.shortDesc;
      if (priceEl) priceEl.textContent = formatPrice(p.price);
      if (imgEl) imgEl.src = safeImage(p.images.main || p.images.amazigh_colors);

      // also set aria label maybe
      const card = $(`.card[data-product-id="${p.id}"]`);
      if (card) {
        card.setAttribute("aria-label", `فتح المنتج: ${p.title}`);
      }
    }
  }

  /* =========================================================
     8) Modal Helpers
     ========================================================= */
  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  /* =========================================================
     9) Product Modal Rendering
     ========================================================= */
  function getProductById(id) {
    return PRODUCTS.find((p) => p.id === id) || null;
  }

  function buildGalleryImages(product) {
    // 4 thumbs:
    // 0: main OR style amazigh_colors
    // 1: amazigh_colors
    // 2: white
    // 3: black
    // If product.images.extra has content, use it in priority.
    const extra = (product.images.extra || []).filter(Boolean);

    const thumbs = [];
    if (extra.length >= 4) {
      thumbs.push(...extra.slice(0, 4));
    } else {
      // fallback set
      thumbs.push(product.images.main || product.images.amazigh_colors || "");
      thumbs.push(product.images.amazigh_colors || product.images.main || "");
      thumbs.push(product.images.white || product.images.main || "");
      thumbs.push(product.images.black || product.images.main || "");
    }

    return thumbs.map(safeImage);
  }

  function renderProductModal(productId) {
    const product = getProductById(productId);
    if (!product) return;

    state.currentProductId = productId;

    // Title / subtitle
    const modalTitle = $('[data-bind="modalTitle"]', UI.productModal);
    const modalSubtitle = $('[data-bind="modalSubtitle"]', UI.productModal);
    const modalPrice = $('[data-bind="modalPrice"]', UI.productModal);
    const modalDesc = $('[data-bind="modalDesc"]', UI.productModal);

    if (modalTitle) modalTitle.textContent = product.title;
    if (modalSubtitle) modalSubtitle.textContent = STORE_CONFIG.shippingText;
    if (modalPrice) modalPrice.textContent = formatPrice(product.price);
    if (modalDesc) modalDesc.textContent = product.description;

    // Default selections
    const citySelect = $("#citySelect");
    const logoStyleSelect = $("#logoStyleSelect");
    const hoodieColorSelect = $("#hoodieColorSelect");
    const sizeSelect = $("#sizeSelect");
    const noteInput = $("#noteInput");

    if (citySelect) citySelect.value = product.defaultCity || "no_city";
    if (logoStyleSelect) logoStyleSelect.value = "amazigh_colors";
    if (hoodieColorSelect) hoodieColorSelect.value = "black";
    if (sizeSelect) sizeSelect.value = "M";
    if (noteInput) noteInput.value = "";

    // Gallery
    const thumbs = buildGalleryImages(product);
    const mainImg = $('[data-bind="modalMainImage"]', UI.productModal);
    if (mainImg) mainImg.src = thumbs[0] || safeImage(product.images.main);

    const t0 = $('[data-bind="thumb0"]', UI.productModal);
    const t1 = $('[data-bind="thumb1"]', UI.productModal);
    const t2 = $('[data-bind="thumb2"]', UI.productModal);
    const t3 = $('[data-bind="thumb3"]', UI.productModal);

    if (t0) t0.src = thumbs[0] || "";
    if (t1) t1.src = thumbs[1] || "";
    if (t2) t2.src = thumbs[2] || "";
    if (t3) t3.src = thumbs[3] || "";

    // highlight first thumb
    $$(".thumb", UI.productModal).forEach((b) => b.classList.remove("is-active"));
    const first = $(`.thumb[data-thumb="0"]`, UI.productModal);
    if (first) first.classList.add("is-active");

    openModal(UI.productModal);
  }

  function selectThumb(index) {
    const product = getProductById(state.currentProductId);
    if (!product) return;

    const thumbs = buildGalleryImages(product);
    const mainImg = $('[data-bind="modalMainImage"]', UI.productModal);
    if (mainImg) mainImg.src = thumbs[index] || thumbs[0] || "";

    $$(".thumb", UI.productModal).forEach((b) => b.classList.remove("is-active"));
    const btn = $(`.thumb[data-thumb="${index}"]`, UI.productModal);
    if (btn) btn.classList.add("is-active");
  }

  /* =========================================================
     10) WhatsApp Message Builder (Product)
     ========================================================= */
  function buildOrderMessage(product, selections) {
    // selections: city, logoStyle, hoodieColor, size, note
    const lines = [];

    lines.push(`سلام 👋 بغيت نطلب من متجر ${STORE_CONFIG.brandName}`);
    lines.push(`--------------------------------`);
    lines.push(`📌 المنتج: ${product.title}`);
    lines.push(`🏷️ الثمن: ${formatPrice(product.price)} (يشمل التوصيل)`);
    lines.push(`🚚 التوصيل: مجاني داخل المغرب`);
    lines.push(`--------------------------------`);
    lines.push(`🏙️ المدينة على الشعار: ${cityLabel(selections.city)}`);
    lines.push(`🎨 ستايل الشعار: ${styleLabel(selections.logoStyle)}`);
    lines.push(`🧥 لون الكابوش: ${hoodieLabel(selections.hoodieColor)}`);
    lines.push(`📏 المقاس: ${selections.size}`);
    if (selections.note && selections.note.trim()) {
      lines.push(`📝 ملاحظة: ${selections.note.trim()}`);
    }
    lines.push(`--------------------------------`);
    lines.push(`✅ المرجو تأكيد التوفر + طريقة التسليم/الدفع. شكراً!`);

    return lines.join("\n");
  }

  function getSelectionsFromForm() {
    const city = ($("#citySelect")?.value || "no_city").trim();
    const logoStyle = ($("#logoStyleSelect")?.value || "amazigh_colors").trim();
    const hoodieColor = ($("#hoodieColorSelect")?.value || "black").trim();
    const size = ($("#sizeSelect")?.value || "M").trim();
    const note = ($("#noteInput")?.value || "").trim();

    return { city, logoStyle, hoodieColor, size, note };
  }

  /* =========================================================
     11) Filters + Search
     ========================================================= */
  function applyFilters() {
    const city = ($('[data-bind="filterCity"]')?.value || "all").trim();
    const logoStyle = ($('[data-bind="filterLogoStyle"]')?.value || "all").trim();
    const hoodieColor = ($('[data-bind="filterHoodieColor"]')?.value || "all").trim();

    state.filters = { city, logoStyle, hoodieColor };
    updateGridVisibility();
    toast("تم تطبيق الفلاتر ✅");
  }

  function resetFilters() {
    state.filters = { city: "all", logoStyle: "all", hoodieColor: "all" };
    const c = $('[data-bind="filterCity"]');
    const s = $('[data-bind="filterLogoStyle"]');
    const h = $('[data-bind="filterHoodieColor"]');
    if (c) c.value = "all";
    if (s) s.value = "all";
    if (h) h.value = "all";
    updateGridVisibility();
    toast("تمت الإعادة ✅");
  }

  function matchesFilters(product) {
    // City filter: match product.defaultCity OR if "no_city" match
    const { city, logoStyle, hoodieColor } = state.filters;

    if (city !== "all") {
      const productCity = product.defaultCity || "no_city";
      if (productCity !== city) return false;
    }

    // logoStyle filter: we can't know from card. We'll allow by availability of image.
    if (logoStyle !== "all") {
      if (!product.images[logoStyle]) return false;
    }

    // hoodieColor filter: product is available for both colors (business rule)
    // so we don't filter products by hoodieColor (all products support both).
    // But if you want: keep always true.
    if (hoodieColor !== "all") {
      // keep true
    }

    // Search query
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const hay =
        `${product.title} ${product.shortDesc} ${product.description} ${cityLabel(product.defaultCity)}`
          .toLowerCase();
      if (!hay.includes(q)) return false;
    }

    return true;
  }

  function updateGridVisibility() {
    for (const p of PRODUCTS) {
      const card = $(`.card[data-product-id="${p.id}"]`);
      if (!card) continue;
      card.style.display = matchesFilters(p) ? "" : "none";
    }
  }

  function openSearch() {
    // Clear
    const input = $('[data-bind="searchInput"]', UI.searchModal);
    if (input) input.value = "";
    state.searchQuery = "";
    renderSearchResults("");
    openModal(UI.searchModal);
    setTimeout(() => input?.focus(), 50);
  }

  function renderSearchResults(query) {
    if (!UI.searchResults) return;

    const q = (query || "").trim();
    if (!q) {
      UI.searchResults.innerHTML = `<p class="muted">ابدأ بالكتابة لعرض النتائج…</p>`;
      updateGridVisibility();
      return;
    }

    const results = PRODUCTS.filter((p) => matchesFilters({ ...p })).slice(0, 8);

    if (!results.length) {
      UI.searchResults.innerHTML = `<p class="muted">لا توجد نتائج لهذا البحث.</p>`;
      updateGridVisibility();
      return;
    }

    UI.searchResults.innerHTML = results
      .map(
        (p) => `
        <button class="search-item" type="button" data-action="openProduct" data-product="${p.id}">
          <div class="search-item__img">
            <img src="${safeImage(p.images.main || p.images.amazigh_colors)}" alt="صورة">
          </div>
          <div class="search-item__txt">
            <strong>${p.title}</strong>
            <small>${clampText(p.shortDesc, 70)}</small>
          </div>
          <div class="search-item__meta">
            <span class="price">${formatPrice(p.price)}</span>
          </div>
        </button>
      `
      )
      .join("");

    updateGridVisibility();
  }

  /* =========================================================
     12) Cart (simple)
     ========================================================= */
  function updateCartCount() {
    const count = state.cart.length;
    const pill = $('[data-bind="cartCount"]');
    if (pill) pill.textContent = String(count);
  }

  function addToCartCurrentProduct() {
    const product = getProductById(state.currentProductId);
    if (!product) return;
    const selections = getSelectionsFromForm();
    state.cart.push({
      productId: product.id,
      title: product.title,
      price: product.price,
      selections,
    });
    updateCartCount();
    toast("تمت الإضافة للسلة ✅");
  }

  function openCart() {
    renderCart();
    openModal(UI.cartModal);
  }

  function renderCart() {
    if (!UI.cartItems) return;

    if (!state.cart.length) {
      UI.cartItems.innerHTML = `<p class="muted">السلة فارغة حالياً.</p>`;
      return;
    }

    UI.cartItems.innerHTML = state.cart
      .map((item, idx) => {
        const sel = item.selections;
        return `
          <div class="cart-row">
            <div class="cart-row__main">
              <strong>${item.title}</strong>
              <small>
                المدينة: ${cityLabel(sel.city)} • الشعار: ${styleLabel(sel.logoStyle)} •
                الكابوش: ${hoodieLabel(sel.hoodieColor)} • المقاس: ${sel.size}
              </small>
            </div>
            <div class="cart-row__side">
              <span class="price">${formatPrice(item.price)}</span>
              <button class="linklike" type="button" data-action="removeCartItem" data-index="${idx}">حذف</button>
            </div>
          </div>
        `;
      })
      .join("");
  }

  function removeCartItem(index) {
    state.cart.splice(index, 1);
    updateCartCount();
    renderCart();
    toast("تم الحذف ✅");
  }

  function checkoutCartWhatsApp() {
    if (!state.cart.length) {
      toast("السلة فارغة");
      return;
    }

    const lines = [];
    lines.push(`سلام 👋 بغيت نطلب من متجر ${STORE_CONFIG.brandName}`);
    lines.push(`--------------------------------`);
    lines.push(`🧺 طلبية فيها ${state.cart.length} منتج/منتجات:`);
    lines.push(``);

    let total = 0;
    state.cart.forEach((item, i) => {
      total += Number(item.price) || 0;
      const s = item.selections;
      lines.push(`(${i + 1}) ${item.title}`);
      lines.push(`   - الثمن: ${formatPrice(item.price)}`);
      lines.push(`   - المدينة: ${cityLabel(s.city)}`);
      lines.push(`   - ستايل: ${styleLabel(s.logoStyle)}`);
      lines.push(`   - لون الكابوش: ${hoodieLabel(s.hoodieColor)}`);
      lines.push(`   - المقاس: ${s.size}`);
      if (s.note) lines.push(`   - ملاحظة: ${s.note}`);
      lines.push(``);
    });

    lines.push(`--------------------------------`);
    lines.push(`💰 المجموع التقريبي: ${formatPrice(total)} (يشمل التوصيل)`);
    lines.push(`🚚 التوصيل: مجاني داخل المغرب`);
    lines.push(`✅ المرجو تأكيد التوفر وتأكيد العنوان. شكراً!`);

    openWhatsApp(lines.join("\n"));
  }

  /* =========================================================
     13) Info Modal
     ========================================================= */
  function openInfoPage(key) {
    const page = STORE_CONFIG.infoPages[key];
    if (!page) return;

    const t = $('[data-bind="infoTitle"]', UI.infoModal);
    const s = $('[data-bind="infoSubtitle"]', UI.infoModal);
    const c = $('[data-bind="infoContent"]', UI.infoModal);

    if (t) t.textContent = page.title;
    if (s) s.textContent = page.subtitle;
    if (c) c.innerHTML = page.content;

    openModal(UI.infoModal);
  }

  /* =========================================================
     14) Actions Router (single event delegation)
     ========================================================= */
  function handleAction(action, target) {
    switch (action) {
      case "toggleMenu":
        toggleMobileMenu();
        break;

      case "openProduct": {
        const pid = target.getAttribute("data-product");
        renderProductModal(pid);
        break;
      }

      case "closeProduct":
        closeModal(UI.productModal);
        break;

      case "selectThumb": {
        const i = Number(target.getAttribute("data-thumb") || 0);
        selectThumb(i);
        break;
      }

      case "buyWhatsApp": {
        const product = getProductById(state.currentProductId);
        if (!product) return;
        const selections = getSelectionsFromForm();

        // Optional: validate required fields
        if (!selections.size || !selections.city || !selections.logoStyle || !selections.hoodieColor) {
          toast("مرجو اختيار كل الخيارات");
          return;
        }

        const msg = buildOrderMessage(product, selections);
        openWhatsApp(msg);
        break;
      }

      case "quickWhatsApp": {
        const pid = target.getAttribute("data-product");
        const product = getProductById(pid);
        if (!product) return;

        // Quick message without opening modal
        const msg =
          `سلام 👋 بغيت نطلب هاد المنتج:\n` +
          `📌 ${product.title}\n` +
          `🏷️ الثمن: ${formatPrice(product.price)} (يشمل التوصيل)\n` +
          `🚚 التوصيل: مجاني داخل المغرب\n` +
          `\n` +
          `ممكن نكملو التفاصيل (المدينة/الستايل/اللون/المقاس)؟`;

        openWhatsApp(msg);
        break;
      }

      case "openWhatsAppQuick":
        openWhatsApp(STORE_CONFIG.quickWhatsAppMessage);
        break;

      case "copyWhatsApp":
        copyToClipboard(STORE_CONFIG.whatsappNumberE164);
        break;

      case "applyFilters":
        applyFilters();
        break;

      case "resetFilters":
        resetFilters();
        break;

      case "openSearch":
        openSearch();
        break;

      case "closeSearch":
        closeModal(UI.searchModal);
        break;

      case "openCart":
        openCart();
        break;

      case "closeCart":
        closeModal(UI.cartModal);
        break;

      case "addToCart":
        addToCartCurrentProduct();
        break;

      case "checkoutCartWhatsApp":
        checkoutCartWhatsApp();
        break;

      case "removeCartItem": {
        const idx = Number(target.getAttribute("data-index"));
        if (!Number.isNaN(idx)) removeCartItem(idx);
        break;
      }

      case "openTrackInfo":
        openInfoPage("shipping");
        break;

      case "openReturnPolicy":
        openInfoPage("returns");
        break;

      case "openPrivacy":
        openInfoPage("privacy");
        break;

      case "openSupport":
        openInfoPage("support");
        break;

      case "closeInfo":
        closeModal(UI.infoModal);
        break;

      case "jumpSizeGuide":
        closeModal(UI.productModal);
        // Allow default anchor behavior from HTML if present; here we also scroll:
        setTimeout(() => {
          document.querySelector("#sizeGuide")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
        break;

      case "openBestSeller":
        // Open best seller product
        const best = PRODUCTS.find((p) => p.isBestSeller) || PRODUCTS[0];
        if (best) renderProductModal(best.id);
        break;

      default:
        break;
    }
  }

  function toggleMobileMenu() {
    const el = UI.mobileMenu;
    if (!el) return;
    const isHidden = el.getAttribute("aria-hidden") === "true";
    el.setAttribute("aria-hidden", isHidden ? "false" : "true");
    document.body.style.overflow = isHidden ? "hidden" : "";
  }

  /* =========================================================
     15) Product Cards Click Support (card itself)
     ========================================================= */
  function bindCardClickOpen() {
    $$(".card").forEach((card) => {
      card.addEventListener("click", (e) => {
        // avoid double triggering when clicking buttons
        const btn = e.target.closest("button");
        if (btn) return;
        const pid = card.getAttribute("data-product-id");
        if (pid) renderProductModal(pid);
      });

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const pid = card.getAttribute("data-product-id");
          if (pid) renderProductModal(pid);
        }
      });
    });
  }

  /* =========================================================
     16) Search typing
     ========================================================= */
  function bindSearchTyping() {
    const input = $('[data-bind="searchInput"]', UI.searchModal);
    if (!input) return;

    input.addEventListener("input", () => {
      state.searchQuery = input.value.trim();
      renderSearchResults(state.searchQuery);
    });
  }

  /* =========================================================
     17) Quick Filters change (optional auto)
     ========================================================= */
  function bindQuickFiltersAuto() {
    const form = $("#quickFilters");
    if (!form) return;

    // optional: auto apply on change for a modern feel
    form.addEventListener("change", () => {
      applyFilters();
    });
  }

  /* =========================================================
     18) Keyboard Esc closes modals
     ========================================================= */
  function bindEscClose() {
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;

      // Close topmost modal if open
      const modals = [UI.productModal, UI.searchModal, UI.cartModal, UI.infoModal];
      for (const m of modals) {
        if (m && m.getAttribute("aria-hidden") === "false") {
          closeModal(m);
          return;
        }
      }

      // Close mobile menu if open
      if (UI.mobileMenu && UI.mobileMenu.getAttribute("aria-hidden") === "false") {
        toggleMobileMenu();
      }
    });
  }

  /* =========================================================
     19) Global click delegation for data-action
     ========================================================= */
  function bindActions() {
    document.addEventListener("click", (e) => {
      const el = e.target.closest("[data-action]");
      if (!el) return;
      const action = el.getAttribute("data-action");
      if (!action) return;
      handleAction(action, el);
    });
  }

  /* =========================================================
     20) Add minimal CSS for search/cart rows (without touching CSS file)
     - Optional small enhancement so it looks good even if CSS doesn't include these classes.
     ========================================================= */
  function injectMicroStyles() {
    const css = `
      .search-item{
        width:100%;
        display:flex;
        gap:12px;
        align-items:center;
        padding:12px;
        border-radius:16px;
        border:1px solid rgba(255,255,255,0.08);
        background:rgba(255,255,255,0.03);
        margin-bottom:10px;
        text-align:right;
      }
      .search-item__img{width:54px;height:54px;border-radius:14px;overflow:hidden;flex:0 0 54px}
      .search-item__img img{width:100%;height:100%;object-fit:cover}
      .search-item__txt{flex:1;display:flex;flex-direction:column}
      .search-item__txt strong{font-size:14px}
      .search-item__txt small{opacity:.7;font-size:12px;margin-top:4px}
      .search-item__meta{flex:0 0 auto}
      .cart-row{
        display:flex;
        gap:12px;
        align-items:flex-start;
        justify-content:space-between;
        padding:12px;
        border-radius:16px;
        border:1px solid rgba(255,255,255,0.08);
        background:rgba(255,255,255,0.03);
        margin-bottom:10px;
      }
      .cart-row__main strong{display:block;font-size:14px}
      .cart-row__main small{display:block;opacity:.75;margin-top:4px;font-size:12px}
      .cart-row__side{display:flex;flex-direction:column;align-items:flex-end;gap:8px}
      .thumb.is-active{outline:2px solid rgba(255,255,255,0.65); border-radius:14px}
    `;
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  }

  /* =========================================================
     21) Init
     ========================================================= */
  function init() {
    // default aria-hidden for drawers
    if (UI.mobileMenu && !UI.mobileMenu.getAttribute("aria-hidden")) {
      UI.mobileMenu.setAttribute("aria-hidden", "true");
    }

    bindGlobal();
    bindProductsToCards();

    bindActions();
    bindCardClickOpen();
    bindSearchTyping();
    bindQuickFiltersAuto();
    bindEscClose();

    updateGridVisibility();
    injectMicroStyles();

    // If user clicks outside (backdrop) the modals - already handled by data-action on backdrop
  }

  // Start
  document.addEventListener("DOMContentLoaded", init);
})();
