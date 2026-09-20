import { responsiveImages } from "@/generated/responsiveImages";

const productMedia = responsiveImages.products;
const merchMedia = responsiveImages.merch;
const lemonade = productMedia["24K-Lemonade-enhanced"].src;
const blackberry = productMedia["Blackberry-Breeze-enhanced"].src;
const strawberryLime = productMedia["Strawberry-Lime-Fusion-enhanced"].src;
const watermelon = productMedia["Watermelon-Refresher-enhanced"].src;
const lemonade4Pack = productMedia["4-Pack-24K-Lemonade-enhanced"].src;
const blackberry4Pack = productMedia["4-Pack-Blackberry-Breeze-enhanced"].src;
const strawberryLime4Pack = productMedia["4-Pack-Strawberry-Lime-enhanced"].src;
const watermelon4Pack = productMedia["4-Pack-Watermelon-Referesher-enhanced"].src;
const blueberryYumYum = productMedia["Blueberry-Yum-Yum-enhanced"].src;
const greenApple = productMedia["Green-Apple-enhanced"].src;
const strawberryBanana = productMedia["Strawberry-Banana-enhanced"].src;
const berryMelonBlissOrganic = productMedia["Berry-Melon-Bliss-organic-enhanced"].src;
const blueRazzOrganic = productMedia["Blue-Razz-organic-enhanced"].src;
const cherryBlissOrganic = productMedia["Cherry-Bliss-organic-enhanced"].src;
const pushPopOrganic = productMedia["Push-Pop-organic-enhanced"].src;
const blueberryMidnightDrift = productMedia["Blueberry-Yum-Yum-midnight-drift"].src;
const peachMidnightDrift = productMedia["Peach-Photoroom-midnight-drift"].src;
const pinkLemonadeMidnightDrift = productMedia["Pink-Lemonade-midnight-drift"].src;
const strawberryMidnightDrift = productMedia["Strawberry-midnight-drift"].src;
const capFront = merchMedia["lagom-throwback-loon-cap-front"].src;
const capBack = merchMedia["lagom-throwback-loon-cap-back"].src;
const capThreeQuarterLeft = merchMedia["lagom-throwback-loon-cap-front-three-quarter-left"].src;
const capThreeQuarterRight = merchMedia["lagom-throwback-loon-cap-front-three-quarter-right"].src;
const teeFront = merchMedia["lagom-black-logo-tee-front"].src;
const teeBack = merchMedia["lagom-black-logo-tee-back"].src;
const teeThreeQuarter = merchMedia["lagom-black-logo-tee-front-three-quarter"].src;
const teeFoldedFront = merchMedia["lagom-black-logo-tee-folded-front"].src;
const hoodieFront = merchMedia["lagom-mainstreet-hooded-sweatshirt-front"].src;
const hoodieBack = merchMedia["lagom-mainstreet-hooded-sweatshirt-back"].src;
const hoodieFoldedFront = merchMedia["lagom-mainstreet-hooded-sweatshirt-folded-front"].src;
const seltzersThumbnail = responsiveImages.categories["seltzers-thumbnail"].src;
const gummiesThumbnail = responsiveImages.categories["gummies-thumbnail"].src;

