import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {Bell,ChevronRight,CircleHelp,Gift,Heart,PackageCheck,Search,Settings,ShoppingBag,User} from 'lucide-react'
import {m,Stagger,StaggerItem,motionTokens} from './motionSystem'
import './styles/account.css'

const CART_KEY='lagom-beverage-cart-v1'
const primary=[[PackageCheck,'My Orders','Review purchases and order status'],[Heart,'Favorites','Your saved Lagom products']]
const secondary=[[Settings,'Account Settings','Profile, email and account details'],[Bell,'Notifications','Choose the updates you receive'],[CircleHelp,'Help & Support','Answers and customer support']]

function cartCount(){try{return(JSON.parse(localStorage.getItem(CART_KEY)||'[]')||[]).reduce((sum,item)=>sum+(Number(item.qty)||0),0)}catch{return 0}}

function AccountHeader(){
  const[count,setCount]=React.useState(cartCount)
  React.useEffect(()=>{const sync=()=>setCount(cartCount());window.addEventListener('storage',sync);window.addEventListener('lagom-cart-change',sync);return()=>{window.removeEventListener('storage',sync);window.removeEventListener('lagom-cart-change',sync)}},[])
  return <>
    <div className="announcement account-announcement">HEMP-DERIVED THC · FOR ADULTS 21+ · ENJOY RESPONSIBLY</div>
    <header className="account-site-header">
      <nav className="account-site-nav" aria-label="Primary navigation">
        <div className="account-site-nav__group"><NavLink to="/shop">Shop</NavLink><NavLink to="/merch">Merch</NavLink></div>
        <Link className="account-site-brand" to="/"><img src="/lagom-logo.svg" alt="Lagom Naturals"/></Link>
        <div className="account-site-nav__group"><NavLink to="/visit">Find Us</NavLink><NavLink to="/about">Our Story</NavLink></div>
      </nav>
      <div className="account-site-tools"><Link to="/shop" aria-label="Search"><Search/></Link><Link to="/account" aria-current="page" aria-label="Account"><User/></Link><Link className="account-cart-icon" to="/cart" aria-label={`Cart, ${count} items`}><ShoppingBag/>{count>0&&<b>{count}</b>}</Link></div>
    </header>
  </>
}

function AccountRow({Icon,label,detail,reward=false}){return <StaggerItem><m.button type="button" className={`account-hub-row${reward?' account-hub-row--reward':''}`} whileHover={{x:3}} whileTap={motionTokens.tap} aria-label={`${label}. ${detail}`}><span className="account-hub-row__icon"><Icon/></span><span className="account-hub-row__copy"><b>{label}</b><small>{detail}</small></span><ChevronRight className="account-hub-row__chevron"/></m.button></StaggerItem>}

export default function AccountPage(){return <div className="account-route"><AccountHeader/><main className="account-hub"><section className="account-hub__intro"><div className="account-hub__mark"><img src="/lagom-logo-icon.svg" alt="" aria-hidden="true"/></div><div><p>Welcome to</p><h1>Lagom</h1><span>Your place for orders, favorites, rewards and account preferences.</span></div></section><Stagger className="account-hub__rows">{primary.map(([Icon,label,detail])=><AccountRow key={label} Icon={Icon} label={label} detail={detail}/>)}<AccountRow Icon={Gift} label="Rewards" detail="Shop. Earn. Get more." reward/>{secondary.map(([Icon,label,detail])=><AccountRow key={label} Icon={Icon} label={label} detail={detail}/>)}</Stagger><p className="account-hub__backend-note">Account services will activate when the customer account and commerce backend is connected.</p></main></div>}
