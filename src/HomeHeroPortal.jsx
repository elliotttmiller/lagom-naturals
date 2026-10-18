import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ShelflineHeroShelf from "@/home/ShelflineHeroShelf";
import DesktopBeverageStage from "@/home/DesktopBeverageStage";
import { products } from "@/catalogData";

const HERO_IDS = ["24k-lemonade", "blackberry-breeze", "strawberry-lime-fusion", "watermelon-refresher"];
const showcaseProducts = HERO_IDS.map(id => products.find(product => product.id === id)).filter(Boolean);
const potencyValues = [...new Set(showcaseProducts.map(product => product.thcMgPerCan).filter(value => Number.isFinite(value)))];
const potencyCopy = potencyValues.length === 1 ? `${potencyValues[0]} mg THC per can.` : "Read each can for THC content.";

/**
 * Lagom's original sky campaign copy and SHOP NOW action (pre-PR41) restored.
 * Desktop uses its own beverage-led interactive campaign composition.
 * The prior mobile stage is deliberately preserved.
 */
export default function HomeHero() {
  return (
    <section className="dm-hero dm-hero--lagom" aria-labelledby="dm-hero-heading">
      <div className="dm-hero__sky" aria-hidden="true" />
      <div className="dm-hero__inner">
        <div className="dm-hero__top">
          <p className="dm-hero__eyebrow">A more balanced way to unwind</p>
          <h1 id="dm-hero-heading" className="dm-hero__title">
            <span>FIND YOUR</span>
            <strong>PERFECT BALANCE.</strong>
          </h1>
          <Link className="dm-hero__shop-now" to="/shop">
            SHOP NOW <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className="dm-hero__stage">
          <div className="lagom-desktop-hero-wrapper"><DesktopBeverageStage products={showcaseProducts} /></div>
          <div className="lagom-mobile-hero-wrapper"><ShelflineHeroShelf products={showcaseProducts} /></div>
        </div>
        <div className="dm-hero__foot">
          <div className="dm-hero__copy">
            <p className="dm-hero__intro">Flavor-first hemp-derived THC seltzers for moments worth making your own.</p>
            <p className="dm-hero__disclaimer">{showcaseProducts.length} flavors. {potencyCopy} Individual experiences vary.</p>
          </div>
          <Link className="dm-hero__learn" to="/learn">
            THC, explained <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="dm-hero__bottom" aria-hidden="true">
        <span>LAGOM NATURALS / MINNEAPOLIS</span>
        <span className="dm-hero__bottom-mark">✳</span>
        <span>NEITHER TOO MUCH, NOR TOO LITTLE</span>
      </div>
    </section>
  );
}
