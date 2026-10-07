import React from "react";

export default function FeatureCard({index,eyebrow,title,body}){
  return <article className="editorial-feature-card">
    <span>{index}</span>
    <div>
      {eyebrow&&<p>{eyebrow}</p>}
      <h3>{title}</h3>
      {body&&<p>{body}</p>}
    </div>
  </article>;
}
