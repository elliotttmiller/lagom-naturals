import React from 'react'
import {MapPin,Phone,ArrowUpRight,Navigation,Store} from 'lucide-react'
import {useLocation} from 'react-router-dom'
import storefront from '@/assets/store/storefront-day.webp'
import {m,motionTokens,motionVariants} from '@/motionSystem'

const FLAGSHIP={
  name:'Lagom Naturals',
  neighborhood:'North Loop · Minneapolis',
  address1:'707 N 3rd St, Ste 101',
  address2:'Minneapolis, MN 55401',
  phone:'612-930-7643',
  tel:'+16129307643',
  directions:'https://www.google.com/maps/search/?api=1&query=Lagom+Naturals+707+N+3rd+St+Ste+101+Minneapolis+MN+55401',
}

export default function VerifiedFindUsExperience(){
  const location=useLocation()
  if(location.pathname!=='/visit')return null
  return <m.section className="verified-find" initial="hidden" animate="visible" variants={motionVariants.stagger} aria-labelledby="verified-find-title">
    <m.header className="verified-find__hero" variants={motionVariants.item}>
      <p className="verified-find__eyebrow">FIND LAGOM</p>
      <h1 id="verified-find-title">Come find<br/><em>your just right.</em></h1>
      <p className="verified-find__intro">Visit Lagom Naturals in Minneapolis’ North Loop. This is the location currently published by Lagom Naturals on its official website.</p>
    </m.header>

    <m.div className="verified-find__feature" variants={motionVariants.item}>
      <div className="verified-find__media"><img src={storefront} alt="Lagom Naturals storefront in Minneapolis"/></div>
      <article className="verified-find__card">
        <div className="verified-find__badge"><Store/><span>FLAGSHIP LOCATION</span></div>
        <p>{FLAGSHIP.neighborhood}</p>
        <h2>{FLAGSHIP.name}</h2>
        <address><MapPin/><span>{FLAGSHIP.address1}<br/>{FLAGSHIP.address2}</span></address>
        <a className="verified-find__phone" href={`tel:${FLAGSHIP.tel}`}><Phone/><span>{FLAGSHIP.phone}</span></a>
        <div className="verified-find__actions">
          <a href={FLAGSHIP.directions} target="_blank" rel="noreferrer"><Navigation/>Get directions<ArrowUpRight/></a>
          <a href={`tel:${FLAGSHIP.tel}`}><Phone/>Call store</a>
        </div>
      </article>
    </m.div>

    <m.div className="verified-find__notice" variants={motionVariants.item} transition={motionTokens.springSoft}>
      <div><MapPin/></div>
      <div><p className="verified-find__eyebrow">CURRENT LOCATION DATA</p><h2>One verified Lagom location.</h2><p>The official Lagom Naturals Find Us page currently publishes the North Loop address above. We are not listing unverified stockists as official locations. Retail availability can change, so call ahead when making a dedicated trip.</p></div>
    </m.div>
  </m.section>
}
