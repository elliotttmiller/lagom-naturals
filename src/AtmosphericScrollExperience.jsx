import React, { useEffect, useMemo, useRef, useState } from "react";
import { useScroll, useSpring, useTransform } from "motion/react";
import { m, useReducedMotion } from "@/motionSystem";


const MOTION_PROFILES = {
  desktop: {
    globalSpring: { stiffness: 86, damping: 30, mass: 0.82, restDelta: 0.001 },
    sectionSpring: { stiffness: 105, damping: 32, mass: 0.72, restDelta: 0.002 },
  },
  tablet: {
    globalSpring: { stiffness: 104, damping: 32, mass: 0.7, restDelta: 0.0015 },
    sectionSpring: { stiffness: 122, damping: 34, mass: 0.64, restDelta: 0.002 },
  },
  phone: {
    globalSpring: { stiffness: 104, damping: 28, mass: 0.68, restDelta: 0.0015 },
    sectionSpring: { stiffness: 118, damping: 30, mass: 0.62, restDelta: 0.002 },
  },
};

function useViewportMotionProfile() {
  const [profile, setProfile] = useState(() => {
    if (typeof window === "undefined") return "desktop";
    if (window.matchMedia("(max-width: 699px)").matches) return "phone";
    if (window.matchMedia("(max-width: 899px)").matches) return "tablet";
    return "desktop";
  });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const phone = window.matchMedia("(max-width: 699px)");
    const tablet = window.matchMedia("(max-width: 899px)");
    const update = () => setProfile(phone.matches ? "phone" : tablet.matches ? "tablet" : "desktop");
    update();
    if (phone.addEventListener) phone.addEventListener("change", update);
    else phone.addListener?.(update);
    if (tablet.addEventListener) tablet.addEventListener("change", update);
    else tablet.addListener?.(update);
    return () => {
      if (phone.removeEventListener) phone.removeEventListener("change", update);
      else phone.removeListener?.(update);
      if (tablet.removeEventListener) tablet.removeEventListener("change", update);
      else tablet.removeListener?.(update);
    };
  }, []);

  return profile;
}

