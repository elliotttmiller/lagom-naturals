import lemonade from "@/assets/products/enhanced/24K-Lemonade-enhanced.png";
import blackberry from "@/assets/products/enhanced/Blackberry-Breeze-enhanced.png";
import strawberryLime from "@/assets/products/enhanced/Strawberry-Lime-Fusion-enhanced.png";
import watermelon from "@/assets/products/enhanced/Watermelon-Refresher-enhanced.png";
import lemonade4Pack from "@/assets/products/enhanced/4-Pack-24K-Lemonade-enhanced.png";
import blackberry4Pack from "@/assets/products/enhanced/4-Pack-Blackberry-Breeze-enhanced.png";
import strawberryLime4Pack from "@/assets/products/enhanced/4-Pack-Strawberry-Lime-enhanced.png";
import watermelon4Pack from "@/assets/products/enhanced/4-Pack-Watermelon-Referesher-enhanced.png";

import blueberryYumYum from "@/assets/products/enhanced/Blueberry-Yum-Yum-enhanced.png";
import greenApple from "@/assets/products/enhanced/Green-Apple-enhanced.png";
import strawberryBanana from "@/assets/products/enhanced/Strawberry-Banana-enhanced.png";
import berryMelonBlissOrganic from "@/assets/products/enhanced/Berry-Melon-Bliss-organic-enhanced.png";
import blueRazzOrganic from "@/assets/products/enhanced/Blue-Razz-organic-enhanced.png";
import cherryBlissOrganic from "@/assets/products/enhanced/Cherry-Bliss-organic-enhanced.png";
import pushPopOrganic from "@/assets/products/enhanced/Push-Pop-organic-enhanced.png";
import blueberryMidnightDrift from "@/assets/products/enhanced/Blueberry-Yum-Yum-midnight-drift.png";
import peachMidnightDrift from "@/assets/products/enhanced/Peach-Photoroom-midnight-drift.png";
import pinkLemonadeMidnightDrift from "@/assets/products/enhanced/Pink-Lemonade-midnight-drift.png";
import strawberryMidnightDrift from "@/assets/products/enhanced/Strawberry-midnight-drift.png";

import capFront from "@/assets/merch/lagom-throwback-loon-cap-front.webp";
import capBack from "@/assets/merch/lagom-throwback-loon-cap-back.webp";
import capThreeQuarterLeft from "@/assets/merch/lagom-throwback-loon-cap-front-three-quarter-left.webp";
import capThreeQuarterRight from "@/assets/merch/lagom-throwback-loon-cap-front-three-quarter-right.webp";
import teeFront from "@/assets/merch/lagom-black-logo-tee-front.webp";
import teeBack from "@/assets/merch/lagom-black-logo-tee-back.webp";
import teeThreeQuarter from "@/assets/merch/lagom-black-logo-tee-front-three-quarter.webp";
import teeFoldedFront from "@/assets/merch/lagom-black-logo-tee-folded-front.webp";
import hoodieFront from "@/assets/merch/lagom-mainstreet-hooded-sweatshirt-front.webp";
import hoodieBack from "@/assets/merch/lagom-mainstreet-hooded-sweatshirt-back.webp";
import hoodieFoldedFront from "@/assets/merch/lagom-mainstreet-hooded-sweatshirt-folded-front.webp";
import seltzersThumbnail from "@/assets/seltzers-thumbnail.webp";
import gummiesThumbnail from "@/assets/gummies-thumbnail.webp";

const GUMMY_PREVIEW_PRICE = 24.99;

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

const gummyProducts = gummyCatalog.map((gummy) => ({
  id: gummy.id,
  brand: "Lagom Naturals",
  name: gummy.name,
  price: GUMMY_PREVIEW_PRICE,
  flavor: gummy.flavor,
  flavorFamily: "Gummies",
  category: "Gummies",
  productLine: gummy.productLine,
  type:
    gummy.productLine === "Classic"
      ? "THC gummies"
      : `${gummy.productLine} THC gummies`,
  strength: "THC gummies",
  weight: gummy.packageLabel,
  image: gummy.image,
  imageAlt: `${gummy.name} ${gummy.productLine === "Classic" ? "" : `${gummy.productLine} `}gummy pouch`.trim(),
  variants: [
    {
      id: "pouch",
      label: gummy.packageLabel,
      detail: gummy.packageDetail,
      price: GUMMY_PREVIEW_PRICE,
      image: gummy.image,
    },
  ],
  accent:
    gummy.productLine === "Midnight Drift"
      ? "#191b25"
      : gummy.productLine === "Organic"
        ? "#3d6b45"
        : "#0f513d",
  preview: true,
  mock: true,
}));

// Product facts below are limited to approved product photography and current preview catalog conventions.
// Gummy pricing/package metadata remains preview-only until verified commerce data is connected.
export const products = [
  {
    id: "24k-lemonade",
    brand: "Lagom Naturals",
    name: "24K Lemonade",
    price: 6.99,
    flavor: "Lemonade",
    flavorFamily: "Citrus",
    category: "Seltzers",
    type: "THC infused seltzer",
    thcMgPerCan: 10,
    canVolume: "12 fl oz (355 mL)",
    sugar: "Zero sugar",
    carbs: "Zero carbs",
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
    type: "THC infused seltzer",
    thcMgPerCan: 10,
    canVolume: "12 fl oz (355 mL)",
    sugar: "Zero sugar",
    carbs: "Zero carbs",
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
    type: "THC infused seltzer",
    thcMgPerCan: 10,
    canVolume: "12 fl oz (355 mL)",
    sugar: "Zero sugar",
    carbs: "Zero carbs",
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
    type: "THC infused seltzer",
    thcMgPerCan: 10,
    canVolume: "12 fl oz (355 mL)",
    sugar: "Zero sugar",
    carbs: "Zero carbs",
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
    image: teeFront,
    gallery: [
      { src: teeFront, label: "Front", alt: "Black Lagom Heavyweight Cotton Tee, front view" },
      { src: teeBack, label: "Back", alt: "Black Lagom Heavyweight Cotton Tee, back view" },
      { src: teeThreeQuarter, label: "Three-quarter view", alt: "Black Lagom Heavyweight Cotton Tee, three-quarter front view" },
      { src: teeFoldedFront, label: "Folded view", alt: "Black Lagom Heavyweight Cotton Tee, folded front view" },
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
    image: hoodieFront,
    gallery: [
      { src: hoodieFront, label: "Front", alt: "Black Lagom Mainstreet hooded sweatshirt, front view" },
      { src: hoodieBack, label: "Back", alt: "Black Lagom Mainstreet hooded sweatshirt, back view" },
      { src: hoodieFoldedFront, label: "Folded view", alt: "Black Lagom Mainstreet hooded sweatshirt, folded front view" },
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
  ["Seltzers", "Seltzers", "Sparkling THC seltzers"],
  ["Gummies", "Gummies", "THC gummy collection"],
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
