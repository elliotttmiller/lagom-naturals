import {useEffect} from 'react'
import {useLocation,useNavigate} from 'react-router-dom'

const CART_RETURN_KEY='lagom-header-cart-return'

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
    const cartOpen=location.pathname==='/cart'
    const search=document.querySelector('.site-header .header-tools a[aria-label="Search"]')
    const cart=document.querySelector('.site-header .header-tools a.cart-icon')
    if(search){
      search.setAttribute('aria-controls','global-search-surface')
      if(!search.hasAttribute('aria-expanded'))search.setAttribute('aria-expanded','false')
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

      if(search){
        event.preventDefault()
        event.stopPropagation()
        window.dispatchEvent(new CustomEvent('lagom:toggle-global-search'))
        return
      }

      const targetPath='/cart'
      const isOpen=location.pathname==='/cart'
      if(isOpen){
        event.preventDefault()
        event.stopPropagation()
        const returnTo=readReturn(CART_RETURN_KEY)
        clearReturn(CART_RETURN_KEY)
        navigate(returnTo&&returnTo!==targetPath?returnTo:'/',{replace:true})
        return
      }

      const current=`${location.pathname}${location.search}${location.hash}`
      writeReturn(CART_RETURN_KEY,current||'/')
    }

    document.addEventListener('click',handleHeaderUtilityClick,true)
    return()=>document.removeEventListener('click',handleHeaderUtilityClick,true)
  },[location.pathname,location.search,location.hash,navigate])

  return null
}
