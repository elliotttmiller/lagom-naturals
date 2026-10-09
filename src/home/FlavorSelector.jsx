import React,{useRef} from "react";

export default function FlavorSelector({items,activeIndex,onSelect}){
  const refs=useRef([]);
  const move=(event,index)=>{
    let next=index;
    if(event.key==="ArrowRight"||event.key==="ArrowDown") next=(index+1)%items.length;
    else if(event.key==="ArrowLeft"||event.key==="ArrowUp") next=(index-1+items.length)%items.length;
    else if(event.key==="Home") next=0;
    else if(event.key==="End") next=items.length-1;
    else return;
    event.preventDefault();
    event.stopPropagation();
    onSelect(next);
    requestAnimationFrame(()=>refs.current[next]?.focus());
  };

  return <div className="flavor-selector" role="tablist" aria-label="Choose a Lagom seltzer flavor">
    {items.map((item,index)=><button
      key={item.id}
      ref={node=>{refs.current[index]=node}}
      type="button"
      role="tab"
      aria-selected={index===activeIndex}
      tabIndex={index===activeIndex?0:-1}
      className={index===activeIndex?"is-active":""}
      onClick={()=>onSelect(index)}
      onKeyDown={event=>move(event,index)}
    >
      <span>{String(index+1).padStart(2,"0")}</span>
      <b>{item.name}</b>
    </button>)}
  </div>;
}
