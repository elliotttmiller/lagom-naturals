import React from 'react'
import { useLocation } from 'react-router-dom'
import findUsHero from '@/assets/mobile/find-us-hero.png'

export const SHOPS=[
// Address-point matches verified 2026-09-18. Six decimals are retained for map rendering;
// the actual ground accuracy is that of the geocoder's underlying address point.
['Barstock Liquors','31 E Main St','Crosby','MN','56441','+12185453004','http://www.barstockliquors.com/',46.482740,-93.950839],
['Central Avenue Liquors','2538 Central Ave NE','Minneapolis','MN','55418','+16127813424','http://www.central-liquor.com/',45.014605,-93.247881],
['Eden Prairie Liquors — 78th Street','16508 W 78th St','Eden Prairie','MN','55346','+19529498423','http://www.edenprairie.org/epliquor',44.863449,-93.487569],
['Eden Prairie Liquors — Den Road','8018 Den Rd','Eden Prairie','MN','55344','+19529498302','http://www.edenprairie.org/epliquor',44.858370,-93.423836],
['First Grand Avenue Liquor Store','918 Grand Ave','St Paul','MN','55105','+16512277039','http://www.1stgrandaveliquors.com/',44.939856,-93.138802],
['Hemp House','719 W 26th St','Minneapolis','MN','55405','+16123536081','https://hemphouse.co/',44.955490,-93.288605],
['Hemp House','501 1st Ave NE Suite 130','Minneapolis','MN','55413','+16123159454','https://hemphouse.co/',44.990342,-93.254163],
['Hemp House','1313 Chestnut Ave','Minneapolis','MN','55403','+16123536081','https://hemphouse.co/',44.976459,-93.283706],
['Hemp House','6015 Lyndale Ave S','Minneapolis','MN','55419','+16123542167','https://hemphouse.co/',44.893849,-93.287628],
['Hemp House','1995 Burns Ave','St Paul','MN','55119','+16514934257','https://hemphouse.co/',44.948957,-93.016116],
['Hopkins Liquor Store','712 11th Ave S','Hopkins','MN','55343','+19529388277','https://hopkinsliquor.gotoliquorstore.com/',44.912788,-93.414974],
['Itasca Wine and Spirits','706 N 1st St Suite 100','Minneapolis','MN','55401','+16122132975','',44.989862,-93.274589],
['Liquor Boy Wine and Spirits','5620 Cedar Lk Rd S','St Louis Park','MN','55416','+19525122200','http://www.liquor-boy.com/',44.964078,-93.350631],
['Long Lake Orono Smoke Shop','1865 Wayzata Blvd Unit 112','Long Lake','MN','55356','+17632731879','',44.985523,-93.572352],
["Mac's Liquor",'8600 Excelsior Blvd','Hopkins','MN','55343','+19529359291','http://www.macsliq.com/',44.925636,-93.388560],
["Nolo's Kitchen & Bar",'515 N Washington Ave #100','Minneapolis','MN','55401','+16128006033','http://noloskitchen.com/',44.986187,-93.275582],
['Park Tavern','3401 Louisiana Ave S','St Louis Park','MN','55426','+19529296810','https://www.parktavern.net/',44.941248,-93.369830],
['Plymouth Liquors','11000 Hwy 55','Plymouth','MN','55441','+17635450771','http://www.liquorbarrel.com/',44.988782,-93.419788],
['St Louis Park Liquor','6316 Minnetonka Blvd','St Louis Park','MN','55416','+19524263650','',44.949929,-93.360077],
['The 701 Salon','701 N 3rd St #210','Minneapolis','MN','55401','+16124615525','',44.993566,-93.282702],
['The Basement Bar','511 N Washington Ave','Minneapolis','MN','55401','+16128006033','https://www.basementbarmpls.com/',44.986289,-93.275112],
['The Loop Minneapolis','606 N Washington Ave #100','Minneapolis','MN','55401','+16123400010','http://theloopmpls.com/',44.987447,-93.275893],
['TXT Wine and Spirits','700 W Broadway','Minneapolis','MN','55411','','',44.999850,-93.288346],
['Vicksburg Liquors','1115 Vicksburg Ln N','Plymouth','MN','55447','+17634761483','https://vicksburgliquor.com/',44.991236,-93.482240],
['Vikings Golf Course','282 E Balsam St','Strum','WI','54770','+17156953306','',44.556528,-91.390251],
['Vinifera Wine and Ales','1400 County Rd 101','Plymouth','MN','55447','+17634730008','http://www.viniferawinesandales.com/',44.994159,-93.501218],
['Wayzata Smoke Shop & Vape','1310 Wayzata Blvd','Wayzata','MN','55391','+19522294452','',44.970666,-93.481092],
['Westwood Liquor','2304 Louisiana Ave S','St Louis Park','MN','55426','+19525447878','',44.959249,-93.371822]
].map(([name,street,city,state,zip,phone,website,latitude,longitude],i)=>({id:i+1,name,street,city,state,zip,phone,website,latitude,longitude,address:`${street}, ${city}, ${state} ${zip}`}))
const MAP_POINTS=SHOPS.map(shop=>({shop,lat:shop.latitude,lon:shop.longitude}))

