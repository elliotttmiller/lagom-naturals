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

const previewProduct=(id,name,category,type,image)=>({
  id,
  brand:'Catalog Preview',
  name,
  category,
  price:null,
  strength:'Details coming soon',
  type,
  rating:null,
  reviews:null,
  weight:'Preview',
  image,
  preview:true,
})

export const products=[
  {id:'24k-lemonade',brand:'Lagom Naturals',name:'24K Lemonade',category:'Beverages',price:6,strength:'THC infused',type:'Seltzer',rating:4.9,reviews:124,weight:'12 oz',image:lemonade24k},
  {id:'blackberry-breeze',brand:'Lagom Naturals',name:'Blackberry Breeze',category:'Beverages',price:6,strength:'THC infused',type:'Seltzer',rating:4.8,reviews:98,weight:'12 oz',image:blackberryBreeze},
  {id:'strawberry-lime-fusion',brand:'Lagom Naturals',name:'Strawberry Lime Fusion',category:'Beverages',price:6,strength:'THC infused',type:'Seltzer',rating:4.8,reviews:83,weight:'12 oz',image:strawberryLime},
  {id:'watermelon-refresher',brand:'Lagom Naturals',name:'Watermelon Refresher',category:'Beverages',price:6,strength:'THC infused',type:'Seltzer',rating:4.7,reviews:76,weight:'12 oz',image:watermelonRefresher},

  previewProduct('flower-selection-1','Flower Selection 01','Flower','Flower',categoryFlower),
  previewProduct('flower-selection-2','Flower Selection 02','Flower','Flower',flower2),
  previewProduct('flower-selection-3','Flower Selection 03','Flower','Flower',flower3),
  previewProduct('flower-selection-4','Flower Selection 04','Flower','Flower',flower4),

  previewProduct('vape-selection-1','Vape Selection 01','Vapes','Vape',categoryVapes),
  previewProduct('vape-selection-2','Vape Selection 02','Vapes','Vape',vapes2),
  previewProduct('vape-selection-3','Vape Selection 03','Vapes','Vape',vapes3),
  previewProduct('vape-selection-4','Vape Selection 04','Vapes','Vape',vapes4),

  previewProduct('edibles-selection-1','Edibles Selection 01','Edibles','Edible',categoryEdibles),
  previewProduct('edibles-selection-2','Edibles Selection 02','Edibles','Edible',edibles2),
  previewProduct('edibles-selection-3','Edibles Selection 03','Edibles','Edible',edibles3),
  previewProduct('edibles-selection-4','Edibles Selection 04','Edibles','Edible',edibles4),

  previewProduct('pre-roll-selection-1','Pre-Roll Selection 01','Pre-Rolls','Pre-Roll',categoryPreRolls),
  previewProduct('pre-roll-selection-2','Pre-Roll Selection 02','Pre-Rolls','Pre-Roll',preRolls2),
  previewProduct('pre-roll-selection-3','Pre-Roll Selection 03','Pre-Rolls','Pre-Roll',preRolls3),
  previewProduct('pre-roll-selection-4','Pre-Roll Selection 04','Pre-Rolls','Pre-Roll',preRolls4),

  previewProduct('concentrate-selection-1','Concentrate Selection 01','Concentrates','Concentrate',categoryConcentrates),
  previewProduct('concentrate-selection-2','Concentrate Selection 02','Concentrates','Concentrate',concentrate2),
  previewProduct('concentrate-selection-3','Concentrate Selection 03','Concentrates','Concentrate',concentrate3),
  previewProduct('concentrate-selection-4','Concentrate Selection 04','Concentrates','Concentrate',concentrate4),

  previewProduct('topical-selection-1','Topical Selection 01','Topicals','Topical',categoryTopicals),
  previewProduct('topical-selection-2','Topical Selection 02','Topicals','Topical',topicals2),

  previewProduct('tincture-selection-1','Tincture Selection 01','Tinctures','Tincture',categoryTinctures),
  previewProduct('tincture-selection-2','Tincture Selection 02','Tinctures','Tincture',tinctures2),
  previewProduct('tincture-selection-3','Tincture Selection 03','Tinctures','Tincture',tinctures3),

  {id:'blueberry-yum-yum',brand:'Lagom Naturals',name:'Blueberry Yum Yum',category:'Edibles',price:24.99,strength:'5mg THC + 20mg CBD',type:'Indica gummies',rating:4.9,reviews:151,weight:'10 pc',image:blueberryYumYum},
  {id:'push-pop',brand:'Lagom Naturals',name:'Push Pop',category:'Edibles',price:24.99,strength:'5mg THC',type:'Hybrid gummies',rating:4.8,reviews:91,weight:'10 pc',image:pushPop},
  {id:'space-cadet',brand:'Moonlight Cannabis',name:'Space Cadet',category:'Edibles',price:null,strength:'5mg THC',type:'Live resin',rating:4.8,reviews:64,weight:'See package',image:spaceCadet},
  {id:'strawberry-banana',brand:'In-store selection',name:'Strawberry Banana',category:'Edibles',price:null,strength:'See package',type:'Cannabis edible',rating:4.7,reviews:64,weight:'See package',image:strawberryBanana},
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