const GUMMY_LINE_DATA = {
  Classic: {
    price: 19.99,
    collectionName: "The Drip By Lagom",
    thcMgPerPiece: 5,
    thcMgPerPackage: 50,
    piecesPerPackage: 10,
    strainType: "Hybrid",
    description:
      "A 10-piece pouch of Lagom THC gummies made with hemp-derived Delta-9 THC and offered in bold fruit-forward flavors. Each gummy contains 5 mg THC, for 50 mg THC per pouch.",
    productDetails: [
      "10 gummies per pouch",
      "5 mg THC per gummy",
      "50 mg THC per pouch",
      "Hemp-derived Delta-9 THC",
      "Georgia Pie featured in the current Lagom product description",
      "Hybrid",
    ],
    testingAndPackaging: [
      "Third-party tested",
      "Certified child-resistant packaging",
    ],
    sourceUrl: "https://lagomnaturals.com/product/the-drip-by-lagom-2/",
  },
  Organic: {
    price: 24.99,
    collectionName: "Organic Collection",
    thcMgPerPiece: 5,
    thcMgPerPackage: 50,
    piecesPerPackage: 10,
    strainType: "Hybrid",
    description:
      "A 10-piece pouch from Lagom's Organic Collection, made with live resin and 5 mg THC per gummy. Each pouch contains 50 mg THC total and is offered in a rotating selection of fruit-inspired flavors.",
    productDetails: [
      "10 gummies per pouch",
      "5 mg THC per gummy",
      "50 mg THC per pouch",
      "Live resin",
      "Hybrid",
    ],
    testingAndPackaging: [
      "Third-party tested",
      "Certified child-resistant packaging",
    ],
    sourceUrl: "https://lagomnaturals.com/product/lagom-naturals-organic/",
  },
  "Midnight Drift": {
    price: 24.99,
    collectionName: "Midnight Drift Collection",
    thcMgPerPiece: 5,
    cbdMgPerPiece: 20,
    piecesPerPackage: 10,
    strainType: "Indica",
    description:
      "A 10-piece THC + CBD gummy pouch from Lagom's Midnight Drift Collection. Each gummy contains 5 mg THC and 20 mg CBD and is made with live resin.",
    productDetails: [
      "10 gummies per pouch",
      "5 mg THC per gummy",
      "20 mg CBD per gummy",
      "Live resin",
      "Indica",
    ],
    testingAndPackaging: [
      "Third-party tested",
      "Certified child-resistant packaging",
    ],
    sourceUrl: "https://lagomnaturals.com/product/lagom-midnight-drift-collection/",
  },
};

const gummyCatalog = [
  {
    id: "blueberry-yum-yum",
    name: "Blueberry Yum Yum",
    flavor: "Blueberry",
    productLine: "Classic",
    image: blueberryYumYum,
    packageLabel: "10 pc",
    packageDetail: "10-piece pouch",
  },
  {
    id: "green-apple",
    name: "Green Apple",
    flavor: "Green apple",
    productLine: "Classic",
    image: greenApple,
    packageLabel: "10 pc",
    packageDetail: "10-piece pouch",
  },
  {
    id: "strawberry-banana",
    name: "Strawberry Banana",
    flavor: "Strawberry banana",
    productLine: "Classic",
    image: strawberryBanana,
    packageLabel: "10 pc",
    packageDetail: "10-piece pouch",
  },
  {
    id: "berry-melon-bliss-organic",
    name: "Berry Melon Bliss",
    flavor: "Berry melon",
    productLine: "Organic",
    image: berryMelonBlissOrganic,
    packageLabel: "Pouch",
    packageDetail: "Gummy pouch",
  },
  {
    id: "blue-razz-organic",
    name: "Blue Razz",
    flavor: "Blue raspberry",
    productLine: "Organic",
    image: blueRazzOrganic,
    packageLabel: "Pouch",
    packageDetail: "Gummy pouch",
  },
  {
    id: "cherry-bliss-organic",
    name: "Cherry Bliss",
    flavor: "Cherry",
    productLine: "Organic",
    image: cherryBlissOrganic,
    packageLabel: "Pouch",
    packageDetail: "Gummy pouch",
  },
  {
    id: "push-pop-organic",
    name: "Push Pop",
    flavor: "Push Pop",
    productLine: "Organic",
    image: pushPopOrganic,
    packageLabel: "Pouch",
    packageDetail: "Gummy pouch",
  },
  {
    id: "blueberry-yum-yum-midnight-drift",
    name: "Blueberry Yum Yum",
    flavor: "Blueberry",
    productLine: "Midnight Drift",
    image: blueberryMidnightDrift,
    packageLabel: "Pouch",
    packageDetail: "Midnight Drift gummy pouch",
  },
  {
    id: "peach-midnight-drift",
    name: "Peach",
    flavor: "Peach",
    productLine: "Midnight Drift",
    image: peachMidnightDrift,
    packageLabel: "Pouch",
    packageDetail: "Midnight Drift gummy pouch",
  },
  {
    id: "pink-lemonade-midnight-drift",
    name: "Pink Lemonade",
    flavor: "Pink lemonade",
    productLine: "Midnight Drift",
    image: pinkLemonadeMidnightDrift,
    packageLabel: "Pouch",
    packageDetail: "Midnight Drift gummy pouch",
  },
  {
    id: "strawberry-midnight-drift",
    name: "Strawberry",
    flavor: "Strawberry",
    productLine: "Midnight Drift",
    image: strawberryMidnightDrift,
    packageLabel: "Pouch",
    packageDetail: "Midnight Drift gummy pouch",
  },
];

