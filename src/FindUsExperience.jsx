import React from 'react'
import { useLocation } from 'react-router-dom'
import findUsHero from '@/assets/mobile/find-us-hero.png'

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

const mapsDirections=shop=>`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(shop.address)}`
const mapsPlace=shop=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.address)}`
const phoneLabel=p=>p?`(${p.slice(-10,-7)}) ${p.slice(-7,-4)}-${p.slice(-4)}`:''
const initials=name=>name.replace(/[^A-Za-z0-9 ]/g,'').split(/\s+/).filter(Boolean).slice(0,2).map(word=>word[0]).join('').toUpperCase()
const logoFor=shop=>{if(!shop.website)return '';try{return `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(new URL(shop.website).origin)}&sz=128`}catch{return ''}}

function SearchIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.2 4.2"/></svg>}
function PinIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></svg>}
function ArrowIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5"/></svg>}
function ExternalIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-8 8"/><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>}

let leafletPromise
function loadLeaflet(){
  if(typeof window==='undefined') return Promise.reject(new Error('Leaflet requires a browser'))
  if(window.L) return Promise.resolve(window.L)
  if(leafletPromise) return leafletPromise
  leafletPromise=new Promise((resolve,reject)=>{
    if(!document.querySelector('link[data-lagom-leaflet]')){
      const link=document.createElement('link')
      link.rel='stylesheet'
      link.href='https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.css'
      link.dataset.lagomLeaflet='true'
      document.head.appendChild(link)
    }
    const existing=document.querySelector('script[data-lagom-leaflet]')
    if(existing){
      existing.addEventListener('load',()=>resolve(window.L),{once:true})
      existing.addEventListener('error',()=>reject(new Error('Unable to load map library')),{once:true})
      return
    }
    const script=document.createElement('script')
    script.src='https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.js'
    script.async=true
    script.dataset.lagomLeaflet='true'
    script.onload=()=>resolve(window.L)
    script.onerror=()=>reject(new Error('Unable to load map library'))
    document.head.appendChild(script)
  })
  return leafletPromise
}

function markerIcon(L,selected=false){
  const iconUrl=`${import.meta.env.BASE_URL}lagom-logo-icon-white.svg`
  return L.divIcon({
    className:`lagom-leaflet-pin${selected?' is-selected':''}`,
    html:`<span class="lagom-leaflet-pin__disc"><img src="${iconUrl}" alt=""></span><span class="lagom-leaflet-pin__tip"></span>`,
    iconSize:selected?[58,68]:[46,56],
    iconAnchor:selected?[29,64]:[23,53],
  })
}

function InteractiveStoreMap({points,selected,onSelect}){
  const containerRef=React.useRef(null)
  const mapRef=React.useRef(null)
  const markersRef=React.useRef(new Map())
  const selectedIdRef=React.useRef(null)
  const [status,setStatus]=React.useState('loading')

  React.useEffect(()=>{
    if(!containerRef.current)return
    let cancelled=false
    loadLeaflet().then(L=>{
      if(cancelled||!containerRef.current)return
      if(!mapRef.current){
        const map=L.map(containerRef.current,{
          zoomControl:false,
          attributionControl:true,
          scrollWheelZoom:false,
          tap:true,
          zoomSnap:.5,
        })
        L.control.zoom({position:'topright'}).addTo(map)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
          maxZoom:19,
          attribution:'&copy; OpenStreetMap contributors',
        }).addTo(map)
        mapRef.current=map
      }
      setStatus('ready')
      requestAnimationFrame(()=>mapRef.current?.invalidateSize())
    }).catch(()=>{if(!cancelled)setStatus('error')})
    return()=>{cancelled=true}
  },[])

  React.useEffect(()=>{
    const map=mapRef.current
    const L=window.L
    if(!map||!L)return

    const activeIds=new Set()
    points.forEach(({shop,lat,lon})=>{
      activeIds.add(shop.id)
      const latLng=[Number(lat),Number(lon)]
      const isSelected=shop.id===selected.id
      let marker=markersRef.current.get(shop.id)
      if(!marker){
        marker=L.marker(latLng,{
          icon:markerIcon(L,isSelected),
          keyboard:true,
          title:shop.name,
          riseOnHover:true,
          zIndexOffset:isSelected?1000:0,
        }).addTo(map)
        marker.on('click',()=>onSelect(shop))
        marker.bindTooltip(shop.name,{
          direction:'top',
          offset:[0,isSelected?-60:-48],
          className:'lagom-map-tooltip',
          opacity:.96,
        })
        markersRef.current.set(shop.id,marker)
      }else{
        marker.setLatLng(latLng)
        marker.setIcon(markerIcon(L,isSelected))
        marker.setZIndexOffset(isSelected?1000:0)
      }
    })

    markersRef.current.forEach((marker,id)=>{
      if(!activeIds.has(id)){map.removeLayer(marker);markersRef.current.delete(id)}
    })

    const selectedPoint=points.find(p=>p.shop.id===selected.id)
    if(selectedPoint&&selectedIdRef.current!==selected.id){
      selectedIdRef.current=selected.id
      map.setView([Number(selectedPoint.lat),Number(selectedPoint.lon)],14,{animate:true})
    }else if(!map.getCenter()&&points.length){
      map.setView([Number(points[0].lat),Number(points[0].lon)],13,{animate:false})
    }
  },[points,selected,onSelect])

  React.useEffect(()=>()=>{if(mapRef.current){mapRef.current.remove();mapRef.current=null;markersRef.current.clear()}},[])

  return <>
    <div ref={containerRef} className="find-leaflet-map" aria-label={`Interactive map showing ${points.length} Lagom locations`}/>
    {status!=='ready'&&<div className="find-map-state" role="status">{status==='error'?'Map unavailable — select a location or open directions.':'Loading map…'}</div>}
  </>
}

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

const GEO_CACHE_KEY='lagom-store-coordinates-v1'
const wait=ms=>new Promise(resolve=>setTimeout(resolve,ms))

export default function FindUsExperience(){
  const {pathname}=useLocation()
  const [query,setQuery]=React.useState('')
  const [selected,setSelected]=React.useState(SHOPS[0])
  const [pointsById,setPointsById]=React.useState({})
  const [mapStatus,setMapStatus]=React.useState('loading')

  React.useEffect(()=>{
    let cancelled=false
    const controller=new AbortController()
    let cached={}
    try{cached=JSON.parse(localStorage.getItem(GEO_CACHE_KEY)||'{}')}catch{}
    if(Object.keys(cached).length)setPointsById(cached)

    const queue=[SHOPS[0],...SHOPS.slice(1)].filter(shop=>!cached[shop.id])
    const geocode=async shop=>{
      const response=await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=us&q=${encodeURIComponent(shop.address)}`,{
        signal:controller.signal,
        headers:{Accept:'application/json'},
      })
      if(!response.ok)throw new Error('geocode')
      const rows=await response.json()
      const row=rows?.[0]
      if(!row?.lat||!row?.lon)return null
      return {lat:row.lat,lon:row.lon}
    }

    ;(async()=>{
      setMapStatus(Object.keys(cached).length?'ready':'loading')
      for(const shop of queue){
        if(cancelled)break
        try{
          const point=await geocode(shop)
          if(point&&!cancelled){
            cached={...cached,[shop.id]:point}
            setPointsById(cached)
            setMapStatus('ready')
            try{localStorage.setItem(GEO_CACHE_KEY,JSON.stringify(cached))}catch{}
          }
        }catch(error){
          if(error.name==='AbortError')break
        }
        if(!cancelled)await wait(1100)
      }
      if(!cancelled&&Object.keys(cached).length===0)setMapStatus('error')
    })()

    return()=>{cancelled=true;controller.abort()}
  },[])
  if(pathname!=='/visit')return null
  const q=query.trim().toLowerCase()
  const visible=q?SHOPS.filter(s=>`${s.name} ${s.address}`.toLowerCase().includes(q)):SHOPS
  const mapPoints=SHOPS.flatMap(shop=>pointsById[shop.id]?[{shop,...pointsById[shop.id]}]:[])
  const choose=React.useCallback(shop=>{setSelected(shop);if(window.innerWidth<900)document.querySelector('.find-map-pane')?.scrollIntoView({behavior:'smooth',block:'center'})},[])
  return <section className="find-experience" aria-labelledby="find-title">
    <div className="find-mobile-hero">
      <img src={findUsHero} alt="Lagom Naturals storefront district"/>
      <div className="find-mobile-hero__shade" aria-hidden="true"/>
      <div className="find-mobile-hero__copy">
        <h1 id="find-title">Find<br/>Lagom<br/>Near You</h1>
        <p>GREAT FLAVORS.<br/>REAL PLACES.<br/>HIGHER DAYS AHEAD.</p>
        <span aria-hidden="true"/>
      </div>
    </div>
    <div className="find-shell">
      <aside className="find-sidebar">
        <div className="find-intro">
          <p className="find-eyebrow">FIND US</p>
          <h1>Find Lagom<br/>Near You</h1>
        </div>
        <label className="find-search">
          <span className="sr-only">Search locations</span>
          <span className="find-search__pin" aria-hidden="true"><PinIcon/></span>
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Enter your city, ZIP, or shop name"/>
          <SearchIcon/>
        </label>
        <div className="find-result-meta"><span>{visible.length} locations</span><span>Minnesota + Wisconsin</span></div>
        <div className="find-location-list" aria-live="polite">
          {visible.map(shop=><LocationRow key={shop.id} shop={shop} selected={selected.id===shop.id} onSelect={choose}/>)}
          {!visible.length&&<div className="find-empty"><strong>No locations found.</strong><button type="button" onClick={()=>setQuery('')}>Clear search</button></div>}
        </div>
      </aside>
      <div className="find-map-pane">
        {mapPoints.length?<InteractiveStoreMap points={mapPoints} selected={selected} onSelect={choose}/>:<div className="find-map-state" role="status">{mapStatus==='error'?'Map unavailable — select a location or open directions.':'Loading map locations…'}</div>}
        <a className="find-map-open" href={mapsPlace(selected)} target="_blank" rel="noreferrer">Open in Maps <ExternalIcon/></a>
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
