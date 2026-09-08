import React from 'react'
import { useLocation } from 'react-router-dom'
import storefrontMobile from '@/assets/mobile/storefront.png'

const SHOPS=[
['Barstock Liquors','31 E Main St','Crosby','MN','56441','+12185453004','http://www.barstockliquors.com/'],
['Central Avenue Liquors','2538 Central Ave NE','Minneapolis','MN','55418','+16127813424','http://www.central-liquor.com/'],
['Eden Prairie Liquors — 78th Street','16508 W 78th St','Eden Prairie','MN','55346','+19529498423','http://www.edenprairie.org/epliquor'],
['Eden Prairie Liquors — Den Road','8018 Den Rd','Eden Prairie','MN','55344','+19529498302','http://www.edenprairie.org/epliquor'],
['First Grand Avenue Liquor Store','918 Grand Ave','St Paul','MN','55105','+16512277039','http://www.1stgrandaveliquors.com/'],
['Hemp House','719 W 26th St','Minneapolis','MN','55405','+16123536081','https://hemphouse.co/'],
['Hemp House','501 1st Ave NE Suite 130','Minneapolis','MN','55413','+16123159454','https://hemphouse.co/'],
['Hemp House','1313 Chestnut Ave','Minneapolis','MN','55403','+16123536081','https://hemphouse.co/'],
['Hemp House','6015 Lyndale Ave S','Minneapolis','MN','55419','+16123542167','https://hemphouse.co/'],
['Hemp House','1995 Burns Ave','St Paul','MN','55119','+16514934257','https://hemphouse.co/'],
['Hopkins Liquor Store','712 11th Ave S','Hopkins','MN','55343','+19529388277','https://hopkinsliquor.gotoliquorstore.com/'],
['Itasca Wine and Spirits','706 N 1st St Suite 100','Minneapolis','MN','55401','+16122132975',''],
['Liquor Boy Wine and Spirits','5620 Cedar Lk Rd S','St Louis Park','MN','55416','+19525122200','http://www.liquor-boy.com/'],
['Long Lake Orono Smoke Shop','1865 Wayzata Blvd Unit 112','Long Lake','MN','55356','+17632731879',''],
["Mac's Liquor",'8600 Excelsior Blvd','Hopkins','MN','55343','+19529359291','http://www.macsliq.com/'],
["Nolo's Kitchen & Bar",'515 N Washington Ave #100','Minneapolis','MN','55401','+16128006033','http://noloskitchen.com/'],
['Park Tavern','3401 Louisiana Ave S','St Louis Park','MN','55426','+19529296810','https://www.parktavern.net/'],
['Plymouth Liquors','11000 Hwy 55','Plymouth','MN','55441','+17635450771','http://www.liquorbarrel.com/'],
['St Louis Park Liquor','6316 Minnetonka Blvd','St Louis Park','MN','55416','+19524263650',''],
['The 701 Salon','701 N 3rd St #210','Minneapolis','MN','55401','+16124615525',''],
['The Basement Bar','511 N Washington Ave','Minneapolis','MN','55401','+16128006033','https://www.basementbarmpls.com/'],
['The Loop Minneapolis','606 N Washington Ave #100','Minneapolis','MN','55401','+16123400010','http://theloopmpls.com/'],
['TXT Wine and Spirits','700 W Broadway','Minneapolis','MN','55411','',''],
['Vicksburg Liquors','1115 Vicksburg Ln N','Plymouth','MN','55447','+17634761483','https://vicksburgliquor.com/'],
['Vikings Golf Course','282 E Balsam St','Strum','WI','54770','+17156953306',''],
['Vinifera Wine and Ales','1400 County Rd 101','Plymouth','MN','55447','+17634730008','http://www.viniferawinesandales.com/'],
['Wayzata Smoke Shop & Vape','1310 Wayzata Blvd','Wayzata','MN','55391','+19522294452',''],
['Westwood Liquor','2304 Louisiana Ave S','St Louis Park','MN','55426','+19525447878','']
].map(([name,street,city,state,zip,phone,website],i)=>({id:i+1,name,street,city,state,zip,phone,website,address:`${street}, ${city}, ${state} ${zip}`}))

