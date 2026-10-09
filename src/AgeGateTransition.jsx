import React from 'react'

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
  const [heroReady,setHeroReady]=React.useState(false)

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
    if(!active||!heroReady)return undefined

    const root=rootRef.current
    const gate=gateRef?.current
    if(!root||!gate)return undefined

    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mobile=window.matchMedia('(max-width: 899px)').matches
    const registry=[]
    animationsRef.current=registry
    let sharedSkyAnimation=null

    const panel=gate.querySelector('.age-gate__panel')
    const gateScene=gate.querySelector('.age-gate__static-scene')
    const gateGlow=gate.querySelector('.age-gate__atmosphere-glow')
    const hero=document.querySelector('.sky-home .atmospheric-scene-hero')
    const sharedAtmosphere=document.querySelector('.sky-home__page-atmosphere')
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
      sharedSkyAnimation?.cancel()
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

    // The homepage already owns the visible cloud field. Give that exact
    // renderer a restrained camera push, then settle it to its native frame as
    // the gate clears. This avoids a second cloud render or a crossfade seam.
    sharedSkyAnimation=play(sharedAtmosphere,[
      {opacity:1,transform:'translate3d(0,0,0) scale(1)'},
      {opacity:1,offset:.3,transform:'translate3d(0,0,0) scale(1.035)'},
      {opacity:1,offset:.62,transform:'translate3d(0,-.6vh,0) scale(1.085)'},
      {opacity:1,transform:'translate3d(0,0,0) scale(1)'},
    ],{duration:duration+520,delay:0,easing:drift},registry)

    const veil=root.querySelector('.age-transition__veil')
    play(veil,[
      {opacity:0},
      {opacity:.08,offset:.28},
      {opacity:.2,offset:.48},
      {opacity:.08,offset:.68},
      {opacity:0},
    ],{duration:duration-180,delay:180,easing:drift},registry)

    play(gateScene,[
      {opacity:1,transform:'scale(1)'},
      {opacity:1,offset:.44,transform:'scale(1.01)'},
      {opacity:0,transform:'scale(1.025)'},
    ],{duration:940,delay:occlusionAt,easing:drift},registry)

    if(!sharedAtmosphere){
      play(gate,[
        {backgroundColor:'rgba(22,137,216,1)'},
        {backgroundColor:'rgba(22,137,216,1)',offset:.42},
        {backgroundColor:'rgba(22,137,216,.18)',offset:.72},
        {backgroundColor:'rgba(22,137,216,0)'},
      ],{duration:1120,delay:occlusionAt,easing:drift},registry)
    }

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
  },[active,heroReady,cinematic,gateRef,onComplete])

  return <div
    ref={rootRef}
    className={'age-transition'+(active?' is-active':'')}
    aria-hidden="true"
  >
    <div className="age-transition__veil"/>
  </div>
}
