import React from 'react'
import cloudNearMass from '@/assets/atmosphere/clouds/cloud-near-mass.webp'
import cloudMidField from '@/assets/atmosphere/clouds/cloud-mid-field.webp'
import cloudLeft from '@/assets/atmosphere/clouds/cloud-left-fragment.webp'
import cloudRight from '@/assets/atmosphere/clouds/cloud-right-fragment.webp'
import cloudCenter from '@/assets/atmosphere/clouds/cloud-21.webp'
import cloudUpper from '@/assets/atmosphere/clouds/cloud-10.webp'

const TRANSITION_ASSETS=[
  cloudNearMass,
  cloudMidField,
  cloudLeft,
  cloudRight,
  cloudCenter,
  cloudUpper,
]

function preloadImage(src){
  return new Promise(resolve=>{
    const image=new Image()
    let settled=false
    const finish=()=>{
      if(settled)return
      settled=true
      resolve()
    }
    image.onload=finish
    image.onerror=finish
    image.src=src
    if(image.complete)finish()
    else image.decode?.().then(finish).catch(()=>{})
  })
}

function play(node,keyframes,options,registry){
  if(!node?.animate)return null
  const animation=node.animate(keyframes,{fill:'forwards',...options})
  registry.push(animation)
  return animation
}

export default function AgeGateTransition({
  active,
  cinematic=true,
  gateRef,
  onComplete,
}){
  const rootRef=React.useRef(null)
  const animationsRef=React.useRef([])
  const finishTimerRef=React.useRef(0)
  const [assetsReady,setAssetsReady]=React.useState(false)
  const [heroReady,setHeroReady]=React.useState(false)

  React.useEffect(()=>{
    let cancelled=false
    Promise.all(TRANSITION_ASSETS.map(preloadImage)).then(()=>{
      if(!cancelled)setAssetsReady(true)
    })
    return()=>{cancelled=true}
  },[])

  React.useEffect(()=>{
    let frame=0
    let fallback=0
    let media=null
    const finish=()=>setHeroReady(true)

    frame=requestAnimationFrame(()=>{
      const hero=document.querySelector('.sky-home .atmospheric-scene-hero')
      media=hero?.querySelector('.legacy-sky-hero__product--fullbleed img')||null

      if(!hero||!media||(media.complete&&media.naturalWidth>0)){
        finish()
        return
      }

      media.addEventListener('load',finish,{once:true})
      media.addEventListener('error',finish,{once:true})
      fallback=window.setTimeout(finish,1800)
    })

    return()=>{
      cancelAnimationFrame(frame)
      window.clearTimeout(fallback)
      media?.removeEventListener('load',finish)
      media?.removeEventListener('error',finish)
    }
  },[])

  React.useEffect(()=>()=>{
    animationsRef.current.forEach(animation=>animation?.cancel?.())
    window.clearTimeout(finishTimerRef.current)
  },[])

  React.useEffect(()=>{
    if(!active||!assetsReady||!heroReady)return undefined

    const root=rootRef.current
    const gate=gateRef?.current
    if(!root||!gate)return undefined

    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mobile=window.matchMedia('(max-width: 899px)').matches
    const registry=[]
    animationsRef.current=registry

    const panel=gate.querySelector('.age-gate__panel')
    const gateScene=gate.querySelector('.age-gate__static-scene')
    const gateClouds=gate.querySelector('.age-gate__live-clouds')
    const gateGlow=gate.querySelector('.age-gate__atmosphere-glow')
    const hero=document.querySelector('.sky-home .atmospheric-scene-hero')
    const heroMedia=hero?.querySelector('.legacy-sky-hero__product--fullbleed img')
    const heroContent=hero?.querySelector('.legacy-sky-hero__content')
    const heroTitle=hero?.querySelector('.legacy-sky-hero h1')
    const heroLede=hero?.querySelector('.legacy-sky-hero__lede')
    const heroActions=hero?.querySelector('.legacy-sky-hero__actions')
    const chrome=[
      document.querySelector('.announcement'),
      document.querySelector('.site-header'),
      document.querySelector('.mobile-reference-header'),
    ].filter(Boolean)

    document.body.classList.add('age-gate-transitioning')
    if(cinematic&&hero)document.body.classList.add('age-gate-cinematic-handoff')

    const complete=()=>{
      animationsRef.current=[]
      document.body.classList.remove('age-gate-transitioning','age-gate-cinematic-handoff')
      onComplete?.()
    }

    if(reduced||!cinematic||!hero){
      play(panel,[{opacity:1},{opacity:0}],{duration:120,easing:'linear'},registry)
      play(gate,[{opacity:1},{opacity:0}],{duration:220,delay:90,easing:'linear'},registry)
      finishTimerRef.current=window.setTimeout(complete,330)
      return()=>{
        registry.forEach(animation=>animation?.cancel?.())
        window.clearTimeout(finishTimerRef.current)
        document.body.classList.remove('age-gate-transitioning','age-gate-cinematic-handoff')
      }
    }

    /* The handoff is intentionally slower than ordinary UI motion. Clouds are
       treated as atmospheric masses, not controls: gradual acceleration into
       camera, a soft occlusion hold, then a long deceleration into the Hero. */
    const approach='cubic-bezier(.32,.02,.22,1)'
    const drift='cubic-bezier(.18,.72,.22,1)'
    const settle='cubic-bezier(.16,1,.3,1)'
    const panelEase='cubic-bezier(.4,0,.18,1)'
    const duration=mobile?2060:2260
    const occlusionAt=mobile?690:760

    if(heroMedia){
      heroMedia.style.opacity='1'
      heroMedia.style.transform=mobile?'scale(1.045) translate3d(0,1.2%,0)':'scale(1.035) translate3d(0,.7%,0)'
    }
    if(heroContent){
      heroContent.style.opacity='0'
      heroContent.style.transform=mobile?'translate3d(0,22px,0)':'translate3d(0,18px,0)'
    }
    chrome.forEach(node=>{
      node.style.opacity='0'
      node.style.transform='translate3d(0,-12px,0)'
    })

    play(panel,[
      {opacity:1,transform:'translate3d(-50%,-50%,0) scale(1)'},
      {opacity:.98,offset:.22,transform:'translate3d(-50%,-50.5%,0) scale(.996)'},
      {opacity:0,transform:'translate3d(-50%,-54%,0) scale(.965)'},
    ],{duration:520,easing:panelEase},registry)

    play(gateGlow,[
      {opacity:.55,transform:'scale(1)'},
      {opacity:.68,offset:.42,transform:'scale(1.04)'},
      {opacity:.08,transform:'scale(1.11)'},
    ],{duration:1180,delay:110,easing:drift},registry)

    play(gateClouds,[
      {opacity:1,transform:'translate3d(0,0,0) scale(1)'},
      {opacity:.78,offset:.42,transform:mobile?'translate3d(0,-1.5vh,0) scale(1.018)':'translate3d(0,-1vh,0) scale(1.012)'},
      {opacity:.12,transform:mobile?'translate3d(0,-5vh,0) scale(1.045)':'translate3d(0,-3vh,0) scale(1.035)'},
    ],{duration:1260,delay:90,easing:drift},registry)

    const veil=root.querySelector('.age-transition__veil')
    play(veil,[
      {opacity:0},
      {opacity:.08,offset:.28},
      {opacity:.2,offset:.48},
      {opacity:.08,offset:.68},
      {opacity:0},
    ],{duration:duration-180,delay:180,easing:drift},registry)

    const far=root.querySelector('.age-transition__plane--far')
    play(far,[
      {opacity:0,transform:'translate3d(0,3vh,0) scale(.96)'},
      {opacity:.42,offset:.30,transform:'translate3d(0,0,0) scale(1.01)'},
      {opacity:.3,offset:.58,transform:'translate3d(0,-4vh,0) scale(1.07)'},
      {opacity:0,transform:'translate3d(0,-14vh,0) scale(1.14)'},
    ],{duration:duration-140,delay:120,easing:approach},registry)

    const midLeft=root.querySelector('.age-transition__cloud--mid-left')
    const midRight=root.querySelector('.age-transition__cloud--mid-right')
    const center=root.querySelector('.age-transition__cloud--center')

    play(midLeft,[
      {opacity:0,transform:mobile?'translate3d(-34vw,10vh,0) scale(.9)':'translate3d(-22vw,8vh,0) scale(.92)'},
      {opacity:.78,offset:.35,transform:mobile?'translate3d(-8vw,2vh,0) scale(1.05)':'translate3d(-5vw,1vh,0) scale(1.04)'},
      {opacity:.9,offset:.52,transform:'translate3d(3vw,-4vh,0) scale(1.14)'},
      {opacity:0,transform:mobile?'translate3d(58vw,-24vh,0) scale(1.38)':'translate3d(42vw,-18vh,0) scale(1.31)'},
    ],{duration:duration-120,delay:180,easing:approach},registry)

    play(midRight,[
      {opacity:0,transform:mobile?'translate3d(34vw,9vh,0) scale(.9)':'translate3d(22vw,7vh,0) scale(.92)'},
      {opacity:.76,offset:.34,transform:mobile?'translate3d(8vw,2vh,0) scale(1.05)':'translate3d(5vw,1vh,0) scale(1.04)'},
      {opacity:.9,offset:.51,transform:'translate3d(-3vw,-4vh,0) scale(1.14)'},
      {opacity:0,transform:mobile?'translate3d(-58vw,-23vh,0) scale(1.38)':'translate3d(-42vw,-18vh,0) scale(1.31)'},
    ],{duration:duration-100,delay:205,easing:approach},registry)

    play(center,[
      {opacity:0,transform:'translate3d(-50%,12vh,0) scale(.88)'},
      {opacity:.42,offset:.25,transform:'translate3d(-50%,3vh,0) scale(1.02)'},
      {opacity:.96,offset:.46,transform:'translate3d(-50%,-2vh,0) scale(1.2)'},
      {opacity:.9,offset:.57,transform:'translate3d(-50%,-7vh,0) scale(1.32)'},
      {opacity:0,transform:'translate3d(-50%,-36vh,0) scale(1.58)'},
    ],{duration:duration-30,delay:150,easing:approach},registry)

    const nearLeft=root.querySelector('.age-transition__cloud--near-left')
    const nearRight=root.querySelector('.age-transition__cloud--near-right')
    const nearBottom=root.querySelector('.age-transition__cloud--near-bottom')

    play(nearLeft,[
      {opacity:0,transform:mobile?'translate3d(-38vw,24vh,0) rotate(-6deg) scale(.82)':'translate3d(-30vw,20vh,0) rotate(-5deg) scale(.84)'},
      {opacity:.28,offset:.18,transform:'translate3d(-18vw,12vh,0) rotate(-3deg) scale(.98)'},
      {opacity:.92,offset:.39,transform:'translate3d(5vw,-1vh,0) rotate(1deg) scale(1.22)'},
      {opacity:1,offset:.49,transform:'translate3d(18vw,-8vh,0) rotate(3deg) scale(1.34)'},
      {opacity:.72,offset:.64,transform:'translate3d(44vw,-18vh,0) rotate(6deg) scale(1.48)'},
      {opacity:0,transform:mobile?'translate3d(110vw,-42vh,0) rotate(10deg) scale(1.72)':'translate3d(92vw,-36vh,0) rotate(9deg) scale(1.64)'},
    ],{duration,delay:170,easing:approach},registry)

    play(nearRight,[
      {opacity:0,transform:mobile?'translate3d(38vw,22vh,0) rotate(6deg) scale(.82)':'translate3d(30vw,18vh,0) rotate(5deg) scale(.84)'},
      {opacity:.28,offset:.17,transform:'translate3d(18vw,11vh,0) rotate(3deg) scale(.98)'},
      {opacity:.92,offset:.38,transform:'translate3d(-5vw,-1vh,0) rotate(-1deg) scale(1.22)'},
      {opacity:1,offset:.48,transform:'translate3d(-18vw,-8vh,0) rotate(-3deg) scale(1.34)'},
      {opacity:.7,offset:.63,transform:'translate3d(-44vw,-18vh,0) rotate(-6deg) scale(1.48)'},
      {opacity:0,transform:mobile?'translate3d(-110vw,-40vh,0) rotate(-10deg) scale(1.72)':'translate3d(-92vw,-34vh,0) rotate(-9deg) scale(1.64)'},
    ],{duration,delay:195,easing:approach},registry)

    play(nearBottom,[
      {opacity:0,transform:'translate3d(-50%,26vh,0) scale(.9)'},
      {opacity:.34,offset:.23,transform:'translate3d(-50%,12vh,0) scale(1.02)'},
      {opacity:.94,offset:.43,transform:'translate3d(-50%,1vh,0) scale(1.2)'},
      {opacity:.88,offset:.55,transform:'translate3d(-50%,-7vh,0) scale(1.33)'},
      {opacity:0,transform:'translate3d(-50%,-46vh,0) scale(1.62)'},
    ],{duration:duration-10,delay:210,easing:approach},registry)

    play(gateScene,[
      {opacity:1,transform:'scale(1)'},
      {opacity:1,offset:.44,transform:'scale(1.01)'},
      {opacity:0,transform:'scale(1.025)'},
    ],{duration:940,delay:occlusionAt,easing:drift},registry)

    play(gate,[
      {backgroundColor:'rgba(22,137,216,1)'},
      {backgroundColor:'rgba(22,137,216,1)',offset:.42},
      {backgroundColor:'rgba(22,137,216,.18)',offset:.72},
      {backgroundColor:'rgba(176,227,253,0)'},
    ],{duration:1120,delay:occlusionAt,easing:drift},registry)

    if(heroMedia){
      play(heroMedia,[
        {opacity:1,transform:mobile?'scale(1.045) translate3d(0,1.2%,0)':'scale(1.035) translate3d(0,.7%,0)'},
        {opacity:1,transform:'scale(1) translate3d(0,0,0)'},
      ],{duration:1160,delay:occlusionAt+330,easing:settle},registry)
    }

    if(heroContent){
      play(heroContent,[
        {opacity:0,transform:mobile?'translate3d(0,22px,0)':'translate3d(0,18px,0)'},
        {opacity:.18,offset:.22,transform:mobile?'translate3d(0,17px,0)':'translate3d(0,13px,0)'},
        {opacity:1,transform:'translate3d(0,0,0)'},
      ],{duration:1040,delay:occlusionAt+430,easing:settle},registry)
    }

    if(heroTitle){
      play(heroTitle,[
        {opacity:.45,transform:'translate3d(0,10px,0)'},
        {opacity:1,transform:'translate3d(0,0,0)'},
      ],{duration:900,delay:occlusionAt+455,easing:settle},registry)
    }
    if(heroLede){
      play(heroLede,[
        {opacity:0,transform:'translate3d(0,9px,0)'},
        {opacity:1,transform:'translate3d(0,0,0)'},
      ],{duration:860,delay:occlusionAt+560,easing:settle},registry)
    }
    if(heroActions){
      play(heroActions,[
        {opacity:0,transform:'translate3d(0,8px,0)'},
        {opacity:1,transform:'translate3d(0,0,0)'},
      ],{duration:820,delay:occlusionAt+660,easing:settle},registry)
    }

    chrome.forEach((node,index)=>{
      play(node,[
        {opacity:0,transform:'translate3d(0,-12px,0)'},
        {opacity:.35,offset:.28,transform:'translate3d(0,-7px,0)'},
        {opacity:1,transform:'translate3d(0,0,0)'},
      ],{
        duration:mobile?880:980,
        delay:occlusionAt+520+(index*70),
        easing:settle,
      },registry)
    })

    finishTimerRef.current=window.setTimeout(complete,duration+760)

    return()=>{
      registry.forEach(animation=>animation?.cancel?.())
      window.clearTimeout(finishTimerRef.current)
      document.body.classList.remove('age-gate-transitioning','age-gate-cinematic-handoff')
      if(heroMedia){
        heroMedia.style.opacity=''
        heroMedia.style.transform=''
      }
      if(heroContent){
        heroContent.style.opacity=''
        heroContent.style.transform=''
      }
      chrome.forEach(node=>{
        node.style.opacity=''
        node.style.transform=''
      })
    }
  },[active,assetsReady,heroReady,cinematic,gateRef,onComplete])

  return <div
    ref={rootRef}
    className={'age-transition'+(active?' is-active':'')+(assetsReady?' is-ready':'')}
    aria-hidden="true"
  >
    <div className="age-transition__veil"/>
    <div className="age-transition__plane age-transition__plane--far">
      <img className="age-transition__cloud age-transition__cloud--far-left" src={cloudUpper} alt=""/>
      <img className="age-transition__cloud age-transition__cloud--far-right" src={cloudCenter} alt=""/>
    </div>
    <div className="age-transition__plane age-transition__plane--mid">
      <img className="age-transition__cloud age-transition__cloud--mid-left" src={cloudLeft} alt=""/>
      <img className="age-transition__cloud age-transition__cloud--mid-right" src={cloudRight} alt=""/>
      <img className="age-transition__cloud age-transition__cloud--center" src={cloudCenter} alt=""/>
    </div>
    <div className="age-transition__plane age-transition__plane--near">
      <img className="age-transition__cloud age-transition__cloud--near-left" src={cloudNearMass} alt=""/>
      <img className="age-transition__cloud age-transition__cloud--near-right" src={cloudNearMass} alt=""/>
      <img className="age-transition__cloud age-transition__cloud--near-bottom" src={cloudMidField} alt=""/>
    </div>
  </div>
}
