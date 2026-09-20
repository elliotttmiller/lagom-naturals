import React from 'react'
import { AnimatePresence, LayoutGroup, LazyMotion, MotionConfig, domAnimation, m, useReducedMotion } from 'motion/react'

export const motionTokens={
  ease:[.22,.82,.28,1],
  easeSoft:[.18,.92,.26,1],
  spring:{type:'spring',stiffness:245,damping:29,mass:.9},
  springSnappy:{type:'spring',stiffness:320,damping:31,mass:.82},
  springSoft:{type:'spring',stiffness:190,damping:27,mass:1},
  duration:{instant:.14,fast:.22,base:.38,slow:.58,cinematic:.82},
  hover:{y:-3,scale:1.004},
  tap:{scale:.985},
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
  const returning=navigationType==='POP'
  // `wait` leaves a fully empty viewport between pages. Keep the outgoing
  // screen present while the next route settles in so navigation reads as one
  // continuous composition instead of a flash to the page background.
  return <AnimatePresence mode="popLayout" initial={false}>
    <m.div
      key={routeKey}
      className="route-stage"
      initial={reduceMotion?false:{opacity:.9}}
      animate={{opacity:1,transition:{duration:returning?motionTokens.duration.base:motionTokens.duration.slow,ease:motionTokens.easeSoft}}}
      exit={reduceMotion?{opacity:1}:{opacity:.5,transition:{duration:motionTokens.duration.base,ease:motionTokens.ease}}}
      style={{transform:'none',filter:'none'}}
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
