var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/NeM7iHOdqt9SkFEeWWa9/YQtyPb69cBZvBXR4acGq/B8XA8ff9K.js
import { jsx as _jsx, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ComponentViewportProvider, ControlType as ControlType2, cx, getFonts, getFontsFromSharedStyle, getLoadingLazyAtYPosition, Image as Image1, RichText, SmartComponentScopedContainer, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useOnVariantChange, useVariantState, withCSS, withFX, withOptimizedAppearEffect } from "./_framer-runtime.js";
import { LayoutGroup, motion as motion2, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef as useRef2 } from "react";

// http-url:https://framerusercontent.com/modules/qpjhCcDm4G1NbFAlpMKV/OnyZiTlIjOBuSKcKQWFv/AnimatedNumberCounter_Prod.js
import { jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { addPropertyControls, ControlType, RenderTarget } from "./_framer-runtime.js";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, animate, useInView } from "framer-motion";
function AnimatedNumberCounter(props) {
  const { mode, start, end, value, decimals, commas, color, animation: animation2 } = props;
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const Tag = props.tag;
  const MotionTag = motion[props.tag];
  const isDefault = mode == "default";
  const initialValue = isDefault ? start : value;
  const transition = isDefault ? animation2.transition : props.transition;
  const formatNumber = (number2) => {
    let numberString = number2.toFixed(decimals);
    if (commas) {
      numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return numberString;
  };
  const [number, setNumber] = useState(initialValue);
  const [finalValue, setFinalValue] = useState(number);
  const [currentAnimation, setCurrentAnimation] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: !props.animation.replay, amount: "some" });
  const motionValue = useMotionValue(value);
  const runAnimation = (from, to) => {
    if (!isCanvas) {
      if (currentAnimation) {
        currentAnimation.stop();
      }
      setFinalValue(to);
      setCurrentAnimation(animate(from, to, { ...transition, onUpdate: (latest) => {
        setNumber(latest);
      } }));
    }
  };
  useEffect(() => {
    if (isDefault && animation2.trigger == "appear") {
      runAnimation(start, end);
    }
  }, []);
  useEffect(() => {
    if (isDefault && animation2.trigger == "layerInView") {
      if (isInView) {
        runAnimation(start, end);
      } else {
        if (currentAnimation) {
          currentAnimation.stop();
        }
        setNumber(start);
      }
    }
  }, [isInView]);
  useEffect(() => {
    if (!isDefault) {
      runAnimation(number, value);
    }
  }, [value]);
  return /* @__PURE__ */ _jsxs(_Fragment, { children: [/* @__PURE__ */ _jsxs(Tag, { style: { ...props.style, margin: 0, opacity: 0, pointerEvents: "none", userSelect: "none", textWrap: props.balance ? "balance" : void 0, fontVariantNumeric: props.monospace ? "tabular-nums" : void 0, textAlign: "center", ...props.font }, children: [props.prefix, formatNumber(isCanvas ? initialValue : finalValue), props.suffix] }), /* @__PURE__ */ _jsxs(MotionTag, { ref, style: { position: "absolute", inset: 0, userSelect: props.userSelect ? "auto" : "none", fontVariantNumeric: props.monospace ? "tabular-nums" : void 0, margin: 0, ...color.mode == "solid" ? { color: color.color } : { WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundImage: `linear-gradient(${color.angle}deg, ${color.startColor}, ${color.endColor})` }, textDecoration: props.decoration, textWrap: props.balance ? "balance" : void 0, textAlign: "center", ...props.font, ...props.style }, children: [props.prefix, formatNumber(isCanvas ? initialValue : number), props.suffix] })] });
}
AnimatedNumberCounter.displayName = "Animated Number Counter";
addPropertyControls(AnimatedNumberCounter, { mode: { type: ControlType.Enum, options: ["default", "variants"], optionTitles: ["Default", "Variants"], displaySegmentedControl: true }, value: { type: ControlType.Number, defaultValue: 0, hidden: (props) => props.mode !== "variants" }, start: { type: ControlType.Number, defaultValue: 0, hidden: (props) => props.mode !== "default" }, end: { type: ControlType.Number, defaultValue: 100, hidden: (props) => props.mode !== "default" }, animation: { type: ControlType.Object, icon: "effect", hidden: (props) => props.mode !== "default", controls: { trigger: { type: ControlType.Enum, defaultValue: "layerInView", options: ["appear", "layerInView"], optionTitles: ["Appear", "Layer in View"], displaySegmentedControl: true, segmentedControlDirection: "vertical" }, replay: { type: ControlType.Boolean, defaultValue: true, hidden(props) {
  return props.trigger !== "layerInView";
} }, transition: { type: ControlType.Transition, defaultValue: { type: "spring", duration: 1, bounce: 0 } } } }, transition: { type: ControlType.Transition, defaultValue: { type: "spring", duration: 1, bounce: 0 }, hidden: (props) => props.mode !== "variants" }, decimals: { type: ControlType.Enum, defaultValue: 0, options: [0, 1, 2, 3], optionTitles: ["Off", "1", "2", "3"], displaySegmentedControl: true }, commas: { type: ControlType.Boolean, defaultValue: true }, font: { type: "font", controls: "extended", defaultFontType: "sans-serif", defaultValue: { fontSize: 16, lineHeight: 1 } }, color: { type: ControlType.Object, controls: { mode: { type: ControlType.Enum, defaultValue: "solid", options: ["solid", "gradient"], optionTitles: ["Solid", "Gradient"], displaySegmentedControl: true }, color: { type: ControlType.Color, defaultValue: "#000", hidden: (props) => props.mode !== "solid" }, startColor: { type: ControlType.Color, defaultValue: "#000", hidden: (props) => props.mode !== "gradient" }, endColor: { type: ControlType.Color, defaultValue: "#FFF", hidden: (props) => props.mode !== "gradient" }, angle: { type: ControlType.Number, defaultValue: 180, min: -360, max: 360, unit: "\xB0", hidden: (props) => props.mode !== "gradient" } } }, prefix: { type: ControlType.String, placeholder: "Prefix" }, suffix: { type: ControlType.String, placeholder: "Suffix" }, decoration: { type: ControlType.Enum, defaultValue: "none", options: ["none", "underline", "line-through"], optionTitles: ["None", "Underline", "Strikethrough"] }, balance: { type: ControlType.Boolean, defaultValue: false }, userSelect: { type: ControlType.Boolean, defaultValue: true }, tag: { type: ControlType.Enum, defaultValue: "p", displaySegmentedControl: true, options: ["h1", "h2", "h3", "p"], optionTitles: ["H1", "H2", "H3", "P"] }, monospace: { type: ControlType.Boolean, defaultValue: false, description: "More components at [Framer University](https://frameruni.link/cc)." } });

