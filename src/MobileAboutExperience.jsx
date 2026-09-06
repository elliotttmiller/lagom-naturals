import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import {ArrowRight,Leaf,MapPin,ShoppingBag,UsersRound} from 'lucide-react'
import {m,motionTokens,motionVariants,useReducedMotion} from './motionSystem'
import mainStore2 from '@/assets/store/main-store2.webp'
import extraStore2 from '@/assets/store/extra-store2.webp'

const values=[
  {icon:Leaf,label:'Curated Brands'},
  {icon:ShoppingBag,label:'In-Store Pickup'},
  {icon:UsersRound,label:'Thoughtful Guidance'},
  {icon:MapPin,label:'North Loop Minneapolis'},
]

export default function MobileAboutExperience(){
  const location=useLocation()
  const reduceMotion=useReducedMotion()
  if(location.pathname!=='/about')return null

  return <main className="mobile-about" aria-label="About Lagom Naturals">
    <section className="mobile-about__hero">
      <m.img
        src={mainStore2}
        alt="Inside Lagom Naturals in Minneapolis"
        fetchPriority="high"
        decoding="async"
        initial={reduceMotion?false:{scale:1.035,opacity:.96}}
        animate={{scale:1,opacity:1}}
        transition={{duration:reduceMotion?0:.8,ease:motionTokens.easeSoft}}
      />
      <div className="mobile-about__hero-shade"/>
      <m.div className="mobile-about__hero-copy" initial="hidden" animate="visible" variants={motionVariants.stagger}>
        <m.p variants={motionVariants.item} className="mobile-about__eyebrow">OUR STORY <i/></m.p>
        <m.h1 variants={motionVariants.item}>A more balanced<br/>way forward.</m.h1>
        <m.p variants={motionVariants.item} className="mobile-about__lead">People. Plants.<br/>A brighter tomorrow.</m.p>
        <m.div variants={motionVariants.item} className="mobile-about__actions">
          <Link to="/visit">Explore Our Store <ArrowRight/></Link>
          <a href="#our-philosophy">Our Philosophy <ArrowRight/></a>
        </m.div>
      </m.div>
    </section>

    <section className="mobile-about__philosophy" id="our-philosophy">
      <m.div className="mobile-about__section-copy" initial="hidden" whileInView="visible" viewport={{once:true,amount:.22}} variants={motionVariants.stagger}>
        <m.p variants={motionVariants.item} className="mobile-about__eyebrow mobile-about__eyebrow--dark">OUR PHILOSOPHY <i/></m.p>
        <m.h2 variants={motionVariants.item}>Enough choice.<br/>More clarity.<br/>Better balance.</m.h2>
        <m.p variants={motionVariants.item}>Lagom is a Swedish idea meaning “not too much, not too little—just right.” We bring that standard to a multi-brand dispensary experience built around clear choices and thoughtful guidance.</m.p>
      </m.div>

      <m.div className="mobile-about__values" initial="hidden" whileInView="visible" viewport={{once:true,amount:.2}} variants={motionVariants.stagger}>
        {values.map(({icon:Icon,label})=><m.div key={label} variants={motionVariants.item} className="mobile-about__value">
          <span><Icon aria-hidden="true"/></span>
          <p>{label}</p>
        </m.div>)}
      </m.div>
    </section>

    <section className="mobile-about__space">
      <m.div className="mobile-about__space-copy" initial="hidden" whileInView="visible" viewport={{once:true,amount:.22}} variants={motionVariants.stagger}>
        <m.p variants={motionVariants.item} className="mobile-about__eyebrow mobile-about__eyebrow--dark">OUR SPACE <i/></m.p>
        <m.h2 variants={motionVariants.item}>A Modern<br/>Dispensary<br/>Experience</m.h2>
        <m.p variants={motionVariants.item}>A welcoming, modern environment designed for discovery, comfort, and straightforward shopping.</m.p>
      </m.div>
      <m.div className="mobile-about__space-media" initial={reduceMotion?false:{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{duration:reduceMotion?0:motionTokens.duration.slow,ease:motionTokens.easeSoft}}>
        <img src={extraStore2} alt="Lagom Naturals retail interior" loading="lazy" decoding="async"/>
      </m.div>
    </section>

    <section className="mobile-about__cta">
      <p className="mobile-about__eyebrow mobile-about__eyebrow--dark">COME SAY HELLO <i/></p>
      <h2>Find your just right.</h2>
      <p>Explore the current selection or plan a visit to our Minneapolis store.</p>
      <div>
        <Link to="/shop">Shop Products <ArrowRight/></Link>
        <Link to="/visit">Visit Our Store</Link>
      </div>
    </section>
  </main>
}
