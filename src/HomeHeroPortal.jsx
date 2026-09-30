import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Leaf, Sparkles } from "lucide-react";
import heroProduct from "@/assets/products/hero.webp";

export default function HomeHero() {
  return <section className="legacy-sky-hero" aria-labelledby="legacy-sky-hero-title">
    <div className="legacy-sky-hero__atmosphere" aria-hidden="true"><span className="legacy-sky-hero__light"/><span className="hero-sky-cloud hero-sky-cloud--horizon"/><span className="hero-sky-cloud hero-sky-cloud--high"/><span className="hero-sky-cloud hero-sky-cloud--near"/></div>
    <div className="legacy-sky-hero__product" aria-hidden="true"><img src={heroProduct} alt="" fetchPriority="high" decoding="async"/></div>
    <div className="legacy-sky-hero__content" data-home-snap-content><p>PREMIUM HEMP-DERIVED THC</p><h1 id="legacy-sky-hero-title">FIND YOUR<br/><strong>PERFECT BALANCE.</strong></h1><span className="legacy-sky-hero__lede">Full of flavor. Just the right amount of THC. Crafted for an easygoing experience that feels <em>unmistakably Lagom.</em></span><div className="legacy-sky-hero__actions"><Link to="/shop">SHOP PRODUCTS <ArrowRight aria-hidden="true"/></Link><Link to="/learn">LEARN MORE <ArrowRight aria-hidden="true"/></Link></div><ul className="legacy-sky-hero__proofs" aria-label="Lagom product highlights"><li><Leaf aria-hidden="true"/><span>Hemp-derived<br/>THC</span></li><li><Sparkles aria-hidden="true"/><span>Zero sugar<br/>seltzers</span></li><li><Droplets aria-hidden="true"/><span>Clear serving<br/>information</span></li></ul></div>
  </section>;
}
