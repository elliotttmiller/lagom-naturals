var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/jqZa0XPoMOPYWI7Rj6zM/Rmxjf23thxSsSZhcUDcr/TextRevealScroll.js
import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";
import { addPropertyControls, ControlType, useIsStaticRenderer } from "./_framer-runtime.js";
function TextRevealScroll(props) {
  const {
    text,
    font,
    baseColor,
    revealColor,
    textAlign,
    // trigger
    sectionId,
    useSectionTrigger,
    viewportAnchor,
    replay,
    // custom in-view %
    useInViewPercent,
    inViewPercent,
    // reveal mode
    mode,
    // initial style
    initialOpacity,
    initialBlur,
    initialScale,
    initialX,
    initialY,
    duration,
    overflowMode,
    // random order
    randomOrder,
    randomAmount,
    // easing
    easeType,
    style
  } = props;
  const isStatic = useIsStaticRenderer();
  const textRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    if (isStatic) {
      setIsReady(true);
      return;
    }
    let splitInstance = null;
    let ctx = null;
    const initAnimation = async () => {
      const [gsapModule, ScrollTriggerModule, SplitTypeModule] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger"), import("split-type")]);
      const gsap = gsapModule.default;
      const ScrollTrigger = ScrollTriggerModule.ScrollTrigger;
      const SplitType = SplitTypeModule.default;
      gsap.registerPlugin(ScrollTrigger);
      await document.fonts.ready;
      const container = textRef.current;
      if (!container)
        return;
      const content = container.querySelector("[data-tr-text]");
      if (!content)
        return;
      ctx = gsap.context(() => {
        splitInstance = new SplitType(content, { types: `${mode}, words` });
        if (splitInstance.words) {
          splitInstance.words.forEach((w) => {
            w.style.whiteSpace = "nowrap";
          });
        }
        let fragments = [];
        switch (mode) {
          case "lines":
            fragments = splitInstance.lines || [];
            break;
          case "words":
            fragments = splitInstance.words || [];
            break;
          case "chars":
            fragments = splitInstance.chars || [];
            break;
          default:
            fragments = splitInstance.lines || [];
            break;
        }
        fragments.forEach((el) => {
          const parent = el.parentNode;
          if (!parent)
            return;
          if (parent.getAttribute("data-wrapper"))
            return;
          const wrapper = document.createElement("span");
          wrapper.setAttribute("data-wrapper", "true");
          wrapper.style.display = mode === "lines" ? "block" : "inline-block";
          wrapper.style.overflow = overflowMode;
          wrapper.style.verticalAlign = "top";
          if (mode === "words")
            wrapper.style.marginRight = "0.2em";
          parent.insertBefore(wrapper, el);
          wrapper.appendChild(el);
        });
        let triggerElem = container;
        if (useSectionTrigger && sectionId && typeof __dai_window !== "undefined") {
          const target = document.getElementById(sectionId);
          if (target)
            triggerElem = target;
        }
        let startPos;
        let endPos;
        if (useInViewPercent) {
          const clamped = Math.max(0, Math.min(inViewPercent ?? 50, 100));
          const vp = `${clamped}%`;
          startPos = `top ${vp}`;
          endPos = `bottom ${vp}`;
        } else {
          const anchor = viewportAnchor === "top" ? "top" : viewportAnchor === "bottom" ? "bottom" : "center";
          startPos = `top ${anchor}`;
          endPos = `bottom ${anchor}`;
        }
        const safeDuration = Math.max(1e-3, duration || 1e-3);
        const baseStagger = mode === "chars" ? 0.01 : mode === "words" ? 0.05 : 0.1;
        const easeMap = { linear: "none", back: "back.out(1.4)", elastic: "elastic.out(1, 0.5)", smooth: "power2.out" };
        const ease = easeMap[easeType] || "power2.out";
        const fromState = { color: baseColor, opacity: initialOpacity, scale: initialScale, filter: initialBlur > 0 ? `blur(${initialBlur}px)` : "blur(0px)", x: initialX, y: initialY };
        const staggerValue = randomOrder ? { amount: randomAmount, from: "random" } : baseStagger;
        const toState = { color: revealColor, opacity: 1, scale: 1, filter: "blur(0px)", x: 0, y: 0, ease, stagger: staggerValue, duration: safeDuration };
        const scrollTriggerConfig = { trigger: triggerElem, start: startPos, end: endPos, scrub: true };
        if (!replay) {
          scrollTriggerConfig.once = true;
        }
        gsap.fromTo(fragments, fromState, { ...toState, scrollTrigger: scrollTriggerConfig });
        setIsReady(true);
      }, textRef);
    };
    initAnimation();
    return () => {
      if (ctx)
        ctx.revert();
      if (splitInstance)
        splitInstance.revert();
    };
  }, [
    // Dependencies giữ nguyên như cũ để re-run khi props thay đổi
    text,
    baseColor,
    revealColor,
    mode,
    sectionId,
    useSectionTrigger,
    viewportAnchor,
    replay,
    useInViewPercent,
    inViewPercent,
    initialOpacity,
    initialBlur,
    initialScale,
    initialX,
    initialY,
    duration,
    overflowMode,
    randomOrder,
    randomAmount,
    easeType,
    isStatic
  ]);
  const outerStyle = {
    ...style,
    width: "100%",
    minHeight: 24,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    overflow: "visible",
    // UX: Ẩn text cho đến khi JS load xong và xử lý xong để tránh giật layout
    opacity: isReady ? 1 : 0,
    transition: "opacity 0.3s ease-out"
  };
  const htmlText = (text || "").replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>");
  return /* @__PURE__ */ _jsx("div", { ref: textRef, style: outerStyle, children: /* @__PURE__ */ _jsx("div", { "data-tr-text": true, style: {
    margin: 0,
    width: "100%",
    textAlign,
    whiteSpace: "normal",
    wordBreak: "keep-all",
    ...font,
    color: baseColor,
    // Trong lúc chờ load JS, render màu gốc để tránh layout shift
    opacity: 1
  }, dangerouslySetInnerHTML: { __html: htmlText } }) });
}
TextRevealScroll.defaultProps = { text: "Scroll text reveal component.", font: { fontFamily: "Inter", fontSize: 24, fontWeight: 600, lineHeight: "1.3em", letterSpacing: "0em" }, baseColor: "#8A8A8A", revealColor: "#111111", textAlign: "left", sectionId: "", useSectionTrigger: false, viewportAnchor: "center", replay: true, useInViewPercent: false, inViewPercent: 50, mode: "lines", initialOpacity: 0, initialBlur: 8, initialScale: 0.98, initialX: 0, initialY: 20, duration: 0.6, overflowMode: "visible", randomOrder: false, randomAmount: 0.6, easeType: "smooth" };
addPropertyControls(TextRevealScroll, { text: { type: ControlType.String, title: "Text", displayTextArea: true }, font: { type: ControlType.Font, title: "Font", defaultValue: TextRevealScroll.defaultProps.font, controls: "extended" }, baseColor: { type: ControlType.Color, title: "Base Color", defaultValue: TextRevealScroll.defaultProps.baseColor }, revealColor: { type: ControlType.Color, title: "Reveal Color", defaultValue: TextRevealScroll.defaultProps.revealColor }, mode: { type: ControlType.Enum, title: "Mode", options: ["lines", "words", "chars"], optionTitles: ["Lines", "Words", "Chars"], defaultValue: "lines" }, useSectionTrigger: { type: ControlType.Boolean, title: "Section Trigger", defaultValue: TextRevealScroll.defaultProps.useSectionTrigger }, sectionId: { type: ControlType.String, title: "Section ID", placeholder: "Enter a section ID...", defaultValue: TextRevealScroll.defaultProps.sectionId, hidden: (p) => !p.useSectionTrigger }, useInViewPercent: { type: ControlType.Boolean, title: "Custom Viewport Position", defaultValue: TextRevealScroll.defaultProps.useInViewPercent }, inViewPercent: { type: ControlType.Number, title: "Start at (%)", defaultValue: TextRevealScroll.defaultProps.inViewPercent, min: 0, max: 100, step: 10, displayStepper: true, hidden: (p) => !p.useInViewPercent }, viewportAnchor: { type: ControlType.Enum, title: "Viewport", options: ["top", "center", "bottom"], optionTitles: ["Top", "Center", "Bottom"], defaultValue: TextRevealScroll.defaultProps.viewportAnchor, displaySegmentedControl: true, segmentedControlDirection: "horizontal", hidden: (p) => p.useInViewPercent }, replay: { type: ControlType.Boolean, title: "Replay", defaultValue: TextRevealScroll.defaultProps.replay }, duration: { type: ControlType.Number, title: "Duration", defaultValue: TextRevealScroll.defaultProps.duration, min: 0, max: 5, step: 0.1 }, easeType: { type: ControlType.Enum, title: "Ease", options: ["smooth", "back", "elastic", "linear"], optionTitles: ["Smooth", "Back", "Elastic", "Linear"], defaultValue: TextRevealScroll.defaultProps.easeType }, overflowMode: { type: ControlType.Enum, title: "Overflow", options: ["visible", "hidden"], optionTitles: ["Visible", "Hidden"], defaultValue: TextRevealScroll.defaultProps.overflowMode }, initialOpacity: { type: ControlType.Number, title: "Opacity", defaultValue: TextRevealScroll.defaultProps.initialOpacity, min: 0, max: 1, step: 0.05 }, initialBlur: { type: ControlType.Number, title: "Blur", defaultValue: TextRevealScroll.defaultProps.initialBlur, min: 0, max: 20, step: 1, displayStepper: true }, initialScale: { type: ControlType.Number, title: "Scale", defaultValue: TextRevealScroll.defaultProps.initialScale, min: 0, max: 3, step: 0.1 }, initialX: { type: ControlType.Number, title: "Offset X", defaultValue: TextRevealScroll.defaultProps.initialX, min: -300, max: 300, step: 1 }, initialY: { type: ControlType.Number, title: "Offset Y", defaultValue: TextRevealScroll.defaultProps.initialY, min: -300, max: 300, step: 1 }, randomOrder: { type: ControlType.Boolean, title: "Random Order", defaultValue: TextRevealScroll.defaultProps.randomOrder }, randomAmount: { type: ControlType.Number, title: "Random Amount", defaultValue: TextRevealScroll.defaultProps.randomAmount, min: 0.1, max: 2, step: 0.1, displayStepper: true, hidden: (p) => !p.randomOrder } });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "TextRevealScroll", "slots": [], "annotations": { "framerSupportedLayoutHeight": "auto", "framerContractVersion": "1", "framerSupportedLayoutWidth": "any-prefer-fixed" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  TextRevealScroll as default
};
