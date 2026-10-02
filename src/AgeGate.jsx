import React from 'react'
import { ArrowRight } from 'lucide-react'
import ageGateSky from '@/assets/atmosphere/home-hero-sky.png'
import cloudMidField from '@/assets/atmosphere/clouds/cloud-mid-field.webp'
import cloudLeftFragment from '@/assets/atmosphere/clouds/cloud-left-fragment.webp'
import cloudRightFragment from '@/assets/atmosphere/clouds/cloud-right-fragment.webp'
import cloudNearMass from '@/assets/atmosphere/clouds/cloud-near-mass.webp'
import cloudFarLeft from '@/assets/atmosphere/clouds/cloud-16.webp'
import cloudFarRight from '@/assets/atmosphere/clouds/cloud-09.webp'
import cloudCenterMass from '@/assets/atmosphere/clouds/cloud-21.webp'
import cloudUpperCenter from '@/assets/atmosphere/clouds/cloud-10.webp'
import cloudFarLow from '@/assets/atmosphere/clouds/cloud-14.webp'
import cloudMidSecondary from '@/assets/atmosphere/clouds/cloud-19.webp'
import cloudNatural from '@/assets/atmosphere/clouds/natural-white-cumulus-cloud-floating-on-transparent-background-png.webp'

const publicAsset=name=>`${import.meta.env.BASE_URL}${name.replace(/^\//,'')}`

const CLOUD_ASSETS=[
  ageGateSky,
  cloudMidField,
  cloudLeftFragment,
  cloudRightFragment,
  cloudNearMass,
  cloudFarLeft,
  cloudFarRight,
  cloudCenterMass,
  cloudUpperCenter,
  cloudFarLow,
  cloudMidSecondary,
  cloudNatural,
]

const CLOUD_GROUPS={
  far:[
    ['far-left','age-gate__cloud-frame--far-left'],
    ['far-right','age-gate__cloud-frame--far-right'],
    ['far-top','age-gate__cloud-frame--far-top'],
    ['far-low','age-gate__cloud-frame--far-low'],
  ],
  mid:[
    ['left','age-gate__cloud-frame--left'],
    ['right','age-gate__cloud-frame--right'],
    ['center','age-gate__cloud-frame--center'],
    ['bottom','age-gate__cloud-frame--bottom'],
    ['mid-lower-left','age-gate__cloud-frame--mid-lower-left'],
    ['mid-lower-right','age-gate__cloud-frame--mid-lower-right'],
  ],
  near:[
    ['near-left','age-gate__cloud-frame--near-left'],
    ['near-right','age-gate__cloud-frame--near-right'],
  ],
}

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

function animate(node,keyframes,options,registry){
  if(!node?.animate)return null
  const animation=node.animate(keyframes,{fill:'forwards',...options})
  registry.current.push(animation)
  return animation
}

