import React,{useEffect,useState}from'react'
import'./add-to-cart-button.css'

const SELECTOR='.add-square, .pdp .primary-bar'
const CART_KEY='lagom-cart-v2'
const feedbackTimers=new WeakMap()
const lockedControls=new WeakMap()

function readCartSnapshot(){try{return localStorage.getItem(CART_KEY)||'[]'}catch{return'[]'}}

function cartGlyph(){return '<svg class="lagom-atc__cart" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2H4l2.66 12.39a2 2 0 0 0 2 1.61h8.68a2 2 0 0 0 2-1.61L21 6H5.12"/></svg>'}

function ensureEnhanced(button){
  if(!(button instanceof HTMLButtonElement)||button.dataset.lagomAtcEnhanced==='true')return
  const isCard=button.classList.contains('add-square')
  const label=isCard?'Add to cart':(button.textContent?.trim()||'Add to Cart')
  button.dataset.lagomAtcEnhanced='true'
  button.dataset.state='idle'
  button.dataset.cartAction='add'
  button.classList.add('lagom-atc',isCard?'lagom-atc--card':'lagom-atc--wide')
  button.removeAttribute('style')
  button.innerHTML=`<span class="lagom-atc__surface" aria-hidden="true"></span><span class="lagom-atc__content">${cartGlyph()}<span class="lagom-atc__label">${label}</span></span><span class="lagom-atc__spinner" aria-hidden="true"></span><span class="lagom-atc__success" aria-hidden="true"><svg viewBox="0 0 24 24"><circle class="lagom-atc__success-ring" cx="12" cy="12" r="10" fill="none"></circle><path class="lagom-atc__success-check" fill="none" d="m5.5 12.5 4.2 4.2 8.8-9.4"></path></svg></span>`
}

function lockPurchaseControls(trigger){
  const pdp=trigger.closest('.pdp')
  if(!pdp)return
  const controls=Array.from(pdp.querySelectorAll('.size-row button,.qty-row button')).filter(el=>el!==trigger)
  lockedControls.set(trigger,controls.map(control=>[control,control.disabled]))
  controls.forEach(control=>{control.disabled=true;control.setAttribute('aria-disabled','true')})
}

function unlockPurchaseControls(trigger){
  const controls=lockedControls.get(trigger)||[]
  controls.forEach(([control,wasDisabled])=>{if(control.isConnected){control.disabled=wasDisabled;if(!wasDisabled)control.removeAttribute('aria-disabled')}})
  lockedControls.delete(trigger)
}

function clearTimers(trigger){(feedbackTimers.get(trigger)||[]).forEach(timer=>window.clearTimeout(timer));feedbackTimers.delete(trigger)}

function reset(trigger){
  clearTimers(trigger)
  if(!trigger.isConnected)return
  trigger.dataset.state='idle'
  trigger.removeAttribute('aria-busy')
  trigger.disabled=false
  unlockPurchaseControls(trigger)
}

function pulseCart(){
  const target=Array.from(document.querySelectorAll('.cart-icon')).find(el=>{const r=el.getBoundingClientRect();return r.width>0&&r.height>0})
  if(!target)return
  target.classList.remove('lagom-cart-target--pulse')
  requestAnimationFrame(()=>target.classList.add('lagom-cart-target--pulse'))
  window.setTimeout(()=>target.classList.remove('lagom-cart-target--pulse'),720)
}

function begin(trigger,before,announce){
  if(!trigger.isConnected||trigger.dataset.state!=='idle')return
  clearTimers(trigger)
  trigger.dataset.state='adding'
  trigger.setAttribute('aria-busy','true')
  trigger.disabled=true
  lockPurchaseControls(trigger)
  const started=performance.now()
  let settled=false
  const detect=()=>{
    if(settled||!trigger.isConnected)return
    const after=readCartSnapshot()
    if(after!==before){
      settled=true
      trigger.dataset.state='added'
      trigger.removeAttribute('aria-busy')
      announce('Added to cart')
      const pulse=window.setTimeout(pulseCart,430)
      const resetTimer=window.setTimeout(()=>reset(trigger),1200)
      feedbackTimers.set(trigger,[pulse,resetTimer])
      return
    }
    if(performance.now()-started<1200){requestAnimationFrame(detect);return}
    reset(trigger)
  }
  requestAnimationFrame(detect)
  const safety=window.setTimeout(()=>{if(!settled)reset(trigger)},12000)
  feedbackTimers.set(trigger,[safety])
}

export default function CartInteractionFeedback(){
  const[announcement,setAnnouncement]=useState('')
  useEffect(()=>{
    const enhanceAll=root=>{if(root instanceof Element&&root.matches?.(SELECTOR))ensureEnhanced(root);root.querySelectorAll?.(SELECTOR).forEach(ensureEnhanced)}
    enhanceAll(document)
    const observer=new MutationObserver(records=>records.forEach(record=>record.addedNodes.forEach(node=>{if(node instanceof Element)enhanceAll(node)})))
    observer.observe(document.body,{childList:true,subtree:true})
    const onClick=event=>{
      const trigger=event.target instanceof Element?event.target.closest(SELECTOR):null
      if(!(trigger instanceof HTMLButtonElement)||trigger.disabled)return
      ensureEnhanced(trigger)
      if(trigger.dataset.state!=='idle')return
      setAnnouncement('')
      const before=readCartSnapshot()
      queueMicrotask(()=>begin(trigger,before,message=>{setAnnouncement('');requestAnimationFrame(()=>setAnnouncement(message))}))
    }
    document.addEventListener('click',onClick,true)
    return()=>{observer.disconnect();document.removeEventListener('click',onClick,true)}
  },[])
  return <span className="sr-only" role="status" aria-live="polite" aria-atomic="true">{announcement}</span>
}
