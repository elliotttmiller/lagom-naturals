import React from 'react'
import { AnimatePresence, LayoutGroup, LazyMotion, MotionConfig, domAnimation, m, useAnimationControls, useReducedMotion } from 'motion/react'

export const motionTokens={
  ease:[.22,1,.36,1],
  easeSoft:[.16,1,.3,1],
  spring:{type:'spring',stiffness:360,damping:34,mass:.76},
  springSnappy:{type:'spring',stiffness:500,damping:38,mass:.62},
  springSoft:{type:'spring',stiffness:260,damping:31,mass:.86},
  duration:{instant:.1,fast:.16,base:.28,slow:.46,cinematic:.68},
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
    visible:{transition:{staggerChildren:.045,delayChildren:.025}},
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

export function RouteMotion({routeKey,children}){
  const reduceMotion=useReducedMotion()
  const controls=useAnimationControls()

  React.useEffect(()=>{
    if(reduceMotion){
      controls.set({opacity:1,y:0})
      return
    }

    controls.set({opacity:.94,y:5})
    controls.start({
      opacity:1,
      y:0,
      transition:{duration:motionTokens.duration.base,ease:motionTokens.ease},
    })
  },[controls,reduceMotion,routeKey])

  return <m.div className="route-stage" initial={false} animate={controls}>{children}</m.div>
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
