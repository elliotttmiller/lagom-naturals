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
import hoodie from "@/assets/merch/Lagom-Mainstreet-Hooded-Sweatshirt-900x900.png";
import crewneck from "@/assets/merch/Lagom-Midweight-Crewneck-Sweatshirt-Front-900x900.png";

const gummyProducts = [
  ["blueberry-yum-yum", "Blueberry Yum Yum", "Blueberry", blueberryYumYum],
  ["green-apple", "Green Apple", "Green apple", greenApple],
  ["strawberry-banana", "Strawberry Banana", "Strawberry banana", strawberryBanana],
].map(([id, name, flavor, image]) => ({
  id,
  brand: "Lagom Naturals",
  name,
  price: 24.99,
  flavor,
  flavorFamily: "Gummies",
  category: "Gummies",
  type: "THC gummies",
  strength: "THC gummies",
  weight: "10 pc",
  image,
  variants: [
    {
      id: "10-pack",
      label: "10 pc",
      detail: "10-piece pouch",
      price: 24.99,
      image,
    },
  ],
  accent: "#0f513d",
}));

// Facts below are limited to text visible on approved package photography.
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
