import { useEffect } from "react";

const SCENE_SELECTOR = "[data-home-snap-scene]";
const ACTIVE_CLASS = "is-snap-visible";
const OVERFLOW_CLASS = "has-home-snap-overflow";

/**
 * Presentation-state controller for the native CSS scroll-snap homepage.
 *
 * Scroll physics intentionally remain browser-owned. This component only:
 * 1) measures desktop chrome for the first hero frame,
 * 2) observes the active scene for reveal/atmosphere state, and
 * 3) detects content overflow so mandatory snapping can safely degrade.
 */
export default function HomeScrollSnap({ rootRef }) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof window === "undefined") return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopViewport = window.matchMedia("(min-width: 900px) and (min-height: 30em)");
    const mobileViewport = window.matchMedia("(max-width: 899px)");
    const scenes = Array.from(root.querySelectorAll(SCENE_SELECTOR));

    let sceneObserver;
    let resizeObserver;
    let measureFrame = 0;

    const listen = (mediaQuery, listener) => {
      if (mediaQuery.addEventListener) mediaQuery.addEventListener("change", listener);
      else mediaQuery.addListener(listener);
    };

    const unlisten = (mediaQuery, listener) => {
      if (mediaQuery.removeEventListener) mediaQuery.removeEventListener("change", listener);
      else mediaQuery.removeListener(listener);
    };

    const showAll = () => scenes.forEach((scene) => scene.classList.add(ACTIVE_CLASS));

    const measureDesktopChrome = () => {
      if (!desktopViewport.matches) return 0;
      const announcement = document.querySelector(".announcement");
      const header = document.querySelector(".site-header");
      const announcementHeight = announcement?.getBoundingClientRect().height || 0;
      const headerHeight = header?.getBoundingClientRect().height || 0;
      const offset = Math.round(announcementHeight + headerHeight);
      document.documentElement.style.setProperty("--home-snap-offset", `${offset}px`);
      document.documentElement.style.setProperty("--home-desktop-snap-h", `calc(100dvh - ${offset}px)`);
      return offset;
    };

    const measureOverflow = () => {
      cancelAnimationFrame(measureFrame);
      measureFrame = requestAnimationFrame(() => {
        if (!mobileViewport.matches) {
          root.classList.remove(OVERFLOW_CLASS);
          return;
        }

        const hasOverflow = scenes.some((scene) => {
          const content = scene.querySelector("[data-home-snap-content]");
          const target = content || scene;
          return Math.ceil(target.scrollHeight) > Math.ceil(scene.clientHeight) + 2;
        });

        root.classList.toggle(OVERFLOW_CLASS, hasOverflow);
      });
    };

    const configureSceneObserver = () => {
      sceneObserver?.disconnect();
      sceneObserver = undefined;

      if (reducedMotion.matches || mobileViewport.matches || !("IntersectionObserver" in window)) {
        showAll();
        return;
      }

      scenes.forEach((scene) => scene.classList.remove(ACTIVE_CLASS));

      const desktopOffset = measureDesktopChrome();
      const options = desktopViewport.matches
        ? {
            root: null,
            rootMargin: `-${desktopOffset}px 0px -12% 0px`,
            threshold: [0, 0.32, 0.62, 0.82, 1],
          }
        : {
            root: null,
            rootMargin: "-8% 0px -8% 0px",
            threshold: [0, 0.35, 0.55, 0.72, 0.9],
          };

      const activationThreshold = desktopViewport.matches ? 0.62 : 0.55;

      sceneObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            ACTIVE_CLASS,
            entry.isIntersecting && entry.intersectionRatio >= activationThreshold,
          );
        });
      }, options);

      scenes.forEach((scene) => sceneObserver.observe(scene));
    };

    const sync = () => {
      configureSceneObserver();
      measureOverflow();
    };

    sync();
    listen(reducedMotion, sync);
    listen(desktopViewport, sync);
    listen(mobileViewport, sync);

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => {
        measureDesktopChrome();
        measureOverflow();
      });

      scenes.forEach((scene) => {
        resizeObserver.observe(scene);
        const content = scene.querySelector("[data-home-snap-content]");
        if (content) resizeObserver.observe(content);
      });

      const announcement = document.querySelector(".announcement");
      const header = document.querySelector(".site-header");
      if (announcement) resizeObserver.observe(announcement);
      if (header) resizeObserver.observe(header);
    }

    window.addEventListener("resize", sync, { passive: true });
    window.visualViewport?.addEventListener("resize", measureOverflow, { passive: true });

    return () => {
      sceneObserver?.disconnect();
      resizeObserver?.disconnect();
      cancelAnimationFrame(measureFrame);
      window.removeEventListener("resize", sync);
      window.visualViewport?.removeEventListener("resize", measureOverflow);
      unlisten(reducedMotion, sync);
      unlisten(desktopViewport, sync);
      unlisten(mobileViewport, sync);
      root.classList.remove(OVERFLOW_CLASS);
      document.documentElement.style.removeProperty("--home-snap-offset");
      document.documentElement.style.removeProperty("--home-desktop-snap-h");
    };
  }, [rootRef]);

  return null;
}
