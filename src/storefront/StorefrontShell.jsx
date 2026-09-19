import React,{useEffect,useRef,useState} from 'react'
import {Link,NavLink,useNavigate} from 'react-router-dom'
import {ArrowLeft,ChevronRight,Search,ShoppingBag,User} from 'lucide-react'
import HamburgerToggle from '@/HamburgerToggle'
import {m,motionTokens,motionVariants} from '@/motionSystem'
import {useCart} from './StorefrontContext'

const PUBLIC_BASE=import.meta.env.BASE_URL
const publicAsset=name=>`${PUBLIC_BASE}${name.replace(/^\//,'')}`

const MENU_DURATION=600
const MENU_EASE=[0.4,0,0.2,1]

function Logo({onClick,className=''}){return <Link to="/" className={`brand ${className}`} onClick={onClick}><img src={publicAsset("lagom-logo.svg")} alt="Lagom Naturals"/></Link>}

function Header({detail=false}){
  const{count}=useCart()
  const[open,setOpen]=useState(false),[visible,setVisible]=useState(false)
  const nav=useNavigate(),drawerRef=useRef(null),closeRef=useRef(null),timerRef=useRef(null)
  const close=()=>{setOpen(false);clearTimeout(timerRef.current);timerRef.current=setTimeout(()=>setVisible(false),MENU_DURATION)}
  const toggle=next=>{if(next){clearTimeout(timerRef.current);setVisible(true);requestAnimationFrame(()=>setOpen(true))}else close()}
  useEffect(()=>()=>clearTimeout(timerRef.current),[])
  useEffect(()=>{
    if(!visible)return
    const previous=document.activeElement,overflow=document.body.style.overflow
    document.body.style.overflow='hidden'
    requestAnimationFrame(()=>closeRef.current?.focus())
    const key=e=>{
      if(e.key==='Escape'){e.preventDefault();close();return}
      if(e.key!=='Tab')return
      const list=drawerRef.current?.querySelectorAll('a[href],button:not([disabled])')
      if(!list?.length)return
      const first=list[0],last=list[list.length-1]
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
    }
    document.addEventListener('keydown',key)
    return()=>{document.removeEventListener('keydown',key);document.body.style.overflow=overflow;previous?.focus?.()}
  },[visible])
  const links=[['Shop','/shop'],['Merch','/merch'],['Find Us','/visit'],['Our Story','/about']]
  return <><m.header className={`site-header ${detail?'site-header--commerce':''}`} layout="position"><div className="header-inner">
    {detail?<m.button type="button" className="icon-btn" whileTap={{scale:.9}} onClick={()=>nav(-1)} aria-label="Back"><ArrowLeft/></m.button>:<HamburgerToggle checked={open} onChange={toggle} controls="site-navigation-drawer" label={open?'Close menu':'Open menu'}/>}
    <Logo className="header-mobile-brand"/>
    <nav className="desktop-nav" aria-label="Primary navigation"><div className="desktop-nav__group desktop-nav__group--left">{links.slice(0,2).map(([label,to])=><NavLink key={label} to={to}>{label}</NavLink>)}</div><Logo className="desktop-nav__brand"/><div className="desktop-nav__group desktop-nav__group--right">{links.slice(2).map(([label,to])=><NavLink key={label} to={to}>{label}</NavLink>)}</div></nav>
    <div className="header-tools"><button type="button" className="icon-btn" aria-label="Search drinks" aria-controls="global-search-surface" aria-expanded="false" onClick={()=>window.dispatchEvent(new CustomEvent('lagom:open-global-search'))}><Search/></button><Link className="icon-btn header-account" to="/account" aria-label="Account"><User/></Link><Link className="icon-btn cart-icon" to="/cart" aria-label={`Cart, ${count} items`}><ShoppingBag/>{count>0&&<b>{count}</b>}</Link></div>
  </div></m.header>
  {visible&&<m.div className="drawer-bg" initial={{opacity:0}} animate={{opacity:open?1:0}} transition={{duration:.6,ease:MENU_EASE}} onClick={close}><m.aside ref={drawerRef} id="site-navigation-drawer" className="drawer" role="dialog" aria-modal="true" aria-label="Site navigation" initial={{x:'-102%'}} animate={{x:open?0:'-102%'}} transition={{duration:.6,ease:MENU_EASE}} onClick={e=>e.stopPropagation()}><div className="drawer-top"><Logo onClick={close}/><HamburgerToggle ref={closeRef} checked={open} onChange={toggle} controls="site-navigation-drawer" label="Close menu"/></div><m.nav initial="hidden" animate={open?'visible':'hidden'} variants={motionVariants.stagger}>{links.map(([label,to])=><m.div key={label} variants={motionVariants.item}><Link to={to} onClick={close}>{label}<ChevronRight/></Link></m.div>)}</m.nav></m.aside></m.div>}</>
}

export default function Shell({children,detail=false}){return <div className="app-shell"><div className="announcement">HEMP-DERIVED THC · FOR ADULTS 21+ · ENJOY RESPONSIBLY</div><Header detail={detail}/><main>{children}</main></div>}
