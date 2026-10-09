import React from "react";
import canBase480Avif from "@/assets/seltzers/lagom-seltzer-can-base-480.avif";
import canBase480Webp from "@/assets/seltzers/lagom-seltzer-can-base-480.webp";
import canBase889Avif from "@/assets/seltzers/lagom-seltzer-can-base-889.avif";
import canBase889Webp from "@/assets/seltzers/lagom-seltzer-can-base-889.webp";
import lemonade480Avif from "@/assets/seltzers/24k-lemonade-label-480.avif";
import lemonade480Webp from "@/assets/seltzers/24k-lemonade-label-480.webp";
import lemonade889Avif from "@/assets/seltzers/24k-lemonade-label-889.avif";
import lemonade889Webp from "@/assets/seltzers/24k-lemonade-label-889.webp";
import blackberry480Avif from "@/assets/seltzers/blackberry-breeze-label-480.avif";
import blackberry480Webp from "@/assets/seltzers/blackberry-breeze-label-480.webp";
import blackberry889Avif from "@/assets/seltzers/blackberry-breeze-label-889.avif";
import blackberry889Webp from "@/assets/seltzers/blackberry-breeze-label-889.webp";
import strawberry480Avif from "@/assets/seltzers/strawberry-lime-label-aligned-480.avif";
import strawberry480Webp from "@/assets/seltzers/strawberry-lime-label-aligned-480.webp";
import strawberry889Avif from "@/assets/seltzers/strawberry-lime-label-aligned-889.avif";
import strawberry889Webp from "@/assets/seltzers/strawberry-lime-label-aligned-889.webp";
import watermelon480Avif from "@/assets/seltzers/watermelon-label-480.avif";
import watermelon480Webp from "@/assets/seltzers/watermelon-label-480.webp";
import watermelon889Avif from "@/assets/seltzers/watermelon-label-889.avif";
import watermelon889Webp from "@/assets/seltzers/watermelon-label-889.webp";

const LABELS={
  "24k-lemonade":{avif:`${lemonade480Avif} 480w, ${lemonade889Avif} 889w`,webp:`${lemonade480Webp} 480w, ${lemonade889Webp} 889w`,src:lemonade889Webp},
  "blackberry-breeze":{avif:`${blackberry480Avif} 480w, ${blackberry889Avif} 889w`,webp:`${blackberry480Webp} 480w, ${blackberry889Webp} 889w`,src:blackberry889Webp},
  "strawberry-lime-fusion":{avif:`${strawberry480Avif} 480w, ${strawberry889Avif} 889w`,webp:`${strawberry480Webp} 480w, ${strawberry889Webp} 889w`,src:strawberry889Webp},
  "watermelon-refresher":{avif:`${watermelon480Avif} 480w, ${watermelon889Avif} 889w`,webp:`${watermelon480Webp} 480w, ${watermelon889Webp} 889w`,src:watermelon889Webp},
};

export function getSeltzerLabel(productId){return LABELS[productId]||null}

export default function SeltzerCan({product,className="",sizes="(max-width: 899px) 48vw, 22rem",decorative=false,eager=false}){
  const productId=typeof product==="string"?product:product?.id;
  const name=typeof product==="string"?product:product?.name;
  const label=getSeltzerLabel(productId);
  if(!label)return null;
  return <span className={`seltzer-can ${className}`.trim()} role={decorative?undefined:"img"} aria-hidden={decorative?"true":undefined} aria-label={decorative?undefined:`${name||"Lagom"} THC seltzer can`}>
    <picture className="seltzer-can__base" aria-hidden="true">
      <source type="image/avif" srcSet={`${canBase480Avif} 480w, ${canBase889Avif} 889w`} sizes={sizes}/>
      <source type="image/webp" srcSet={`${canBase480Webp} 480w, ${canBase889Webp} 889w`} sizes={sizes}/>
      <img src={canBase889Webp} alt="" loading={eager?"eager":"lazy"} fetchPriority={eager?"high":"auto"} decoding="async"/>
    </picture>
    <picture className="seltzer-can__label" aria-hidden="true">
      <source type="image/avif" srcSet={label.avif} sizes={sizes}/>
      <source type="image/webp" srcSet={label.webp} sizes={sizes}/>
      <img src={label.src} alt="" loading={eager?"eager":"lazy"} fetchPriority={eager?"high":"auto"} decoding="async"/>
    </picture>
  </span>;
}
