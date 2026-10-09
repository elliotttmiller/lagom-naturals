var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// http-url:https://framerusercontent.com/modules/AJBlLJuwF9txhNPw6w8f/cKFIveIToFGjet3Bky9G/StickyGridGallery.js
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Children, cloneElement, isValidElement, startTransition, useEffect, useLayoutEffect, useMemo, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";

// http-url:https://esm.sh/lenis@1.3.17/es2022/lenis.mjs
var x = "1.3.17";
function R(t, i, e) {
  return Math.max(t, Math.min(i, e));
}
function _(t, i, e) {
  return (1 - e) * t + e * i;
}
function k(t, i, e, o4) {
  return _(t, i, 1 - Math.exp(-e * o4));
}
function M(t, i) {
  return (t % i + i) % i;
}
var C = class {
  constructor() {
    __publicField(this, "isRunning", false);
    __publicField(this, "value", 0);
    __publicField(this, "from", 0);
    __publicField(this, "to", 0);
    __publicField(this, "currentTime", 0);
    __publicField(this, "lerp");
    __publicField(this, "duration");
    __publicField(this, "easing");
    __publicField(this, "onUpdate");
  }
  advance(t) {
    if (!this.isRunning)
      return;
    let i = false;
    if (this.duration && this.easing) {
      this.currentTime += t;
      let e = R(0, this.currentTime / this.duration, 1);
      i = e >= 1;
      let o4 = i ? 1 : this.easing(e);
      this.value = this.from + (this.to - this.from) * o4;
    } else
      this.lerp ? (this.value = k(this.value, this.to, this.lerp * 60, t), Math.round(this.value) === this.to && (this.value = this.to, i = true)) : (this.value = this.to, i = true);
    i && this.stop(), this.onUpdate?.(this.value, i);
  }
  stop() {
    this.isRunning = false;
  }
  fromTo(t, i, { lerp: e, duration: o4, easing: s, onStart: r, onUpdate: l }) {
    this.from = this.value = t, this.to = i, this.lerp = e, this.duration = o4, this.easing = s, this.currentTime = 0, this.isRunning = true, r?.(), this.onUpdate = l;
  }
};
function D(t, i) {
  let e;
  return function(...o4) {
    let s = this;
    clearTimeout(e), e = setTimeout(() => {
      e = void 0, t.apply(s, o4);
    }, i);
  };
}
var X = class {
  constructor(t, i, { autoResize: e = true, debounce: o4 = 250 } = {}) {
    __publicField(this, "width", 0);
    __publicField(this, "height", 0);
    __publicField(this, "scrollHeight", 0);
    __publicField(this, "scrollWidth", 0);
    __publicField(this, "debouncedResize");
    __publicField(this, "wrapperResizeObserver");
    __publicField(this, "contentResizeObserver");
    __publicField(this, "resize", () => {
      this.onWrapperResize(), this.onContentResize();
    });
    __publicField(this, "onWrapperResize", () => {
      this.wrapper instanceof Window ? (this.width = __dai_window.innerWidth, this.height = __dai_window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
    });
    __publicField(this, "onContentResize", () => {
      this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
    });
    this.wrapper = t, this.content = i, e && (this.debouncedResize = D(this.resize, o4), this.wrapper instanceof Window ? __dai_window.addEventListener("resize", this.debouncedResize, false) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
  }
  destroy() {
    this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), this.wrapper === __dai_window && this.debouncedResize && __dai_window.removeEventListener("resize", this.debouncedResize, false);
  }
  get limit() {
    return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
  }
};
var W = class {
  constructor() {
    __publicField(this, "events", {});
  }
  emit(t, ...i) {
    let e = this.events[t] || [];
    for (let o4 = 0, s = e.length; o4 < s; o4++)
      e[o4]?.(...i);
  }
  on(t, i) {
    return this.events[t]?.push(i) || (this.events[t] = [i]), () => {
      this.events[t] = this.events[t]?.filter((e) => i !== e);
    };
  }
  off(t, i) {
    this.events[t] = this.events[t]?.filter((e) => i !== e);
  }
  destroy() {
    this.events = {};
  }
};
var L = 100 / 6;
var S = { passive: false };
var Y = class {
  constructor(t, i = { wheelMultiplier: 1, touchMultiplier: 1 }) {
    __publicField(this, "touchStart", { x: 0, y: 0 });
    __publicField(this, "lastDelta", { x: 0, y: 0 });
    __publicField(this, "window", { width: 0, height: 0 });
    __publicField(this, "emitter", new W());
    __publicField(this, "onTouchStart", (t) => {
      let { clientX: i, clientY: e } = t.targetTouches ? t.targetTouches[0] : t;
      this.touchStart.x = i, this.touchStart.y = e, this.lastDelta = { x: 0, y: 0 }, this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t });
    });
    __publicField(this, "onTouchMove", (t) => {
      let { clientX: i, clientY: e } = t.targetTouches ? t.targetTouches[0] : t, o4 = -(i - this.touchStart.x) * this.options.touchMultiplier, s = -(e - this.touchStart.y) * this.options.touchMultiplier;
      this.touchStart.x = i, this.touchStart.y = e, this.lastDelta = { x: o4, y: s }, this.emitter.emit("scroll", { deltaX: o4, deltaY: s, event: t });
    });
    __publicField(this, "onTouchEnd", (t) => {
      this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t });
    });
    __publicField(this, "onWheel", (t) => {
      let { deltaX: i, deltaY: e, deltaMode: o4 } = t, s = o4 === 1 ? L : o4 === 2 ? this.window.width : 1, r = o4 === 1 ? L : o4 === 2 ? this.window.height : 1;
      i *= s, e *= r, i *= this.options.wheelMultiplier, e *= this.options.wheelMultiplier, this.emitter.emit("scroll", { deltaX: i, deltaY: e, event: t });
    });
    __publicField(this, "onWindowResize", () => {
      this.window = { width: __dai_window.innerWidth, height: __dai_window.innerHeight };
    });
    this.element = t, this.options = i, __dai_window.addEventListener("resize", this.onWindowResize, false), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, S), this.element.addEventListener("touchstart", this.onTouchStart, S), this.element.addEventListener("touchmove", this.onTouchMove, S), this.element.addEventListener("touchend", this.onTouchEnd, S);
  }
  on(t, i) {
    return this.emitter.on(t, i);
  }
  destroy() {
    this.emitter.destroy(), __dai_window.removeEventListener("resize", this.onWindowResize, false), this.element.removeEventListener("wheel", this.onWheel, S), this.element.removeEventListener("touchstart", this.onTouchStart, S), this.element.removeEventListener("touchmove", this.onTouchMove, S), this.element.removeEventListener("touchend", this.onTouchEnd, S);
  }
};
var N = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));
var A = class {
  constructor({ wrapper: t = __dai_window, content: i = document.documentElement, eventsTarget: e = t, smoothWheel: o4 = true, syncTouch: s = false, syncTouchLerp: r = 0.075, touchInertiaExponent: l = 1.7, duration: h, easing: a, lerp: p = 0.1, infinite: d2 = false, orientation: m = "vertical", gestureOrientation: n = m === "horizontal" ? "both" : "vertical", touchMultiplier: c = 1, wheelMultiplier: u15 = 1, autoResize: v = true, prevent: f, virtualScroll: g, overscroll: y = true, autoRaf: E3 = false, anchors: z2 = false, autoToggle: w = false, allowNestedScroll: T = false, __experimental__naiveDimensions: b = false, naiveDimensions: H2 = b, stopInertiaOnNavigate: O2 = false } = {}) {
    __publicField(this, "_isScrolling", false);
    __publicField(this, "_isStopped", false);
    __publicField(this, "_isLocked", false);
    __publicField(this, "_preventNextNativeScrollEvent", false);
    __publicField(this, "_resetVelocityTimeout", null);
    __publicField(this, "_rafId", null);
    __publicField(this, "isTouching");
    __publicField(this, "time", 0);
    __publicField(this, "userData", {});
    __publicField(this, "lastVelocity", 0);
    __publicField(this, "velocity", 0);
    __publicField(this, "direction", 0);
    __publicField(this, "options");
    __publicField(this, "targetScroll");
    __publicField(this, "animatedScroll");
    __publicField(this, "animate", new C());
    __publicField(this, "emitter", new W());
    __publicField(this, "dimensions");
    __publicField(this, "virtualScroll");
    __publicField(this, "onScrollEnd", (t) => {
      t instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === false) && t.stopPropagation();
    });
    __publicField(this, "dispatchScrollendEvent", () => {
      this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", { bubbles: this.options.wrapper === __dai_window, detail: { lenisScrollEnd: true } }));
    });
    __publicField(this, "onTransitionEnd", (t) => {
      t.propertyName.includes("overflow") && this.checkOverflow();
    });
    __publicField(this, "onClick", (t) => {
      let e = t.composedPath().filter((o4) => o4 instanceof HTMLAnchorElement && o4.getAttribute("href"));
      if (this.options.anchors) {
        let o4 = e.find((s) => s.getAttribute("href")?.includes("#"));
        if (o4) {
          let s = o4.getAttribute("href");
          if (s) {
            let r = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0, l = `#${s.split("#")[1]}`;
            this.scrollTo(l, r);
          }
        }
      }
      this.options.stopInertiaOnNavigate && e.find((s) => s.host === __dai_window.location.host) && this.reset();
    });
    __publicField(this, "onPointerDown", (t) => {
      t.button === 1 && this.reset();
    });
    __publicField(this, "onVirtualScroll", (t) => {
      if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(t) === false)
        return;
      let { deltaX: i, deltaY: e, event: o4 } = t;
      if (this.emitter.emit("virtual-scroll", { deltaX: i, deltaY: e, event: o4 }), o4.ctrlKey || o4.lenisStopPropagation)
        return;
      let s = o4.type.includes("touch"), r = o4.type.includes("wheel");
      this.isTouching = o4.type === "touchstart" || o4.type === "touchmove";
      let l = i === 0 && e === 0;
      if (this.options.syncTouch && s && o4.type === "touchstart" && l && !this.isStopped && !this.isLocked) {
        this.reset();
        return;
      }
      let a = this.options.gestureOrientation === "vertical" && e === 0 || this.options.gestureOrientation === "horizontal" && i === 0;
      if (l || a)
        return;
      let p = o4.composedPath();
      p = p.slice(0, p.indexOf(this.rootElement));
      let d2 = this.options.prevent;
      if (p.find((f) => f instanceof HTMLElement && (typeof d2 == "function" && d2?.(f) || f.hasAttribute?.("data-lenis-prevent") || s && f.hasAttribute?.("data-lenis-prevent-touch") || r && f.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.checkNestedScroll(f, { deltaX: i, deltaY: e }))))
        return;
      if (this.isStopped || this.isLocked) {
        o4.cancelable && o4.preventDefault();
        return;
      }
      if (!(this.options.syncTouch && s || this.options.smoothWheel && r)) {
        this.isScrolling = "native", this.animate.stop(), o4.lenisStopPropagation = true;
        return;
      }
      let n = e;
      this.options.gestureOrientation === "both" ? n = Math.abs(e) > Math.abs(i) ? e : i : this.options.gestureOrientation === "horizontal" && (n = i), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== __dai_window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && e > 0 || this.animatedScroll === this.limit && e < 0)) && (o4.lenisStopPropagation = true), o4.cancelable && o4.preventDefault();
      let c = s && this.options.syncTouch, v = s && o4.type === "touchend";
      v && (n = Math.sign(this.velocity) * Math.pow(Math.abs(this.velocity), this.options.touchInertiaExponent)), this.scrollTo(this.targetScroll + n, { programmatic: false, ...c ? { lerp: v ? this.options.syncTouchLerp : 1 } : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing } });
    });
    __publicField(this, "onNativeScroll", () => {
      if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
        this._preventNextNativeScrollEvent = false;
        return;
      }
      if (this.isScrolling === false || this.isScrolling === "native") {
        let t = this.animatedScroll;
        this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - t, this.direction = Math.sign(this.animatedScroll - t), this.isStopped || (this.isScrolling = "native"), this.emit(), this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout(() => {
          this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = false, this.emit();
        }, 400));
      }
    });
    __publicField(this, "raf", (t) => {
      let i = t - (this.time || t);
      this.time = t, this.animate.advance(i * 1e-3), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
    });
    __dai_window.lenisVersion = x, (!t || t === document.documentElement) && (t = __dai_window), typeof h == "number" && typeof a != "function" ? a = N : typeof a == "function" && typeof h != "number" && (h = 1), this.options = { wrapper: t, content: i, eventsTarget: e, smoothWheel: o4, syncTouch: s, syncTouchLerp: r, touchInertiaExponent: l, duration: h, easing: a, lerp: p, infinite: d2, gestureOrientation: n, orientation: m, touchMultiplier: c, wheelMultiplier: u15, autoResize: v, prevent: f, virtualScroll: g, overscroll: y, autoRaf: E3, anchors: z2, autoToggle: w, allowNestedScroll: T, naiveDimensions: H2, stopInertiaOnNavigate: O2 }, this.dimensions = new X(t, i, { autoResize: v }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: true }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick, false), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, false), this.virtualScroll = new Y(e, { touchMultiplier: c, wheelMultiplier: u15 }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd, { passive: true })), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf));
  }
  destroy() {
    this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, false), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, { capture: true }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, false), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener("click", this.onClick, false), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this._rafId && cancelAnimationFrame(this._rafId);
  }
  on(t, i) {
    return this.emitter.on(t, i);
  }
  off(t, i) {
    return this.emitter.off(t, i);
  }
  get overflow() {
    let t = this.isHorizontal ? "overflow-x" : "overflow-y";
    return getComputedStyle(this.rootElement)[t];
  }
  checkOverflow() {
    ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart();
  }
  setScroll(t) {
    this.isHorizontal ? this.options.wrapper.scrollTo({ left: t, behavior: "instant" }) : this.options.wrapper.scrollTo({ top: t, behavior: "instant" });
  }
  resize() {
    this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    this.isLocked = false, this.isScrolling = false, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop();
  }
  start() {
    if (this.isStopped) {
      if (this.options.autoToggle) {
        this.rootElement.style.removeProperty("overflow");
        return;
      }
      this.internalStart();
    }
  }
  internalStart() {
    this.isStopped && (this.reset(), this.isStopped = false, this.emit());
  }
  stop() {
    if (!this.isStopped) {
      if (this.options.autoToggle) {
        this.rootElement.style.setProperty("overflow", "clip");
        return;
      }
      this.internalStop();
    }
  }
  internalStop() {
    this.isStopped || (this.reset(), this.isStopped = true, this.emit());
  }
  scrollTo(t, { offset: i = 0, immediate: e = false, lock: o4 = false, programmatic: s = true, lerp: r = s ? this.options.lerp : void 0, duration: l = s ? this.options.duration : void 0, easing: h = s ? this.options.easing : void 0, onStart: a, onComplete: p, force: d2 = false, userData: m } = {}) {
    if (!((this.isStopped || this.isLocked) && !d2)) {
      if (typeof t == "string" && ["top", "left", "start", "#"].includes(t))
        t = 0;
      else if (typeof t == "string" && ["bottom", "right", "end"].includes(t))
        t = this.limit;
      else {
        let n;
        if (typeof t == "string" ? (n = document.querySelector(t), n || (t === "#top" ? t = 0 : console.warn("Lenis: Target not found", t))) : t instanceof HTMLElement && t?.nodeType && (n = t), n) {
          if (this.options.wrapper !== __dai_window) {
            let u15 = this.rootElement.getBoundingClientRect();
            i -= this.isHorizontal ? u15.left : u15.top;
          }
          let c = n.getBoundingClientRect();
          t = (this.isHorizontal ? c.left : c.top) + this.animatedScroll;
        }
      }
      if (typeof t == "number") {
        if (t += i, t = Math.round(t), this.options.infinite) {
          if (s) {
            this.targetScroll = this.animatedScroll = this.scroll;
            let n = t - this.animatedScroll;
            n > this.limit / 2 ? t = t - this.limit : n < -this.limit / 2 && (t = t + this.limit);
          }
        } else
          t = R(0, t, this.limit);
        if (t === this.targetScroll) {
          a?.(this), p?.(this);
          return;
        }
        if (this.userData = m ?? {}, e) {
          this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), p?.(this), this.userData = {}, requestAnimationFrame(() => {
            this.dispatchScrollendEvent();
          });
          return;
        }
        s || (this.targetScroll = t), typeof l == "number" && typeof h != "function" ? h = N : typeof h == "function" && typeof l != "number" && (l = 1), this.animate.fromTo(this.animatedScroll, t, { duration: l, easing: h, lerp: r, onStart: () => {
          o4 && (this.isLocked = true), this.isScrolling = "smooth", a?.(this);
        }, onUpdate: (n, c) => {
          this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = n - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = n, this.setScroll(this.scroll), s && (this.targetScroll = n), c || this.emit(), c && (this.reset(), this.emit(), p?.(this), this.userData = {}, requestAnimationFrame(() => {
            this.dispatchScrollendEvent();
          }), this.preventNextNativeScrollEvent());
        } });
      }
    }
  }
  preventNextNativeScrollEvent() {
    this._preventNextNativeScrollEvent = true, requestAnimationFrame(() => {
      this._preventNextNativeScrollEvent = false;
    });
  }
  checkNestedScroll(t, { deltaX: i, deltaY: e }) {
    let o4 = Date.now(), s = t._lenis ?? (t._lenis = {}), r, l, h, a, p, d2, m, n, c = this.options.gestureOrientation;
    if (o4 - (s.time ?? 0) > 2e3) {
      s.time = Date.now();
      let w = __dai_window.getComputedStyle(t);
      s.computedStyle = w;
      let T = w.overflowX, b = w.overflowY;
      if (r = ["auto", "overlay", "scroll"].includes(T), l = ["auto", "overlay", "scroll"].includes(b), s.hasOverflowX = r, s.hasOverflowY = l, !r && !l || c === "vertical" && !l || c === "horizontal" && !r)
        return false;
      p = t.scrollWidth, d2 = t.scrollHeight, m = t.clientWidth, n = t.clientHeight, h = p > m, a = d2 > n, s.isScrollableX = h, s.isScrollableY = a, s.scrollWidth = p, s.scrollHeight = d2, s.clientWidth = m, s.clientHeight = n;
    } else
      h = s.isScrollableX, a = s.isScrollableY, r = s.hasOverflowX, l = s.hasOverflowY, p = s.scrollWidth, d2 = s.scrollHeight, m = s.clientWidth, n = s.clientHeight;
    if (!r && !l || !h && !a || c === "vertical" && (!l || !a) || c === "horizontal" && (!r || !h))
      return false;
    let u15;
    if (c === "horizontal")
      u15 = "x";
    else if (c === "vertical")
      u15 = "y";
    else {
      let w = i !== 0, T = e !== 0;
      w && r && h && (u15 = "x"), T && l && a && (u15 = "y");
    }
    if (!u15)
      return false;
    let v, f, g, y, E3;
    if (u15 === "x")
      v = t.scrollLeft, f = p - m, g = i, y = r, E3 = h;
    else if (u15 === "y")
      v = t.scrollTop, f = d2 - n, g = e, y = l, E3 = a;
    else
      return false;
    return (g > 0 ? v < f : v > 0) && y && E3;
  }
  get rootElement() {
    return this.options.wrapper === __dai_window ? document.documentElement : this.options.wrapper;
  }
  get limit() {
    return this.options.naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  get actualScroll() {
    let t = this.options.wrapper;
    return this.isHorizontal ? t.scrollX ?? t.scrollLeft : t.scrollY ?? t.scrollTop;
  }
  get scroll() {
    return this.options.infinite ? M(this.animatedScroll, this.limit) : this.animatedScroll;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isScrolling() {
    return this._isScrolling;
  }
  set isScrolling(t) {
    this._isScrolling !== t && (this._isScrolling = t, this.updateClassName());
  }
  get isStopped() {
    return this._isStopped;
  }
  set isStopped(t) {
    this._isStopped !== t && (this._isStopped = t, this.updateClassName());
  }
  get isLocked() {
    return this._isLocked;
  }
  set isLocked(t) {
    this._isLocked !== t && (this._isLocked = t, this.updateClassName());
  }
  get isSmooth() {
    return this.isScrolling === "smooth";
  }
  get className() {
    let t = "lenis";
    return this.options.autoToggle && (t += " lenis-autoToggle"), this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), this.isScrolling === "smooth" && (t += " lenis-smooth"), t;
  }
  updateClassName() {
    this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
  }
  cleanUpClassName() {
    this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
  }
};

