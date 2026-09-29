import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useScroll, useSpring, useTransform } from "motion/react";
import { m, motionTokens, useReducedMotion } from "@/motionSystem";

const HOME_SCENES = [
  { id: "hero", label: "Home" },
  { id: "flavors", label: "Flavors" },
  { id: "craft", label: "Our way" },
  { id: "gummies", label: "Gummies" },
  { id: "balance", label: "Balance" },
];

const globalSpring = {
  stiffness: 86,
  damping: 30,
  mass: 0.82,
  restDelta: 0.001,
};

function useActiveScene(rootRef) {
  const [activeScene, setActiveScene] = useState("hero");
  const ratios = useRef(new Map());

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return undefined;

    const scenes = [...root.querySelectorAll("[data-sky-scene]")];
    if (!scenes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-sky-scene");
          if (id) ratios.current.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let next = "hero";
        let best = -1;
        ratios.current.forEach((ratio, id) => {
          if (ratio > best) {
            best = ratio;
            next = id;
          }
        });
        if (best > 0) setActiveScene(next);
      },
      {
        root: null,
        rootMargin: "-18% 0px -38% 0px",
        threshold: [0, 0.12, 0.25, 0.4, 0.55, 0.72, 0.9, 1],
      },
    );

    scenes.forEach((scene) => {
      const id = scene.getAttribute("data-sky-scene");
      if (id) ratios.current.set(id, 0);
      observer.observe(scene);
    });

    return () => {
      observer.disconnect();
      ratios.current.clear();
    };
  }, [rootRef]);

  return activeScene;
}

export function useAtmosphericHomepageScroll(rootRef) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, globalSpring);

  // A shared progress curve keeps the atmosphere coherent while each plane
  // receives a distinct wind path. Multi-point transforms avoid the mechanical
  // "one diagonal line" look typical of basic parallax implementations.
  const windStops = [0, 0.16, 0.34, 0.52, 0.7, 0.86, 1];

  const midX = useTransform(progress, windStops, ["0vw", "-1.1vw", "-0.4vw", "-2.5vw", "-1.45vw", "-4.15vw", "-3.5vw"]);
  const midY = useTransform(progress, windStops, ["0vh", "-2.5vh", "-6.5vh", "-10.5vh", "-15vh", "-20vh", "-24vh"]);
  const midScale = useTransform(progress, windStops, [1, 1.006, 1.012, 1.018, 1.021, 1.026, 1.03]);
  const midRotate = useTransform(progress, windStops, ["0deg", "-0.08deg", "0.05deg", "-0.14deg", "0.04deg", "-0.08deg", "0deg"]);
  const midOpacity = useTransform(progress, windStops, [0.94, 0.98, 1, 0.96, 0.92, 0.97, 0.9]);

  const nearX = useTransform(progress, windStops, ["0vw", "1.4vw", "0.6vw", "3.6vw", "2.5vw", "5.8vw", "6.8vw"]);
  const nearY = useTransform(progress, windStops, ["0vh", "-4vh", "-10vh", "-17vh", "-25vh", "-34vh", "-43vh"]);
  const nearScale = useTransform(progress, windStops, [1, 1.012, 1.028, 1.04, 1.052, 1.066, 1.078]);
  const nearRotate = useTransform(progress, windStops, ["0deg", "0.1deg", "-0.04deg", "0.18deg", "0.06deg", "0.22deg", "0.12deg"]);
  const nearOpacity = useTransform(progress, windStops, [0.92, 0.97, 1, 0.98, 0.94, 0.99, 0.9]);

  const leftX = useTransform(progress, windStops, ["0vw", "0.8vw", "0.25vw", "2vw", "1.2vw", "3.15vw", "3.8vw"]);
  const leftY = useTransform(progress, windStops, ["0vh", "-3vh", "-7.5vh", "-12vh", "-18vh", "-24vh", "-30vh"]);
  const leftScale = useTransform(progress, windStops, [1, 1.004, 1.01, 1.014, 1.018, 1.023, 1.028]);
  const leftRotate = useTransform(progress, windStops, ["0deg", "-0.11deg", "-0.02deg", "-0.16deg", "0.03deg", "-0.1deg", "0deg"]);
  const leftOpacity = useTransform(progress, windStops, [0.9, 0.96, 0.99, 0.95, 0.91, 0.96, 0.88]);

  const rightX = useTransform(progress, windStops, ["0vw", "-0.7vw", "-0.2vw", "-1.8vw", "-1.1vw", "-3vw", "-3.7vw"]);
  const rightY = useTransform(progress, windStops, ["0vh", "-3.5vh", "-8vh", "-13.5vh", "-20vh", "-27vh", "-34vh"]);
  const rightScale = useTransform(progress, windStops, [1, 1.005, 1.011, 1.016, 1.021, 1.026, 1.032]);
  const rightRotate = useTransform(progress, windStops, ["0deg", "0.09deg", "0deg", "0.15deg", "-0.03deg", "0.1deg", "0deg"]);
  const rightOpacity = useTransform(progress, windStops, [0.9, 0.95, 0.99, 0.96, 0.92, 0.97, 0.89]);

  const activeScene = useActiveScene(rootRef);
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

  const scrollToScene = useCallback(
    (sceneId) => {
      const target = rootRef.current?.querySelector(`[data-sky-scene="${sceneId}"]`);
      target?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    },
    [reduceMotion, rootRef],
  );

  return { activeScene, cloudStyles, progress, scrollToScene };
}

