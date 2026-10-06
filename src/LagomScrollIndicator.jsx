import {useEffect,useState} from 'react'

const SCENES=[
  ['home-scene-hero','Hero'],
  ['home-scene-flavors','Flavors'],
  ['gummies','Gummies'],
]

export default function LagomScrollIndicator(){
  const[active,setActive]=useState(0)
  useEffect(()=>{
    const update=()=>{
      const viewport=window.innerHeight||1
      let best=0
      let score=Infinity
      SCENES.forEach(([id],index)=>{
        const node=document.getElementById(id)
        if(!node)return
        const distance=Math.abs(node.getBoundingClientRect().top)
        if(distance<score){score=distance;best=index}
      })
      setActive(best)
    }
    update()
    window.addEventListener('scroll',update,{passive:true})
    window.addEventListener('resize',update,{passive:true})
    return()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update)}
  },[])
  const jump=id=>document.getElementById(id)?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})
  return <nav className="lagom-scroll-indicator" aria-label="Homepage sections">
    {SCENES.map(([id,label],index)=><button key={id} type="button" className={index===active?'is-active':''} aria-label={label} aria-current={index===active?'step':undefined} onClick={()=>jump(id)}/>)}
  </nav>
}
