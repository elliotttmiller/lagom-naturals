import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroCans from "./assets/products/hero.webp";

export default function HomeHero() {
  const atmosphere = useRef(null);
  const frame = useRef(null);
  useEffect(() => () => { if (frame.current) cancelAnimationFrame(frame.current); }, []);
  const updateAtmosphere = event => {
    if (event.pointerType !== "mouse" || !atmosphere.current) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, ((event.clientX - left) / width - .5) * 2));
    const y = Math.max(-1, Math.min(1, ((event.clientY - top) / height - .5) * 2));
    frame.current = requestAnimationFrame(() => { atmosphere.current?.style.setProperty("--pointer-x", `${x * 9}px`); atmosphere.current?.style.setProperty("--pointer-y", `${y * 6}px`); });
  };
  const resetAtmosphere = () => { if (frame.current) cancelAnimationFrame(frame.current); atmosphere.current?.style.setProperty("--pointer-x", "0px"); atmosphere.current?.style.setProperty("--pointer-y", "0px"); };
  return <section className="legacy-sky-hero" onPointerMove={updateAtmosphere} onPointerLeave={resetAtmosphere} aria-labelledby="legacy-sky-hero-title">
    <div className="legacy-sky-hero__atmosphere" ref={atmosphere} aria-hidden="true"><span className="legacy-sky-hero__light"/><span className="legacy-sky-hero__cloud legacy-sky-hero__cloud--far"/><span className="legacy-sky-hero__cloud legacy-sky-hero__cloud--mid"/><span className="legacy-sky-hero__cloud legacy-sky-hero__cloud--near"/><span className="legacy-sky-hero__cloud legacy-sky-hero__cloud--left"/><span className="legacy-sky-hero__cloud legacy-sky-hero__cloud--right"/></div>
    <div className="legacy-sky-hero__content"><p>THC SELTZERS · MADE FOR THE MOMENT</p><h1 id="legacy-sky-hero-title">Find your<br/><strong>just right.</strong></h1><span className="legacy-sky-hero__lede">Crisp, zero-sugar THC seltzers made for a more measured social ritual.</span><div className="legacy-sky-hero__actions"><Link to="/shop">SHOP SELTZERS <ArrowRight aria-hidden="true"/></Link><Link to="/learn">THC, EXPLAINED</Link></div><span className="legacy-sky-hero__details">10 MG THC · ZERO SUGAR · 12 FL OZ</span></div>
    <div className="legacy-sky-hero__product" aria-hidden="true"><img src={heroCans} alt="" width="1122" height="1402" fetchPriority="high" decoding="async"/></div>
  </section>;
}
