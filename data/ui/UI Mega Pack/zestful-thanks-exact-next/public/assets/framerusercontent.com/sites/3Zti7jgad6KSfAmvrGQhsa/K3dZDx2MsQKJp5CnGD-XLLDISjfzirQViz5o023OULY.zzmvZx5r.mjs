import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";import{B as t,D as n,E as r,H as i,L as a,N as o,P as s,b as c,c as l,j as ee,m as u,s as d,u as f,x as te}from"./react.O6kzN0Nt.mjs";import{N as p,i as m,o as h,ot as g,t as _}from"./motion.M-ODbcsU.mjs";import{C as v,D as y,F as b,H as x,L as S,X as C,at as w,d as ne,gt as T,ht as re,i as E,it as D,k as O,l as k,lt as ie,m as A,n as j,nt as ae,ot as M,r as N,st as oe,tt as se,ut as ce,v as le,w as ue,x as de,y as P}from"./framer.Dl1fmxPM.mjs";import F,{t as fe}from"./JSAdyeEriHqYcGIjKOjsZ9wLd_9UhDYr6jMVDvWuddw.DOyRio7D.mjs";function I(e){return typeof e==`number`&&Number.isFinite(e)?e:void 0}function L(e,t,n){return Math.min(n,Math.max(t,e))}function R(e){if(!Array.isArray(e)||e.length!==4)return!1;let[t,n,r,i]=e;return[t,n,r,i].every(e=>typeof e==`number`&&Number.isFinite(e))?t>=0&&t<=1&&r>=0&&r<=1:!1}function pe(e){return e===`linear`||e===`easeIn`||e===`easeOut`||e===`easeInOut`||e===`circIn`||e===`circOut`||e===`circInOut`||e===`backIn`||e===`backOut`||e===`backInOut`||e===`anticipate`}function me(e,t){let n=e&&typeof e==`object`?e:{},r=n.type===`spring`?`spring`:`tween`,i=Math.max(0,I(n.duration)??t.duration),a=Math.max(0,I(n.delay)??t.delay),o=R(n.ease)||pe(n.ease)?n.ease:t.ease,s={type:r,duration:Math.max(0,i),delay:Math.max(0,a)};if(r===`tween`)s.ease=o;else{let e=I(n.stiffness),t=I(n.damping),r=I(n.mass),i=I(n.bounce),a=I(n.restSpeed),o=I(n.restDelta),c=I(n.velocity);e!==void 0&&(s.stiffness=L(e,1,2e3)),t!==void 0&&(s.damping=L(t,.01,500)),r!==void 0&&(s.mass=L(r,.01,100)),i!==void 0&&(s.bounce=L(i,0,1)),a!==void 0&&(s.restSpeed=L(a,.01,200)),o!==void 0&&(s.restDelta=L(o,1e-5,1)),c!==void 0&&(s.velocity=c)}return s}function z(e){return Array.isArray(e)?`[${e.map(z).join(`,`)}]`:!e||typeof e!=`object`?JSON.stringify(e):`{${Object.keys(e).sort().map(t=>`${JSON.stringify(t)}:${z(e[t])}`).join(`,`)}}`}function he(e){let{style:t,setupCode:n=``,open:a=!1,layout:o=`desktop`,panelWidth:s=440,mobilePanelPercent:l=84,cornerRadius:u=0,openTransition:f,closeTransition:p,openDuration:m=.7,closeDuration:h=.7,onClose:_}=e,v=r().replace(/:/g,``),y=g(),b=oe(),x=le.current()===le.canvas,S=b||x,C=te(()=>{}),w=me(f,{type:`tween`,duration:m,delay:0,ease:[.32,.72,0,1]}),ne=me(p,{type:`tween`,duration:h,delay:0,ease:[.82,-.01,.88,.77]}),T=ee(()=>{if(i===void 0)return;let e=Math.max(0,i.innerWidth||0),t=o===`phone`?Math.max(0,e*Math.max(0,l)/100):Math.max(0,Math.min(s,e)),n={ownerId:v,open:a,width:t,radius:Math.max(0,u),openDuration:Math.max(0,I(w.duration)??m),closeDuration:Math.max(0,I(ne.duration)??h),openTransition:w,closeTransition:ne,reducedMotion:!!y,reset:!1};i.dispatchEvent(new CustomEvent(ge,{detail:n}))},[h,u,o,l,a,m,v,s,y,`${z(w)}|${z(ne)}`]);return c(()=>{if(S||!a||i===void 0)return;let e=()=>{C.current()};return i.addEventListener(`resize`,e),()=>i.removeEventListener(`resize`,e)},[S,a]),c(()=>{C.current=T},[T]),c(()=>{if(S||i===void 0)return;let e=i.location?.hostname??``,t=e===`framercanvas.com`||e.endsWith(`.framercanvas.com`),n=e=>{e.detail&&C.current()},r=()=>{i.removeEventListener(B,n)};return i.addEventListener(B,n),t&&i.addEventListener(`unload`,r),()=>{i.removeEventListener(B,n),t&&i.removeEventListener(`unload`,r)}},[S]),c(()=>{S||T()},[S,T]),c(()=>{if(S||!a||i===void 0)return;let e=e=>{e.key===`Escape`&&_?.()};return i.addEventListener(`keydown`,e),()=>i.removeEventListener(`keydown`,e)},[S,_,a]),c(()=>()=>{if(S||i===void 0)return;let e={ownerId:v,open:!1,width:0,radius:0,openDuration:0,closeDuration:0,reducedMotion:!0,reset:!0};i.dispatchEvent(new CustomEvent(ge,{detail:e}))},[S,v]),d(`div`,{"data-push-menu-controller":v,"aria-hidden":`true`,style:{position:`relative`,width:`100%`,height:`100%`,minWidth:1,minHeight:1,pointerEvents:`none`,...t}})}var ge,B,_e=e((()=>{t(),l(),x(),_(),n(),ge=`spm:state`,B=`spm:request`,he.displayName=`PushMenuController`,ue(he,{setupCode:{type:E.String,title:`Override Code`,defaultValue:``,hidden:()=>!0},open:{type:E.Boolean,title:`Open`,defaultValue:!1,enabledTitle:`Open`,disabledTitle:`Closed`},layout:{type:E.Enum,title:`Layout`,options:[`desktop`,`phone`],optionTitles:[`Desktop`,`Phone`],defaultValue:`desktop`,displaySegmentedControl:!0},panelWidth:{type:E.Number,title:`Panel Width`,defaultValue:440,min:240,max:760,step:1,unit:`px`,hidden:e=>e.layout!==`desktop`},mobilePanelPercent:{type:E.Number,title:`Mobile %`,defaultValue:84,min:40,max:100,step:1,unit:`%`,hidden:e=>e.layout!==`phone`},cornerRadius:{type:E.Number,title:`Radius`,defaultValue:0,min:0,max:80,step:1,unit:`px`},openTransition:{type:E.Transition,title:`Open Transition`,defaultValue:{type:`tween`,duration:.7,delay:0,ease:[.32,.72,0,1]},description:`Affects MAIN PAGE PUSH and is bound by the shipped native parent to its Open Transition property. Native Closed/Open variant transitions stay canvas-driven, and individual link stagger timings are edited on canvas.`},closeTransition:{type:E.Transition,title:`Close Transition`,defaultValue:{type:`tween`,duration:.7,delay:0,ease:[.82,-.01,.88,.77]},description:`Affects MAIN PAGE PUSH and is bound by the shipped native parent to its Close Transition property. Native Closed/Open variant transitions stay canvas-driven, and individual link stagger timings are edited on canvas.`},openDuration:{type:E.Number,title:`Open Time`,defaultValue:.7,min:0,max:2,step:.01,unit:`s`,hidden:()=>!0},closeDuration:{type:E.Number,title:`Close Time`,defaultValue:.7,min:0,max:2,step:.01,unit:`s`,hidden:()=>!0},onClose:{type:E.EventHandler,title:`On Close`,description:`Explore [more components](https://dub.sh/daniyal-framer)
Made by [Daniyal](https://dub.sh/daniyal-threads)`}})}));function ve(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var ye,V,be,H,U,W,G,xe,Se,Ce,we,K,Te=e((()=>{l(),x(),_(),n(),ye={iNF49imL4:{hover:!0,pressed:!0},k2o0AQZJb:{hover:!0,pressed:!0}},V=[`iNF49imL4`,`k2o0AQZJb`],be=`framer-NfyMF`,H={iNF49imL4:`framer-v-1o09uty`,k2o0AQZJb:`framer-v-poba54`},U={delay:0,duration:.26,ease:[.25,.1,.25,1],type:`tween`},W={delay:0,duration:.12,ease:[.25,.1,.25,1],type:`tween`},G=({value:e,children:t})=>{let n=o(h),r=e??n.transition,i=s(()=>({...n,transition:r}),[JSON.stringify(r)]);return d(h.Provider,{value:i,children:t})},xe={Default:`iNF49imL4`,Phone:`k2o0AQZJb`},Se=p.create(a),Ce=({height:e,hoverFill:t,id:n,label:r,width:i,...a})=>({...a,UF7cGXuUR:r??a.UF7cGXuUR??`Home`,variant:xe[a.variant]??a.variant??`iNF49imL4`,ZL6r4URMl:t??a.ZL6r4URMl??`rgb(238, 239, 120)`}),we=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),K=T(u(function(e,t){let n=te(null),i=t??n,o=r(),{activeLocale:s,setLocale:c}=ie();ae();let{style:l,className:ee,layoutId:u,variant:h,UF7cGXuUR:g,ZL6r4URMl:_,...v}=Ce(e),{baseVariant:b,classNames:x,clearLoadingGesture:S,gestureHandlers:C,gestureVariant:w,isLoading:ne,setGestureState:T,setVariant:E,variants:D}=re({cycleOrder:V,defaultVariant:`iNF49imL4`,enabledGestures:ye,ref:i,variant:h,variantClassNames:H}),O=we(e,D),k=y(be);return d(m,{id:u??o,children:d(Se,{animate:D,initial:!1,children:d(G,{value:U,children:f(p.div,{...v,...C,className:y(k,`framer-1o09uty`,ee,x),"data-framer-name":`Default`,layoutDependency:O,layoutId:`iNF49imL4`,ref:i,style:{backgroundColor:`rgba(0, 0, 0, 0)`,...l},...ve({"iNF49imL4-hover":{"data-framer-name":`Hover`},"iNF49imL4-pressed":{"data-framer-name":`Pressed`},k2o0AQZJb:{"data-framer-name":`Phone`}},b,w),children:[d(P,{__fromCanvasComponent:!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`52px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.045em`,"--framer-line-height":`1.12em`,"--framer-text-color":`var(--extracted-r6o4lv, rgb(16, 60, 47))`},children:`Home`})}),className:`framer-1gqwodh`,"data-framer-name":`Label`,fonts:[`Inter-Medium`],layoutDependency:O,layoutId:`IKjP7G7FQ`,style:{"--extracted-r6o4lv":`rgb(16, 60, 47)`},text:g,verticalAlignment:`top`,withExternalLayout:!0,...ve({k2o0AQZJb:{children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`44px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.045em`,"--framer-line-height":`1.12em`,"--framer-text-color":`var(--extracted-r6o4lv, rgb(16, 60, 47))`},children:`Home`})})}},b,w)}),d(G,{value:U,...ve({"iNF49imL4-pressed":{value:W},"k2o0AQZJb-pressed":{value:W}},b,w),children:d(p.div,{className:`framer-alxvg1`,"data-framer-name":`Hover highlight — Fade`,layoutDependency:O,layoutId:`B8IrIqHFy`,style:{backgroundColor:_,opacity:0},variants:{"iNF49imL4-hover":{opacity:1},"iNF49imL4-pressed":{opacity:.8},"k2o0AQZJb-hover":{opacity:1},"k2o0AQZJb-pressed":{opacity:.8}}})})]})})})})}),[`.framer-NfyMF.framer-wcm2fk, .framer-NfyMF .framer-wcm2fk { display: block; }`,`.framer-NfyMF.framer-1o09uty { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 76px; justify-content: flex-start; padding: 8px 32px 8px 32px; position: relative; width: 440px; }`,`.framer-NfyMF .framer-1gqwodh { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,`.framer-NfyMF .framer-alxvg1 { bottom: 0px; flex: none; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; z-index: 0; }`,`.framer-NfyMF.framer-v-poba54.framer-1o09uty { padding: 8px 24px 8px 24px; width: 328px; }`],`framer-NfyMF`),K.displayName=`Push Menu — Link`,K.defaultProps={height:76,width:440},ue(K,{variant:{options:[`iNF49imL4`,`k2o0AQZJb`],optionTitles:[`Default`,`Phone`],title:`Variant`,type:E.Enum},UF7cGXuUR:{defaultValue:`Home`,title:`Label`,type:E.String},onUF7cGXuURChange:{changes:`UF7cGXuUR`,type:E.ChangeHandler},ZL6r4URMl:{defaultValue:`rgb(238, 239, 120)`,title:`Hover Fill`,type:E.Color}}),v(K,[{explicitInter:!0,fonts:[{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,weight:`500`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,weight:`500`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,weight:`500`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,weight:`500`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,weight:`500`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,weight:`500`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2`,weight:`500`}]}],{supportsExplicitInterCodegen:!0})}));function q(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var Ee,De,Oe,ke,Ae,J,je,Me,Ne,Y,Pe,Fe,X,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,Z,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,Q,ut=e((()=>{l(),x(),_(),n(),_e(),Te(),Ee=b(K),De=b(he),Oe=[`pacHJjAuP`,`tq0rchyuZ`,`I8cBi4te1`,`xT8hy8uQv`,`Ry7KWPvyQ`,`wbD_oSudy`,`TNMcwaCL_`,`ydHkuWIoC`],ke=`framer-ycXWB`,Ae={I8cBi4te1:`framer-v-rhxwdy`,pacHJjAuP:`framer-v-3v0pi5`,Ry7KWPvyQ:`framer-v-12txv0v`,TNMcwaCL_:`framer-v-4ahbyt`,tq0rchyuZ:`framer-v-gtlf1h`,wbD_oSudy:`framer-v-n93pnn`,xT8hy8uQv:`framer-v-f2cczp`,ydHkuWIoC:`framer-v-1i72hfs`},J={delay:0,duration:.7,ease:[.32,.72,0,1],type:`tween`},je=(e,t)=>{switch(e){case`onom_gs0Q`:return`#F4F3CE`;case`snjxaIzGr`:return`#103C2F`;default:return`#103C2F`}},Me=e=>typeof e==`string`?e:String(e),Ne={delay:0,duration:.35,ease:[.46,.03,.52,.95],type:`tween`},Y=({value:e,children:t})=>{let n=o(h),r=e??n.transition,i=s(()=>({...n,transition:r}),[JSON.stringify(r)]);return d(h.Provider,{value:i,children:t})},Pe=(e,t)=>{if(typeof e==`number`&&Number.isFinite(e))return Math.max(0,e)+`px`;if(typeof e!=`string`||typeof t!=`number`)return;let n=e.split(` `);return n[t]||n[t-2]||n[0]},Fe={delay:.168,duration:.35,ease:[.82,0,.88,.77],type:`tween`},X=(...e)=>{for(let t of e)if(t&&typeof t==`string`)return t},Ie={delay:.112,duration:.35,ease:[.82,0,.88,.77],type:`tween`},Le={delay:.05,duration:.7,ease:[.32,.72,0,1],type:`tween`},Re={delay:.056,duration:.35,ease:[.82,0,.88,.77],type:`tween`},ze={delay:.1,duration:.7,ease:[.32,.72,0,1],type:`tween`},Be={delay:0,duration:.35,ease:[.82,0,.88,.77],type:`tween`},Ve={delay:.15,duration:.7,ease:[.32,.72,0,1],type:`tween`},He={delay:.2,duration:.5,ease:[.22,1,.36,1],type:`tween`},Ue={delay:0,duration:.18,ease:[.4,0,1,1],type:`tween`},We={delay:.21,duration:.28,ease:[.82,0,.88,.77],type:`tween`},Ge={delay:.3,duration:.5,ease:[.22,1,.36,1],type:`tween`},Ke={delay:.175,duration:.28,ease:[.82,0,.88,.77],type:`tween`},qe={delay:.33,duration:.5,ease:[.22,1,.36,1],type:`tween`},Je={delay:.14,duration:.28,ease:[.82,0,.88,.77],type:`tween`},Ye={delay:.36,duration:.5,ease:[.22,1,.36,1],type:`tween`},Xe={delay:.105,duration:.28,ease:[.82,0,.88,.77],type:`tween`},Ze={delay:.39,duration:.5,ease:[.22,1,.36,1],type:`tween`},Qe={delay:.07,duration:.28,ease:[.82,0,.88,.77],type:`tween`},Z={delay:.42,duration:.5,ease:[.22,1,.36,1],type:`tween`},$e={delay:.035,duration:.28,ease:[.82,0,.88,.77],type:`tween`},et={delay:.45,duration:.5,ease:[.22,1,.36,1],type:`tween`},tt={delay:0,duration:.28,ease:[.82,0,.88,.77],type:`tween`},nt={delay:.48,duration:.5,ease:[.22,1,.36,1],type:`tween`},rt=(e,t)=>{switch(e){case`onom_gs0Q`:return`#103C2F`;case`snjxaIzGr`:return`#FFFFFF`;default:return`#FFFFFF`}},it={delay:.1,duration:.25,ease:[.4,0,1,1],type:`tween`},at={"Desktop Closed":`pacHJjAuP`,"Desktop Open":`I8cBi4te1`,"Desktop Solid Open":`TNMcwaCL_`,"Desktop Solid":`Ry7KWPvyQ`,"Phone Closed":`tq0rchyuZ`,"Phone Open":`xT8hy8uQv`,"Phone Solid Open":`ydHkuWIoC`,"Phone Solid":`wbD_oSudy`},ot=p.create(a),st={dark:`snjxaIzGr`,light:`onom_gs0Q`},ct=({closeTransition:e,contactLink:t,cornerRadius:n,emailLink:r,headerTheme:i,height:a,homeLink:o,hoverFill:s,id:c,instagramLink:l,linkedInLink:ee,openTransition:u,overrideCode:d,pageDim:f,phoneLink:te,studioLink:p,twitterLink:m,width:h,workLink:g,..._})=>({..._,Au4NRzSO1:n??_.Au4NRzSO1??0,axnAWdIZu:u??_.axnAWdIZu??{delay:0,duration:.7,ease:[.32,.72,0,1],type:`tween`},ccCtHUoTt:g??_.ccCtHUoTt,e0NBq8DJx:f??_.e0NBq8DJx??`rgba(0, 0, 0, 0.3)`,EGkYzYKqt:m??_.EGkYzYKqt,fs8tCF0ox:ee??_.fs8tCF0ox,HsJUYW36o:s??_.HsJUYW36o??`rgb(238, 239, 120)`,KkRri24Ud:d??_.KkRri24Ud??`// Installation:
// 1) Group all page sections in one native stack named "Page Content".
// 2) Keep the native nav outside that stack.
// 3) Apply PushContent → withShiftContent to the Page Content stack once.
// 4) Preview.
import { RenderTarget, useIsStaticRenderer } from "framer"
import { animate, useReducedMotion } from "framer-motion"
import {
    ComponentType,
    forwardRef,
    startTransition,
    useCallback,
    useEffect,
    useId,
    useRef,
    useState,
} from "react"

type ShiftEventDetail = {
    ownerId: string
    open: boolean
    width: number
    radius: number
    openDuration: number
    closeDuration: number
    openTransition?: TransitionPayload
    closeTransition?: TransitionPayload
    reducedMotion: boolean
    reset: boolean
}

type TransitionType = "tween" | "spring"
type EaseName =
    | "linear"
    | "easeIn"
    | "easeOut"
    | "easeInOut"
    | "circIn"
    | "circOut"
    | "circInOut"
    | "backIn"
    | "backOut"
    | "backInOut"
    | "anticipate"

type TransitionPayload = {
    type?: TransitionType
    duration?: number
    delay?: number
    ease?: EaseName | [number, number, number, number]
    stiffness?: number
    damping?: number
    mass?: number
    bounce?: number
    restSpeed?: number
    restDelta?: number
    velocity?: number
}

type ShiftRequestDetail = {
    targetId: string
}

const SHIFT_STATE_EVENT = "spm:state"
const SHIFT_REQUEST_EVENT = "spm:request"

function toFinite(value: any): number | undefined {
    return typeof value === "number" && Number.isFinite(value) ? value : undefined
}

function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value))
}

