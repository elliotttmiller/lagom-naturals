import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { m, useReducedMotion } from "@/motionSystem";
import { ShowcaseCan, labelMedia, showcaseProducts } from "@/home/SeltzerShowcase";

export default function HomeHero() {
  const reducedMotion = useReducedMotion();

  return <section className="legacy-sky-hero" aria-labelledby="legacy-sky-hero-title">
    <svg className="legacy-sky-hero__bird-flock" viewBox="0 0 320 110" aria-hidden="true" focusable="false">
      <path d="M12 58c14-17 27-19 43-7 9 7 15 11 24 9-8 8-20 7-31 0-12-8-22-8-36-2 15-2 25 1 34 7-11-4-21-6-34-7Zm104-32c17-13 32-13 45 1 8 9 14 14 24 13-9 7-21 4-31-5-10-10-20-12-34-9 14-5 25-4 35 1-12-1-22-1-39-1Zm81 53c14-16 28-19 43-8 10 7 17 10 26 7-7 9-19 9-31 2-12-7-22-7-36 0 14-4 25-2 35 3-12-3-22-3-37-4Zm61-46c13-13 26-15 39-5 8 6 14 9 23 7-7 7-18 7-28 1-10-7-19-7-32-2 13-4 22-3 31 1-10-2-20-1-33-2Z" />
    </svg>
    <div className="legacy-sky-hero__content" data-home-snap-content><p className="legacy-sky-hero__eyebrow">A more balanced way to unwind</p><h1 id="legacy-sky-hero-title">FIND YOUR<br /><strong>PERFECT BALANCE.</strong></h1><div className="legacy-sky-hero__actions"><Link to="/shop">SHOP NOW <ArrowRight aria-hidden="true" /></Link></div></div>
    <div className="legacy-sky-hero__flavor-stage" role="group" aria-label="Explore our four seltzer flavors">
      {showcaseProducts.map((product, index) => (
        <div className="legacy-sky-hero__flavor" key={product.id}>
          <m.button
            type="button"
            className="legacy-sky-hero__flavor-can"
            aria-label={`Quick view ${product.name}`}
            aria-haspopup="dialog"
            onClick={(event) => window.dispatchEvent(new CustomEvent("lagom:seltzer-quick-view", {
              detail: { productId: product.id, trigger: event.currentTarget },
            }))}
            whileHover={reducedMotion ? undefined : { y: -7, rotate: index % 2 ? 1.1 : -1.1, scale: 1.035 }}
            whileTap={reducedMotion ? undefined : { scale: .98 }}
            transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 220, damping: 24 }}
          >
            <ShowcaseCan
              label={labelMedia[product.id]}
              product={product}
              reducedMotion={reducedMotion}
              interactive
              mediaSizes="(max-width: 430px) 20vw, (max-width: 899px) 17vw, 15rem"
            />
          </m.button>
        </div>
      ))}
    </div>
  </section>;
}
