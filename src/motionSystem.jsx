import React from 'react'
import { AnimatePresence, LayoutGroup, LazyMotion, MotionConfig, domAnimation, m, useReducedMotion } from 'motion/react'

export const motionTokens={
  ease:[.22,.82,.28,1],
  easeSoft:[.16,1,.3,1],
  easeExit:[.4,0,.2,1],
  spring:{type:'spring',stiffness:220,damping:28,mass:.92},
  springSnappy:{type:'spring',stiffness:300,damping:30,mass:.84},
  springSoft:{type:'spring',stiffness:170,damping:26,mass:1.02},
  duration:{instant:.16,fast:.22,base:.36,slow:.56,cinematic:.76,ambient:1.1},
  hover:{y:-2,scale:1.006},
  tap:{scale:.982},
}

export const motionVariants={
  fadeUp:{
    hidden:{opacity:0,y:10},
    visible:{opacity:1,y:0,transition:{duration:motionTokens.duration.slow,ease:motionTokens.ease}},
  },
  softScale:{
    hidden:{opacity:0,scale:.988,y:7},
    visible:{opacity:1,scale:1,y:0,transition:motionTokens.springSoft},
  },
  stagger:{
    hidden:{},
    visible:{transition:{staggerChildren:.065,delayChildren:.045}},
  },
  item:{
    hidden:{opacity:0,y:9,scale:.994},
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

export function RouteMotion({routeKey,navigationType='PUSH',children}){
  const reduceMotion=useReducedMotion()
  const desktop=typeof window!=='undefined'&&window.matchMedia('(min-width:900px)').matches
  const returning=navigationType==='POP'
  // `wait` leaves a fully empty viewport between pages. Keep the outgoing
  // screen present while the next route settles in so navigation reads as one
  // continuous composition instead of a flash to the page background.
  return <AnimatePresence mode="popLayout" initial={false}>
    <m.div
      key={routeKey}
      className="route-stage"
      initial={reduceMotion?false:{opacity:.82,y:desktop?(returning?-3:6):0}}
      animate={{opacity:1,y:0,transition:{duration:returning?motionTokens.duration.base:motionTokens.duration.slow,ease:motionTokens.easeSoft}}}
      exit={reduceMotion?{opacity:1,y:0}:{opacity:.72,y:desktop?(returning?4:-3):0,transition:{duration:motionTokens.duration.fast,ease:motionTokens.easeExit}}}
      style={{filter:'none'}}
    >{children}</m.div>
  </AnimatePresence>
}

export function Reveal({children,className,delay=0,amount=.14,once=true,...props}){
  const reduceMotion=useReducedMotion()
  return <m.div
    className={className}
    initial={reduceMotion?false:'hidden'}
    whileInView="visible"
    viewport={{once,amount}}
    variants={motionVariants.fadeUp}
    transition={delay?{delay}:undefined}
    {...props}
  >{children}</m.div>
}

export function Stagger({children,className,amount=.1,once=true,...props}){
  const reduceMotion=useReducedMotion()
  return <m.div
    className={className}
    initial={reduceMotion?false:'hidden'}
    whileInView="visible"
    viewport={{once,amount}}
    variants={motionVariants.stagger}
    {...props}
  >{children}</m.div>
}

export function StaggerItem({children,className,...props}){
  return <m.div className={className} variants={motionVariants.item} {...props}>{children}</m.div>
}

export function Presence({children,mode='sync',initial=false,onExitComplete}){
  return <AnimatePresence mode={mode} initial={initial} onExitComplete={onExitComplete}>{children}</AnimatePresence>
}

export {m,useReducedMotion}