export function AtmosphericCloudField({ styles }) {
  return (
    <div className="sky-home__atmosphere" aria-hidden="true">
      <m.span className="sky-home__cloud-scroll sky-home__cloud-scroll--mid" style={styles.mid}>
        <span className="sky-home__cloud-depth sky-home__cloud-depth--mid"><span className="sky-home__cloud sky-home__cloud--mid" /></span>
      </m.span>
      <m.span className="sky-home__cloud-scroll sky-home__cloud-scroll--near" style={styles.near}>
        <span className="sky-home__cloud-depth sky-home__cloud-depth--near"><span className="sky-home__cloud sky-home__cloud--near" /></span>
      </m.span>
      <m.span className="sky-home__cloud-scroll sky-home__cloud-scroll--left" style={styles.left}>
        <span className="sky-home__cloud-depth sky-home__cloud-depth--left"><span className="sky-home__cloud sky-home__cloud--left" /></span>
      </m.span>
      <m.span className="sky-home__cloud-scroll sky-home__cloud-scroll--right" style={styles.right}>
        <span className="sky-home__cloud-depth sky-home__cloud-depth--right"><span className="sky-home__cloud sky-home__cloud--right" /></span>
      </m.span>
    </div>
  );
}

export function AtmosphericSceneSection({ id, className, labelledBy, children }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 105,
    damping: 32,
    mass: 0.72,
    restDelta: 0.002,
  });
  const y = useTransform(smoothProgress, [0, 0.24, 0.72, 1], ["5vh", "0vh", "0vh", "-4vh"]);
  const opacity = useTransform(smoothProgress, [0, 0.15, 0.3, 0.76, 0.94, 1], [0.72, 0.9, 1, 1, 0.91, 0.8]);
  const scale = useTransform(smoothProgress, [0, 0.3, 0.75, 1], [0.993, 1, 1, 0.997]);

  return (
    <m.section
      ref={ref}
      id={`home-scene-${id}`}
      data-sky-scene={id}
      className={`${className} atmospheric-scene-section`}
      aria-labelledby={labelledBy}
      style={reduceMotion ? undefined : { y, opacity, scale }}
    >
      {children}
    </m.section>
  );
}

export function AtmosphericSectionNavigator({ activeScene, progress, onNavigate }) {
  return (
    <nav className="sky-home-nav" aria-label="Homepage sections">
      <span className="sky-home-nav__rail" aria-hidden="true">
        <m.span className="sky-home-nav__progress" style={{ scaleY: progress }} />
      </span>
      <ol>
        {HOME_SCENES.map((scene, index) => {
          const active = scene.id === activeScene;
          return (
            <li key={scene.id}>
              <button
                type="button"
                className={active ? "is-active" : ""}
                aria-current={active ? "location" : undefined}
                onClick={() => onNavigate(scene.id)}
              >
                <span className="sky-home-nav__index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span className="sky-home-nav__label">{scene.label}</span>
                <m.span
                  className="sky-home-nav__dot"
                  aria-hidden="true"
                  animate={{ scale: active ? 1 : 0.62, opacity: active ? 1 : 0.48 }}
                  transition={motionTokens.springSoft}
                />
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
