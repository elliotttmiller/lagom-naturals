import React,{useEffect,useState}from'react'
import{createPortal}from'react-dom'
import{Link,useLocation}from'react-router-dom'
import{ShoppingBag}from'lucide-react'

const CART_KEY='lagom-cart-v2'

function readCartCount(){
  try{
    const items=JSON.parse(localStorage.getItem(CART_KEY)||'[]')
    if(!Array.isArray(items))return 0
    return items.reduce((total,item)=>total+Math.max(1,Number(item?.qty)||1),0)
  }catch{return 0}
}

export default function PdpHeaderCartBridge(){
  const location=useLocation()
  const isProduct=location.pathname.startsWith('/product/')
  const[target,setTarget]=useState(null)
  const[count,setCount]=useState(readCartCount)

  useEffect(()=>{
    if(!isProduct){setTarget(null);return}
    const resolve=()=>setTarget(document.querySelector('.app-shell:has(.pdp) .site-header .header-tools'))
    resolve()
    const observer=new MutationObserver(resolve)
    observer.observe(document.body,{childList:true,subtree:true})
    return()=>observer.disconnect()
  },[isProduct,location.pathname])

  useEffect(()=>{
    if(!isProduct)return
    const sync=()=>setCount(readCartCount())
    sync()
    const onStorage=event=>{if(!event.key||event.key===CART_KEY)sync()}
    const onCartAction=event=>{
      if(!(event.target instanceof Element)||!event.target.closest('.pdp .primary-bar'))return
      window.setTimeout(sync,40)
      window.setTimeout(sync,180)
      window.setTimeout(sync,500)
    }
    window.addEventListener('storage',onStorage)
    window.addEventListener('focus',sync)
    document.addEventListener('click',onCartAction,true)
    return()=>{
      window.removeEventListener('storage',onStorage)
      window.removeEventListener('focus',sync)
      document.removeEventListener('click',onCartAction,true)
    }
  },[isProduct,location.pathname])

  if(!isProduct||!target)return null

  return createPortal(
    <Link
      className="icon-btn cart-icon pdp-header-cart"
      to="/cart"
      aria-label={`Cart, ${count} item${count===1?'':'s'}`}
    >
      <ShoppingBag aria-hidden="true"/>
      {count>0?<b>{count}</b>:null}
    </Link>,
    target,
  )
}
