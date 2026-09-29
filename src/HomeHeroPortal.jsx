import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Leaf, Sparkles } from "lucide-react";
import { m } from "@/motionSystem";
import { useAtmosphericHeroMotion } from "@/AtmosphericScrollExperience";
import heroProduct from "@/assets/products/hero.webp";

export default function HomeHero() {
  const hero = useRef(null);
  const atmosphere = useRef(null);
  const frame = useRef(null);
  const heroContentMotion = useAtmosphericHeroMotion(hero);
  useEffect(() => () => { if (frame.current) cancelAnimationFrame(frame.current); }, []);
  const updateAtmosphere = event => {
    if (event.pointerType !== "mouse" || !atmosphere.current) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, ((event.clientX - left) / width - .5) * 2));
    const y = Math.max(-1, Math.min(1, ((event.clientY - top) / height - .5) * 2));
    frame.current = requestAnimationFrame(() => {
      const scene = atmosphere.current;
      scene?.style.setProperty("--pointer-x", `${x * 9}px`);
      scene?.style.setProperty("--pointer-y", `${y * 6}px`);
      [["mid", -4, -2], ["near", -7, -3], ["left", -5, -2], ["right", -4, -2], ["horizon", -3, -1]].forEach(([layer, depthX, depthY]) => {
        scene?.style.setProperty(`--${layer}-x`, `${x * depthX}px`);
        scene?.style.setProperty(`--${layer}-y`, `${y * depthY}px`);
      });
    });
  };
  const resetAtmosphere = () => { if (frame.current) cancelAnimationFrame(frame.current); const scene = atmosphere.current; scene?.style.setProperty("--pointer-x", "0px"); scene?.style.setProperty("--pointer-y", "0px"); ["mid", "near", "left", "right", "horizon"].forEach(layer => { scene?.style.setProperty(`--${layer}-x`, "0px"); scene?.style.setProperty(`--${layer}-y`, "0px"); }); };
  return <section ref={hero} className="legacy-sky-hero" onPointerMove={updateAtmosphere} onPointerLeave={resetAtmosphere} aria-labelledby="legacy-sky-hero-title">
    <div className="legacy-sky-hero__atmosphere" ref={atmosphere} aria-hidden="true"><span className="legacy-sky-hero__light"/><span className="legacy-sky-hero__cloud-depth legacy-sky-hero__cloud-depth--mid"><span className="legacy-sky-hero__cloud legacy-sky-hero__cloud--mid"/></span><span className="legacy-sky-hero__cloud-depth legacy-sky-hero__cloud-depth--near"><span className="legacy-sky-hero__cloud legacy-sky-hero__cloud--near"/></span><span className="legacy-sky-hero__cloud-depth legacy-sky-hero__cloud-depth--left"><span className="legacy-sky-hero__cloud legacy-sky-hero__cloud--left"/></span><span className="legacy-sky-hero__cloud-depth legacy-sky-hero__cloud-depth--right"><span className="legacy-sky-hero__cloud legacy-sky-hero__cloud--right"/></span><span className="legacy-sky-hero__cloud-depth legacy-sky-hero__cloud-depth--horizon"><span className="legacy-sky-hero__cloud legacy-sky-hero__cloud--horizon"/></span></div>
    <div className="legacy-sky-hero__product" aria-hidden="true"><img src={heroProduct} alt="" fetchPriority="high" decoding="async"/></div>
    <m.div className="legacy-sky-hero__content" style={heroContentMotion}><p>PREMIUM HEMP-DERIVED THC</p><h1 id="legacy-sky-hero-title">FIND YOUR<br/><strong>HIGHER BALANCE.</strong></h1><span className="legacy-sky-hero__lede">Taste-forward THC seltzers and gummies for considered adult occasions. Clear serving information, crafted for real moments.</span><div className="legacy-sky-hero__actions"><Link to="/shop">SHOP PRODUCTS <ArrowRight aria-hidden="true"/></Link><Link to="/learn">LEARN MORE <ArrowRight aria-hidden="true"/></Link></div><ul className="legacy-sky-hero__proofs" aria-label="Lagom product highlights"><li><Leaf aria-hidden="true"/><span>Hemp-derived<br/>THC</span></li><li><Sparkles aria-hidden="true"/><span>Zero sugar<br/>seltzers</span></li><li><Droplets aria-hidden="true"/><span>Clear serving<br/>information</span></li></ul></m.div>
  </section>;
}
