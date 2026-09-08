import React from 'react'
import { useLocation } from 'react-router-dom'

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

const mapsEmbed=(shop)=>`https://www.google.com/maps?q=${encodeURIComponent(shop.address)}&output=embed`
const mapsDirections=(shop)=>`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(shop.address)}`
const phoneLabel=(p)=>p?`(${p.slice(-10,-7)}) ${p.slice(-7,-4)}-${p.slice(-4)}`:''
const initials=(name)=>name.replace(/[^A-Za-z0-9 ]/g,'').split(/\s+/).filter(Boolean).slice(0,2).map(word=>word[0]).join('').toUpperCase()
const logoFor=(shop)=>{
  if(!shop.website)return ''
  try{return `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(new URL(shop.website).origin)}&sz=128`}catch{return ''}
}

function RetailerMark({shop,compact=false}){
  const src=logoFor(shop)
  const [failed,setFailed]=React.useState(false)
  React.useEffect(()=>setFailed(false),[src])
  return <div className={`retailer-brand-mark${compact?' retailer-brand-mark--compact':''}`} aria-hidden="true">
    {src&&!failed?<img src={src} alt="" loading="lazy" onError={()=>setFailed(true)}/>:<span>{initials(shop.name)}</span>}
  </div>
}

export default function FindUsExperience(){
  const {pathname}=useLocation()
  const [query,setQuery]=React.useState('')
  const [selected,setSelected]=React.useState(SHOPS[0])
  if(pathname!=='/visit')return null
  const q=query.trim().toLowerCase()
  const visible=q?SHOPS.filter(s=>`${s.name} ${s.address}`.toLowerCase().includes(q)):SHOPS
  const choose=(shop)=>{setSelected(shop);document.querySelector('.retailer-map')?.scrollIntoView({behavior:'smooth',block:'start'})}
  return <section className="retailer-locator" aria-labelledby="retailer-title">
    <header className="retailer-hero">
      <p className="retailer-kicker">FIND LAGOM NATURALS</p>
      <h1 id="retailer-title">Find your<br/><em>nearest Lagom.</em></h1>
      <p>Find Lagom Naturals near you. Explore our retail partners across Minnesota and Wisconsin, then contact your preferred location to confirm current availability.</p>
    </header>
    <div className="retailer-map" aria-label={`Map showing ${selected.name}`}>
      <iframe key={selected.id} title={`Map — ${selected.name}`} src={mapsEmbed(selected)} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      <aside className="retailer-map-card">
        <div className="retailer-map-card__top"><RetailerMark shop={selected}/><span>SELECTED LOCATION</span></div>
        <h2>{selected.name}</h2>
        <address>{selected.street}<br/>{selected.city}, {selected.state} {selected.zip}</address>
        <div className="retailer-actions">
          <a href={mapsDirections(selected)} target="_blank" rel="noreferrer">Directions ↗</a>
          {selected.phone&&<a href={`tel:${selected.phone}`}>Call</a>}
          {selected.website&&<a href={selected.website} target="_blank" rel="noreferrer">Website ↗</a>}
        </div>
      </aside>
    </div>
    <div className="retailer-directory">
      <div className="retailer-directory-head"><div><p>STOCKISTS / RETAILERS</p><h2>Find Lagom near you.</h2></div><label><span>Search locations</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="City, ZIP, or shop name"/></label></div>
      <p className="retailer-count" aria-live="polite">Showing {visible.length} of {SHOPS.length} locations</p>
      <div className="retailer-grid">
        {visible.map(shop=><article className={`retailer-card${selected.id===shop.id?' is-selected':''}`} key={shop.id}>
          <button className="retailer-card-main" type="button" onClick={()=>choose(shop)} aria-label={`Show ${shop.name} on map`}>
            <div className="retailer-card-brand"><RetailerMark shop={shop} compact/><span>{String(shop.id).padStart(2,'0')}</span></div>
            <h3>{shop.name}</h3><address>{shop.street}<br/>{shop.city}, {shop.state} {shop.zip}</address><b>View on map →</b>
          </button>
          <div className="retailer-card-links">{shop.phone&&<a href={`tel:${shop.phone}`}>{phoneLabel(shop.phone)}</a>}<a href={mapsDirections(shop)} target="_blank" rel="noreferrer">Directions</a>{shop.website&&<a href={shop.website} target="_blank" rel="noreferrer">Website</a>}</div>
        </article>)}
      </div>
      {!visible.length&&<div className="retailer-empty"><h3>No locations match that search.</h3><button type="button" onClick={()=>setQuery('')}>Show all locations</button></div>}
    </div>
  </section>
}