const mapsDirections=shop=>`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(shop.address)}`
const mapsPlace=shop=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.address)}`
const phoneLabel=p=>p?`(${p.slice(-10,-7)}) ${p.slice(-7,-4)}-${p.slice(-4)}`:''
const initials=name=>name.replace(/[^A-Za-z0-9 ]/g,'').split(/\s+/).filter(Boolean).slice(0,2).map(word=>word[0]).join('').toUpperCase()
const logoFor=shop=>{if(!shop.website)return '';try{return `https://www.google.com/s2/favicons?domain_url=${encodeURIComponent(new URL(shop.website).origin)}&sz=128`}catch{return ''}}
const escapeHtml=value=>String(value).replace(/[&<>'"]/g,character=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[character]))
const popupMarkup=shop=>{
  const logo=logoFor(shop)
  const retailerMark=logo
    ?`<img src="${escapeHtml(logo)}" alt="" />`
    :`<b>${escapeHtml(initials(shop.name))}</b>`
  const phone=shop.phone?`<a href="tel:${escapeHtml(shop.phone)}">${escapeHtml(phoneLabel(shop.phone))}</a>`:''
  const website=shop.website?`<a href="${escapeHtml(shop.website)}" target="_blank" rel="noreferrer">Website ↗</a>`:''
  return `<article class="lagom-store-popup__content">
    <div class="lagom-store-popup__identity"><span class="lagom-store-popup__brand">${retailerMark}</span><span><small>Selected location</small><strong>${escapeHtml(shop.name)}</strong></span></div>
    <address>${escapeHtml(shop.street)}<br>${escapeHtml(shop.city)}, ${escapeHtml(shop.state)} ${escapeHtml(shop.zip)}</address>
    <div class="lagom-store-popup__links"><a class="lagom-store-popup__directions" href="${escapeHtml(mapsDirections(shop))}" target="_blank" rel="noreferrer">Get directions</a>${phone}${website}</div>
  </article>`
}

function SearchIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.2 4.2"/></svg>}
function PinIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></svg>}
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

function InteractiveStoreMap({points,selected,onSelect,focusRequest}){
  const containerRef=React.useRef(null)
  const mapRef=React.useRef(null)
  const markersRef=React.useRef(new Map())
  const selectedIdRef=React.useRef(null)
  const hasFitBoundsRef=React.useRef(false)
  const [status,setStatus]=React.useState('loading')

  React.useEffect(()=>{
    if(!containerRef.current)return
    let cancelled=false
    loadLeaflet().then(L=>{
      if(cancelled||!containerRef.current)return
      if(!mapRef.current){
        const supportsDesktopPointer=window.matchMedia?.('(hover: hover) and (pointer: fine)').matches
        const map=L.map(containerRef.current,{
          zoomControl:false,
          attributionControl:true,
          scrollWheelZoom:supportsDesktopPointer,
          wheelPxPerZoomLevel:100,
          wheelDebounceTime:40,
          tap:true,
          zoomSnap:.25,
          zoomAnimation:true,
          fadeAnimation:true,
          markerZoomAnimation:true,
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
    let focusFrame
    let measureFrame

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
        marker.bindPopup(popupMarkup(shop),{
          autoPan:false,
          autoClose:true,
          closeButton:true,
          closeOnEscapeKey:true,
          closeOnClick:false,
          maxWidth:360,
          offset:[0,-54],
          className:'lagom-store-popup',
        })
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

    const needsInitialFit=!hasFitBoundsRef.current&&points.length
    if(needsInitialFit){
      map.fitBounds(L.latLngBounds(points.map(({lat,lon})=>[Number(lat),Number(lon)])),{
        padding:[44,44],
        maxZoom:11,
        animate:false,
      })
      hasFitBoundsRef.current=true
    }

    const selectedPoint=points.find(p=>p.shop.id===selected.id)
    if(selectedPoint&&(selectedIdRef.current!==selected.id||focusRequest>0)){
      selectedIdRef.current=selected.id
      const latLng=[Number(selectedPoint.lat),Number(selectedPoint.lon)]
      const marker=markersRef.current.get(selected.id)
      const isMobile=window.matchMedia?.('(max-width: 899px)').matches
      const reduceMotion=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

      if(!marker)return

      if(needsInitialFit&&focusRequest===0){
        marker.openPopup()
        return
      }

      // Center the complete rendered selection (detail card plus pin), rather
      // than the marker coordinate alone. The measured footprint naturally
      // adapts to desktop and mobile popup sizes without device-specific offsets.
      const focusSelection=()=>{
        map.invalidateSize({animate:false,pan:false})
        map.setView(latLng,14,{animate:false})
        marker.openPopup()
        measureFrame=requestAnimationFrame(()=>{
          const containerRect=map.getContainer().getBoundingClientRect()
          const popupRect=marker.getPopup()?.getElement()?.getBoundingClientRect()
          const markerRect=marker.getElement()?.getBoundingClientRect()
          if(!popupRect||!markerRect)return

          const selectionCenterX=(Math.min(popupRect.left,markerRect.left)+Math.max(popupRect.right,markerRect.right))/2
          const selectionCenterY=(Math.min(popupRect.top,markerRect.top)+Math.max(popupRect.bottom,markerRect.bottom))/2
          const viewportCenterX=containerRect.left+(containerRect.width/2)
          const viewportCenterY=containerRect.top+(containerRect.height/2)
          const offset=[
            Math.round(selectionCenterX-viewportCenterX),
            Math.round(selectionCenterY-viewportCenterY),
          ]
          if(Math.abs(offset[0])>2||Math.abs(offset[1])>2){
            map.panBy(offset,{animate:!reduceMotion,duration:isMobile ? .28 : .36,easeLinearity:.25})
          }
        })
      }

      focusFrame=requestAnimationFrame(focusSelection)
    }
    return()=>{
      window.cancelAnimationFrame(focusFrame)
      window.cancelAnimationFrame(measureFrame)
    }
  },[points,selected,onSelect,status,focusRequest])

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
    </button>
  </article>
}

export default function FindUsExperience(){
  const {pathname}=useLocation()
  const [query,setQuery]=React.useState('')
  const [selected,setSelected]=React.useState(SHOPS[0])
  const [focusRequest,setFocusRequest]=React.useState(0)
  const choose=React.useCallback(shop=>{
    setSelected(shop)
    setFocusRequest(request=>request+1)
    if(window.innerWidth<900)document.querySelector('.find-map-pane')?.scrollIntoView({behavior:'smooth',block:'center'})
  },[])
  if(pathname!=='/visit')return null
  const q=query.trim().toLowerCase()
  const visible=q?SHOPS.filter(s=>`${s.name} ${s.address}`.toLowerCase().includes(q)):SHOPS
  const mapPoints=MAP_POINTS
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
        <InteractiveStoreMap points={mapPoints} selected={selected} onSelect={choose} focusRequest={focusRequest}/>
        <a className="find-map-open" href={mapsPlace(selected)} target="_blank" rel="noreferrer">Open in Maps <ExternalIcon/></a>
      </div>
    </div>
  </section>
}
