import React from "react";
import SeltzerCan from "@/products/SeltzerCan";

import strawberry from "../../archive/assets/products-originals/Strawberry-Photoroom-900x900.png";
import strawberryBanana from "../../archive/assets/products-originals/Strawberry-Banana-Photoroom-900x900.png";
import pushPop from "../../archive/assets/products-originals/Push-Pop-Photoroom-900x900.png";
import pushPopOrganic from "../../archive/assets/products-originals/Push-Pop-1-Photoroom-900x900.png";
import pinkLemonade from "../../archive/assets/products-originals/Pink-Lemonade-Photoroom-900x900.png";
import peach from "../../archive/assets/products-originals/Peach-Photoroom-900x900.png";
import greenApple from "../../archive/assets/products-originals/Green-Apple-Photoroom-900x900.png";
import cherryBliss from "../../archive/assets/products-originals/Cherry-Bliss-Photoroom-900x900.png";
import blueberry from "../../archive/assets/products-originals/Blueberry-Yum-Yum-3-Photoroom-900x900.png";
import blueberryMidnight from "../../archive/assets/products-originals/Blueberry-Yum-Yum-1-Photoroom-900x900.png";
import blueRazz from "../../archive/assets/products-originals/Blue-Razz-Photoroom-Photoroom-1-900x900.png";
import berryMelon from "../../archive/assets/products-originals/Berry-Melon-Bliss-Photoroom-900x900.png";

// Explicit catalog-id contract. Never infer an image from the product name:
// names recur across gummy collections and have different approved packaging.
const transparentGummyMedia = Object.freeze({
  "push-pop":pushPop,
  "blueberry-yum-yum":blueberry,
  "green-apple":greenApple,
  "strawberry-banana":strawberryBanana,
  "berry-melon-bliss-organic":berryMelon,
  "blue-razz-organic":blueRazz,
  "cherry-bliss-organic":cherryBliss,
  "push-pop-organic":pushPopOrganic,
  "blueberry-yum-yum-midnight-drift":blueberryMidnight,
  "peach-midnight-drift":peach,
  "pink-lemonade-midnight-drift":pinkLemonade,
  "strawberry-midnight-drift":strawberry,
});

export function HomepageSeltzerMedia({product}) {
  return <span className="home-product-art home-product-art--can" aria-hidden="true">
    <SeltzerCan product={product} decorative sizes="(max-width: 699px) 46vw, (max-width: 1100px) 24vw, 18rem" />
  </span>;
}

export function HomepageGummyMedia({product}) {
  const src=transparentGummyMedia[product.id];
  if(!src) return null;
  return <span className="home-product-art home-product-art--gummy" aria-hidden="true">
    <img src={src} alt="" loading="lazy" decoding="async" />
  </span>;
}
