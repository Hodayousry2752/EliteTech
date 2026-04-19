// 100 premium electronics products
export const generateProducts = () => {
  const categories = [
    { id: 'smartphones', name_ar: 'الهواتف الذكية', name_en: 'Smartphones' },
    { id: 'laptops', name_ar: 'حواسيب محمولة', name_en: 'Laptops' },
    { id: 'headphones', name_ar: 'سماعات', name_en: 'Headphones' },
    { id: 'chargers', name_ar: 'شواحن', name_en: 'Chargers' },
    { id: 'smartwatches', name_ar: 'ساعات ذكية', name_en: 'Smartwatches' },
    { id: 'accessories', name_ar: 'اكسسوارات', name_en: 'Accessories' },
    { id: 'tablets', name_ar: 'أجهزة لوحية', name_en: 'Tablets' },
    { id: 'cameras', name_ar: 'كاميرات', name_en: 'Cameras' }
  ];

  const categoryImages = {
    smartphones: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      "https://images.unsplash.com/photo-1510557880182-3c1d3f1d7a7b",
      "https://images.unsplash.com/photo-1512499617640-c2f999098c01"
    ],
    laptops: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed"
    ],
    headphones: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "https://images.unsplash.com/photo-1511385348-a52b4a160dc2",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944"
    ],
    chargers: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90",
      "https://images.unsplash.com/photo-1609592424823-5b2b8cba3f64",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0"
    ],
    smartwatches: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
    ],
    accessories: [
      "https://images.unsplash.com/photo-1512499617640-c2f999098c01",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
    ],
    tablets: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
      "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83",
      "https://images.unsplash.com/photo-1587614382346-ac6d4c96c0e1"
    ],
    cameras: [
      "https://images.unsplash.com/photo-1519183071298-a2962be96b02",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      "https://images.unsplash.com/photo-1502920917128-1aa500764b8a"
    ]
  };

  const colors = {
    smartphones: ['أسود', 'أبيض', 'أزرق', 'ذهبي', 'أرجواني'],
    laptops: ['فضي', 'رمادي', 'ذهبي', 'أزرق داكن'],
    headphones: ['أسود', 'أبيض', 'أحمر', 'أزرق', 'أخضر'],
    chargers: ['أسود', 'أبيض', 'رمادي'],
    smartwatches: ['أسود', 'فضي', 'ذهبي', 'أزرق', 'أخضر'],
    accessories: ['أسود', 'أبيض', 'شفاف', 'أزرق'],
    tablets: ['رمادي', 'فضي', 'ذهبي', 'أزرق'],
    cameras: ['أسود', 'فضي', 'أحمر']
  };

  const storage = ['64GB', '128GB', '256GB', '512GB', '1TB'];

  const tagsList = [
    'شحن سريع', 'عزل صوت', 'مقاوم للماء', 'واي فاي 6', 'بلوتوث 5.3', 'شاشة أموليد',
    'بطارية تدوم طويلاً', 'معالج قوي', 'كاميرا احترافية', 'تصميم أنيق', 'خفيف الوزن',
    'ضمان سنتين', 'شحن لاسلكي', 'مقاوم للصدمات', 'تتبع اللياقة', 'ذكاء اصطناعي'
  ];

  const products = [];

  const productBases = [
    { ar: 'آيفون برو ماكس', en: 'iPhone Pro Max', cat: 'smartphones', basePrice: 4200 },
    { ar: 'جالاكسي إس الترا', en: 'Galaxy S Ultra', cat: 'smartphones', basePrice: 3800 },
    { ar: 'بيكسل برو', en: 'Pixel Pro', cat: 'smartphones', basePrice: 3600 },
    { ar: 'ماك بوك برو', en: 'MacBook Pro', cat: 'laptops', basePrice: 8500 },
    { ar: 'ديل اكس بي إس', en: 'Dell XPS', cat: 'laptops', basePrice: 7200 },
    { ar: 'إتش بي سبيكتر', en: 'HP Spectre', cat: 'laptops', basePrice: 6800 },
    { ar: 'لينوفو ثينك باد', en: 'Lenovo ThinkPad', cat: 'laptops', basePrice: 5900 },
    { ar: 'سمايتس برو', en: 'Smite Pro', cat: 'headphones', basePrice: 850 },
    { ar: 'بوس كوايت كومفورت', en: 'Bose QuietComfort', cat: 'headphones', basePrice: 1200 },
    { ar: 'سوني واي إتش-1000 إكس إم 5', en: 'Sony WH-1000XM5', cat: 'headphones', basePrice: 1450 },
    { ar: 'شاحن سريع 65 واط', en: '65W Fast Charger', cat: 'chargers', basePrice: 180 },
    { ar: 'شاحن لاسلكي ماج سيف', en: 'MagSafe Wireless Charger', cat: 'chargers', basePrice: 220 },
    { ar: 'باور بانك 20000 مللي أمبير', en: '20000mAh Power Bank', cat: 'chargers', basePrice: 250 },
    { ar: 'ساعة أبل الترا', en: 'Apple Watch Ultra', cat: 'smartwatches', basePrice: 2800 },
    { ar: 'ساعة جالاكسي واتش 6', en: 'Galaxy Watch 6', cat: 'smartwatches', basePrice: 1650 },
    { ar: 'ساعة جارمين فينيكس', en: 'Garmin Fenix', cat: 'smartwatches', basePrice: 2100 },
    { ar: 'حامل مغناطيسي للهاتف', en: 'Magnetic Phone Mount', cat: 'accessories', basePrice: 95 },
    { ar: 'كابل USB-C منسوج', en: 'Braided USB-C Cable', cat: 'accessories', basePrice: 45 },
    { ar: 'حافظة جلدية فاخرة', en: 'Premium Leather Case', cat: 'accessories', basePrice: 120 },
    { ar: 'آيباد برو 12.9', en: 'iPad Pro 12.9', cat: 'tablets', basePrice: 4200 },
    { ar: 'تاب إس 9 الترا', en: 'Tab S9 Ultra', cat: 'tablets', basePrice: 3800 },
    { ar: 'كاميرا كانون EOS R5', en: 'Canon EOS R5', cat: 'cameras', basePrice: 11200 },
    { ar: 'كاميرا سوني ألفا 7 IV', en: 'Sony Alpha 7 IV', cat: 'cameras', basePrice: 9800 }
  ];

  for (let i = 0; i < 100; i++) {
    const base = productBases[i % productBases.length];
    const category = categories.find(c => c.id === base.cat);
    const variantIndex = Math.floor(i / productBases.length);

    const productNameAr = `${base.ar} ${variantIndex > 0 ? `(الجيل ${variantIndex + 1})` : ''}`;
    const productNameEn = `${base.en} ${variantIndex > 0 ? `(Gen ${variantIndex + 1})` : ''}`;

    const discountPercent = [0, 10, 15, 20, 25][Math.floor(Math.random() * 5)];
    const basePrice = base.basePrice + (variantIndex * 150);
    const finalPrice = discountPercent > 0 ? basePrice * (1 - discountPercent / 100) : basePrice;
    const wholesalePrice = Math.round(basePrice * 0.75);

    const colorOptions = colors[base.cat] || colors.accessories;
    const selectedColors = colorOptions.slice(0, Math.min(4, colorOptions.length));
    const storageOptions = storage.slice(0, Math.min(3, storage.length));

    const imagesList = categoryImages[base.cat];
    const imgIndex = i % imagesList.length;

    const descriptionAr = `
      <div dir="rtl">
        <h3>المواصفات التقنية</h3>
        <p>يتميز ${productNameAr} بأحدث التقنيات المتطورة مع أداء قوي وتصميم عصري يناسب الاستخدام اليومي.</p>
        <h3>المميزات</h3>
        <ul>
          <li>أداء سريع</li>
          <li>بطارية قوية</li>
          <li>تصميم أنيق</li>
        </ul>
      </div>
    `;

    const descriptionEn = `
      <h3>Technical Specifications</h3>
      <p>${productNameEn} delivers powerful performance with a modern design.</p>
    `;

    const randomTags = [];
    const numTags = 3 + Math.floor(Math.random() * 3);
    for (let t = 0; t < numTags; t++) {
      const tag = tagsList[Math.floor(Math.random() * tagsList.length)];
      if (!randomTags.includes(tag)) randomTags.push(tag);
    }

    products.push({
      id: i + 1,
      name_ar: productNameAr,
      name_en: productNameEn,
      description_ar: descriptionAr,
      description_en: descriptionEn,
      category,
      categoryId: category.id,
      basePrice,
      finalPrice: Math.round(finalPrice),
      discountPercent,
      wholesalePrice,
      colors: selectedColors,
      storage: storageOptions,
      tags: randomTags,
      images: [
        imagesList[imgIndex],
        imagesList[(imgIndex + 1) % imagesList.length],
        imagesList[(imgIndex + 2) % imagesList.length]
      ],
      seoKeywords: [productNameEn, productNameAr, category.name_en],
      metaDescription: `Buy ${productNameEn} at best price`,
      rating: 4 + Math.random(),
      reviews: Math.floor(Math.random() * 500) + 10,
      inStock: true,
      sku: `ELEC-${String(i+1).padStart(4, '0')}`,
      warranty: '2 years manufacturer warranty'
    });
  }

  products.forEach(product => {
    const sameCategory = products.filter(p => p.categoryId === product.categoryId && p.id !== product.id);
    const shuffled = [...sameCategory].sort(() => 0.5 - Math.random());
    product.crossSellIds = shuffled.slice(0, 3).map(p => p.id);
    product.upsellIds = shuffled.slice(3, 6).map(p => p.id);
  });

  return products;
};

export const products = generateProducts();
export const getProductById = (id) => products.find(p => p.id === parseInt(id));
export const getRelatedProducts = (product, type = 'cross') => {
  const ids = type === 'cross' ? product.crossSellIds : product.upsellIds;
  return ids.map(id => products.find(p => p.id === id)).filter(p => p);
};