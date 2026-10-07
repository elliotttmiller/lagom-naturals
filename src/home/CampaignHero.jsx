import React from "react";
import CampaignHeadline from "@/home/CampaignHeadline";
import FlavorEnvironment from "@/home/FlavorEnvironment";

export default function CampaignHero({scene,product,children}){
  return <article
    className="campaign-hero"
    data-flavor={product.id}
    style={{
      "--flavor-primary":scene?.theme?.primary,
      "--flavor-secondary":scene?.theme?.secondary,
      "--flavor-soft":scene?.theme?.soft,
      "--flavor-ink":scene?.theme?.ink,
    }}
  >
    <FlavorEnvironment scene={scene}/>
    <div className="campaign-hero__headline">
      <CampaignHeadline title={product.name} subhead={product.flavor||undefined}/>
    </div>
    <div className="campaign-hero__art">{children}</div>
  </article>;
}
