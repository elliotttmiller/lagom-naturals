import React from "react";

export default function FlavorSelector({items,activeIndex,onSelect}){
  return <div className="flavor-selector" role="tablist" aria-label="Choose a Lagom seltzer flavor">
    {items.map((item,index)=><button
      key={item.id}
      type="button"
      role="tab"
      aria-selected={index===activeIndex}
      tabIndex={index===activeIndex?0:-1}
      className={index===activeIndex?"is-active":""}
      onClick={()=>onSelect(index)}
    >
      <span>{String(index+1).padStart(2,"0")}</span>
      <b>{item.name}</b>
    </button>)}
  </div>;
}
