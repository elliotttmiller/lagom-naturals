import { useEffect, useRef, useState } from "react";

const SCENE_SELECTOR = "[data-home-snap-scene]";
const ACTIVE_CLASS = "is-snap-visible";
const INTERACTIVE_GESTURE_BLOCKER = "button,input,select,textarea,[contenteditable='true'],[role='dialog'],[data-home-snap-ignore]";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const easeInOutCubic = (t) => (
  t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2
);

/**
 * Homepage scene navigation.
 *
 * Desktop keeps native CSS scroll snap + IntersectionObserver reveal state.
 * Supported mobile/tablet viewports use a controlled vertical swipe pager:
 * one deliberate gesture resolves to one scene, while a restrained cloud
 * bridge visually connects the two full-height compositions. Compact-height
 * screens and reduced-motion users keep native/proximity scrolling so content
 * can never become trapped or inaccessible.
 */
export default function HomeScrollSnap({ rootRef }) {
  const [mobileTransition, setMobileTransition] = useState(null);
  const transitionId = useRef(0);
  const transitionTimer = useRef(0);
  const activeIndex = useRef(0);
  const gesture = useRef(null);
  const scrollFrame = useRef(0);
  const suppressClicksUntil = useRef(0);
  const lastVisualAt = useRef(0);
  const programmatic = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof window === "undefined") return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopViewport = window.matchMedia("(min-width: 900px) and (min-height: 30em)");
    const mobilePagerViewport = window.matchMedia("(max-width: 899px) and (min-height: 700px)");
    const rootScenes = Array.from(root.querySelectorAll(SCENE_SELECTOR));
    const footer = document.querySelector("#root > .site-footer, .site-footer");
    const mobileScenes = footer ? [...rootScenes, footer] : rootScenes;

    const listen = (mediaQuery, listener) => {
      if (mediaQuery.addEventListener) mediaQuery.addEventListener("change", listener);
      else mediaQuery.addListener(listener);
    };
    const unlisten = (mediaQuery, listener) => {
      if (mediaQuery.removeEventListener) mediaQuery.removeEventListener("change", listener);
      else mediaQuery.removeListener(listener);
    };

    const showAll = () => rootScenes.forEach((scene) => scene.classList.add(ACTIVE_CLASS));
    const nearestSceneIndex = () => {
      const viewportAnchor = Math.max(0, window.innerHeight * 0.18);
      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;
      mobileScenes.forEach((scene, index) => {
        const distance = Math.abs(scene.getBoundingClientRect().top - viewportAnchor);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });
      return bestIndex;
    };

    const triggerVisual = (direction) => {
      if (reducedMotion.matches) return;
      window.clearTimeout(transitionTimer.current);
      transitionId.current += 1;
      lastVisualAt.current = performance.now();
      setMobileTransition({
        id: transitionId.current,
        direction: direction > 0 ? "next" : "previous",
      });
      transitionTimer.current = window.setTimeout(() => setMobileTransition(null), 880);
    };

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

    const measureMobileViewport = () => {
      const height = Math.round(window.visualViewport?.height || window.innerHeight);
      document.documentElement.style.setProperty("--home-mobile-scene-h", `${height}px`);
      return height;
    };

    let desktopObserver;
    let mobileObserver;
    let resizeObserver;

    const disconnectObservers = () => {
      desktopObserver?.disconnect();
      mobileObserver?.disconnect();
      desktopObserver = undefined;
      mobileObserver = undefined;
    };

    const animateToScene = (nextIndex, direction, withVisual = true) => {
      if (!mobileScenes.length) return;
      const targetIndex = clamp(nextIndex, 0, mobileScenes.length - 1);
      const target = mobileScenes[targetIndex];
      if (!(target instanceof HTMLElement)) return;

      cancelAnimationFrame(scrollFrame.current);
      programmatic.current = true;
      activeIndex.current = targetIndex;
      document.documentElement.classList.add("home-mobile-scene-animating");
      if (withVisual) triggerVisual(direction);

      const startY = window.scrollY;
      const targetY = Math.max(0, startY + target.getBoundingClientRect().top);
      const delta = targetY - startY;
      const duration = reducedMotion.matches ? 0 : 720;
      const startedAt = performance.now();

      const finish = () => {
        window.scrollTo(0, targetY);
        requestAnimationFrame(() => {
          document.documentElement.classList.remove("home-mobile-scene-animating");
          programmatic.current = false;
        });
      };

      if (!duration || Math.abs(delta) < 2) {
        finish();
        return;
      }

      const step = (now) => {
        const progress = clamp((now - startedAt) / duration, 0, 1);
        window.scrollTo(0, startY + delta * easeInOutCubic(progress));
        if (progress < 1) scrollFrame.current = requestAnimationFrame(step);
        else finish();
      };
      scrollFrame.current = requestAnimationFrame(step);
    };

    const configureDesktop = () => {
      if (!desktopViewport.matches || reducedMotion.matches || !("IntersectionObserver" in window)) return;
      const snapOffset = measureDesktopChrome();
      rootScenes.forEach((scene) => scene.classList.remove(ACTIVE_CLASS));
      desktopObserver = new IntersectionObserver(
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
      rootScenes.forEach((scene) => desktopObserver.observe(scene));
    };

    const configureMobile = () => {
      if (!mobilePagerViewport.matches || reducedMotion.matches) return;
      measureMobileViewport();
      document.documentElement.classList.add("home-mobile-pager");
      activeIndex.current = nearestSceneIndex();

      if ("IntersectionObserver" in window) {
        mobileObserver = new IntersectionObserver(
          (entries) => {
            const visible = entries
              .filter((entry) => entry.isIntersecting)
              .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
            if (!visible || visible.intersectionRatio < 0.52) return;
            const nextIndex = mobileScenes.indexOf(visible.target);
            if (nextIndex < 0) return;
            rootScenes.forEach((scene) => scene.classList.toggle(ACTIVE_CLASS, scene === visible.target));
            const previousIndex = activeIndex.current;
            activeIndex.current = nextIndex;
            if (
              nextIndex !== previousIndex &&
              !programmatic.current &&
              performance.now() - lastVisualAt.current > 520
            ) {
              triggerVisual(nextIndex > previousIndex ? 1 : -1);
            }
          },
          { threshold: [0.28, 0.52, 0.72, 0.9] },
        );
        mobileScenes.forEach((scene) => mobileObserver.observe(scene));
      } else {
        showAll();
      }
    };

    const sync = () => {
      disconnectObservers();
      document.documentElement.classList.remove("home-mobile-pager", "home-mobile-scene-animating");
      cancelAnimationFrame(scrollFrame.current);
      programmatic.current = false;

      if (mobilePagerViewport.matches && !reducedMotion.matches) configureMobile();
      else if (desktopViewport.matches && !reducedMotion.matches) configureDesktop();
      else showAll();
    };

    const onTouchStart = (event) => {
      if (
        !mobilePagerViewport.matches ||
        reducedMotion.matches ||
        document.body.classList.contains("age-gate-open") ||
        document.body.classList.contains("mobile-menu-open") ||
        event.touches.length !== 1 ||
        event.target.closest?.(INTERACTIVE_GESTURE_BLOCKER)
      ) {
        gesture.current = null;
        return;
      }
      const touch = event.touches[0];
      gesture.current = {
        startX: touch.clientX,
        startY: touch.clientY,
        lastY: touch.clientY,
        startedAt: performance.now(),
        locked: false,
      };
    };

    const onTouchMove = (event) => {
      const state = gesture.current;
      if (!state || event.touches.length !== 1) return;
      const touch = event.touches[0];
      const dx = touch.clientX - state.startX;
      const dy = touch.clientY - state.startY;
      state.lastY = touch.clientY;

      if (!state.locked && Math.abs(dy) > 9 && Math.abs(dy) > Math.abs(dx) * 1.18) {
        state.locked = true;
      }
      if (state.locked) event.preventDefault();
    };

    const onTouchEnd = (event) => {
      const state = gesture.current;
      gesture.current = null;
      if (!state?.locked || !mobilePagerViewport.matches) return;

      const touch = event.changedTouches[0];
      const endY = touch?.clientY ?? state.lastY;
      const dy = endY - state.startY;
      const elapsed = Math.max(1, performance.now() - state.startedAt);
      const velocity = Math.abs(dy) / elapsed;
      const threshold = Math.max(44, window.innerHeight * 0.052);

      suppressClicksUntil.current = performance.now() + 320;
      const currentIndex = nearestSceneIndex();
      activeIndex.current = currentIndex;

      if (Math.abs(dy) < threshold && velocity < 0.42) {
        animateToScene(currentIndex, 0, false);
        return;
      }

      const direction = dy < 0 ? 1 : -1;
      const nextIndex = clamp(currentIndex + direction, 0, mobileScenes.length - 1);
      animateToScene(nextIndex, direction, nextIndex !== currentIndex);
    };

    const onTouchCancel = () => {
      gesture.current = null;
    };

    const onClickCapture = (event) => {
      if (performance.now() < suppressClicksUntil.current) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    const onKeyDown = (event) => {
      if (
        !mobilePagerViewport.matches ||
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.target.closest?.("input,textarea,select,[contenteditable='true']")
      ) return;

      let direction = 0;
      if (event.key === "ArrowDown" || event.key === "PageDown") direction = 1;
      else if (event.key === "ArrowUp" || event.key === "PageUp") direction = -1;
      else return;

      event.preventDefault();
      const currentIndex = nearestSceneIndex();
      const nextIndex = clamp(currentIndex + direction, 0, mobileScenes.length - 1);
      animateToScene(nextIndex, direction, nextIndex !== currentIndex);
    };

    sync();
    listen(reducedMotion, sync);
    listen(desktopViewport, sync);
    listen(mobilePagerViewport, sync);

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => {
        if (desktopViewport.matches) measureDesktopChrome();
        if (mobilePagerViewport.matches) measureMobileViewport();
      });
      const announcement = document.querySelector(".announcement");
      const header = document.querySelector(".site-header");
      if (announcement) resizeObserver.observe(announcement);
      if (header) resizeObserver.observe(header);
    }

    window.addEventListener("resize", sync, { passive: true });
    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("touchend", onTouchEnd, { passive: true });
    document.addEventListener("touchcancel", onTouchCancel, { passive: true });
    document.addEventListener("click", onClickCapture, true);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      disconnectObservers();
      resizeObserver?.disconnect();
      cancelAnimationFrame(scrollFrame.current);
      window.clearTimeout(transitionTimer.current);
      window.removeEventListener("resize", sync);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("touchcancel", onTouchCancel);
      document.removeEventListener("click", onClickCapture, true);
      document.removeEventListener("keydown", onKeyDown);
      unlisten(reducedMotion, sync);
      unlisten(desktopViewport, sync);
      unlisten(mobilePagerViewport, sync);
      document.documentElement.classList.remove("home-mobile-pager", "home-mobile-scene-animating");
      document.documentElement.style.removeProperty("--home-snap-offset");
      document.documentElement.style.removeProperty("--home-desktop-snap-h");
      document.documentElement.style.removeProperty("--home-mobile-scene-h");
    };
  }, [rootRef]);

  if (!mobileTransition) return null;

  return (
    <div
      key={mobileTransition.id}
      className={`home-scene-transition home-scene-transition--${mobileTransition.direction}`}
      aria-hidden="true"
    >
      <span className="home-scene-transition__sky" />
      <span className="home-scene-transition__cloud home-scene-transition__cloud--far" />
      <span className="home-scene-transition__cloud home-scene-transition__cloud--mid" />
      <span className="home-scene-transition__cloud home-scene-transition__cloud--near" />
    </div>
  );
}
