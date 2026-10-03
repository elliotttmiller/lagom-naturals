import { useEffect } from "react";

const SCENE_SELECTOR = "[data-home-snap-scene]";
const ACTIVE_CLASS = "is-snap-visible";
const SCENE_OVERFLOW_CLASS = "has-home-scene-overflow";
const SUSPENDED_CLASS = "is-home-snap-suspended";
const KEYBOARD_CLASS = "is-home-keyboard-open";
const KEYBOARD_THRESHOLD = 140;
const OVERFLOW_TOLERANCE = 24;

function isTextEntryTarget(node) {
  if (!(node instanceof HTMLElement)) return false;
  if (node.isContentEditable) return true;
  return /^(INPUT|TEXTAREA|SELECT)$/.test(node.tagName);
}

/**
 * Presentation/state controller for the native CSS scroll-snap homepage.
 *
 * The browser remains the only vertical scroll engine. This controller:
 * 1) observes which scene is actually dominant in the viewport,
 * 2) detects genuine product-scene overflow without changing sibling scenes,
 * 3) suspends snapping while the on-screen keyboard is open, and
 * 4) measures desktop chrome without mutating mobile scroll geometry.
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
      if (!scene || scene === lastActiveScene && scene.classList.contains(ACTIVE_CLASS)) return;
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

    const measureOverflow = () => {
      cancelAnimationFrame(measureFrame);
      measureFrame = requestAnimationFrame(() => {
        if (!mobileViewport.matches) {
          scenes.forEach((scene) => scene.classList.remove(SCENE_OVERFLOW_CLASS));
          return;
        }

        scenes.forEach((scene) => {
          /*
           * The hero is an art-directed full-viewport composition whose inner
           * content intentionally uses padded positioning. Its scrollHeight is
           * not a valid signal for relaxing downstream product-scene paging.
           */
          if (scene.classList.contains("atmospheric-scene-hero")) {
            scene.classList.remove(SCENE_OVERFLOW_CLASS);
            return;
          }

          /* Fixed product compositions deliberately distribute their controls
             and media inside one viewport. Their internal scrollHeight can
             include harmless grid rounding, so it must not turn one scene into
             a second document-length stop. */
          if (scene.hasAttribute("data-home-snap-fixed")) {
            scene.classList.remove(SCENE_OVERFLOW_CLASS);
            return;
          }

          const content = scene.querySelector("[data-home-snap-content]") || scene;
          const available = Math.ceil(scene.clientHeight);
          const required = Math.ceil(content.scrollHeight);
          const overflows = required > available + OVERFLOW_TOLERANCE;

          scene.classList.toggle(SCENE_OVERFLOW_CLASS, overflows);
        });

      });
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
            threshold: [0, 0.2, 0.4, 0.55, 0.7, 0.85, 1],
          }
        : {
            root: null,
            rootMargin: "0px",
            threshold: [0, 0.2, 0.4, 0.5, 0.6, 0.75, 0.9, 1],
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

        if (dominantScene && (dominantRatio >= 0.5 || !lastActiveScene)) {
          setActiveScene(dominantScene);
        }
      }, options);

      scenes.forEach((scene) => sceneObserver.observe(scene));
    };

    const sync = () => {
      measureDesktopChrome();
      configureSceneObserver();
      measureOverflow();
      syncKeyboardState();
    };

    const handleWindowResize = () => {
      measureDesktopChrome();
      measureOverflow();
      syncKeyboardState();

      /* Mobile Safari may emit resize events as browser chrome expands or
         collapses during a gesture. The mobile observer uses a zero rootMargin,
         so rebuilding it on every toolbar resize only creates state churn.
         Desktop chrome measurement, by contrast, changes observer geometry. */
      if (desktopViewport.matches) configureSceneObserver();
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
      cancelAnimationFrame(measureFrame);
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
      scenes.forEach((scene) => scene.classList.remove(SCENE_OVERFLOW_CLASS));
      document.documentElement.style.removeProperty("--home-snap-offset");
      document.documentElement.style.removeProperty("--home-desktop-snap-h");
    };
  }, [rootRef]);

  return null;
}
