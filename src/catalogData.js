import lemonade from '@/assets/products/24K-Lemonade-1.png'
import blackberry from '@/assets/products/Blackberry-Breeze-Photoroom-1-900x900.png'
import strawberryLime from '@/assets/products/Strawberry-Lime-Fusion-Photoroom-900x900.png'
import watermelon from '@/assets/products/Watermelon-Refresher-Photoroom-900x900.png'
import hoodie from '@/assets/merch/Lagom-Mainstreet-Hooded-Sweatshirt-900x900.png'
import crewneck from '@/assets/merch/Lagom-Midweight-Crewneck-Sweatshirt-Front-900x900.png'

// Facts below are limited to text visible on approved package photography.
export const products=[
  {id:'24k-lemonade',brand:'Lagom Naturals',name:'24K Lemonade',flavor:'Lemonade',flavorFamily:'Citrus',category:'Seltzers',type:'THC infused seltzer',thcMgPerCan:10,canVolume:'12 fl oz (355 mL)',sugar:'Zero sugar',carbs:'Zero carbs',image:lemonade,accent:'#e3a900'},
  {id:'blackberry-breeze',brand:'Lagom Naturals',name:'Blackberry Breeze',flavor:'Blackberry',flavorFamily:'Berry',category:'Seltzers',type:'THC infused seltzer',thcMgPerCan:10,canVolume:'12 fl oz (355 mL)',sugar:'Zero sugar',carbs:'Zero carbs',image:blackberry,accent:'#4b276f'},
  {id:'strawberry-lime-fusion',brand:'Lagom Naturals',name:'Strawberry Lime Fusion',flavor:'Strawberry + lime',flavorFamily:'Fruit + citrus',category:'Seltzers',type:'THC infused seltzer',thcMgPerCan:10,canVolume:'12 fl oz (355 mL)',sugar:'Zero sugar',carbs:'Zero carbs',image:strawberryLime,accent:'#e95a9d'},
  {id:'watermelon-refresher',brand:'Lagom Naturals',name:'Watermelon Refresher',flavor:'Watermelon',flavorFamily:'Melon',category:'Seltzers',type:'THC infused seltzer',thcMgPerCan:10,canVolume:'12 fl oz (355 mL)',sugar:'Zero sugar',carbs:'Zero carbs',image:watermelon,accent:'#e6382f'},
]

export const merch=[
  {id:'mainstreet-hoodie',name:'Mainstreet Hooded Sweatshirt',price:68,type:'Hoodies',color:'Black',image:hoodie},
  {id:'midweight-crewneck',name:'Midweight Crewneck Sweatshirt',price:58,type:'Crewnecks',color:'Sand',image:crewneck},
]

export const categoryCards=[['All','All drinks'],['Citrus','Citrus'],['Berry','Berry'],['Fruit + citrus','Fruit + citrus'],['Melon','Melon']]
export const categoryImages={All:lemonade,Citrus:lemonade,Berry:blackberry,'Fruit + citrus':strawberryLime,Melon:watermelon}
