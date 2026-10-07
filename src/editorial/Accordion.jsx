import React,{useId,useState} from "react";
import {ChevronDown} from "lucide-react";
import {m,Presence,motionTokens,useReducedMotion} from "@/motionSystem";

export function AccordionItem({title,children,open,onToggle,id}){
  const reducedMotion=useReducedMotion();
  const panelId=id+"-panel";
  return <div className={"editorial-accordion__item"+(open?" is-open":"")}>
    <h3>
      <button type="button" aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
        <span>{title}</span>
        <m.span aria-hidden="true" animate={{rotate:open?180:0}} transition={reducedMotion?{duration:0}:motionTokens.springSnappy}><ChevronDown/></m.span>
      </button>
    </h3>
    <Presence initial={false}>
      {open&&<m.div id={panelId} className="editorial-accordion__panel" role="region" initial={reducedMotion?false:{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={reducedMotion?{height:0,opacity:0}:{height:0,opacity:0}} transition={reducedMotion?{duration:0}:{height:{duration:.42,ease:motionTokens.easeSoft},opacity:{duration:.24,ease:motionTokens.ease}}}>
        <div>{children}</div>
      </m.div>}
    </Presence>
  </div>;
}

export default function Accordion({items,defaultOpen=0,className=""}){
  const baseId=useId().replace(/:/g,"");
  const [openIndex,setOpenIndex]=useState(defaultOpen);
  return <div className={"editorial-accordion "+className}>
    {items.map((item,index)=><AccordionItem key={item.id||item.title} id={baseId+"-"+index} title={item.title} open={openIndex===index} onToggle={()=>setOpenIndex(openIndex===index?null:index)}>{item.content}</AccordionItem>)}
  </div>;
}
