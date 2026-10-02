import React from 'react'
import { AnimatePresence, LayoutGroup, LazyMotion, MotionConfig, domMax, m, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'

export const motionTokens={
  ease:[.22,.82,.28,1],
  easeSoft:[.16,1,.3,1],
  easeExit:[.4,0,.2,1],
  easeLinear:[0,0,1,1],
  spring:{type:'spring',stiffness:210,damping:27,mass:.94},
  springSoft:{type:'spring',stiffness:165,damping:25,mass:1.02},
  springSnappy:{type:'spring',stiffness:330,damping:31,mass:.82},
  springDrawer:{type:'spring',stiffness:185,damping:27,mass:1.02},
  springMedia:{type:'spring',stiffness:145,damping:24,mass:1.06},
  duration:{instant:.14,micro:.18,fast:.22,control:.3,base:.38,slow:.56,cinematic:.74,atmosphere:1.08},
  hover:{y:-2,scale:1.006},
  tap:{scale:.982},
}

export const motionTransitions={
  fade:{duration:motionTokens.duration.control,ease:motionTokens.ease},
  enter:{duration:motionTokens.duration.slow,ease:motionTokens.easeSoft},
  exit:{duration:motionTokens.duration.fast,ease:motionTokens.easeExit},
  scene:{duration:motionTokens.duration.cinematic,ease:motionTokens.easeSoft},
  atmosphere:{duration:motionTokens.duration.atmosphere,ease:motionTokens.easeSoft},
}

export const motionVariants={
  fadeUp:{
    hidden:{opacity:0,y:12},
    visible:{opacity:1,y:0,transition:{duration:motionTokens.duration.slow,ease:motionTokens.easeSoft}},
    exit:{opacity:0,y:-4,transition:motionTransitions.exit},
  },
  softScale:{
    hidden:{opacity:0,scale:.986,y:8},
    visible:{opacity:1,scale:1,y:0,transition:motionTokens.springSoft},
    exit:{opacity:0,scale:.992,y:-3,transition:motionTransitions.exit},
  },
  stagger:{
    hidden:{},
    visible:{transition:{staggerChildren:.055,delayChildren:.04}},
    exit:{transition:{staggerChildren:.025,staggerDirection:-1}},
  },
  item:{
    hidden:{opacity:0,y:10,scale:.994},
    visible:{opacity:1,y:0,scale:1,transition:motionTokens.springSoft},
    exit:{opacity:0,y:-3,scale:.996,transition:motionTransitions.exit},
  },
  drawerItem:{
    hidden:{opacity:0,y:8},
    visible:{opacity:1,y:0,transition:motionTokens.springSoft},
    exit:{opacity:0,y:-2,transition:motionTransitions.exit},
  },
}

export function AppMotionProvider({children}){
  return <LazyMotion features={domMax} strict>
    <MotionConfig reducedMotion="user">
      <LayoutGroup id="lagom-storefront">{children}</LayoutGroup>
    </MotionConfig>
  </LazyMotion>
}

export function RouteMotion({routeKey,navigationType='PUSH',children}){
  const reduceMotion=useReducedMotion()
  const desktop=typeof window!=='undefined'&&window.matchMedia('(min-width:900px)').matches
  const returning=navigationType==='POP'
  return <AnimatePresence mode="popLayout" initial={false}>
    <m.div
      key={routeKey}
      className="route-stage"
      initial={reduceMotion?false:{opacity:.84,y:desktop?(returning?-3:6):0}}
      animate={{opacity:1,y:0,transition:{duration:returning?motionTokens.duration.base:motionTokens.duration.slow,ease:motionTokens.easeSoft}}}
      exit={reduceMotion?{opacity:1,y:0}:{opacity:.76,y:desktop?(returning?3:-3):0,transition:motionTransitions.exit}}
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

export {m,useMotionValue,useReducedMotion,useSpring,useTransform}
