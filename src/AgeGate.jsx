import React from 'react'
import { ArrowRight } from 'lucide-react'
import AgeGateTransition from '@/AgeGateTransition'
import AgeGateAtmosphere from '@/home/AgeGateAtmosphere'

const publicAsset=name=>`${import.meta.env.BASE_URL}${name.replace(/^\//,'')}`

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

export default function AgeGate({cinematic=true}){
  const [verified,setVerified]=React.useState(()=>{
    try{return sessionStorage.getItem('lagom-age-verified')==='true'}catch{return false}
  })
  const [phase,setPhase]=React.useState(()=>verified?'complete':'idle')
  const [ready,setReady]=React.useState(verified)
  const gateRef=React.useRef(null)

  const entering=phase==='entering'
  const finished=phase==='complete'

  React.useEffect(()=>{
    if(verified){
      setReady(true)
      return undefined
    }

    let cancelled=false
    const fallback=window.setTimeout(()=>{if(!cancelled)setReady(true)},900)

    Promise.all([
      preloadImage(publicAsset('enhanced-lagom-naturals-icon.webp')),
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
    return()=>document.body.classList.remove('age-gate-open')
  },[finished])

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

  const finishTransition=React.useCallback(()=>{
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

  const enter=()=>{
    if(entering||finished||!ready)return
    if(document.activeElement instanceof HTMLElement)document.activeElement.blur()
    setPhase('entering')
  }

  if(finished)return null

  return <div
    ref={gateRef}
    className={'age-gate'+(cinematic?' age-gate--shared-sky':'')+(ready?' is-ready':' is-preparing')+(entering?' is-transitioning':'')}
    role="dialog"
    aria-modal="true"
    aria-labelledby="age-gate-title"
    aria-describedby="age-gate-description"
  >
    <div className="age-gate__prepare-surface" aria-hidden="true"/>

    {ready&&<>
      <div className="age-gate__static-scene" aria-hidden="true">
        <div className="age-gate__scene"/>
        {!cinematic&&<AgeGateAtmosphere />}
        <div className="age-gate__atmosphere-glow"/>
      </div>

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

    <AgeGateTransition
      active={entering}
      cinematic={cinematic}
      gateRef={gateRef}
      onComplete={finishTransition}
    />
  </div>
}