export function useAtmosphericHomepageScroll(rootRef) {
  const reduceMotion = useReducedMotion();
  const motionProfile = useViewportMotionProfile();
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, MOTION_PROFILES[motionProfile].globalSpring);

  // A shared progress curve keeps the atmosphere coherent while each plane
  // receives a distinct wind path. Phones deliberately use px for vertical
  // travel so Safari's dynamic browser chrome cannot resize vh mid-gesture.
  const windStops = [0, 0.16, 0.34, 0.52, 0.7, 0.86, 1];
  const isPhone = motionProfile === "phone";
  const isTablet = motionProfile === "tablet";

  const midXRange = isPhone
    ? ["0vw", "-0.35vw", "-0.15vw", "-0.8vw", "-0.5vw", "-1.3vw", "-1.15vw"]
    : isTablet
      ? ["0vw", "-0.8vw", "-0.3vw", "-1.8vw", "-1.1vw", "-3vw", "-2.6vw"]
      : ["0vw", "-1.1vw", "-0.4vw", "-2.5vw", "-1.45vw", "-4.15vw", "-3.5vw"];
  const midYRange = isPhone
    ? ["0px", "-14px", "-32px", "-52px", "-74px", "-98px", "-122px"]
    : isTablet
      ? ["0vh", "-1.8vh", "-4.6vh", "-7.5vh", "-10.8vh", "-14.5vh", "-17vh"]
      : ["0vh", "-2.5vh", "-6.5vh", "-10.5vh", "-15vh", "-20vh", "-24vh"];
  const midScaleRange = isPhone
    ? [1, 1.005, 1.01, 1.015, 1.021, 1.027, 1.032]
    : isTablet
      ? [1, 1.004, 1.008, 1.012, 1.016, 1.02, 1.023]
      : [1, 1.006, 1.012, 1.018, 1.021, 1.026, 1.03];
  const midRotateRange = isPhone
    ? ["0deg", "-0.03deg", "0.02deg", "-0.05deg", "0.02deg", "-0.03deg", "0deg"]
    : ["0deg", "-0.08deg", "0.05deg", "-0.14deg", "0.04deg", "-0.08deg", "0deg"];

  const nearXRange = isPhone
    ? ["0vw", "0.7vw", "0.3vw", "1.6vw", "1.1vw", "2.6vw", "3vw"]
    : isTablet
      ? ["0vw", "1vw", "0.45vw", "2.5vw", "1.8vw", "4vw", "4.7vw"]
      : ["0vw", "1.4vw", "0.6vw", "3.6vw", "2.5vw", "5.8vw", "6.8vw"];
  const nearYRange = isPhone
    ? ["0px", "-20px", "-44px", "-70px", "-98px", "-128px", "-158px"]
    : isTablet
      ? ["0vh", "-3vh", "-7vh", "-12vh", "-18vh", "-24vh", "-30vh"]
      : ["0vh", "-4vh", "-10vh", "-17vh", "-25vh", "-34vh", "-43vh"];
  const nearScaleRange = isPhone
    ? [1, 1.008, 1.016, 1.025, 1.034, 1.044, 1.052]
    : isTablet
      ? [1, 1.009, 1.018, 1.028, 1.037, 1.048, 1.055]
      : [1, 1.012, 1.028, 1.04, 1.052, 1.066, 1.078];
  const nearRotateRange = isPhone
    ? ["0deg", "0.04deg", "-0.02deg", "0.07deg", "0.02deg", "0.08deg", "0.04deg"]
    : ["0deg", "0.1deg", "-0.04deg", "0.18deg", "0.06deg", "0.22deg", "0.12deg"];

  const midX = useTransform(progress, windStops, midXRange);
  const midY = useTransform(progress, windStops, midYRange);
  const midScale = useTransform(progress, windStops, midScaleRange);
  const midRotate = useTransform(progress, windStops, midRotateRange);
  const midOpacity = useTransform(progress, windStops, isPhone ? [0.9, 0.97, 1, 0.96, 0.9, 0.97, 0.88] : [0.94, 0.98, 1, 0.96, 0.92, 0.97, 0.9]);

  const nearX = useTransform(progress, windStops, nearXRange);
  const nearY = useTransform(progress, windStops, nearYRange);
  const nearScale = useTransform(progress, windStops, nearScaleRange);
  const nearRotate = useTransform(progress, windStops, nearRotateRange);
  const nearOpacity = useTransform(progress, windStops, isPhone ? [0.88, 0.96, 1, 0.98, 0.91, 0.97, 0.86] : [0.92, 0.97, 1, 0.98, 0.94, 0.99, 0.9]);

  // Side fragments are not rendered on phones, but remain fully art-directed
  // on tablet and desktop.
  const leftX = useTransform(progress, windStops, isTablet ? ["0vw", "0.55vw", "0.2vw", "1.4vw", "0.85vw", "2.2vw", "2.7vw"] : ["0vw", "0.8vw", "0.25vw", "2vw", "1.2vw", "3.15vw", "3.8vw"]);
  const leftY = useTransform(progress, windStops, isTablet ? ["0vh", "-2vh", "-5vh", "-8.5vh", "-12.5vh", "-17vh", "-21vh"] : ["0vh", "-3vh", "-7.5vh", "-12vh", "-18vh", "-24vh", "-30vh"]);
  const leftScale = useTransform(progress, windStops, isTablet ? [1, 1.003, 1.007, 1.01, 1.013, 1.017, 1.02] : [1, 1.004, 1.01, 1.014, 1.018, 1.023, 1.028]);
  const leftRotate = useTransform(progress, windStops, ["0deg", "-0.11deg", "-0.02deg", "-0.16deg", "0.03deg", "-0.1deg", "0deg"]);
  const leftOpacity = useTransform(progress, windStops, [0.9, 0.96, 0.99, 0.95, 0.91, 0.96, 0.88]);

  const rightX = useTransform(progress, windStops, isTablet ? ["0vw", "-0.5vw", "-0.15vw", "-1.25vw", "-0.75vw", "-2.1vw", "-2.6vw"] : ["0vw", "-0.7vw", "-0.2vw", "-1.8vw", "-1.1vw", "-3vw", "-3.7vw"]);
  const rightY = useTransform(progress, windStops, isTablet ? ["0vh", "-2.4vh", "-5.7vh", "-9.5vh", "-14vh", "-19vh", "-23.5vh"] : ["0vh", "-3.5vh", "-8vh", "-13.5vh", "-20vh", "-27vh", "-34vh"]);
  const rightScale = useTransform(progress, windStops, isTablet ? [1, 1.004, 1.008, 1.011, 1.015, 1.019, 1.023] : [1, 1.005, 1.011, 1.016, 1.021, 1.026, 1.032]);
  const rightRotate = useTransform(progress, windStops, ["0deg", "0.09deg", "0deg", "0.15deg", "-0.03deg", "0.1deg", "0deg"]);
  const rightOpacity = useTransform(progress, windStops, [0.9, 0.95, 0.99, 0.96, 0.92, 0.97, 0.89]);

  const cloudStyles = useMemo(
    () => ({
      mid: reduceMotion ? undefined : { x: midX, y: midY, scale: midScale, rotate: midRotate, opacity: midOpacity },
      near: reduceMotion ? undefined : { x: nearX, y: nearY, scale: nearScale, rotate: nearRotate, opacity: nearOpacity },
      left: reduceMotion ? undefined : { x: leftX, y: leftY, scale: leftScale, rotate: leftRotate, opacity: leftOpacity },
      right: reduceMotion ? undefined : { x: rightX, y: rightY, scale: rightScale, rotate: rightRotate, opacity: rightOpacity },
    }),
    [
      reduceMotion,
      midX, midY, midScale, midRotate, midOpacity,
      nearX, nearY, nearScale, nearRotate, nearOpacity,
      leftX, leftY, leftScale, leftRotate, leftOpacity,
      rightX, rightY, rightScale, rightRotate, rightOpacity,
    ],
  );


  return { cloudStyles, motionProfile };
}

