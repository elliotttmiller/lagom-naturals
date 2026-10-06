import { useEffect } from "react";

const SCENE_SELECTOR = "[data-home-snap-scene]";
const ACTIVE_CLASS = "is-snap-visible";
const SUSPENDED_CLASS = "is-home-snap-suspended";
const KEYBOARD_CLASS = "is-home-keyboard-open";
const KEYBOARD_THRESHOLD = 140;

function isTextEntryTarget(node) {
  if (!(node instanceof HTMLElement)) return false;
  if (node.isContentEditable) return true;
  return /^(INPUT|TEXTAREA|SELECT)$/.test(node.tagName);
}

/**
 * State controller for the native CSS scroll-snap homepage.
 *
 * The browser is the only vertical scroll engine. This controller only:
 * 1) observes the dominant scene for presentation state,
 * 2) suspends snap while the software keyboard is open, and
 * 3) measures desktop chrome for desktop observer geometry.
 *
 * It deliberately never measures mobile scene height, mutates scroll position,
 * intercepts touch/wheel input, or relaxes an individual scene's viewport.
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
    let keyboardFrame = 0;
    let lastActiveScene = scenes[0] || null;
    const visibleRatios = new Map(scenes.map((scene) => [scene, 0]));

    const listen = (mediaQuery, listener) => {
      if (mediaQuery.addEventListener) mediaQuery.addEventListener("change", listener);
      else mediaQuery.addListener(listener);
    };

    const unlisten = (mediaQuery, listener) => {
      if (mediaQuery.removeEventListener) mediaQuery.removeEventListener("change", listener);
      else mediaQuery.removeListener(listener);
    };

    const setActiveScene = (scene) => {
      if (!scene || (scene === lastActiveScene && scene.classList.contains(ACTIVE_CLASS))) return;
      lastActiveScene = scene;
      scenes.forEach((candidate) => candidate.classList.toggle(ACTIVE_CLASS, candidate === scene));
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

    const syncKeyboardState = () => {
      cancelAnimationFrame(keyboardFrame);
      keyboardFrame = requestAnimationFrame(() => {
        if (!mobileViewport.matches || !window.visualViewport) {
          root.classList.remove(KEYBOARD_CLASS, SUSPENDED_CLASS);
          return;
        }

        const focused = isTextEntryTarget(document.activeElement);
        const obscuredHeight = Math.max(0, window.innerHeight - window.visualViewport.height);
        const keyboardOpen = focused && obscuredHeight > KEYBOARD_THRESHOLD;

        root.classList.toggle(KEYBOARD_CLASS, keyboardOpen);
        root.classList.toggle(SUSPENDED_CLASS, keyboardOpen);
      });
    };

    const configureSceneObserver = () => {
      sceneObserver?.disconnect();
      sceneObserver = undefined;
      visibleRatios.forEach((_, scene) => visibleRatios.set(scene, 0));

      if (reducedMotion.matches || !("IntersectionObserver" in window)) {
        showAll();
        return;
      }

      const desktopOffset = measureDesktopChrome();
      const options = desktopViewport.matches
        ? {
            root: null,
            rootMargin: `-${desktopOffset}px 0px -10% 0px`,
            threshold: [0, 0.2, 0.4, 0.52, 0.7, 0.85, 1],
          }
        : {
            root: null,
            rootMargin: "0px",
            threshold: [0, 0.25, 0.5, 0.52, 0.65, 0.8, 1],
          };

      scenes.forEach((scene) => scene.classList.remove(ACTIVE_CLASS));
      if (lastActiveScene) lastActiveScene.classList.add(ACTIVE_CLASS);

      sceneObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          visibleRatios.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let dominantScene = lastActiveScene;
        let dominantRatio = dominantScene ? visibleRatios.get(dominantScene) || 0 : 0;

        scenes.forEach((scene) => {
          const ratio = visibleRatios.get(scene) || 0;
          if (ratio > dominantRatio) {
            dominantScene = scene;
            dominantRatio = ratio;
          }
        });

        if (dominantScene && (dominantRatio >= 0.52 || !lastActiveScene)) {
          setActiveScene(dominantScene);
        }
      }, options);

      scenes.forEach((scene) => sceneObserver.observe(scene));
    };

    const sync = () => {
      measureDesktopChrome();
      configureSceneObserver();
      syncKeyboardState();
    };

    const handleWindowResize = () => {
      measureDesktopChrome();
      syncKeyboardState();

      // Mobile Safari emits resize events while browser chrome expands and
      // collapses. Rebuilding the observer during that gesture causes needless
      // state churn; mobile observer geometry itself does not depend on chrome.
      if (desktopViewport.matches) configureSceneObserver();
    };

    sync();
    listen(reducedMotion, sync);
    listen(desktopViewport, sync);
    listen(mobileViewport, sync);

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => {
        if (desktopViewport.matches) {
          measureDesktopChrome();
          configureSceneObserver();
        }
      });

      const announcement = document.querySelector(".announcement");
      const header = document.querySelector(".site-header");
      if (announcement) resizeObserver.observe(announcement);
      if (header) resizeObserver.observe(header);
    }

    const visualViewport = window.visualViewport;
    const onFocusChange = () => syncKeyboardState();

    window.addEventListener("resize", handleWindowResize, { passive: true });
    visualViewport?.addEventListener("resize", syncKeyboardState, { passive: true });
    visualViewport?.addEventListener("scroll", syncKeyboardState, { passive: true });
    document.addEventListener("focusin", onFocusChange);
    document.addEventListener("focusout", onFocusChange);

    return () => {
      sceneObserver?.disconnect();
      resizeObserver?.disconnect();
      cancelAnimationFrame(keyboardFrame);
      window.removeEventListener("resize", handleWindowResize);
      visualViewport?.removeEventListener("resize", syncKeyboardState);
      visualViewport?.removeEventListener("scroll", syncKeyboardState);
      document.removeEventListener("focusin", onFocusChange);
      document.removeEventListener("focusout", onFocusChange);
      unlisten(reducedMotion, sync);
      unlisten(desktopViewport, sync);
      unlisten(mobileViewport, sync);
      root.classList.remove(SUSPENDED_CLASS, KEYBOARD_CLASS);
      document.documentElement.style.removeProperty("--home-snap-offset");
      document.documentElement.style.removeProperty("--home-desktop-snap-h");
    };
  }, [rootRef]);

  return null;
}
