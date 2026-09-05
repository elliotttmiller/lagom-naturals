import lemonade24k from '@/assets/products/24K-Lemonade-1.png'
import blackberryBreeze from '@/assets/products/Blackberry-Breeze-Photoroom-1-900x900.png'
import blueberryYumYum from '@/assets/products/Blueberry-Yum-Yum-1-Photoroom-900x900.png'
import spaceCadet from '@/assets/products/Moonlight-Space-Cadet-5mg-THC-Live-Resin-1024x1024.png'
import pushPop from '@/assets/products/Push-Pop-Photoroom-900x900.png'
import strawberryBanana from '@/assets/products/Strawberry-Banana-Photoroom-900x900.png'
import strawberryLime from '@/assets/products/Strawberry-Lime-Fusion-Photoroom-900x900.png'
import watermelonRefresher from '@/assets/products/Watermelon-Refresher-Photoroom-900x900.png'

import categoryFlower from '@/assets/products/flower.png'
import flower2 from '@/assets/products/flower2.png'
import flower3 from '@/assets/products/flower3.png'
import flower4 from '@/assets/products/flower4.png'

import categoryVapes from '@/assets/products/vapes.png'
import vapes2 from '@/assets/products/vapes2.png'
import vapes3 from '@/assets/products/vapes3.png'
import vapes4 from '@/assets/products/vapes4.png'

import categoryEdibles from '@/assets/products/edibles.png'
import edibles2 from '@/assets/products/edibles2.png'
import edibles3 from '@/assets/products/edibles3.png'
import edibles4 from '@/assets/products/edibles4.png'

import categoryPreRolls from '@/assets/products/pre-rolls.png'
import preRolls2 from '@/assets/products/pre-rolls2.png'
import preRolls3 from '@/assets/products/pre-rolls3.png'
import preRolls4 from '@/assets/products/pre-rolls4.png'

import categoryConcentrates from '@/assets/products/concentrate.png'
import concentrate2 from '@/assets/products/concentrate2.png'
import concentrate3 from '@/assets/products/concentrate3.png'
import concentrate4 from '@/assets/products/concentrate4.png'

import categoryTopicals from '@/assets/products/topicals.png'
import topicals2 from '@/assets/products/topicals2.png'

import categoryTinctures from '@/assets/products/tinctures.png'
import tinctures2 from '@/assets/products/tinctures2.png'
import tinctures3 from '@/assets/products/tinctures3.png'

import mainstreetHoodie from '@/assets/merch/Lagom-Mainstreet-Hooded-Sweatshirt-900x900.png'
import midweightCrewneck from '@/assets/merch/Lagom-Midweight-Crewneck-Sweatshirt-Front-900x900.png'

const mockProduct=(product)=>({
  preview:true,
  mock:true,
  rating:4.8,
  reviews:42,
  ...product,
})

