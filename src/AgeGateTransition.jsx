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

  React.useEffect(()=>{
    let cancelled=false
    Promise.all(TRANSITION_ASSETS.map(preloadImage)).then(()=>{
      if(!cancelled)setAssetsReady(true)
    })
    return()=>{cancelled=true}
  },[])

  React.useEffect(()=>()=>{
    animationsRef.current.forEach(animation=>animation?.cancel?.())
    window.clearTimeout(finishTimerRef.current)
  },[])

  React.useEffect(()=>{
    if(!active||!assetsReady)return undefined

    const root=rootRef.current
    const gate=gateRef?.current
    if(!root||!gate)return undefined

    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mobile=window.matchMedia('(max-width: 899px)').matches
    const registry=[]
    animationsRef.current=registry

    const panel=gate.querySelector('.age-gate__panel')
    const gateScene=gate.querySelector('.age-gate__static-scene')
    const gateClouds=gate.querySelector('.age-gate__static-clouds')
    const gateGlow=gate.querySelector('.age-gate__atmosphere-glow')
    const hero=document.querySelector('.sky-home .atmospheric-scene-hero')
    const heroMedia=hero?.querySelector('.legacy-sky-hero__product--fullbleed img')
    const heroContent=hero?.querySelector('.legacy-sky-hero__content')
    const heroTitle=hero?.querySelector('.legacy-sky-hero h1')
    const heroLede=hero?.querySelector('.legacy-sky-hero__lede')
    const heroActions=hero?.querySelector('.legacy-sky-hero__actions')

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

    const glide='cubic-bezier(.16,1,.3,1)'
    const soft='cubic-bezier(.22,.82,.28,1)'
    const exit='cubic-bezier(.4,0,.2,1)'
    const duration=mobile?1380:1540
    const occlusionAt=mobile?420:470

    if(heroMedia){
      heroMedia.style.opacity='1'
      heroMedia.style.transform=mobile?'scale(1.045) translate3d(0,1.2%,0)':'scale(1.035) translate3d(0,.7%,0)'
    }
    if(heroContent){
      heroContent.style.opacity='0'
      heroContent.style.transform=mobile?'translate3d(0,22px,0)':'translate3d(0,18px,0)'
    }

    play(panel,[
      {opacity:1,transform:'translate3d(-50%,-50%,0) scale(1)'},
      {opacity:.98,offset:.22,transform:'translate3d(-50%,-50.5%,0) scale(.996)'},
      {opacity:0,transform:'translate3d(-50%,-54%,0) scale(.965)'},
    ],{duration:280,easing:exit},registry)

    play(gateGlow,[
      {opacity:.55,transform:'scale(1)'},
      {opacity:.68,offset:.42,transform:'scale(1.04)'},
      {opacity:.08,transform:'scale(1.11)'},
    ],{duration:760,delay:70,easing:soft},registry)

    play(gateClouds,[
      {opacity:1,transform:'translate3d(0,0,0) scale(1)'},
      {opacity:.78,offset:.42,transform:mobile?'translate3d(0,-1.5vh,0) scale(1.018)':'translate3d(0,-1vh,0) scale(1.012)'},
      {opacity:.12,transform:mobile?'translate3d(0,-5vh,0) scale(1.045)':'translate3d(0,-3vh,0) scale(1.035)'},
    ],{duration:820,delay:60,easing:soft},registry)

    const veil=root.querySelector('.age-transition__veil')
    play(veil,[
      {opacity:0},
      {opacity:.08,offset:.28},
      {opacity:.2,offset:.48},
      {opacity:.08,offset:.68},
      {opacity:0},
    ],{duration:duration-140,delay:110,easing:soft},registry)

    const far=root.querySelector('.age-transition__plane--far')
    play(far,[
      {opacity:0,transform:'translate3d(0,3vh,0) scale(.96)'},
      {opacity:.42,offset:.30,transform:'translate3d(0,0,0) scale(1.01)'},
      {opacity:.3,offset:.58,transform:'translate3d(0,-4vh,0) scale(1.07)'},
      {opacity:0,transform:'translate3d(0,-14vh,0) scale(1.14)'},
    ],{duration:duration-120,delay:80,easing:glide},registry)

    const midLeft=root.querySelector('.age-transition__cloud--mid-left')
    const midRight=root.querySelector('.age-transition__cloud--mid-right')
    const center=root.querySelector('.age-transition__cloud--center')

    play(midLeft,[
      {opacity:0,transform:mobile?'translate3d(-34vw,10vh,0) scale(.9)':'translate3d(-22vw,8vh,0) scale(.92)'},
      {opacity:.78,offset:.35,transform:mobile?'translate3d(-8vw,2vh,0) scale(1.05)':'translate3d(-5vw,1vh,0) scale(1.04)'},
      {opacity:.9,offset:.52,transform:'translate3d(3vw,-4vh,0) scale(1.14)'},
      {opacity:0,transform:mobile?'translate3d(58vw,-24vh,0) scale(1.38)':'translate3d(42vw,-18vh,0) scale(1.31)'},
    ],{duration:duration-120,delay:110,easing:glide},registry)

    play(midRight,[
      {opacity:0,transform:mobile?'translate3d(34vw,9vh,0) scale(.9)':'translate3d(22vw,7vh,0) scale(.92)'},
      {opacity:.76,offset:.34,transform:mobile?'translate3d(8vw,2vh,0) scale(1.05)':'translate3d(5vw,1vh,0) scale(1.04)'},
      {opacity:.9,offset:.51,transform:'translate3d(-3vw,-4vh,0) scale(1.14)'},
      {opacity:0,transform:mobile?'translate3d(-58vw,-23vh,0) scale(1.38)':'translate3d(-42vw,-18vh,0) scale(1.31)'},
    ],{duration:duration-100,delay:125,easing:glide},registry)

    play(center,[
      {opacity:0,transform:'translate3d(-50%,12vh,0) scale(.88)'},
      {opacity:.42,offset:.25,transform:'translate3d(-50%,3vh,0) scale(1.02)'},
      {opacity:.96,offset:.46,transform:'translate3d(-50%,-2vh,0) scale(1.2)'},
      {opacity:.9,offset:.57,transform:'translate3d(-50%,-7vh,0) scale(1.32)'},
      {opacity:0,transform:'translate3d(-50%,-36vh,0) scale(1.58)'},
    ],{duration:duration-40,delay:90,easing:glide},registry)

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
    ],{duration,delay:90,easing:glide},registry)

    play(nearRight,[
      {opacity:0,transform:mobile?'translate3d(38vw,22vh,0) rotate(6deg) scale(.82)':'translate3d(30vw,18vh,0) rotate(5deg) scale(.84)'},
      {opacity:.28,offset:.17,transform:'translate3d(18vw,11vh,0) rotate(3deg) scale(.98)'},
      {opacity:.92,offset:.38,transform:'translate3d(-5vw,-1vh,0) rotate(-1deg) scale(1.22)'},
      {opacity:1,offset:.48,transform:'translate3d(-18vw,-8vh,0) rotate(-3deg) scale(1.34)'},
      {opacity:.7,offset:.63,transform:'translate3d(-44vw,-18vh,0) rotate(-6deg) scale(1.48)'},
      {opacity:0,transform:mobile?'translate3d(-110vw,-40vh,0) rotate(-10deg) scale(1.72)':'translate3d(-92vw,-34vh,0) rotate(-9deg) scale(1.64)'},
    ],{duration,delay:105,easing:glide},registry)

    play(nearBottom,[
      {opacity:0,transform:'translate3d(-50%,26vh,0) scale(.9)'},
      {opacity:.34,offset:.23,transform:'translate3d(-50%,12vh,0) scale(1.02)'},
      {opacity:.94,offset:.43,transform:'translate3d(-50%,1vh,0) scale(1.2)'},
      {opacity:.88,offset:.55,transform:'translate3d(-50%,-7vh,0) scale(1.33)'},
      {opacity:0,transform:'translate3d(-50%,-46vh,0) scale(1.62)'},
    ],{duration:duration-20,delay:120,easing:glide},registry)

    play(gateScene,[
      {opacity:1,transform:'scale(1)'},
      {opacity:1,offset:.44,transform:'scale(1.01)'},
      {opacity:0,transform:'scale(1.025)'},
    ],{duration:580,delay:occlusionAt,easing:soft},registry)

    play(gate,[
      {backgroundColor:'rgba(176,227,253,1)'},
      {backgroundColor:'rgba(176,227,253,1)',offset:.42},
      {backgroundColor:'rgba(176,227,253,.18)',offset:.72},
      {backgroundColor:'rgba(176,227,253,0)'},
    ],{duration:720,delay:occlusionAt,easing:soft},registry)

    if(heroMedia){
      play(heroMedia,[
        {opacity:1,transform:mobile?'scale(1.045) translate3d(0,1.2%,0)':'scale(1.035) translate3d(0,.7%,0)'},
        {opacity:1,transform:'scale(1) translate3d(0,0,0)'},
      ],{duration:760,delay:occlusionAt+210,easing:glide},registry)
    }

    if(heroContent){
      play(heroContent,[
        {opacity:0,transform:mobile?'translate3d(0,22px,0)':'translate3d(0,18px,0)'},
        {opacity:.18,offset:.22,transform:mobile?'translate3d(0,17px,0)':'translate3d(0,13px,0)'},
        {opacity:1,transform:'translate3d(0,0,0)'},
      ],{duration:620,delay:occlusionAt+300,easing:glide},registry)
    }

    if(heroTitle){
      play(heroTitle,[
        {opacity:.45,transform:'translate3d(0,10px,0)'},
        {opacity:1,transform:'translate3d(0,0,0)'},
      ],{duration:520,delay:occlusionAt+315,easing:glide},registry)
    }
    if(heroLede){
      play(heroLede,[
        {opacity:0,transform:'translate3d(0,9px,0)'},
        {opacity:1,transform:'translate3d(0,0,0)'},
      ],{duration:470,delay:occlusionAt+390,easing:glide},registry)
    }
    if(heroActions){
      play(heroActions,[
        {opacity:0,transform:'translate3d(0,8px,0)'},
        {opacity:1,transform:'translate3d(0,0,0)'},
      ],{duration:430,delay:occlusionAt+455,easing:glide},registry)
    }

    finishTimerRef.current=window.setTimeout(complete,duration+230)

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
    }
  },[active,assetsReady,cinematic,gateRef,onComplete])

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