// http-url:https://esm.sh/gsap@3.13.0/es2022/gsap.mjs
function mt(u15) {
  if (u15 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return u15;
}
function Ei(u15, t) {
  u15.prototype = Object.create(t.prototype), u15.prototype.constructor = u15, u15.__proto__ = t;
}
var et = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } };
var Xt = { duration: 0.5, overwrite: false, delay: 0 };
var je;
var G;
var E;
var ot = 1e8;
var M2 = 1 / ot;
var Be = Math.PI * 2;
var Er = Be / 4;
var zr = 0;
var zi = Math.sqrt;
var Fr = Math.cos;
var Lr = Math.sin;
var U = function(t) {
  return typeof t == "string";
};
var L2 = function(t) {
  return typeof t == "function";
};
var yt = function(t) {
  return typeof t == "number";
};
var Pe = function(t) {
  return typeof t > "u";
};
var ct = function(t) {
  return typeof t == "object";
};
var tt = function(t) {
  return t !== false;
};
var $e = function() {
  return typeof __dai_window < "u";
};
var pe = function(t) {
  return L2(t) || U(t);
};
var Fi = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
};
var K = Array.isArray;
var Ve = /(?:-?\.?\d|\.)+/gi;
var He = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
var zt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
var Re = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
var Je = /[+-]=-?[.\d]+/;
var Li = /[^,'"\[\]\s]+/gi;
var Ir = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
var z;
var ht;
var Ue;
var ti;
var nt = {};
var xe = {};
var Ii;
var Ni = function(t) {
  return (xe = qt(t, nt)) && Z;
};
var Se = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
};
var ae = function(t, e) {
  return !e && console.warn(t);
};
var Bi = function(t, e) {
  return t && (nt[t] = e) && xe && (xe[t] = e) || nt;
};
var oe = function() {
  return 0;
};
var Nr = { suppressEvents: true, isStart: true, kill: false };
var me = { suppressEvents: true, kill: false };
var Br = { suppressEvents: true };
var ei = {};
var wt = [];
var Ye = {};
var Vi;
var H = {};
var Ee = {};
var Oi = 30;
var ge = [];
var ii = "";
var ri = function(t) {
  var e = t[0], i, r;
  if (ct(e) || L2(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (r = ge.length; r-- && !ge[r].targetTest(e); )
      ;
    i = ge[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new oi(t[r], i))) || t.splice(r, 1);
  return t;
};
var bt = function(t) {
  return t._gsap || ri(ut(t))[0]._gsap;
};
var ni = function(t, e, i) {
  return (i = t[e]) && L2(i) ? t[e]() : Pe(i) && t.getAttribute && t.getAttribute(e) || i;
};
var j = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
};
var I = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
};
var V = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
};
var Ft = function(t, e) {
  var i = e.charAt(0), r = parseFloat(e.substr(2));
  return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r;
};
var Vr = function(t, e) {
  for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
    ;
  return r < i;
};
var ve = function() {
  var t = wt.length, e = wt.slice(0), i, r;
  for (Ye = {}, wt.length = 0, i = 0; i < t; i++)
    r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], true)._lazy = 0);
};
var si = function(t) {
  return !!(t._initted || t._startAt || t.add);
};
var Ui = function(t, e, i, r) {
  wt.length && !G && ve(), t.render(e, i, r || !!(G && e < 0 && si(t))), wt.length && !G && ve();
};
var Yi = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(Li).length < 2 ? e : U(t) ? t.trim() : t;
};
var Xi = function(t) {
  return t;
};
var st = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
};
var Ur = function(t) {
  return function(e, i) {
    for (var r in i)
      r in e || r === "duration" && t || r === "ease" || (e[r] = i[r]);
  };
};
var qt = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
};
var ki = function u(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = ct(e[i]) ? u(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
};
var Te = function(t, e) {
  var i = {}, r;
  for (r in t)
    r in e || (i[r] = t[r]);
  return i;
};
var re = function(t) {
  var e = t.parent || z, i = t.keyframes ? Ur(K(t.keyframes)) : st;
  if (tt(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
};
var Yr = function(t, e) {
  for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
    ;
  return i < 0;
};
var qi = function(t, e, i, r, n) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var s = t[r], a;
  if (n)
    for (a = e[n]; s && s[n] > a; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t, e;
};
var Oe = function(t, e, i, r) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var n = e._prev, s = e._next;
  n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null;
};
var Pt = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
};
var At = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
};
var Xr = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
};
var Xe = function(t, e, i, r) {
  return t._startAt && (G ? t._startAt.revert(me) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, true, r));
};
var qr = function u2(t) {
  return !t || t._ts && u2(t.parent);
};
var Ci = function(t) {
  return t._repeat ? Wt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
};
var Wt = function(t, e) {
  var i = Math.floor(t = V(t / e));
  return t && i === t ? i - 1 : i;
};
var we = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
};
var ke = function(t) {
  return t._end = V(t._start + (t._tDur / Math.abs(t._ts || t._rts || M2) || 0));
};
var Ce = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = V(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), ke(t), i._dirty || At(i, t)), t;
};
var Wi = function(t, e) {
  var i;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = we(t.rawTime(), e), (!e._dur || _e(0, e.totalDuration(), i) - e._tTime > M2) && e.render(i, true)), At(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -M2;
  }
};
var lt = function(t, e, i, r) {
  return e.parent && Pt(e), e._start = V((yt(i) ? i : i || t !== z ? at(t, i, e) : t._time) + e._delay), e._end = V(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), qi(t, e, "_first", "_last", t._sort ? "_start" : 0), qe(e) || (t._recent = e), r || Wi(t, e), t._ts < 0 && Ce(t, t._tTime), t;
};
var Gi = function(t, e) {
  return (nt.ScrollTrigger || Se("scrollTrigger", e)) && nt.ScrollTrigger.create(e, t);
};
var Qi = function(t, e, i, r, n) {
  if (_i(t, e, n), !t._initted)
    return 1;
  if (!i && t._pt && !G && (t._dur && t.vars.lazy !== false || !t._dur && t.vars.lazy) && Vi !== J.frame)
    return wt.push(t), t._lazy = [n, r], 1;
};
var Wr = function u3(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || u3(e));
};
var qe = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
};
var Gr = function(t, e, i, r) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && Wr(t) && !(!t._initted && qe(t)) || (t._ts < 0 || t._dp._ts < 0) && !qe(t)) ? 0 : 1, a = t._rDelay, o4 = 0, f, _2, l;
  if (a && t._repeat && (o4 = _e(0, t._tDur, e), _2 = Wt(o4, a), t._yoyo && _2 & 1 && (s = 1 - s), _2 !== Wt(t._tTime, a) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || G || r || t._zTime === M2 || !e && t._zTime) {
    if (!t._initted && Qi(t, e, r, i, o4))
      return;
    for (l = t._zTime, t._zTime = e || (i ? M2 : 0), i || (i = e && !l), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = o4, f = t._pt; f; )
      f.r(s, f.d), f = f._next;
    e < 0 && Xe(t, e, i, true), t._onUpdate && !i && rt(t, "onUpdate"), o4 && t._repeat && !i && t.parent && rt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && Pt(t, 1), !i && !G && (rt(t, s ? "onComplete" : "onReverseComplete", true), t._prom && t._prom()));
  } else
    t._zTime || (t._zTime = e);
};
var Qr = function(t, e, i) {
  var r;
  if (i > e)
    for (r = t._first; r && r._start <= i; ) {
      if (r.data === "isPause" && r._start > e)
        return r;
      r = r._next;
    }
  else
    for (r = t._last; r && r._start >= i; ) {
      if (r.data === "isPause" && r._start < e)
        return r;
      r = r._prev;
    }
};
var Gt = function(t, e, i, r) {
  var n = t._repeat, s = V(e) || 0, a = t._tTime / t._tDur;
  return a && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : V(s * (n + 1) + t._rDelay * n) : s, a > 0 && !r && Ce(t, t._tTime = t._tDur * a), t.parent && ke(t), i || At(t.parent, t), t;
};
var Mi = function(t) {
  return t instanceof W2 ? At(t) : Gt(t, t._dur);
};
var Kr = { _start: 0, endTime: oe, totalDuration: oe };
var at = function u4(t, e, i) {
  var r = t.labels, n = t._recent || Kr, s = t.duration() >= ot ? n.endTime(false) : t._dur, a, o4, f;
  return U(e) && (isNaN(e) || e in r) ? (o4 = e.charAt(0), f = e.substr(-1) === "%", a = e.indexOf("="), o4 === "<" || o4 === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (o4 === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (f ? (a < 0 ? n : i).totalDuration() / 100 : 1)) : a < 0 ? (e in r || (r[e] = s), r[e]) : (o4 = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), f && i && (o4 = o4 / 100 * (K(i) ? i[0] : i).totalDuration()), a > 1 ? u4(t, e.substr(0, a - 1), i) + o4 : s + o4)) : e == null ? s : +e;
};
var ne = function(t, e, i) {
  var r = yt(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], a, o4;
  if (r && (s.duration = e[1]), s.parent = i, t) {
    for (a = s, o4 = i; o4 && !("immediateRender" in a); )
      a = o4.vars.defaults || {}, o4 = tt(o4.vars.inherit) && o4.parent;
    s.immediateRender = tt(a.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1];
  }
  return new N2(e[0], s, e[n + 1]);
};
var St = function(t, e) {
  return t || t === 0 ? e(t) : e;
};
var _e = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
};
var Q = function(t, e) {
  return !U(t) || !(e = Ir.exec(t)) ? "" : e[1];
};
var Zr = function(t, e, i) {
  return St(i, function(r) {
    return _e(t, e, r);
  });
};
var We = [].slice;
var Ki = function(t, e) {
  return t && ct(t) && "length" in t && (!e && !t.length || t.length - 1 in t && ct(t[0])) && !t.nodeType && t !== ht;
};
var jr = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(r) {
    var n;
    return U(r) && !e || Ki(r, 1) ? (n = i).push.apply(n, ut(r)) : i.push(r);
  }) || i;
};
var ut = function(t, e, i) {
  return E && !e && E.selector ? E.selector(t) : U(t) && !i && (Ue || !Qt()) ? We.call((e || ti).querySelectorAll(t), 0) : K(t) ? jr(t, i) : Ki(t) ? We.call(t, 0) : t ? [t] : [];
};
var Ge = function(t) {
  return t = ut(t)[0] || ae("Invalid scope") || {}, function(e) {
    var i = t.current || t.nativeElement || t;
    return ut(e, i.querySelectorAll ? i : i === t ? ae("Invalid scope") || ti.createElement("div") : t);
  };
};
var Zi = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
};
var ji = function(t) {
  if (L2(t))
    return t;
  var e = ct(t) ? t : { each: t }, i = Rt(e.ease), r = e.from || 0, n = parseFloat(e.base) || 0, s = {}, a = r > 0 && r < 1, o4 = isNaN(r) || a, f = e.axis, _2 = r, l = r;
  return U(r) ? _2 = l = { center: 0.5, edges: 0.5, end: 1 }[r] || 0 : !a && o4 && (_2 = r[0], l = r[1]), function(c, d2, p) {
    var h = (p || e).length, m = s[h], y, x2, v, T, g, b, P2, S2, w;
    if (!m) {
      if (w = e.grid === "auto" ? 0 : (e.grid || [1, ot])[1], !w) {
        for (P2 = -ot; P2 < (P2 = p[w++].getBoundingClientRect().left) && w < h; )
          ;
        w < h && w--;
      }
      for (m = s[h] = [], y = o4 ? Math.min(w, h) * _2 - 0.5 : r % w, x2 = w === ot ? 0 : o4 ? h * l / w - 0.5 : r / w | 0, P2 = 0, S2 = ot, b = 0; b < h; b++)
        v = b % w - y, T = x2 - (b / w | 0), m[b] = g = f ? Math.abs(f === "y" ? T : v) : zi(v * v + T * T), g > P2 && (P2 = g), g < S2 && (S2 = g);
      r === "random" && Zi(m), m.max = P2 - S2, m.min = S2, m.v = h = (parseFloat(e.amount) || parseFloat(e.each) * (w > h ? h - 1 : f ? f === "y" ? h / w : w : Math.max(w, h / w)) || 0) * (r === "edges" ? -1 : 1), m.b = h < 0 ? n - h : n, m.u = Q(e.amount || e.each) || 0, i = i && h < 0 ? sr(i) : i;
    }
    return h = (m[c] - m.min) / m.max || 0, V(m.b + (i ? i(h) : h) * m.v) + m.u;
  };
};
var Qe = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var r = V(Math.round(parseFloat(i) / t) * t * e);
    return (r - r % 1) / e + (yt(i) ? 0 : Q(i));
  };
};
var $i = function(t, e) {
  var i = K(t), r, n;
  return !i && ct(t) && (r = i = t.radius || ot, t.values ? (t = ut(t.values), (n = !yt(t[0])) && (r *= r)) : t = Qe(t.increment)), St(e, i ? L2(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= r ? n : s;
  } : function(s) {
    for (var a = parseFloat(n ? s.x : s), o4 = parseFloat(n ? s.y : 0), f = ot, _2 = 0, l = t.length, c, d2; l--; )
      n ? (c = t[l].x - a, d2 = t[l].y - o4, c = c * c + d2 * d2) : c = Math.abs(t[l] - a), c < f && (f = c, _2 = l);
    return _2 = !r || f <= r ? t[_2] : s, n || _2 === s || yt(s) ? _2 : _2 + Q(s);
  } : Qe(t));
};
var Hi = function(t, e, i, r) {
  return St(K(t) ? !e : i === true ? !!(i = 0) : !r, function() {
    return K(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * r) / r;
  });
};
var $r = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(r) {
    return e.reduce(function(n, s) {
      return s(n);
    }, r);
  };
};
var Hr = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || Q(i));
  };
};
var Jr = function(t, e, i) {
  return tr(t, e, 0, 1, i);
};
var Ji = function(t, e, i) {
  return St(i, function(r) {
    return t[~~e(r)];
  });
};
var tn = function u5(t, e, i) {
  var r = e - t;
  return K(t) ? Ji(t, u5(0, t.length), e) : St(i, function(n) {
    return (r + (n - t) % r) % r + t;
  });
};
var en = function u6(t, e, i) {
  var r = e - t, n = r * 2;
  return K(t) ? Ji(t, u6(0, t.length - 1), e) : St(i, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s);
  });
};
var Kt = function(t) {
  for (var e = 0, i = "", r, n, s, a; ~(r = t.indexOf("random(", e)); )
    s = t.indexOf(")", r), a = t.charAt(r + 7) === "[", n = t.substr(r + 7, s - r - 7).match(a ? Li : Ve), i += t.substr(e, r - e) + Hi(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), e = s + 1;
  return i + t.substr(e, t.length - e);
};
var tr = function(t, e, i, r, n) {
  var s = e - t, a = r - i;
  return St(n, function(o4) {
    return i + ((o4 - t) / s * a || 0);
  });
};
var rn = function u7(t, e, i, r) {
  var n = isNaN(t + e) ? 0 : function(d2) {
    return (1 - d2) * t + d2 * e;
  };
  if (!n) {
    var s = U(t), a = {}, o4, f, _2, l, c;
    if (i === true && (r = 1) && (i = null), s)
      t = { p: t }, e = { p: e };
    else if (K(t) && !K(e)) {
      for (_2 = [], l = t.length, c = l - 2, f = 1; f < l; f++)
        _2.push(u7(t[f - 1], t[f]));
      l--, n = function(p) {
        p *= l;
        var h = Math.min(c, ~~p);
        return _2[h](p - h);
      }, i = e;
    } else
      r || (t = qt(K(t) ? [] : {}, t));
    if (!_2) {
      for (o4 in e)
        ui.call(a, t, o4, "get", e[o4]);
      n = function(p) {
        return ci(p, a) || (s ? t.p : t);
      };
    }
  }
  return St(i, n);
};
var Di = function(t, e, i) {
  var r = t.labels, n = ot, s, a, o4;
  for (s in r)
    a = r[s] - e, a < 0 == !!i && a && n > (a = Math.abs(a)) && (o4 = s, n = a);
  return o4;
};
var rt = function(t, e, i) {
  var r = t.vars, n = r[e], s = E, a = t._ctx, o4, f, _2;
  if (n)
    return o4 = r[e + "Params"], f = r.callbackScope || t, i && wt.length && ve(), a && (E = a), _2 = o4 ? n.apply(f, o4) : n.call(f), E = s, _2;
};
var ee = function(t) {
  return Pt(t), t.scrollTrigger && t.scrollTrigger.kill(!!G), t.progress() < 1 && rt(t, "onInterrupt"), t;
};
var Yt;
var er = [];
var ir = function(t) {
  if (t)
    if (t = !t.name && t.default || t, $e() || t.headless) {
      var e = t.name, i = L2(t), r = e && !i && t.init ? function() {
        this._props = [];
      } : t, n = { init: oe, render: ci, add: ui, kill: xn, modifier: yn, rawVars: 0 }, s = { targetTest: 0, get: 0, getSetter: Me, aliases: {}, register: 0 };
      if (Qt(), t !== r) {
        if (H[e])
          return;
        st(r, st(Te(t, n), s)), qt(r.prototype, qt(n, Te(t, s))), H[r.prop = e] = r, t.targetTest && (ge.push(r), ei[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      Bi(e, r), t.register && t.register(Z, r, $);
    } else
      er.push(t);
};
var C2 = 255;
var ie = { aqua: [0, C2, C2], lime: [0, C2, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, C2], navy: [0, 0, 128], white: [C2, C2, C2], olive: [128, 128, 0], yellow: [C2, C2, 0], orange: [C2, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [C2, 0, 0], pink: [C2, 192, 203], cyan: [0, C2, C2], transparent: [C2, C2, C2, 0] };
var ze = function(t, e, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * C2 + 0.5 | 0;
};
var rr = function(t, e, i) {
  var r = t ? yt(t) ? [t >> 16, t >> 8 & C2, t & C2] : 0 : ie.black, n, s, a, o4, f, _2, l, c, d2, p;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), ie[t])
      r = ie[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & C2, r & C2, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & C2, t & C2];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = p = t.match(Ve), !e)
        o4 = +r[0] % 360 / 360, f = +r[1] / 100, _2 = +r[2] / 100, s = _2 <= 0.5 ? _2 * (f + 1) : _2 + f - _2 * f, n = _2 * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = ze(o4 + 1 / 3, n, s), r[1] = ze(o4, n, s), r[2] = ze(o4 - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return r = t.match(He), i && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(Ve) || ie.transparent;
    r = r.map(Number);
  }
  return e && !p && (n = r[0] / C2, s = r[1] / C2, a = r[2] / C2, l = Math.max(n, s, a), c = Math.min(n, s, a), _2 = (l + c) / 2, l === c ? o4 = f = 0 : (d2 = l - c, f = _2 > 0.5 ? d2 / (2 - l - c) : d2 / (l + c), o4 = l === n ? (s - a) / d2 + (s < a ? 6 : 0) : l === s ? (a - n) / d2 + 2 : (n - s) / d2 + 4, o4 *= 60), r[0] = ~~(o4 + 0.5), r[1] = ~~(f * 100 + 0.5), r[2] = ~~(_2 * 100 + 0.5)), i && r.length < 4 && (r[3] = 1), r;
};
var nr = function(t) {
  var e = [], i = [], r = -1;
  return t.split(gt).forEach(function(n) {
    var s = n.match(zt) || [];
    e.push.apply(e, s), i.push(r += s.length + 1);
  }), e.c = i, e;
};
var Ai = function(t, e, i) {
  var r = "", n = (t + r).match(gt), s = e ? "hsla(" : "rgba(", a = 0, o4, f, _2, l;
  if (!n)
    return t;
  if (n = n.map(function(c) {
    return (c = rr(c, e, 1)) && s + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")";
  }), i && (_2 = nr(t), o4 = i.c, o4.join(r) !== _2.c.join(r)))
    for (f = t.replace(gt, "1").split(zt), l = f.length - 1; a < l; a++)
      r += f[a] + (~o4.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (_2.length ? _2 : n.length ? n : i).shift());
  if (!f)
    for (f = t.split(gt), l = f.length - 1; a < l; a++)
      r += f[a] + n[a];
  return r + f[l];
};
var gt = function() {
  var u15 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in ie)
    u15 += "|" + t + "\\b";
  return new RegExp(u15 + ")", "gi");
}();
var nn = /hsl[a]?\(/;
var ai = function(t) {
  var e = t.join(" "), i;
  if (gt.lastIndex = 0, gt.test(e))
    return i = nn.test(e), t[1] = Ai(t[1], i), t[0] = Ai(t[0], i, nr(t[1])), true;
};
var ue;
var J = function() {
  var u15 = Date.now, t = 500, e = 33, i = u15(), r = i, n = 1e3 / 240, s = n, a = [], o4, f, _2, l, c, d2, p = function h(m) {
    var y = u15() - r, x2 = m === true, v, T, g, b;
    if ((y > t || y < 0) && (i += y - e), r += y, g = r - i, v = g - s, (v > 0 || x2) && (b = ++l.frame, c = g - l.time * 1e3, l.time = g = g / 1e3, s += v + (v >= n ? 4 : n - v), T = 1), x2 || (o4 = f(h)), T)
      for (d2 = 0; d2 < a.length; d2++)
        a[d2](g, c, b, m);
  };
  return l = { time: 0, frame: 0, tick: function() {
    p(true);
  }, deltaRatio: function(m) {
    return c / (1e3 / (m || 60));
  }, wake: function() {
    Ii && (!Ue && $e() && (ht = Ue = __dai_window, ti = ht.document || {}, nt.gsap = Z, (ht.gsapVersions || (ht.gsapVersions = [])).push(Z.version), Ni(xe || ht.GreenSockGlobals || !ht.gsap && ht || {}), er.forEach(ir)), _2 = typeof requestAnimationFrame < "u" && requestAnimationFrame, o4 && l.sleep(), f = _2 || function(m) {
      return setTimeout(m, s - l.time * 1e3 + 1 | 0);
    }, ue = 1, p(2));
  }, sleep: function() {
    (_2 ? cancelAnimationFrame : clearTimeout)(o4), ue = 0, f = oe;
  }, lagSmoothing: function(m, y) {
    t = m || 1 / 0, e = Math.min(y || 33, t);
  }, fps: function(m) {
    n = 1e3 / (m || 240), s = l.time * 1e3 + n;
  }, add: function(m, y, x2) {
    var v = y ? function(T, g, b, P2) {
      m(T, g, b, P2), l.remove(v);
    } : m;
    return l.remove(m), a[x2 ? "unshift" : "push"](v), Qt(), v;
  }, remove: function(m, y) {
    ~(y = a.indexOf(m)) && a.splice(y, 1) && d2 >= y && d2--;
  }, _listeners: a }, l;
}();
var Qt = function() {
  return !ue && J.wake();
};
var O = {};
var sn = /^[\d.\-M][\d.\-,\s]/;
var an = /["']/g;
var on = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, a, o4, f; n < s; n++)
    o4 = i[n], a = n !== s - 1 ? o4.lastIndexOf(",") : o4.length, f = o4.substr(0, a), e[r] = isNaN(f) ? f.replace(an, "").trim() : +f, r = o4.substr(a + 1).trim();
  return e;
};
var un = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", e);
  return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
};
var fn = function(t) {
  var e = (t + "").split("("), i = O[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [on(e[1])] : un(t).split(",").map(Yi)) : O._CE && sn.test(t) ? O._CE("", t) : i;
};
var sr = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
};
var ar = function u8(t, e) {
  for (var i = t._first, r; i; )
    i instanceof W2 ? u8(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? u8(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
};
var Rt = function(t, e) {
  return t && (L2(t) ? t : O[t] || fn(t)) || e;
};
var Lt = function(t, e, i, r) {
  i === void 0 && (i = function(o4) {
    return 1 - e(1 - o4);
  }), r === void 0 && (r = function(o4) {
    return o4 < 0.5 ? e(o4 * 2) / 2 : 1 - e((1 - o4) * 2) / 2;
  });
  var n = { easeIn: e, easeOut: i, easeInOut: r }, s;
  return j(t, function(a) {
    O[a] = nt[a] = n, O[s = a.toLowerCase()] = i;
    for (var o4 in n)
      O[s + (o4 === "easeIn" ? ".in" : o4 === "easeOut" ? ".out" : ".inOut")] = O[a + "." + o4] = n[o4];
  }), n;
};
var or = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
};
var Fe = function u9(t, e, i) {
  var r = e >= 1 ? e : 1, n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = n / Be * (Math.asin(1 / r) || 0), a = function(_2) {
    return _2 === 1 ? 1 : r * Math.pow(2, -10 * _2) * Lr((_2 - s) * n) + 1;
  }, o4 = t === "out" ? a : t === "in" ? function(f) {
    return 1 - a(1 - f);
  } : or(a);
  return n = Be / n, o4.config = function(f, _2) {
    return u9(t, f, _2);
  }, o4;
};
var Le = function u10(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, r = t === "out" ? i : t === "in" ? function(n) {
    return 1 - i(1 - n);
  } : or(i);
  return r.config = function(n) {
    return u10(t, n);
  }, r;
};
j("Linear,Quad,Cubic,Quart,Quint,Strong", function(u15, t) {
  var e = t < 5 ? t + 1 : t;
  Lt(u15 + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
O.Linear.easeNone = O.none = O.Linear.easeIn;
Lt("Elastic", Fe("in"), Fe("out"), Fe());
(function(u15, t) {
  var e = 1 / t, i = 2 * e, r = 2.5 * e, n = function(a) {
    return a < e ? u15 * a * a : a < i ? u15 * Math.pow(a - 1.5 / t, 2) + 0.75 : a < r ? u15 * (a -= 2.25 / t) * a + 0.9375 : u15 * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  Lt("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
Lt("Expo", function(u15) {
  return Math.pow(2, 10 * (u15 - 1)) * u15 + u15 * u15 * u15 * u15 * u15 * u15 * (1 - u15);
});
Lt("Circ", function(u15) {
  return -(zi(1 - u15 * u15) - 1);
});
Lt("Sine", function(u15) {
  return u15 === 1 ? 1 : -Fr(u15 * Er) + 1;
});
Lt("Back", Le("in"), Le("out"), Le());
O.SteppedEase = O.steps = nt.SteppedEase = { config: function(t, e) {
  t === void 0 && (t = 1);
  var i = 1 / t, r = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - M2;
  return function(a) {
    return ((r * _e(0, s, a) | 0) + n) * i;
  };
} };
Xt.ease = O["quad.out"];
j("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(u15) {
  return ii += u15 + "," + u15 + "Params,";
});
var oi = function(t, e) {
  this.id = zr++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : ni, this.set = e ? e.getSetter : Me;
};
var fe = function() {
  function u15(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Gt(this, +e.duration, 1, 1), this.data = e.data, E && (this._ctx = E, E.data.push(this)), ue || J.wake();
  }
  var t = u15.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, Gt(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, r) {
    if (Qt(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Ce(this, i), !n._dp || n.parent || Wi(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, true), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && lt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === M2 || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), Ui(this, i, r)), this;
  }, t.time = function(i, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Ci(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(i, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, t.progress = function(i, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Ci(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(i, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? Wt(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(i, r) {
    if (!arguments.length)
      return this._rts === -M2 ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var n = this.parent && this._ts ? we(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -M2 ? 0 : this._rts, this.totalTime(_e(-Math.abs(this._delay), this.totalDuration(), n), r !== false), ke(this), Xr(this);
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Qt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== M2 && (this._tTime -= M2)))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = i;
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && lt(r, this, i - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + (tt(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(i) {
    var r = this.parent || this._dp;
    return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? we(r.rawTime(i), this) : this._tTime : this._tTime;
  }, t.revert = function(i) {
    i === void 0 && (i = Br);
    var r = G;
    return G = i, si(this) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== false && this.kill(), G = r, this;
  }, t.globalTime = function(i) {
    for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : n;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, Mi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = i, Mi(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, r) {
    return this.totalTime(at(this, i), tt(r));
  }, t.restart = function(i, r) {
    return this.play().totalTime(i ? -this._delay : 0, tt(r)), this._dur || (this._zTime = -M2), this;
  }, t.play = function(i, r) {
    return i != null && this.seek(i, r), this.reversed(false).paused(false);
  }, t.reverse = function(i, r) {
    return i != null && this.seek(i || this.totalDuration(), r), this.reversed(true).paused(false);
  }, t.pause = function(i, r) {
    return i != null && this.seek(i, r), this.paused(true);
  }, t.resume = function() {
    return this.paused(false);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -M2 : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -M2, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, r = this._start, n;
    return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(true)) >= r && n < this.endTime(true) - M2);
  }, t.eventCallback = function(i, r, n) {
    var s = this.vars;
    return arguments.length > 1 ? (r ? (s[i] = r, n && (s[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete s[i], this) : s[i];
  }, t.then = function(i) {
    var r = this;
    return new Promise(function(n) {
      var s = L2(i) ? i : Xi, a = function() {
        var f = r.then;
        r.then = null, L2(s) && (s = s(r)) && (s.then || s === r) && (r.then = f), n(s), r.then = f;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a;
    });
  }, t.kill = function() {
    ee(this);
  }, u15;
}();
st(fe.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: false, parent: null, _initted: false, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -M2, _prom: 0, _ps: false, _rts: 1 });
var W2 = function(u15) {
  Ei(t, u15);
  function t(i, r) {
    var n;
    return i === void 0 && (i = {}), n = u15.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = tt(i.sortChildren), z && lt(i.parent || z, mt(n), r), i.reversed && n.reverse(), i.paused && n.paused(true), i.scrollTrigger && Gi(mt(n), i.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(r, n, s) {
    return ne(0, arguments, this), this;
  }, e.from = function(r, n, s) {
    return ne(1, arguments, this), this;
  }, e.fromTo = function(r, n, s, a) {
    return ne(2, arguments, this), this;
  }, e.set = function(r, n, s) {
    return n.duration = 0, n.parent = this, re(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new N2(r, n, at(this, s), 1), this;
  }, e.call = function(r, n, s) {
    return lt(this, N2.delayedCall(0, r, n), s);
  }, e.staggerTo = function(r, n, s, a, o4, f, _2) {
    return s.duration = n, s.stagger = s.stagger || a, s.onComplete = f, s.onCompleteParams = _2, s.parent = this, new N2(r, s, at(this, o4)), this;
  }, e.staggerFrom = function(r, n, s, a, o4, f, _2) {
    return s.runBackwards = 1, re(s).immediateRender = tt(s.immediateRender), this.staggerTo(r, n, s, a, o4, f, _2);
  }, e.staggerFromTo = function(r, n, s, a, o4, f, _2, l) {
    return a.startAt = s, re(a).immediateRender = tt(a.immediateRender), this.staggerTo(r, n, a, o4, f, _2, l);
  }, e.render = function(r, n, s) {
    var a = this._time, o4 = this._dirty ? this.totalDuration() : this._tDur, f = this._dur, _2 = r <= 0 ? 0 : V(r), l = this._zTime < 0 != r < 0 && (this._initted || !f), c, d2, p, h, m, y, x2, v, T, g, b, P2;
    if (this !== z && _2 > o4 && r >= 0 && (_2 = o4), _2 !== this._tTime || s || l) {
      if (a !== this._time && f && (_2 += this._time - a, r += this._time - a), c = _2, T = this._start, v = this._ts, y = !v, l && (f || (a = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (b = this._yoyo, m = f + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(m * 100 + r, n, s);
        if (c = V(_2 % m), _2 === o4 ? (h = this._repeat, c = f) : (g = V(_2 / m), h = ~~g, h && h === g && (c = f, h--), c > f && (c = f)), g = Wt(this._tTime, m), !a && this._tTime && g !== h && this._tTime - g * m - this._dur <= 0 && (g = h), b && h & 1 && (c = f - c, P2 = 1), h !== g && !this._lock) {
          var S2 = b && g & 1, w = S2 === (b && h & 1);
          if (h < g && (S2 = !S2), a = S2 ? 0 : _2 % f ? f : _2, this._lock = 1, this.render(a || (P2 ? 0 : V(h * m)), n, !f)._lock = 0, this._tTime = _2, !n && this.parent && rt(this, "onRepeat"), this.vars.repeatRefresh && !P2 && (this.invalidate()._lock = 1), a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (f = this._dur, o4 = this._tDur, w && (this._lock = 2, a = S2 ? f : -1e-4, this.render(a, true), this.vars.repeatRefresh && !P2 && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
          ar(this, P2);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (x2 = Qr(this, V(a), V(c)), x2 && (_2 -= c - (c = x2._start))), this._tTime = _2, this._time = c, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, a = 0), !a && _2 && !n && !g && (rt(this, "onStart"), this._tTime !== _2))
        return this;
      if (c >= a && r >= 0)
        for (d2 = this._first; d2; ) {
          if (p = d2._next, (d2._act || c >= d2._start) && d2._ts && x2 !== d2) {
            if (d2.parent !== this)
              return this.render(r, n, s);
            if (d2.render(d2._ts > 0 ? (c - d2._start) * d2._ts : (d2._dirty ? d2.totalDuration() : d2._tDur) + (c - d2._start) * d2._ts, n, s), c !== this._time || !this._ts && !y) {
              x2 = 0, p && (_2 += this._zTime = -M2);
              break;
            }
          }
          d2 = p;
        }
      else {
        d2 = this._last;
        for (var k3 = r < 0 ? r : c; d2; ) {
          if (p = d2._prev, (d2._act || k3 <= d2._end) && d2._ts && x2 !== d2) {
            if (d2.parent !== this)
              return this.render(r, n, s);
            if (d2.render(d2._ts > 0 ? (k3 - d2._start) * d2._ts : (d2._dirty ? d2.totalDuration() : d2._tDur) + (k3 - d2._start) * d2._ts, n, s || G && si(d2)), c !== this._time || !this._ts && !y) {
              x2 = 0, p && (_2 += this._zTime = k3 ? -M2 : M2);
              break;
            }
          }
          d2 = p;
        }
      }
      if (x2 && !n && (this.pause(), x2.render(c >= a ? 0 : -M2)._zTime = c >= a ? 1 : -1, this._ts))
        return this._start = T, ke(this), this.render(r, n, s);
      this._onUpdate && !n && rt(this, "onUpdate", true), (_2 === o4 && this._tTime >= this.totalDuration() || !_2 && a) && (T === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((r || !f) && (_2 === o4 && this._ts > 0 || !_2 && this._ts < 0) && Pt(this, 1), !n && !(r < 0 && !a) && (_2 || a || !o4) && (rt(this, _2 === o4 && r >= 0 ? "onComplete" : "onReverseComplete", true), this._prom && !(_2 < o4 && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(r, n) {
    var s = this;
    if (yt(n) || (n = at(this, n, r)), !(r instanceof fe)) {
      if (K(r))
        return r.forEach(function(a) {
          return s.add(a, n);
        }), this;
      if (U(r))
        return this.addLabel(r, n);
      if (L2(r))
        r = N2.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? lt(this, r, n) : this;
  }, e.getChildren = function(r, n, s, a) {
    r === void 0 && (r = true), n === void 0 && (n = true), s === void 0 && (s = true), a === void 0 && (a = -ot);
    for (var o4 = [], f = this._first; f; )
      f._start >= a && (f instanceof N2 ? n && o4.push(f) : (s && o4.push(f), r && o4.push.apply(o4, f.getChildren(true, n, s)))), f = f._next;
    return o4;
  }, e.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === r)
        return n[s];
  }, e.remove = function(r) {
    return U(r) ? this.removeLabel(r) : L2(r) ? this.killTweensOf(r) : (r.parent === this && Oe(this, r), r === this._recent && (this._recent = this._last), At(this));
  }, e.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = V(J.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), u15.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(r, n) {
    return this.labels[r] = at(this, n), this;
  }, e.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, e.addPause = function(r, n, s) {
    var a = N2.delayedCall(0, n || oe, s);
    return a.data = "isPause", this._hasPause = 1, lt(this, a, at(this, r));
  }, e.removePause = function(r) {
    var n = this._first;
    for (r = at(this, r); n; )
      n._start === r && n.data === "isPause" && Pt(n), n = n._next;
  }, e.killTweensOf = function(r, n, s) {
    for (var a = this.getTweensOf(r, s), o4 = a.length; o4--; )
      Tt !== a[o4] && a[o4].kill(r, n);
    return this;
  }, e.getTweensOf = function(r, n) {
    for (var s = [], a = ut(r), o4 = this._first, f = yt(n), _2; o4; )
      o4 instanceof N2 ? Vr(o4._targets, a) && (f ? (!Tt || o4._initted && o4._ts) && o4.globalTime(0) <= n && o4.globalTime(o4.totalDuration()) > n : !n || o4.isActive()) && s.push(o4) : (_2 = o4.getTweensOf(a, n)).length && s.push.apply(s, _2), o4 = o4._next;
    return s;
  }, e.tweenTo = function(r, n) {
    n = n || {};
    var s = this, a = at(s, r), o4 = n, f = o4.startAt, _2 = o4.onStart, l = o4.onStartParams, c = o4.immediateRender, d2, p = N2.to(s, st({ ease: n.ease || "none", lazy: false, immediateRender: false, time: a, overwrite: "auto", duration: n.duration || Math.abs((a - (f && "time" in f ? f.time : s._time)) / s.timeScale()) || M2, onStart: function() {
      if (s.pause(), !d2) {
        var m = n.duration || Math.abs((a - (f && "time" in f ? f.time : s._time)) / s.timeScale());
        p._dur !== m && Gt(p, m, 0, 1).render(p._time, true, true), d2 = 1;
      }
      _2 && _2.apply(p, l || []);
    } }, n));
    return c ? p.render(0) : p;
  }, e.tweenFromTo = function(r, n, s) {
    return this.tweenTo(n, st({ startAt: { time: at(this, r) } }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(r) {
    return r === void 0 && (r = this._time), Di(this, at(this, r));
  }, e.previousLabel = function(r) {
    return r === void 0 && (r = this._time), Di(this, at(this, r), 1);
  }, e.currentLabel = function(r) {
    return arguments.length ? this.seek(r, true) : this.previousLabel(this._time + M2);
  }, e.shiftChildren = function(r, n, s) {
    s === void 0 && (s = 0);
    for (var a = this._first, o4 = this.labels, f; a; )
      a._start >= s && (a._start += r, a._end += r), a = a._next;
    if (n)
      for (f in o4)
        o4[f] >= s && (o4[f] += r);
    return At(this);
  }, e.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return u15.prototype.invalidate.call(this, r);
  }, e.clear = function(r) {
    r === void 0 && (r = true);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), At(this);
  }, e.totalDuration = function(r) {
    var n = 0, s = this, a = s._last, o4 = ot, f, _2, l;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
    if (s._dirty) {
      for (l = s.parent; a; )
        f = a._prev, a._dirty && a.totalDuration(), _2 = a._start, _2 > o4 && s._sort && a._ts && !s._lock ? (s._lock = 1, lt(s, a, _2 - a._delay, 1)._lock = 0) : o4 = _2, _2 < 0 && a._ts && (n -= _2, (!l && !s._dp || l && l.smoothChildTiming) && (s._start += _2 / s._ts, s._time -= _2, s._tTime -= _2), s.shiftChildren(-_2, false, -1 / 0), o4 = 0), a._end > n && a._ts && (n = a._end), a = f;
      Gt(s, s === z && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(r) {
    if (z._ts && (Ui(z, we(r, z)), Vi = J.frame), J.frame >= Oi) {
      Oi += et.autoSleep || 120;
      var n = z._first;
      if ((!n || !n._ts) && et.autoSleep && J._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || J.sleep();
      }
    }
  }, t;
}(fe);
st(W2.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var _n = function(t, e, i, r, n, s, a) {
  var o4 = new $(this._pt, t, e, 0, 1, li, null, n), f = 0, _2 = 0, l, c, d2, p, h, m, y, x2;
  for (o4.b = i, o4.e = r, i += "", r += "", (y = ~r.indexOf("random(")) && (r = Kt(r)), s && (x2 = [i, r], s(x2, t, e), i = x2[0], r = x2[1]), c = i.match(Re) || []; l = Re.exec(r); )
    p = l[0], h = r.substring(f, l.index), d2 ? d2 = (d2 + 1) % 5 : h.substr(-5) === "rgba(" && (d2 = 1), p !== c[_2++] && (m = parseFloat(c[_2 - 1]) || 0, o4._pt = { _next: o4._pt, p: h || _2 === 1 ? h : ",", s: m, c: p.charAt(1) === "=" ? Ft(m, p) - m : parseFloat(p) - m, m: d2 && d2 < 4 ? Math.round : 0 }, f = Re.lastIndex);
  return o4.c = f < r.length ? r.substring(f, r.length) : "", o4.fp = a, (Je.test(r) || y) && (o4.e = 0), this._pt = o4, o4;
};
var ui = function(t, e, i, r, n, s, a, o4, f, _2) {
  L2(r) && (r = r(n || 0, t, s));
  var l = t[e], c = i !== "get" ? i : L2(l) ? f ? t[e.indexOf("set") || !L2(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](f) : t[e]() : l, d2 = L2(l) ? f ? pn : _r : hi, p;
  if (U(r) && (~r.indexOf("random(") && (r = Kt(r)), r.charAt(1) === "=" && (p = Ft(c, r) + (Q(c) || 0), (p || p === 0) && (r = p))), !_2 || c !== r || Ke)
    return !isNaN(c * r) && r !== "" ? (p = new $(this._pt, t, e, +c || 0, r - (c || 0), typeof l == "boolean" ? gn : hr, 0, d2), f && (p.fp = f), a && p.modifier(a, this, t), this._pt = p) : (!l && !(e in t) && Se(e, r), _n.call(this, t, e, c, r, d2, o4 || et.stringFilter, f));
};
var hn = function(t, e, i, r, n) {
  if (L2(t) && (t = se(t, n, e, i, r)), !ct(t) || t.style && t.nodeType || K(t) || Fi(t))
    return U(t) ? se(t, n, e, i, r) : t;
  var s = {}, a;
  for (a in t)
    s[a] = se(t[a], n, e, i, r);
  return s;
};
var fi = function(t, e, i, r, n, s) {
  var a, o4, f, _2;
  if (H[t] && (a = new H[t]()).init(n, a.rawVars ? e[t] : hn(e[t], r, n, s, i), i, r, s) !== false && (i._pt = o4 = new $(i._pt, n, t, 0, 1, a.render, a, 0, a.priority), i !== Yt))
    for (f = i._ptLookup[i._targets.indexOf(n)], _2 = a._props.length; _2--; )
      f[a._props[_2]] = o4;
  return a;
};
var Tt;
var Ke;
var _i = function u11(t, e, i) {
  var r = t.vars, n = r.ease, s = r.startAt, a = r.immediateRender, o4 = r.lazy, f = r.onUpdate, _2 = r.runBackwards, l = r.yoyoEase, c = r.keyframes, d2 = r.autoRevert, p = t._dur, h = t._startAt, m = t._targets, y = t.parent, x2 = y && y.data === "nested" ? y.vars.targets : m, v = t._overwrite === "auto" && !je, T = t.timeline, g, b, P2, S2, w, k3, R3, D2, A2, q, Y2, B2, X2;
  if (T && (!c || !n) && (n = "none"), t._ease = Rt(n, Xt.ease), t._yEase = l ? sr(Rt(l === true ? n : l, Xt.ease)) : 0, l && t._yoyo && !t._repeat && (l = t._yEase, t._yEase = t._ease, t._ease = l), t._from = !T && !!r.runBackwards, !T || c && !r.stagger) {
    if (D2 = m[0] ? bt(m[0]).harness : 0, B2 = D2 && r[D2.prop], g = Te(r, ei), h && (h._zTime < 0 && h.progress(1), e < 0 && _2 && a && !d2 ? h.render(-1, true) : h.revert(_2 && p ? me : Nr), h._lazy = 0), s) {
      if (Pt(t._startAt = N2.set(m, st({ data: "isStart", overwrite: false, parent: y, immediateRender: true, lazy: !h && tt(o4), startAt: null, delay: 0, onUpdate: f && function() {
        return rt(t, "onUpdate");
      }, stagger: 0 }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (G || !a && !d2) && t._startAt.revert(me), a && p && e <= 0 && i <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (_2 && p && !h) {
      if (e && (a = false), P2 = st({ overwrite: false, data: "isFromStart", lazy: a && !h && tt(o4), immediateRender: a, stagger: 0, parent: y }, g), B2 && (P2[D2.prop] = B2), Pt(t._startAt = N2.set(m, P2)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (G ? t._startAt.revert(me) : t._startAt.render(-1, true)), t._zTime = e, !a)
        u11(t._startAt, M2, M2);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, o4 = p && tt(o4) || o4 && !p, b = 0; b < m.length; b++) {
      if (w = m[b], R3 = w._gsap || ri(m)[b]._gsap, t._ptLookup[b] = q = {}, Ye[R3.id] && wt.length && ve(), Y2 = x2 === m ? b : x2.indexOf(w), D2 && (A2 = new D2()).init(w, B2 || g, t, Y2, x2) !== false && (t._pt = S2 = new $(t._pt, w, A2.name, 0, 1, A2.render, A2, 0, A2.priority), A2._props.forEach(function(_t) {
        q[_t] = S2;
      }), A2.priority && (k3 = 1)), !D2 || B2)
        for (P2 in g)
          H[P2] && (A2 = fi(P2, g, t, Y2, w, x2)) ? A2.priority && (k3 = 1) : q[P2] = S2 = ui.call(t, w, P2, "get", g[P2], Y2, x2, 0, r.stringFilter);
      t._op && t._op[b] && t.kill(w, t._op[b]), v && t._pt && (Tt = t, z.killTweensOf(w, q, t.globalTime(e)), X2 = !t.parent, Tt = 0), t._pt && o4 && (Ye[R3.id] = 1);
    }
    k3 && di(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = f, t._initted = (!t._op || t._pt) && !X2, c && e <= 0 && T.render(ot, true, true);
};
var ln = function(t, e, i, r, n, s, a, o4) {
  var f = (t._pt && t._ptCache || (t._ptCache = {}))[e], _2, l, c, d2;
  if (!f)
    for (f = t._ptCache[e] = [], c = t._ptLookup, d2 = t._targets.length; d2--; ) {
      if (_2 = c[d2][e], _2 && _2.d && _2.d._pt)
        for (_2 = _2.d._pt; _2 && _2.p !== e && _2.fp !== e; )
          _2 = _2._next;
      if (!_2)
        return Ke = 1, t.vars[e] = "+=0", _i(t, a), Ke = 0, o4 ? ae(e + " not eligible for reset") : 1;
      f.push(_2);
    }
  for (d2 = f.length; d2--; )
    l = f[d2], _2 = l._pt || l, _2.s = (r || r === 0) && !n ? r : _2.s + (r || 0) + s * _2.c, _2.c = i - _2.s, l.e && (l.e = I(i) + Q(l.e)), l.b && (l.b = _2.s + Q(l.b));
};
var cn = function(t, e) {
  var i = t[0] ? bt(t[0]).harness : 0, r = i && i.aliases, n, s, a, o4;
  if (!r)
    return e;
  n = qt({}, e);
  for (s in r)
    if (s in n)
      for (o4 = r[s].split(","), a = o4.length; a--; )
        n[o4[a]] = n[s];
  return n;
};
var dn = function(t, e, i, r) {
  var n = e.ease || r || "power1.inOut", s, a;
  if (K(e))
    a = i[t] || (i[t] = []), e.forEach(function(o4, f) {
      return a.push({ t: f / (e.length - 1) * 100, v: o4, e: n });
    });
  else
    for (s in e)
      a = i[s] || (i[s] = []), s === "ease" || a.push({ t: parseFloat(t), v: e[s], e: n });
};
var se = function(t, e, i, r, n) {
  return L2(t) ? t.call(e, i, r, n) : U(t) && ~t.indexOf("random(") ? Kt(t) : t;
};
var ur = ii + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
var fr = {};
j(ur + ",id,stagger,delay,duration,paused,scrollTrigger", function(u15) {
  return fr[u15] = 1;
});
var N2 = function(u15) {
  Ei(t, u15);
  function t(i, r, n, s) {
    var a;
    typeof r == "number" && (n.duration = r, r = n, n = null), a = u15.call(this, s ? r : re(r)) || this;
    var o4 = a.vars, f = o4.duration, _2 = o4.delay, l = o4.immediateRender, c = o4.stagger, d2 = o4.overwrite, p = o4.keyframes, h = o4.defaults, m = o4.scrollTrigger, y = o4.yoyoEase, x2 = r.parent || z, v = (K(i) || Fi(i) ? yt(i[0]) : "length" in r) ? [i] : ut(i), T, g, b, P2, S2, w, k3, R3;
    if (a._targets = v.length ? ri(v) : ae("GSAP target " + i + " not found. https://gsap.com", !et.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = d2, p || c || pe(f) || pe(_2)) {
      if (r = a.vars, T = a.timeline = new W2({ data: "nested", defaults: h || {}, targets: x2 && x2.data === "nested" ? x2.vars.targets : v }), T.kill(), T.parent = T._dp = mt(a), T._start = 0, c || pe(f) || pe(_2)) {
        if (P2 = v.length, k3 = c && ji(c), ct(c))
          for (S2 in c)
            ~ur.indexOf(S2) && (R3 || (R3 = {}), R3[S2] = c[S2]);
        for (g = 0; g < P2; g++)
          b = Te(r, fr), b.stagger = 0, y && (b.yoyoEase = y), R3 && qt(b, R3), w = v[g], b.duration = +se(f, mt(a), g, w, v), b.delay = (+se(_2, mt(a), g, w, v) || 0) - a._delay, !c && P2 === 1 && b.delay && (a._delay = _2 = b.delay, a._start += _2, b.delay = 0), T.to(w, b, k3 ? k3(g, w, v) : 0), T._ease = O.none;
        T.duration() ? f = _2 = 0 : a.timeline = 0;
      } else if (p) {
        re(st(T.vars.defaults, { ease: "none" })), T._ease = Rt(p.ease || r.ease || "none");
        var D2 = 0, A2, q, Y2;
        if (K(p))
          p.forEach(function(B2) {
            return T.to(v, B2, ">");
          }), T.duration();
        else {
          b = {};
          for (S2 in p)
            S2 === "ease" || S2 === "easeEach" || dn(S2, p[S2], b, p.easeEach);
          for (S2 in b)
            for (A2 = b[S2].sort(function(B2, X2) {
              return B2.t - X2.t;
            }), D2 = 0, g = 0; g < A2.length; g++)
              q = A2[g], Y2 = { ease: q.e, duration: (q.t - (g ? A2[g - 1].t : 0)) / 100 * f }, Y2[S2] = q.v, T.to(v, Y2, D2), D2 += Y2.duration;
          T.duration() < f && T.to({}, { duration: f - T.duration() });
        }
      }
      f || a.duration(f = T.duration());
    } else
      a.timeline = 0;
    return d2 === true && !je && (Tt = mt(a), z.killTweensOf(v), Tt = 0), lt(x2, mt(a), n), r.reversed && a.reverse(), r.paused && a.paused(true), (l || !f && !p && a._start === V(x2._time) && tt(l) && qr(mt(a)) && x2.data !== "nested") && (a._tTime = -M2, a.render(Math.max(0, -_2) || 0)), m && Gi(mt(a), m), a;
  }
  var e = t.prototype;
  return e.render = function(r, n, s) {
    var a = this._time, o4 = this._tDur, f = this._dur, _2 = r < 0, l = r > o4 - M2 && !_2 ? o4 : r < M2 ? 0 : r, c, d2, p, h, m, y, x2, v, T;
    if (!f)
      Gr(this, r, n, s);
    else if (l !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== _2 || this._lazy) {
      if (c = l, v = this.timeline, this._repeat) {
        if (h = f + this._rDelay, this._repeat < -1 && _2)
          return this.totalTime(h * 100 + r, n, s);
        if (c = V(l % h), l === o4 ? (p = this._repeat, c = f) : (m = V(l / h), p = ~~m, p && p === m ? (c = f, p--) : c > f && (c = f)), y = this._yoyo && p & 1, y && (T = this._yEase, c = f - c), m = Wt(this._tTime, h), c === a && !s && this._initted && p === m)
          return this._tTime = l, this;
        p !== m && (v && this._yEase && ar(v, y), this.vars.repeatRefresh && !y && !this._lock && c !== h && this._initted && (this._lock = s = 1, this.render(V(h * p), true).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Qi(this, _2 ? r : c, s, n, l))
          return this._tTime = 0, this;
        if (a !== this._time && !(s && this.vars.repeatRefresh && p !== m))
          return this;
        if (f !== this._dur)
          return this.render(r, n, s);
      }
      if (this._tTime = l, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = x2 = (T || this._ease)(c / f), this._from && (this.ratio = x2 = 1 - x2), !a && l && !n && !m && (rt(this, "onStart"), this._tTime !== l))
        return this;
      for (d2 = this._pt; d2; )
        d2.r(x2, d2.d), d2 = d2._next;
      v && v.render(r < 0 ? r : v._dur * v._ease(c / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (_2 && Xe(this, r, n, s), rt(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && rt(this, "onRepeat"), (l === this._tDur || !l) && this._tTime === l && (_2 && !this._onUpdate && Xe(this, r, true, true), (r || !f) && (l === this._tDur && this._ts > 0 || !l && this._ts < 0) && Pt(this, 1), !n && !(_2 && !a) && (l || a || y) && (rt(this, l === o4 ? "onComplete" : "onReverseComplete", true), this._prom && !(l < o4 && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), u15.prototype.invalidate.call(this, r);
  }, e.resetTo = function(r, n, s, a, o4) {
    ue || J.wake(), this._ts || this.play();
    var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts), _2;
    return this._initted || _i(this, f), _2 = this._ease(f / this._dur), ln(this, r, n, s, a, _2, f, o4) ? this.resetTo(r, n, s, a, 1) : (Ce(this, 0), this.parent || qi(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? ee(this) : this.scrollTrigger && this.scrollTrigger.kill(!!G), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, Tt && Tt.vars.overwrite !== true)._first || ee(this), this.parent && s !== this.timeline.totalDuration() && Gt(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var a = this._targets, o4 = r ? ut(r) : a, f = this._ptLookup, _2 = this._pt, l, c, d2, p, h, m, y;
    if ((!n || n === "all") && Yr(a, o4))
      return n === "all" && (this._pt = 0), ee(this);
    for (l = this._op = this._op || [], n !== "all" && (U(n) && (h = {}, j(n, function(x2) {
      return h[x2] = 1;
    }), n = h), n = cn(a, n)), y = a.length; y--; )
      if (~o4.indexOf(a[y])) {
        c = f[y], n === "all" ? (l[y] = n, p = c, d2 = {}) : (d2 = l[y] = l[y] || {}, p = n);
        for (h in p)
          m = c && c[h], m && ((!("kill" in m.d) || m.d.kill(h) === true) && Oe(this, m, "_pt"), delete c[h]), d2 !== "all" && (d2[h] = 1);
      }
    return this._initted && !this._pt && _2 && ee(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return ne(1, arguments);
  }, t.delayedCall = function(r, n, s, a) {
    return new t(n, 0, { immediateRender: false, lazy: false, overwrite: false, delay: r, onComplete: n, onReverseComplete: n, onCompleteParams: s, onReverseCompleteParams: s, callbackScope: a });
  }, t.fromTo = function(r, n, s) {
    return ne(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, s) {
    return z.killTweensOf(r, n, s);
  }, t;
}(fe);
st(N2.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
j("staggerTo,staggerFrom,staggerFromTo", function(u15) {
  N2[u15] = function() {
    var t = new W2(), e = We.call(arguments, 0);
    return e.splice(u15 === "staggerFromTo" ? 5 : 4, 0, 0), t[u15].apply(t, e);
  };
});
var hi = function(t, e, i) {
  return t[e] = i;
};
var _r = function(t, e, i) {
  return t[e](i);
};
var pn = function(t, e, i, r) {
  return t[e](r.fp, i);
};
var mn = function(t, e, i) {
  return t.setAttribute(e, i);
};
var Me = function(t, e) {
  return L2(t[e]) ? _r : Pe(t[e]) && t.setAttribute ? mn : hi;
};
var hr = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
};
var gn = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
};
var li = function(t, e) {
  var i = e._pt, r = "";
  if (!t && e.b)
    r = e.b;
  else if (t === 1 && e.e)
    r = e.e;
  else {
    for (; i; )
      r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
    r += e.c;
  }
  e.set(e.t, e.p, r, e);
};
var ci = function(t, e) {
  for (var i = e._pt; i; )
    i.r(t, i.d), i = i._next;
};
var yn = function(t, e, i, r) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === r && n.modifier(t, e, i), n = s;
};
var xn = function(t) {
  for (var e = this._pt, i, r; e; )
    r = e._next, e.p === t && !e.op || e.op === t ? Oe(this, e, "_pt") : e.dep || (i = 1), e = r;
  return !i;
};
var vn = function(t, e, i, r) {
  r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
};
var di = function(t) {
  for (var e = t._pt, i, r, n, s; e; ) {
    for (i = e._next, r = n; r && r.pr > e.pr; )
      r = r._next;
    (e._prev = r ? r._prev : s) ? e._prev._next = e : n = e, (e._next = r) ? r._prev = e : s = e, e = i;
  }
  t._pt = n;
};
var $ = function() {
  function u15(e, i, r, n, s, a, o4, f, _2) {
    this.t = i, this.s = n, this.c = s, this.p = r, this.r = a || hr, this.d = o4 || this, this.set = f || hi, this.pr = _2 || 0, this._next = e, e && (e._prev = this);
  }
  var t = u15.prototype;
  return t.modifier = function(i, r, n) {
    this.mSet = this.mSet || this.set, this.set = vn, this.m = i, this.mt = n, this.tween = r;
  }, u15;
}();
j(ii + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(u15) {
  return ei[u15] = 1;
});
nt.TweenMax = nt.TweenLite = N2;
nt.TimelineLite = nt.TimelineMax = W2;
z = new W2({ sortChildren: false, defaults: Xt, autoRemoveChildren: true, id: "root", smoothChildTiming: true });
et.stringFilter = ai;
var Et = [];
var ye = {};
var Tn = [];
var Ri = 0;
var wn = 0;
var Ie = function(t) {
  return (ye[t] || Tn).map(function(e) {
    return e();
  });
};
var Ze = function() {
  var t = Date.now(), e = [];
  t - Ri > 2 && (Ie("matchMediaInit"), Et.forEach(function(i) {
    var r = i.queries, n = i.conditions, s, a, o4, f;
    for (a in r)
      s = ht.matchMedia(r[a]).matches, s && (o4 = 1), s !== n[a] && (n[a] = s, f = 1);
    f && (i.revert(), o4 && e.push(i));
  }), Ie("matchMediaRevert"), e.forEach(function(i) {
    return i.onMatch(i, function(r) {
      return i.add(null, r);
    });
  }), Ri = t, Ie("matchMedia"));
};
var lr = function() {
  function u15(e, i) {
    this.selector = i && Ge(i), this.data = [], this._r = [], this.isReverted = false, this.id = wn++, e && this.add(e);
  }
  var t = u15.prototype;
  return t.add = function(i, r, n) {
    L2(i) && (n = r, r = i, i = L2);
    var s = this, a = function() {
      var f = E, _2 = s.selector, l;
      return f && f !== s && f.data.push(s), n && (s.selector = Ge(n)), E = s, l = r.apply(s, arguments), L2(l) && s._r.push(l), E = f, s.selector = _2, s.isReverted = false, l;
    };
    return s.last = a, i === L2 ? a(s, function(o4) {
      return s.add(null, o4);
    }) : i ? s[i] = a : a;
  }, t.ignore = function(i) {
    var r = E;
    E = null, i(this), E = r;
  }, t.getTweens = function() {
    var i = [];
    return this.data.forEach(function(r) {
      return r instanceof u15 ? i.push.apply(i, r.getTweens()) : r instanceof N2 && !(r.parent && r.parent.data === "nested") && i.push(r);
    }), i;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(i, r) {
    var n = this;
    if (i ? function() {
      for (var a = n.getTweens(), o4 = n.data.length, f; o4--; )
        f = n.data[o4], f.data === "isFlip" && (f.revert(), f.getChildren(true, true, false).forEach(function(_2) {
          return a.splice(a.indexOf(_2), 1);
        }));
      for (a.map(function(_2) {
        return { g: _2._dur || _2._delay || _2._sat && !_2._sat.vars.immediateRender ? _2.globalTime(0) : -1 / 0, t: _2 };
      }).sort(function(_2, l) {
        return l.g - _2.g || -1 / 0;
      }).forEach(function(_2) {
        return _2.t.revert(i);
      }), o4 = n.data.length; o4--; )
        f = n.data[o4], f instanceof W2 ? f.data !== "nested" && (f.scrollTrigger && f.scrollTrigger.revert(), f.kill()) : !(f instanceof N2) && f.revert && f.revert(i);
      n._r.forEach(function(_2) {
        return _2(i, n);
      }), n.isReverted = true;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), r)
      for (var s = Et.length; s--; )
        Et[s].id === this.id && Et.splice(s, 1);
  }, t.revert = function(i) {
    this.kill(i || {});
  }, u15;
}();
var bn = function() {
  function u15(e) {
    this.contexts = [], this.scope = e, E && E.data.push(this);
  }
  var t = u15.prototype;
  return t.add = function(i, r, n) {
    ct(i) || (i = { matches: i });
    var s = new lr(0, n || this.scope), a = s.conditions = {}, o4, f, _2;
    E && !s.selector && (s.selector = E.selector), this.contexts.push(s), r = s.add("onMatch", r), s.queries = i;
    for (f in i)
      f === "all" ? _2 = 1 : (o4 = ht.matchMedia(i[f]), o4 && (Et.indexOf(s) < 0 && Et.push(s), (a[f] = o4.matches) && (_2 = 1), o4.addListener ? o4.addListener(Ze) : o4.addEventListener("change", Ze)));
    return _2 && r(s, function(l) {
      return s.add(null, l);
    }), this;
  }, t.revert = function(i) {
    this.kill(i || {});
  }, t.kill = function(i) {
    this.contexts.forEach(function(r) {
      return r.kill(i, true);
    });
  }, u15;
}();
var be = { registerPlugin: function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  e.forEach(function(r) {
    return ir(r);
  });
}, timeline: function(t) {
  return new W2(t);
}, getTweensOf: function(t, e) {
  return z.getTweensOf(t, e);
}, getProperty: function(t, e, i, r) {
  U(t) && (t = ut(t)[0]);
  var n = bt(t || {}).get, s = i ? Xi : Yi;
  return i === "native" && (i = ""), t && (e ? s((H[e] && H[e].get || n)(t, e, i, r)) : function(a, o4, f) {
    return s((H[a] && H[a].get || n)(t, a, o4, f));
  });
}, quickSetter: function(t, e, i) {
  if (t = ut(t), t.length > 1) {
    var r = t.map(function(_2) {
      return Z.quickSetter(_2, e, i);
    }), n = r.length;
    return function(_2) {
      for (var l = n; l--; )
        r[l](_2);
    };
  }
  t = t[0] || {};
  var s = H[e], a = bt(t), o4 = a.harness && (a.harness.aliases || {})[e] || e, f = s ? function(_2) {
    var l = new s();
    Yt._pt = 0, l.init(t, i ? _2 + i : _2, Yt, 0, [t]), l.render(1, l), Yt._pt && ci(1, Yt);
  } : a.set(t, o4);
  return s ? f : function(_2) {
    return f(t, o4, i ? _2 + i : _2, a, 1);
  };
}, quickTo: function(t, e, i) {
  var r, n = Z.to(t, st((r = {}, r[e] = "+=0.1", r.paused = true, r.stagger = 0, r), i || {})), s = function(o4, f, _2) {
    return n.resetTo(e, o4, f, _2);
  };
  return s.tween = n, s;
}, isTweening: function(t) {
  return z.getTweensOf(t, true).length > 0;
}, defaults: function(t) {
  return t && t.ease && (t.ease = Rt(t.ease, Xt.ease)), ki(Xt, t || {});
}, config: function(t) {
  return ki(et, t || {});
}, registerEffect: function(t) {
  var e = t.name, i = t.effect, r = t.plugins, n = t.defaults, s = t.extendTimeline;
  (r || "").split(",").forEach(function(a) {
    return a && !H[a] && !nt[a] && ae(e + " effect requires " + a + " plugin.");
  }), Ee[e] = function(a, o4, f) {
    return i(ut(a), st(o4 || {}, n), f);
  }, s && (W2.prototype[e] = function(a, o4, f) {
    return this.add(Ee[e](a, ct(o4) ? o4 : (f = o4) && {}, this), f);
  });
}, registerEase: function(t, e) {
  O[t] = Rt(e);
}, parseEase: function(t, e) {
  return arguments.length ? Rt(t, e) : O;
}, getById: function(t) {
  return z.getById(t);
}, exportRoot: function(t, e) {
  t === void 0 && (t = {});
  var i = new W2(t), r, n;
  for (i.smoothChildTiming = tt(t.smoothChildTiming), z.remove(i), i._dp = 0, i._time = i._tTime = z._time, r = z._first; r; )
    n = r._next, (e || !(!r._dur && r instanceof N2 && r.vars.onComplete === r._targets[0])) && lt(i, r, r._start - r._delay), r = n;
  return lt(z, i, 0), i;
}, context: function(t, e) {
  return t ? new lr(t, e) : E;
}, matchMedia: function(t) {
  return new bn(t);
}, matchMediaRefresh: function() {
  return Et.forEach(function(t) {
    var e = t.conditions, i, r;
    for (r in e)
      e[r] && (e[r] = false, i = 1);
    i && t.revert();
  }) || Ze();
}, addEventListener: function(t, e) {
  var i = ye[t] || (ye[t] = []);
  ~i.indexOf(e) || i.push(e);
}, removeEventListener: function(t, e) {
  var i = ye[t], r = i && i.indexOf(e);
  r >= 0 && i.splice(r, 1);
}, utils: { wrap: tn, wrapYoyo: en, distribute: ji, random: Hi, snap: $i, normalize: Jr, getUnit: Q, clamp: Zr, splitColor: rr, toArray: ut, selector: Ge, mapRange: tr, pipe: $r, unitize: Hr, interpolate: rn, shuffle: Zi }, install: Ni, effects: Ee, ticker: J, updateRoot: W2.updateRoot, plugins: H, globalTimeline: z, core: { PropTween: $, globals: Bi, Tween: N2, Timeline: W2, Animation: fe, getCache: bt, _removeLinkedListItem: Oe, reverting: function() {
  return G;
}, context: function(t) {
  return t && E && (E.data.push(t), t._ctx = E), E;
}, suppressOverwrites: function(t) {
  return je = t;
} } };
j("to,from,fromTo,delayedCall,set,killTweensOf", function(u15) {
  return be[u15] = N2[u15];
});
J.add(W2.updateRoot);
Yt = be.to({}, { duration: 0 });
var Pn = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
    i = i._next;
  return i;
};
var Sn = function(t, e) {
  var i = t._targets, r, n, s;
  for (r in e)
    for (n = i.length; n--; )
      s = t._ptLookup[n][r], s && (s = s.d) && (s._pt && (s = Pn(s, r)), s && s.modifier && s.modifier(e[r], t, i[n], r));
};
var Ne = function(t, e) {
  return { name: t, headless: 1, rawVars: 1, init: function(r, n, s) {
    s._onInit = function(a) {
      var o4, f;
      if (U(n) && (o4 = {}, j(n, function(_2) {
        return o4[_2] = 1;
      }), n = o4), e) {
        o4 = {};
        for (f in n)
          o4[f] = e(n[f]);
        n = o4;
      }
      Sn(a, n);
    };
  } };
};
var Z = be.registerPlugin({ name: "attr", init: function(t, e, i, r, n) {
  var s, a, o4;
  this.tween = i;
  for (s in e)
    o4 = t.getAttribute(s) || "", a = this.add(t, "setAttribute", (o4 || 0) + "", e[s], r, n, 0, 0, s), a.op = s, a.b = o4, this._props.push(s);
}, render: function(t, e) {
  for (var i = e._pt; i; )
    G ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
} }, { name: "endArray", headless: 1, init: function(t, e) {
  for (var i = e.length; i--; )
    this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
} }, Ne("roundProps", Qe), Ne("modifiers"), Ne("snap", $i)) || be;
N2.version = W2.version = Z.version = "3.13.0";
Ii = 1;
$e() && Qt();
var On = O.Power0;
var kn = O.Power1;
var Cn = O.Power2;
var Mn = O.Power3;
var Dn = O.Power4;
var An = O.Linear;
var Rn = O.Quad;
var En = O.Cubic;
var zn = O.Quart;
var Fn = O.Quint;
var Ln = O.Strong;
var In = O.Elastic;
var Nn = O.Back;
var Bn = O.SteppedEase;
var Vn = O.Bounce;
var Un = O.Sine;
var Yn = O.Expo;
var Xn = O.Circ;
var cr;
var Ot;
var jt;
var vi;
var Vt;
var qn;
var dr;
var Ti;
var Wn = function() {
  return typeof __dai_window < "u";
};
var vt = {};
var Bt = 180 / Math.PI;
var $t = Math.PI / 180;
var Zt = Math.atan2;
var pr = 1e8;
var wi = /([A-Z])/g;
var Gn = /(left|right|width|margin|padding|x)/i;
var Qn = /[\s,\(]\S/;
var dt = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" };
var mi = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
};
var Kn = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
};
var Zn = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
};
var jn = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
};
var br = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
};
var Pr = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
};
var $n = function(t, e, i) {
  return t.style[e] = i;
};
var Hn = function(t, e, i) {
  return t.style.setProperty(e, i);
};
var Jn = function(t, e, i) {
  return t._gsap[e] = i;
};
var ts = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
};
var es = function(t, e, i, r, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = i, s.renderTransform(n, s);
};
var is = function(t, e, i, r, n) {
  var s = t._gsap;
  s[e] = i, s.renderTransform(n, s);
};
var F = "transform";
var it = F + "Origin";
var rs = function u12(t, e) {
  var i = this, r = this.target, n = r.style, s = r._gsap;
  if (t in vt && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = dt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return i.tfm[a] = xt(r, a);
      }) : this.tfm[t] = s.x ? s[t] : xt(r, t), t === it && (this.tfm.zOrigin = s.zOrigin);
    else
      return dt.transform.split(",").forEach(function(a) {
        return u12.call(i, a, e);
      });
    if (this.props.indexOf(F) >= 0)
      return;
    s.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(it, e, "")), t = F;
  }
  (n || e) && this.props.push(t, e, n[t]);
};
var Sr = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
};
var ns = function() {
  var t = this.props, e = this.target, i = e.style, r = e._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? t[n + 1] === 2 ? e[t[n]](t[n + 2]) : e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(wi, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      r[s] = this.tfm[s];
    r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = Ti(), (!n || !n.isStart) && !i[F] && (Sr(i), r.zOrigin && i[it] && (i[it] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
};
var Or = function(t, e) {
  var i = { target: t, props: [], revert: ns, save: rs };
  return t._gsap || Z.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(r) {
    return i.save(r);
  }), i;
};
var kr;
var gi = function(t, e) {
  var i = Ot.createElementNS ? Ot.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ot.createElement(t);
  return i && i.style ? i : Ot.createElement(t);
};
var ft = function u13(t, e, i) {
  var r = getComputedStyle(t);
  return r[e] || r.getPropertyValue(e.replace(wi, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && u13(t, Ht(e) || e, 1) || "";
};
var mr = "O,Moz,ms,Ms,Webkit".split(",");
var Ht = function(t, e, i) {
  var r = e || Vt, n = r.style, s = 5;
  if (t in n && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(mr[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? mr[s] : "") + t;
};
var yi = function() {
  Wn() && __dai_window.document && (cr = __dai_window, Ot = cr.document, jt = Ot.documentElement, Vt = gi("div") || { style: {} }, qn = gi("div"), F = Ht(F), it = F + "Origin", Vt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", kr = !!Ht("perspective"), Ti = Z.core.reverting, vi = 1);
};
var gr = function(t) {
  var e = t.ownerSVGElement, i = gi("svg", e && e.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = t.cloneNode(true), n;
  r.style.display = "block", i.appendChild(r), jt.appendChild(i);
  try {
    n = r.getBBox();
  } catch {
  }
  return i.removeChild(r), jt.removeChild(i), n;
};
var yr = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
};
var Cr = function(t) {
  var e, i;
  try {
    e = t.getBBox();
  } catch {
    e = gr(t), i = 1;
  }
  return e && (e.width || e.height) || i || (e = gr(t)), e && !e.width && !e.x && !e.y ? { x: +yr(t, ["x", "cx", "x1"]) || 0, y: +yr(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } : e;
};
var Mr = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Cr(t));
};
var Ut = function(t, e) {
  if (e) {
    var i = t.style, r;
    e in vt && e !== it && (e = F), i.removeProperty ? (r = e.substr(0, 2), (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(r === "--" ? e : e.replace(wi, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
};
var kt = function(t, e, i, r, n, s) {
  var a = new $(t._pt, e, i, 0, 1, s ? Pr : br);
  return t._pt = a, a.b = r, a.e = n, t._props.push(i), a;
};
var xr = { deg: 1, rad: 1, turn: 1 };
var ss = { grid: 1, flex: 1 };
var Ct = function u14(t, e, i, r) {
  var n = parseFloat(i) || 0, s = (i + "").trim().substr((n + "").length) || "px", a = Vt.style, o4 = Gn.test(e), f = t.tagName.toLowerCase() === "svg", _2 = (f ? "client" : "offset") + (o4 ? "Width" : "Height"), l = 100, c = r === "px", d2 = r === "%", p, h, m, y;
  if (r === s || !n || xr[r] || xr[s])
    return n;
  if (s !== "px" && !c && (n = u14(t, e, i, "px")), y = t.getCTM && Mr(t), (d2 || s === "%") && (vt[e] || ~e.indexOf("adius")))
    return p = y ? t.getBBox()[o4 ? "width" : "height"] : t[_2], I(d2 ? n / p * l : n / 100 * p);
  if (a[o4 ? "width" : "height"] = l + (c ? s : r), h = r !== "rem" && ~e.indexOf("adius") || r === "em" && t.appendChild && !f ? t : t.parentNode, y && (h = (t.ownerSVGElement || {}).parentNode), (!h || h === Ot || !h.appendChild) && (h = Ot.body), m = h._gsap, m && d2 && m.width && o4 && m.time === J.time && !m.uncache)
    return I(n / m.width * l);
  if (d2 && (e === "height" || e === "width")) {
    var x2 = t.style[e];
    t.style[e] = l + r, p = t[_2], x2 ? t.style[e] = x2 : Ut(t, e);
  } else
    (d2 || s === "%") && !ss[ft(h, "display")] && (a.position = ft(t, "position")), h === t && (a.position = "static"), h.appendChild(Vt), p = Vt[_2], h.removeChild(Vt), a.position = "absolute";
  return o4 && d2 && (m = bt(h), m.time = J.time, m.width = h[_2]), I(c ? p * n / l : p && n ? l / p * n : 0);
};
var xt = function(t, e, i, r) {
  var n;
  return vi || yi(), e in dt && e !== "transform" && (e = dt[e], ~e.indexOf(",") && (e = e.split(",")[0])), vt[e] && e !== "transform" ? (n = ce(t, r), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Ae(ft(t, it)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = De[e] && De[e](t, e, i) || ft(t, e) || ni(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? Ct(t, e, n, i) + i : n;
};
var as = function(t, e, i, r) {
  if (!i || i === "none") {
    var n = Ht(e, t, 1), s = n && ft(t, n, 1);
    s && s !== i ? (e = n, i = s) : e === "borderColor" && (i = ft(t, "borderTopColor"));
  }
  var a = new $(this._pt, t.style, e, 0, 1, li), o4 = 0, f = 0, _2, l, c, d2, p, h, m, y, x2, v, T, g;
  if (a.b = i, a.e = r, i += "", r += "", r.substring(0, 6) === "var(--" && (r = ft(t, r.substring(4, r.indexOf(")")))), r === "auto" && (h = t.style[e], t.style[e] = r, r = ft(t, e) || r, h ? t.style[e] = h : Ut(t, e)), _2 = [i, r], ai(_2), i = _2[0], r = _2[1], c = i.match(zt) || [], g = r.match(zt) || [], g.length) {
    for (; l = zt.exec(r); )
      m = l[0], x2 = r.substring(o4, l.index), p ? p = (p + 1) % 5 : (x2.substr(-5) === "rgba(" || x2.substr(-5) === "hsla(") && (p = 1), m !== (h = c[f++] || "") && (d2 = parseFloat(h) || 0, T = h.substr((d2 + "").length), m.charAt(1) === "=" && (m = Ft(d2, m) + T), y = parseFloat(m), v = m.substr((y + "").length), o4 = zt.lastIndex - v.length, v || (v = v || et.units[e] || T, o4 === r.length && (r += v, a.e += v)), T !== v && (d2 = Ct(t, e, h, v) || 0), a._pt = { _next: a._pt, p: x2 || f === 1 ? x2 : ",", s: d2, c: y - d2, m: p && p < 4 || e === "zIndex" ? Math.round : 0 });
    a.c = o4 < r.length ? r.substring(o4, r.length) : "";
  } else
    a.r = e === "display" && r === "none" ? Pr : br;
  return Je.test(r) && (a.e = 0), this._pt = a, a;
};
var vr = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" };
var os = function(t) {
  var e = t.split(" "), i = e[0], r = e[1] || "50%";
  return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = vr[i] || i, e[1] = vr[r] || r, e.join(" ");
};
var us = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, r = i.style, n = e.u, s = i._gsap, a, o4, f;
    if (n === "all" || n === true)
      r.cssText = "", o4 = 1;
    else
      for (n = n.split(","), f = n.length; --f > -1; )
        a = n[f], vt[a] && (o4 = 1, a = a === "transformOrigin" ? it : F), Ut(i, a);
    o4 && (Ut(i, F), s && (s.svg && i.removeAttribute("transform"), r.scale = r.rotate = r.translate = "none", ce(i, 1), s.uncache = 1, Sr(r)));
  }
};
var De = { clearProps: function(t, e, i, r, n) {
  if (n.data !== "isFromStart") {
    var s = t._pt = new $(t._pt, e, i, 0, 0, us);
    return s.u = r, s.pr = -10, s.tween = n, t._props.push(i), 1;
  }
} };
var le = [1, 0, 0, 1, 0, 0];
var Dr = {};
var Ar = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
};
var Tr = function(t) {
  var e = ft(t, F);
  return Ar(e) ? le : e.substr(7).match(He).map(I);
};
var bi = function(t, e) {
  var i = t._gsap || bt(t), r = t.style, n = Tr(t), s, a, o4, f;
  return i.svg && t.getAttribute("transform") ? (o4 = t.transform.baseVal.consolidate().matrix, n = [o4.a, o4.b, o4.c, o4.d, o4.e, o4.f], n.join(",") === "1,0,0,1,0,0" ? le : n) : (n === le && !t.offsetParent && t !== jt && !i.svg && (o4 = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent && !t.getBoundingClientRect().width) && (f = 1, a = t.nextElementSibling, jt.appendChild(t)), n = Tr(t), o4 ? r.display = o4 : Ut(t, "display"), f && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : jt.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
};
var xi = function(t, e, i, r, n, s) {
  var a = t._gsap, o4 = n || bi(t, true), f = a.xOrigin || 0, _2 = a.yOrigin || 0, l = a.xOffset || 0, c = a.yOffset || 0, d2 = o4[0], p = o4[1], h = o4[2], m = o4[3], y = o4[4], x2 = o4[5], v = e.split(" "), T = parseFloat(v[0]) || 0, g = parseFloat(v[1]) || 0, b, P2, S2, w;
  i ? o4 !== le && (P2 = d2 * m - p * h) && (S2 = T * (m / P2) + g * (-h / P2) + (h * x2 - m * y) / P2, w = T * (-p / P2) + g * (d2 / P2) - (d2 * x2 - p * y) / P2, T = S2, g = w) : (b = Cr(t), T = b.x + (~v[0].indexOf("%") ? T / 100 * b.width : T), g = b.y + (~(v[1] || v[0]).indexOf("%") ? g / 100 * b.height : g)), r || r !== false && a.smooth ? (y = T - f, x2 = g - _2, a.xOffset = l + (y * d2 + x2 * h) - y, a.yOffset = c + (y * p + x2 * m) - x2) : a.xOffset = a.yOffset = 0, a.xOrigin = T, a.yOrigin = g, a.smooth = !!r, a.origin = e, a.originIsAbsolute = !!i, t.style[it] = "0px 0px", s && (kt(s, a, "xOrigin", f, T), kt(s, a, "yOrigin", _2, g), kt(s, a, "xOffset", l, a.xOffset), kt(s, a, "yOffset", c, a.yOffset)), t.setAttribute("data-svg-origin", T + " " + g);
};
var ce = function(t, e) {
  var i = t._gsap || new oi(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var r = t.style, n = i.scaleX < 0, s = "px", a = "deg", o4 = getComputedStyle(t), f = ft(t, it) || "0", _2, l, c, d2, p, h, m, y, x2, v, T, g, b, P2, S2, w, k3, R3, D2, A2, q, Y2, B2, X2, _t, de2, Jt, te, Mt, Si2, pt, Dt;
  return _2 = l = c = h = m = y = x2 = v = T = 0, d2 = p = 1, i.svg = !!(t.getCTM && Mr(t)), o4.translate && ((o4.translate !== "none" || o4.scale !== "none" || o4.rotate !== "none") && (r[F] = (o4.translate !== "none" ? "translate3d(" + (o4.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (o4.rotate !== "none" ? "rotate(" + o4.rotate + ") " : "") + (o4.scale !== "none" ? "scale(" + o4.scale.split(" ").join(",") + ") " : "") + (o4[F] !== "none" ? o4[F] : "")), r.scale = r.rotate = r.translate = "none"), P2 = bi(t, i.svg), i.svg && (i.uncache ? (_t = t.getBBox(), f = i.xOrigin - _t.x + "px " + (i.yOrigin - _t.y) + "px", X2 = "") : X2 = !e && t.getAttribute("data-svg-origin"), xi(t, X2 || f, !!X2 || i.originIsAbsolute, i.smooth !== false, P2)), g = i.xOrigin || 0, b = i.yOrigin || 0, P2 !== le && (R3 = P2[0], D2 = P2[1], A2 = P2[2], q = P2[3], _2 = Y2 = P2[4], l = B2 = P2[5], P2.length === 6 ? (d2 = Math.sqrt(R3 * R3 + D2 * D2), p = Math.sqrt(q * q + A2 * A2), h = R3 || D2 ? Zt(D2, R3) * Bt : 0, x2 = A2 || q ? Zt(A2, q) * Bt + h : 0, x2 && (p *= Math.abs(Math.cos(x2 * $t))), i.svg && (_2 -= g - (g * R3 + b * A2), l -= b - (g * D2 + b * q))) : (Dt = P2[6], Si2 = P2[7], Jt = P2[8], te = P2[9], Mt = P2[10], pt = P2[11], _2 = P2[12], l = P2[13], c = P2[14], S2 = Zt(Dt, Mt), m = S2 * Bt, S2 && (w = Math.cos(-S2), k3 = Math.sin(-S2), X2 = Y2 * w + Jt * k3, _t = B2 * w + te * k3, de2 = Dt * w + Mt * k3, Jt = Y2 * -k3 + Jt * w, te = B2 * -k3 + te * w, Mt = Dt * -k3 + Mt * w, pt = Si2 * -k3 + pt * w, Y2 = X2, B2 = _t, Dt = de2), S2 = Zt(-A2, Mt), y = S2 * Bt, S2 && (w = Math.cos(-S2), k3 = Math.sin(-S2), X2 = R3 * w - Jt * k3, _t = D2 * w - te * k3, de2 = A2 * w - Mt * k3, pt = q * k3 + pt * w, R3 = X2, D2 = _t, A2 = de2), S2 = Zt(D2, R3), h = S2 * Bt, S2 && (w = Math.cos(S2), k3 = Math.sin(S2), X2 = R3 * w + D2 * k3, _t = Y2 * w + B2 * k3, D2 = D2 * w - R3 * k3, B2 = B2 * w - Y2 * k3, R3 = X2, Y2 = _t), m && Math.abs(m) + Math.abs(h) > 359.9 && (m = h = 0, y = 180 - y), d2 = I(Math.sqrt(R3 * R3 + D2 * D2 + A2 * A2)), p = I(Math.sqrt(B2 * B2 + Dt * Dt)), S2 = Zt(Y2, B2), x2 = Math.abs(S2) > 2e-4 ? S2 * Bt : 0, T = pt ? 1 / (pt < 0 ? -pt : pt) : 0), i.svg && (X2 = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Ar(ft(t, F)), X2 && t.setAttribute("transform", X2))), Math.abs(x2) > 90 && Math.abs(x2) < 270 && (n ? (d2 *= -1, x2 += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (p *= -1, x2 += x2 <= 0 ? 180 : -180)), e = e || i.uncache, i.x = _2 - ((i.xPercent = _2 && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-_2) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s, i.y = l - ((i.yPercent = l && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s, i.z = c + s, i.scaleX = I(d2), i.scaleY = I(p), i.rotation = I(h) + a, i.rotationX = I(m) + a, i.rotationY = I(y) + a, i.skewX = x2 + a, i.skewY = v + a, i.transformPerspective = T + s, (i.zOrigin = parseFloat(f.split(" ")[2]) || !e && i.zOrigin || 0) && (r[it] = Ae(f)), i.xOffset = i.yOffset = 0, i.force3D = et.force3D, i.renderTransform = i.svg ? _s : kr ? Rr : fs, i.uncache = 0, i;
};
var Ae = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
};
var pi = function(t, e, i) {
  var r = Q(e);
  return I(parseFloat(e) + parseFloat(Ct(t, "x", i + "px", r))) + r;
};
var fs = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Rr(t, e);
};
var It = "0deg";
var he = "0px";
var Nt = ") ";
var Rr = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, a = i.y, o4 = i.z, f = i.rotation, _2 = i.rotationY, l = i.rotationX, c = i.skewX, d2 = i.skewY, p = i.scaleX, h = i.scaleY, m = i.transformPerspective, y = i.force3D, x2 = i.target, v = i.zOrigin, T = "", g = y === "auto" && t && t !== 1 || y === true;
  if (v && (l !== It || _2 !== It)) {
    var b = parseFloat(_2) * $t, P2 = Math.sin(b), S2 = Math.cos(b), w;
    b = parseFloat(l) * $t, w = Math.cos(b), s = pi(x2, s, P2 * w * -v), a = pi(x2, a, -Math.sin(b) * -v), o4 = pi(x2, o4, S2 * w * -v + v);
  }
  m !== he && (T += "perspective(" + m + Nt), (r || n) && (T += "translate(" + r + "%, " + n + "%) "), (g || s !== he || a !== he || o4 !== he) && (T += o4 !== he || g ? "translate3d(" + s + ", " + a + ", " + o4 + ") " : "translate(" + s + ", " + a + Nt), f !== It && (T += "rotate(" + f + Nt), _2 !== It && (T += "rotateY(" + _2 + Nt), l !== It && (T += "rotateX(" + l + Nt), (c !== It || d2 !== It) && (T += "skew(" + c + ", " + d2 + Nt), (p !== 1 || h !== 1) && (T += "scale(" + p + ", " + h + Nt), x2.style[F] = T || "translate(0, 0)";
};
var _s = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, a = i.y, o4 = i.rotation, f = i.skewX, _2 = i.skewY, l = i.scaleX, c = i.scaleY, d2 = i.target, p = i.xOrigin, h = i.yOrigin, m = i.xOffset, y = i.yOffset, x2 = i.forceCSS, v = parseFloat(s), T = parseFloat(a), g, b, P2, S2, w;
  o4 = parseFloat(o4), f = parseFloat(f), _2 = parseFloat(_2), _2 && (_2 = parseFloat(_2), f += _2, o4 += _2), o4 || f ? (o4 *= $t, f *= $t, g = Math.cos(o4) * l, b = Math.sin(o4) * l, P2 = Math.sin(o4 - f) * -c, S2 = Math.cos(o4 - f) * c, f && (_2 *= $t, w = Math.tan(f - _2), w = Math.sqrt(1 + w * w), P2 *= w, S2 *= w, _2 && (w = Math.tan(_2), w = Math.sqrt(1 + w * w), g *= w, b *= w)), g = I(g), b = I(b), P2 = I(P2), S2 = I(S2)) : (g = l, S2 = c, b = P2 = 0), (v && !~(s + "").indexOf("px") || T && !~(a + "").indexOf("px")) && (v = Ct(d2, "x", s, "px"), T = Ct(d2, "y", a, "px")), (p || h || m || y) && (v = I(v + p - (p * g + h * P2) + m), T = I(T + h - (p * b + h * S2) + y)), (r || n) && (w = d2.getBBox(), v = I(v + r / 100 * w.width), T = I(T + n / 100 * w.height)), w = "matrix(" + g + "," + b + "," + P2 + "," + S2 + "," + v + "," + T + ")", d2.setAttribute("transform", w), x2 && (d2.style[F] = w);
};
var hs = function(t, e, i, r, n) {
  var s = 360, a = U(n), o4 = parseFloat(n) * (a && ~n.indexOf("rad") ? Bt : 1), f = o4 - r, _2 = r + f + "deg", l, c;
  return a && (l = n.split("_")[1], l === "short" && (f %= s, f !== f % (s / 2) && (f += f < 0 ? s : -s)), l === "cw" && f < 0 ? f = (f + s * pr) % s - ~~(f / s) * s : l === "ccw" && f > 0 && (f = (f - s * pr) % s - ~~(f / s) * s)), t._pt = c = new $(t._pt, e, i, r, f, Kn), c.e = _2, c.u = "deg", t._props.push(i), c;
};
var wr = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
};
var ls = function(t, e, i) {
  var r = wr({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, a, o4, f, _2, l, c, d2, p;
  r.svg ? (f = i.getAttribute("transform"), i.setAttribute("transform", ""), s[F] = e, a = ce(i, 1), Ut(i, F), i.setAttribute("transform", f)) : (f = getComputedStyle(i)[F], s[F] = e, a = ce(i, 1), s[F] = f);
  for (o4 in vt)
    f = r[o4], _2 = a[o4], f !== _2 && n.indexOf(o4) < 0 && (d2 = Q(f), p = Q(_2), l = d2 !== p ? Ct(i, o4, f, p) : parseFloat(f), c = parseFloat(_2), t._pt = new $(t._pt, a, o4, l, c - l, mi), t._pt.u = p || 0, t._props.push(o4));
  wr(a, r);
};
j("padding,margin,Width,Radius", function(u15, t) {
  var e = "Top", i = "Right", r = "Bottom", n = "Left", s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(a) {
    return t < 2 ? u15 + a : "border" + a + u15;
  });
  De[t > 1 ? "border" + u15 : u15] = function(a, o4, f, _2, l) {
    var c, d2;
    if (arguments.length < 4)
      return c = s.map(function(p) {
        return xt(a, p, f);
      }), d2 = c.join(" "), d2.split(c[0]).length === 5 ? c[0] : d2;
    c = (_2 + "").split(" "), d2 = {}, s.forEach(function(p, h) {
      return d2[p] = c[h] = c[h] || c[(h - 1) / 2 | 0];
    }), a.init(o4, d2, l);
  };
});
var Pi = { name: "css", register: yi, targetTest: function(t) {
  return t.style && t.nodeType;
}, init: function(t, e, i, r, n) {
  var s = this._props, a = t.style, o4 = i.vars.startAt, f, _2, l, c, d2, p, h, m, y, x2, v, T, g, b, P2, S2;
  vi || yi(), this.styles = this.styles || Or(t), S2 = this.styles.props, this.tween = i;
  for (h in e)
    if (h !== "autoRound" && (_2 = e[h], !(H[h] && fi(h, e, i, r, t, n)))) {
      if (d2 = typeof _2, p = De[h], d2 === "function" && (_2 = _2.call(i, r, t, n), d2 = typeof _2), d2 === "string" && ~_2.indexOf("random(") && (_2 = Kt(_2)), p)
        p(this, t, h, _2, i) && (P2 = 1);
      else if (h.substr(0, 2) === "--")
        f = (getComputedStyle(t).getPropertyValue(h) + "").trim(), _2 += "", gt.lastIndex = 0, gt.test(f) || (m = Q(f), y = Q(_2)), y ? m !== y && (f = Ct(t, h, f, y) + y) : m && (_2 += m), this.add(a, "setProperty", f, _2, r, n, 0, 0, h), s.push(h), S2.push(h, 0, a[h]);
      else if (d2 !== "undefined") {
        if (o4 && h in o4 ? (f = typeof o4[h] == "function" ? o4[h].call(i, r, t, n) : o4[h], U(f) && ~f.indexOf("random(") && (f = Kt(f)), Q(f + "") || f === "auto" || (f += et.units[h] || Q(xt(t, h)) || ""), (f + "").charAt(1) === "=" && (f = xt(t, h))) : f = xt(t, h), c = parseFloat(f), x2 = d2 === "string" && _2.charAt(1) === "=" && _2.substr(0, 2), x2 && (_2 = _2.substr(2)), l = parseFloat(_2), h in dt && (h === "autoAlpha" && (c === 1 && xt(t, "visibility") === "hidden" && l && (c = 0), S2.push("visibility", 0, a.visibility), kt(this, a, "visibility", c ? "inherit" : "hidden", l ? "inherit" : "hidden", !l)), h !== "scale" && h !== "transform" && (h = dt[h], ~h.indexOf(",") && (h = h.split(",")[0]))), v = h in vt, v) {
          if (this.styles.save(h), d2 === "string" && _2.substring(0, 6) === "var(--" && (_2 = ft(t, _2.substring(4, _2.indexOf(")"))), l = parseFloat(_2)), T || (g = t._gsap, g.renderTransform && !e.parseTransform || ce(t, e.parseTransform), b = e.smoothOrigin !== false && g.smooth, T = this._pt = new $(this._pt, a, F, 0, 1, g.renderTransform, g, 0, -1), T.dep = 1), h === "scale")
            this._pt = new $(this._pt, g, "scaleY", g.scaleY, (x2 ? Ft(g.scaleY, x2 + l) : l) - g.scaleY || 0, mi), this._pt.u = 0, s.push("scaleY", h), h += "X";
          else if (h === "transformOrigin") {
            S2.push(it, 0, a[it]), _2 = os(_2), g.svg ? xi(t, _2, 0, b, 0, this) : (y = parseFloat(_2.split(" ")[2]) || 0, y !== g.zOrigin && kt(this, g, "zOrigin", g.zOrigin, y), kt(this, a, h, Ae(f), Ae(_2)));
            continue;
          } else if (h === "svgOrigin") {
            xi(t, _2, 1, b, 0, this);
            continue;
          } else if (h in Dr) {
            hs(this, g, h, c, x2 ? Ft(c, x2 + _2) : _2);
            continue;
          } else if (h === "smoothOrigin") {
            kt(this, g, "smooth", g.smooth, _2);
            continue;
          } else if (h === "force3D") {
            g[h] = _2;
            continue;
          } else if (h === "transform") {
            ls(this, _2, t);
            continue;
          }
        } else
          h in a || (h = Ht(h) || h);
        if (v || (l || l === 0) && (c || c === 0) && !Qn.test(_2) && h in a)
          m = (f + "").substr((c + "").length), l || (l = 0), y = Q(_2) || (h in et.units ? et.units[h] : m), m !== y && (c = Ct(t, h, f, y)), this._pt = new $(this._pt, v ? g : a, h, c, (x2 ? Ft(c, x2 + l) : l) - c, !v && (y === "px" || h === "zIndex") && e.autoRound !== false ? jn : mi), this._pt.u = y || 0, m !== y && y !== "%" && (this._pt.b = f, this._pt.r = Zn);
        else if (h in a)
          as.call(this, t, h, f, x2 ? x2 + _2 : _2);
        else if (h in t)
          this.add(t, h, f || t[h], x2 ? x2 + _2 : _2, r, n);
        else if (h !== "parseTransform") {
          Se(h, _2);
          continue;
        }
        v || (h in a ? S2.push(h, 0, a[h]) : typeof t[h] == "function" ? S2.push(h, 2, t[h]()) : S2.push(h, 1, f || t[h])), s.push(h);
      }
    }
  P2 && di(this);
}, render: function(t, e) {
  if (e.tween._time || !Ti())
    for (var i = e._pt; i; )
      i.r(t, i.d), i = i._next;
  else
    e.styles.revert();
}, get: xt, aliases: dt, getSetter: function(t, e, i) {
  var r = dt[e];
  return r && r.indexOf(",") < 0 && (e = r), e in vt && e !== it && (t._gsap.x || xt(t, "x")) ? i && dr === i ? e === "scale" ? ts : Jn : (dr = i || {}) && (e === "scale" ? es : is) : t.style && !Pe(t.style[e]) ? $n : ~e.indexOf("-") ? Hn : Me(t, e);
}, core: { _removeProperty: Ut, _getMatrix: bi } };
Z.utils.checkPrefix = Ht;
Z.core.getStyleSaver = Or;
(function(u15, t, e, i) {
  var r = j(u15 + "," + t + "," + e, function(n) {
    vt[n] = 1;
  });
  j(t, function(n) {
    et.units[n] = "deg", Dr[n] = 1;
  }), dt[r[13]] = u15 + "," + t, j(i, function(n) {
    var s = n.split(":");
    dt[s[1]] = r[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
j("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(u15) {
  et.units[u15] = "px";
});
Z.registerPlugin(Pi);
var cs = Z.registerPlugin(Pi) || Z;
var Ts = cs.core.Tween;

// http-url:https://esm.sh/gsap@3.13.0/es2022/ScrollTrigger.mjs
function Dn2(o4, e) {
  for (var n = 0; n < e.length; n++) {
    var t = e[n];
    t.enumerable = t.enumerable || false, t.configurable = true, "value" in t && (t.writable = true), Object.defineProperty(o4, t.key, t);
  }
}
function xi2(o4, e, n) {
  return e && Dn2(o4.prototype, e), n && Dn2(o4, n), o4;
}
var ve2;
var Yr2;
var yi2;
var Ge2;
var Rt2;
var At2;
var jt2;
var An2;
var Bt2;
var pr2;
var On2;
var xt2;
var ot2;
var Yn2;
var Fn2 = function() {
  return ve2 || typeof __dai_window < "u" && (ve2 = __dai_window.gsap) && ve2.registerPlugin && ve2;
};
var Ln2 = 1;
var Qt2 = [];
var k2 = [];
var st2 = [];
var dr2 = Date.now;
var on2 = function(e, n) {
  return n;
};
var wi2 = function() {
  var e = pr2.core, n = e.bridge || {}, t = e._scrollers, r = e._proxies;
  t.push.apply(t, k2), r.push.apply(r, st2), k2 = t, st2 = r, on2 = function(u15, l) {
    return n[u15](l);
  };
};
var wt2 = function(e, n) {
  return ~st2.indexOf(e) && st2[st2.indexOf(e) + 1][n];
};
var gr2 = function(e) {
  return !!~On2.indexOf(e);
};
var Oe2 = function(e, n, t, r, i) {
  return e.addEventListener(n, t, { passive: r !== false, capture: !!i });
};
var Ae2 = function(e, n, t, r) {
  return e.removeEventListener(n, t, !!r);
};
var Ar2 = "scrollLeft";
var Or2 = "scrollTop";
var sn2 = function() {
  return xt2 && xt2.isPressed || k2.cache++;
};
var Fr2 = function(e, n) {
  var t = function r(i) {
    if (i || i === 0) {
      Ln2 && (Ge2.history.scrollRestoration = "manual");
      var u15 = xt2 && xt2.isPressed;
      i = r.v = Math.round(i) || (xt2 && xt2.iOS ? 1 : 0), e(i), r.cacheID = k2.cache, u15 && on2("ss", i);
    } else
      (n || k2.cache !== r.cacheID || on2("ref")) && (r.cacheID = k2.cache, r.v = e());
    return r.v + r.offset;
  };
  return t.offset = 0, e && t;
};
var Ce2 = { s: Ar2, p: "left", p2: "Left", os: "right", os2: "Right", d: "width", d2: "Width", a: "x", sc: Fr2(function(o4) {
  return arguments.length ? Ge2.scrollTo(o4, re2.sc()) : Ge2.pageXOffset || Rt2[Ar2] || At2[Ar2] || jt2[Ar2] || 0;
}) };
var re2 = { s: Or2, p: "top", p2: "Top", os: "bottom", os2: "Bottom", d: "height", d2: "Height", a: "y", op: Ce2, sc: Fr2(function(o4) {
  return arguments.length ? Ge2.scrollTo(Ce2.sc(), o4) : Ge2.pageYOffset || Rt2[Or2] || At2[Or2] || jt2[Or2] || 0;
}) };
var Ye2 = function(e, n) {
  return (n && n._ctx && n._ctx.selector || ve2.utils.toArray)(e)[0] || (typeof e == "string" && ve2.config().nullTargetWarn !== false ? console.warn("Element not found:", e) : null);
};
var bi2 = function(e, n) {
  for (var t = n.length; t--; )
    if (n[t] === e || n[t].contains(e))
      return true;
  return false;
};
var yt2 = function(e, n) {
  var t = n.s, r = n.sc;
  gr2(e) && (e = Rt2.scrollingElement || At2);
  var i = k2.indexOf(e), u15 = r === re2.sc ? 1 : 2;
  !~i && (i = k2.push(e) - 1), k2[i + u15] || Oe2(e, "scroll", sn2);
  var l = k2[i + u15], p = l || (k2[i + u15] = Fr2(wt2(e, t), true) || (gr2(e) ? r : Fr2(function(x2) {
    return arguments.length ? e[t] = x2 : e[t];
  })));
  return p.target = e, l || (p.smooth = ve2.getProperty(e, "scrollBehavior") === "smooth"), p;
};
var Lr2 = function(e, n, t) {
  var r = e, i = e, u15 = dr2(), l = u15, p = n || 50, x2 = Math.max(500, p * 3), Y2 = function(v, U2) {
    var X2 = dr2();
    U2 || X2 - u15 > p ? (i = r, r = v, l = u15, u15 = X2) : t ? r += v : r = i + (v - i) / (X2 - l) * (u15 - l);
  }, M3 = function() {
    i = r = t ? 0 : r, l = u15 = 0;
  }, h = function(v) {
    var U2 = l, X2 = i, ie2 = dr2();
    return (v || v === 0) && v !== r && Y2(v), u15 === l || ie2 - l > x2 ? 0 : (r + (t ? X2 : -X2)) / ((t ? ie2 : u15) - U2) * 1e3;
  };
  return { update: Y2, reset: M3, getVelocity: h };
};
var fr2 = function(e, n) {
  return n && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
};
var Rn2 = function(e) {
  var n = Math.max.apply(Math, e), t = Math.min.apply(Math, e);
  return Math.abs(n) >= Math.abs(t) ? n : t;
};
var zn2 = function() {
  pr2 = ve2.core.globals().ScrollTrigger, pr2 && pr2.core && wi2();
};
var In2 = function(e) {
  return ve2 = e || Fn2(), !Yr2 && ve2 && typeof document < "u" && document.body && (Ge2 = __dai_window, Rt2 = document, At2 = Rt2.documentElement, jt2 = Rt2.body, On2 = [Ge2, Rt2, At2, jt2], yi2 = ve2.utils.clamp, Yn2 = ve2.core.context || function() {
  }, Bt2 = "onpointerenter" in jt2 ? "pointer" : "mouse", An2 = K2.isTouch = Ge2.matchMedia && Ge2.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Ge2 || __dai_navigator.maxTouchPoints > 0 || __dai_navigator.msMaxTouchPoints > 0 ? 2 : 0, ot2 = K2.eventTypes = ("ontouchstart" in At2 ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in At2 ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
    return Ln2 = 0;
  }, 500), zn2(), Yr2 = 1), Yr2;
};
Ce2.op = re2;
k2.cache = 0;
var K2 = function() {
  function o4(n) {
    this.init(n);
  }
  var e = o4.prototype;
  return e.init = function(t) {
    Yr2 || In2(ve2) || console.warn("Please gsap.registerPlugin(Observer)"), pr2 || zn2();
    var r = t.tolerance, i = t.dragMinimum, u15 = t.type, l = t.target, p = t.lineHeight, x2 = t.debounce, Y2 = t.preventDefault, M3 = t.onStop, h = t.onStopDelay, c = t.ignore, v = t.wheelSpeed, U2 = t.event, X2 = t.onDragStart, ie2 = t.onDragEnd, W3 = t.onDrag, ge2 = t.onPress, T = t.onRelease, Ke2 = t.onRight, N3 = t.onLeft, w = t.onUp, Ee2 = t.onDown, Ie2 = t.onChangeX, g = t.onChangeY, ue2 = t.onChange, y = t.onToggleX, pt = t.onToggleY, oe2 = t.onHover, Pe2 = t.onHoverEnd, Me2 = t.onMove, z2 = t.ignoreCheck, Q2 = t.isNormalizer, j2 = t.onGestureStart, s = t.onGestureEnd, se2 = t.onWheel, Yt2 = t.onEnable, St2 = t.onDisable, Ze2 = t.onClick, dt2 = t.scrollSpeed, me2 = t.capture, ee2 = t.allowClicks, De2 = t.lockAxis, xe2 = t.onLockAxis;
    this.target = l = Ye2(l) || At2, this.vars = t, c && (c = ve2.utils.toArray(c)), r = r || 1e-9, i = i || 0, v = v || 1, dt2 = dt2 || 1, u15 = u15 || "wheel,touch,pointer", x2 = x2 !== false, p || (p = parseFloat(Ge2.getComputedStyle(jt2).lineHeight) || 22);
    var Tt2, Re2, Xe2, O2, Z2, Be2, Ne2, a = this, He2 = 0, gt2 = 0, kt2 = t.passive || !Y2 && t.passive !== false, V2 = yt2(l, Ce2), ht2 = yt2(l, re2), Et2 = V2(), Ft2 = ht2(), ce2 = ~u15.indexOf("touch") && !~u15.indexOf("pointer") && ot2[0] === "pointerdown", Pt2 = gr2(l), $2 = l.ownerDocument || Rt2, et2 = [0, 0, 0], $e2 = [0, 0, 0], _t = 0, lr2 = function() {
      return _t = dr2();
    }, te = function(m, F2) {
      return (a.event = m) && c && bi2(m.target, c) || F2 && ce2 && m.pointerType !== "touch" || z2 && z2(m, F2);
    }, Mr2 = function() {
      a._vx.reset(), a._vy.reset(), Re2.pause(), M3 && M3(a);
    }, vt2 = function() {
      var m = a.deltaX = Rn2(et2), F2 = a.deltaY = Rn2($e2), f = Math.abs(m) >= r, b = Math.abs(F2) >= r;
      ue2 && (f || b) && ue2(a, m, F2, et2, $e2), f && (Ke2 && a.deltaX > 0 && Ke2(a), N3 && a.deltaX < 0 && N3(a), Ie2 && Ie2(a), y && a.deltaX < 0 != He2 < 0 && y(a), He2 = a.deltaX, et2[0] = et2[1] = et2[2] = 0), b && (Ee2 && a.deltaY > 0 && Ee2(a), w && a.deltaY < 0 && w(a), g && g(a), pt && a.deltaY < 0 != gt2 < 0 && pt(a), gt2 = a.deltaY, $e2[0] = $e2[1] = $e2[2] = 0), (O2 || Xe2) && (Me2 && Me2(a), Xe2 && (X2 && Xe2 === 1 && X2(a), W3 && W3(a), Xe2 = 0), O2 = false), Be2 && !(Be2 = false) && xe2 && xe2(a), Z2 && (se2(a), Z2 = false), Tt2 = 0;
    }, Zt2 = function(m, F2, f) {
      et2[f] += m, $e2[f] += F2, a._vx.update(m), a._vy.update(F2), x2 ? Tt2 || (Tt2 = requestAnimationFrame(vt2)) : vt2();
    }, $t2 = function(m, F2) {
      De2 && !Ne2 && (a.axis = Ne2 = Math.abs(m) > Math.abs(F2) ? "x" : "y", Be2 = true), Ne2 !== "y" && (et2[2] += m, a._vx.update(m, true)), Ne2 !== "x" && ($e2[2] += F2, a._vy.update(F2, true)), x2 ? Tt2 || (Tt2 = requestAnimationFrame(vt2)) : vt2();
    }, Mt = function(m) {
      if (!te(m, 1)) {
        m = fr2(m, Y2);
        var F2 = m.clientX, f = m.clientY, b = F2 - a.x, _2 = f - a.y, C3 = a.isDragging;
        a.x = F2, a.y = f, (C3 || (b || _2) && (Math.abs(a.startX - F2) >= i || Math.abs(a.startY - f) >= i)) && (Xe2 = C3 ? 2 : 1, C3 || (a.isDragging = true), $t2(b, _2));
      }
    }, Lt2 = a.onPress = function(S2) {
      te(S2, 1) || S2 && S2.button || (a.axis = Ne2 = null, Re2.pause(), a.isPressed = true, S2 = fr2(S2), He2 = gt2 = 0, a.startX = a.x = S2.clientX, a.startY = a.y = S2.clientY, a._vx.reset(), a._vy.reset(), Oe2(Q2 ? l : $2, ot2[1], Mt, kt2, true), a.deltaX = a.deltaY = 0, ge2 && ge2(a));
    }, D2 = a.onRelease = function(S2) {
      if (!te(S2, 1)) {
        Ae2(Q2 ? l : $2, ot2[1], Mt, true);
        var m = !isNaN(a.y - a.startY), F2 = a.isDragging, f = F2 && (Math.abs(a.x - a.startX) > 3 || Math.abs(a.y - a.startY) > 3), b = fr2(S2);
        !f && m && (a._vx.reset(), a._vy.reset(), Y2 && ee2 && ve2.delayedCall(0.08, function() {
          if (dr2() - _t > 300 && !S2.defaultPrevented) {
            if (S2.target.click)
              S2.target.click();
            else if ($2.createEvent) {
              var _2 = $2.createEvent("MouseEvents");
              _2.initMouseEvent("click", true, true, Ge2, 1, b.screenX, b.screenY, b.clientX, b.clientY, false, false, false, false, 0, null), S2.target.dispatchEvent(_2);
            }
          }
        })), a.isDragging = a.isGesturing = a.isPressed = false, M3 && F2 && !Q2 && Re2.restart(true), Xe2 && vt2(), ie2 && F2 && ie2(a), T && T(a, f);
      }
    }, zt2 = function(m) {
      return m.touches && m.touches.length > 1 && (a.isGesturing = true) && j2(m, a.isDragging);
    }, tt2 = function() {
      return (a.isGesturing = false) || s(a);
    }, rt2 = function(m) {
      if (!te(m)) {
        var F2 = V2(), f = ht2();
        Zt2((F2 - Et2) * dt2, (f - Ft2) * dt2, 1), Et2 = F2, Ft2 = f, M3 && Re2.restart(true);
      }
    }, nt2 = function(m) {
      if (!te(m)) {
        m = fr2(m, Y2), se2 && (Z2 = true);
        var F2 = (m.deltaMode === 1 ? p : m.deltaMode === 2 ? Ge2.innerHeight : 1) * v;
        Zt2(m.deltaX * F2, m.deltaY * F2, 0), M3 && !Q2 && Re2.restart(true);
      }
    }, It2 = function(m) {
      if (!te(m)) {
        var F2 = m.clientX, f = m.clientY, b = F2 - a.x, _2 = f - a.y;
        a.x = F2, a.y = f, O2 = true, M3 && Re2.restart(true), (b || _2) && $t2(b, _2);
      }
    }, Jt = function(m) {
      a.event = m, oe2(a);
    }, mt2 = function(m) {
      a.event = m, Pe2(a);
    }, ar2 = function(m) {
      return te(m) || fr2(m, Y2) && Ze2(a);
    };
    Re2 = a._dc = ve2.delayedCall(h || 0.25, Mr2).pause(), a.deltaX = a.deltaY = 0, a._vx = Lr2(0, 50, true), a._vy = Lr2(0, 50, true), a.scrollX = V2, a.scrollY = ht2, a.isDragging = a.isGesturing = a.isPressed = false, Yn2(this), a.enable = function(S2) {
      return a.isEnabled || (Oe2(Pt2 ? $2 : l, "scroll", sn2), u15.indexOf("scroll") >= 0 && Oe2(Pt2 ? $2 : l, "scroll", rt2, kt2, me2), u15.indexOf("wheel") >= 0 && Oe2(l, "wheel", nt2, kt2, me2), (u15.indexOf("touch") >= 0 && An2 || u15.indexOf("pointer") >= 0) && (Oe2(l, ot2[0], Lt2, kt2, me2), Oe2($2, ot2[2], D2), Oe2($2, ot2[3], D2), ee2 && Oe2(l, "click", lr2, true, true), Ze2 && Oe2(l, "click", ar2), j2 && Oe2($2, "gesturestart", zt2), s && Oe2($2, "gestureend", tt2), oe2 && Oe2(l, Bt2 + "enter", Jt), Pe2 && Oe2(l, Bt2 + "leave", mt2), Me2 && Oe2(l, Bt2 + "move", It2)), a.isEnabled = true, a.isDragging = a.isGesturing = a.isPressed = O2 = Xe2 = false, a._vx.reset(), a._vy.reset(), Et2 = V2(), Ft2 = ht2(), S2 && S2.type && Lt2(S2), Yt2 && Yt2(a)), a;
    }, a.disable = function() {
      a.isEnabled && (Qt2.filter(function(S2) {
        return S2 !== a && gr2(S2.target);
      }).length || Ae2(Pt2 ? $2 : l, "scroll", sn2), a.isPressed && (a._vx.reset(), a._vy.reset(), Ae2(Q2 ? l : $2, ot2[1], Mt, true)), Ae2(Pt2 ? $2 : l, "scroll", rt2, me2), Ae2(l, "wheel", nt2, me2), Ae2(l, ot2[0], Lt2, me2), Ae2($2, ot2[2], D2), Ae2($2, ot2[3], D2), Ae2(l, "click", lr2, true), Ae2(l, "click", ar2), Ae2($2, "gesturestart", zt2), Ae2($2, "gestureend", tt2), Ae2(l, Bt2 + "enter", Jt), Ae2(l, Bt2 + "leave", mt2), Ae2(l, Bt2 + "move", It2), a.isEnabled = a.isPressed = a.isDragging = false, St2 && St2(a));
    }, a.kill = a.revert = function() {
      a.disable();
      var S2 = Qt2.indexOf(a);
      S2 >= 0 && Qt2.splice(S2, 1), xt2 === a && (xt2 = 0);
    }, Qt2.push(a), Q2 && gr2(l) && (xt2 = a), a.enable(U2);
  }, xi2(o4, [{ key: "velocityX", get: function() {
    return this._vx.getVelocity();
  } }, { key: "velocityY", get: function() {
    return this._vy.getVelocity();
  } }]), o4;
}();
K2.version = "3.13.0";
K2.create = function(o4) {
  return new K2(o4);
};
K2.register = In2;
K2.getAll = function() {
  return Qt2.slice();
};
K2.getById = function(o4) {
  return Qt2.filter(function(e) {
    return e.vars.id === o4;
  })[0];
};
Fn2() && ve2.registerPlugin(K2);
var d;
var rr2;
var P;
var B;
var qe2;
var L3;
var wn2;
var Qr2;
var Er2;
var wr2;
var _r2;
var zr2;
var Se2;
var rn2;
var gn2;
var Le2;
var Xn2;
var Bn2;
var nr2;
var ri2;
var ln2;
var ni2;
var Fe2;
var hn2;
var ii2;
var oi2;
var Ot2;
var _n2;
var bn2;
var ir2;
var Cn2;
var jr2;
var vn2;
var an2;
var Ir2 = 1;
var Te2 = Date.now;
var un2 = Te2();
var je2 = 0;
var vr2 = 0;
var Nn2 = function(e, n, t) {
  var r = Ve2(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
  return t["_" + n + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e;
};
var Hn2 = function(e, n) {
  return n && (!Ve2(e) || e.substr(0, 6) !== "clamp(") ? "clamp(" + e + ")" : e;
};
var Ci2 = function o() {
  return vr2 && requestAnimationFrame(o);
};
var Wn2 = function() {
  return rn2 = 1;
};
var Gn2 = function() {
  return rn2 = 0;
};
var ct2 = function(e) {
  return e;
};
var mr2 = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
};
var si2 = function() {
  return typeof __dai_window < "u";
};
var li2 = function() {
  return d || si2() && (d = __dai_window.gsap) && d.registerPlugin && d;
};
var Vt2 = function(e) {
  return !!~wn2.indexOf(e);
};
var ai2 = function(e) {
  return (e === "Height" ? Cn2 : P["inner" + e]) || qe2["client" + e] || L3["client" + e];
};
var ui2 = function(e) {
  return wt2(e, "getBoundingClientRect") || (Vt2(e) ? function() {
    return Jr2.width = P.innerWidth, Jr2.height = Cn2, Jr2;
  } : function() {
    return bt2(e);
  });
};
var Si = function(e, n, t) {
  var r = t.d, i = t.d2, u15 = t.a;
  return (u15 = wt2(e, "getBoundingClientRect")) ? function() {
    return u15()[r];
  } : function() {
    return (n ? ai2(i) : e["client" + i]) || 0;
  };
};
var Ti2 = function(e, n) {
  return !n || ~st2.indexOf(e) ? ui2(e) : function() {
    return Jr2;
  };
};
var ft2 = function(e, n) {
  var t = n.s, r = n.d2, i = n.d, u15 = n.a;
  return Math.max(0, (t = "scroll" + r) && (u15 = wt2(e, t)) ? u15() - ui2(e)()[i] : Vt2(e) ? (qe2[t] || L3[t]) - ai2(r) : e[t] - e["offset" + r]);
};
var Xr2 = function(e, n) {
  for (var t = 0; t < nr2.length; t += 3)
    (!n || ~n.indexOf(nr2[t + 1])) && e(nr2[t], nr2[t + 1], nr2[t + 2]);
};
var Ve2 = function(e) {
  return typeof e == "string";
};
var ke2 = function(e) {
  return typeof e == "function";
};
var xr2 = function(e) {
  return typeof e == "number";
};
var Nt2 = function(e) {
  return typeof e == "object";
};
var hr2 = function(e, n, t) {
  return e && e.progress(n ? 0 : 1) && t && e.pause();
};
var cn2 = function(e, n) {
  if (e.enabled) {
    var t = e._ctx ? e._ctx.add(function() {
      return n(e);
    }) : n(e);
    t && t.totalTime && (e.callbackAnimation = t);
  }
};
var er2 = Math.abs;
var ci2 = "left";
var fi2 = "top";
var Sn2 = "right";
var Tn2 = "bottom";
var Wt2 = "width";
var Gt2 = "height";
var br2 = "Right";
var Cr2 = "Left";
var Sr2 = "Top";
var Tr2 = "Bottom";
var ne2 = "padding";
var Je2 = "margin";
var sr2 = "Width";
var kn2 = "Height";
var ae2 = "px";
var Qe2 = function(e) {
  return P.getComputedStyle(e);
};
var ki2 = function(e) {
  var n = Qe2(e).position;
  e.style.position = n === "absolute" || n === "fixed" ? n : "relative";
};
var Un2 = function(e, n) {
  for (var t in n)
    t in e || (e[t] = n[t]);
  return e;
};
var bt2 = function(e, n) {
  var t = n && Qe2(e)[gn2] !== "matrix(1, 0, 0, 1, 0, 0)" && d.to(e, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1), r = e.getBoundingClientRect();
  return t && t.progress(0).kill(), r;
};
var en2 = function(e, n) {
  var t = n.d2;
  return e["offset" + t] || e["client" + t] || 0;
};
var pi2 = function(e) {
  var n = [], t = e.labels, r = e.duration(), i;
  for (i in t)
    n.push(t[i] / r);
  return n;
};
var Ei2 = function(e) {
  return function(n) {
    return d.utils.snap(pi2(e), n);
  };
};
var En2 = function(e) {
  var n = d.utils.snap(e), t = Array.isArray(e) && e.slice(0).sort(function(r, i) {
    return r - i;
  });
  return t ? function(r, i, u15) {
    u15 === void 0 && (u15 = 1e-3);
    var l;
    if (!i)
      return n(r);
    if (i > 0) {
      for (r -= u15, l = 0; l < t.length; l++)
        if (t[l] >= r)
          return t[l];
      return t[l - 1];
    } else
      for (l = t.length, r += u15; l--; )
        if (t[l] <= r)
          return t[l];
    return t[0];
  } : function(r, i, u15) {
    u15 === void 0 && (u15 = 1e-3);
    var l = n(r);
    return !i || Math.abs(l - r) < u15 || l - r < 0 == i < 0 ? l : n(i < 0 ? r - e : r + e);
  };
};
var Pi2 = function(e) {
  return function(n, t) {
    return En2(pi2(e))(n, t.direction);
  };
};
var Br2 = function(e, n, t, r) {
  return t.split(",").forEach(function(i) {
    return e(n, i, r);
  });
};
var de = function(e, n, t, r, i) {
  return e.addEventListener(n, t, { passive: !r, capture: !!i });
};
var pe2 = function(e, n, t, r) {
  return e.removeEventListener(n, t, !!r);
};
var Nr2 = function(e, n, t) {
  t = t && t.wheelHandler, t && (e(n, "wheel", t), e(n, "touchmove", t));
};
var Vn2 = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" };
var Hr2 = { toggleActions: "play", anticipatePin: 0 };
var tn2 = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 };
var qr2 = function(e, n) {
  if (Ve2(e)) {
    var t = e.indexOf("="), r = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
    ~t && (e.indexOf("%") > t && (r *= n / 100), e = e.substr(0, t - 1)), e = r + (e in tn2 ? tn2[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0);
  }
  return e;
};
var Wr2 = function(e, n, t, r, i, u15, l, p) {
  var x2 = i.startColor, Y2 = i.endColor, M3 = i.fontSize, h = i.indent, c = i.fontWeight, v = B.createElement("div"), U2 = Vt2(t) || wt2(t, "pinType") === "fixed", X2 = e.indexOf("scroller") !== -1, ie2 = U2 ? L3 : t, W3 = e.indexOf("start") !== -1, ge2 = W3 ? x2 : Y2, T = "border-color:" + ge2 + ";font-size:" + M3 + ";color:" + ge2 + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  return T += "position:" + ((X2 || p) && U2 ? "fixed;" : "absolute;"), (X2 || p || !U2) && (T += (r === re2 ? Sn2 : Tn2) + ":" + (u15 + parseFloat(h)) + "px;"), l && (T += "box-sizing:border-box;text-align:left;width:" + l.offsetWidth + "px;"), v._isStart = W3, v.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")), v.style.cssText = T, v.innerText = n || n === 0 ? e + "-" + n : e, ie2.children[0] ? ie2.insertBefore(v, ie2.children[0]) : ie2.appendChild(v), v._offset = v["offset" + r.op.d2], Kr2(v, 0, r, W3), v;
};
var Kr2 = function(e, n, t, r) {
  var i = { display: "block" }, u15 = t[r ? "os2" : "p2"], l = t[r ? "p2" : "os2"];
  e._isFlipped = r, i[t.a + "Percent"] = r ? -100 : 0, i[t.a] = r ? "1px" : 0, i["border" + u15 + sr2] = 1, i["border" + l + sr2] = 0, i[t.p] = n + "px", d.set(e, i);
};
var E2 = [];
var mn2 = {};
var Pr2;
var qn2 = function() {
  return Te2() - je2 > 34 && (Pr2 || (Pr2 = requestAnimationFrame(Ct2)));
};
var tr2 = function() {
  (!Fe2 || !Fe2.isPressed || Fe2.startX > L3.clientWidth) && (k2.cache++, Fe2 ? Pr2 || (Pr2 = requestAnimationFrame(Ct2)) : Ct2(), je2 || Kt2("scrollStart"), je2 = Te2());
};
var fn2 = function() {
  oi2 = P.innerWidth, ii2 = P.innerHeight;
};
var yr2 = function(e) {
  k2.cache++, (e === true || !Se2 && !ni2 && !B.fullscreenElement && !B.webkitFullscreenElement && (!hn2 || oi2 !== P.innerWidth || Math.abs(P.innerHeight - ii2) > P.innerHeight * 0.25)) && Qr2.restart(true);
};
var qt2 = {};
var Mi2 = [];
var di2 = function o2() {
  return pe2(R2, "scrollEnd", o2) || Ht2(true);
};
var Kt2 = function(e) {
  return qt2[e] && qt2[e].map(function(n) {
    return n();
  }) || Mi2;
};
var Ue2 = [];
var gi2 = function(e) {
  for (var n = 0; n < Ue2.length; n += 5)
    (!e || Ue2[n + 4] && Ue2[n + 4].query === e) && (Ue2[n].style.cssText = Ue2[n + 1], Ue2[n].getBBox && Ue2[n].setAttribute("transform", Ue2[n + 2] || ""), Ue2[n + 3].uncache = 1);
};
var Pn2 = function(e, n) {
  var t;
  for (Le2 = 0; Le2 < E2.length; Le2++)
    t = E2[Le2], t && (!n || t._ctx === n) && (e ? t.kill(1) : t.revert(true, true));
  jr2 = true, n && gi2(n), n || Kt2("revert");
};
var hi2 = function(e, n) {
  k2.cache++, (n || !ze2) && k2.forEach(function(t) {
    return ke2(t) && t.cacheID++ && (t.rec = 0);
  }), Ve2(e) && (P.history.scrollRestoration = bn2 = e);
};
var ze2;
var Ut2 = 0;
var Kn2;
var Di2 = function() {
  if (Kn2 !== Ut2) {
    var e = Kn2 = Ut2;
    requestAnimationFrame(function() {
      return e === Ut2 && Ht2(true);
    });
  }
};
var _i2 = function() {
  L3.appendChild(ir2), Cn2 = !Fe2 && ir2.offsetHeight || P.innerHeight, L3.removeChild(ir2);
};
var Zn2 = function(e) {
  return Er2(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(n) {
    return n.style.display = e ? "none" : "block";
  });
};
var Ht2 = function(e, n) {
  if (qe2 = B.documentElement, L3 = B.body, wn2 = [P, B, qe2, L3], je2 && !e && !jr2) {
    de(R2, "scrollEnd", di2);
    return;
  }
  _i2(), ze2 = R2.isRefreshing = true, k2.forEach(function(r) {
    return ke2(r) && ++r.cacheID && (r.rec = r());
  });
  var t = Kt2("refreshInit");
  ri2 && R2.sort(), n || Pn2(), k2.forEach(function(r) {
    ke2(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
  }), E2.slice(0).forEach(function(r) {
    return r.refresh();
  }), jr2 = false, E2.forEach(function(r) {
    if (r._subPinOffset && r.pin) {
      var i = r.vars.horizontal ? "offsetWidth" : "offsetHeight", u15 = r.pin[i];
      r.revert(true, 1), r.adjustPinSpacing(r.pin[i] - u15), r.refresh();
    }
  }), vn2 = 1, Zn2(true), E2.forEach(function(r) {
    var i = ft2(r.scroller, r._dir), u15 = r.vars.end === "max" || r._endClamp && r.end > i, l = r._startClamp && r.start >= i;
    (u15 || l) && r.setPositions(l ? i - 1 : r.start, u15 ? Math.max(l ? i : r.start + 1, i) : r.end, true);
  }), Zn2(false), vn2 = 0, t.forEach(function(r) {
    return r && r.render && r.render(-1);
  }), k2.forEach(function(r) {
    ke2(r) && (r.smooth && requestAnimationFrame(function() {
      return r.target.style.scrollBehavior = "smooth";
    }), r.rec && r(r.rec));
  }), hi2(bn2, 1), Qr2.pause(), Ut2++, ze2 = 2, Ct2(2), E2.forEach(function(r) {
    return ke2(r.vars.onRefresh) && r.vars.onRefresh(r);
  }), ze2 = R2.isRefreshing = false, Kt2("refresh");
};
var xn2 = 0;
var Zr2 = 1;
var kr2;
var Ct2 = function(e) {
  if (e === 2 || !ze2 && !jr2) {
    R2.isUpdating = true, kr2 && kr2.update(0);
    var n = E2.length, t = Te2(), r = t - un2 >= 50, i = n && E2[0].scroll();
    if (Zr2 = xn2 > i ? -1 : 1, ze2 || (xn2 = i), r && (je2 && !rn2 && t - je2 > 200 && (je2 = 0, Kt2("scrollEnd")), _r2 = un2, un2 = t), Zr2 < 0) {
      for (Le2 = n; Le2-- > 0; )
        E2[Le2] && E2[Le2].update(0, r);
      Zr2 = 1;
    } else
      for (Le2 = 0; Le2 < n; Le2++)
        E2[Le2] && E2[Le2].update(0, r);
    R2.isUpdating = false;
  }
  Pr2 = 0;
};
var yn2 = [ci2, fi2, Tn2, Sn2, Je2 + Tr2, Je2 + br2, Je2 + Sr2, Je2 + Cr2, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
var $r2 = yn2.concat([Wt2, Gt2, "boxSizing", "max" + sr2, "max" + kn2, "position", Je2, ne2, ne2 + Sr2, ne2 + br2, ne2 + Tr2, ne2 + Cr2]);
var Ri2 = function(e, n, t) {
  or2(t);
  var r = e._gsap;
  if (r.spacerIsNative)
    or2(r.spacerState);
  else if (e._gsap.swappedIn) {
    var i = n.parentNode;
    i && (i.insertBefore(e, n), i.removeChild(n));
  }
  e._gsap.swappedIn = false;
};
var pn2 = function(e, n, t, r) {
  if (!e._gsap.swappedIn) {
    for (var i = yn2.length, u15 = n.style, l = e.style, p; i--; )
      p = yn2[i], u15[p] = t[p];
    u15.position = t.position === "absolute" ? "absolute" : "relative", t.display === "inline" && (u15.display = "inline-block"), l[Tn2] = l[Sn2] = "auto", u15.flexBasis = t.flexBasis || "auto", u15.overflow = "visible", u15.boxSizing = "border-box", u15[Wt2] = en2(e, Ce2) + ae2, u15[Gt2] = en2(e, re2) + ae2, u15[ne2] = l[Je2] = l[fi2] = l[ci2] = "0", or2(r), l[Wt2] = l["max" + sr2] = t[Wt2], l[Gt2] = l["max" + kn2] = t[Gt2], l[ne2] = t[ne2], e.parentNode !== n && (e.parentNode.insertBefore(n, e), n.appendChild(e)), e._gsap.swappedIn = true;
  }
};
var Ai2 = /([A-Z])/g;
var or2 = function(e) {
  if (e) {
    var n = e.t.style, t = e.length, r = 0, i, u15;
    for ((e.t._gsap || d.core.getCache(e.t)).uncache = 1; r < t; r += 2)
      u15 = e[r + 1], i = e[r], u15 ? n[i] = u15 : n[i] && n.removeProperty(i.replace(Ai2, "-$1").toLowerCase());
  }
};
var Gr2 = function(e) {
  for (var n = $r2.length, t = e.style, r = [], i = 0; i < n; i++)
    r.push($r2[i], t[$r2[i]]);
  return r.t = e, r;
};
var Oi2 = function(e, n, t) {
  for (var r = [], i = e.length, u15 = t ? 8 : 0, l; u15 < i; u15 += 2)
    l = e[u15], r.push(l, l in n ? n[l] : e[u15 + 1]);
  return r.t = e.t, r;
};
var Jr2 = { left: 0, top: 0 };
var $n2 = function(e, n, t, r, i, u15, l, p, x2, Y2, M3, h, c, v) {
  ke2(e) && (e = e(p)), Ve2(e) && e.substr(0, 3) === "max" && (e = h + (e.charAt(4) === "=" ? qr2("0" + e.substr(3), t) : 0));
  var U2 = c ? c.time() : 0, X2, ie2, W3;
  if (c && c.seek(0), isNaN(e) || (e = +e), xr2(e))
    c && (e = d.utils.mapRange(c.scrollTrigger.start, c.scrollTrigger.end, 0, h, e)), l && Kr2(l, t, r, true);
  else {
    ke2(n) && (n = n(p));
    var ge2 = (e || "0").split(" "), T, Ke2, N3, w;
    W3 = Ye2(n, p) || L3, T = bt2(W3) || {}, (!T || !T.left && !T.top) && Qe2(W3).display === "none" && (w = W3.style.display, W3.style.display = "block", T = bt2(W3), w ? W3.style.display = w : W3.style.removeProperty("display")), Ke2 = qr2(ge2[0], T[r.d]), N3 = qr2(ge2[1] || "0", t), e = T[r.p] - x2[r.p] - Y2 + Ke2 + i - N3, l && Kr2(l, N3, r, t - N3 < 20 || l._isStart && N3 > 20), t -= t - N3;
  }
  if (v && (p[v] = e || -1e-3, e < 0 && (e = 0)), u15) {
    var Ee2 = e + t, Ie2 = u15._isStart;
    X2 = "scroll" + r.d2, Kr2(u15, Ee2, r, Ie2 && Ee2 > 20 || !Ie2 && (M3 ? Math.max(L3[X2], qe2[X2]) : u15.parentNode[X2]) <= Ee2 + 1), M3 && (x2 = bt2(l), M3 && (u15.style[r.op.p] = x2[r.op.p] - r.op.m - u15._offset + ae2));
  }
  return c && W3 && (X2 = bt2(W3), c.seek(h), ie2 = bt2(W3), c._caScrollDist = X2[r.p] - ie2[r.p], e = e / c._caScrollDist * h), c && c.seek(U2), c ? e : Math.round(e);
};
var Yi2 = /(webkit|moz|length|cssText|inset)/i;
var Jn2 = function(e, n, t, r) {
  if (e.parentNode !== n) {
    var i = e.style, u15, l;
    if (n === L3) {
      e._stOrig = i.cssText, l = Qe2(e);
      for (u15 in l)
        !+u15 && !Yi2.test(u15) && l[u15] && typeof i[u15] == "string" && u15 !== "0" && (i[u15] = l[u15]);
      i.top = t, i.left = r;
    } else
      i.cssText = e._stOrig;
    d.core.getCache(e).uncache = 1, n.appendChild(e);
  }
};
var vi2 = function(e, n, t) {
  var r = n, i = r;
  return function(u15) {
    var l = Math.round(e());
    return l !== r && l !== i && Math.abs(l - r) > 3 && Math.abs(l - i) > 3 && (u15 = l, t && t()), i = r, r = Math.round(u15), r;
  };
};
var Ur2 = function(e, n, t) {
  var r = {};
  r[n.p] = "+=" + t, d.set(e, r);
};
var Qn2 = function(e, n) {
  var t = yt2(e, n), r = "_scroll" + n.p2, i = function u15(l, p, x2, Y2, M3) {
    var h = u15.tween, c = p.onComplete, v = {};
    x2 = x2 || t();
    var U2 = vi2(t, x2, function() {
      h.kill(), u15.tween = 0;
    });
    return M3 = Y2 && M3 || 0, Y2 = Y2 || l - x2, h && h.kill(), p[r] = l, p.inherit = false, p.modifiers = v, v[r] = function() {
      return U2(x2 + Y2 * h.ratio + M3 * h.ratio * h.ratio);
    }, p.onUpdate = function() {
      k2.cache++, u15.tween && Ct2();
    }, p.onComplete = function() {
      u15.tween = 0, c && c.call(h);
    }, h = u15.tween = d.to(e, p), h;
  };
  return e[r] = t, t.wheelHandler = function() {
    return i.tween && i.tween.kill() && (i.tween = 0);
  }, de(e, "wheel", t.wheelHandler), R2.isTouch && de(e, "touchmove", t.wheelHandler), i;
};
var R2 = function() {
  function o4(n, t) {
    rr2 || o4.register(d) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), _n2(this), this.init(n, t);
  }
  var e = o4.prototype;
  return e.init = function(t, r) {
    if (this.progress = this.start = 0, this.vars && this.kill(true, true), !vr2) {
      this.update = this.refresh = this.kill = ct2;
      return;
    }
    t = Un2(Ve2(t) || xr2(t) || t.nodeType ? { trigger: t } : t, Hr2);
    var i = t, u15 = i.onUpdate, l = i.toggleClass, p = i.id, x2 = i.onToggle, Y2 = i.onRefresh, M3 = i.scrub, h = i.trigger, c = i.pin, v = i.pinSpacing, U2 = i.invalidateOnRefresh, X2 = i.anticipatePin, ie2 = i.onScrubComplete, W3 = i.onSnapComplete, ge2 = i.once, T = i.snap, Ke2 = i.pinReparent, N3 = i.pinSpacer, w = i.containerAnimation, Ee2 = i.fastScrollEnd, Ie2 = i.preventOverlaps, g = t.horizontal || t.containerAnimation && t.horizontal !== false ? Ce2 : re2, ue2 = !M3 && M3 !== 0, y = Ye2(t.scroller || P), pt = d.core.getCache(y), oe2 = Vt2(y), Pe2 = ("pinType" in t ? t.pinType : wt2(y, "pinType") || oe2 && "fixed") === "fixed", Me2 = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack], z2 = ue2 && t.toggleActions.split(" "), Q2 = "markers" in t ? t.markers : Hr2.markers, j2 = oe2 ? 0 : parseFloat(Qe2(y)["border" + g.p2 + sr2]) || 0, s = this, se2 = t.onRefreshInit && function() {
      return t.onRefreshInit(s);
    }, Yt2 = Si(y, oe2, g), St2 = Ti2(y, oe2), Ze2 = 0, dt2 = 0, me2 = 0, ee2 = yt2(y, g), De2, xe2, Tt2, Re2, Xe2, O2, Z2, Be2, Ne2, a, He2, gt2, kt2, V2, ht2, Et2, Ft2, ce2, Pt2, $2, et2, $e2, _t, lr2, te, Mr2, vt2, Zt2, $t2, Mt, Lt2, D2, zt2, tt2, rt2, nt2, It2, Jt, mt2;
    if (s._startClamp = s._endClamp = false, s._dir = g, X2 *= 45, s.scroller = y, s.scroll = w ? w.time.bind(w) : ee2, Re2 = ee2(), s.vars = t, r = r || t.animation, "refreshPriority" in t && (ri2 = 1, t.refreshPriority === -9999 && (kr2 = s)), pt.tweenScroll = pt.tweenScroll || { top: Qn2(y, re2), left: Qn2(y, Ce2) }, s.tweenTo = De2 = pt.tweenScroll[g.p], s.scrubDuration = function(f) {
      zt2 = xr2(f) && f, zt2 ? D2 ? D2.duration(f) : D2 = d.to(r, { ease: "expo", totalProgress: "+=0", inherit: false, duration: zt2, paused: true, onComplete: function() {
        return ie2 && ie2(s);
      } }) : (D2 && D2.progress(1).kill(), D2 = 0);
    }, r && (r.vars.lazy = false, r._initted && !s.isReverted || r.vars.immediateRender !== false && t.immediateRender !== false && r.duration() && r.render(0, true, true), s.animation = r.pause(), r.scrollTrigger = s, s.scrubDuration(M3), Mt = 0, p || (p = r.vars.id)), T && ((!Nt2(T) || T.push) && (T = { snapTo: T }), "scrollBehavior" in L3.style && d.set(oe2 ? [L3, qe2] : y, { scrollBehavior: "auto" }), k2.forEach(function(f) {
      return ke2(f) && f.target === (oe2 ? B.scrollingElement || qe2 : y) && (f.smooth = false);
    }), Tt2 = ke2(T.snapTo) ? T.snapTo : T.snapTo === "labels" ? Ei2(r) : T.snapTo === "labelsDirectional" ? Pi2(r) : T.directional !== false ? function(f, b) {
      return En2(T.snapTo)(f, Te2() - dt2 < 500 ? 0 : b.direction);
    } : d.utils.snap(T.snapTo), tt2 = T.duration || { min: 0.1, max: 2 }, tt2 = Nt2(tt2) ? wr2(tt2.min, tt2.max) : wr2(tt2, tt2), rt2 = d.delayedCall(T.delay || zt2 / 2 || 0.1, function() {
      var f = ee2(), b = Te2() - dt2 < 500, _2 = De2.tween;
      if ((b || Math.abs(s.getVelocity()) < 10) && !_2 && !rn2 && Ze2 !== f) {
        var C3 = (f - O2) / V2, fe2 = r && !ue2 ? r.totalProgress() : C3, A2 = b ? 0 : (fe2 - Lt2) / (Te2() - _r2) * 1e3 || 0, J2 = d.utils.clamp(-C3, 1 - C3, er2(A2 / 2) * A2 / 0.185), ye2 = C3 + (T.inertia === false ? 0 : J2), q, H2, I2 = T, it2 = I2.onStart, G2 = I2.onInterrupt, We2 = I2.onComplete;
        if (q = Tt2(ye2, s), xr2(q) || (q = ye2), H2 = Math.max(0, Math.round(O2 + q * V2)), f <= Z2 && f >= O2 && H2 !== f) {
          if (_2 && !_2._initted && _2.data <= er2(H2 - f))
            return;
          T.inertia === false && (J2 = q - C3), De2(H2, { duration: tt2(er2(Math.max(er2(ye2 - fe2), er2(q - fe2)) * 0.185 / A2 / 0.05 || 0)), ease: T.ease || "power3", data: er2(H2 - f), onInterrupt: function() {
            return rt2.restart(true) && G2 && G2(s);
          }, onComplete: function() {
            s.update(), Ze2 = ee2(), r && !ue2 && (D2 ? D2.resetTo("totalProgress", q, r._tTime / r._tDur) : r.progress(q)), Mt = Lt2 = r && !ue2 ? r.totalProgress() : s.progress, W3 && W3(s), We2 && We2(s);
          } }, f, J2 * V2, H2 - f - J2 * V2), it2 && it2(s, De2.tween);
        }
      } else
        s.isActive && Ze2 !== f && rt2.restart(true);
    }).pause()), p && (mn2[p] = s), h = s.trigger = Ye2(h || c !== true && c), mt2 = h && h._gsap && h._gsap.stRevert, mt2 && (mt2 = mt2(s)), c = c === true ? h : Ye2(c), Ve2(l) && (l = { targets: h, className: l }), c && (v === false || v === Je2 || (v = !v && c.parentNode && c.parentNode.style && Qe2(c.parentNode).display === "flex" ? false : ne2), s.pin = c, xe2 = d.core.getCache(c), xe2.spacer ? ht2 = xe2.pinState : (N3 && (N3 = Ye2(N3), N3 && !N3.nodeType && (N3 = N3.current || N3.nativeElement), xe2.spacerIsNative = !!N3, N3 && (xe2.spacerState = Gr2(N3))), xe2.spacer = ce2 = N3 || B.createElement("div"), ce2.classList.add("pin-spacer"), p && ce2.classList.add("pin-spacer-" + p), xe2.pinState = ht2 = Gr2(c)), t.force3D !== false && d.set(c, { force3D: true }), s.spacer = ce2 = xe2.spacer, $t2 = Qe2(c), lr2 = $t2[v + g.os2], $2 = d.getProperty(c), et2 = d.quickSetter(c, g.a, ae2), pn2(c, ce2, $t2), Ft2 = Gr2(c)), Q2) {
      gt2 = Nt2(Q2) ? Un2(Q2, Vn2) : Vn2, a = Wr2("scroller-start", p, y, g, gt2, 0), He2 = Wr2("scroller-end", p, y, g, gt2, 0, a), Pt2 = a["offset" + g.op.d2];
      var ar2 = Ye2(wt2(y, "content") || y);
      Be2 = this.markerStart = Wr2("start", p, ar2, g, gt2, Pt2, 0, w), Ne2 = this.markerEnd = Wr2("end", p, ar2, g, gt2, Pt2, 0, w), w && (Jt = d.quickSetter([Be2, Ne2], g.a, ae2)), !Pe2 && !(st2.length && wt2(y, "fixedMarkers") === true) && (ki2(oe2 ? L3 : y), d.set([a, He2], { force3D: true }), Mr2 = d.quickSetter(a, g.a, ae2), Zt2 = d.quickSetter(He2, g.a, ae2));
    }
    if (w) {
      var S2 = w.vars.onUpdate, m = w.vars.onUpdateParams;
      w.eventCallback("onUpdate", function() {
        s.update(0, 0, 1), S2 && S2.apply(w, m || []);
      });
    }
    if (s.previous = function() {
      return E2[E2.indexOf(s) - 1];
    }, s.next = function() {
      return E2[E2.indexOf(s) + 1];
    }, s.revert = function(f, b) {
      if (!b)
        return s.kill(true);
      var _2 = f !== false || !s.enabled, C3 = Se2;
      _2 !== s.isReverted && (_2 && (nt2 = Math.max(ee2(), s.scroll.rec || 0), me2 = s.progress, It2 = r && r.progress()), Be2 && [Be2, Ne2, a, He2].forEach(function(fe2) {
        return fe2.style.display = _2 ? "none" : "block";
      }), _2 && (Se2 = s, s.update(_2)), c && (!Ke2 || !s.isActive) && (_2 ? Ri2(c, ce2, ht2) : pn2(c, ce2, Qe2(c), te)), _2 || s.update(_2), Se2 = C3, s.isReverted = _2);
    }, s.refresh = function(f, b, _2, C3) {
      if (!((Se2 || !s.enabled) && !b)) {
        if (c && f && je2) {
          de(o4, "scrollEnd", di2);
          return;
        }
        !ze2 && se2 && se2(s), Se2 = s, De2.tween && !_2 && (De2.tween.kill(), De2.tween = 0), D2 && D2.pause(), U2 && r && (r.revert({ kill: false }).invalidate(), r.getChildren && r.getChildren(true, true, false).forEach(function(Dt) {
          return Dt.vars.immediateRender && Dt.render(0, true, true);
        })), s.isReverted || s.revert(true, true), s._subPinOffset = false;
        var fe2 = Yt2(), A2 = St2(), J2 = w ? w.duration() : ft2(y, g), ye2 = V2 <= 0.01 || !V2, q = 0, H2 = C3 || 0, I2 = Nt2(_2) ? _2.end : t.end, it2 = t.endTrigger || h, G2 = Nt2(_2) ? _2.start : t.start || (t.start === 0 || !h ? 0 : c ? "0 0" : "0 100%"), We2 = s.pinnedContainer = t.pinnedContainer && Ye2(t.pinnedContainer, s), lt2 = h && Math.max(0, E2.indexOf(s)) || 0, he2 = lt2, _e2, we2, Xt2, Dr2, be2, le2, at2, nn2, Mn2, ur2, ut2, cr2, Rr2;
        for (Q2 && Nt2(_2) && (cr2 = d.getProperty(a, g.p), Rr2 = d.getProperty(He2, g.p)); he2-- > 0; )
          le2 = E2[he2], le2.end || le2.refresh(0, 1) || (Se2 = s), at2 = le2.pin, at2 && (at2 === h || at2 === c || at2 === We2) && !le2.isReverted && (ur2 || (ur2 = []), ur2.unshift(le2), le2.revert(true, true)), le2 !== E2[he2] && (lt2--, he2--);
        for (ke2(G2) && (G2 = G2(s)), G2 = Nn2(G2, "start", s), O2 = $n2(G2, h, fe2, g, ee2(), Be2, a, s, A2, j2, Pe2, J2, w, s._startClamp && "_startClamp") || (c ? -1e-3 : 0), ke2(I2) && (I2 = I2(s)), Ve2(I2) && !I2.indexOf("+=") && (~I2.indexOf(" ") ? I2 = (Ve2(G2) ? G2.split(" ")[0] : "") + I2 : (q = qr2(I2.substr(2), fe2), I2 = Ve2(G2) ? G2 : (w ? d.utils.mapRange(0, w.duration(), w.scrollTrigger.start, w.scrollTrigger.end, O2) : O2) + q, it2 = h)), I2 = Nn2(I2, "end", s), Z2 = Math.max(O2, $n2(I2 || (it2 ? "100% 0" : J2), it2, fe2, g, ee2() + q, Ne2, He2, s, A2, j2, Pe2, J2, w, s._endClamp && "_endClamp")) || -1e-3, q = 0, he2 = lt2; he2--; )
          le2 = E2[he2], at2 = le2.pin, at2 && le2.start - le2._pinPush <= O2 && !w && le2.end > 0 && (_e2 = le2.end - (s._startClamp ? Math.max(0, le2.start) : le2.start), (at2 === h && le2.start - le2._pinPush < O2 || at2 === We2) && isNaN(G2) && (q += _e2 * (1 - le2.progress)), at2 === c && (H2 += _e2));
        if (O2 += q, Z2 += q, s._startClamp && (s._startClamp += q), s._endClamp && !ze2 && (s._endClamp = Z2 || -1e-3, Z2 = Math.min(Z2, ft2(y, g))), V2 = Z2 - O2 || (O2 -= 0.01) && 1e-3, ye2 && (me2 = d.utils.clamp(0, 1, d.utils.normalize(O2, Z2, nt2))), s._pinPush = H2, Be2 && q && (_e2 = {}, _e2[g.a] = "+=" + q, We2 && (_e2[g.p] = "-=" + ee2()), d.set([Be2, Ne2], _e2)), c && !(vn2 && s.end >= ft2(y, g)))
          _e2 = Qe2(c), Dr2 = g === re2, Xt2 = ee2(), $e2 = parseFloat($2(g.a)) + H2, !J2 && Z2 > 1 && (ut2 = (oe2 ? B.scrollingElement || qe2 : y).style, ut2 = { style: ut2, value: ut2["overflow" + g.a.toUpperCase()] }, oe2 && Qe2(L3)["overflow" + g.a.toUpperCase()] !== "scroll" && (ut2.style["overflow" + g.a.toUpperCase()] = "scroll")), pn2(c, ce2, _e2), Ft2 = Gr2(c), we2 = bt2(c, true), nn2 = Pe2 && yt2(y, Dr2 ? Ce2 : re2)(), v ? (te = [v + g.os2, V2 + H2 + ae2], te.t = ce2, he2 = v === ne2 ? en2(c, g) + V2 + H2 : 0, he2 && (te.push(g.d, he2 + ae2), ce2.style.flexBasis !== "auto" && (ce2.style.flexBasis = he2 + ae2)), or2(te), We2 && E2.forEach(function(Dt) {
            Dt.pin === We2 && Dt.vars.pinSpacing !== false && (Dt._subPinOffset = true);
          }), Pe2 && ee2(nt2)) : (he2 = en2(c, g), he2 && ce2.style.flexBasis !== "auto" && (ce2.style.flexBasis = he2 + ae2)), Pe2 && (be2 = { top: we2.top + (Dr2 ? Xt2 - O2 : nn2) + ae2, left: we2.left + (Dr2 ? nn2 : Xt2 - O2) + ae2, boxSizing: "border-box", position: "fixed" }, be2[Wt2] = be2["max" + sr2] = Math.ceil(we2.width) + ae2, be2[Gt2] = be2["max" + kn2] = Math.ceil(we2.height) + ae2, be2[Je2] = be2[Je2 + Sr2] = be2[Je2 + br2] = be2[Je2 + Tr2] = be2[Je2 + Cr2] = "0", be2[ne2] = _e2[ne2], be2[ne2 + Sr2] = _e2[ne2 + Sr2], be2[ne2 + br2] = _e2[ne2 + br2], be2[ne2 + Tr2] = _e2[ne2 + Tr2], be2[ne2 + Cr2] = _e2[ne2 + Cr2], Et2 = Oi2(ht2, be2, Ke2), ze2 && ee2(0)), r ? (Mn2 = r._initted, ln2(1), r.render(r.duration(), true, true), _t = $2(g.a) - $e2 + V2 + H2, vt2 = Math.abs(V2 - _t) > 1, Pe2 && vt2 && Et2.splice(Et2.length - 2, 2), r.render(0, true, true), Mn2 || r.invalidate(true), r.parent || r.totalTime(r.totalTime()), ln2(0)) : _t = V2, ut2 && (ut2.value ? ut2.style["overflow" + g.a.toUpperCase()] = ut2.value : ut2.style.removeProperty("overflow-" + g.a));
        else if (h && ee2() && !w)
          for (we2 = h.parentNode; we2 && we2 !== L3; )
            we2._pinOffset && (O2 -= we2._pinOffset, Z2 -= we2._pinOffset), we2 = we2.parentNode;
        ur2 && ur2.forEach(function(Dt) {
          return Dt.revert(false, true);
        }), s.start = O2, s.end = Z2, Re2 = Xe2 = ze2 ? nt2 : ee2(), !w && !ze2 && (Re2 < nt2 && ee2(nt2), s.scroll.rec = 0), s.revert(false, true), dt2 = Te2(), rt2 && (Ze2 = -1, rt2.restart(true)), Se2 = 0, r && ue2 && (r._initted || It2) && r.progress() !== It2 && r.progress(It2 || 0, true).render(r.time(), true, true), (ye2 || me2 !== s.progress || w || U2 || r && !r._initted) && (r && !ue2 && (r._initted || me2 || r.vars.immediateRender !== false) && r.totalProgress(w && O2 < -1e-3 && !me2 ? d.utils.normalize(O2, Z2, 0) : me2, true), s.progress = ye2 || (Re2 - O2) / V2 === me2 ? 0 : me2), c && v && (ce2._pinOffset = Math.round(s.progress * _t)), D2 && D2.invalidate(), isNaN(cr2) || (cr2 -= d.getProperty(a, g.p), Rr2 -= d.getProperty(He2, g.p), Ur2(a, g, cr2), Ur2(Be2, g, cr2 - (C3 || 0)), Ur2(He2, g, Rr2), Ur2(Ne2, g, Rr2 - (C3 || 0))), ye2 && !ze2 && s.update(), Y2 && !ze2 && !kt2 && (kt2 = true, Y2(s), kt2 = false);
      }
    }, s.getVelocity = function() {
      return (ee2() - Xe2) / (Te2() - _r2) * 1e3 || 0;
    }, s.endAnimation = function() {
      hr2(s.callbackAnimation), r && (D2 ? D2.progress(1) : r.paused() ? ue2 || hr2(r, s.direction < 0, 1) : hr2(r, r.reversed()));
    }, s.labelToScroll = function(f) {
      return r && r.labels && (O2 || s.refresh() || O2) + r.labels[f] / r.duration() * V2 || 0;
    }, s.getTrailing = function(f) {
      var b = E2.indexOf(s), _2 = s.direction > 0 ? E2.slice(0, b).reverse() : E2.slice(b + 1);
      return (Ve2(f) ? _2.filter(function(C3) {
        return C3.vars.preventOverlaps === f;
      }) : _2).filter(function(C3) {
        return s.direction > 0 ? C3.end <= O2 : C3.start >= Z2;
      });
    }, s.update = function(f, b, _2) {
      if (!(w && !_2 && !f)) {
        var C3 = ze2 === true ? nt2 : s.scroll(), fe2 = f ? 0 : (C3 - O2) / V2, A2 = fe2 < 0 ? 0 : fe2 > 1 ? 1 : fe2 || 0, J2 = s.progress, ye2, q, H2, I2, it2, G2, We2, lt2;
        if (b && (Xe2 = Re2, Re2 = w ? ee2() : C3, T && (Lt2 = Mt, Mt = r && !ue2 ? r.totalProgress() : A2)), X2 && c && !Se2 && !Ir2 && je2 && (!A2 && O2 < C3 + (C3 - Xe2) / (Te2() - _r2) * X2 ? A2 = 1e-4 : A2 === 1 && Z2 > C3 + (C3 - Xe2) / (Te2() - _r2) * X2 && (A2 = 0.9999)), A2 !== J2 && s.enabled) {
          if (ye2 = s.isActive = !!A2 && A2 < 1, q = !!J2 && J2 < 1, G2 = ye2 !== q, it2 = G2 || !!A2 != !!J2, s.direction = A2 > J2 ? 1 : -1, s.progress = A2, it2 && !Se2 && (H2 = A2 && !J2 ? 0 : A2 === 1 ? 1 : J2 === 1 ? 2 : 3, ue2 && (I2 = !G2 && z2[H2 + 1] !== "none" && z2[H2 + 1] || z2[H2], lt2 = r && (I2 === "complete" || I2 === "reset" || I2 in r))), Ie2 && (G2 || lt2) && (lt2 || M3 || !r) && (ke2(Ie2) ? Ie2(s) : s.getTrailing(Ie2).forEach(function(Xt2) {
            return Xt2.endAnimation();
          })), ue2 || (D2 && !Se2 && !Ir2 ? (D2._dp._time - D2._start !== D2._time && D2.render(D2._dp._time - D2._start), D2.resetTo ? D2.resetTo("totalProgress", A2, r._tTime / r._tDur) : (D2.vars.totalProgress = A2, D2.invalidate().restart())) : r && r.totalProgress(A2, !!(Se2 && (dt2 || f)))), c) {
            if (f && v && (ce2.style[v + g.os2] = lr2), !Pe2)
              et2(mr2($e2 + _t * A2));
            else if (it2) {
              if (We2 = !f && A2 > J2 && Z2 + 1 > C3 && C3 + 1 >= ft2(y, g), Ke2)
                if (!f && (ye2 || We2)) {
                  var he2 = bt2(c, true), _e2 = C3 - O2;
                  Jn2(c, L3, he2.top + (g === re2 ? _e2 : 0) + ae2, he2.left + (g === re2 ? 0 : _e2) + ae2);
                } else
                  Jn2(c, ce2);
              or2(ye2 || We2 ? Et2 : Ft2), vt2 && A2 < 1 && ye2 || et2($e2 + (A2 === 1 && !We2 ? _t : 0));
            }
          }
          T && !De2.tween && !Se2 && !Ir2 && rt2.restart(true), l && (G2 || ge2 && A2 && (A2 < 1 || !an2)) && Er2(l.targets).forEach(function(Xt2) {
            return Xt2.classList[ye2 || ge2 ? "add" : "remove"](l.className);
          }), u15 && !ue2 && !f && u15(s), it2 && !Se2 ? (ue2 && (lt2 && (I2 === "complete" ? r.pause().totalProgress(1) : I2 === "reset" ? r.restart(true).pause() : I2 === "restart" ? r.restart(true) : r[I2]()), u15 && u15(s)), (G2 || !an2) && (x2 && G2 && cn2(s, x2), Me2[H2] && cn2(s, Me2[H2]), ge2 && (A2 === 1 ? s.kill(false, 1) : Me2[H2] = 0), G2 || (H2 = A2 === 1 ? 1 : 3, Me2[H2] && cn2(s, Me2[H2]))), Ee2 && !ye2 && Math.abs(s.getVelocity()) > (xr2(Ee2) ? Ee2 : 2500) && (hr2(s.callbackAnimation), D2 ? D2.progress(1) : hr2(r, I2 === "reverse" ? 1 : !A2, 1))) : ue2 && u15 && !Se2 && u15(s);
        }
        if (Zt2) {
          var we2 = w ? C3 / w.duration() * (w._caScrollDist || 0) : C3;
          Mr2(we2 + (a._isFlipped ? 1 : 0)), Zt2(we2);
        }
        Jt && Jt(-C3 / w.duration() * (w._caScrollDist || 0));
      }
    }, s.enable = function(f, b) {
      s.enabled || (s.enabled = true, de(y, "resize", yr2), oe2 || de(y, "scroll", tr2), se2 && de(o4, "refreshInit", se2), f !== false && (s.progress = me2 = 0, Re2 = Xe2 = Ze2 = ee2()), b !== false && s.refresh());
    }, s.getTween = function(f) {
      return f && De2 ? De2.tween : D2;
    }, s.setPositions = function(f, b, _2, C3) {
      if (w) {
        var fe2 = w.scrollTrigger, A2 = w.duration(), J2 = fe2.end - fe2.start;
        f = fe2.start + J2 * f / A2, b = fe2.start + J2 * b / A2;
      }
      s.refresh(false, false, { start: Hn2(f, _2 && !!s._startClamp), end: Hn2(b, _2 && !!s._endClamp) }, C3), s.update();
    }, s.adjustPinSpacing = function(f) {
      if (te && f) {
        var b = te.indexOf(g.d) + 1;
        te[b] = parseFloat(te[b]) + f + ae2, te[1] = parseFloat(te[1]) + f + ae2, or2(te);
      }
    }, s.disable = function(f, b) {
      if (s.enabled && (f !== false && s.revert(true, true), s.enabled = s.isActive = false, b || D2 && D2.pause(), nt2 = 0, xe2 && (xe2.uncache = 1), se2 && pe2(o4, "refreshInit", se2), rt2 && (rt2.pause(), De2.tween && De2.tween.kill() && (De2.tween = 0)), !oe2)) {
        for (var _2 = E2.length; _2--; )
          if (E2[_2].scroller === y && E2[_2] !== s)
            return;
        pe2(y, "resize", yr2), oe2 || pe2(y, "scroll", tr2);
      }
    }, s.kill = function(f, b) {
      s.disable(f, b), D2 && !b && D2.kill(), p && delete mn2[p];
      var _2 = E2.indexOf(s);
      _2 >= 0 && E2.splice(_2, 1), _2 === Le2 && Zr2 > 0 && Le2--, _2 = 0, E2.forEach(function(C3) {
        return C3.scroller === s.scroller && (_2 = 1);
      }), _2 || ze2 || (s.scroll.rec = 0), r && (r.scrollTrigger = null, f && r.revert({ kill: false }), b || r.kill()), Be2 && [Be2, Ne2, a, He2].forEach(function(C3) {
        return C3.parentNode && C3.parentNode.removeChild(C3);
      }), kr2 === s && (kr2 = 0), c && (xe2 && (xe2.uncache = 1), _2 = 0, E2.forEach(function(C3) {
        return C3.pin === c && _2++;
      }), _2 || (xe2.spacer = 0)), t.onKill && t.onKill(s);
    }, E2.push(s), s.enable(false, false), mt2 && mt2(s), r && r.add && !V2) {
      var F2 = s.update;
      s.update = function() {
        s.update = F2, k2.cache++, O2 || Z2 || s.refresh();
      }, d.delayedCall(0.01, s.update), V2 = 0.01, O2 = Z2 = 0;
    } else
      s.refresh();
    c && Di2();
  }, o4.register = function(t) {
    return rr2 || (d = t || li2(), si2() && __dai_window.document && o4.enable(), rr2 = vr2), rr2;
  }, o4.defaults = function(t) {
    if (t)
      for (var r in t)
        Hr2[r] = t[r];
    return Hr2;
  }, o4.disable = function(t, r) {
    vr2 = 0, E2.forEach(function(u15) {
      return u15[r ? "kill" : "disable"](t);
    }), pe2(P, "wheel", tr2), pe2(B, "scroll", tr2), clearInterval(zr2), pe2(B, "touchcancel", ct2), pe2(L3, "touchstart", ct2), Br2(pe2, B, "pointerdown,touchstart,mousedown", Wn2), Br2(pe2, B, "pointerup,touchend,mouseup", Gn2), Qr2.kill(), Xr2(pe2);
    for (var i = 0; i < k2.length; i += 3)
      Nr2(pe2, k2[i], k2[i + 1]), Nr2(pe2, k2[i], k2[i + 2]);
  }, o4.enable = function() {
    if (P = __dai_window, B = document, qe2 = B.documentElement, L3 = B.body, d && (Er2 = d.utils.toArray, wr2 = d.utils.clamp, _n2 = d.core.context || ct2, ln2 = d.core.suppressOverwrites || ct2, bn2 = P.history.scrollRestoration || "auto", xn2 = P.pageYOffset || 0, d.core.globals("ScrollTrigger", o4), L3)) {
      vr2 = 1, ir2 = document.createElement("div"), ir2.style.height = "100vh", ir2.style.position = "absolute", _i2(), Ci2(), K2.register(d), o4.isTouch = K2.isTouch, Ot2 = K2.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(__dai_navigator.userAgent), hn2 = K2.isTouch === 1, de(P, "wheel", tr2), wn2 = [P, B, qe2, L3], d.matchMedia ? (o4.matchMedia = function(x2) {
        var Y2 = d.matchMedia(), M3;
        for (M3 in x2)
          Y2.add(M3, x2[M3]);
        return Y2;
      }, d.addEventListener("matchMediaInit", function() {
        return Pn2();
      }), d.addEventListener("matchMediaRevert", function() {
        return gi2();
      }), d.addEventListener("matchMedia", function() {
        Ht2(0, 1), Kt2("matchMedia");
      }), d.matchMedia().add("(orientation: portrait)", function() {
        return fn2(), fn2;
      })) : console.warn("Requires GSAP 3.11.0 or later"), fn2(), de(B, "scroll", tr2);
      var t = L3.hasAttribute("style"), r = L3.style, i = r.borderTopStyle, u15 = d.core.Animation.prototype, l, p;
      for (u15.revert || Object.defineProperty(u15, "revert", { value: function() {
        return this.time(-0.01, true);
      } }), r.borderTopStyle = "solid", l = bt2(L3), re2.m = Math.round(l.top + re2.sc()) || 0, Ce2.m = Math.round(l.left + Ce2.sc()) || 0, i ? r.borderTopStyle = i : r.removeProperty("border-top-style"), t || (L3.setAttribute("style", ""), L3.removeAttribute("style")), zr2 = setInterval(qn2, 250), d.delayedCall(0.5, function() {
        return Ir2 = 0;
      }), de(B, "touchcancel", ct2), de(L3, "touchstart", ct2), Br2(de, B, "pointerdown,touchstart,mousedown", Wn2), Br2(de, B, "pointerup,touchend,mouseup", Gn2), gn2 = d.utils.checkPrefix("transform"), $r2.push(gn2), rr2 = Te2(), Qr2 = d.delayedCall(0.2, Ht2).pause(), nr2 = [B, "visibilitychange", function() {
        var x2 = P.innerWidth, Y2 = P.innerHeight;
        B.hidden ? (Xn2 = x2, Bn2 = Y2) : (Xn2 !== x2 || Bn2 !== Y2) && yr2();
      }, B, "DOMContentLoaded", Ht2, P, "load", Ht2, P, "resize", yr2], Xr2(de), E2.forEach(function(x2) {
        return x2.enable(0, 1);
      }), p = 0; p < k2.length; p += 3)
        Nr2(pe2, k2[p], k2[p + 1]), Nr2(pe2, k2[p], k2[p + 2]);
    }
  }, o4.config = function(t) {
    "limitCallbacks" in t && (an2 = !!t.limitCallbacks);
    var r = t.syncInterval;
    r && clearInterval(zr2) || (zr2 = r) && setInterval(qn2, r), "ignoreMobileResize" in t && (hn2 = o4.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (Xr2(pe2) || Xr2(de, t.autoRefreshEvents || "none"), ni2 = (t.autoRefreshEvents + "").indexOf("resize") === -1);
  }, o4.scrollerProxy = function(t, r) {
    var i = Ye2(t), u15 = k2.indexOf(i), l = Vt2(i);
    ~u15 && k2.splice(u15, l ? 6 : 2), r && (l ? st2.unshift(P, r, L3, r, qe2, r) : st2.unshift(i, r));
  }, o4.clearMatchMedia = function(t) {
    E2.forEach(function(r) {
      return r._ctx && r._ctx.query === t && r._ctx.kill(true, true);
    });
  }, o4.isInViewport = function(t, r, i) {
    var u15 = (Ve2(t) ? Ye2(t) : t).getBoundingClientRect(), l = u15[i ? Wt2 : Gt2] * r || 0;
    return i ? u15.right - l > 0 && u15.left + l < P.innerWidth : u15.bottom - l > 0 && u15.top + l < P.innerHeight;
  }, o4.positionInViewport = function(t, r, i) {
    Ve2(t) && (t = Ye2(t));
    var u15 = t.getBoundingClientRect(), l = u15[i ? Wt2 : Gt2], p = r == null ? l / 2 : r in tn2 ? tn2[r] * l : ~r.indexOf("%") ? parseFloat(r) * l / 100 : parseFloat(r) || 0;
    return i ? (u15.left + p) / P.innerWidth : (u15.top + p) / P.innerHeight;
  }, o4.killAll = function(t) {
    if (E2.slice(0).forEach(function(i) {
      return i.vars.id !== "ScrollSmoother" && i.kill();
    }), t !== true) {
      var r = qt2.killAll || [];
      qt2 = {}, r.forEach(function(i) {
        return i();
      });
    }
  }, o4;
}();
R2.version = "3.13.0";
R2.saveStyles = function(o4) {
  return o4 ? Er2(o4).forEach(function(e) {
    if (e && e.style) {
      var n = Ue2.indexOf(e);
      n >= 0 && Ue2.splice(n, 5), Ue2.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), d.core.getCache(e), _n2());
    }
  }) : Ue2;
};
R2.revert = function(o4, e) {
  return Pn2(!o4, e);
};
R2.create = function(o4, e) {
  return new R2(o4, e);
};
R2.refresh = function(o4) {
  return o4 ? yr2(true) : (rr2 || R2.register()) && Ht2(true);
};
R2.update = function(o4) {
  return ++k2.cache && Ct2(o4 === true ? 2 : 0);
};
R2.clearScrollMemory = hi2;
R2.maxScroll = function(o4, e) {
  return ft2(o4, e ? Ce2 : re2);
};
R2.getScrollFunc = function(o4, e) {
  return yt2(Ye2(o4), e ? Ce2 : re2);
};
R2.getById = function(o4) {
  return mn2[o4];
};
R2.getAll = function() {
  return E2.filter(function(o4) {
    return o4.vars.id !== "ScrollSmoother";
  });
};
R2.isScrolling = function() {
  return !!je2;
};
R2.snapDirectional = En2;
R2.addEventListener = function(o4, e) {
  var n = qt2[o4] || (qt2[o4] = []);
  ~n.indexOf(e) || n.push(e);
};
R2.removeEventListener = function(o4, e) {
  var n = qt2[o4], t = n && n.indexOf(e);
  t >= 0 && n.splice(t, 1);
};
R2.batch = function(o4, e) {
  var n = [], t = {}, r = e.interval || 0.016, i = e.batchMax || 1e9, u15 = function(x2, Y2) {
    var M3 = [], h = [], c = d.delayedCall(r, function() {
      Y2(M3, h), M3 = [], h = [];
    }).pause();
    return function(v) {
      M3.length || c.restart(true), M3.push(v.trigger), h.push(v), i <= M3.length && c.progress(1);
    };
  }, l;
  for (l in e)
    t[l] = l.substr(0, 2) === "on" && ke2(e[l]) && l !== "onRefreshInit" ? u15(l, e[l]) : e[l];
  return ke2(i) && (i = i(), de(R2, "refresh", function() {
    return i = e.batchMax();
  })), Er2(o4).forEach(function(p) {
    var x2 = {};
    for (l in t)
      x2[l] = t[l];
    x2.trigger = p, n.push(R2.create(x2));
  }), n;
};
var jn2 = function(e, n, t, r) {
  return n > r ? e(r) : n < 0 && e(0), t > r ? (r - n) / (t - n) : t < 0 ? n / (n - t) : 1;
};
var dn2 = function o3(e, n) {
  n === true ? e.style.removeProperty("touch-action") : e.style.touchAction = n === true ? "auto" : n ? "pan-" + n + (K2.isTouch ? " pinch-zoom" : "") : "none", e === qe2 && o3(L3, n);
};
var Vr2 = { auto: 1, scroll: 1 };
var Fi2 = function(e) {
  var n = e.event, t = e.target, r = e.axis, i = (n.changedTouches ? n.changedTouches[0] : n).target, u15 = i._gsap || d.core.getCache(i), l = Te2(), p;
  if (!u15._isScrollT || l - u15._isScrollT > 2e3) {
    for (; i && i !== L3 && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !(Vr2[(p = Qe2(i)).overflowY] || Vr2[p.overflowX])); )
      i = i.parentNode;
    u15._isScroll = i && i !== t && !Vt2(i) && (Vr2[(p = Qe2(i)).overflowY] || Vr2[p.overflowX]), u15._isScrollT = l;
  }
  (u15._isScroll || r === "x") && (n.stopPropagation(), n._gsapAllow = true);
};
var mi2 = function(e, n, t, r) {
  return K2.create({ target: e, capture: true, debounce: false, lockAxis: true, type: n, onWheel: r = r && Fi2, onPress: r, onDrag: r, onScroll: r, onEnable: function() {
    return t && de(B, K2.eventTypes[0], ti2, false, true);
  }, onDisable: function() {
    return pe2(B, K2.eventTypes[0], ti2, true);
  } });
};
var Li2 = /(input|label|select|textarea)/i;
var ei2;
var ti2 = function(e) {
  var n = Li2.test(e.target.tagName);
  (n || ei2) && (e._gsapAllow = true, ei2 = n);
};
var zi2 = function(e) {
  Nt2(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = true, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
  var n = e, t = n.normalizeScrollX, r = n.momentum, i = n.allowNestedScroll, u15 = n.onRelease, l, p, x2 = Ye2(e.target) || qe2, Y2 = d.core.globals().ScrollSmoother, M3 = Y2 && Y2.get(), h = Ot2 && (e.content && Ye2(e.content) || M3 && e.content !== false && !M3.smooth() && M3.content()), c = yt2(x2, re2), v = yt2(x2, Ce2), U2 = 1, X2 = (K2.isTouch && P.visualViewport ? P.visualViewport.scale * P.visualViewport.width : P.outerWidth) / P.innerWidth, ie2 = 0, W3 = ke2(r) ? function() {
    return r(l);
  } : function() {
    return r || 2.8;
  }, ge2, T, Ke2 = mi2(x2, e.type, true, i), N3 = function() {
    return T = false;
  }, w = ct2, Ee2 = ct2, Ie2 = function() {
    p = ft2(x2, re2), Ee2 = wr2(Ot2 ? 1 : 0, p), t && (w = wr2(0, ft2(x2, Ce2))), ge2 = Ut2;
  }, g = function() {
    h._gsap.y = mr2(parseFloat(h._gsap.y) + c.offset) + "px", h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(h._gsap.y) + ", 0, 1)", c.offset = c.cacheID = 0;
  }, ue2 = function() {
    if (T) {
      requestAnimationFrame(N3);
      var Q2 = mr2(l.deltaY / 2), j2 = Ee2(c.v - Q2);
      if (h && j2 !== c.v + c.offset) {
        c.offset = j2 - c.v;
        var s = mr2((parseFloat(h && h._gsap.y) || 0) - c.offset);
        h.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + s + ", 0, 1)", h._gsap.y = s + "px", c.cacheID = k2.cache, Ct2();
      }
      return true;
    }
    c.offset && g(), T = true;
  }, y, pt, oe2, Pe2, Me2 = function() {
    Ie2(), y.isActive() && y.vars.scrollY > p && (c() > p ? y.progress(1) && c(p) : y.resetTo("scrollY", p));
  };
  return h && d.set(h, { y: "+=0" }), e.ignoreCheck = function(z2) {
    return Ot2 && z2.type === "touchmove" && ue2(z2) || U2 > 1.05 && z2.type !== "touchstart" || l.isGesturing || z2.touches && z2.touches.length > 1;
  }, e.onPress = function() {
    T = false;
    var z2 = U2;
    U2 = mr2((P.visualViewport && P.visualViewport.scale || 1) / X2), y.pause(), z2 !== U2 && dn2(x2, U2 > 1.01 ? true : t ? false : "x"), pt = v(), oe2 = c(), Ie2(), ge2 = Ut2;
  }, e.onRelease = e.onGestureStart = function(z2, Q2) {
    if (c.offset && g(), !Q2)
      Pe2.restart(true);
    else {
      k2.cache++;
      var j2 = W3(), s, se2;
      t && (s = v(), se2 = s + j2 * 0.05 * -z2.velocityX / 0.227, j2 *= jn2(v, s, se2, ft2(x2, Ce2)), y.vars.scrollX = w(se2)), s = c(), se2 = s + j2 * 0.05 * -z2.velocityY / 0.227, j2 *= jn2(c, s, se2, ft2(x2, re2)), y.vars.scrollY = Ee2(se2), y.invalidate().duration(j2).play(0.01), (Ot2 && y.vars.scrollY >= p || s >= p - 1) && d.to({}, { onUpdate: Me2, duration: j2 });
    }
    u15 && u15(z2);
  }, e.onWheel = function() {
    y._ts && y.pause(), Te2() - ie2 > 1e3 && (ge2 = 0, ie2 = Te2());
  }, e.onChange = function(z2, Q2, j2, s, se2) {
    if (Ut2 !== ge2 && Ie2(), Q2 && t && v(w(s[2] === Q2 ? pt + (z2.startX - z2.x) : v() + Q2 - s[1])), j2) {
      c.offset && g();
      var Yt2 = se2[2] === j2, St2 = Yt2 ? oe2 + z2.startY - z2.y : c() + j2 - se2[1], Ze2 = Ee2(St2);
      Yt2 && St2 !== Ze2 && (oe2 += Ze2 - St2), c(Ze2);
    }
    (j2 || Q2) && Ct2();
  }, e.onEnable = function() {
    dn2(x2, t ? false : "x"), R2.addEventListener("refresh", Me2), de(P, "resize", Me2), c.smooth && (c.target.style.scrollBehavior = "auto", c.smooth = v.smooth = false), Ke2.enable();
  }, e.onDisable = function() {
    dn2(x2, true), pe2(P, "resize", Me2), R2.removeEventListener("refresh", Me2), Ke2.kill();
  }, e.lockAxis = e.lockAxis !== false, l = new K2(e), l.iOS = Ot2, Ot2 && !c() && c(1), Ot2 && d.ticker.add(ct2), Pe2 = l._dc, y = d.to(l, { ease: "power4", paused: true, inherit: false, scrollX: t ? "+=0.1" : "+=0", scrollY: "+=0.1", modifiers: { scrollY: vi2(c, c(), function() {
    return y.pause();
  }) }, onUpdate: Ct2, onComplete: Pe2.vars.onComplete }), l;
};
R2.sort = function(o4) {
  if (ke2(o4))
    return E2.sort(o4);
  var e = P.pageYOffset || 0;
  return R2.getAll().forEach(function(n) {
    return n._sortY = n.trigger ? e + n.trigger.getBoundingClientRect().top : n.start + P.innerHeight;
  }), E2.sort(o4 || function(n, t) {
    return (n.vars.refreshPriority || 0) * -1e6 + (n.vars.containerAnimation ? 1e6 : n._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6);
  });
};
R2.observe = function(o4) {
  return new K2(o4);
};
R2.normalizeScroll = function(o4) {
  if (typeof o4 > "u")
    return Fe2;
  if (o4 === true && Fe2)
    return Fe2.enable();
  if (o4 === false) {
    Fe2 && Fe2.kill(), Fe2 = o4;
    return;
  }
  var e = o4 instanceof K2 ? o4 : zi2(o4);
  return Fe2 && Fe2.target === e.target && Fe2.kill(), Vt2(e.target) && (Fe2 = e), e;
};
R2.core = { _getVelocityProp: Lr2, _inputObserver: mi2, _scrollers: k2, _proxies: st2, bridge: { ss: function() {
  je2 || Kt2("scrollStart"), je2 = Te2();
}, ref: function() {
  return Se2;
} } };
li2() && d.registerPlugin(R2);

// http-url:https://framerusercontent.com/modules/AJBlLJuwF9txhNPw6w8f/cKFIveIToFGjet3Bky9G/StickyGridGallery.js
import { addPropertyControls, ControlType, useIsStaticRenderer } from "./_framer-runtime.js";
var GRID_DEFAULTS = { columns: 3, width: 51, columnGap: 32, rowGap: 40, aspectRatio: 1, radius: 0, maxItems: 12 };
var ANIMATION_DEFAULTS = { startAt: 25, titleAt: 57, stagger: 0.06, zoomScale: 2.05, spreadX: 40, spreadY: 40, scrub: 0, parallaxReveal: true };
var CONTENT_DEFAULTS = { show: true, title: "Sticky Grid Scroll", titleFont: {}, titleColor: "#000000", titleWidth: 64, description: "A structured scroll-driven image grid where movement unfolds progressively within a sticky layout.", descriptionFont: {}, descriptionColor: "#000000", descriptionWidth: 32, buttonLabel: "Read more", buttonLink: "", buttonFont: {}, buttonColor: "#000000", uppercase: true, gap: 24 };
var RESPONSIVE_DEFAULTS = { enabled: true, maxWidth: 480, columns: 3, width: 84, columnGap: 12, rowGap: 14, zoomScale: 1.5, spreadX: 30, spreadY: 70, scrollLength: 425, textScale: 0.5, titleWidth: 100, descriptionWidth: 92 };
var LIGHTBOX_DEFAULTS = { enabled: true, backdrop: "rgba(0, 0, 0, 0.92)", blur: 0, padding: 40, radius: 4, fit: "contain", duration: 0.3, showClose: true, showArrows: true, showCounter: true, showCaption: true, showLink: false, linkLabel: "Open", loop: true, swipe: true, closeOnBackdrop: true, buttonSize: 44, buttonBackground: "rgba(255, 255, 255, 0.12)", textColor: "#FFFFFF", font: {} };
var ADVANCED_DEFAULTS = { stickyMode: "auto", canvasState: "grid", compactOnCanvas: true, openLinks: true, reducedMotion: true, textureSize: 1024 };
var PLACEHOLDER_IMAGES = [{ image: { src: "https://framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg", alt: "Gradient 1" } }, { image: { src: "https://framerusercontent.com/images/aNsAT3jCvt4zglbWCUoFe33Q.jpg", alt: "Gradient 2" } }, { image: { src: "https://framerusercontent.com/images/BYnxEV1zjYb9bhWh1IwBZ1ZoS60.jpg", alt: "Gradient 3" } }, { image: { src: "https://framerusercontent.com/images/2uTNEj5aTl2K3NJaEFWMbnrA.jpg", alt: "Gradient 4" } }, { image: { src: "https://framerusercontent.com/images/f9RiWoNpmlCMqVRIHz8l8wYfeI.jpg", alt: "Gradient 5" } }];
function withDefaults(defaults, value) {
  const result = { ...defaults };
  if (!value)
    return result;
  for (const key in value) {
    if (value[key] !== void 0)
      result[key] = value[key];
  }
  return result;
}
var useIsoLayoutEffect = typeof __dai_window !== "undefined" ? useLayoutEffect : useEffect;
function scaleFont(font, factor) {
  const size = font?.fontSize;
  if (size === void 0 || factor === 1)
    return font;
  if (typeof size === "number")
    return { ...font, fontSize: size * factor };
  const match = /^([\d.]+)(px|rem|em)$/.exec(String(size).trim());
  if (!match)
    return font;
  return { ...font, fontSize: `${Math.round(parseFloat(match[1]) * factor * 100) / 100}${match[2]}` };
}
function pickImageUrl(src, srcSet, target) {
  if (!srcSet)
    return src;
  const candidates = [];
  for (const part of srcSet.split(",")) {
    const [url, descriptor] = part.trim().split(/\s+/);
    if (!url)
      continue;
    const match = descriptor && /^(\d+)w$/.exec(descriptor);
    if (match)
      candidates.push({ url, width: parseInt(match[1], 10) });
  }
  if (!candidates.length)
    return src;
  candidates.sort((a, b) => a.width - b.width);
  return (candidates.find((c) => c.width >= target) ?? candidates[candidates.length - 1]).url;
}
var baseUrl = (url) => url.split(/[?#]/)[0];
function collectMediaFromDom(root, target) {
  const items = [];
  const seen = /* @__PURE__ */ new Set();
  const push = (item) => {
    const key = baseUrl(item.url);
    if (seen.has(key))
      return;
    seen.add(key);
    items.push(item);
  };
  root.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src") || img.currentSrc || "";
    if (!src)
      return;
    const srcSet = img.getAttribute("srcset");
    const anchor = img.closest("a");
    push({ url: pickImageUrl(src, srcSet || void 0, target), srcSet: srcSet || null, alt: img.getAttribute("alt") || "", href: anchor?.getAttribute("href") || null });
  });
  root.querySelectorAll("[style*='background-image']").forEach((el) => {
    const match = /url\(["']?([^"')]+)["']?\)/.exec(el.style.backgroundImage);
    if (!match || el.querySelector("img"))
      return;
    const anchor = el.closest("a");
    push({ url: match[1], srcSet: null, alt: el.getAttribute("aria-label") || "", href: anchor?.getAttribute("href") || null });
  });
  return items;
}
function sameMedia(a, b) {
  if (a.length !== b.length)
    return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i].url !== b[i].url || a[i].href !== b[i].href || a[i].srcSet !== b[i].srcSet)
      return false;
  }
  return true;
}
function hasClippingAncestor(el) {
  let node = el?.parentElement ?? null;
  while (node && node !== document.body) {
    const style = getComputedStyle(node);
    for (const value of [style.overflow, style.overflowY, style.overflowX]) {
      if (value === "hidden" || value === "auto" || value === "scroll" || value === "overlay")
        return true;
    }
    node = node.parentElement;
  }
  return false;
}
var smoothScroll = null;
function acquireSmoothScroll() {
  if (!smoothScroll) {
    const style = document.createElement("style");
    style.textContent = `html.lenis,html.lenis body{height:auto}html.lenis{scroll-behavior:auto!important}.lenis.lenis-stopped{overflow:clip}.lenis [data-lenis-prevent]{overscroll-behavior:contain}`;
    document.head.appendChild(style);
    const lenis = new A({ lerp: 0.08, wheelMultiplier: 1.4 });
    const tick = (time) => lenis.raf(time * 1e3);
    lenis.on("scroll", R2.update);
    cs.ticker.add(tick);
    cs.ticker.lagSmoothing(0);
    smoothScroll = { lenis, users: 0, tick, style };
  }
  const shared = smoothScroll;
  shared.users++;
  return () => {
    if (--shared.users > 0)
      return;
    cs.ticker.remove(shared.tick);
    shared.lenis.off("scroll", R2.update);
    shared.lenis.destroy();
    shared.style.remove();
    if (smoothScroll === shared)
      smoothScroll = null;
  };
}
function StickyGridGallery(props) {
  const { source = "cms", children, images, backgroundColor = "#FFFFFF", scrollLength = 425, style } = props;
  const gridBase = withDefaults(GRID_DEFAULTS, props.grid);
  const animationBase = withDefaults(ANIMATION_DEFAULTS, props.animation);
  const contentBase = withDefaults(CONTENT_DEFAULTS, props.content);
  const hasStyledContent = Children.toArray(props.styledContent).length > 0;
  const responsive = withDefaults(RESPONSIVE_DEFAULTS, props.responsive);
  const advanced = withDefaults(ADVANCED_DEFAULTS, props.advanced);
  const lightboxOptions = withDefaults(LIGHTBOX_DEFAULTS, props.lightbox);
  const isStatic = useIsStaticRenderer();
  const [isMobile, setIsMobile] = useState(false);
  const mobile = responsive.enabled && isMobile;
  const grid = mobile ? { ...gridBase, columns: responsive.columns, width: responsive.width, columnGap: responsive.columnGap, rowGap: responsive.rowGap } : gridBase;
  const animation = mobile ? { ...animationBase, zoomScale: responsive.zoomScale, spreadX: responsive.spreadX, spreadY: responsive.spreadY } : animationBase;
  const content = mobile ? { ...contentBase, titleFont: scaleFont(contentBase.titleFont, responsive.textScale), descriptionFont: scaleFont(contentBase.descriptionFont, Math.max(0.8, responsive.textScale + 0.35)), buttonFont: scaleFont(contentBase.buttonFont, Math.max(0.8, responsive.textScale + 0.35)), gap: Math.round(contentBase.gap * Math.max(0.5, responsive.textScale + 0.2)), titleWidth: responsive.titleWidth, descriptionWidth: responsive.descriptionWidth } : contentBase;
  const effectiveScrollLength = mobile ? responsive.scrollLength : scrollLength;
  const [domMedia, setDomMedia] = useState([]);
  const [stickyMode, setStickyMode] = useState("css");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [lightboxShown, setLightboxShown] = useState(false);
  const [lightboxImageShown, setLightboxImageShown] = useState(true);
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const lastFocusRef = useRef(null);
  const lightboxTimer = useRef(0);
  const swipeStart = useRef(null);
  const rootRef = useRef(null);
  const slotRef = useRef(null);
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const galleryRef = useRef(null);
  const gridRef = useRef(null);
  const itemRefs = useRef([]);
  const imagesKey = JSON.stringify((images ?? []).map((item) => [item.image?.src, item.image?.srcSet, item.link]));
  const arrayMedia = useMemo(() => {
    const list = images && images.length ? images : PLACEHOLDER_IMAGES;
    return list.filter((item) => item.image?.src).map((item) => ({ url: item.image.src, srcSet: item.image.srcSet || null, alt: item.image.alt || "", href: item.link || null }));
  }, [imagesKey]);
  const allMedia = source === "cms" ? domMedia : arrayMedia;
  const media = useMemo(() => grid.maxItems > 0 ? allMedia.slice(0, grid.maxItems) : allMedia, [allMedia, grid.maxItems]);
  const columns = Math.max(1, Math.round(grid.columns));
  useEffect(() => {
    if (source !== "cms")
      return;
    const root = slotRef.current;
    if (!root)
      return;
    let timer = 0;
    const scan = () => {
      const items = collectMediaFromDom(root, advanced.textureSize);
      startTransition(() => setDomMedia((prev) => sameMedia(prev, items) ? prev : items));
    };
    scan();
    const observer = new MutationObserver(() => {
      __dai_window.clearTimeout(timer);
      timer = __dai_window.setTimeout(scan, 150);
    });
    observer.observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ["src", "srcset", "style", "href"] });
    return () => {
      observer.disconnect();
      __dai_window.clearTimeout(timer);
    };
  }, [source, advanced.textureSize]);
  useEffect(() => {
    if (typeof __dai_window === "undefined")
      return;
    const mode = advanced.stickyMode;
    const next = mode === "auto" ? hasClippingAncestor(rootRef.current) ? "transform" : "css" : mode;
    startTransition(() => setStickyMode(next));
  }, [advanced.stickyMode]);
  useEffect(() => {
    if (typeof __dai_window === "undefined" || !advanced.reducedMotion) {
      startTransition(() => setReduceMotion(false));
      return;
    }
    const query = __dai_window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const update = () => startTransition(() => setReduceMotion(query?.matches ?? false));
    update();
    query?.addEventListener?.("change", update);
    return () => query?.removeEventListener?.("change", update);
  }, [advanced.reducedMotion]);
  useIsoLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || typeof __dai_window === "undefined")
      return;
    const update = () => {
      const width = root.clientWidth || __dai_window.innerWidth;
      const next = width <= responsive.maxWidth;
      setIsMobile((prev) => prev === next ? prev : next);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(root);
    return () => ro.disconnect();
  }, [responsive.maxWidth]);
  const animationKey = JSON.stringify(animation);
  const layoutKey = JSON.stringify({ grid, content, effectiveScrollLength });
  useIsoLayoutEffect(() => {
    if (typeof __dai_window === "undefined")
      return;
    const root = rootRef.current;
    const wrapper = wrapperRef.current;
    const gridEl = gridRef.current;
    if (!root || !wrapper || !gridEl)
      return;
    const items = itemRefs.current.slice(0, media.length).filter((item) => !!item);
    const groups = Array.from({ length: columns }, () => []);
    items.forEach((item, index) => groups[index % columns].push(item));
    let title = titleRef.current || contentRef.current?.querySelector("h2") || null;
    const description = descriptionRef.current || contentRef.current?.querySelector("p") || null;
    let copy = [description, buttonRef.current].filter((el) => !!el);
    const titleOffset = () => {
      const height = contentRef.current?.offsetHeight || 1;
      return (height - (title?.offsetHeight || 0)) / 2 / height * 100;
    };
    const half = (columns - 1) / 2;
    const xPercent = (column) => half ? (column - half) / half * animation.spreadX : 0;
    const yPercent = (index, count) => {
      const middle = Math.floor(count / 2);
      if (count % 2) {
        const itemHeight = items[0]?.offsetHeight || 1;
        return index < middle ? 0 : 100 + grid.rowGap / itemHeight * 100;
      }
      return (index < middle ? -1 : 1) * animation.spreadY;
    };
    const dy = () => (wrapper.offsetHeight + gridEl.offsetHeight) / 2;
    let cancelled = false;
    let context;
    let contentTween;
    let releaseSmoothScroll;
    let resizeObserver;
    let refreshTimer = 0;
    const imageListeners = [];
    const initialize = () => {
      if (cancelled)
        return;
      title = titleRef.current || contentRef.current?.querySelector("h2") || null;
      copy = [descriptionRef.current || contentRef.current?.querySelector("p") || null, buttonRef.current].filter((el) => !!el);
      cs.registerPlugin(R2);
      context = cs.context(() => {
        cs.set(gridEl, { visibility: "visible", scale: 1 });
        if (contentRef.current)
          cs.set(contentRef.current, { visibility: "visible" });
        if (title)
          cs.set(title, { opacity: 1, yPercent: titleOffset });
        copy.length && cs.set(copy, { opacity: 0, pointerEvents: "none" });
        cs.set(items, { xPercent: 0, yPercent: 0, y: 0 });
        cs.set(wrapper, { y: 0, yPercent: 0 });
        const setContent = (visible, instant = false) => {
          contentTween?.kill();
          if (instant) {
            if (title)
              cs.set(title, { yPercent: visible ? 0 : titleOffset() });
            copy.length && cs.set(copy, { opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" });
            return;
          }
          contentTween = cs.timeline({ defaults: { overwrite: "auto" } });
          if (title)
            contentTween.to(title, { yPercent: visible ? 0 : titleOffset(), duration: 0.7, ease: "power2.inOut" });
          if (copy.length)
            contentTween.to(copy, { opacity: visible ? 1 : 0, duration: 0.4, ease: visible ? "power1.inOut" : "power1.out", pointerEvents: visible ? "auto" : "none" }, visible && title ? "-=90%" : "<");
        };
        if (isStatic || reduceMotion) {
          const state = isStatic ? advanced.canvasState : "zoom";
          if (state === "start")
            groups.forEach((group, index) => cs.set(group, { y: dy() * (index % 2 === 0 ? -1 : 1) }));
          if (state === "zoom") {
            cs.set(gridEl, { scale: animation.zoomScale });
            groups.forEach((group, column) => {
              cs.set(group, { xPercent: xPercent(column) });
              if (column === half)
                cs.set(group, { yPercent: (index) => yPercent(index, group.length) });
            });
            setContent(true, true);
          }
          return;
        }
        cs.set([wrapper, gridEl, ...items], { willChange: "transform" });
        if (stickyMode === "transform")
          cs.to(wrapper, { y: () => Math.max(0, root.offsetHeight - wrapper.offsetHeight), ease: "none", scrollTrigger: { trigger: root, start: "top top", end: "bottom bottom", scrub: true, invalidateOnRefresh: true } });
        if (animation.parallaxReveal)
          cs.from(wrapper, { yPercent: -100, ease: "none", scrollTrigger: { trigger: root, start: "top bottom", end: "top top", scrub: true } });
        if (title)
          cs.from(title, { opacity: 0, duration: 0.7, ease: "power1.out", scrollTrigger: { trigger: root, start: `top ${animation.titleAt}%`, toggleActions: "play none none reset" } });
        const reveal = cs.timeline();
        groups.forEach((group, column) => {
          if (!group.length)
            return;
          const fromTop = column % 2 === 0;
          const fromY = () => dy() * (fromTop ? -1 : 1);
          cs.set(group, { y: fromY });
          reveal.fromTo(group, { y: fromY }, { y: 0, duration: 0.5, stagger: { each: animation.stagger, from: fromTop ? "end" : "start" }, ease: "power1.inOut" }, "grid-reveal");
        });
        const zoom = cs.timeline({ defaults: { duration: 1, ease: "power3.inOut" } });
        zoom.to(gridEl, { scale: animation.zoomScale });
        groups.forEach((group, column) => {
          if (group.length && column !== half)
            zoom.to(group, { xPercent: xPercent(column) }, 0);
        });
        const center = groups[half];
        if (center?.length)
          zoom.to(center, { yPercent: (index) => yPercent(index, center.length), duration: 0.5, ease: "power1.inOut" }, 0.5);
        const timeline = cs.timeline({ scrollTrigger: {
          trigger: root,
          start: `top ${animation.startAt}%`,
          end: "bottom bottom",
          scrub: animation.scrub > 0 ? animation.scrub : true,
          invalidateOnRefresh: true,
          // Refresh can happen after a resize or at a restored scroll position.
          onRefresh: (trigger) => {
            const duration = trigger.animation?.duration() || 1;
            setContent(trigger.progress * duration >= duration - 0.32, true);
          }
        } });
        timeline.add(reveal).add(zoom, "-=0.6").add(() => setContent(timeline.scrollTrigger?.direction === 1), "-=0.32");
      }, root);
      if (!isStatic && !reduceMotion && items.length) {
        releaseSmoothScroll = acquireSmoothScroll();
        const refresh = () => {
          __dai_window.clearTimeout(refreshTimer);
          refreshTimer = __dai_window.setTimeout(() => {
            if (cancelled)
              return;
            smoothScroll?.lenis.resize();
            R2.refresh();
          }, 80);
        };
        resizeObserver = new ResizeObserver(refresh);
        resizeObserver.observe(root);
        resizeObserver.observe(gridEl);
        if (title)
          resizeObserver.observe(title);
        refresh();
      }
    };
    if (isStatic || reduceMotion || !items.length)
      initialize();
    else {
      const loaded = Array.from(gridEl.querySelectorAll("img")).map((img) => new Promise((resolve) => {
        if (img.complete) {
          resolve();
          return;
        }
        const done = () => {
          img.removeEventListener("load", done);
          img.removeEventListener("error", done);
          resolve();
        };
        img.addEventListener("load", done);
        img.addEventListener("error", done);
        imageListeners.push(() => {
          img.removeEventListener("load", done);
          img.removeEventListener("error", done);
        });
      }));
      Promise.all([...loaded, document.fonts.ready]).then(initialize);
    }
    return () => {
      cancelled = true;
      imageListeners.forEach((remove) => remove());
      __dai_window.clearTimeout(refreshTimer);
      resizeObserver?.disconnect();
      contentTween?.kill();
      context?.revert();
      releaseSmoothScroll?.();
    };
  }, [media, columns, isStatic, reduceMotion, stickyMode, mobile, advanced.canvasState, animationKey, layoutKey]);
  const lightboxEnabled = lightboxOptions.enabled && !isStatic;
  const lightboxCount = media.length;
  const lightboxDurationMs = Math.max(0, lightboxOptions.duration) * 1e3;
  const openLightbox = useCallback((index) => {
    if (!lightboxEnabled)
      return;
    __dai_window.clearTimeout(lightboxTimer.current);
    lastFocusRef.current = document.activeElement;
    setLightboxImageShown(true);
    setLightboxIndex(index);
  }, [lightboxEnabled]);
  const closeLightbox = useCallback(() => {
    setLightboxShown(false);
    __dai_window.clearTimeout(lightboxTimer.current);
    lightboxTimer.current = __dai_window.setTimeout(() => {
      setLightboxIndex(null);
      lastFocusRef.current?.focus?.({ preventScroll: true });
    }, lightboxDurationMs);
  }, [lightboxDurationMs]);
  const stepLightbox = useCallback((direction) => {
    setLightboxIndex((current) => {
      if (current === null || lightboxCount < 2)
        return current;
      const next = current + direction;
      if (next < 0)
        return lightboxOptions.loop ? lightboxCount - 1 : 0;
      if (next >= lightboxCount)
        return lightboxOptions.loop ? 0 : lightboxCount - 1;
      return next;
    });
  }, [lightboxCount, lightboxOptions.loop]);
  const lightboxOpen = lightboxIndex !== null;
  useEffect(() => {
    if (!lightboxOpen || typeof document === "undefined")
      return;
    const raf = requestAnimationFrame(() => {
      setLightboxShown(true);
      const focusTarget = closeButtonRef.current || dialogRef.current;
      focusTarget?.focus({ preventScroll: true });
    });
    const onKey = (event) => {
      if (event.key === "Tab") {
        const dialog = dialogRef.current;
        const controls = Array.from(dialog?.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]') || []);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (!first) {
          event.preventDefault();
          dialog?.focus({ preventScroll: true });
          return;
        }
        if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
          event.preventDefault();
          last.focus({ preventScroll: true });
        } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === dialog)) {
          event.preventDefault();
          first.focus({ preventScroll: true });
        }
      } else if (event.key === "Escape")
        closeLightbox();
      else if (event.key === "ArrowRight")
        stepLightbox(1);
      else if (event.key === "ArrowLeft")
        stepLightbox(-1);
    };
    __dai_window.addEventListener("keydown", onKey);
    const lenis = smoothScroll?.lenis;
    lenis?.stop();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      __dai_window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      lenis?.start();
    };
  }, [lightboxOpen, closeLightbox, stepLightbox]);
  useEffect(() => {
    if (lightboxIndex === null || typeof __dai_window === "undefined")
      return;
    for (const offset of [1, -1]) {
      const item = media[(lightboxIndex + offset + media.length) % media.length];
      if (!item)
        continue;
      const preload = new Image();
      if (item.srcSet) {
        preload.sizes = "100vw";
        preload.srcset = item.srcSet;
      }
      preload.src = item.url;
    }
  }, [lightboxIndex, media]);
  useEffect(() => () => __dai_window.clearTimeout(lightboxTimer.current), []);
  const lightboxItem = lightboxIndex !== null ? media[lightboxIndex] : null;
  const lightboxTransition = `${lightboxOptions.duration}s ease`;
  const buttonStyle = { position: "absolute", width: lightboxOptions.buttonSize, height: lightboxOptions.buttonSize, borderRadius: "50%", border: "none", background: lightboxOptions.buttonBackground, color: lightboxOptions.textColor, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0, backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" };
  const iconSize = Math.round(lightboxOptions.buttonSize * 0.45);
  const lightboxNode = lightboxOpen && lightboxItem && typeof document !== "undefined" ? /* @__PURE__ */ createPortal(/* @__PURE__ */ _jsxs("div", { ref: dialogRef, tabIndex: -1, role: "dialog", "data-lenis-prevent": "", "aria-modal": "true", "aria-label": lightboxItem.alt || "Image preview", onClick: lightboxOptions.closeOnBackdrop ? closeLightbox : void 0, onTouchStart: (event) => {
    if (!lightboxOptions.swipe)
      return;
    const touch = event.touches[0];
    swipeStart.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
  }, onTouchEnd: (event) => {
    const start = swipeStart.current;
    swipeStart.current = null;
    if (!start || !lightboxOptions.swipe)
      return;
    const touch = event.changedTouches[0];
    if (!touch)
      return;
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy))
      stepLightbox(dx < 0 ? 1 : -1);
  }, style: { position: "fixed", inset: 0, zIndex: 2147483e3, display: "flex", alignItems: "center", justifyContent: "center", padding: lightboxOptions.padding, boxSizing: "border-box", background: lightboxOptions.backdrop, backdropFilter: lightboxOptions.blur ? `blur(${lightboxOptions.blur}px)` : void 0, WebkitBackdropFilter: lightboxOptions.blur ? `blur(${lightboxOptions.blur}px)` : void 0, opacity: lightboxShown ? 1 : 0, transition: `opacity ${lightboxTransition}`, color: lightboxOptions.textColor, touchAction: "pan-y", ...lightboxOptions.font }, children: [/* @__PURE__ */ _jsxs("figure", { onClick: (event) => event.stopPropagation(), style: { margin: 0, maxWidth: "100%", maxHeight: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, transform: lightboxShown ? "scale(1)" : "scale(0.96)", transition: `transform ${lightboxTransition}`, minHeight: 0 }, children: [/* @__PURE__ */ _jsx("img", { src: lightboxItem.url, srcSet: lightboxItem.srcSet || void 0, sizes: lightboxItem.srcSet ? "100vw" : void 0, alt: lightboxItem.alt, draggable: false, onLoad: () => setLightboxImageShown(true), style: { display: "block", maxWidth: "100%", maxHeight: `calc(100vh - ${lightboxOptions.padding * 2 + (lightboxOptions.showCaption && lightboxItem.alt ? 44 : 0)}px)`, width: lightboxOptions.fit === "cover" ? "100%" : "auto", height: lightboxOptions.fit === "cover" ? "100%" : "auto", objectFit: lightboxOptions.fit, borderRadius: lightboxOptions.radius, boxShadow: "0 24px 80px rgba(0,0,0,0.45)", opacity: lightboxImageShown ? 1 : 0, transition: `opacity 0.2s ease`, userSelect: "none" } }, lightboxIndex), lightboxOptions.showCaption && lightboxItem.alt ? /* @__PURE__ */ _jsx("figcaption", { style: { textAlign: "center", opacity: 0.85, maxWidth: 640 }, children: lightboxItem.alt }) : null, lightboxOptions.showLink && lightboxItem.href ? /* @__PURE__ */ _jsx("a", { href: lightboxItem.href, style: { color: lightboxOptions.textColor, background: lightboxOptions.buttonBackground, padding: "8px 16px", borderRadius: 999, textDecoration: "none" }, children: lightboxOptions.linkLabel }) : null] }), lightboxOptions.showCounter && lightboxCount > 1 ? /* @__PURE__ */ _jsxs("div", { style: { position: "absolute", top: 16, left: 20, opacity: 0.85, pointerEvents: "none" }, children: [lightboxIndex + 1, " / ", lightboxCount] }) : null, lightboxOptions.showClose ? /* @__PURE__ */ _jsx("button", { ref: closeButtonRef, type: "button", "aria-label": "Close", onClick: (event) => {
    event.stopPropagation();
    closeLightbox();
  }, style: { ...buttonStyle, top: 16, right: 16 }, children: /* @__PURE__ */ _jsx("svg", { width: iconSize, height: iconSize, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ _jsx("path", { d: "M6 6l12 12M18 6L6 18" }) }) }) : null, lightboxOptions.showArrows && lightboxCount > 1 ? /* @__PURE__ */ _jsxs(_Fragment, { children: [/* @__PURE__ */ _jsx("button", { type: "button", "aria-label": "Previous image", onClick: (event) => {
    event.stopPropagation();
    stepLightbox(-1);
  }, style: { ...buttonStyle, left: 16, top: "50%", transform: "translateY(-50%)" }, children: /* @__PURE__ */ _jsx("svg", { width: iconSize, height: iconSize, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ _jsx("path", { d: "M15 5l-7 7 7 7" }) }) }), /* @__PURE__ */ _jsx("button", { type: "button", "aria-label": "Next image", onClick: (event) => {
    event.stopPropagation();
    stepLightbox(1);
  }, style: { ...buttonStyle, right: 16, top: "50%", transform: "translateY(-50%)" }, children: /* @__PURE__ */ _jsx("svg", { width: iconSize, height: iconSize, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ _jsx("path", { d: "M9 5l7 7-7 7" }) }) })] }) : null] }), document.body) : null;
  const compact = isStatic && advanced.compactOnCanvas;
  const textTransform = content.uppercase ? "uppercase" : "none";
  const sizes = `${Math.max(5, Math.round(grid.width / columns * animation.zoomScale))}vw`;
  const showEmptyState = isStatic && media.length === 0;
  itemRefs.current.length = media.length;
  return /* @__PURE__ */ _jsxs("div", { ref: rootRef, "data-muscat-gallery": "", style: { position: "relative", width: "100%", background: backgroundColor, overflow: animation.parallaxReveal ? "clip" : "visible", ...style, height: compact ? "100vh" : `${effectiveScrollLength}vh` }, children: [/* @__PURE__ */ _jsx("style", { children: `[data-muscat-gallery] [role="button"]:focus-visible { outline: 2px solid currentColor; outline-offset: 4px; }` }), /* @__PURE__ */ _jsx("div", { ref: slotRef, "aria-hidden": "true", style: { position: "absolute", left: 0, top: 0, width: 1, height: 1, overflow: "hidden", opacity: 0, pointerEvents: "none" }, children: source === "cms" ? children : null }), /* @__PURE__ */ _jsxs("div", { ref: wrapperRef, style: { position: stickyMode === "css" && !compact ? "sticky" : "relative", top: 0, width: "100%", height: "100vh", overflow: "hidden" }, children: [content.show && /* @__PURE__ */ _jsx("div", { ref: contentRef, style: { position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", padding: "0 24px", boxSizing: "border-box", textAlign: "center", pointerEvents: "none", visibility: "hidden" }, children: hasStyledContent ? Children.map(props.styledContent, (child) => /* @__PURE__ */ isValidElement(child) ? /* @__PURE__ */ cloneElement(child, { style: { ...child.props.style, width: "100%", height: "auto" } }) : child) : /* @__PURE__ */ _jsxs(_Fragment, { children: [/* @__PURE__ */ _jsx("h2", { ref: titleRef, style: { margin: 0, width: `${content.titleWidth}%`, maxWidth: "100%", color: content.titleColor, opacity: 0, ...content.titleFont }, children: content.title }), /* @__PURE__ */ _jsx("p", { ref: descriptionRef, style: { margin: 0, marginTop: content.gap, width: `${content.descriptionWidth}%`, maxWidth: "100%", color: content.descriptionColor, textTransform, opacity: 0, ...content.descriptionFont }, children: content.description }), content.buttonLabel ? /* @__PURE__ */ _jsx("a", { ref: buttonRef, href: content.buttonLink || void 0, style: { marginTop: Math.round(content.gap * 1.33), color: content.buttonColor, textTransform, textDecoration: "none", opacity: 0, pointerEvents: "none", cursor: "pointer", ...content.buttonFont }, onMouseEnter: (e) => e.currentTarget.style.textDecoration = "underline", onMouseLeave: (e) => e.currentTarget.style.textDecoration = "none", children: content.buttonLabel }) : null] }) }), /* @__PURE__ */ _jsx("div", { ref: galleryRef, style: { position: "absolute", top: "50%", left: "50%", transform: "translate3d(-50%, -50%, 0)", width: `${grid.width}%` }, children: /* @__PURE__ */ _jsx("div", { ref: gridRef, style: { display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, columnGap: grid.columnGap, rowGap: grid.rowGap, visibility: "hidden" }, children: media.map((item, i) => {
    const img = /* @__PURE__ */ _jsx("img", { src: item.url, srcSet: item.srcSet || void 0, sizes: item.srcSet ? sizes : void 0, alt: item.alt, draggable: false, decoding: "async", loading: "eager", style: { display: "block", width: "100%", height: "100%", objectFit: "cover", backgroundColor: "rgba(0,0,0,0.06)" } });
    return /* @__PURE__ */ _jsx("div", { ref: (el) => {
      itemRefs.current[i] = el;
    }, role: lightboxEnabled ? "button" : void 0, tabIndex: lightboxEnabled ? 0 : void 0, "aria-label": lightboxEnabled ? item.alt || `Open image ${i + 1}` : void 0, onClick: lightboxEnabled ? () => openLightbox(i) : void 0, onKeyDown: lightboxEnabled ? (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(i);
      }
    } : void 0, style: { width: "100%", aspectRatio: String(grid.aspectRatio), overflow: "hidden", borderRadius: grid.radius, cursor: lightboxEnabled ? "zoom-in" : void 0, color: content.titleColor }, children: item.href && advanced.openLinks && !lightboxEnabled ? /* @__PURE__ */ _jsx("a", { href: item.href, style: { display: "block", width: "100%", height: "100%" }, children: img }) : img }, `${item.url}-${i}`);
  }) }) }), showEmptyState && /* @__PURE__ */ _jsx("div", { style: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, textAlign: "center", fontFamily: "Inter, system-ui, sans-serif", fontSize: 14, color: "rgba(0,0,0,0.5)", pointerEvents: "none" }, children: source === "cms" ? "Connect a CMS Collection List to the \u201CCollection\u201D slot to fill the grid." : "Add images in the properties panel to fill the grid." })] }), lightboxNode] });
}
StickyGridGallery.displayName = "Sticky Grid Gallery";
addPropertyControls(StickyGridGallery, { source: { type: ControlType.Enum, title: "Source", options: ["cms", "images"], optionTitles: ["CMS", "Images"], defaultValue: "cms", displaySegmentedControl: true }, children: { type: ControlType.Slot, title: "Collection", description: "Connect a CMS Collection List (or any layer with images). The grid reads its images.", maxCount: 1, hidden: (props) => props.source !== "cms" }, styledContent: { type: ControlType.Slot, title: "Styled Text", description: "Optional native text layers. Use one H2 and one paragraph, linked to Assets \u2192 Text Styles. Overrides the Text fields below.", maxCount: 1 }, images: { type: ControlType.Array, title: "Images", control: { type: ControlType.Object, controls: { image: { type: ControlType.ResponsiveImage, title: "Image" }, link: { type: ControlType.Link, title: "Link" } } }, defaultValue: [], hidden: (props) => props.source !== "images" }, backgroundColor: { type: ControlType.Color, title: "Background", defaultValue: "#FFFFFF" }, scrollLength: { type: ControlType.Number, title: "Scroll Length", description: "Section height in viewport heights. Longer = slower animation.", defaultValue: 425, min: 150, max: 1e3, step: 5, unit: "vh" }, grid: { type: ControlType.Object, title: "Grid", icon: "object", defaultValue: GRID_DEFAULTS, controls: { columns: { type: ControlType.Number, title: "Columns", defaultValue: 3, min: 1, max: 6, step: 1 }, width: { type: ControlType.Number, title: "Width", defaultValue: 51, min: 20, max: 100, step: 1, unit: "%" }, columnGap: { type: ControlType.Number, title: "Column Gap", defaultValue: 32, min: 0, max: 120, step: 1 }, rowGap: { type: ControlType.Number, title: "Row Gap", defaultValue: 40, min: 0, max: 120, step: 1 }, aspectRatio: { type: ControlType.Number, title: "Aspect", defaultValue: 1, min: 0.5, max: 2, step: 0.05 }, radius: { type: ControlType.Number, title: "Radius", defaultValue: 0, min: 0, max: 60, step: 1 }, maxItems: { type: ControlType.Number, title: "Max Items", description: "0 shows every item from the source.", defaultValue: 12, min: 0, max: 60, step: 1 } } }, animation: { type: ControlType.Object, title: "Animation", icon: "effect", defaultValue: ANIMATION_DEFAULTS, controls: { startAt: { type: ControlType.Number, title: "Start At", description: "Grid starts moving when the section top reaches this point of the viewport.", defaultValue: 25, min: 0, max: 100, step: 1, unit: "%" }, titleAt: { type: ControlType.Number, title: "Title At", description: "Title fades in when the section reaches this viewport point, as in the original.", defaultValue: 57, min: 0, max: 100, step: 1, unit: "%" }, stagger: { type: ControlType.Number, title: "Stagger", defaultValue: 0.06, min: 0, max: 0.3, step: 0.01 }, zoomScale: { type: ControlType.Number, title: "Zoom", defaultValue: 2.05, min: 1, max: 4, step: 0.05 }, spreadX: { type: ControlType.Number, title: "Spread X", defaultValue: 40, min: 0, max: 150, step: 1, unit: "%" }, spreadY: { type: ControlType.Number, title: "Spread Y", defaultValue: 40, min: 0, max: 150, step: 1, unit: "%" }, scrub: { type: ControlType.Number, title: "Scroll Inertia", description: "Extra GSAP catch-up time. Keep 0 for the original Lenis-smoothed scroll.", defaultValue: 0, min: 0, max: 1.5, step: 0.01 }, parallaxReveal: { type: ControlType.Boolean, title: "Reveal", description: "Curtain-style reveal while the section enters the viewport.", defaultValue: true } } }, content: { type: ControlType.Object, title: "Text", icon: "object", defaultValue: CONTENT_DEFAULTS, controls: { show: { type: ControlType.Boolean, title: "Show", defaultValue: true }, title: { type: ControlType.String, title: "Title", defaultValue: CONTENT_DEFAULTS.title, hidden: (props) => !props.show }, titleFont: { type: ControlType.Font, title: "Title Font", controls: "extended", defaultFontType: "serif", defaultValue: { fontSize: "104px", lineHeight: "1.15em", letterSpacing: "-0.02em", textAlign: "center" }, hidden: (props) => !props.show }, titleColor: { type: ControlType.Color, title: "Title Color", defaultValue: "#000000", hidden: (props) => !props.show }, titleWidth: { type: ControlType.Number, title: "Title Width", defaultValue: 64, min: 20, max: 100, step: 1, unit: "%", hidden: (props) => !props.show }, description: { type: ControlType.String, title: "Description", defaultValue: CONTENT_DEFAULTS.description, displayTextArea: true, hidden: (props) => !props.show }, descriptionFont: { type: ControlType.Font, title: "Description Font", controls: "extended", defaultFontType: "sans-serif", defaultValue: { fontSize: "14px", variant: "Regular", lineHeight: "1.3em", textAlign: "center" }, hidden: (props) => !props.show }, descriptionColor: { type: ControlType.Color, title: "Description Color", defaultValue: "#000000", hidden: (props) => !props.show }, descriptionWidth: { type: ControlType.Number, title: "Description Width", defaultValue: 32, min: 20, max: 100, step: 1, unit: "%", hidden: (props) => !props.show }, buttonLabel: { type: ControlType.String, title: "Button", defaultValue: "Read more", hidden: (props) => !props.show }, buttonLink: { type: ControlType.Link, title: "Button Link", hidden: (props) => !props.show }, buttonFont: { type: ControlType.Font, title: "Button Font", controls: "extended", defaultFontType: "sans-serif", defaultValue: { fontSize: "14px", variant: "Regular", lineHeight: "1em", textAlign: "center" }, hidden: (props) => !props.show }, buttonColor: { type: ControlType.Color, title: "Button Color", defaultValue: "#000000", hidden: (props) => !props.show }, uppercase: { type: ControlType.Boolean, title: "Uppercase", defaultValue: true, hidden: (props) => !props.show }, gap: { type: ControlType.Number, title: "Gap", defaultValue: 24, min: 0, max: 80, step: 1, hidden: (props) => !props.show } } }, responsive: { type: ControlType.Object, title: "Mobile", icon: "object", defaultValue: RESPONSIVE_DEFAULTS, controls: { enabled: { type: ControlType.Boolean, title: "Mobile Tuning", description: "Use these values when the gallery is narrower than Max Width.", defaultValue: true }, maxWidth: { type: ControlType.Number, title: "Max Width", defaultValue: 480, min: 320, max: 1024, step: 10, unit: "px", hidden: (props) => !props.enabled }, columns: { type: ControlType.Number, title: "Columns", defaultValue: 3, min: 1, max: 4, step: 1, hidden: (props) => !props.enabled }, width: { type: ControlType.Number, title: "Start Width", description: "Grid width at the start, in % of the screen. Sets the starting card size.", defaultValue: 84, min: 30, max: 100, step: 1, unit: "%", hidden: (props) => !props.enabled }, columnGap: { type: ControlType.Number, title: "Column Gap", defaultValue: 12, min: 0, max: 60, step: 1, hidden: (props) => !props.enabled }, rowGap: { type: ControlType.Number, title: "Row Gap", defaultValue: 14, min: 0, max: 60, step: 1, hidden: (props) => !props.enabled }, zoomScale: { type: ControlType.Number, title: "End Zoom", description: "Card size at the end, as a multiple of the start size.", defaultValue: 1.5, min: 1, max: 3, step: 0.05, hidden: (props) => !props.enabled }, spreadX: { type: ControlType.Number, title: "Spread X", description: "How far the side columns slide out, in % of card width.", defaultValue: 30, min: 0, max: 150, step: 1, unit: "%", hidden: (props) => !props.enabled }, spreadY: { type: ControlType.Number, title: "Spread Y", description: "How far the middle column splits up / down, in % of card height.", defaultValue: 70, min: 0, max: 150, step: 1, unit: "%", hidden: (props) => !props.enabled }, scrollLength: { type: ControlType.Number, title: "Scroll Length", defaultValue: 425, min: 150, max: 1e3, step: 5, unit: "vh", hidden: (props) => !props.enabled }, textScale: { type: ControlType.Number, title: "Title Scale", description: "Multiplier for the title size on mobile.", defaultValue: 0.5, min: 0.2, max: 1, step: 0.05, hidden: (props) => !props.enabled }, titleWidth: { type: ControlType.Number, title: "Title Width", defaultValue: 100, min: 40, max: 100, step: 1, unit: "%", hidden: (props) => !props.enabled }, descriptionWidth: { type: ControlType.Number, title: "Text Width", defaultValue: 92, min: 40, max: 100, step: 1, unit: "%", hidden: (props) => !props.enabled } } }, lightbox: { type: ControlType.Object, title: "Lightbox", icon: "interaction", defaultValue: LIGHTBOX_DEFAULTS, controls: { enabled: { type: ControlType.Boolean, title: "On Click", description: "Open the photo in a full-screen preview.", defaultValue: true, enabledTitle: "Preview", disabledTitle: "Off" }, backdrop: { type: ControlType.Color, title: "Backdrop", defaultValue: "rgba(0, 0, 0, 0.92)", hidden: (props) => !props.enabled }, blur: { type: ControlType.Number, title: "Blur", defaultValue: 0, min: 0, max: 40, step: 1, unit: "px", hidden: (props) => !props.enabled }, padding: { type: ControlType.Number, title: "Padding", defaultValue: 40, min: 0, max: 160, step: 4, hidden: (props) => !props.enabled }, radius: { type: ControlType.Number, title: "Radius", defaultValue: 4, min: 0, max: 40, step: 1, hidden: (props) => !props.enabled }, fit: { type: ControlType.Enum, title: "Fit", options: ["contain", "cover"], optionTitles: ["Fit", "Fill"], defaultValue: "contain", displaySegmentedControl: true, hidden: (props) => !props.enabled }, duration: { type: ControlType.Number, title: "Transition", defaultValue: 0.3, min: 0, max: 1.5, step: 0.05, unit: "s", hidden: (props) => !props.enabled }, showClose: { type: ControlType.Boolean, title: "Close Button", defaultValue: true, hidden: (props) => !props.enabled }, showArrows: { type: ControlType.Boolean, title: "Arrows", defaultValue: true, hidden: (props) => !props.enabled }, showCounter: { type: ControlType.Boolean, title: "Counter", defaultValue: true, hidden: (props) => !props.enabled }, showCaption: { type: ControlType.Boolean, title: "Caption", description: "Shows the image alt text.", defaultValue: true, hidden: (props) => !props.enabled }, showLink: { type: ControlType.Boolean, title: "Link Button", description: "Button to the CMS item link, when present.", defaultValue: false, hidden: (props) => !props.enabled }, linkLabel: { type: ControlType.String, title: "Link Label", defaultValue: "Open", hidden: (props) => !props.enabled || !props.showLink }, loop: { type: ControlType.Boolean, title: "Loop", defaultValue: true, hidden: (props) => !props.enabled }, swipe: { type: ControlType.Boolean, title: "Swipe", defaultValue: true, hidden: (props) => !props.enabled }, closeOnBackdrop: { type: ControlType.Boolean, title: "Backdrop Closes", defaultValue: true, hidden: (props) => !props.enabled }, buttonSize: { type: ControlType.Number, title: "Button Size", defaultValue: 44, min: 28, max: 80, step: 1, hidden: (props) => !props.enabled }, buttonBackground: { type: ControlType.Color, title: "Button Fill", defaultValue: "rgba(255, 255, 255, 0.12)", hidden: (props) => !props.enabled }, textColor: { type: ControlType.Color, title: "Text & Icons", defaultValue: "#FFFFFF", hidden: (props) => !props.enabled }, font: { type: ControlType.Font, title: "Font", controls: "extended", defaultFontType: "sans-serif", defaultValue: { fontSize: "14px", variant: "Medium", lineHeight: "1.4em" }, hidden: (props) => !props.enabled } } }, advanced: { type: ControlType.Object, title: "Advanced", icon: "effect", defaultValue: ADVANCED_DEFAULTS, controls: { stickyMode: { type: ControlType.Enum, title: "Sticky", description: "CSS sticky needs parents without clipping. Auto falls back to a transform when a parent clips.", options: ["auto", "css", "transform"], optionTitles: ["Auto", "CSS", "Transform"], defaultValue: "auto" }, canvasState: { type: ControlType.Enum, title: "On Canvas", description: "Which moment of the animation to show on the Framer canvas.", options: ["start", "grid", "zoom"], optionTitles: ["Start", "Grid", "Zoomed"], defaultValue: "grid" }, compactOnCanvas: { type: ControlType.Boolean, title: "Compact", description: "Show the section at one viewport height on the canvas.", defaultValue: true }, openLinks: { type: ControlType.Boolean, title: "Image Links", description: "When the lightbox is off, clicking a photo follows its CMS link.", defaultValue: true }, reducedMotion: { type: ControlType.Boolean, title: "Reduced Motion", description: "Show the final state without motion when the visitor prefers reduced motion.", defaultValue: true }, textureSize: { type: ControlType.Enum, title: "Image Size", options: [512, 1024, 2048], optionTitles: ["512", "1024", "2048"], defaultValue: 1024 } } } });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "StickyGridGallery", "slots": ["children", "styledContent"], "annotations": { "framerIntrinsicWidth": "1200", "framerSupportedLayoutWidth": "any", "framerContractVersion": "1", "framerIntrinsicHeight": "800", "framerSupportedLayoutHeight": "auto" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  StickyGridGallery as default
};
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
/*! Bundled license information:

gsap/Observer.js:
  (*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
