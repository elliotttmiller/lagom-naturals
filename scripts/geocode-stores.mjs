const STORES = [
  [1,'Barstock Liquors','31 E Main St','Crosby','MN','56441'],
  [2,'Central Avenue Liquors','2538 Central Ave NE','Minneapolis','MN','55418'],
  [3,'Eden Prairie Liquors — 78th Street','16508 W 78th St','Eden Prairie','MN','55346'],
  [4,'Eden Prairie Liquors — Den Road','8018 Den Rd','Eden Prairie','MN','55344'],
  [5,'First Grand Avenue Liquor Store','918 Grand Ave','St Paul','MN','55105'],
  [6,'Hemp House Uptown','719 W 26th St','Minneapolis','MN','55405'],
  [7,'Hemp House Northeast','501 1st Ave NE Suite 130','Minneapolis','MN','55413'],
  [8,'Hemp House Downtown','1313 Chestnut Ave','Minneapolis','MN','55403'],
  [9,'Hemp House Richfield','6015 Lyndale Ave S','Minneapolis','MN','55419'],
  [10,'Hemp House St. Paul','1995 Burns Ave','St Paul','MN','55119'],
  [11,'Hopkins Liquor Store','712 11th Ave S','Hopkins','MN','55343'],
  [12,'Itasca Wine and Spirits','706 N 1st St Suite 100','Minneapolis','MN','55401'],
  [13,'Liquor Boy Wine and Spirits','5620 Cedar Lake Rd S','St Louis Park','MN','55416'],
  [14,'Long Lake Orono Smoke Shop','1865 Wayzata Blvd Unit 112','Long Lake','MN','55356'],
  [15,"Mac's Liquor",'8600 Excelsior Blvd','Hopkins','MN','55343'],
  [16,"Nolo's Kitchen & Bar",'515 N Washington Ave #100','Minneapolis','MN','55401'],
  [17,'Park Tavern','3401 Louisiana Ave S','St Louis Park','MN','55426'],
  [18,'Plymouth Liquors','11000 Hwy 55','Plymouth','MN','55441'],
  [19,'St Louis Park Liquor','6316 Minnetonka Blvd','St Louis Park','MN','55416'],
  [20,'The 701 Salon','701 N 3rd St #210','Minneapolis','MN','55401'],
  [21,'The Basement Bar','511 N Washington Ave','Minneapolis','MN','55401'],
  [22,'The Loop Minneapolis','606 N Washington Ave #100','Minneapolis','MN','55401'],
  [23,'TXT Wine and Spirits','700 W Broadway','Minneapolis','MN','55411'],
  [24,'Vicksburg Liquors','1115 Vicksburg Ln N','Plymouth','MN','55447'],
  [25,'Viking Golf Course','282 E Balsam St','Strum','WI','54770'],
  [26,'Vinifera Wine and Ales','1400 County Rd 101','Plymouth','MN','55447'],
  [27,'Wayzata Smoke Shop & Vape','1310 Wayzata Blvd','Wayzata','MN','55391'],
  [28,'Westwood Liquor','2304 Louisiana Ave S','St Louis Park','MN','55426'],
].map(([id,name,street,city,state,zip])=>({id,name,street,city,state,zip,address:`${street}, ${city}, ${state} ${zip}`}));

const sleep = ms => new Promise(r => setTimeout(r, ms));
const rad = d => d * Math.PI / 180;
function meters(a,b){
  if(!a||!b) return null;
  const R=6371000;
  const dLat=rad(b.lat-a.lat), dLon=rad(b.lon-a.lon);
  const x=Math.sin(dLat/2)**2+Math.cos(rad(a.lat))*Math.cos(rad(b.lat))*Math.sin(dLon/2)**2;
  return 2*R*Math.asin(Math.sqrt(x));
}

async function nominatim(s){
  const u=new URL('https://nominatim.openstreetmap.org/search');
  u.search=new URLSearchParams({
    format:'jsonv2',limit:'1',addressdetails:'1',countrycodes:'us',
    street:s.street,city:s.city,state:s.state,postalcode:s.zip
  });
  const r=await fetch(u,{headers:{
    'User-Agent':'LagomNaturalsStoreLocator/1.0 (https://github.com/elliotttmiller/lagom-naturals)',
    'Accept':'application/json'
  }});
  if(!r.ok) throw new Error(`Nominatim ${r.status}`);
  const row=(await r.json())[0];
  return row?{lat:+row.lat,lon:+row.lon,display_name:row.display_name,osm_type:row.osm_type,osm_id:row.osm_id}:null;
}
async function census(s){
  const u=new URL('https://geocoding.geo.census.gov/geocoder/locations/onelineaddress');
  u.search=new URLSearchParams({address:s.address,benchmark:'Public_AR_Current',format:'json'});
  const r=await fetch(u,{headers:{'Accept':'application/json'}});
  if(!r.ok) throw new Error(`Census ${r.status}`);
  const m=(await r.json())?.result?.addressMatches?.[0];
  return m?{lat:+m.coordinates.y,lon:+m.coordinates.x,matchedAddress:m.matchedAddress,tigerLine:m.tigerLine?.tigerLineId}:null;
}

const results=[];
for(const store of STORES){
  let osm=null,censusPoint=null,errors=[];
  try{osm=await nominatim(store)}catch(e){errors.push(e.message)}
  await sleep(1150);
  try{censusPoint=await census(store)}catch(e){errors.push(e.message)}
  const distance=meters(osm,censusPoint);
  const selected=osm||censusPoint;
  results.push({
    ...store,
    latitude:selected?.lat??null,
    longitude:selected?.lon??null,
    verification:{
      status:selected ? (distance==null?'single-source':distance<=150?'cross-verified':distance<=500?'review':'conflict') : 'unresolved',
      source:osm?'OpenStreetMap/Nominatim':'US Census Geocoder',
      sourceDistanceMeters:distance==null?null:Math.round(distance),
      osm,census:censusPoint,errors
    }
  });
  console.log(store.id,store.name,selected?.lat,selected?.lon,results.at(-1).verification.status,distance&&Math.round(distance));
}

await import('node:fs/promises').then(fs=>fs.mkdir('src/data',{recursive:true}).then(()=>
  Promise.all([
    fs.writeFile('src/data/store-geocodes.json',JSON.stringify(results.map(({verification,...x})=>x),null,2)+'\n'),
    fs.writeFile('src/data/store-geocode-report.json',JSON.stringify(results,null,2)+'\n')
  ])
));
