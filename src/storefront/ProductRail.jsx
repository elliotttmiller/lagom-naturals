import React from "react";
import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";

export default function ProductRail({eyebrow,title,intro,to="/shop",linkLabel="View all",children,id,className=""}){
  return <section id={id} className={"product-rail "+className}>
    <header className="product-rail__header">
      <div>
        {eyebrow&&<p>{eyebrow}</p>}
        <h2>{title}</h2>
        {intro&&<span>{intro}</span>}
      </div>
      {to&&<Link to={to}>{linkLabel} <ArrowRight aria-hidden="true"/></Link>}
    </header>
    <div className="product-rail__track">{children}</div>
  </section>;
}