const gummyProducts = gummyCatalog.map((gummy) => {
  const line = GUMMY_LINE_DATA[gummy.productLine];
  return {
    id: gummy.id,
    brand: "Lagom Naturals",
    name: gummy.name,
    price: line.price,
    flavor: gummy.flavor,
    flavorFamily: "Gummies",
    category: "Gummies",
    productLine: gummy.productLine,
    collectionName: line.collectionName,
    type:
      gummy.productLine === "Classic"
        ? "THC gummies"
        : gummy.productLine === "Midnight Drift"
          ? "THC + CBD gummies"
          : `${gummy.productLine} THC gummies`,
    strength: line.cbdMgPerPiece
      ? `${line.thcMgPerPiece} mg THC + ${line.cbdMgPerPiece} mg CBD per gummy`
      : `${line.thcMgPerPiece} mg THC per gummy`,
    weight: gummy.packageLabel,
    piecesPerPackage: line.piecesPerPackage,
    thcMgPerPiece: line.thcMgPerPiece,
    thcMgPerPackage: line.thcMgPerPackage ?? null,
    cbdMgPerPiece: line.cbdMgPerPiece ?? null,
    strainType: line.strainType,
    description: line.description,
    productDetails: line.productDetails,
    testingAndPackaging: line.testingAndPackaging,
    image: gummy.image,
    imageAlt: `${gummy.name} ${gummy.productLine === "Classic" ? "" : `${gummy.productLine} `}gummy pouch`.trim(),
    variants: [
      {
        id: "pouch",
        label: gummy.packageLabel,
        detail: gummy.packageDetail,
        price: line.price,
        image: gummy.image,
      },
    ],
    accent:
      gummy.productLine === "Midnight Drift"
        ? "#191b25"
        : gummy.productLine === "Organic"
          ? "#3d6b45"
          : "#0f513d",
    source: {
      url: line.sourceUrl,
      verifiedAt: "2026-09-19",
      authority: "Lagom Naturals first-party product page",
    },
  };
});

const SELTZER_COMMON = {
  category: "Seltzers",
  type: "THC infused seltzer",
  thcMgPerCan: 10,
  canVolume: "12 fl oz (355 mL)",
  calories: "Zero calories",
  sugar: "Zero sugar",
  carbs: "Zero carbs",
  dietary: ["Gluten-free", "Vegan", "Non-GMO"],
  formulationHighlights: [
    "Hydrating electrolytes",
    "Sweetened with monk fruit",
    "No artificial flavors",
  ],
  nutritionFacts: ["Zero calories", "Zero sugar", "Zero carbs"],
  responsibleUse:
    "Each can contains 10 mg THC. If you are new to THC or prefer a lower amount, consume less than a full can and allow adequate time before consuming more. Do not drive or operate machinery after consuming THC. Keep away from children and pets.",
  source: {
    url: "https://lagomnaturals.com/product/premium-thc-infused-seltzer/",
    verifiedAt: "2026-09-19",
    authority: "Lagom Naturals first-party product page",
  },
};

