import React from 'react'
import { AnimatePresence, LayoutGroup, LazyMotion, MotionConfig, domAnimation, m, useReducedMotion } from 'motion/react'

export const motionTokens={
  ease:[.22,1,.36,1],
  easeSoft:[.16,1,.3,1],
  spring:{type:'spring',stiffness:340,damping:32,mass:.8},
  springSnappy:{type:'spring',stiffness:460,damping:36,mass:.68},
  springSoft:{type:'spring',stiffness:240,damping:30,mass:.9},
  duration:{instant:.12,fast:.18,base:.32,slow:.5,cinematic:.72},
  hover:{y:-3,scale:1.006},
  tap:{scale:.985},
}

export const motionVariants={
  fadeUp:{
    hidden:{opacity:0,y:12},
    visible:{opacity:1,y:0,transition:{duration:.5,ease:motionTokens.ease}},
  },
  softScale:{
    hidden:{opacity:0,scale:.985,y:8},
    visible:{opacity:1,scale:1,y:0,transition:motionTokens.springSoft},
  },
  stagger:{
    hidden:{},
    visible:{transition:{staggerChildren:.055,delayChildren:.04}},
  },
  item:{
    hidden:{opacity:0,y:10,scale:.992},
    visible:{opacity:1,y:0,scale:1,transition:motionTokens.springSoft},
  },
}

export function AppMotionProvider({children}){
  return <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user" transition={motionTokens.spring}>
      <LayoutGroup id="lagom-storefront">{children}</LayoutGroup>
    </MotionConfig>
  </LazyMotion>
}

export function RouteMotion({routeKey,children}){
  const reduceMotion=useReducedMotion()
  const initial=reduceMotion?{opacity:1}:{opacity:0,y:8,scale:.998,filter:'blur(1.5px)'}
  const animate={opacity:1,y:0,scale:1,filter:'blur(0px)'}
  const exit=reduceMotion?{opacity:1}:{opacity:0,y:-4,scale:1.001,filter:'blur(.75px)'}
  return <AnimatePresence mode="popLayout" initial={false}>
    <m.div key={routeKey} className="route-stage" initial={initial} animate={animate} exit={exit} transition={reduceMotion?{duration:0}:{duration:motionTokens.duration.base,ease:motionTokens.ease}}>{children}</m.div>
  </AnimatePresence>
}

export function Reveal({children,className,delay=0,amount=.14,once=true,...props}){
  const reduceMotion=useReducedMotion()
  return <m.div className={className} initial={reduceMotion?false:'hidden'} whileInView="visible" viewport={{once,amount}} variants={motionVariants.fadeUp} transition={delay?{delay}:undefined} {...props}>{children}</m.div>
}

export function Stagger({children,className,amount=.1,once=true,...props}){
  const reduceMotion=useReducedMotion()
  return <m.div className={className} initial={reduceMotion?false:'hidden'} whileInView="visible" viewport={{once,amount}} variants={motionVariants.stagger} {...props}>{children}</m.div>
}

export function StaggerItem({children,className,...props}){
  return <m.div className={className} variants={motionVariants.item} {...props}>{children}</m.div>
}

export function Presence({children,mode='sync',initial=false,onExitComplete}){
  return <AnimatePresence mode={mode} initial={initial} onExitComplete={onExitComplete}>{children}</AnimatePresence>
}

export {m,useReducedMotion}
