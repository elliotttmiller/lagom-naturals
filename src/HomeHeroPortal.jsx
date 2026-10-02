import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { responsiveImages } from "@/generated/responsiveImages";
const mobileHero = responsiveImages.heroMobile.hero;
const desktopHero = responsiveImages.heroDesktop.hero;
export default function HomeHero() {
  const [mediaReady, setMediaReady] = useState(false);
  return <section className="legacy-sky-hero" aria-labelledby="legacy-sky-hero-title"><div className="legacy-sky-hero__product legacy-sky-hero__product--fullbleed" aria-hidden="true"><picture><source media="(max-width: 899px)" type="image/avif" srcSet={mobileHero.avifSrcSet} sizes="100vw" /><source media="(max-width: 899px)" type="image/webp" srcSet={mobileHero.webpSrcSet} sizes="100vw" /><source media="(min-width: 900px)" type="image/avif" srcSet={desktopHero.avifSrcSet} sizes="100vw" /><source media="(min-width: 900px)" type="image/webp" srcSet={desktopHero.webpSrcSet} sizes="100vw" /><img className={mediaReady ? "is-ready" : "is-loading"} src={desktopHero.src} alt="" fetchPriority="high" decoding="async" onLoad={() => setMediaReady(true)} onError={() => setMediaReady(true)} /></picture></div><div className="legacy-sky-hero__content" data-home-snap-content><h1 id="legacy-sky-hero-title">FIND YOUR<br /><strong>PERFECT BALANCE.</strong></h1><span className="legacy-sky-hero__lede">Full of flavor. Just the right amount of THC. Crafted for an easygoing experience that feels unmistakably <em>Lagom.</em></span><div className="legacy-sky-hero__actions"><Link to="/shop">SHOP NOW <ArrowRight aria-hidden="true" /></Link></div></div></section>;
}
