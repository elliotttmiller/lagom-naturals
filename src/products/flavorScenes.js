import {responsiveImages} from "@/generated/responsiveImages";

const desktop=responsiveImages.seltzerDesktopShowcaseArtwork;
const mobile=responsiveImages.showcaseMobile;

export const FLAVOR_SCENES={
  "24k-lemonade":{
    id:"24k-lemonade",
    title:"24K Lemonade",
    theme:{primary:"#d99a00",secondary:"#f4cf69",soft:"#f7efd8",ink:"#1a1710"},
    media:{desktop:desktop["24k-lemonade-desktop"],mobile:mobile["flavor-24k-lemonade-mobile"]},
    layers:[],
  },
  "blackberry-breeze":{
    id:"blackberry-breeze",
    title:"Blackberry Breeze",
    theme:{primary:"#73368c",secondary:"#aa79c0",soft:"#efe4f4",ink:"#171018"},
    media:{desktop:desktop["blackberry-breeze-desktop"],mobile:mobile["flavor-blackberry-breeze-mobile"]},
    layers:[],
  },
  "strawberry-lime-fusion":{
    id:"strawberry-lime-fusion",
    title:"Strawberry Lime Fusion",
    theme:{primary:"#e73577",secondary:"#eb8e93",soft:"#f8e4e7",ink:"#1a1013"},
    media:{desktop:desktop["strawberry-lime-fusion-desktop"],mobile:mobile["flavor-strawberry-lime-fusion-mobile"]},
    layers:[],
  },
  "watermelon-refresher":{
    id:"watermelon-refresher",
    title:"Watermelon Refresher",
    theme:{primary:"#e7463f",secondary:"#ef8c82",soft:"#f8e4df",ink:"#1a1110"},
    media:{desktop:desktop["watermelon-refresher-desktop"],mobile:mobile["flavor-watermelon-refresher-mobile"]},
    layers:[],
  },
};

export const getFlavorScene=id=>FLAVOR_SCENES[id]||null;