function isValidEaseArray(value: any): value is [number, number, number, number] {
    if (!Array.isArray(value) || value.length !== 4) return false
    const [x1, y1, x2, y2] = value
    if (![x1, y1, x2, y2].every((v) => typeof v === "number" && Number.isFinite(v))) return false
    return x1 >= 0 && x1 <= 1 && x2 >= 0 && x2 <= 1
}

function isValidEaseName(value: any): value is EaseName {
    return (
        value === "linear" ||
        value === "easeIn" ||
        value === "easeOut" ||
        value === "easeInOut" ||
        value === "circIn" ||
        value === "circOut" ||
        value === "circInOut" ||
        value === "backIn" ||
        value === "backOut" ||
        value === "backInOut" ||
        value === "anticipate"
    )
}

function sanitizeTransition(
    transition: TransitionPayload | undefined,
    fallback: { type: "tween"; duration: number; delay: number; ease: [number, number, number, number] }
) {
    const source = transition && typeof transition === "object" ? transition : {}
    const type = source.type === "spring" ? "spring" : "tween"
    const duration = Math.max(0, toFinite(source.duration) ?? fallback.duration)
    const delay = Math.max(0, toFinite(source.delay) ?? fallback.delay)
    const ease = isValidEaseArray(source.ease)
        ? source.ease
        : isValidEaseName(source.ease)
          ? source.ease
          : fallback.ease
    const result: Record<string, any> = { type, duration, delay }
    if (type === "tween") {
        result.ease = ease
    } else {
        const stiffness = toFinite(source.stiffness)
        const damping = toFinite(source.damping)
        const mass = toFinite(source.mass)
        const bounce = toFinite(source.bounce)
        const restSpeed = toFinite(source.restSpeed)
        const restDelta = toFinite(source.restDelta)
        const velocity = toFinite(source.velocity)
        if (stiffness !== undefined) result.stiffness = clamp(stiffness, 1, 2000)
        if (damping !== undefined) result.damping = clamp(damping, 0.01, 500)
        if (mass !== undefined) result.mass = clamp(mass, 0.01, 100)
        if (bounce !== undefined) result.bounce = clamp(bounce, 0, 1)
        if (restSpeed !== undefined) result.restSpeed = clamp(restSpeed, 0.01, 200)
        if (restDelta !== undefined) result.restDelta = clamp(restDelta, 0.00001, 1)
        if (velocity !== undefined) result.velocity = velocity
    }
    return result
}

