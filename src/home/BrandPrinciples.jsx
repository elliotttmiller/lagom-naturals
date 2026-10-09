import React from "react";
import FeatureCard from "@/editorial/FeatureCard";

const FEATURES=[
  {index:"01",eyebrow:"Product clarity",title:"Potency stays visible.",body:"Product surfaces keep THC content, format, and pack information explicit rather than burying it in decorative UI."},
  {index:"02",eyebrow:"Considered experience",title:"Flavor first.",body:"The interface leads with flavor, occasion, product design, and the social experience around a premium sparkling beverage."},
  {index:"03",eyebrow:"Responsible use",title:"Information before inference.",body:"The site avoids implying that THC affects everyone the same way and directs customers to clear product and responsible-use information."},
];

export default function BrandPrinciples(){
  return <section className="brand-principles" aria-labelledby="brand-principles-title">
    <header><p>Why Lagom</p><h2 id="brand-principles-title">A beverage brand with the details intact.</h2></header>
    <div>{FEATURES.map(feature=><FeatureCard key={feature.index} {...feature}/>)}</div>
  </section>;
}