export default function AgeGate(){
  const [verified,setVerified]=React.useState(()=>{
    try{return sessionStorage.getItem('lagom-age-verified')==='true'}catch{return false}
  })
  const [phase,setPhase]=React.useState(()=>verified?'complete':'idle')
  const [ready,setReady]=React.useState(verified)
  const gateRef=React.useRef(null)
  const animationsRef=React.useRef([])
  const finishTimerRef=React.useRef(0)
  const pointerFrameRef=React.useRef(0)

  const entering=phase==='entering'
  const finished=phase==='complete'

  React.useEffect(()=>{
    if(verified){
      setReady(true)
      return undefined
    }

    let cancelled=false
    const fallback=window.setTimeout(()=>{if(!cancelled)setReady(true)},1400)

    Promise.all([
      preloadImage(publicAsset('enhanced-lagom-naturals-icon.webp')),
      ...CLOUD_ASSETS.map(preloadImage),
    ]).then(()=>{
      if(cancelled)return
      window.clearTimeout(fallback)
      requestAnimationFrame(()=>requestAnimationFrame(()=>setReady(true)))
    })

    return()=>{
      cancelled=true
      window.clearTimeout(fallback)
    }
  },[verified])

  React.useEffect(()=>{
    document.body.classList.toggle('age-gate-open',!finished)
    document.body.classList.toggle('age-gate-transitioning',entering)
    return()=>{
      document.body.classList.remove('age-gate-open')
      document.body.classList.remove('age-gate-transitioning')
    }
  },[entering,finished])

  React.useEffect(()=>{
    if(finished||entering||!ready)return undefined
    const gate=gateRef.current
    if(!gate)return undefined

    const trapFocus=event=>{
      if(event.key==='Escape'){
        event.preventDefault()
        return
      }
      if(event.key!=='Tab')return

      const focusable=[...gate.querySelectorAll('button:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])')]
        .filter(node=>!node.hasAttribute('hidden')&&node.getAttribute('aria-hidden')!=='true')

      if(!focusable.length){
        event.preventDefault()
        return
      }

      const first=focusable[0]
      const last=focusable[focusable.length-1]

      if(event.shiftKey&&document.activeElement===first){
        event.preventDefault()
        last.focus()
      }else if(!event.shiftKey&&document.activeElement===last){
        event.preventDefault()
        first.focus()
      }
    }

    gate.addEventListener('keydown',trapFocus)
    return()=>gate.removeEventListener('keydown',trapFocus)
  },[entering,finished,ready])

  React.useEffect(()=>()=> {
    animationsRef.current.forEach(animation=>animation?.cancel?.())
    window.clearTimeout(finishTimerRef.current)
    cancelAnimationFrame(pointerFrameRef.current)
  },[])

  const finishTransition=React.useCallback(()=>{
    animationsRef.current=[]
    try{sessionStorage.setItem('lagom-age-verified','true')}catch{}
    setVerified(true)
    setPhase('complete')

    requestAnimationFrame(()=>{
      const mainNode=document.querySelector('.route-stage main, main')
      if(!mainNode)return
      const hadTabIndex=mainNode.hasAttribute('tabindex')
      if(!hadTabIndex)mainNode.setAttribute('tabindex','-1')
      mainNode.focus?.({preventScroll:true})
      if(!hadTabIndex)requestAnimationFrame(()=>mainNode.removeAttribute('tabindex'))
    })
  },[])

  const runEnterSequence=React.useCallback(()=>{
    const gate=gateRef.current
    if(!gate)return

    animationsRef.current.forEach(animation=>animation?.cancel?.())
    animationsRef.current=[]

    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if(reduced){
      const panel=gate.querySelector('.age-gate__panel')
      animate(panel,[{opacity:1},{opacity:0}],{duration:120,easing:'linear'},animationsRef)
      animate(gate,[{opacity:1},{opacity:0}],{duration:180,delay:90,easing:'linear'},animationsRef)
      finishTimerRef.current=window.setTimeout(finishTransition,290)
      return
    }

    const glide='cubic-bezier(.16,1,.3,1)'
    const exit='cubic-bezier(.4,0,.2,1)'

    const panel=gate.querySelector('.age-gate__panel')
    animate(panel,[
      {opacity:1,transform:'translate3d(-50%,-50%,0) scale(1)'},
      {opacity:.92,offset:.35,transform:'translate3d(-50%,-51%,0) scale(.995)'},
      {opacity:0,transform:'translate3d(-50%,-55%,0) scale(.972)'},
    ],{duration:260,easing:exit},animationsRef)

    const farMotion={
      'far-left':'translate3d(-18vw,-12vh,0) rotate(-2deg) scale(1.08)',
      'far-right':'translate3d(18vw,-10vh,0) rotate(2deg) scale(1.08)',
      'far-top':'translate3d(4vw,-20vh,0) scale(1.08)',
      'far-low':'translate3d(-5vw,18vh,0) scale(1.08)',
    }
    Object.entries(farMotion).forEach(([key,target],index)=>{
      const node=gate.querySelector(`[data-age-cloud="${key}"]`)
      animate(node,[
        {opacity:getComputedStyle(node).opacity,transform:'translate3d(0,0,0) scale(1)'},
        {opacity:.26,offset:.42,transform:'translate3d(0,-1vh,0) scale(1.015)'},
        {opacity:.04,transform:target},
      ],{duration:1120,delay:index*24,easing:glide},animationsRef)
    })

    const midMotion={
      left:'translate3d(-58vw,-12vh,0) rotate(-5deg) scale(1.16)',
      right:'translate3d(58vw,-10vh,0) rotate(5deg) scale(1.16)',
      center:'translate3d(0,-42vh,0) scale(1.18)',
      bottom:'translate3d(0,34vh,0) scale(1.16)',
      'mid-lower-left':'translate3d(-62vw,9vh,0) rotate(-6deg) scale(1.18)',
      'mid-lower-right':'translate3d(62vw,9vh,0) rotate(6deg) scale(1.18)',
    }
    Object.entries(midMotion).forEach(([key,target],index)=>{
      const node=gate.querySelector(`[data-age-cloud="${key}"]`)
      animate(node,[
        {opacity:getComputedStyle(node).opacity,transform:'translate3d(0,0,0) scale(1)'},
        {opacity:.48,offset:.24,transform:'translate3d(0,-1vh,0) scale(1.025)'},
        {opacity:.10,transform:target},
      ],{duration:1040,delay:80+index*18,easing:glide},animationsRef)
    })

    /* Near clouds form the visible camera-pass curtain. They deliberately
       become more opaque after the decision UI exits, cross the viewport, and
       then clear to reveal the already-rendered homepage beneath. */
    const nearLeft=gate.querySelector('[data-age-cloud="near-left"]')
    const nearRight=gate.querySelector('[data-age-cloud="near-right"]')

    animate(nearLeft,[
      {opacity:.08,transform:'translate3d(0,0,0) rotate(-3deg) scale(1.02)'},
      {opacity:.38,offset:.18,transform:'translate3d(14vw,-5vh,0) rotate(-1deg) scale(1.08)'},
      {opacity:.88,offset:.43,transform:'translate3d(44vw,-13vh,0) rotate(3deg) scale(1.2)'},
      {opacity:.72,offset:.60,transform:'translate3d(68vw,-19vh,0) rotate(5deg) scale(1.25)'},
      {opacity:0,transform:'translate3d(128vw,-28vh,0) rotate(8deg) scale(1.34)'},
    ],{duration:1120,delay:105,easing:glide},animationsRef)

    animate(nearRight,[
      {opacity:.07,transform:'translate3d(0,0,0) rotate(3deg) scale(1.02)'},
      {opacity:.36,offset:.16,transform:'translate3d(-13vw,-4vh,0) rotate(1deg) scale(1.08)'},
      {opacity:.86,offset:.41,transform:'translate3d(-43vw,-12vh,0) rotate(-3deg) scale(1.2)'},
      {opacity:.70,offset:.59,transform:'translate3d(-67vw,-18vh,0) rotate(-5deg) scale(1.25)'},
      {opacity:0,transform:'translate3d(-128vw,-27vh,0) rotate(-8deg) scale(1.34)'},
    ],{duration:1100,delay:125,easing:glide},animationsRef)

    const scene=gate.querySelector('.age-gate__scene')
    animate(scene,[
      {opacity:1,transform:'scale(1)'},
      {opacity:1,offset:.45,transform:'scale(1.008)'},
      {opacity:.62,offset:.72,transform:'scale(1.016)'},
      {opacity:0,transform:'scale(1.026)'},
    ],{duration:1120,delay:80,easing:glide},animationsRef)

    const glow=gate.querySelector('.age-gate__atmosphere-glow')
    animate(glow,[
      {opacity:.55,transform:'scale(1)'},
      {opacity:.78,offset:.42,transform:'scale(1.06)'},
      {opacity:0,transform:'scale(1.15)'},
    ],{duration:980,delay:120,easing:glide},animationsRef)

    animate(gate,[
      {opacity:1,backgroundColor:'rgba(176,227,253,1)'},
      {opacity:1,backgroundColor:'rgba(176,227,253,.96)',offset:.58},
      {opacity:.98,backgroundColor:'rgba(176,227,253,.34)',offset:.82},
      {opacity:0,backgroundColor:'rgba(176,227,253,0)'},
    ],{duration:1180,delay:170,easing:glide},animationsRef)

    finishTimerRef.current=window.setTimeout(finishTransition,1420)
  },[finishTransition])

  const enter=()=>{
    if(entering||finished||!ready)return
    setPhase('entering')
    requestAnimationFrame(()=>requestAnimationFrame(runEnterSequence))
  }

  const handlePointerMove=event=>{
    if(entering||event.pointerType!=='mouse')return
    const gate=gateRef.current
    if(!gate)return

    cancelAnimationFrame(pointerFrameRef.current)
    pointerFrameRef.current=requestAnimationFrame(()=>{
      const rect=gate.getBoundingClientRect()
      const x=((event.clientX-rect.left)/rect.width-.5)*12
      const y=((event.clientY-rect.top)/rect.height-.5)*8

      const far=gate.querySelector('.age-gate__cloud-depth--far')
      const mid=gate.querySelector('.age-gate__cloud-depth--mid')
      const near=gate.querySelector('.age-gate__cloud-depth--near')

      if(far)far.style.transform=`translate3d(${(x*.24).toFixed(2)}px,${(y*.18).toFixed(2)}px,0)`
      if(mid)mid.style.transform=`translate3d(${(x*.48).toFixed(2)}px,${(y*.36).toFixed(2)}px,0)`
      if(near)near.style.transform=`translate3d(${(x*.72).toFixed(2)}px,${(y*.54).toFixed(2)}px,0)`
    })
  }

  const resetPointer=()=>{
    const gate=gateRef.current
    if(!gate)return
    gate.querySelectorAll('.age-gate__cloud-depth').forEach(node=>{
      node.style.transform='translate3d(0,0,0)'
    })
  }

  if(finished)return null

  return <div
    ref={gateRef}
    className={`age-gate${ready?' is-ready':' is-preparing'}${entering?' is-transitioning':''}`}
    role="dialog"
    aria-modal="true"
    aria-labelledby="age-gate-title"
    aria-describedby="age-gate-description"
    onPointerMove={handlePointerMove}
    onPointerLeave={resetPointer}
  >
    <div className="age-gate__prepare-surface" aria-hidden="true"/>

    {ready&&<>
      <div className="age-gate__scene" aria-hidden="true"/>
      <div className="age-gate__atmosphere-glow" aria-hidden="true"/>

      {Object.entries(CLOUD_GROUPS).map(([depth,clouds])=>
        <div key={depth} className={`age-gate__cloud-depth age-gate__cloud-depth--${depth}`} aria-hidden="true">
          {clouds.map(([key,className])=>
            <div key={key} className={`age-gate__cloud-frame ${className}`} data-age-cloud={key}/>
          )}
        </div>
      )}

      <div className="age-gate__panel" aria-hidden={entering?'true':undefined}>
        <div className="age-gate__brand">
          <img src={publicAsset('enhanced-lagom-naturals-icon.webp')} alt="Lagom Naturals"/>
        </div>

        <div className="age-gate__content">
          <h1 id="age-gate-title">Are you 21<br/>or older?</h1>
          <p id="age-gate-description" className="age-gate__copy">
            You must be 21 or older to enter. Passing this gate does not establish legal purchase eligibility.
          </p>

          <div className="age-gate__actions">
            <button
              type="button"
              className="age-gate__action age-gate__action--primary"
              autoFocus
              disabled={entering}
              onClick={enter}
            >
              <span>YES, I’M 21+</span>
              <ArrowRight aria-hidden="true"/>
            </button>

            <button
              type="button"
              className="age-gate__action age-gate__action--secondary"
              disabled={entering}
              onClick={()=>window.location.replace('https://www.google.com/')}
            >
              <span>NO, EXIT SITE</span>
            </button>
          </div>
        </div>
      </div>
    </>}
  </div>
}