export const products=[
  {id:'24k-lemonade',brand:'Lagom Naturals',name:'24K Lemonade',category:'Beverages',price:6,strength:'THC infused',type:'Seltzer',rating:4.9,reviews:124,weight:'12 oz',image:lemonade24k},
  {id:'blackberry-breeze',brand:'Lagom Naturals',name:'Blackberry Breeze',category:'Beverages',price:6,strength:'THC infused',type:'Seltzer',rating:4.8,reviews:98,weight:'12 oz',image:blackberryBreeze},
  {id:'strawberry-lime-fusion',brand:'Lagom Naturals',name:'Strawberry Lime Fusion',category:'Beverages',price:6,strength:'THC infused',type:'Seltzer',rating:4.8,reviews:83,weight:'12 oz',image:strawberryLime},
  {id:'watermelon-refresher',brand:'Lagom Naturals',name:'Watermelon Refresher',category:'Beverages',price:6,strength:'THC infused',type:'Seltzer',rating:4.7,reviews:76,weight:'12 oz',image:watermelonRefresher},

  mockProduct({id:'flower-selection-1',brand:'Aster House',name:'Northern Lights',category:'Flower',price:42,strength:'24% THC',type:'Indica',rating:4.9,reviews:86,weight:'3.5g',image:categoryFlower}),
  mockProduct({id:'flower-selection-2',brand:'Birchline',name:'Citrus Grove',category:'Flower',price:38,strength:'22% THC',type:'Sativa',rating:4.7,reviews:51,weight:'3.5g',image:flower2}),
  mockProduct({id:'flower-selection-3',brand:'Field & Form',name:'Velvet Fog',category:'Flower',price:44,strength:'26% THC',type:'Hybrid',rating:4.8,reviews:73,weight:'3.5g',image:flower3}),
  mockProduct({id:'flower-selection-4',brand:'Juniper Works',name:'Pineapple Mint',category:'Flower',price:40,strength:'23% THC',type:'Hybrid',rating:4.8,reviews:64,weight:'3.5g',image:flower4}),

  mockProduct({id:'vape-selection-1',brand:'Aster House',name:'Lemon Haze',category:'Vapes',price:36,strength:'78% THC',type:'Sativa',rating:4.8,reviews:58,weight:'0.5g',image:categoryVapes}),
  mockProduct({id:'vape-selection-2',brand:'Birchline',name:'Blue Dream',category:'Vapes',price:40,strength:'82% THC',type:'Hybrid',rating:4.7,reviews:47,weight:'0.5g',image:vapes2}),
  mockProduct({id:'vape-selection-3',brand:'Field & Form',name:'Night Bloom',category:'Vapes',price:38,strength:'80% THC',type:'Indica',rating:4.9,reviews:69,weight:'0.5g',image:vapes3}),
  mockProduct({id:'vape-selection-4',brand:'Juniper Works',name:'Clementine',category:'Vapes',price:42,strength:'84% THC',type:'Sativa',rating:4.8,reviews:55,weight:'0.5g',image:vapes4}),

  mockProduct({id:'edibles-selection-1',brand:'Sonder Sweets',name:'Peach Glow Gummies',category:'Edibles',price:22,strength:'5mg THC',type:'Hybrid gummies',rating:4.9,reviews:112,weight:'10 pc',image:categoryEdibles}),
  mockProduct({id:'edibles-selection-2',brand:'Sonder Sweets',name:'Berry Calm Gummies',category:'Edibles',price:22,strength:'5mg THC + 10mg CBD',type:'Balanced gummies',rating:4.8,reviews:94,weight:'10 pc',image:edibles2}),
  mockProduct({id:'edibles-selection-3',brand:'North & Meadow',name:'Mango Lift Chews',category:'Edibles',price:24,strength:'10mg THC',type:'Sativa chews',rating:4.7,reviews:61,weight:'10 pc',image:edibles3}),
  mockProduct({id:'edibles-selection-4',brand:'North & Meadow',name:'Cherry Night Chews',category:'Edibles',price:24,strength:'5mg THC + 5mg CBN',type:'Nighttime chews',rating:4.8,reviews:77,weight:'10 pc',image:edibles4}),

  mockProduct({id:'pre-roll-selection-1',brand:'Birchline',name:'Cedar Social',category:'Pre-Rolls',price:14,strength:'21% THC',type:'Hybrid pre-roll',rating:4.8,reviews:48,weight:'1g',image:categoryPreRolls}),
  mockProduct({id:'pre-roll-selection-2',brand:'Aster House',name:'Daybreak',category:'Pre-Rolls',price:13,strength:'20% THC',type:'Sativa pre-roll',rating:4.7,reviews:39,weight:'1g',image:preRolls2}),
  mockProduct({id:'pre-roll-selection-3',brand:'Field & Form',name:'Moon Garden',category:'Pre-Rolls',price:15,strength:'24% THC',type:'Indica pre-roll',rating:4.9,reviews:57,weight:'1g',image:preRolls3}),
  mockProduct({id:'pre-roll-selection-4',brand:'Juniper Works',name:'Golden Hour',category:'Pre-Rolls',price:14,strength:'22% THC',type:'Hybrid pre-roll',rating:4.8,reviews:44,weight:'1g',image:preRolls4}),

  mockProduct({id:'concentrate-selection-1',brand:'Field & Form',name:'Sunset Rosin',category:'Concentrates',price:52,strength:'72% THC',type:'Live rosin',rating:4.9,reviews:66,weight:'1g',image:categoryConcentrates}),
  mockProduct({id:'concentrate-selection-2',brand:'Aster House',name:'Citrus Resin',category:'Concentrates',price:46,strength:'76% THC',type:'Live resin',rating:4.8,reviews:53,weight:'1g',image:concentrate2}),
  mockProduct({id:'concentrate-selection-3',brand:'Birchline',name:'Pine Frost',category:'Concentrates',price:48,strength:'74% THC',type:'Badder',rating:4.7,reviews:41,weight:'1g',image:concentrate3}),
  mockProduct({id:'concentrate-selection-4',brand:'Juniper Works',name:'Amber Melt',category:'Concentrates',price:54,strength:'79% THC',type:'Solventless rosin',rating:4.9,reviews:59,weight:'1g',image:concentrate4}),

  mockProduct({id:'topical-selection-1',brand:'Stillwater Apothecary',name:'Botanical Relief Balm',category:'Topicals',price:32,strength:'100mg CBD + 50mg THC',type:'Topical balm',rating:4.8,reviews:46,weight:'2 oz',image:categoryTopicals}),
  mockProduct({id:'topical-selection-2',brand:'Stillwater Apothecary',name:'Cooling Body Cream',category:'Topicals',price:36,strength:'200mg CBD + 50mg THC',type:'Topical cream',rating:4.7,reviews:38,weight:'2 oz',image:topicals2}),

  mockProduct({id:'tincture-selection-1',brand:'North & Meadow',name:'Daily Balance Drops',category:'Tinctures',price:34,strength:'100mg THC + 100mg CBD',type:'Balanced tincture',rating:4.8,reviews:52,weight:'30 mL',image:categoryTinctures}),
  mockProduct({id:'tincture-selection-2',brand:'North & Meadow',name:'Evening Calm Drops',category:'Tinctures',price:38,strength:'100mg THC + 200mg CBD',type:'CBD-forward tincture',rating:4.9,reviews:63,weight:'30 mL',image:tinctures2}),
  mockProduct({id:'tincture-selection-3',brand:'Stillwater Apothecary',name:'Bright Day Drops',category:'Tinctures',price:36,strength:'150mg THC',type:'THC tincture',rating:4.7,reviews:45,weight:'30 mL',image:tinctures3}),

  {id:'blueberry-yum-yum',brand:'Lagom Naturals',name:'Blueberry Yum Yum',category:'Edibles',price:24.99,strength:'5mg THC + 20mg CBD',type:'Indica gummies',rating:4.9,reviews:151,weight:'10 pc',image:blueberryYumYum},
  {id:'push-pop',brand:'Lagom Naturals',name:'Push Pop',category:'Edibles',price:24.99,strength:'5mg THC',type:'Hybrid gummies',rating:4.8,reviews:91,weight:'10 pc',image:pushPop},
  {id:'space-cadet',brand:'Moonlight Cannabis',name:'Space Cadet',category:'Edibles',price:26,strength:'5mg THC',type:'Live resin gummies',rating:4.8,reviews:64,weight:'10 pc',image:spaceCadet,mockPrice:true},
  {id:'strawberry-banana',brand:'Lagom Curated',name:'Strawberry Banana',category:'Edibles',price:22,strength:'5mg THC',type:'Hybrid gummies',rating:4.7,reviews:64,weight:'10 pc',image:strawberryBanana,mock:true},
]

export const merch=[
  {id:'mainstreet-hoodie',name:'Mainstreet Hooded Sweatshirt',price:68,type:'Hoodies',color:'Black',image:mainstreetHoodie},
  {id:'midweight-crewneck',name:'Midweight Crewneck Sweatshirt',price:58,type:'Crewnecks',color:'Sand',image:midweightCrewneck},
]

export const categoryCards=[
  ['Flower','Flower'],
  ['Vapes','Vapes'],
  ['Edibles','Edibles'],
  ['Pre-Rolls','Pre-Rolls'],
  ['Concentrates','Concentrates'],
  ['Beverages','Beverages'],
  ['Topicals','Topicals'],
  ['Tinctures','Tinctures'],
]

export const categoryImages={
  Flower:categoryFlower,
  Vapes:categoryVapes,
  Edibles:categoryEdibles,
  'Pre-Rolls':categoryPreRolls,
  Concentrates:categoryConcentrates,
  Beverages:lemonade24k,
  Topicals:categoryTopicals,
  Tinctures:categoryTinctures,
}