const mapsEmbed=shop=>`https://www.google.com/maps?q=${encodeURIComponent(shop.address)}&output=embed`
const mapsDirections=shop=>`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(shop.address)}`
const phoneLabel=p=>p?`(${p.slice(-10,-7)}) ${p.slice(-7,-4)}-${p.slice(-4)}`:''
const initials=name=>name.replace(/[^A-Za-z0-9 ]/g,'').split(/\s+/).filter(Boolean).slice(0,2).map(word=>word[0]).join('').toUpperCase()
const logoFor=shop=>{if(!shop.website)return '';try{return `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(new URL(shop.website).origin)}&sz=128`}catch{return ''}}

function SearchIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.2 4.2"/></svg>}
function PinIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></svg>}
function ArrowIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5"/></svg>}

function RetailerMark({shop}){
  const src=logoFor(shop);const [failed,setFailed]=React.useState(false)
  React.useEffect(()=>setFailed(false),[src])
  return <span className="find-brand" aria-hidden="true">{src&&!failed?<img src={src} alt="" loading="lazy" onError={()=>setFailed(true)}/>:<b>{initials(shop.name)}</b>}</span>
}

function LocationRow({shop,selected,onSelect}){
  return <article className={`find-location-row${selected?' is-selected':''}`}>
    <button type="button" className="find-location-row__main" onClick={()=>onSelect(shop)} aria-label={`Show ${shop.name} on map`}>
      <RetailerMark shop={shop}/>
      <span className="find-location-row__copy"><strong>{shop.name}</strong><small>{shop.city}, {shop.state} · {shop.zip}</small></span>
      <ArrowIcon/>
    </button>
  </article>
}

export default function FindUsExperience(){
  const {pathname}=useLocation();const [query,setQuery]=React.useState('');const [selected,setSelected]=React.useState(SHOPS[0])
  if(pathname!=='/visit')return null
  const q=query.trim().toLowerCase();const visible=q?SHOPS.filter(s=>`${s.name} ${s.address}`.toLowerCase().includes(q)):SHOPS
  const choose=shop=>{setSelected(shop);if(window.innerWidth<900)document.querySelector('.find-map-pane')?.scrollIntoView({behavior:'smooth',block:'start'})}
  return <section className="find-experience" aria-labelledby="find-title">
    <div className="find-mobile-visual" aria-hidden="true"><img src={storefrontMobile} alt=""/></div>
    <div className="find-shell">
      <aside className="find-sidebar">
        <div className="find-intro">
          <p className="find-eyebrow">FIND US</p>
          <h1 id="find-title">Find Lagom<br/>Near You</h1>
          <p>Great drinks are better together.<br/>Find Lagom Naturals near you.</p>
        </div>
        <label className="find-search"><span className="sr-only">Search locations</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Enter your city, ZIP, or shop name"/><SearchIcon/></label>
        <div className="find-result-meta"><span>{visible.length} locations</span><span>Minnesota + Wisconsin</span></div>
        <div className="find-location-list" aria-live="polite">
          {visible.map(shop=><LocationRow key={shop.id} shop={shop} selected={selected.id===shop.id} onSelect={choose}/>)}
          {!visible.length&&<div className="find-empty"><strong>No locations found.</strong><button type="button" onClick={()=>setQuery('')}>Clear search</button></div>}
        </div>
      </aside>
      <div className="find-map-pane">
        <iframe key={selected.id} title={`Map — ${selected.name}`} src={mapsEmbed(selected)} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>
        <article className="find-map-popover">
          <div className="find-map-popover__identity"><RetailerMark shop={selected}/><span><small>SELECTED LOCATION</small><strong>{selected.name}</strong></span></div>
          <address>{selected.street}<br/>{selected.city}, {selected.state} {selected.zip}</address>
          <div className="find-map-popover__links">
            <a className="find-directions" href={mapsDirections(selected)} target="_blank" rel="noreferrer"><PinIcon/>Get Directions</a>
            {selected.phone&&<a href={`tel:${selected.phone}`}>{phoneLabel(selected.phone)}</a>}
            {selected.website&&<a href={selected.website} target="_blank" rel="noreferrer">Website ↗</a>}
          </div>
        </article>
      </div>
    </div>
  </section>
}
