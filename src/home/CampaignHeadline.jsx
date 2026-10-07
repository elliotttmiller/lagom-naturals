import React from "react";

export default function CampaignHeadline({eyebrow="Premium THC seltzer",title,subhead,id}){
  return <div className="campaign-headline">
    <p className="campaign-headline__eyebrow">{eyebrow}</p>
    <h1 id={id}>{title}</h1>
    {subhead&&<p className="campaign-headline__subhead">{subhead}</p>}
  </div>;
}