export function useAtmosphericHeroMotion(heroRef) {
  const reduceMotion = useReducedMotion();
  const motionProfile = useViewportMotionProfile();
  const isPhone = motionProfile === "phone";
  const isTablet = motionProfile === "tablet";
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const progress = useSpring(scrollYProgress, MOTION_PROFILES[motionProfile].sectionSpring);

  const contentY = useTransform(
    progress,
    [0, 0.45, 0.76, 1],
    isPhone ? ["0px", "-5px", "-18px", "-34px"] : isTablet ? ["0vh", "-.4vh", "-1.7vh", "-3.3vh"] : ["0vh", "-.5vh", "-2.1vh", "-4vh"],
  );
  const contentOpacity = useTransform(
    progress,
    [0, 0.48, 0.8, 1],
    [1, 1, 0.92, 0.72],
  );
  const contentScale = useTransform(
    progress,
    [0, 0.55, 1],
    [1, 1, isPhone ? 0.992 : 0.988],
  );

  return reduceMotion ? undefined : {
    y: contentY,
    opacity: contentOpacity,
    scale: contentScale,
  };
}

export function AtmosphericCloudField({ styles, compact = false }) {
  return (
    <div className="sky-home__atmosphere" aria-hidden="true">
      <m.span className="sky-home__cloud-scroll sky-home__cloud-scroll--mid" style={styles.mid}>
        <span className="sky-home__cloud-depth sky-home__cloud-depth--mid"><span className="sky-home__cloud sky-home__cloud--mid" /></span>
      </m.span>
      <m.span className="sky-home__cloud-scroll sky-home__cloud-scroll--near" style={styles.near}>
        <span className="sky-home__cloud-depth sky-home__cloud-depth--near"><span className="sky-home__cloud sky-home__cloud--near" /></span>
      </m.span>
      {!compact && (
        <>
          <m.span className="sky-home__cloud-scroll sky-home__cloud-scroll--left" style={styles.left}>
            <span className="sky-home__cloud-depth sky-home__cloud-depth--left"><span className="sky-home__cloud sky-home__cloud--left" /></span>
          </m.span>
          <m.span className="sky-home__cloud-scroll sky-home__cloud-scroll--right" style={styles.right}>
            <span className="sky-home__cloud-depth sky-home__cloud-depth--right"><span className="sky-home__cloud sky-home__cloud--right" /></span>
          </m.span>
        </>
      )}
    </div>
  );
}

