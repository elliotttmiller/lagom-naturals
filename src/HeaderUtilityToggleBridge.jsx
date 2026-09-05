import {useEffect} from 'react'
import {useLocation,useNavigate} from 'react-router-dom'

const RETURN_KEYS={
  cart:'lagom-header-cart-return',
  search:'lagom-header-search-return',
}

function readReturn(key){
  try{return sessionStorage.getItem(key)||''}catch{return''}
}

function writeReturn(key,value){
  try{sessionStorage.setItem(key,value)}catch{}
}

function clearReturn(key){
  try{sessionStorage.removeItem(key)}catch{}
}

export default function HeaderUtilityToggleBridge(){
  const location=useLocation()
  const navigate=useNavigate()

  useEffect(()=>{
    const searchOpen=location.pathname==='/shop'&&!new URLSearchParams(location.search).has('category')
    const cartOpen=location.pathname==='/cart'
    const search=document.querySelector('.site-header .header-tools a[aria-label="Search"]')
    const cart=document.querySelector('.site-header .header-tools a.cart-icon')
    if(search){
      search.setAttribute('aria-expanded',searchOpen?'true':'false')
      search.setAttribute('aria-controls','shop-search-surface')
    }
    if(cart){
      cart.setAttribute('aria-expanded',cartOpen?'true':'false')
      cart.setAttribute('aria-controls','cart-surface')
    }
  },[location.pathname,location.search])

  useEffect(()=>{
    const handleHeaderUtilityClick=event=>{
      if(!(event.target instanceof Element))return
      const search=event.target.closest('.site-header .header-tools a[aria-label="Search"]')
      const cart=event.target.closest('.site-header .header-tools a.cart-icon')
      if(!search&&!cart)return

      const utility=cart?'cart':'search'
      const targetPath=cart?'/cart':'/shop'
      const key=RETURN_KEYS[utility]
      const isSearchSurface=utility==='search'&&location.pathname==='/shop'&&!new URLSearchParams(location.search).has('category')
      const isOpen=utility==='cart'?location.pathname==='/cart':isSearchSurface

      if(isOpen){
        event.preventDefault()
        event.stopPropagation()
        const returnTo=readReturn(key)
        clearReturn(key)
        navigate(returnTo&&returnTo!==targetPath?returnTo:'/',{replace:true})
        return
      }

      const current=`${location.pathname}${location.search}${location.hash}`
      writeReturn(key,current||'/')
    }

    document.addEventListener('click',handleHeaderUtilityClick,true)
    return()=>document.removeEventListener('click',handleHeaderUtilityClick,true)
  },[location.pathname,location.search,location.hash,navigate])

  return null
}
