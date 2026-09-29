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

  const midY = useTransform(progress, [0, 1], ["0vh", "-24vh"]);
  const midX = useTransform(progress, [0, 1], ["0vw", "-4vw"]);
  const nearY = useTransform(progress, [0, 1], ["0vh", "-39vh"]);
  const nearX = useTransform(progress, [0, 1], ["0vw", "6vw"]);
  const leftY = useTransform(progress, [0, 1], ["0vh", "-29vh"]);
  const leftX = useTransform(progress, [0, 1], ["0vw", "3.5vw"]);
  const rightY = useTransform(progress, [0, 1], ["0vh", "-33vh"]);
  const rightX = useTransform(progress, [0, 1], ["0vw", "-3.5vw"]);
  const nearScale = useTransform(progress, [0, 0.5, 1], [1, 1.03, 1.065]);

  const activeScene = useActiveScene(rootRef);
  const cloudStyles = useMemo(
    () => ({
      mid: reduceMotion ? undefined : { x: midX, y: midY },
      near: reduceMotion ? undefined : { x: nearX, y: nearY, scale: nearScale },
      left: reduceMotion ? undefined : { x: leftX, y: leftY },
      right: reduceMotion ? undefined : { x: rightX, y: rightY },
    }),
    [reduceMotion, midX, midY, nearX, nearY, nearScale, leftX, leftY, rightX, rightY],
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
