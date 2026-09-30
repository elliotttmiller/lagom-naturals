import { useEffect } from "react";

const SCENE_SELECTOR = "[data-home-snap-scene]";
const ACTIVE_CLASS = "is-snap-visible";

/**
 * Gives the homepage the same scene-entry contract as the reference demo
 * while leaving document scrolling in the browser's control. The observer
 * only applies presentation state; links, focus movement, and scrolling all
 * continue to use native browser behavior.
 */
export default function HomeScrollSnap({ rootRef }) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof window === "undefined") return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const supportedViewport = window.matchMedia("(min-height: 30em)");
    const scenes = Array.from(root.querySelectorAll(SCENE_SELECTOR));

    const showAll = () => scenes.forEach((scene) => scene.classList.add(ACTIVE_CLASS));
    let observer;

    const sync = () => {
      observer?.disconnect();
      observer = undefined;

      if (reducedMotion.matches || !supportedViewport.matches || !("IntersectionObserver" in window)) {
        showAll();
        return;
      }

      scenes.forEach((scene) => scene.classList.remove(ACTIVE_CLASS));
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle(ACTIVE_CLASS, entry.intersectionRatio >= 0.35);
          });
        },
        { root: null, rootMargin: "0px", threshold: [0, 0.35, 0.72, 1] },
      );
      scenes.forEach((scene) => observer.observe(scene));
    };

    sync();
    reducedMotion.addEventListener("change", sync);
    supportedViewport.addEventListener("change", sync);

    return () => {
      observer?.disconnect();
      reducedMotion.removeEventListener("change", sync);
      supportedViewport.removeEventListener("change", sync);
    };
  }, [rootRef]);

  return null;
}