// http-url:https://framerusercontent.com/modules/37r8zDS2A9pKwKHSCq06/Dhu1coCCQD6qoD0AeY5R/Gwy_nKUUa.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["GF;Boldonse-regular"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Boldonse", openType: true, source: "google", style: "normal", uiFamilyName: "Boldonse", url: "https://fonts.gstatic.com/s/boldonse/v1/ZgNQjPxGPbbJUZemjC35hmHmNpCO.woff2", weight: "400" }] }];
var css = [`.framer-bzNDw .framer-styles-preset-15fb0k4:not(.rich-text-wrapper), .framer-bzNDw .framer-styles-preset-15fb0k4.rich-text-wrapper h2 { --framer-font-family: "Boldonse", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 52px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, #db5783); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-bzNDw .framer-styles-preset-15fb0k4:not(.rich-text-wrapper), .framer-bzNDw .framer-styles-preset-15fb0k4.rich-text-wrapper h2 { --framer-font-family: "Boldonse", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, #db5783); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-bzNDw .framer-styles-preset-15fb0k4:not(.rich-text-wrapper), .framer-bzNDw .framer-styles-preset-15fb0k4.rich-text-wrapper h2 { --framer-font-family: "Boldonse", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, #db5783); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`];
var className = "framer-bzNDw";

