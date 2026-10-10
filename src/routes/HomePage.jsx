import React,{useMemo} from "react";
import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";
import Shell from "@/storefront/StorefrontShell";
import HomepageAtmosphere from "@/home/HomepageAtmosphere";
import ScrollCloudParallax from "@/home/ScrollCloudParallax";
import HomeHero from "@/HomeHeroPortal";
import GummyShowcase from "@/home/GummyShowcase";
import { HomepageSeltzerMedia } from "@/home/HomepageProductMedia";
import LifestyleMosaic from "@/home/LifestyleMosaic";
import BrandPrinciples from "@/home/BrandPrinciples";
import ProductRail from "@/storefront/ProductRail";
import CatalogProductCard from "@/storefront/CatalogProductCard";
import Accordion from "@/editorial/Accordion";
import ResponsiveImage from "@/storefront/ResponsiveImage";
import {products} from "@/catalogData";
import {responsiveImages} from "@/generated/responsiveImages";

const LEARN_ITEMS=[
  {
    id:"what-is-a-thc-beverage",
    title:"What is a THC beverage?",
    content:<p>Lagom is a sparkling beverage infused with hemp-derived THC. It contains no alcohol. Individual experiences with THC vary.</p>,
  },
  {
    id:"read-the-can",
    title:"What should I look for on the can?",
    content:<p>Current Lagom seltzers are labeled with 10 mg THC per can and 12 fl oz (355 mL). Product information should be read together with the package label.</p>,
  },
  {
    id:"responsible-use",
    title:"How should I approach THC responsibly?",
    content:<p>If you are unfamiliar with THC, begin with a lower amount and allow adequate time before consuming more. Do not drive or operate machinery after consuming THC. Keep products away from children and pets.</p>,
  },
];

export default function HomePage(){
  const seltzers=useMemo(()=>products.filter(product=>product.category==="Seltzers"),[]);
  const storefront=responsiveImages.store["storefront-day"];

  return <Shell>
    <div className="editorial-home">
      <div className="editorial-home__campaign sky-home">
        <HomepageAtmosphere/>
        <ScrollCloudParallax/>
        <section id="home-scene-hero" className="editorial-home__campaign-scene atmospheric-scene-hero beverage-hero" aria-label="Lagom THC seltzer flavor campaign">
          <HomeHero/>
        </section>
      </div>

      <section className="editorial-statement" aria-labelledby="editorial-statement-title">
        <p>Lagom Naturals · Minneapolis</p>
        <h2 id="editorial-statement-title">A more considered way to drink THC.</h2>
        <div>
          <p>Premium sparkling beverages built around flavor, clear product information, and the Swedish idea behind our name: not too much, not too little — just right.</p>
          <Link to="/about">Our story <ArrowRight aria-hidden="true"/></Link>
        </div>
      </section>

      <ProductRail eyebrow="The seltzer collection" title="Four flavors. One point of view." intro="Crisp sparkling THC seltzers presented by flavor, potency, and format." to="/shop/seltzers" linkLabel="Shop seltzers">
        {seltzers.map(product=><CatalogProductCard
          key={product.id}
          id={product.id}
          to={"/product/"+product.id}
          mediaNode={<HomepageSeltzerMedia product={product}/>}
          contextLabel={product.flavorFamily}
          name={product.name}
          price={product.price}
          reviewStatus={product.description}
          meta={<span className="product-facts"><span>{product.thcMgPerCan+" mg THC"}</span><span>{product.canVolume}</span></span>}
        />)}
      </ProductRail>

      <LifestyleMosaic/>
      <BrandPrinciples/>

      <GummyShowcase/>

      <section className="home-retail" aria-labelledby="home-retail-title">
        <div className="home-retail__copy">
          <p>Find Lagom</p>
          <h2 id="home-retail-title">Out in the world.</h2>
          <p>Retail availability varies. Our locator will surface confirmed retailer data when distribution data is connected.</p>
          <Link to="/visit">Find Lagom <ArrowRight aria-hidden="true"/></Link>
        </div>
        <ResponsiveImage src={storefront.src} alt="Lagom Naturals storefront in Minneapolis" sizes="(max-width: 899px) 100vw, 55vw" loading="lazy" decoding="async"/>
      </section>

      <section className="home-education" aria-labelledby="home-education-title">
        <header>
          <p>THC, explained</p>
          <h2 id="home-education-title">Clear enough to use.</h2>
          <Link to="/learn">Learn more <ArrowRight aria-hidden="true"/></Link>
        </header>
        <Accordion items={LEARN_ITEMS}/>
      </section>
    </div>
  </Shell>;
}
