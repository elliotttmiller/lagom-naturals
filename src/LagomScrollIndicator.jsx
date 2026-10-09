import {useEffect,useState} from 'react'

const SCENES=[
  ['home-scene-hero','Hero'],
  ['home-scene-flavors','Seltzer flavors'],
  ['home-scene-editorial','Our story'],
  ['gummies','Gummies'],
  ['home-scene-collections','Shop collections'],
]

export default function LagomScrollIndicator(){
  const[active,setActive]=useState(0)
  useEffect(()=>{
    let frame=0
    let lastIndex=-1
    const measure=()=>{
      frame=0
      let best=0
      let bestDistance=Infinity
      SCENES.forEach(([id],index)=>{
        const scene=document.getElementById(id)
        if(!scene)return
        const distance=Math.abs(scene.getBoundingClientRect().top)
        if(distance<bestDistance){bestDistance=distance;best=index}
      })
      if(best!==lastIndex){lastIndex=best;setActive(best)}
    }
    const schedule=()=>{
      if(!frame)frame=window.requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener('scroll',schedule,{passive:true})
    window.addEventListener('resize',schedule,{passive:true})
    return()=>{
      window.removeEventListener('scroll',schedule)
      window.removeEventListener('resize',schedule)
      if(frame)window.cancelAnimationFrame(frame)
    }
  },[])
  const jump=id=>{
    const scene=document.getElementById(id)
    if(!scene)return
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches
    scene.scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'})
  }
  return <nav className="lagom-scroll-indicator" aria-label="Homepage sections">
    {SCENES.map(([id,label],index)=><button
      key={id}
      type="button"
      className={index===active?'is-active':''}
      aria-label={`Go to ${label}`}
      aria-current={index===active?'step':undefined}
      onClick={()=>jump(id)}
    />)}
  </nav>
}
