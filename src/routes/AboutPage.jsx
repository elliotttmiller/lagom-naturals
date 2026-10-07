import Shell from '@/storefront/StorefrontShell'
import FeatureCard from '@/editorial/FeatureCard'
import {responsiveImages} from '@/generated/responsiveImages'
import '@/styles/mobile/70-editorial.css'
import '@/styles/editorial-routes.css'

function StoryPicture({desktopMedia,mobileMedia,alt='',className='',eager=false,sizes='100vw'}){
  return <picture className={className}>
    <source media="(max-width: 699px)" type="image/avif" srcSet={mobileMedia.avifSrcSet} sizes={sizes}/>
    <source media="(max-width: 699px)" type="image/webp" srcSet={mobileMedia.webpSrcSet} sizes={sizes}/>
    <source type="image/avif" srcSet={desktopMedia.avifSrcSet} sizes={sizes}/>
    <source type="image/webp" srcSet={desktopMedia.webpSrcSet} sizes={sizes}/>
    <img src={desktopMedia.src} alt={alt} width={desktopMedia.width} height={desktopMedia.height} loading={eager?'eager':'lazy'} fetchPriority={eager?'high':'auto'} decoding="async"/>
  </picture>
}

export default function AboutPage(){
  return <Shell><div className="about-page about-story-page">
    <section className="story-hero" aria-labelledby="story-title">
      <StoryPicture className="story-hero__picture" desktopMedia={responsiveImages.story['hero-desktop']} mobileMedia={responsiveImages.story['hero-mobile']} eager/>
      <div className="story-hero__shade" aria-hidden="true"/>
      <div className="story-hero__content"><p className="story-kicker">OUR STORY</p><h1 id="story-title">A More<br/>Balanced You</h1><p className="story-hero__lede">Thoughtfully crafted THC seltzers for life’s<br className="story-desktop-break"/> good moments — and everything in between.</p><a className="story-pill story-pill--light" href="#our-story">OUR STORY <span aria-hidden="true">↓</span></a></div>
      <div className="story-hero__proof" aria-label="Lagom values"><span>REAL INGREDIENTS</span><i aria-hidden="true"/><span>REAL MOMENTS</span><i aria-hidden="true"/><span>A BRIGHTER TOMORROW</span></div>
    </section>
    <section className="story-origin story-scroll-step" data-story-step="01" id="our-story">
      <div className="story-origin__copy"><p className="story-kicker story-kicker--dark">OUR STORY</p><h2>It Started With<br/>a Simple Idea</h2><p>Founded by four friends and rooted in Minneapolis’ North Loop, Lagom Naturals began with a shared belief that thoughtfully made THC products should feel considered, approachable, and made for real life.</p><p>The Swedish idea behind our name is simple: <em>lagom</em> means neither too much nor too little — just right.</p><a className="story-pill story-pill--dark" href="#philosophy">OUR PHILOSOPHY <span aria-hidden="true">→</span></a></div>
      <div className="story-origin__visual"><figure className="story-origin__figure"><StoryPicture desktopMedia={responsiveImages.story['cheers-desktop']} mobileMedia={responsiveImages.story['cheers-mobile']} alt="Friends sharing Lagom seltzers outdoors" sizes="(max-width: 699px) 100vw, 50vw"/></figure><aside className="story-origin__rail" aria-label="Our philosophy"><span>BETTER<br/>INGREDIENTS</span><i/><span>BRIGHTER<br/>MOMENTS</span><i/><span>BALANCED<br/>LIVING</span><i/></aside></div>
    </section>
    <section className="story-life story-scroll-step" data-story-step="02" id="philosophy">
      <figure><StoryPicture desktopMedia={responsiveImages.story['just-enough-desktop']} mobileMedia={responsiveImages.story['just-enough-mobile']} alt="Sunset over a rocky Minnesota lakeshore" sizes="(max-width: 699px) 100vw, 50vw"/></figure>
      <div className="story-life__copy"><p className="story-kicker story-kicker--dark">MORE THAN A BEVERAGE</p><h2>Built For Real Life</h2><p>We believe balance leads to better days. That’s why Lagom is more than a drink — it’s a mindset, a community, and a commitment to thoughtful experiences.</p></div>
      <div className="story-life__principles editorial-story-principles" aria-label="Lagom product principles"><FeatureCard index="01" eyebrow="Product" title="Premium ingredients" body="Lagom product pages surface formulation and dietary details when verified product data is available."/><FeatureCard index="02" eyebrow="Approach" title="Thoughtful dosing" body="Potency stays visible alongside responsible-use information rather than being treated as decorative fine print."/><FeatureCard index="03" eyebrow="Philosophy" title="A more balanced you" body="The Lagom idea is neither too much nor too little — just right."/></div>
    </section>
    <section className="story-closing-reference story-scroll-step" data-story-step="03" aria-labelledby="lagom-way-title"><p>THE LAGOM WAY</p><h2 id="lagom-way-title">Premium Ingredients.<br/>A Brighter Tomorrow.</h2><i aria-hidden="true"/></section>
  </div></Shell>
}