// http-url:https://framerusercontent.com/modules/NeM7iHOdqt9SkFEeWWa9/YQtyPb69cBZvBXR4acGq/B8XA8ff9K.js
var Image1WithFXWithOptimizedAppearEffect = withOptimizedAppearEffect(withFX(Image1));
var AnimatedNumberCounterFonts = getFonts(AnimatedNumberCounter);
var cycleOrder = ["pyQuyERBv", "djOSk7KG6", "aLBxMee9K", "udIcyAMZn", "ZtowqxT7d", "wSAMy8gmV"];
var serializationHash = "framer-IhtTe";
var variantClassNames = { aLBxMee9K: "framer-v-b99dq0", djOSk7KG6: "framer-v-1q7c5us", pyQuyERBv: "framer-v-8b8b1a", udIcyAMZn: "framer-v-166n7by", wSAMy8gmV: "framer-v-h61o0n", ZtowqxT7d: "framer-v-b2ouo" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { delay: 0, duration: 0.8, ease: [1, 0, 0.56, 1], type: "tween" };
var transition2 = { delay: 0.6, duration: 0.8, ease: [1, 0, 0.56, 1], type: "tween" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var transformTemplate1 = (_, t) => `translate(-50%, -50%) ${t}`;
var transition3 = { delay: 0, duration: 2, ease: [1, 0, 0.56, 1], type: "tween" };
var animation = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition3, x: 0, y: 0 };
var animation1 = { opacity: 1, rotate: -360, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 };
var humanReadableVariantMap = { "Desktop 2": "djOSk7KG6", "Phone 2": "wSAMy8gmV", "Tablet 2": "udIcyAMZn", Desktop: "pyQuyERBv", Phone: "ZtowqxT7d", Tablet: "aLBxMee9K" };
var Variants = motion2.create(React.Fragment);
var getProps = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "pyQuyERBv" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className2, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "pyQuyERBv", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onAppearlw9xlu = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("djOSk7KG6", true), 2100);
  });
  const onAppear1tehjwg = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("udIcyAMZn", true), 2100);
  });
  const onAppearnc6job = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("wSAMy8gmV", true), 2100);
  });
  useOnVariantChange(baseVariant, { aLBxMee9K: onAppear1tehjwg, default: onAppearlw9xlu, djOSk7KG6: void 0, udIcyAMZn: void 0, wSAMy8gmV: void 0, ZtowqxT7d: onAppearnc6job });
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs2(motion2.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-8b8b1a", className2, classNames), "data-framer-name": "Desktop", "data-highlight": true, layoutDependency, layoutId: "PreLoading__pyQuyERBv", ref: refBinding, style: { ...style }, ...addPropertyOverrides({ aLBxMee9K: { "data-framer-name": "Tablet" }, djOSk7KG6: { "data-framer-name": "Desktop 2", "data-highlight": void 0 }, udIcyAMZn: { "data-framer-name": "Tablet 2", "data-highlight": void 0 }, wSAMy8gmV: { "data-framer-name": "Phone 2", "data-highlight": void 0 }, ZtowqxT7d: { "data-framer-name": "Phone" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx(Transition, { value: transition2, children: /* @__PURE__ */ _jsx(motion2.div, { className: "framer-810g95", "data-framer-name": "Background", layoutDependency, layoutId: "PreLoading__iaW6SrqO3", style: { backgroundColor: "var(--token-4afec5b3-c9ca-4318-8586-8033acd8e73b, rgb(255, 236, 229))", scale: 1 }, variants: { aLBxMee9K: { scale: 1 }, djOSk7KG6: { scale: 0 }, udIcyAMZn: { scale: 0 }, wSAMy8gmV: { scale: 0 }, ZtowqxT7d: { scale: 1 } } }) }), /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(motion2.div, { className: "framer-fsc9i2", "data-framer-name": "Loading", layoutDependency, layoutId: "PreLoading__fmuBaR9zR", transformTemplate: transformTemplate1, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs2(motion2.div, { className: "framer-x4hla", "data-framer-name": "Text", layoutDependency, layoutId: "PreLoading__vctpTT2ZJ", style: { rotate: 0, scale: 1 }, variants: { aLBxMee9K: { rotate: 0, scale: 1 }, djOSk7KG6: { rotate: -15, scale: 0 }, udIcyAMZn: { rotate: -15, scale: 0 }, wSAMy8gmV: { rotate: -15, scale: 0 }, ZtowqxT7d: { rotate: 0, scale: 1 } }, children: [/* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion2.p, { className: "framer-styles-preset-15fb0k4", "data-styles-preset": "Gwy_nKUUa", dir: "auto", children: "L" }) }), className: "framer-1dl4iaz", fonts: ["Inter"], layoutDependency, layoutId: "PreLoading__i1ulxQSUu", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }) }), /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(Image1WithFXWithOptimizedAppearEffect, { __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, animate: animation, background: { alt: "", fit: "fill", intrinsicHeight: 972, intrinsicWidth: 977.3333333333334, loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + ((componentViewport?.height || 800) * 0.5000000000000002 - 100) + 0 + 0 + 64), pixelHeight: 1458, pixelWidth: 1466, sizes: "72px", src: "https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?width=1466&height=1458", srcSet: "https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?scale-down-to=512&width=1466&height=1458 512w,https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?scale-down-to=1024&width=1466&height=1458 1024w,https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?width=1466&height=1458 1466w" }, className: "framer-ijok8", "data-framer-appear-id": "ijok8", initial: animation1, layoutDependency, layoutId: "PreLoading__llDwviRbg", optimized: true, ...addPropertyOverrides({ aLBxMee9K: { background: { alt: "", fit: "fill", intrinsicHeight: 972, intrinsicWidth: 977.3333333333334, loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + ((componentViewport?.height || 800) * 0.5000000000000002 - 100) + 0 + 0 + 80), pixelHeight: 1458, pixelWidth: 1466, sizes: "56px", src: "https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?width=1466&height=1458", srcSet: "https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?scale-down-to=512&width=1466&height=1458 512w,https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?scale-down-to=1024&width=1466&height=1458 1024w,https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?width=1466&height=1458 1466w" } }, udIcyAMZn: { background: { alt: "", fit: "fill", intrinsicHeight: 972, intrinsicWidth: 977.3333333333334, loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + ((componentViewport?.height || 800) * 0.5000000000000002 - 100) + 0 + 0 + 80), pixelHeight: 1458, pixelWidth: 1466, sizes: "56px", src: "https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?width=1466&height=1458", srcSet: "https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?scale-down-to=512&width=1466&height=1458 512w,https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?scale-down-to=1024&width=1466&height=1458 1024w,https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?width=1466&height=1458 1466w" } }, wSAMy8gmV: { background: { alt: "", fit: "fill", intrinsicHeight: 972, intrinsicWidth: 977.3333333333334, loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + ((componentViewport?.height || 800) * 0.5000000000000002 - 100) + 0 + 0 + 80), pixelHeight: 1458, pixelWidth: 1466, sizes: "56px", src: "https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?width=1466&height=1458", srcSet: "https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?scale-down-to=512&width=1466&height=1458 512w,https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?scale-down-to=1024&width=1466&height=1458 1024w,https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?width=1466&height=1458 1466w" } }, ZtowqxT7d: { background: { alt: "", fit: "fill", intrinsicHeight: 972, intrinsicWidth: 977.3333333333334, loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + ((componentViewport?.height || 800) * 0.5000000000000002 - 100) + 0 + 0 + 71.5), pixelHeight: 1458, pixelWidth: 1466, sizes: "45px", src: "https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?width=1466&height=1458", srcSet: "https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?scale-down-to=512&width=1466&height=1458 512w,https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?scale-down-to=1024&width=1466&height=1458 1024w,https://framerusercontent.com/images/99Ojg3DOD4aQcCwNRptg7cHyA.png?width=1466&height=1458 1466w" } } }, baseVariant, gestureVariant) }) }), /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion2.p, { className: "framer-styles-preset-15fb0k4", "data-styles-preset": "Gwy_nKUUa", dir: "auto", children: "ADING " }) }), className: "framer-t8zk5j", fonts: ["Inter"], layoutDependency, layoutId: "PreLoading__IrQ0cxEvU", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }) }), /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx(SmartComponentScopedContainer, { className: "framer-19spi6g-container", isAuthoredByUser: true, isModuleExternal: true, layoutDependency, layoutId: "PreLoading__VcbyvgU8K-container", nodeId: "VcbyvgU8K", rendersWithMotion: true, scopeId: "B8XA8ff9K", children: /* @__PURE__ */ _jsx(AnimatedNumberCounter, { animation: { replay: true, transition: { delay: 0, duration: 2, ease: [1, 0, 0.56, 1], type: "tween" }, trigger: "appear" }, balance: false, color: { angle: 180, color: "var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))", endColor: "rgb(255, 255, 255)", mode: "solid", startColor: "rgb(0, 0, 0)" }, commas: true, decimals: 0, decoration: "none", end: 100, font: { fontFamily: '"Boldonse", sans-serif', fontSize: "52px", fontStyle: "normal", fontWeight: 400, letterSpacing: "0em", lineHeight: "140%" }, height: "100%", id: "VcbyvgU8K", layoutId: "PreLoading__VcbyvgU8K", mode: "default", monospace: false, prefix: "", start: 0, suffix: "%", tag: "p", transition: { bounce: 0, delay: 0, duration: 1, type: "spring" }, userSelect: true, value: 0, width: "100%", ...addPropertyOverrides({ aLBxMee9K: { font: { fontFamily: '"Boldonse", sans-serif', fontSize: "40px", fontStyle: "normal", fontWeight: 400, letterSpacing: "0em", lineHeight: "140%" } }, udIcyAMZn: { font: { fontFamily: '"Boldonse", sans-serif', fontSize: "40px", fontStyle: "normal", fontWeight: 400, letterSpacing: "0em", lineHeight: "140%" } }, wSAMy8gmV: { font: { fontFamily: '"Boldonse", sans-serif', fontSize: "32px", fontStyle: "normal", fontWeight: 400, letterSpacing: "0em", lineHeight: "140%" } }, ZtowqxT7d: { font: { fontFamily: '"Boldonse", sans-serif', fontSize: "32px", fontStyle: "normal", fontWeight: 400, letterSpacing: "0em", lineHeight: "140%" } } }, baseVariant, gestureVariant) }) }) }) })] }) }) }) })] }) }) }) });
});
var css2 = [".framer-IhtTe.framer-li9yrm, .framer-IhtTe .framer-li9yrm { display: block; }", ".framer-IhtTe.framer-8b8b1a { height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }", ".framer-IhtTe .framer-810g95 { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 100%; z-index: 0; }", ".framer-IhtTe .framer-fsc9i2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; }", ".framer-IhtTe .framer-x4hla { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }", ".framer-IhtTe .framer-1dl4iaz, .framer-IhtTe .framer-t8zk5j { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-IhtTe .framer-ijok8 { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 72px; z-index: 1; }", ".framer-IhtTe .framer-19spi6g-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-IhtTe.framer-v-b99dq0.framer-8b8b1a, .framer-IhtTe.framer-v-166n7by.framer-8b8b1a { width: 100%; }", ".framer-IhtTe.framer-v-b99dq0 .framer-ijok8, .framer-IhtTe.framer-v-166n7by .framer-ijok8, .framer-IhtTe.framer-v-h61o0n .framer-ijok8 { width: 56px; }", ".framer-IhtTe.framer-v-b2ouo.framer-8b8b1a, .framer-IhtTe.framer-v-h61o0n.framer-8b8b1a { width: 100%; }", ".framer-IhtTe.framer-v-b2ouo .framer-ijok8 { width: 45px; }", ...css];
var FramerB8XA8ff9K = withCSS(Component, css2, "framer-IhtTe");
var B8XA8ff9K_default = FramerB8XA8ff9K;
FramerB8XA8ff9K.displayName = "Pre-Loading";
FramerB8XA8ff9K.defaultProps = { height: 800, width: 1200 };
addPropertyControls2(FramerB8XA8ff9K, { variant: { options: ["pyQuyERBv", "djOSk7KG6", "aLBxMee9K", "udIcyAMZn", "ZtowqxT7d", "wSAMy8gmV"], optionTitles: ["Desktop", "Desktop 2", "Tablet", "Tablet 2", "Phone", "Phone 2"], title: "Variant", type: ControlType2.Enum } });
addFonts(FramerB8XA8ff9K, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }, { cssFamilyName: "Boldonse", source: "google", style: "normal", uiFamilyName: "Boldonse", url: "https://fonts.gstatic.com/s/boldonse/v1/ZgNQjPxGPbbJUZemjC35hmHmNpCO.woff2", weight: "400" }] }, ...AnimatedNumberCounterFonts, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerB8XA8ff9K", "slots": [], "annotations": { "framerDisplayContentsDiv": "false", "framerContractVersion": "1", "framerIntrinsicWidth": "1200", "framerComponentViewportWidth": "true", "framerAutoSizeImages": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"djOSk7KG6":{"layout":["fixed","fixed"]},"aLBxMee9K":{"layout":["fixed","fixed"]},"udIcyAMZn":{"layout":["fixed","fixed"]},"ZtowqxT7d":{"layout":["fixed","fixed"]},"wSAMy8gmV":{"layout":["fixed","fixed"]}}}', "framerColorSyntax": "true", "framerImmutableVariables": "true", "framerIntrinsicHeight": "800" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  B8XA8ff9K_default as default
};
