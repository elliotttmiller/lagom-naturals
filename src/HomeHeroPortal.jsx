import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { m, useReducedMotion } from "@/motionSystem";
import { ShowcaseCan, labelMedia, showcaseProducts } from "@/home/SeltzerShowcase";

export default function HomeHero() {
  const reducedMotion = useReducedMotion();

  return <section className="legacy-sky-hero" aria-labelledby="legacy-sky-hero-title">
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
