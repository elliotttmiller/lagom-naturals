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
    // Scene snapping/reveal choreography is a desktop enhancement only.
    // Phones/tablets keep native continuous scrolling so the desktop visual
    // system can scale fluidly without introducing viewport-height gaps.
    const supportedViewport = window.matchMedia("(min-width: 900px) and (min-height: 30em)");
    const scenes = Array.from(root.querySelectorAll(SCENE_SELECTOR));

    const showAll = () => scenes.forEach((scene) => scene.classList.add(ACTIVE_CLASS));
    const listen = (mediaQuery, listener) => {
      if (mediaQuery.addEventListener) mediaQuery.addEventListener("change", listener);
      else mediaQuery.addListener(listener);
    };
    const unlisten = (mediaQuery, listener) => {
      if (mediaQuery.removeEventListener) mediaQuery.removeEventListener("change", listener);
      else mediaQuery.removeListener(listener);
    };
    let observer;
    let resizeObserver;

    const measureDesktopChrome = () => {
      const announcement = document.querySelector(".announcement");
      const header = document.querySelector(".site-header");
      const announcementHeight = announcement?.getBoundingClientRect().height || 0;
      const headerHeight = header?.getBoundingClientRect().height || 0;
      const offset = Math.round(announcementHeight + headerHeight);
      document.documentElement.style.setProperty("--home-snap-offset", `${offset}px`);
      document.documentElement.style.setProperty("--home-desktop-snap-h", `calc(100dvh - ${offset}px)`);
      return offset;
    };

    const sync = () => {
      observer?.disconnect();
      observer = undefined;

      if (reducedMotion.matches || !supportedViewport.matches || !("IntersectionObserver" in window)) {
        showAll();
        return;
      }

      const snapOffset = measureDesktopChrome();
      scenes.forEach((scene) => scene.classList.remove(ACTIVE_CLASS));
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle(ACTIVE_CLASS, entry.intersectionRatio >= 0.62);
          });
        },
        {
          root: null,
          rootMargin: `-${snapOffset}px 0px -12% 0px`,
          threshold: [0, 0.32, 0.62, 0.82, 1],
        },
      );
      scenes.forEach((scene) => observer.observe(scene));
    };

    sync();
    listen(reducedMotion, sync);
    listen(supportedViewport, sync);

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => {
        if (supportedViewport.matches) sync();
      });
      const announcement = document.querySelector(".announcement");
      const header = document.querySelector(".site-header");
      if (announcement) resizeObserver.observe(announcement);
      if (header) resizeObserver.observe(header);
    }
    window.addEventListener("resize", sync, { passive: true });

    return () => {
      observer?.disconnect();
      resizeObserver?.disconnect();
      window.removeEventListener("resize", sync);
      unlisten(reducedMotion, sync);
      unlisten(supportedViewport, sync);
      document.documentElement.style.removeProperty("--home-snap-offset");
      document.documentElement.style.removeProperty("--home-desktop-snap-h");
    };
  }, [rootRef]);

  return null;
}
