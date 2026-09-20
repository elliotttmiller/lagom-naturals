import {Leaf} from 'lucide-react'
import Shell from '@/storefront/StorefrontShell'
import storyHeroDesktopWebp from '@/assets/our-story/hero-desktop.webp'
import storyHeroMobileWebp from '@/assets/our-story/hero-mobile.webp'
import storyJustEnoughDesktopWebp from '@/assets/our-story/just-enough-desktop.webp'
import storyJustEnoughMobileWebp from '@/assets/our-story/just-enough-mobile.webp'
import storyCheersDesktopWebp from '@/assets/our-story/cheers-desktop.webp'
import storyCheersMobileWebp from '@/assets/our-story/cheers-mobile.webp'
import '@/styles/mobile/70-editorial.css'

function StoryPicture({desktopWebp,mobileWebp,alt='',className='',eager=false}){
  return <picture className={className}><source media="(max-width: 699px)" srcSet={mobileWebp} type="image/webp"/><img src={desktopWebp} alt={alt} loading={eager?'eager':'lazy'} fetchPriority={eager?'high':'auto'} decoding="async"/></picture>
}

export default function AboutPage(){
  return <Shell><main className="about-page about-story-page">
    <section className="story-hero" aria-labelledby="story-title">
      <StoryPicture className="story-hero__picture" desktopWebp={storyHeroDesktopWebp} mobileWebp={storyHeroMobileWebp} eager/>
      <div className="story-hero__shade" aria-hidden="true"/>
      <div className="story-hero__content"><p className="story-kicker">OUR STORY</p><h1 id="story-title">Just Right for<br/>Right Now</h1><p className="story-hero__lede">Thoughtfully crafted THC seltzers and gummies for easygoing evenings,<br className="story-desktop-break"/> shared tables, and everything in between.</p><a className="story-pill story-pill--light" href="#our-story">MEET LAGOM <span aria-hidden="true">↓</span></a></div>
      <div className="story-hero__proof" aria-label="Lagom values"><span>REAL INGREDIENTS</span><i aria-hidden="true"/><span>REAL MOMENTS</span><i aria-hidden="true"/><span>A BRIGHTER TOMORROW</span></div>
    </section>
    <section className="story-origin" id="our-story">
      <div className="story-origin__copy"><p className="story-kicker story-kicker--dark">OUR STORY</p><h2>It Started With<br/>a Simple Idea</h2><p>Founded by four friends and rooted in Minneapolis’ North Loop, Lagom Naturals began with a shared belief that thoughtfully made THC products should feel considered, approachable, and made for real life.</p><p>The Swedish idea behind our name is simple: <em>lagom</em> means neither too much nor too little — just right.</p><a className="story-pill story-pill--dark" href="#philosophy">OUR PHILOSOPHY <span aria-hidden="true">→</span></a></div>
      <div className="story-origin__visual"><figure className="story-origin__figure"><StoryPicture desktopWebp={storyCheersDesktopWebp} mobileWebp={storyCheersMobileWebp} alt="Friends sharing Lagom seltzers outdoors"/></figure><aside className="story-origin__rail" aria-label="Our philosophy"><span>BETTER<br/>INGREDIENTS</span><i/><span>BRIGHTER<br/>MOMENTS</span><i/><span>BALANCED<br/>LIVING</span><i/></aside></div>
    </section>
    <section className="story-life" id="philosophy">
      <figure><StoryPicture desktopWebp={storyJustEnoughDesktopWebp} mobileWebp={storyJustEnoughMobileWebp} alt="Sunset over a rocky Minnesota lakeshore"/></figure>
      <div className="story-life__copy"><p className="story-kicker story-kicker--dark">MORE THAN A BEVERAGE</p><h2>Built For Real Life</h2><p>We believe balance leads to better days. That’s why Lagom is more than a drink — it’s a mindset, a community, and a commitment to thoughtful experiences.</p></div>
      <div className="story-life__principles" aria-label="Lagom product principles"><span><Leaf aria-hidden="true"/><b>PREMIUM<br/>INGREDIENTS</b></span><span><span className="story-sun" aria-hidden="true">☼</span><b>THOUGHTFUL<br/>DOSING</b></span><span><span className="story-eye" aria-hidden="true">◉</span><b>A MORE<br/>BALANCED YOU</b></span></div>
    </section>
    <section className="story-closing-reference" aria-labelledby="lagom-way-title"><p>THE LAGOM WAY</p><h2 id="lagom-way-title">Premium Ingredients.<br/>A Brighter Tomorrow.</h2><i aria-hidden="true"/></section>
  </main></Shell>
}
