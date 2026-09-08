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

import hoodie from "@/assets/merch/Lagom-Mainstreet-Hooded-Sweatshirt-900x900.png";
import crewneck from "@/assets/merch/Lagom-Midweight-Crewneck-Sweatshirt-Front-900x900.png";

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
    id: "mainstreet-hoodie",
    name: "Mainstreet Hooded Sweatshirt",
    price: 68,
    type: "Hoodies",
    color: "Black",
    image: hoodie,
  },
  {
    id: "midweight-crewneck",
    name: "Midweight Crewneck Sweatshirt",
    price: 58,
    type: "Crewnecks",
    color: "Sand",
    image: crewneck,
  },
];

export const categoryCards = [
  ["Seltzers", "Seltzers"],
  ["Gummies", "Gummies"],
];
export const categoryImages = {
  Seltzers: lemonade,
  Gummies: blueberryYumYum,
};
