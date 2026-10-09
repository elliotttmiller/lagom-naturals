import React from "react";

export default function EditorialPageHeader({eyebrow,title,lede,children,className=""}){
  return <header className={"editorial-page-header "+className}>
    {eyebrow&&<p>{eyebrow}</p>}
    <h1>{title}</h1>
    {lede&&<div className="editorial-page-header__lede">{lede}</div>}
    {children}
  </header>;
}