export const products = [
  {
    id: "24k-lemonade",
    brand: "Lagom Naturals",
    name: "24K Lemonade",
    price: 6.99,
    flavor: "Lemonade",
    flavorFamily: "Citrus",
    category: "Seltzers",
    ...SELTZER_COMMON,
    description: "A lightly sparkling THC seltzer built around Sicilian lemon and juicy tangerine, with a crisp citrus profile and clean mineral finish. Each 12 fl oz can contains 10 mg THC with zero sugar, zero carbs, and zero calories.",
    image: lemonade,
    variants: [
      {
        id: "single",
        label: "Single",
        detail: "Single 12 fl oz can",
        price: 6.99,
        image: lemonade,
      },
      {
        id: "4-pack",
        label: "4-pack",
        detail: "Four 12 fl oz cans",
        price: 19.99,
        image: lemonade4Pack,
      },
    ],
    accent: "#e3a900",
  },
  {
    id: "blackberry-breeze",
    brand: "Lagom Naturals",
    name: "Blackberry Breeze",
    price: 6.99,
    flavor: "Blackberry",
    flavorFamily: "Berry",
    category: "Seltzers",
    ...SELTZER_COMMON,
    description: "A blackberry-flavored THC seltzer with a clean, sparkling finish. Each 12 fl oz can contains 10 mg THC with zero sugar, zero carbs, and zero calories.",
    image: blackberry,
    variants: [
      {
        id: "single",
        label: "Single",
        detail: "Single 12 fl oz can",
        price: 6.99,
        image: blackberry,
      },
      {
        id: "4-pack",
        label: "4-pack",
        detail: "Four 12 fl oz cans",
        price: 19.99,
        image: blackberry4Pack,
      },
    ],
    accent: "#4b276f",
  },
  {
    id: "strawberry-lime-fusion",
    brand: "Lagom Naturals",
    name: "Strawberry Lime Fusion",
    price: 6.99,
    flavor: "Strawberry + lime",
    flavorFamily: "Fruit + citrus",
    category: "Seltzers",
    ...SELTZER_COMMON,
    description: "A strawberry-and-lime THC seltzer pairing ripe fruit flavor with a bright citrus edge and sparkling finish. Each 12 fl oz can contains 10 mg THC with zero sugar, zero carbs, and zero calories.",
    image: strawberryLime,
    variants: [
      {
        id: "single",
        label: "Single",
        detail: "Single 12 fl oz can",
        price: 6.99,
        image: strawberryLime,
      },
      {
        id: "4-pack",
        label: "4-pack",
        detail: "Four 12 fl oz cans",
        price: 19.99,
        image: strawberryLime4Pack,
      },
    ],
    accent: "#e95a9d",
  },
  {
    id: "watermelon-refresher",
    brand: "Lagom Naturals",
    name: "Watermelon Refresher",
    price: 6.99,
    flavor: "Watermelon",
    flavorFamily: "Melon",
    category: "Seltzers",
    ...SELTZER_COMMON,
    description: "A watermelon-flavored THC seltzer with a light, sparkling profile designed for crisp refreshment. Each 12 fl oz can contains 10 mg THC with zero sugar, zero carbs, and zero calories.",
    image: watermelon,
    variants: [
      {
        id: "single",
        label: "Single",
        detail: "Single 12 fl oz can",
        price: 6.99,
        image: watermelon,
      },
      {
        id: "4-pack",
        label: "4-pack",
        detail: "Four 12 fl oz cans",
        price: 19.99,
        image: watermelon4Pack,
      },
    ],
    accent: "#e6382f",
  },
  ...gummyProducts,
];

