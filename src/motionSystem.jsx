import React from 'react'
import { AnimatePresence, LayoutGroup, LazyMotion, MotionConfig, domAnimation, m, useReducedMotion } from 'motion/react'

export const motionTokens={
  ease:[.22,1,.36,1],
  easeSoft:[.16,1,.3,1],
  spring:{type:'spring',stiffness:340,damping:32,mass:.8},
  springSnappy:{type:'spring',stiffness:460,damping:36,mass:.68},
  duration:{fast:.18,base:.32,slow:.5},
}

export function AppMotionProvider({children}){
  return <LazyMotion features={domAnimation} strict>
    <MotionConfig reducedMotion="user" transition={motionTokens.spring}>
      <LayoutGroup id="lagom-storefront">
        {children}
      </LayoutGroup>
    </MotionConfig>
  </LazyMotion>
}

export function RouteMotion({routeKey,children}){
  const reduceMotion=useReducedMotion()
  const initial=reduceMotion?{opacity:1}:{opacity:0,y:8,scale:.998,filter:'blur(1.5px)'}
  const animate={opacity:1,y:0,scale:1,filter:'blur(0px)'}
  const exit=reduceMotion?{opacity:1}:{opacity:0,y:-4,scale:1.001,filter:'blur(.75px)'}

  return <AnimatePresence mode="popLayout" initial={false}>
    <m.div
      key={routeKey}
      className="route-stage"
      initial={initial}
      animate={animate}
      exit={exit}
      transition={reduceMotion?{duration:0}:{duration:motionTokens.duration.base,ease:motionTokens.ease}}
    >
      {children}
    </m.div>
  </AnimatePresence>
}

export function Presence({children,mode='sync',initial=false}){
  return <AnimatePresence mode={mode} initial={initial}>{children}</AnimatePresence>
}

export {m,useReducedMotion}