export function AtmosphericSceneSection({ id, className, labelledBy, children }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const motionProfile = useViewportMotionProfile();
  const isPhone = motionProfile === "phone";
  const isTablet = motionProfile === "tablet";

  // The first reference's outer/inner section transition is adapted here as
  // continuous scroll choreography: the section shell and its direct content
  // travel in subtly opposing directions, then settle into a readable hold.
  // Native scrolling remains authoritative; there is no section lock/snap.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isPhone ? ["start 92%", "end 8%"] : isTablet ? ["start 96%", "end 6%"] : ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, MOTION_PROFILES[motionProfile].sectionSpring);

  const outerY = useTransform(
    smoothProgress,
    [0, 0.2, 0.34, 0.7, 0.84, 1],
    isPhone
      ? ["34px", "14px", "0px", "0px", "-9px", "-24px"]
      : isTablet
        ? ["4vh", "1.5vh", "0vh", "0vh", "-1.2vh", "-3vh"]
        : ["6vh", "2vh", "0vh", "0vh", "-1.7vh", "-4.8vh"],
  );
  const outerOpacity = useTransform(
    smoothProgress,
    [0, 0.12, 0.3, 0.74, 0.9, 1],
    isPhone
      ? [0.64, 0.82, 1, 1, 0.86, 0.68]
      : isTablet
        ? [0.7, 0.88, 1, 1, 0.9, 0.76]
        : [0.66, 0.86, 1, 1, 0.88, 0.7],
  );
  const outerScale = useTransform(
    smoothProgress,
    [0, 0.3, 0.72, 1],
    isPhone ? [0.99, 1, 1, 0.994] : isTablet ? [0.994, 1, 1, 0.996] : [0.991, 1, 1, 0.994],
  );

  // Counter-motion recreates the visual character of the nested section
  // wrappers from the section-transition reference without hijacking scroll.
  const innerY = useTransform(
    smoothProgress,
    [0, 0.22, 0.34, 0.7, 0.86, 1],
    isPhone
      ? ["-18px", "-7px", "0px", "0px", "6px", "14px"]
      : isTablet
        ? ["-2vh", "-.7vh", "0vh", "0vh", ".6vh", "1.5vh"]
        : ["-3vh", "-1vh", "0vh", "0vh", ".8vh", "2.1vh"],
  );
  const innerOpacity = useTransform(
    smoothProgress,
    [0, 0.16, 0.32, 0.76, 0.92, 1],
    isPhone ? [0.78, 0.92, 1, 1, 0.94, 0.82] : [0.74, 0.9, 1, 1, 0.92, 0.78],
  );
  const innerScale = useTransform(
    smoothProgress,
    [0, 0.32, 0.74, 1],
    isPhone ? [0.996, 1, 1, 0.998] : [0.994, 1, 1, 0.997],
  );

  // Adapted from the fullscreen gradient scene treatment in the third
  // reference. The wash stays decorative and is driven by the same local
  // scroll progress, creating a soft atmospheric handoff between scenes.
  const washOpacity = useTransform(
    smoothProgress,
    [0, 0.16, 0.34, 0.7, 0.88, 1],
    isPhone ? [0, 0.18, 0.34, 0.34, 0.14, 0] : [0, 0.12, 0.26, 0.26, 0.1, 0],
  );
  const washY = useTransform(
    smoothProgress,
    [0, 0.34, 0.7, 1],
    isPhone ? ["18px", "0px", "0px", "-14px"] : ["2vh", "0vh", "0vh", "-1.5vh"],
  );
  const washScale = useTransform(
    smoothProgress,
    [0, 0.34, 0.7, 1],
    [0.985, 1, 1, 1.012],
  );

  // Every mobile scene owns one atmospheric cloud plane. This keeps visible
  // parallax present throughout the page instead of concentrating two clouds
  // at fixed percentages of the entire homepage.
  const sceneCloudX = useTransform(
    smoothProgress,
    [0, 0.34, 0.7, 1],
    isPhone ? ["20px", "0px", "-10px", "-28px"] : ["2vw", "0vw", "-1vw", "-2.6vw"],
  );
  const sceneCloudY = useTransform(
    smoothProgress,
    [0, 0.34, 0.7, 1],
    isPhone ? ["34px", "0px", "-26px", "-58px"] : ["3vh", "0vh", "-2.2vh", "-5vh"],
  );
  const sceneCloudScale = useTransform(
    smoothProgress,
    [0, 0.34, 0.7, 1],
    isPhone ? [0.96, 1, 1.025, 1.055] : [0.97, 1, 1.02, 1.045],
  );
  const sceneCloudOpacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.38, 0.72, 0.9, 1],
    isPhone ? [0.08, 0.18, 0.24, 0.22, 0.14, 0.06] : [0.06, 0.14, 0.2, 0.18, 0.11, 0.04],
  );

  return (
    <m.section
      ref={ref}
      id={`home-scene-${id}`}
      className={`${className} atmospheric-scene-section`}
      aria-labelledby={labelledBy}
      style={reduceMotion ? undefined : {
        y: outerY,
        opacity: outerOpacity,
        scale: outerScale,
        "--scene-content-y": innerY,
        "--scene-content-opacity": innerOpacity,
        "--scene-content-scale": innerScale,
        "--scene-wash-opacity": washOpacity,
        "--scene-wash-y": washY,
        "--scene-wash-scale": washScale,
        "--scene-cloud-x": sceneCloudX,
        "--scene-cloud-y": sceneCloudY,
        "--scene-cloud-scale": sceneCloudScale,
        "--scene-cloud-opacity": sceneCloudOpacity,
      }}
    >
      {children}
    </m.section>
  );
}