export const merch = [
  {
    id: "black-logo-cap",
    name: "Throwback Loon Mid Profile Cap",
    price: 32.99,
    type: "Caps",
    category: "Apparel",
    color: "Black",
    sizeType: "Adjustable",
    image: capFront,
    gallery: [
      { src: capFront, label: "Front", alt: "Black Lagom Throwback Loon mid profile cap, front view" },
      { src: capBack, label: "Back", alt: "Black Lagom Throwback Loon mid profile cap, back view" },
      { src: capThreeQuarterLeft, label: "Left three-quarter view", alt: "Black Lagom Throwback Loon mid profile cap, left three-quarter front view" },
      { src: capThreeQuarterRight, label: "Right three-quarter view", alt: "Black Lagom Throwback Loon mid profile cap, right three-quarter front view" },
    ],
    description:
      "A structured five-panel cap with a clean mid-profile shape, slightly curved brim, adjustable closure, and embroidered Lagom Loon & Water submark.",
    materials: [
      "Lightweight, breathable fabric",
    ],
    fit: [
      "Mid-profile five-panel construction",
      "Adjustable strap for a customizable fit",
      "Slightly curved brim",
    ],
    construction: [
      "Structured yet relaxed silhouette",
      "Embroidered Loon & Water submark on the front",
    ],
    manufacturing: [
      "Lagom describes the cap as designed for durability and long-lasting wear.",
    ],
    source: {
      url: "https://lagomnaturals.com/product/throwback-loon-mid-profile-cap/",
      verifiedAt: "2026-09-19",
      authority: "Lagom Naturals first-party product page",
    },
  },
  {
    id: "black-logo-tee",
    name: "Heavyweight Cotton Tee",
    price: 19.99,
    type: "T-Shirts",
    category: "Apparel",
    color: "Black",
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    image: teeFoldedFront,
    gallery: [
      { src: teeFoldedFront, label: "Folded view", alt: "Black Lagom Heavyweight Cotton Tee, folded front view" },
      { src: teeFront, label: "Front", alt: "Black Lagom Heavyweight Cotton Tee, front view" },
      { src: teeBack, label: "Back", alt: "Black Lagom Heavyweight Cotton Tee, back view" },
      { src: teeThreeQuarter, label: "Three-quarter view", alt: "Black Lagom Heavyweight Cotton Tee, three-quarter front view" },
    ],
    description:
      "A heavyweight black cotton tee with a relaxed silhouette, wide rib collar, Lagom chest logo, and bird-and-water sleeve submark.",
    materials: [
      "100% heavyweight cotton",
      "OEKO-TEX certified low-impact dyes",
    ],
    fit: [
      "Relaxed fit",
      "Wide rib collar",
      "Available in XS through 3XL",
    ],
    construction: [
      "Taped neck and shoulders",
      "Tear-away label",
      "Lagom logo on the chest",
      "Bird & Water submark on the sleeve",
    ],
    manufacturing: [
      "U.S. Cotton Trust Protocol member product",
      "Made in a WRAP-certified facility",
      "Produced under Fair Labor Association guidelines",
      "Lagom states the product meets Higg Index Level 2 or above sustainability standards",
    ],
    source: {
      url: "https://lagomnaturals.com/product/lagom-shirt-black/",
      verifiedAt: "2026-09-19",
      authority: "Lagom Naturals first-party product page",
    },
  },
  {
    id: "mainstreet-hoodie",
    name: "Mainstreet Hooded Sweatshirt",
    price: 44.99,
    type: "Hoodies",
    category: "Apparel",
    color: "Black",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    image: hoodieFoldedFront,
    gallery: [
      { src: hoodieFoldedFront, label: "Folded view", alt: "Black Lagom Mainstreet hooded sweatshirt, folded front view" },
      { src: hoodieFront, label: "Front", alt: "Black Lagom Mainstreet hooded sweatshirt, front view" },
      { src: hoodieBack, label: "Back", alt: "Black Lagom Mainstreet hooded sweatshirt, back view" },
    ],
    description:
      "A premium heavyweight black fleece hoodie with an oversized drop-shoulder fit, minimalist Lagom chest branding, and a clean drawcord-free hood.",
    materials: [
      "12.5 oz/yd² (420 gsm) heavyweight fleece",
      "75% ring-spun cotton / 25% polyester",
      "100% cotton face yarns on solid colors",
      "100% cotton 1×1 ribbing at cuffs and waistband",
    ],
    fit: [
      "Oversized fit",
      "Drop shoulder",
      "Available in S through 3XL",
    ],
    construction: [
      "Double-layer single-piece hood",
      "No drawcord",
      "Blindstitch sewing",
      "Tear-away label; woven label on Pigment Black",
    ],
    manufacturing: [
      "Made in a WRAP-certified facility according to Lagom's current product page",
    ],
    source: {
      url: "https://lagomnaturals.com/product/lagom-mainstreet-hooded-sweatshirt/",
      verifiedAt: "2026-09-19",
      authority: "Lagom Naturals first-party product page",
    },
  },
];

export const categoryCards = [
  ["Seltzers", "Seltzers", "Sparkling THC seltzers for brighter moments."],
  ["Gummies", "Gummies", "Premium THC gummies for everyday balance."],
];
export const gummyCollections = [
  { name: "Classic" },
  { name: "Organic" },
  { name: "Midnight Drift" },
];
export const categoryImages = {
  Seltzers: seltzersThumbnail,
  Gummies: gummiesThumbnail,
};