function stableStringify(value: any): string {
    if (Array.isArray(value)) return \`[\${value.map(stableStringify).join(",")}]\`
    if (!value || typeof value !== "object") return JSON.stringify(value)
    const keys = Object.keys(value).sort()
    return \`{\${keys.map((key) => \`\${JSON.stringify(key)}:\${stableStringify(value[key])}\`).join(",")}}\`
}

export function withShiftContent(Component: ComponentType): ComponentType {
    return forwardRef(function ShiftContentOverride(props: any, ref) {
            const localId = useId().replace(/:/g, "")
            const rootRef = useRef<HTMLElement | null>(null)
            const ownerRef = useRef<string>("")
            const [openState, setOpenState] = useState(false)
            const [activeState, setActiveState] = useState(false)
            const openRef = useRef(false)
            const activeRef = useRef(false)
            const xAnimRef = useRef<{ stop?: () => void } | null>(null)
            const radiusAnimRef = useRef<{ stop?: () => void } | null>(null)
            const currentXRef = useRef(0)
            const currentRadiusRef = useRef(0)
            const lastSignatureRef = useRef("")
            const generationRef = useRef(0)
            const isStaticRenderer = useIsStaticRenderer()
            const isCanvas = RenderTarget.current() === RenderTarget.canvas
            const isStatic = isStaticRenderer || isCanvas
            const reducedMotion = useReducedMotion()
            const prevVarRef = useRef("")
            const prevRadiusRef = useRef("")
            const prevVarPriorityRef = useRef("")
            const prevRadiusPriorityRef = useRef("")

            const mergedRef = useCallback(
                (node: any) => {
                    rootRef.current = node as HTMLElement | null
                    if (typeof ref === "function") ref(node)
                    else if (ref && typeof ref === "object") (ref as any).current = node
                },
                [ref]
            )

            useEffect(() => {
                if (isStatic) return
                const el = rootRef.current
                if (!el) return
                prevVarRef.current = el.style.getPropertyValue("--shift-push-x")
                prevRadiusRef.current = el.style.getPropertyValue("--shift-push-radius")
                prevVarPriorityRef.current = el.style.getPropertyPriority("--shift-push-x")
                prevRadiusPriorityRef.current = el.style.getPropertyPriority("--shift-push-radius")
                if (!el.style.getPropertyValue("--shift-push-x")) el.style.setProperty("--shift-push-x", "0px")
                if (!el.style.getPropertyValue("--shift-push-radius")) el.style.setProperty("--shift-push-radius", "0px")
                return () => {
                    xAnimRef.current?.stop?.()
                    radiusAnimRef.current?.stop?.()
                    if (prevVarRef.current) el.style.setProperty("--shift-push-x", prevVarRef.current, prevVarPriorityRef.current)
                    else el.style.removeProperty("--shift-push-x")
                    if (prevRadiusRef.current) {
                        el.style.setProperty("--shift-push-radius", prevRadiusRef.current, prevRadiusPriorityRef.current)
                    } else el.style.removeProperty("--shift-push-radius")
                }
            }, [isStatic])

            useEffect(() => {
                if (isStatic || typeof window === "undefined") return
                const host = window.location?.hostname ?? ""
                const isCanvasHost = host === "framercanvas.com" || host.endsWith(".framercanvas.com")

                const onState = (event: Event) => {
                    const detail = (event as CustomEvent<ShiftEventDetail>).detail
                    if (!detail) return
                    if (detail.reset) {
                        if (!ownerRef.current || ownerRef.current !== detail.ownerId) return
                        const target = rootRef.current
                        if (!target) return
                        xAnimRef.current?.stop?.()
                        radiusAnimRef.current?.stop?.()
                        generationRef.current += 1
                        target.style.setProperty("--shift-push-x", "0px")
                        target.style.setProperty("--shift-push-radius", "0px")
                        currentXRef.current = 0
                        currentRadiusRef.current = 0
                        lastSignatureRef.current = ""
                        ownerRef.current = ""
                        openRef.current = false
                        activeRef.current = false
                        startTransition(() => {
                            setOpenState(false)
                            setActiveState(false)
                        })
                        return
                    }
                    if (ownerRef.current && ownerRef.current !== detail.ownerId) return
                    if (!Number.isFinite(detail.width) || !Number.isFinite(detail.radius)) return
                    if (!Number.isFinite(detail.openDuration) || !Number.isFinite(detail.closeDuration)) return

                    const nextX = detail.open ? -Math.max(0, detail.width) : 0
                    const fallbackTransition = detail.open
                        ? { type: "tween" as const, duration: detail.openDuration, delay: 0, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }
                        : { type: "tween" as const, duration: detail.closeDuration, delay: 0, ease: [0.82, -0.01, 0.88, 0.77] as [number, number, number, number] }
                    const transitionConfig = sanitizeTransition(
                        detail.open ? detail.openTransition : detail.closeTransition,
                        fallbackTransition
                    )
                    const motionReduced = reducedMotion || detail.reducedMotion
                    const duration = motionReduced ? 0 : transitionConfig.duration
                    const target = rootRef.current
                    if (!target) return
                    if (!detail.open && !activeRef.current && nextX === 0) return
                    const nextRadius = detail.open ? Math.max(0, detail.radius) : 0
                    const signature = stableStringify({
                        open: detail.open,
                        x: nextX,
                        radius: nextRadius,
                        reduced: motionReduced,
                        transition: transitionConfig,
                    })
                    if (signature === lastSignatureRef.current) return
                    lastSignatureRef.current = signature

                    ownerRef.current = detail.ownerId
                    const nextActive = detail.open || activeRef.current
                    openRef.current = detail.open
                    activeRef.current = nextActive
                    startTransition(() => {
                        setOpenState(detail.open)
                        setActiveState(nextActive)
                    })

                    xAnimRef.current?.stop?.()
                    radiusAnimRef.current?.stop?.()
                    generationRef.current += 1
                    const gen = generationRef.current

                    if (motionReduced) {
                        currentXRef.current = nextX
                        currentRadiusRef.current = nextRadius
                        target.style.setProperty("--shift-push-x", \`\${nextX}px\`)
                        target.style.setProperty("--shift-push-radius", \`\${nextRadius}px\`)
                        openRef.current = detail.open
                        activeRef.current = detail.open
                        startTransition(() => {
                            setOpenState(detail.open)
                            setActiveState(detail.open)
                        })
                        return
                    }

                    const baseOptions: Record<string, any> =
                        transitionConfig.type === "spring"
                            ? {
                                  type: "spring",
                                  duration: transitionConfig.duration,
                                  delay: transitionConfig.delay,
                                  stiffness: transitionConfig.stiffness,
                                  damping: transitionConfig.damping,
                                  mass: transitionConfig.mass,
                                  bounce: transitionConfig.bounce,
                                  restSpeed: transitionConfig.restSpeed,
                                  restDelta: transitionConfig.restDelta,
                                  velocity: transitionConfig.velocity,
                              }
                            : {
                                  type: "tween",
                                  duration,
                                  delay: transitionConfig.delay,
                                  ease:
                                      transitionConfig.ease ??
                                      (detail.open ? ([0.32, 0.72, 0, 1] as [number, number, number, number]) : ([0.82, -0.01, 0.88, 0.77] as [number, number, number, number])),
                              }

                    radiusAnimRef.current = animate(currentRadiusRef.current, nextRadius, {
                        ...baseOptions,
                        onUpdate: (value) => {
                            currentRadiusRef.current = value
                            target.style.setProperty("--shift-push-radius", \`\${value}px\`)
                        },
                    })

                    xAnimRef.current = animate(currentXRef.current, nextX, {
                        ...baseOptions,
                        onUpdate: (value) => {
                            currentXRef.current = value
                            target.style.setProperty("--shift-push-x", \`\${value}px\`)
                        },
                        onComplete: () => {
                            if (gen !== generationRef.current) return
                            openRef.current = detail.open
                            activeRef.current = detail.open
                            startTransition(() => {
                                setOpenState(detail.open)
                                setActiveState(detail.open)
                            })
                        },
                    })
                }

                window.addEventListener(SHIFT_STATE_EVENT, onState as EventListener)
                const onUnload = () => {
                    window.removeEventListener(SHIFT_STATE_EVENT, onState as EventListener)
                    xAnimRef.current?.stop?.()
                    radiusAnimRef.current?.stop?.()
                    generationRef.current += 1
                    lastSignatureRef.current = ""
                }
                if (isCanvasHost) window.addEventListener("unload", onUnload)
                window.dispatchEvent(
                    new CustomEvent<ShiftRequestDetail>(SHIFT_REQUEST_EVENT, { detail: { targetId: localId } })
                )
                return () => {
                    window.removeEventListener(SHIFT_STATE_EVENT, onState as EventListener)
                    if (isCanvasHost) window.removeEventListener("unload", onUnload)
                    xAnimRef.current?.stop?.()
                    radiusAnimRef.current?.stop?.()
                    generationRef.current += 1
                    lastSignatureRef.current = ""
                }
            }, [isStatic, localId, reducedMotion])

            if (isStatic) return <Component {...props} ref={mergedRef} />

            return (
                <Component
                    {...props}
                    ref={mergedRef}
                    inert={props.inert}
                    aria-hidden={props["aria-hidden"]}
                    style={{
                        ...props.style,
                        ...(activeState
                            ? {
                                  translate: "var(--shift-push-x, 0px) 0px",
                                  borderRadius: "var(--shift-push-radius, 0px)",
                              }
                            : null),
                    }}
                />
            )
        }) as unknown as ComponentType
}
`,lZmYQ3Ub3:p??_.lZmYQ3Ub3,p_GZ0pSYg:te??_.p_GZ0pSYg,P0YdDc906:st[i]??i??_.P0YdDc906??`snjxaIzGr`,pZHWm1u71:r??_.pZHWm1u71,rcF4lpp9o:l??_.rcF4lpp9o,tKrYkJa5D:e??_.tKrYkJa5D??{delay:0,duration:.6,ease:[.46,.03,.52,.95],type:`tween`},variant:at[_.variant]??_.variant??`pacHJjAuP`,VwPP62wTS:o??_.VwPP62wTS,xWs6oo6du:t??_.xWs6oo6du}),lt=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Q=T(u(function(e,t){let n=te(null),i=t??n,o=r(),{activeLocale:s,setLocale:c}=ie(),l=ae(),{style:ee,className:u,layoutId:h,variant:g,P0YdDc906:_,Au4NRzSO1:v,KkRri24Ud:b,VwPP62wTS:x,ccCtHUoTt:C,lZmYQ3Ub3:w,xWs6oo6du:T,pZHWm1u71:E,rcF4lpp9o:D,fs8tCF0ox:O,EGkYzYKqt:k,p_GZ0pSYg:M,HsJUYW36o:N,axnAWdIZu:oe,tKrYkJa5D:ce,e0NBq8DJx:le,...ue}=ct(e),{baseVariant:F,classNames:fe,clearLoadingGesture:I,gestureHandlers:L,gestureVariant:R,isLoading:pe,setGestureState:me,setVariant:z,variants:ge}=re({cycleOrder:Oe,defaultVariant:`pacHJjAuP`,ref:i,variant:g,variantClassNames:Ae}),B=lt(e,ge),_e=y(ke),ve=()=>!![`TNMcwaCL_`,`ydHkuWIoC`].includes(F),ye=Me(je(_,s)),{activeVariantCallback:V,delay:be}=se(F),H=V(async(...e)=>{z(`pacHJjAuP`)}),U=V(async(...e)=>{z(`tq0rchyuZ`)}),W=V(async(...e)=>{z(`Ry7KWPvyQ`)}),G=V(async(...e)=>{z(`wbD_oSudy`)}),xe=V(async(...e)=>{z(`I8cBi4te1`)}),Se=V(async(...e)=>{z(`xT8hy8uQv`)}),Ce=V(async(...e)=>{z(`TNMcwaCL_`)}),we=V(async(...e)=>{z(`ydHkuWIoC`)}),Te=Me(rt(_,s));return d(m,{id:h??o,children:d(ot,{animate:ge,initial:!1,children:d(Y,{value:ce,...q({I8cBi4te1:{value:oe},TNMcwaCL_:{value:oe},xT8hy8uQv:{value:J},ydHkuWIoC:{value:J}},F,R),children:f(p.div,{...ue,...L,className:y(_e,`framer-3v0pi5`,u,fe),"data-framer-name":`Desktop Closed`,layoutDependency:B,layoutId:`pacHJjAuP`,ref:i,style:{backgroundColor:`rgba(0, 0, 0, 0)`,...ee},...q({I8cBi4te1:{"data-framer-name":`Desktop Open`},Ry7KWPvyQ:{"data-framer-name":`Desktop Solid`},TNMcwaCL_:{"data-framer-name":`Desktop Solid Open`},tq0rchyuZ:{"data-framer-name":`Phone Closed`},wbD_oSudy:{"data-framer-name":`Phone Solid`},xT8hy8uQv:{"data-framer-name":`Phone Open`},ydHkuWIoC:{"data-framer-name":`Phone Solid Open`}},F,R),children:[ve()&&d(p.div,{className:`framer-erre64`,"data-framer-name":`Solid header background`,layoutDependency:B,layoutId:`jygWsLAHg`,style:{backgroundColor:ye}}),f(p.div,{className:`framer-16tre2f`,"data-framer-name":`Menu viewport`,layoutDependency:B,layoutId:`HGPzXC03d`,children:[d(Y,{value:Ne,children:d(p.div,{className:`framer-5rreix`,"data-framer-name":`Backdrop — Tap to close`,layoutDependency:B,layoutId:`iy9j6sfkJ`,style:{backgroundColor:le,opacity:0},variants:{I8cBi4te1:{opacity:1},TNMcwaCL_:{opacity:1},xT8hy8uQv:{opacity:1},ydHkuWIoC:{opacity:1}},...q({I8cBi4te1:{"data-highlight":!0,onClick:H},TNMcwaCL_:{"data-highlight":!0,onTap:W},xT8hy8uQv:{"data-highlight":!0,onClick:U},ydHkuWIoC:{"data-highlight":!0,onTap:G}},F,R)})}),d(p.nav,{"aria-label":`Main navigation`,className:`framer-f83utn`,"data-framer-name":`Side navigation — Edit directly`,layoutDependency:B,layoutId:`nYZkHveRD`,style:{backgroundColor:`rgb(244, 243, 206)`,borderBottomLeftRadius:Pe(v,3),borderBottomRightRadius:Pe(v,2),borderTopLeftRadius:Pe(v,0),borderTopRightRadius:Pe(v,1)},children:f(p.div,{className:`framer-132nu9n`,"data-framer-name":`Menu layout`,layoutDependency:B,layoutId:`Tg_TQNENl`,style:{backgroundColor:`rgba(0, 0, 0, 0)`},children:[d(p.div,{className:`framer-1w2mbjg`,"data-framer-name":`Main links`,layoutDependency:B,layoutId:`wRzBpBbVf`,children:f(p.div,{className:`framer-1ztta4`,"data-framer-name":`Navigation links`,layoutDependency:B,layoutId:`HlyVLbczW`,children:[d(A,{href:x,motionChild:!0,nodeId:`UZ1YhSrwC`,scopeId:`V0uWs6VLv`,children:d(p.a,{className:`framer-mubaap framer-aovmem`,"data-framer-name":`Home`,layoutDependency:B,layoutId:`UZ1YhSrwC`,style:{backgroundColor:`rgba(0, 0, 0, 0)`},tabIndex:-1,...q({I8cBi4te1:{"data-highlight":!0,onClick:H,tabIndex:0},TNMcwaCL_:{"data-highlight":!0,onTap:W,tabIndex:0},xT8hy8uQv:{"data-highlight":!0,onClick:U,tabIndex:0},ydHkuWIoC:{"data-highlight":!0,onTap:G,tabIndex:0}},F,R),children:d(Y,{value:Fe,...q({I8cBi4te1:{value:J},TNMcwaCL_:{value:J},xT8hy8uQv:{value:J},ydHkuWIoC:{value:J}},F,R),children:d(j,{height:76,width:`min(440px, ${l?.width||`100vw`})`,y:(l?.y||0)+0+0+0+0+128+0+0+0+0+0+0,...q({tq0rchyuZ:{width:l?.width||`100vw`,y:void 0},wbD_oSudy:{width:l?.width||`100vw`,y:void 0},xT8hy8uQv:{width:l?.width||`100vw`,y:void 0},ydHkuWIoC:{width:l?.width||`100vw`,y:void 0}},F,R),children:d(de,{className:`framer-it7kzp-container`,"data-framer-name":`Home — Animated link`,layoutDependency:B,layoutId:`kuyP6SMBm-container`,name:`Home — Animated link`,nodeId:`kuyP6SMBm`,rendersWithMotion:!0,scopeId:`V0uWs6VLv`,style:{opacity:0},variants:{I8cBi4te1:{opacity:1},TNMcwaCL_:{opacity:1},xT8hy8uQv:{opacity:1},ydHkuWIoC:{opacity:1}},children:d(K,{height:`100%`,id:`kuyP6SMBm`,layoutId:`kuyP6SMBm`,name:`Home — Animated link`,style:{height:`100%`,width:`100%`},UF7cGXuUR:`Home`,variant:X(`iNF49imL4`),width:`100%`,ZL6r4URMl:N,...q({tq0rchyuZ:{variant:X(`k2o0AQZJb`)},wbD_oSudy:{variant:X(`k2o0AQZJb`)},xT8hy8uQv:{variant:X(`k2o0AQZJb`)},ydHkuWIoC:{variant:X(`k2o0AQZJb`)}},F,R)})})})})})}),d(A,{href:C,motionChild:!0,nodeId:`hNMzUYRW2`,scopeId:`V0uWs6VLv`,children:d(p.a,{className:`framer-542gnx framer-aovmem`,"data-framer-name":`Work`,layoutDependency:B,layoutId:`hNMzUYRW2`,style:{backgroundColor:`rgba(0, 0, 0, 0)`},tabIndex:-1,...q({I8cBi4te1:{"data-highlight":!0,onClick:H,tabIndex:0},TNMcwaCL_:{"data-highlight":!0,onTap:W,tabIndex:0},xT8hy8uQv:{"data-highlight":!0,onClick:U,tabIndex:0},ydHkuWIoC:{"data-highlight":!0,onTap:G,tabIndex:0}},F,R),children:d(Y,{value:Ie,...q({I8cBi4te1:{value:Le},TNMcwaCL_:{value:Le},xT8hy8uQv:{value:Le},ydHkuWIoC:{value:Le}},F,R),children:d(j,{height:76,width:`min(440px, ${l?.width||`100vw`})`,y:(l?.y||0)+0+0+0+0+128+0+0+0+0+80+0,...q({tq0rchyuZ:{width:l?.width||`100vw`,y:void 0},wbD_oSudy:{width:l?.width||`100vw`,y:void 0},xT8hy8uQv:{width:l?.width||`100vw`,y:void 0},ydHkuWIoC:{width:l?.width||`100vw`,y:void 0}},F,R),children:d(de,{className:`framer-143hpqi-container`,"data-framer-name":`Work — Animated link`,layoutDependency:B,layoutId:`m9UQbFlk4-container`,name:`Work — Animated link`,nodeId:`m9UQbFlk4`,rendersWithMotion:!0,scopeId:`V0uWs6VLv`,style:{opacity:0},variants:{I8cBi4te1:{opacity:1},TNMcwaCL_:{opacity:1},xT8hy8uQv:{opacity:1},ydHkuWIoC:{opacity:1}},children:d(K,{height:`100%`,id:`m9UQbFlk4`,layoutId:`m9UQbFlk4`,name:`Work — Animated link`,style:{height:`100%`,width:`100%`},UF7cGXuUR:`Work`,variant:X(`iNF49imL4`),width:`100%`,ZL6r4URMl:N,...q({tq0rchyuZ:{variant:X(`k2o0AQZJb`)},wbD_oSudy:{variant:X(`k2o0AQZJb`)},xT8hy8uQv:{variant:X(`k2o0AQZJb`)},ydHkuWIoC:{variant:X(`k2o0AQZJb`)}},F,R)})})})})})}),d(A,{href:w,motionChild:!0,nodeId:`mwrkcgHef`,scopeId:`V0uWs6VLv`,children:d(p.a,{className:`framer-wkqbct framer-aovmem`,"data-framer-name":`Studio`,layoutDependency:B,layoutId:`mwrkcgHef`,style:{backgroundColor:`rgba(0, 0, 0, 0)`},tabIndex:-1,...q({I8cBi4te1:{"data-highlight":!0,onClick:H,tabIndex:0},TNMcwaCL_:{"data-highlight":!0,onTap:W,tabIndex:0},xT8hy8uQv:{"data-highlight":!0,onClick:U,tabIndex:0},ydHkuWIoC:{"data-highlight":!0,onTap:G,tabIndex:0}},F,R),children:d(Y,{value:Re,...q({I8cBi4te1:{value:ze},TNMcwaCL_:{value:ze},xT8hy8uQv:{value:ze},ydHkuWIoC:{value:ze}},F,R),children:d(j,{height:76,width:`min(440px, ${l?.width||`100vw`})`,y:(l?.y||0)+0+0+0+0+128+0+0+0+0+160+0,...q({tq0rchyuZ:{width:l?.width||`100vw`,y:void 0},wbD_oSudy:{width:l?.width||`100vw`,y:void 0},xT8hy8uQv:{width:l?.width||`100vw`,y:void 0},ydHkuWIoC:{width:l?.width||`100vw`,y:void 0}},F,R),children:d(de,{className:`framer-6ouoyx-container`,"data-framer-name":`Studio — Animated link`,layoutDependency:B,layoutId:`AZTLTMWxx-container`,name:`Studio — Animated link`,nodeId:`AZTLTMWxx`,rendersWithMotion:!0,scopeId:`V0uWs6VLv`,style:{opacity:0},variants:{I8cBi4te1:{opacity:1},TNMcwaCL_:{opacity:1},xT8hy8uQv:{opacity:1},ydHkuWIoC:{opacity:1}},children:d(K,{height:`100%`,id:`AZTLTMWxx`,layoutId:`AZTLTMWxx`,name:`Studio — Animated link`,style:{height:`100%`,width:`100%`},UF7cGXuUR:`Studio`,variant:X(`iNF49imL4`),width:`100%`,ZL6r4URMl:N,...q({tq0rchyuZ:{variant:X(`k2o0AQZJb`)},wbD_oSudy:{variant:X(`k2o0AQZJb`)},xT8hy8uQv:{variant:X(`k2o0AQZJb`)},ydHkuWIoC:{variant:X(`k2o0AQZJb`)}},F,R)})})})})})}),d(A,{href:T,motionChild:!0,nodeId:`Mfdeij9gh`,scopeId:`V0uWs6VLv`,children:d(p.a,{className:`framer-zbfiqu framer-aovmem`,"data-framer-name":`Contact`,layoutDependency:B,layoutId:`Mfdeij9gh`,style:{backgroundColor:`rgba(0, 0, 0, 0)`},tabIndex:-1,...q({I8cBi4te1:{"data-highlight":!0,onClick:H,tabIndex:0},TNMcwaCL_:{"data-highlight":!0,onTap:W,tabIndex:0},xT8hy8uQv:{"data-highlight":!0,onClick:U,tabIndex:0},ydHkuWIoC:{"data-highlight":!0,onTap:G,tabIndex:0}},F,R),children:d(Y,{value:Be,...q({I8cBi4te1:{value:Ve},TNMcwaCL_:{value:Ve},xT8hy8uQv:{value:Ve},ydHkuWIoC:{value:Ve}},F,R),children:d(j,{height:76,width:`min(440px, ${l?.width||`100vw`})`,y:(l?.y||0)+0+0+0+0+128+0+0+0+0+240+0,...q({tq0rchyuZ:{width:l?.width||`100vw`,y:void 0},wbD_oSudy:{width:l?.width||`100vw`,y:void 0},xT8hy8uQv:{width:l?.width||`100vw`,y:void 0},ydHkuWIoC:{width:l?.width||`100vw`,y:void 0}},F,R),children:d(de,{className:`framer-109ov26-container`,"data-framer-name":`Contact — Animated link`,layoutDependency:B,layoutId:`q5WuB4W1E-container`,name:`Contact — Animated link`,nodeId:`q5WuB4W1E`,rendersWithMotion:!0,scopeId:`V0uWs6VLv`,style:{opacity:0},variants:{I8cBi4te1:{opacity:1},TNMcwaCL_:{opacity:1},xT8hy8uQv:{opacity:1},ydHkuWIoC:{opacity:1}},children:d(K,{height:`100%`,id:`q5WuB4W1E`,layoutId:`q5WuB4W1E`,name:`Contact — Animated link`,style:{height:`100%`,width:`100%`},UF7cGXuUR:`Contact`,variant:X(`iNF49imL4`),width:`100%`,ZL6r4URMl:N,...q({tq0rchyuZ:{variant:X(`k2o0AQZJb`)},wbD_oSudy:{variant:X(`k2o0AQZJb`)},xT8hy8uQv:{variant:X(`k2o0AQZJb`)},ydHkuWIoC:{variant:X(`k2o0AQZJb`)}},F,R)})})})})})})]})}),d(Y,{...q({I8cBi4te1:{value:He},TNMcwaCL_:{value:He},xT8hy8uQv:{value:He},ydHkuWIoC:{value:He}},F,R),children:f(p.div,{className:`framer-1yftfnx`,"data-framer-name":`Footer — Socials and Studio`,layoutDependency:B,layoutId:`m8IU8EMdY`,children:[d(Y,{value:Ue,children:d(p.div,{className:`framer-51g9pg`,"data-framer-name":`Divider`,layoutDependency:B,layoutId:`RM3EuM1lF`,style:{backgroundColor:`rgb(200, 206, 172)`}})}),f(p.div,{className:`framer-1flc6fa`,"data-framer-name":`Footer groups`,layoutDependency:B,layoutId:`zxpfcgQpV`,children:[f(p.div,{className:`framer-18w12vj`,"data-framer-name":`Socials`,layoutDependency:B,layoutId:`hfUt1SaQJ`,children:[d(p.div,{className:`framer-cn9jqz`,"data-framer-name":`Socials heading — Reveal mask`,layoutDependency:B,layoutId:`VXfxARPaR`,style:{backgroundColor:`rgba(0, 0, 0, 0)`},children:d(Y,{value:We,...q({I8cBi4te1:{value:Ge},TNMcwaCL_:{value:Ge},xT8hy8uQv:{value:Ge},ydHkuWIoC:{value:Ge}},F,R),children:d(P,{__fromCanvasComponent:!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`R0Y7R2Vpc3QgTW9uby1yZWd1bGFy`,"--framer-font-family":`"Geist Mono", "Geist Mono Placeholder", monospace`,"--framer-font-size":`12px`,"--framer-letter-spacing":`0.04em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #617253)`},children:`SOCIALS`})}),className:`framer-exmnq5`,"data-framer-name":`Socials heading`,fonts:[`GF;Geist Mono-regular`],layoutDependency:B,layoutId:`tVe4Obdvz`,style:{"--extracted-r6o4lv":`#617253`,opacity:0},variants:{I8cBi4te1:{opacity:1},TNMcwaCL_:{opacity:1},xT8hy8uQv:{opacity:1},ydHkuWIoC:{opacity:1}},verticalAlignment:`top`,withExternalLayout:!0})})}),f(p.div,{className:`framer-1v2ei2c`,"data-framer-name":`Social links`,layoutDependency:B,layoutId:`SiuSChcZI`,children:[d(p.div,{className:`framer-kr3cvl`,"data-framer-name":`Instagram — Reveal mask`,layoutDependency:B,layoutId:`kjU9rF5nd`,style:{backgroundColor:`rgba(0, 0, 0, 0)`},children:d(Y,{value:Ke,...q({I8cBi4te1:{value:qe},TNMcwaCL_:{value:qe},xT8hy8uQv:{value:qe},ydHkuWIoC:{value:qe}},F,R),children:d(P,{__fromCanvasComponent:!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`17px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:D,motionChild:!0,nodeId:`oNIo3Hv1B`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`Instagram`})})})}),className:`framer-58js66`,"data-framer-name":`Instagram`,fonts:[`Inter-Medium`],layoutDependency:B,layoutId:`oNIo3Hv1B`,style:{"--extracted-r6o4lv":`#103C2F`,opacity:0},tabIndex:-1,variants:{I8cBi4te1:{opacity:1},TNMcwaCL_:{"--extracted-r6o4lv":`rgb(16, 60, 47)`,opacity:1},xT8hy8uQv:{opacity:1},ydHkuWIoC:{"--extracted-r6o4lv":`rgb(16, 60, 47)`,opacity:1}},verticalAlignment:`top`,withExternalLayout:!0,...q({I8cBi4te1:{"data-highlight":!0,onClick:H,tabIndex:0},TNMcwaCL_:{"data-highlight":!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`17px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, rgb(16, 60, 47))`},children:d(A,{href:D,motionChild:!0,nodeId:`oNIo3Hv1B`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`Instagram`})})})}),onTap:W,tabIndex:0},tq0rchyuZ:{children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:D,motionChild:!0,nodeId:`oNIo3Hv1B`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`Instagram`})})})})},wbD_oSudy:{children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:D,motionChild:!0,nodeId:`oNIo3Hv1B`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`Instagram`})})})})},xT8hy8uQv:{"data-highlight":!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:D,motionChild:!0,nodeId:`oNIo3Hv1B`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`Instagram`})})})}),onClick:U,tabIndex:0},ydHkuWIoC:{"data-highlight":!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, rgb(16, 60, 47))`},children:d(A,{href:D,motionChild:!0,nodeId:`oNIo3Hv1B`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`Instagram`})})})}),onTap:G,tabIndex:0}},F,R)})})}),d(p.div,{className:`framer-194l46i`,"data-framer-name":`LinkedIn — Reveal mask`,layoutDependency:B,layoutId:`n7qIvu1LR`,style:{backgroundColor:`rgba(0, 0, 0, 0)`},children:d(Y,{value:Je,...q({I8cBi4te1:{value:Ye},TNMcwaCL_:{value:Ye},xT8hy8uQv:{value:Ye},ydHkuWIoC:{value:Ye}},F,R),children:d(P,{__fromCanvasComponent:!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`17px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:O,motionChild:!0,nodeId:`vqmySlVZ8`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`LinkedIn`})})})}),className:`framer-1olr8dg`,"data-framer-name":`LinkedIn`,fonts:[`Inter-Medium`],layoutDependency:B,layoutId:`vqmySlVZ8`,style:{"--extracted-r6o4lv":`#103C2F`,opacity:0},tabIndex:-1,variants:{I8cBi4te1:{opacity:1},TNMcwaCL_:{"--extracted-r6o4lv":`rgb(16, 60, 47)`,opacity:1},xT8hy8uQv:{opacity:1},ydHkuWIoC:{"--extracted-r6o4lv":`rgb(16, 60, 47)`,opacity:1}},verticalAlignment:`top`,withExternalLayout:!0,...q({I8cBi4te1:{"data-highlight":!0,onClick:H,tabIndex:0},TNMcwaCL_:{"data-highlight":!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`17px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, rgb(16, 60, 47))`},children:d(A,{href:O,motionChild:!0,nodeId:`vqmySlVZ8`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`LinkedIn`})})})}),onTap:W,tabIndex:0},tq0rchyuZ:{children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:O,motionChild:!0,nodeId:`vqmySlVZ8`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`LinkedIn`})})})})},wbD_oSudy:{children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:O,motionChild:!0,nodeId:`vqmySlVZ8`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`LinkedIn`})})})})},xT8hy8uQv:{"data-highlight":!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:O,motionChild:!0,nodeId:`vqmySlVZ8`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`LinkedIn`})})})}),onClick:U,tabIndex:0},ydHkuWIoC:{"data-highlight":!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, rgb(16, 60, 47))`},children:d(A,{href:O,motionChild:!0,nodeId:`vqmySlVZ8`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`LinkedIn`})})})}),onTap:G,tabIndex:0}},F,R)})})}),d(p.div,{className:`framer-d65k68`,"data-framer-name":`Twitter — Reveal mask`,layoutDependency:B,layoutId:`CTVwX2PKL`,style:{backgroundColor:`rgba(0, 0, 0, 0)`},children:d(Y,{value:Xe,...q({I8cBi4te1:{value:Ze},TNMcwaCL_:{value:Ze},xT8hy8uQv:{value:Ze},ydHkuWIoC:{value:Ze}},F,R),children:d(P,{__fromCanvasComponent:!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`17px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:k,motionChild:!0,nodeId:`JBYzFgRUY`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`X / Twitter`})})})}),className:`framer-1ce0j5u`,"data-framer-name":`X / Twitter`,fonts:[`Inter-Medium`],layoutDependency:B,layoutId:`JBYzFgRUY`,style:{"--extracted-r6o4lv":`#103C2F`,opacity:0},tabIndex:-1,variants:{I8cBi4te1:{opacity:1},TNMcwaCL_:{"--extracted-r6o4lv":`rgb(16, 60, 47)`,opacity:1},xT8hy8uQv:{opacity:1},ydHkuWIoC:{"--extracted-r6o4lv":`rgb(16, 60, 47)`,opacity:1}},verticalAlignment:`top`,withExternalLayout:!0,...q({I8cBi4te1:{"data-highlight":!0,onClick:H,tabIndex:0},TNMcwaCL_:{"data-highlight":!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`17px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, rgb(16, 60, 47))`},children:d(A,{href:k,motionChild:!0,nodeId:`JBYzFgRUY`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`X / Twitter`})})})}),onTap:W,tabIndex:0},tq0rchyuZ:{children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:k,motionChild:!0,nodeId:`JBYzFgRUY`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`X / Twitter`})})})})},wbD_oSudy:{children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:k,motionChild:!0,nodeId:`JBYzFgRUY`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`X / Twitter`})})})})},xT8hy8uQv:{"data-highlight":!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:k,motionChild:!0,nodeId:`JBYzFgRUY`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`X / Twitter`})})})}),onClick:U,tabIndex:0},ydHkuWIoC:{"data-highlight":!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, rgb(16, 60, 47))`},children:d(A,{href:k,motionChild:!0,nodeId:`JBYzFgRUY`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`X / Twitter`})})})}),onTap:G,tabIndex:0}},F,R)})})})]})]}),f(p.div,{className:`framer-11t8g9h`,"data-framer-name":`Studio`,layoutDependency:B,layoutId:`qLheUpem_`,children:[d(p.div,{className:`framer-18c40j`,"data-framer-name":`Studio heading — Reveal mask`,layoutDependency:B,layoutId:`dPADvNY6s`,style:{backgroundColor:`rgba(0, 0, 0, 0)`},children:d(Y,{value:Qe,...q({I8cBi4te1:{value:Z},TNMcwaCL_:{value:Z},xT8hy8uQv:{value:Z},ydHkuWIoC:{value:Z}},F,R),children:d(P,{__fromCanvasComponent:!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`R0Y7R2Vpc3QgTW9uby1yZWd1bGFy`,"--framer-font-family":`"Geist Mono", "Geist Mono Placeholder", monospace`,"--framer-font-size":`12px`,"--framer-letter-spacing":`0.04em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #617253)`},children:`STUDIO`})}),className:`framer-zzi3se`,"data-framer-name":`Studio heading`,fonts:[`GF;Geist Mono-regular`],layoutDependency:B,layoutId:`BLk8rBFxy`,style:{"--extracted-r6o4lv":`#617253`,opacity:0},variants:{I8cBi4te1:{opacity:1},TNMcwaCL_:{opacity:1},xT8hy8uQv:{opacity:1},ydHkuWIoC:{opacity:1}},verticalAlignment:`top`,withExternalLayout:!0})})}),f(p.div,{className:`framer-czo8hf`,"data-framer-name":`Studio links`,layoutDependency:B,layoutId:`T1LTLvf_C`,children:[d(p.div,{className:`framer-1ofsbq3`,"data-framer-name":`Phone — Reveal mask`,layoutDependency:B,layoutId:`I1D81VlOI`,style:{backgroundColor:`rgba(0, 0, 0, 0)`},children:d(Y,{value:$e,...q({I8cBi4te1:{value:et},TNMcwaCL_:{value:et},xT8hy8uQv:{value:et},ydHkuWIoC:{value:et}},F,R),children:d(P,{__fromCanvasComponent:!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`17px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:M,motionChild:!0,nodeId:`pqHuATNhW`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`+1 234 567 890`})})})}),className:`framer-3ts09d`,"data-framer-name":`Phone`,fonts:[`Inter-Medium`],layoutDependency:B,layoutId:`pqHuATNhW`,style:{"--extracted-r6o4lv":`#103C2F`,opacity:0},tabIndex:-1,variants:{I8cBi4te1:{opacity:1},TNMcwaCL_:{"--extracted-r6o4lv":`rgb(16, 60, 47)`,opacity:1},xT8hy8uQv:{opacity:1},ydHkuWIoC:{"--extracted-r6o4lv":`rgb(16, 60, 47)`,opacity:1}},verticalAlignment:`top`,withExternalLayout:!0,...q({I8cBi4te1:{"data-highlight":!0,onClick:H,tabIndex:0},TNMcwaCL_:{"data-highlight":!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`17px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, rgb(16, 60, 47))`},children:d(A,{href:M,motionChild:!0,nodeId:`pqHuATNhW`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`+1 234 567 890`})})})}),onTap:W,tabIndex:0},tq0rchyuZ:{children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:M,motionChild:!0,nodeId:`pqHuATNhW`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`+1 234 567 890`})})})})},wbD_oSudy:{children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:M,motionChild:!0,nodeId:`pqHuATNhW`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`+1 234 567 890`})})})})},xT8hy8uQv:{"data-highlight":!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:M,motionChild:!0,nodeId:`pqHuATNhW`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`+1 234 567 890`})})})}),onClick:U,tabIndex:0},ydHkuWIoC:{"data-highlight":!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, rgb(16, 60, 47))`},children:d(A,{href:M,motionChild:!0,nodeId:`pqHuATNhW`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`+1 234 567 890`})})})}),onTap:G,tabIndex:0}},F,R)})})}),d(p.div,{className:`framer-10yep4l`,"data-framer-name":`Email — Reveal mask`,layoutDependency:B,layoutId:`XrGLvG066`,style:{backgroundColor:`rgba(0, 0, 0, 0)`},children:d(Y,{value:tt,...q({I8cBi4te1:{value:nt},TNMcwaCL_:{value:nt},xT8hy8uQv:{value:nt},ydHkuWIoC:{value:nt}},F,R),children:d(P,{__fromCanvasComponent:!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`17px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:E,motionChild:!0,nodeId:`EAQ7UHrxQ`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`hello@studio.design`})})})}),className:`framer-1js3pnx`,"data-framer-name":`Email`,fonts:[`Inter-Medium`],layoutDependency:B,layoutId:`EAQ7UHrxQ`,style:{"--extracted-r6o4lv":`#103C2F`,opacity:0},tabIndex:-1,variants:{I8cBi4te1:{opacity:1},TNMcwaCL_:{"--extracted-r6o4lv":`rgb(16, 60, 47)`,opacity:1},xT8hy8uQv:{opacity:1},ydHkuWIoC:{"--extracted-r6o4lv":`rgb(16, 60, 47)`,opacity:1}},verticalAlignment:`top`,withExternalLayout:!0,...q({I8cBi4te1:{"data-highlight":!0,onClick:H,tabIndex:0},TNMcwaCL_:{"data-highlight":!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`17px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, rgb(16, 60, 47))`},children:d(A,{href:E,motionChild:!0,nodeId:`EAQ7UHrxQ`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`hello@studio.design`})})})}),onTap:W,tabIndex:0},tq0rchyuZ:{children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:E,motionChild:!0,nodeId:`EAQ7UHrxQ`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`hello@studio.design`})})})})},wbD_oSudy:{children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:E,motionChild:!0,nodeId:`EAQ7UHrxQ`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`hello@studio.design`})})})})},xT8hy8uQv:{"data-highlight":!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, #103C2F)`},children:d(A,{href:E,motionChild:!0,nodeId:`EAQ7UHrxQ`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`hello@studio.design`})})})}),onClick:U,tabIndex:0},ydHkuWIoC:{"data-highlight":!0,children:d(a,{children:d(p.p,{dir:`auto`,style:{"--font-selector":`SW50ZXItTWVkaXVt`,"--framer-font-size":`14px`,"--framer-font-weight":`500`,"--framer-letter-spacing":`-0.02em`,"--framer-line-height":`1.3em`,"--framer-text-color":`var(--extracted-r6o4lv, rgb(16, 60, 47))`},children:d(A,{href:E,motionChild:!0,nodeId:`EAQ7UHrxQ`,openInNewTab:!1,relValues:[],scopeId:`V0uWs6VLv`,smoothScroll:!1,children:d(p.a,{children:`hello@studio.design`})})})}),onTap:G,tabIndex:0}},F,R)})})})]})]})]})]})})]})})]}),f(p.div,{className:`framer-f8k5d8`,"data-framer-name":`Header — Transparent`,layoutDependency:B,layoutId:`syACEWT9h`,style:{backgroundColor:`rgba(0, 0, 0, 0)`},variants:{Ry7KWPvyQ:{backgroundColor:ye},wbD_oSudy:{backgroundColor:ye}},...q({Ry7KWPvyQ:{"data-framer-name":`Header — Solid`},TNMcwaCL_:{"data-framer-name":`Header — Solid`},wbD_oSudy:{"data-framer-name":`Header — Solid`},ydHkuWIoC:{"data-framer-name":`Header — Solid`}},F,R),children:[f(p.button,{"aria-label":`Open navigation`,className:`framer-1q0932f`,"data-framer-name":`Menu button`,"data-highlight":!0,"data-reset":`button`,layoutDependency:B,layoutId:`tCkeg6mnw`,onClick:xe,style:{backgroundColor:`rgba(0, 0, 0, 0)`},...q({I8cBi4te1:{"aria-label":`Close navigation`,onClick:H},Ry7KWPvyQ:{onClick:void 0,onTap:Ce},TNMcwaCL_:{"aria-label":`Close navigation`,onClick:void 0,onTap:W},tq0rchyuZ:{onClick:Se},wbD_oSudy:{onClick:void 0,onTap:we},xT8hy8uQv:{"aria-label":`Close navigation`,onClick:U},ydHkuWIoC:{"aria-label":`Close navigation`,onClick:void 0,onTap:G}},F,R),children:[d(Y,{value:it,children:d(p.div,{className:`framer-1yhibrr`,"data-framer-name":`Top line`,layoutDependency:B,layoutId:`nOyYkJknO`,style:{backgroundColor:Te,rotate:0},variants:{I8cBi4te1:{backgroundColor:`rgb(16, 60, 47)`,rotate:45},Ry7KWPvyQ:{rotate:0},TNMcwaCL_:{backgroundColor:`rgb(16, 60, 47)`,rotate:45},wbD_oSudy:{rotate:0},xT8hy8uQv:{backgroundColor:`rgb(16, 60, 47)`,rotate:45},ydHkuWIoC:{backgroundColor:`rgb(16, 60, 47)`,rotate:45}}})}),d(Y,{value:it,children:d(p.div,{className:`framer-11ah242`,"data-framer-name":`Bottom line`,layoutDependency:B,layoutId:`WdX5HAi9O`,style:{backgroundColor:Te,rotate:0},variants:{I8cBi4te1:{backgroundColor:`rgb(16, 60, 47)`,rotate:-45},Ry7KWPvyQ:{rotate:0},TNMcwaCL_:{backgroundColor:`rgb(16, 60, 47)`,rotate:-45},wbD_oSudy:{rotate:0},xT8hy8uQv:{backgroundColor:`rgb(16, 60, 47)`,rotate:-45},ydHkuWIoC:{backgroundColor:`rgb(16, 60, 47)`,rotate:-45}}})})]}),d(p.div,{className:`framer-4260ue`,"data-framer-name":`Logo alignment`,layoutDependency:B,layoutId:`DuRHHeWZq`,style:{backgroundColor:`rgba(0, 0, 0, 0)`},children:d(A,{href:x,motionChild:!0,nodeId:`XYv9hx4tb`,scopeId:`V0uWs6VLv`,children:d(p.a,{"aria-label":`Home`,className:`framer-1aornf8 framer-aovmem`,"data-framer-name":`Home — Logo link`,layoutDependency:B,layoutId:`XYv9hx4tb`,style:{backgroundColor:`rgba(0, 0, 0, 0)`},children:d(ne,{background:{alt:``,fit:`fill`,intrinsicHeight:197,intrinsicWidth:678,loading:S((l?.y||0)+0+0+14+8),pixelHeight:197,pixelWidth:678,sizes:`124px`,src:`https://framerusercontent.com/images/PlHt8CwfGMGViz0iINW8wjkVBjM.svg?width=678&height=197`,srcSet:`https://framerusercontent.com/images/PlHt8CwfGMGViz0iINW8wjkVBjM.svg?scale-down-to=512&width=678&height=197 512w,https://framerusercontent.com/images/PlHt8CwfGMGViz0iINW8wjkVBjM.svg?width=678&height=197 678w`},className:`framer-1h6fqph`,"data-framer-name":`Framer — Image logo`,layoutDependency:B,layoutId:`NZLsJuRkJ`,...q({tq0rchyuZ:{background:{alt:``,fit:`fill`,intrinsicHeight:197,intrinsicWidth:678,loading:S((l?.y||0)+0+0+18+6),pixelHeight:197,pixelWidth:678,sizes:`110px`,src:`https://framerusercontent.com/images/PlHt8CwfGMGViz0iINW8wjkVBjM.svg?width=678&height=197`,srcSet:`https://framerusercontent.com/images/PlHt8CwfGMGViz0iINW8wjkVBjM.svg?scale-down-to=512&width=678&height=197 512w,https://framerusercontent.com/images/PlHt8CwfGMGViz0iINW8wjkVBjM.svg?width=678&height=197 678w`}},wbD_oSudy:{background:{alt:``,fit:`fill`,intrinsicHeight:197,intrinsicWidth:678,loading:S((l?.y||0)+0+0+18+6),pixelHeight:197,pixelWidth:678,sizes:`110px`,src:`https://framerusercontent.com/images/PlHt8CwfGMGViz0iINW8wjkVBjM.svg?width=678&height=197`,srcSet:`https://framerusercontent.com/images/PlHt8CwfGMGViz0iINW8wjkVBjM.svg?scale-down-to=512&width=678&height=197 512w,https://framerusercontent.com/images/PlHt8CwfGMGViz0iINW8wjkVBjM.svg?width=678&height=197 678w`}},xT8hy8uQv:{background:{alt:``,fit:`fill`,intrinsicHeight:197,intrinsicWidth:678,loading:S((l?.y||0)+0+0+18+6),pixelHeight:197,pixelWidth:678,sizes:`110px`,src:`https://framerusercontent.com/images/3ZemrB8MAkCLhB1QRB8qiCpuHl0.svg?width=678&height=197`,srcSet:`https://framerusercontent.com/images/3ZemrB8MAkCLhB1QRB8qiCpuHl0.svg?scale-down-to=512&width=678&height=197 512w,https://framerusercontent.com/images/3ZemrB8MAkCLhB1QRB8qiCpuHl0.svg?width=678&height=197 678w`}},ydHkuWIoC:{background:{alt:``,fit:`fill`,intrinsicHeight:197,intrinsicWidth:678,loading:S((l?.y||0)+0+0+18+6),pixelHeight:197,pixelWidth:678,sizes:`110px`,src:`https://framerusercontent.com/images/3ZemrB8MAkCLhB1QRB8qiCpuHl0.svg?width=678&height=197`,srcSet:`https://framerusercontent.com/images/3ZemrB8MAkCLhB1QRB8qiCpuHl0.svg?scale-down-to=512&width=678&height=197 512w,https://framerusercontent.com/images/3ZemrB8MAkCLhB1QRB8qiCpuHl0.svg?width=678&height=197 678w`}}},F,R)})})})})]}),d(j,{children:d(de,{className:`framer-1jne4jh-container`,"data-framer-name":`Page Push — Transition Settings`,isAuthoredByUser:!0,layoutDependency:B,layoutId:`uitj2FMs2-container`,name:`Page Push — Transition Settings`,nodeId:`uitj2FMs2`,rendersWithMotion:!0,scopeId:`V0uWs6VLv`,children:d(he,{closeDuration:.7,closeTransition:ce,cornerRadius:v,height:`100%`,id:`uitj2FMs2`,layout:`desktop`,layoutId:`uitj2FMs2`,mobilePanelPercent:84,name:`Page Push — Transition Settings`,onClose:H,open:!1,openDuration:.7,openTransition:oe,panelWidth:440,setupCode:b,style:{height:`100%`,width:`100%`},width:`100%`,...q({I8cBi4te1:{open:!0},Ry7KWPvyQ:{onClose:W},TNMcwaCL_:{onClose:W,open:!0},tq0rchyuZ:{layout:`phone`,mobilePanelPercent:100,onClose:U},wbD_oSudy:{layout:`phone`,mobilePanelPercent:100,onClose:G},xT8hy8uQv:{layout:`phone`,mobilePanelPercent:100,onClose:U,open:!0},ydHkuWIoC:{layout:`phone`,mobilePanelPercent:100,onClose:G,open:!0}},F,R)})})})]})})})})}),[`.framer-ycXWB.framer-aovmem, .framer-ycXWB .framer-aovmem { display: block; }`,`.framer-ycXWB.framer-3v0pi5 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 80px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,`.framer-ycXWB .framer-erre64 { flex: none; height: 80px; left: 0px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; top: 0px; width: 100%; z-index: 0; }`,`.framer-ycXWB .framer-16tre2f { flex: none; height: calc(var(--framer-viewport-height, 100vh) * 1); left: 0px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; top: 0px; width: 100%; z-index: 1; }`,`.framer-ycXWB .framer-5rreix { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; }`,`.framer-ycXWB .framer-f83utn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-start; max-width: 100%; overflow: auto; padding: 0px; position: absolute; right: -440px; top: 0px; width: 440px; }`,`.framer-ycXWB .framer-132nu9n { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; min-height: 640px; overflow: visible; padding: 128px 0px 36px 0px; position: relative; width: 100%; }`,`.framer-ycXWB .framer-1w2mbjg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-ycXWB .framer-1ztta4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-ycXWB .framer-mubaap, .framer-ycXWB .framer-542gnx, .framer-ycXWB .framer-wkqbct, .framer-ycXWB .framer-zbfiqu { cursor: pointer; flex: none; gap: 12px; height: 76px; overflow: var(--overflow-clip-fallback, clip); position: relative; text-decoration: none; width: 100%; }`,`.framer-ycXWB .framer-it7kzp-container, .framer-ycXWB .framer-143hpqi-container, .framer-ycXWB .framer-6ouoyx-container, .framer-ycXWB .framer-109ov26-container { flex: none; height: 76px; left: 32px; position: absolute; top: 0px; width: 100%; }`,`.framer-ycXWB .framer-1yftfnx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 32px 0px 32px; position: relative; width: 100%; }`,`.framer-ycXWB .framer-51g9pg { flex: none; height: 1px; position: relative; width: 100%; }`,`.framer-ycXWB .framer-1flc6fa { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-ycXWB .framer-18w12vj, .framer-ycXWB .framer-11t8g9h { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,`.framer-ycXWB .framer-cn9jqz, .framer-ycXWB .framer-18c40j { flex: none; height: 18px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,`.framer-ycXWB .framer-exmnq5, .framer-ycXWB .framer-zzi3se { flex: none; height: auto; left: 0px; position: absolute; top: 20px; white-space: pre; width: auto; }`,`.framer-ycXWB .framer-1v2ei2c, .framer-ycXWB .framer-czo8hf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-ycXWB .framer-kr3cvl, .framer-ycXWB .framer-194l46i, .framer-ycXWB .framer-d65k68, .framer-ycXWB .framer-1ofsbq3, .framer-ycXWB .framer-10yep4l { flex: none; height: 24px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,`.framer-ycXWB .framer-58js66, .framer-ycXWB .framer-1olr8dg, .framer-ycXWB .framer-1ce0j5u, .framer-ycXWB .framer-3ts09d, .framer-ycXWB .framer-1js3pnx { flex: none; height: auto; left: 0px; position: absolute; top: 26px; white-space: pre; width: auto; }`,`.framer-ycXWB .framer-f8k5d8 { flex: none; height: 80px; left: 0px; pointer-events: auto; position: absolute; top: 0px; width: 100%; z-index: 3; }`,`.framer-ycXWB .framer-1q0932f { cursor: pointer; flex: none; height: 44px; position: absolute; right: 24px; top: 18px; width: 44px; }`,`.framer-ycXWB .framer-1yhibrr { flex: none; height: 2px; left: 8px; position: absolute; top: 17px; width: 28px; }`,`.framer-ycXWB .framer-11ah242 { flex: none; height: 2px; left: 8px; position: absolute; top: 25px; width: 28px; }`,`.framer-ycXWB .framer-4260ue { flex: none; height: 100%; left: 0px; pointer-events: none; position: absolute; top: 0px; width: 100%; }`,`.framer-ycXWB .framer-1aornf8 { flex: none; height: 52px; left: 32px; pointer-events: auto; position: absolute; text-decoration: none; top: 14px; width: 124px; }`,`.framer-ycXWB .framer-1h6fqph { flex: none; height: 36px; left: 0px; position: absolute; top: 8px; width: 124px; }`,`.framer-ycXWB .framer-1jne4jh-container { flex: none; height: 1px; left: 0px; position: absolute; top: 0px; width: 1px; }`,`.framer-ycXWB.framer-v-gtlf1h.framer-3v0pi5, .framer-ycXWB.framer-v-n93pnn.framer-3v0pi5 { width: 390px; }`,`.framer-ycXWB.framer-v-gtlf1h .framer-f83utn, .framer-ycXWB.framer-v-n93pnn .framer-f83utn { left: calc(150% - min(100%, 100%) / 2); right: unset; width: 100%; }`,`.framer-ycXWB.framer-v-gtlf1h .framer-132nu9n, .framer-ycXWB.framer-v-f2cczp .framer-132nu9n, .framer-ycXWB.framer-v-n93pnn .framer-132nu9n, .framer-ycXWB.framer-v-1i72hfs .framer-132nu9n { min-height: 620px; padding: 108px 0px 28px 0px; }`,`.framer-ycXWB.framer-v-gtlf1h .framer-it7kzp-container, .framer-ycXWB.framer-v-gtlf1h .framer-143hpqi-container, .framer-ycXWB.framer-v-gtlf1h .framer-6ouoyx-container, .framer-ycXWB.framer-v-gtlf1h .framer-109ov26-container, .framer-ycXWB.framer-v-n93pnn .framer-it7kzp-container, .framer-ycXWB.framer-v-n93pnn .framer-143hpqi-container, .framer-ycXWB.framer-v-n93pnn .framer-6ouoyx-container, .framer-ycXWB.framer-v-n93pnn .framer-109ov26-container { left: 24px; }`,`.framer-ycXWB.framer-v-gtlf1h .framer-1yftfnx, .framer-ycXWB.framer-v-f2cczp .framer-1yftfnx, .framer-ycXWB.framer-v-n93pnn .framer-1yftfnx, .framer-ycXWB.framer-v-1i72hfs .framer-1yftfnx { padding: 0px 24px 0px 24px; }`,`.framer-ycXWB.framer-v-gtlf1h .framer-1flc6fa, .framer-ycXWB.framer-v-f2cczp .framer-1flc6fa, .framer-ycXWB.framer-v-n93pnn .framer-1flc6fa, .framer-ycXWB.framer-v-1i72hfs .framer-1flc6fa { flex-wrap: wrap; gap: 16px; }`,`.framer-ycXWB.framer-v-gtlf1h .framer-18w12vj, .framer-ycXWB.framer-v-gtlf1h .framer-11t8g9h, .framer-ycXWB.framer-v-f2cczp .framer-18w12vj, .framer-ycXWB.framer-v-f2cczp .framer-11t8g9h, .framer-ycXWB.framer-v-n93pnn .framer-18w12vj, .framer-ycXWB.framer-v-n93pnn .framer-11t8g9h, .framer-ycXWB.framer-v-1i72hfs .framer-18w12vj, .framer-ycXWB.framer-v-1i72hfs .framer-11t8g9h { min-width: 126px; }`,`.framer-ycXWB.framer-v-gtlf1h .framer-1q0932f, .framer-ycXWB.framer-v-f2cczp .framer-1q0932f, .framer-ycXWB.framer-v-n93pnn .framer-1q0932f, .framer-ycXWB.framer-v-1i72hfs .framer-1q0932f { right: 12px; }`,`.framer-ycXWB.framer-v-gtlf1h .framer-1aornf8, .framer-ycXWB.framer-v-f2cczp .framer-1aornf8, .framer-ycXWB.framer-v-n93pnn .framer-1aornf8, .framer-ycXWB.framer-v-1i72hfs .framer-1aornf8 { height: 44px; left: 20px; top: 18px; width: 110px; }`,`.framer-ycXWB.framer-v-gtlf1h .framer-1h6fqph, .framer-ycXWB.framer-v-f2cczp .framer-1h6fqph, .framer-ycXWB.framer-v-n93pnn .framer-1h6fqph, .framer-ycXWB.framer-v-1i72hfs .framer-1h6fqph { height: 32px; top: 6px; width: 110px; }`,`.framer-ycXWB.framer-v-rhxwdy.framer-3v0pi5, .framer-ycXWB.framer-v-4ahbyt.framer-3v0pi5 { display: block; height: 800px; padding: unset; }`,`.framer-ycXWB.framer-v-rhxwdy .framer-16tre2f, .framer-ycXWB.framer-v-f2cczp .framer-16tre2f, .framer-ycXWB.framer-v-4ahbyt .framer-16tre2f, .framer-ycXWB.framer-v-1i72hfs .framer-16tre2f { pointer-events: auto; }`,`.framer-ycXWB.framer-v-rhxwdy .framer-5rreix, .framer-ycXWB.framer-v-f2cczp .framer-5rreix, .framer-ycXWB.framer-v-4ahbyt .framer-5rreix, .framer-ycXWB.framer-v-1i72hfs .framer-5rreix { cursor: pointer; }`,`.framer-ycXWB.framer-v-rhxwdy .framer-f83utn, .framer-ycXWB.framer-v-4ahbyt .framer-f83utn { right: 0px; }`,`.framer-ycXWB.framer-v-rhxwdy .framer-it7kzp-container, .framer-ycXWB.framer-v-rhxwdy .framer-143hpqi-container, .framer-ycXWB.framer-v-rhxwdy .framer-6ouoyx-container, .framer-ycXWB.framer-v-rhxwdy .framer-109ov26-container, .framer-ycXWB.framer-v-f2cczp .framer-it7kzp-container, .framer-ycXWB.framer-v-f2cczp .framer-143hpqi-container, .framer-ycXWB.framer-v-f2cczp .framer-6ouoyx-container, .framer-ycXWB.framer-v-f2cczp .framer-109ov26-container, .framer-ycXWB.framer-v-4ahbyt .framer-it7kzp-container, .framer-ycXWB.framer-v-4ahbyt .framer-143hpqi-container, .framer-ycXWB.framer-v-4ahbyt .framer-6ouoyx-container, .framer-ycXWB.framer-v-4ahbyt .framer-109ov26-container, .framer-ycXWB.framer-v-1i72hfs .framer-it7kzp-container, .framer-ycXWB.framer-v-1i72hfs .framer-143hpqi-container, .framer-ycXWB.framer-v-1i72hfs .framer-6ouoyx-container, .framer-ycXWB.framer-v-1i72hfs .framer-109ov26-container { left: 0px; }`,`.framer-ycXWB.framer-v-rhxwdy .framer-exmnq5, .framer-ycXWB.framer-v-rhxwdy .framer-zzi3se, .framer-ycXWB.framer-v-f2cczp .framer-exmnq5, .framer-ycXWB.framer-v-f2cczp .framer-zzi3se, .framer-ycXWB.framer-v-4ahbyt .framer-exmnq5, .framer-ycXWB.framer-v-4ahbyt .framer-zzi3se, .framer-ycXWB.framer-v-1i72hfs .framer-exmnq5, .framer-ycXWB.framer-v-1i72hfs .framer-zzi3se { top: 0px; }`,`.framer-ycXWB.framer-v-rhxwdy .framer-58js66, .framer-ycXWB.framer-v-rhxwdy .framer-1olr8dg, .framer-ycXWB.framer-v-rhxwdy .framer-1ce0j5u, .framer-ycXWB.framer-v-rhxwdy .framer-3ts09d, .framer-ycXWB.framer-v-rhxwdy .framer-1js3pnx, .framer-ycXWB.framer-v-f2cczp .framer-58js66, .framer-ycXWB.framer-v-f2cczp .framer-1olr8dg, .framer-ycXWB.framer-v-f2cczp .framer-1ce0j5u, .framer-ycXWB.framer-v-f2cczp .framer-3ts09d, .framer-ycXWB.framer-v-f2cczp .framer-1js3pnx, .framer-ycXWB.framer-v-4ahbyt .framer-58js66, .framer-ycXWB.framer-v-4ahbyt .framer-1olr8dg, .framer-ycXWB.framer-v-4ahbyt .framer-1ce0j5u, .framer-ycXWB.framer-v-4ahbyt .framer-3ts09d, .framer-ycXWB.framer-v-4ahbyt .framer-1js3pnx, .framer-ycXWB.framer-v-1i72hfs .framer-58js66, .framer-ycXWB.framer-v-1i72hfs .framer-1olr8dg, .framer-ycXWB.framer-v-1i72hfs .framer-1ce0j5u, .framer-ycXWB.framer-v-1i72hfs .framer-3ts09d, .framer-ycXWB.framer-v-1i72hfs .framer-1js3pnx { cursor: pointer; top: 0px; }`,`.framer-ycXWB.framer-v-rhxwdy .framer-1yhibrr, .framer-ycXWB.framer-v-rhxwdy .framer-11ah242, .framer-ycXWB.framer-v-f2cczp .framer-1yhibrr, .framer-ycXWB.framer-v-f2cczp .framer-11ah242, .framer-ycXWB.framer-v-4ahbyt .framer-1yhibrr, .framer-ycXWB.framer-v-4ahbyt .framer-11ah242, .framer-ycXWB.framer-v-1i72hfs .framer-1yhibrr, .framer-ycXWB.framer-v-1i72hfs .framer-11ah242 { top: 21px; }`,`.framer-ycXWB.framer-v-f2cczp.framer-3v0pi5, .framer-ycXWB.framer-v-1i72hfs.framer-3v0pi5 { display: block; height: 800px; padding: unset; width: 390px; }`,`.framer-ycXWB.framer-v-f2cczp .framer-f83utn, .framer-ycXWB.framer-v-1i72hfs .framer-f83utn { right: 0px; width: 100%; }`],`framer-ycXWB`),Q.displayName=`Push Menu Navigation`,Q.defaultProps={height:80,width:1200},ue(Q,{variant:{options:[`pacHJjAuP`,`tq0rchyuZ`,`I8cBi4te1`,`xT8hy8uQv`,`Ry7KWPvyQ`,`wbD_oSudy`,`TNMcwaCL_`,`ydHkuWIoC`],optionTitles:[`Desktop Closed`,`Phone Closed`,`Desktop Open`,`Phone Open`,`Desktop Solid`,`Phone Solid`,`Desktop Solid Open`,`Phone Solid Open`],title:`Variant`,type:E.Enum},P0YdDc906:{defaultValue:`snjxaIzGr`,options:[`onom_gs0Q`,`snjxaIzGr`],optionTitles:[`light`,`dark`],title:`Header Theme`,type:E.Enum},onP0YdDc906Change:{changes:`P0YdDc906`,type:E.ChangeHandler},Au4NRzSO1:{defaultValue:0,title:`Corner Radius`,type:E.Number},onAu4NRzSO1Change:{changes:`Au4NRzSO1`,type:E.ChangeHandler},KkRri24Ud:{defaultValue:`// Installation:
// 1) Group all page sections in one native stack named "Page Content".
// 2) Keep the native nav outside that stack.
// 3) Apply PushContent → withShiftContent to the Page Content stack once.
// 4) Preview.
import { RenderTarget, useIsStaticRenderer } from "framer"
import { animate, useReducedMotion } from "framer-motion"
import {
    ComponentType,
    forwardRef,
    startTransition,
    useCallback,
    useEffect,
    useId,
    useRef,
    useState,
} from "react"

type ShiftEventDetail = {
    ownerId: string
    open: boolean
    width: number
    radius: number
    openDuration: number
    closeDuration: number
    openTransition?: TransitionPayload
    closeTransition?: TransitionPayload
    reducedMotion: boolean
    reset: boolean
}

type TransitionType = "tween" | "spring"
type EaseName =
    | "linear"
    | "easeIn"
    | "easeOut"
    | "easeInOut"
    | "circIn"
    | "circOut"
    | "circInOut"
    | "backIn"
    | "backOut"
    | "backInOut"
    | "anticipate"

type TransitionPayload = {
    type?: TransitionType
    duration?: number
    delay?: number
    ease?: EaseName | [number, number, number, number]
    stiffness?: number
    damping?: number
    mass?: number
    bounce?: number
    restSpeed?: number
    restDelta?: number
    velocity?: number
}

type ShiftRequestDetail = {
    targetId: string
}

const SHIFT_STATE_EVENT = "spm:state"
const SHIFT_REQUEST_EVENT = "spm:request"

function toFinite(value: any): number | undefined {
    return typeof value === "number" && Number.isFinite(value) ? value : undefined
}

function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value))
}

function isValidEaseArray(value: any): value is [number, number, number, number] {
    if (!Array.isArray(value) || value.length !== 4) return false
    const [x1, y1, x2, y2] = value
    if (![x1, y1, x2, y2].every((v) => typeof v === "number" && Number.isFinite(v))) return false
    return x1 >= 0 && x1 <= 1 && x2 >= 0 && x2 <= 1
}

function isValidEaseName(value: any): value is EaseName {
    return (
        value === "linear" ||
        value === "easeIn" ||
        value === "easeOut" ||
        value === "easeInOut" ||
        value === "circIn" ||
        value === "circOut" ||
        value === "circInOut" ||
        value === "backIn" ||
        value === "backOut" ||
        value === "backInOut" ||
        value === "anticipate"
    )
}

function sanitizeTransition(
    transition: TransitionPayload | undefined,
    fallback: { type: "tween"; duration: number; delay: number; ease: [number, number, number, number] }
) {
    const source = transition && typeof transition === "object" ? transition : {}
    const type = source.type === "spring" ? "spring" : "tween"
    const duration = Math.max(0, toFinite(source.duration) ?? fallback.duration)
    const delay = Math.max(0, toFinite(source.delay) ?? fallback.delay)
    const ease = isValidEaseArray(source.ease)
        ? source.ease
        : isValidEaseName(source.ease)
          ? source.ease
          : fallback.ease
    const result: Record<string, any> = { type, duration, delay }
    if (type === "tween") {
        result.ease = ease
    } else {
        const stiffness = toFinite(source.stiffness)
        const damping = toFinite(source.damping)
        const mass = toFinite(source.mass)
        const bounce = toFinite(source.bounce)
        const restSpeed = toFinite(source.restSpeed)
        const restDelta = toFinite(source.restDelta)
        const velocity = toFinite(source.velocity)
        if (stiffness !== undefined) result.stiffness = clamp(stiffness, 1, 2000)
        if (damping !== undefined) result.damping = clamp(damping, 0.01, 500)
        if (mass !== undefined) result.mass = clamp(mass, 0.01, 100)
        if (bounce !== undefined) result.bounce = clamp(bounce, 0, 1)
        if (restSpeed !== undefined) result.restSpeed = clamp(restSpeed, 0.01, 200)
        if (restDelta !== undefined) result.restDelta = clamp(restDelta, 0.00001, 1)
        if (velocity !== undefined) result.velocity = velocity
    }
    return result
}

function stableStringify(value: any): string {
    if (Array.isArray(value)) return \`[\${value.map(stableStringify).join(",")}]\`
    if (!value || typeof value !== "object") return JSON.stringify(value)
    const keys = Object.keys(value).sort()
    return \`{\${keys.map((key) => \`\${JSON.stringify(key)}:\${stableStringify(value[key])}\`).join(",")}}\`
}

export function withShiftContent(Component: ComponentType): ComponentType {
    return forwardRef(function ShiftContentOverride(props: any, ref) {
            const localId = useId().replace(/:/g, "")
            const rootRef = useRef<HTMLElement | null>(null)
            const ownerRef = useRef<string>("")
            const [openState, setOpenState] = useState(false)
            const [activeState, setActiveState] = useState(false)
            const openRef = useRef(false)
            const activeRef = useRef(false)
            const xAnimRef = useRef<{ stop?: () => void } | null>(null)
            const radiusAnimRef = useRef<{ stop?: () => void } | null>(null)
            const currentXRef = useRef(0)
            const currentRadiusRef = useRef(0)
            const lastSignatureRef = useRef("")
            const generationRef = useRef(0)
            const isStaticRenderer = useIsStaticRenderer()
            const isCanvas = RenderTarget.current() === RenderTarget.canvas
            const isStatic = isStaticRenderer || isCanvas
            const reducedMotion = useReducedMotion()
            const prevVarRef = useRef("")
            const prevRadiusRef = useRef("")
            const prevVarPriorityRef = useRef("")
            const prevRadiusPriorityRef = useRef("")

            const mergedRef = useCallback(
                (node: any) => {
                    rootRef.current = node as HTMLElement | null
                    if (typeof ref === "function") ref(node)
                    else if (ref && typeof ref === "object") (ref as any).current = node
                },
                [ref]
            )

            useEffect(() => {
                if (isStatic) return
                const el = rootRef.current
                if (!el) return
                prevVarRef.current = el.style.getPropertyValue("--shift-push-x")
                prevRadiusRef.current = el.style.getPropertyValue("--shift-push-radius")
                prevVarPriorityRef.current = el.style.getPropertyPriority("--shift-push-x")
                prevRadiusPriorityRef.current = el.style.getPropertyPriority("--shift-push-radius")
                if (!el.style.getPropertyValue("--shift-push-x")) el.style.setProperty("--shift-push-x", "0px")
                if (!el.style.getPropertyValue("--shift-push-radius")) el.style.setProperty("--shift-push-radius", "0px")
                return () => {
                    xAnimRef.current?.stop?.()
                    radiusAnimRef.current?.stop?.()
                    if (prevVarRef.current) el.style.setProperty("--shift-push-x", prevVarRef.current, prevVarPriorityRef.current)
                    else el.style.removeProperty("--shift-push-x")
                    if (prevRadiusRef.current) {
                        el.style.setProperty("--shift-push-radius", prevRadiusRef.current, prevRadiusPriorityRef.current)
                    } else el.style.removeProperty("--shift-push-radius")
                }
            }, [isStatic])

            useEffect(() => {
                if (isStatic || typeof window === "undefined") return
                const host = window.location?.hostname ?? ""
                const isCanvasHost = host === "framercanvas.com" || host.endsWith(".framercanvas.com")

                const onState = (event: Event) => {
                    const detail = (event as CustomEvent<ShiftEventDetail>).detail
                    if (!detail) return
                    if (detail.reset) {
                        if (!ownerRef.current || ownerRef.current !== detail.ownerId) return
                        const target = rootRef.current
                        if (!target) return
                        xAnimRef.current?.stop?.()
                        radiusAnimRef.current?.stop?.()
                        generationRef.current += 1
                        target.style.setProperty("--shift-push-x", "0px")
                        target.style.setProperty("--shift-push-radius", "0px")
                        currentXRef.current = 0
                        currentRadiusRef.current = 0
                        lastSignatureRef.current = ""
                        ownerRef.current = ""
                        openRef.current = false
                        activeRef.current = false
                        startTransition(() => {
                            setOpenState(false)
                            setActiveState(false)
                        })
                        return
                    }
                    if (ownerRef.current && ownerRef.current !== detail.ownerId) return
                    if (!Number.isFinite(detail.width) || !Number.isFinite(detail.radius)) return
                    if (!Number.isFinite(detail.openDuration) || !Number.isFinite(detail.closeDuration)) return

                    const nextX = detail.open ? -Math.max(0, detail.width) : 0
                    const fallbackTransition = detail.open
                        ? { type: "tween" as const, duration: detail.openDuration, delay: 0, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }
                        : { type: "tween" as const, duration: detail.closeDuration, delay: 0, ease: [0.82, -0.01, 0.88, 0.77] as [number, number, number, number] }
                    const transitionConfig = sanitizeTransition(
                        detail.open ? detail.openTransition : detail.closeTransition,
                        fallbackTransition
                    )
                    const motionReduced = reducedMotion || detail.reducedMotion
                    const duration = motionReduced ? 0 : transitionConfig.duration
                    const target = rootRef.current
                    if (!target) return
                    if (!detail.open && !activeRef.current && nextX === 0) return
                    const nextRadius = detail.open ? Math.max(0, detail.radius) : 0
                    const signature = stableStringify({
                        open: detail.open,
                        x: nextX,
                        radius: nextRadius,
                        reduced: motionReduced,
                        transition: transitionConfig,
                    })
                    if (signature === lastSignatureRef.current) return
                    lastSignatureRef.current = signature

                    ownerRef.current = detail.ownerId
                    const nextActive = detail.open || activeRef.current
                    openRef.current = detail.open
                    activeRef.current = nextActive
                    startTransition(() => {
                        setOpenState(detail.open)
                        setActiveState(nextActive)
                    })

                    xAnimRef.current?.stop?.()
                    radiusAnimRef.current?.stop?.()
                    generationRef.current += 1
                    const gen = generationRef.current

                    if (motionReduced) {
                        currentXRef.current = nextX
                        currentRadiusRef.current = nextRadius
                        target.style.setProperty("--shift-push-x", \`\${nextX}px\`)
                        target.style.setProperty("--shift-push-radius", \`\${nextRadius}px\`)
                        openRef.current = detail.open
                        activeRef.current = detail.open
                        startTransition(() => {
                            setOpenState(detail.open)
                            setActiveState(detail.open)
                        })
                        return
                    }

                    const baseOptions: Record<string, any> =
                        transitionConfig.type === "spring"
                            ? {
                                  type: "spring",
                                  duration: transitionConfig.duration,
                                  delay: transitionConfig.delay,
                                  stiffness: transitionConfig.stiffness,
                                  damping: transitionConfig.damping,
                                  mass: transitionConfig.mass,
                                  bounce: transitionConfig.bounce,
                                  restSpeed: transitionConfig.restSpeed,
                                  restDelta: transitionConfig.restDelta,
                                  velocity: transitionConfig.velocity,
                              }
                            : {
                                  type: "tween",
                                  duration,
                                  delay: transitionConfig.delay,
                                  ease:
                                      transitionConfig.ease ??
                                      (detail.open ? ([0.32, 0.72, 0, 1] as [number, number, number, number]) : ([0.82, -0.01, 0.88, 0.77] as [number, number, number, number])),
                              }

                    radiusAnimRef.current = animate(currentRadiusRef.current, nextRadius, {
                        ...baseOptions,
                        onUpdate: (value) => {
                            currentRadiusRef.current = value
                            target.style.setProperty("--shift-push-radius", \`\${value}px\`)
                        },
                    })

                    xAnimRef.current = animate(currentXRef.current, nextX, {
                        ...baseOptions,
                        onUpdate: (value) => {
                            currentXRef.current = value
                            target.style.setProperty("--shift-push-x", \`\${value}px\`)
                        },
                        onComplete: () => {
                            if (gen !== generationRef.current) return
                            openRef.current = detail.open
                            activeRef.current = detail.open
                            startTransition(() => {
                                setOpenState(detail.open)
                                setActiveState(detail.open)
                            })
                        },
                    })
                }

                window.addEventListener(SHIFT_STATE_EVENT, onState as EventListener)
                const onUnload = () => {
                    window.removeEventListener(SHIFT_STATE_EVENT, onState as EventListener)
                    xAnimRef.current?.stop?.()
                    radiusAnimRef.current?.stop?.()
                    generationRef.current += 1
                    lastSignatureRef.current = ""
                }
                if (isCanvasHost) window.addEventListener("unload", onUnload)
                window.dispatchEvent(
                    new CustomEvent<ShiftRequestDetail>(SHIFT_REQUEST_EVENT, { detail: { targetId: localId } })
                )
                return () => {
                    window.removeEventListener(SHIFT_STATE_EVENT, onState as EventListener)
                    if (isCanvasHost) window.removeEventListener("unload", onUnload)
                    xAnimRef.current?.stop?.()
                    radiusAnimRef.current?.stop?.()
                    generationRef.current += 1
                    lastSignatureRef.current = ""
                }
            }, [isStatic, localId, reducedMotion])

            if (isStatic) return <Component {...props} ref={mergedRef} />

            return (
                <Component
                    {...props}
                    ref={mergedRef}
                    inert={props.inert}
                    aria-hidden={props["aria-hidden"]}
                    style={{
                        ...props.style,
                        ...(activeState
                            ? {
                                  translate: "var(--shift-push-x, 0px) 0px",
                                  borderRadius: "var(--shift-push-radius, 0px)",
                              }
                            : null),
                    }}
                />
            )
        }) as unknown as ComponentType
}
`,displayTextArea:!0,title:`Override Code`,type:E.String},onKkRri24UdChange:{changes:`KkRri24Ud`,type:E.ChangeHandler},VwPP62wTS:{title:`Home Link`,type:E.Link},ccCtHUoTt:{title:`Work Link`,type:E.Link},lZmYQ3Ub3:{title:`Studio Link`,type:E.Link},xWs6oo6du:{title:`Contact Link`,type:E.Link},pZHWm1u71:{title:`Email Link`,type:E.Link},rcF4lpp9o:{title:`Instagram Link`,type:E.Link},fs8tCF0ox:{title:`Linked In Link`,type:E.Link},EGkYzYKqt:{title:`Twitter Link`,type:E.Link},p_GZ0pSYg:{title:`Phone Link`,type:E.Link},HsJUYW36o:{defaultValue:`rgb(238, 239, 120)`,title:`Hover Fill`,type:E.Color},axnAWdIZu:{defaultValue:{delay:0,duration:.7,ease:[.32,.72,0,1],type:`tween`},title:`Open Transition`,type:E.Transition},tKrYkJa5D:{defaultValue:{delay:0,duration:.6,ease:[.46,.03,.52,.95],type:`tween`},title:`Close Transition`,type:E.Transition},e0NBq8DJx:{defaultValue:`rgba(0, 0, 0, 0.3)`,title:`Page Dim`,type:E.Color}}),v(Q,[{explicitInter:!0,fonts:[{cssFamilyName:`Geist Mono`,source:`google`,style:`normal`,uiFamilyName:`Geist Mono`,url:`https://fonts.gstatic.com/s/geistmono/v6/or3yQ6H-1_WfwkMZI_qYPLs1a-t7PU0AbeE9KJ5W7ihaO_CS.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,weight:`500`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,weight:`500`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,weight:`500`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,weight:`500`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,weight:`500`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,weight:`500`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2`,weight:`500`}]},...Ee,...De],{supportsExplicitInterCodegen:!0}),Q.loader={load:(e,t)=>C([()=>O(K,{},t)],t)}})),dt,ft,pt,mt,ht,gt,_t,vt,yt,$,bt;e((()=>{l(),x(),_(),n(),ut(),fe(),dt=b(Q),ft={},pt=[],mt=`framer-GQZ5N`,ht={aCn2uYoeR:`framer-v-1v3a7qh`},gt=(e,t,n)=>e&&t?`position`:n,_t=(...e)=>{for(let t of e)if(t&&typeof t==`string`)return t},vt=({value:e})=>M()?null:d(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),yt=({height:e,id:t,width:n,...r})=>({...r}),$=T(u(function(e,t){let n=te(null),i=t??n,a=r(),{activeLocale:c,setLocale:l}=ie(),ee=ae(),{style:u,className:g,layoutId:_,variant:v,...b}=yt(e);ce(s(()=>F({},c),[c]));let[x,S]=w(v,ft,!1),C=y(mt),ne=o(k)?.isLayoutTemplate,T=!!o(h)?.transition?.layout,re=gt(ne,T);return D({}),d(k.Provider,{value:{activeVariantId:x,primaryVariantId:`aCn2uYoeR`,variantClassNames:ht},children:f(m,{id:_??a,children:[d(vt,{value:`html body { background: rgb(255, 255, 255); }`}),d(p.div,{...b,className:y(C,`framer-1v3a7qh`,g),ref:i,style:{...u},children:d(j,{height:80,width:`1200px`,y:(ee?.y||0)+0+0,children:d(N,{className:`framer-1jhhjjm-container`,isModuleExternal:!0,layout:re,nodeId:`KXFJHfEk3`,scopeId:`HoyQN6323`,children:d(Q,{Au4NRzSO1:0,axnAWdIZu:{delay:0,duration:.7,ease:[.32,.72,0,1],type:`tween`},e0NBq8DJx:`rgba(0, 0, 0, 0.3)`,height:`100%`,HsJUYW36o:`rgb(238, 239, 120)`,id:`KXFJHfEk3`,KkRri24Ud:`// Installation:
// 1) Group all page sections in one native stack named "Page Content".
// 2) Keep the native nav outside that stack.
// 3) Apply PushContent → withShiftContent to the Page Content stack once.
// 4) Preview.
import { RenderTarget, useIsStaticRenderer } from "framer"
import { animate, useReducedMotion } from "framer-motion"
import {
    ComponentType,
    forwardRef,
    startTransition,
    useCallback,
    useEffect,
    useId,
    useRef,
    useState,
} from "react"

type ShiftEventDetail = {
    ownerId: string
    open: boolean
    width: number
    radius: number
    openDuration: number
    closeDuration: number
    openTransition?: TransitionPayload
    closeTransition?: TransitionPayload
    reducedMotion: boolean
    reset: boolean
}

type TransitionType = "tween" | "spring"
type EaseName =
    | "linear"
    | "easeIn"
    | "easeOut"
    | "easeInOut"
    | "circIn"
    | "circOut"
    | "circInOut"
    | "backIn"
    | "backOut"
    | "backInOut"
    | "anticipate"

type TransitionPayload = {
    type?: TransitionType
    duration?: number
    delay?: number
    ease?: EaseName | [number, number, number, number]
    stiffness?: number
    damping?: number
    mass?: number
    bounce?: number
    restSpeed?: number
    restDelta?: number
    velocity?: number
}

type ShiftRequestDetail = {
    targetId: string
}

const SHIFT_STATE_EVENT = "spm:state"
const SHIFT_REQUEST_EVENT = "spm:request"

function toFinite(value: any): number | undefined {
    return typeof value === "number" && Number.isFinite(value) ? value : undefined
}

function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value))
}

function isValidEaseArray(value: any): value is [number, number, number, number] {
    if (!Array.isArray(value) || value.length !== 4) return false
    const [x1, y1, x2, y2] = value
    if (![x1, y1, x2, y2].every((v) => typeof v === "number" && Number.isFinite(v))) return false
    return x1 >= 0 && x1 <= 1 && x2 >= 0 && x2 <= 1
}

function isValidEaseName(value: any): value is EaseName {
    return (
        value === "linear" ||
        value === "easeIn" ||
        value === "easeOut" ||
        value === "easeInOut" ||
        value === "circIn" ||
        value === "circOut" ||
        value === "circInOut" ||
        value === "backIn" ||
        value === "backOut" ||
        value === "backInOut" ||
        value === "anticipate"
    )
}

function sanitizeTransition(
    transition: TransitionPayload | undefined,
    fallback: { type: "tween"; duration: number; delay: number; ease: [number, number, number, number] }
) {
    const source = transition && typeof transition === "object" ? transition : {}
    const type = source.type === "spring" ? "spring" : "tween"
    const duration = Math.max(0, toFinite(source.duration) ?? fallback.duration)
    const delay = Math.max(0, toFinite(source.delay) ?? fallback.delay)
    const ease = isValidEaseArray(source.ease)
        ? source.ease
        : isValidEaseName(source.ease)
          ? source.ease
          : fallback.ease
    const result: Record<string, any> = { type, duration, delay }
    if (type === "tween") {
        result.ease = ease
    } else {
        const stiffness = toFinite(source.stiffness)
        const damping = toFinite(source.damping)
        const mass = toFinite(source.mass)
        const bounce = toFinite(source.bounce)
        const restSpeed = toFinite(source.restSpeed)
        const restDelta = toFinite(source.restDelta)
        const velocity = toFinite(source.velocity)
        if (stiffness !== undefined) result.stiffness = clamp(stiffness, 1, 2000)
        if (damping !== undefined) result.damping = clamp(damping, 0.01, 500)
        if (mass !== undefined) result.mass = clamp(mass, 0.01, 100)
        if (bounce !== undefined) result.bounce = clamp(bounce, 0, 1)
        if (restSpeed !== undefined) result.restSpeed = clamp(restSpeed, 0.01, 200)
        if (restDelta !== undefined) result.restDelta = clamp(restDelta, 0.00001, 1)
        if (velocity !== undefined) result.velocity = velocity
    }
    return result
}

function stableStringify(value: any): string {
    if (Array.isArray(value)) return \`[\${value.map(stableStringify).join(",")}]\`
    if (!value || typeof value !== "object") return JSON.stringify(value)
    const keys = Object.keys(value).sort()
    return \`{\${keys.map((key) => \`\${JSON.stringify(key)}:\${stableStringify(value[key])}\`).join(",")}}\`
}

export function withShiftContent(Component: ComponentType): ComponentType {
    return forwardRef(function ShiftContentOverride(props: any, ref) {
            const localId = useId().replace(/:/g, "")
            const rootRef = useRef<HTMLElement | null>(null)
            const ownerRef = useRef<string>("")
            const [openState, setOpenState] = useState(false)
            const [activeState, setActiveState] = useState(false)
            const openRef = useRef(false)
            const activeRef = useRef(false)
            const xAnimRef = useRef<{ stop?: () => void } | null>(null)
            const radiusAnimRef = useRef<{ stop?: () => void } | null>(null)
            const currentXRef = useRef(0)
            const currentRadiusRef = useRef(0)
            const lastSignatureRef = useRef("")
            const generationRef = useRef(0)
            const isStaticRenderer = useIsStaticRenderer()
            const isCanvas = RenderTarget.current() === RenderTarget.canvas
            const isStatic = isStaticRenderer || isCanvas
            const reducedMotion = useReducedMotion()
            const prevVarRef = useRef("")
            const prevRadiusRef = useRef("")
            const prevVarPriorityRef = useRef("")
            const prevRadiusPriorityRef = useRef("")

            const mergedRef = useCallback(
                (node: any) => {
                    rootRef.current = node as HTMLElement | null
                    if (typeof ref === "function") ref(node)
                    else if (ref && typeof ref === "object") (ref as any).current = node
                },
                [ref]
            )

            useEffect(() => {
                if (isStatic) return
                const el = rootRef.current
                if (!el) return
                prevVarRef.current = el.style.getPropertyValue("--shift-push-x")
                prevRadiusRef.current = el.style.getPropertyValue("--shift-push-radius")
                prevVarPriorityRef.current = el.style.getPropertyPriority("--shift-push-x")
                prevRadiusPriorityRef.current = el.style.getPropertyPriority("--shift-push-radius")
                if (!el.style.getPropertyValue("--shift-push-x")) el.style.setProperty("--shift-push-x", "0px")
                if (!el.style.getPropertyValue("--shift-push-radius")) el.style.setProperty("--shift-push-radius", "0px")
                return () => {
                    xAnimRef.current?.stop?.()
                    radiusAnimRef.current?.stop?.()
                    if (prevVarRef.current) el.style.setProperty("--shift-push-x", prevVarRef.current, prevVarPriorityRef.current)
                    else el.style.removeProperty("--shift-push-x")
                    if (prevRadiusRef.current) {
                        el.style.setProperty("--shift-push-radius", prevRadiusRef.current, prevRadiusPriorityRef.current)
                    } else el.style.removeProperty("--shift-push-radius")
                }
            }, [isStatic])

            useEffect(() => {
                if (isStatic || typeof window === "undefined") return
                const host = window.location?.hostname ?? ""
                const isCanvasHost = host === "framercanvas.com" || host.endsWith(".framercanvas.com")

                const onState = (event: Event) => {
                    const detail = (event as CustomEvent<ShiftEventDetail>).detail
                    if (!detail) return
                    if (detail.reset) {
                        if (!ownerRef.current || ownerRef.current !== detail.ownerId) return
                        const target = rootRef.current
                        if (!target) return
                        xAnimRef.current?.stop?.()
                        radiusAnimRef.current?.stop?.()
                        generationRef.current += 1
                        target.style.setProperty("--shift-push-x", "0px")
                        target.style.setProperty("--shift-push-radius", "0px")
                        currentXRef.current = 0
                        currentRadiusRef.current = 0
                        lastSignatureRef.current = ""
                        ownerRef.current = ""
                        openRef.current = false
                        activeRef.current = false
                        startTransition(() => {
                            setOpenState(false)
                            setActiveState(false)
                        })
                        return
                    }
                    if (ownerRef.current && ownerRef.current !== detail.ownerId) return
                    if (!Number.isFinite(detail.width) || !Number.isFinite(detail.radius)) return
                    if (!Number.isFinite(detail.openDuration) || !Number.isFinite(detail.closeDuration)) return

                    const nextX = detail.open ? -Math.max(0, detail.width) : 0
                    const fallbackTransition = detail.open
                        ? { type: "tween" as const, duration: detail.openDuration, delay: 0, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }
                        : { type: "tween" as const, duration: detail.closeDuration, delay: 0, ease: [0.82, -0.01, 0.88, 0.77] as [number, number, number, number] }
                    const transitionConfig = sanitizeTransition(
                        detail.open ? detail.openTransition : detail.closeTransition,
                        fallbackTransition
                    )
                    const motionReduced = reducedMotion || detail.reducedMotion
                    const duration = motionReduced ? 0 : transitionConfig.duration
                    const target = rootRef.current
                    if (!target) return
                    if (!detail.open && !activeRef.current && nextX === 0) return
                    const nextRadius = detail.open ? Math.max(0, detail.radius) : 0
                    const signature = stableStringify({
                        open: detail.open,
                        x: nextX,
                        radius: nextRadius,
                        reduced: motionReduced,
                        transition: transitionConfig,
                    })
                    if (signature === lastSignatureRef.current) return
                    lastSignatureRef.current = signature

                    ownerRef.current = detail.ownerId
                    const nextActive = detail.open || activeRef.current
                    openRef.current = detail.open
                    activeRef.current = nextActive
                    startTransition(() => {
                        setOpenState(detail.open)
                        setActiveState(nextActive)
                    })

                    xAnimRef.current?.stop?.()
                    radiusAnimRef.current?.stop?.()
                    generationRef.current += 1
                    const gen = generationRef.current

                    if (motionReduced) {
                        currentXRef.current = nextX
                        currentRadiusRef.current = nextRadius
                        target.style.setProperty("--shift-push-x", \`\${nextX}px\`)
                        target.style.setProperty("--shift-push-radius", \`\${nextRadius}px\`)
                        openRef.current = detail.open
                        activeRef.current = detail.open
                        startTransition(() => {
                            setOpenState(detail.open)
                            setActiveState(detail.open)
                        })
                        return
                    }

                    const baseOptions: Record<string, any> =
                        transitionConfig.type === "spring"
                            ? {
                                  type: "spring",
                                  duration: transitionConfig.duration,
                                  delay: transitionConfig.delay,
                                  stiffness: transitionConfig.stiffness,
                                  damping: transitionConfig.damping,
                                  mass: transitionConfig.mass,
                                  bounce: transitionConfig.bounce,
                                  restSpeed: transitionConfig.restSpeed,
                                  restDelta: transitionConfig.restDelta,
                                  velocity: transitionConfig.velocity,
                              }
                            : {
                                  type: "tween",
                                  duration,
                                  delay: transitionConfig.delay,
                                  ease:
                                      transitionConfig.ease ??
                                      (detail.open ? ([0.32, 0.72, 0, 1] as [number, number, number, number]) : ([0.82, -0.01, 0.88, 0.77] as [number, number, number, number])),
                              }

                    radiusAnimRef.current = animate(currentRadiusRef.current, nextRadius, {
                        ...baseOptions,
                        onUpdate: (value) => {
                            currentRadiusRef.current = value
                            target.style.setProperty("--shift-push-radius", \`\${value}px\`)
                        },
                    })

                    xAnimRef.current = animate(currentXRef.current, nextX, {
                        ...baseOptions,
                        onUpdate: (value) => {
                            currentXRef.current = value
                            target.style.setProperty("--shift-push-x", \`\${value}px\`)
                        },
                        onComplete: () => {
                            if (gen !== generationRef.current) return
                            openRef.current = detail.open
                            activeRef.current = detail.open
                            startTransition(() => {
                                setOpenState(detail.open)
                                setActiveState(detail.open)
                            })
                        },
                    })
                }

                window.addEventListener(SHIFT_STATE_EVENT, onState as EventListener)
                const onUnload = () => {
                    window.removeEventListener(SHIFT_STATE_EVENT, onState as EventListener)
                    xAnimRef.current?.stop?.()
                    radiusAnimRef.current?.stop?.()
                    generationRef.current += 1
                    lastSignatureRef.current = ""
                }
                if (isCanvasHost) window.addEventListener("unload", onUnload)
                window.dispatchEvent(
                    new CustomEvent<ShiftRequestDetail>(SHIFT_REQUEST_EVENT, { detail: { targetId: localId } })
                )
                return () => {
                    window.removeEventListener(SHIFT_STATE_EVENT, onState as EventListener)
                    if (isCanvasHost) window.removeEventListener("unload", onUnload)
                    xAnimRef.current?.stop?.()
                    radiusAnimRef.current?.stop?.()
                    generationRef.current += 1
                    lastSignatureRef.current = ""
                }
            }, [isStatic, localId, reducedMotion])

            if (isStatic) return <Component {...props} ref={mergedRef} />

            return (
                <Component
                    {...props}
                    ref={mergedRef}
                    inert={props.inert}
                    aria-hidden={props["aria-hidden"]}
                    style={{
                        ...props.style,
                        ...(activeState
                            ? {
                                  translate: "var(--shift-push-x, 0px) 0px",
                                  borderRadius: "var(--shift-push-radius, 0px)",
                              }
                            : null),
                    }}
                />
            )
        }) as unknown as ComponentType
}
`,layoutId:`KXFJHfEk3`,P0YdDc906:`snjxaIzGr`,style:{height:`100%`,width:`100%`},tKrYkJa5D:{delay:0,duration:.6,ease:[.46,.03,.52,.95],type:`tween`},variant:_t(`pacHJjAuP`),width:`100%`})})})}),d(`div`,{id:`overlay`})]})})}),[`.framer-GQZ5N.framer-1n6kfes, .framer-GQZ5N .framer-1n6kfes { display: block; }`,`.framer-GQZ5N.framer-1v3a7qh { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-GQZ5N .framer-1jhhjjm-container { flex: none; height: 80px; position: relative; width: 1200px; }`],`framer-GQZ5N`),$.displayName=`Page`,$.defaultProps={height:1e3,width:1200},v($,[{explicitInter:!0,fonts:[]},...dt],{supportsExplicitInterCodegen:!0}),$.loader={load:(e,t)=>C([()=>O(Q,{},t)],t)},bt={exports:{queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`FramerHoyQN6323`,slots:[],annotations:{framerColorSyntax:`true`,framerLayoutTemplateFlowEffect:`true`,framerContractVersion:`1`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,framerIntrinsicHeight:`1000`,framerImmutableVariables:`true`,framerResponsiveScreen:`true`,framerIntrinsicWidth:`1200`,framerDisplayContentsDiv:`false`,framerComponentViewportWidth:`true`,framerScrollSections:`false`,framerAcceptsLayoutTemplate:`true`,framerAutoSizeImages:`true`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}))();export{bt as __FramerMetadata__,$ as default,pt as queryParamNames};
//# sourceMappingURL=K3dZDx2MsQKJp5CnGD-XLLDISjfzirQViz5o023OULY.zzmvZx5r.mjs.map