var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/95hdoiobr9z8QUQNHKN2/WZIRA9OpztFCLFy3g5sV/T5OlcMu8z.js
import { jsx as _jsx2, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls2, ComponentViewportProvider, ControlType as ControlType2, cx as cx2, forwardLoader, getFonts, SmartComponentScopedContainer, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React2 from "react";
import { useRef as useRef2 } from "react";

// http-url:https://framerusercontent.com/modules/dkqB7F0q8J0gh4vaQbdL/h72EIy2mDRsC9yS1gze8/m_rhyHqUH.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
var cycleOrder = ["V6RPM6sOr", "STdQxmCk8", "YTBnrDrAm", "i33PgY7__"];
var serializationHash = "framer-LYh54";
var variantClassNames = { i33PgY7__: "framer-v-1099o7k", STdQxmCk8: "framer-v-h5d5gc", V6RPM6sOr: "framer-v-1li1r6p", YTBnrDrAm: "framer-v-r3swa1" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { "Phone Closed": "YTBnrDrAm", "Phone Open": "i33PgY7__", Closed: "STdQxmCk8", Open: "V6RPM6sOr" };
var Variants = motion.create(React.Fragment);
var getProps = ({ answer2, click, fill, height, id, question, textColor, transition, width, ...props }) => {
  return { ...props, C4OcAfU0Y: click ?? props.C4OcAfU0Y, cso373Khi: textColor ?? props.cso373Khi ?? "rgb(255, 255, 255)", I6WQqOURu: transition ?? props.I6WQqOURu ?? { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" }, n9YOVtVav: question ?? props.n9YOVtVav ?? "Does Framer support XYZ?", Nub1NQi8W: fill ?? props.Nub1NQi8W ?? "var(--token-15c58398-6ad6-435c-8016-009834f90629, rgb(238, 203, 58))", tJ_bRU_pm: answer2 ?? props.tJ_bRU_pm ?? "To add a video to your site, click the \u201CInsert\u201D button and navigate to the \u201CMedia\u201D section. Then, drag and drop a video component onto the Canvas.", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "V6RPM6sOr" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className, layoutId, variant, n9YOVtVav, tJ_bRU_pm, I6WQqOURu, C4OcAfU0Y, Nub1NQi8W, cso373Khi, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "V6RPM6sOr", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTapvejmuz = activeVariantCallback(async (...args) => {
    if (C4OcAfU0Y) {
      const res = await C4OcAfU0Y(...args);
      if (res === false)
        return false;
    }
    setVariant("STdQxmCk8");
  });
  const onTapzl1vxb = activeVariantCallback(async (...args) => {
    if (C4OcAfU0Y) {
      const res = await C4OcAfU0Y(...args);
      if (res === false)
        return false;
    }
    setVariant("V6RPM6sOr");
  });
  const onTappl4o8v = activeVariantCallback(async (...args) => {
    if (C4OcAfU0Y) {
      const res = await C4OcAfU0Y(...args);
      if (res === false)
        return false;
    }
    setVariant("i33PgY7__");
  });
  const onTap1oqly0r = activeVariantCallback(async (...args) => {
    if (C4OcAfU0Y) {
      const res = await C4OcAfU0Y(...args);
      if (res === false)
        return false;
    }
    setVariant("YTBnrDrAm");
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (["STdQxmCk8", "YTBnrDrAm"].includes(baseVariant))
      return true;
    return false;
  };
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: I6WQqOURu, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-1li1r6p", className, classNames), "data-framer-name": "Open", layoutDependency, layoutId: "Accordion__V6RPM6sOr", ref: refBinding, style: { backgroundColor: Nub1NQi8W, borderBottomLeftRadius: 16, borderBottomRightRadius: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16, ...style }, variants: { YTBnrDrAm: { borderBottomLeftRadius: 171, borderBottomRightRadius: 171, borderTopLeftRadius: 171, borderTopRightRadius: 171 } }, ...addPropertyOverrides({ i33PgY7__: { "data-framer-name": "Phone Open" }, STdQxmCk8: { "data-framer-name": "Closed" }, YTBnrDrAm: { "data-framer-name": "Phone Closed" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsxs(motion.div, { className: "framer-mrc1jm", "data-framer-name": "Top", "data-highlight": true, layoutDependency, layoutId: "Accordion__VJMZmPmVH", onTap: onTapvejmuz, ...addPropertyOverrides({ i33PgY7__: { onTap: onTap1oqly0r }, STdQxmCk8: { onTap: onTapzl1vxb }, YTBnrDrAm: { onTap: onTappl4o8v } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsxs(motion.div, { className: "framer-1e727fk", layoutDependency, layoutId: "Accordion__gPEKHaYBG", children: [/* @__PURE__ */ _jsx(motion.div, { className: "framer-1yg1093", layoutDependency, layoutId: "Accordion__YxAbyaNkT", style: { backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1 } }), isDisplayed() && /* @__PURE__ */ _jsx(motion.div, { className: "framer-1578qf1", layoutDependency, layoutId: "Accordion__PVnre2B0o", style: { backgroundColor: "var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(5, 5, 5))", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 }, variants: { STdQxmCk8: { backgroundColor: "rgb(255, 255, 255)" }, YTBnrDrAm: { backgroundColor: "rgb(255, 255, 255)" } } })] }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { dir: "auto", style: { "--font-selector": "Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgTWVkaXVt", "--framer-font-family": '"Rodger Test Medium", "Rodger Test Medium Placeholder", sans-serif', "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on", "--framer-font-size": "22px", "--framer-font-weight": "500", "--framer-letter-spacing": "-0.01em", "--framer-line-height": "1em", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-cso373Khi-m_rhyHqUH))" }, children: "Does Framer support XYZ?" }) }), className: "framer-1jpmsdj", fonts: ["CUSTOMV2;Rodger Test Medium"], layoutDependency, layoutId: "Accordion__QIZCIPgCn", style: { "--extracted-r6o4lv": "var(--variable-reference-cso373Khi-m_rhyHqUH)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-cso373Khi-m_rhyHqUH": cso373Khi }, text: n9YOVtVav, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ i33PgY7__: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { dir: "auto", style: { "--font-selector": "Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgTWVkaXVt", "--framer-font-family": '"Rodger Test Medium", "Rodger Test Medium Placeholder", sans-serif', "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on", "--framer-font-weight": "500", "--framer-letter-spacing": "-0.01em", "--framer-line-height": "1em", "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-cso373Khi-m_rhyHqUH))" }, children: "Does Framer support XYZ?" }) }) }, YTBnrDrAm: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { dir: "auto", style: { "--font-selector": "Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgTWVkaXVt", "--framer-font-family": '"Rodger Test Medium", "Rodger Test Medium Placeholder", sans-serif', "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on", "--framer-font-weight": "500", "--framer-letter-spacing": "-0.01em", "--framer-line-height": "1em", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-cso373Khi-m_rhyHqUH))" }, children: "Does Framer support XYZ?" }) }) } }, baseVariant, gestureVariant) })] }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-py16h9", "data-framer-name": "Answer", layoutDependency, layoutId: "Accordion__R5fby1kIP", style: { opacity: 1 }, variants: { i33PgY7__: { opacity: 1 }, STdQxmCk8: { opacity: 0 }, YTBnrDrAm: { opacity: 0 } }, children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { dir: "auto", style: { "--font-selector": "Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgTWVkaXVt", "--framer-font-family": '"Rodger Test Medium", "Rodger Test Medium Placeholder", sans-serif', "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on", "--framer-font-weight": "500", "--framer-letter-spacing": "-0.01em", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-cso373Khi-m_rhyHqUH))" }, children: "To add a video to your site, click the \u201CInsert\u201D button and navigate to the \u201CMedia\u201D section. Then, drag and drop a video component onto the Canvas." }) }), className: "framer-16aw21r", fonts: ["CUSTOMV2;Rodger Test Medium"], layoutDependency, layoutId: "Accordion__S_TRgjlIU", style: { "--extracted-r6o4lv": "var(--variable-reference-cso373Khi-m_rhyHqUH)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-cso373Khi-m_rhyHqUH": cso373Khi }, text: tJ_bRU_pm, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ i33PgY7__: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { dir: "auto", style: { "--font-selector": "Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgTWVkaXVt", "--framer-font-family": '"Rodger Test Medium", "Rodger Test Medium Placeholder", sans-serif', "--framer-font-open-type-features": "'cv01' on, 'cv09' on, 'cv11' on, 'cv05' on, 'ss03' on", "--framer-font-size": "14px", "--framer-font-weight": "500", "--framer-letter-spacing": "-0.01em", "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-cso373Khi-m_rhyHqUH))" }, children: "To add a video to your site, click the \u201CInsert\u201D button and navigate to the \u201CMedia\u201D section. Then, drag and drop a video component onto the Canvas." }) }) } }, baseVariant, gestureVariant) }) })] }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-LYh54.framer-wfyleo, .framer-LYh54 .framer-wfyleo { display: block; }", ".framer-LYh54.framer-1li1r6p { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px 10px 20px 10px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }", ".framer-LYh54 .framer-mrc1jm { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 10px 0px 10px 0px; position: relative; width: 100%; }", ".framer-LYh54 .framer-1e727fk { flex: none; height: 40px; overflow: visible; position: relative; width: 40px; }", ".framer-LYh54 .framer-1yg1093 { flex: none; height: 2px; left: calc(50.00000000000002% - 14px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 2px / 2); width: 14px; }", ".framer-LYh54 .framer-1578qf1 { flex: none; height: 14px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 14px / 2); width: 2px; }", ".framer-LYh54 .framer-1jpmsdj { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ".framer-LYh54 .framer-py16h9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 20px 10px 40px; position: relative; width: 100%; }", ".framer-LYh54 .framer-16aw21r { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-LYh54.framer-v-h5d5gc.framer-1li1r6p { height: auto; padding: 0px; }", ".framer-LYh54.framer-v-h5d5gc .framer-mrc1jm, .framer-LYh54.framer-v-r3swa1 .framer-mrc1jm { padding: 10px 0px 10px 0px; }", ".framer-LYh54.framer-v-r3swa1.framer-1li1r6p { height: auto; padding: 0px; width: 100%; }", ".framer-LYh54.framer-v-r3swa1 .framer-1yg1093, .framer-LYh54.framer-v-1099o7k .framer-1yg1093 { left: calc(50.00000000000002% - 12px / 2); width: 12px; }", ".framer-LYh54.framer-v-r3swa1 .framer-1578qf1 { height: 12px; top: calc(50.00000000000002% - 12px / 2); }", ".framer-LYh54.framer-v-r3swa1 .framer-1jpmsdj { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }"];
var Framerm_rhyHqUH = withCSS(Component, css, "framer-LYh54");
var m_rhyHqUH_default = Framerm_rhyHqUH;
Framerm_rhyHqUH.displayName = "Question";
Framerm_rhyHqUH.defaultProps = { height: 167, width: 400 };
addPropertyControls(Framerm_rhyHqUH, { variant: { options: ["V6RPM6sOr", "STdQxmCk8", "YTBnrDrAm", "i33PgY7__"], optionTitles: ["Open", "Closed", "Phone Closed", "Phone Open"], title: "Variant", type: ControlType.Enum }, n9YOVtVav: { defaultValue: "Does Framer support XYZ?", displayTextArea: false, title: "Question", type: ControlType.String }, onn9YOVtVavChange: { changes: "n9YOVtVav", type: ControlType.ChangeHandler }, tJ_bRU_pm: { defaultValue: "To add a video to your site, click the \u201CInsert\u201D button and navigate to the \u201CMedia\u201D section. Then, drag and drop a video component onto the Canvas.", displayTextArea: true, title: "Answer 2", type: ControlType.String }, ontJ_bRU_pmChange: { changes: "tJ_bRU_pm", type: ControlType.ChangeHandler }, I6WQqOURu: { defaultValue: { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" }, title: "Transition", type: ControlType.Transition }, C4OcAfU0Y: { title: "Click", type: ControlType.EventHandler }, Nub1NQi8W: { defaultValue: "var(--token-15c58398-6ad6-435c-8016-009834f90629, rgb(238, 203, 58))", title: "Fill", type: ControlType.Color }, cso373Khi: { defaultValue: "rgb(255, 255, 255)", title: "text color", type: ControlType.Color } });
addFonts(Framerm_rhyHqUH, [{ explicitInter: true, fonts: [{ cssFamilyName: "Rodger Test Medium", source: "custom", style: "normal", uiFamilyName: "Rodger Test", url: "https://framerusercontent.com/assets/VYqVfZiXh1pMTaGoOh0lQEOWiQ.woff2", weight: "500" }] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/95hdoiobr9z8QUQNHKN2/WZIRA9OpztFCLFy3g5sV/T5OlcMu8z.js
var QuestionFonts = getFonts(m_rhyHqUH_default);
var cycleOrder2 = ["gBbLfhc6W", "bNourtPyj", "QCrSqa6Em", "R4KvzMT7E", "XLjUbafbh", "ZFeh7I2zq", "FkZuTHYh8", "YR2cty7YO", "sDcC1bPJj", "T3EbiIKgZ"];
var serializationHash2 = "framer-25Sev";
var variantClassNames2 = { bNourtPyj: "framer-v-ml8tha", FkZuTHYh8: "framer-v-t6mhi", gBbLfhc6W: "framer-v-1f7bk7", QCrSqa6Em: "framer-v-ji4dj0", R4KvzMT7E: "framer-v-1em63dy", sDcC1bPJj: "framer-v-ejldmm", T3EbiIKgZ: "framer-v-18k81ks", XLjUbafbh: "framer-v-17o6jgq", YR2cty7YO: "framer-v-14y0kux", ZFeh7I2zq: "framer-v-1aa63hy" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var Transition2 = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children });
};
var humanReadableVariantMap2 = { "Phone 1": "ZFeh7I2zq", "Phone 2": "FkZuTHYh8", "Phone 3": "YR2cty7YO", "Phone 4": "sDcC1bPJj", "Phone 5": "T3EbiIKgZ", "Variant 1": "gBbLfhc6W", "Variant 2": "bNourtPyj", "Variant 3": "QCrSqa6Em", "Variant 4": "R4KvzMT7E", "Variant 5": "XLjUbafbh" };
var Variants2 = motion2.create(React2.Fragment);
var useStateVariable = (externalState, setExternalState) => {
  const [internalState, setInternalState] = React2.useState(externalState);
  const [previousExternalState, setPreviousExternalState] = React2.useState(externalState);
  if (setExternalState) {
    return [externalState, setExternalState];
  }
  if (externalState !== previousExternalState) {
    setInternalState(externalState);
    setPreviousExternalState(externalState);
  }
  return [internalState, setInternalState];
};
var getProps2 = ({ answer1, answer2, answer3, answer4, fill, height, id, question1, question2, question3, question4, textColor, transition, width, ...props }) => {
  return { ...props, f6MCfUa9_: answer3 ?? props.f6MCfUa9_ ?? "To add a video to your site, click the \u201CInsert\u201D button and navigate to the \u201CMedia\u201D section. Then, drag and drop a video component onto the Canvas.", HfER0Vust: question3 ?? props.HfER0Vust ?? "How do I add videos?", hx0b_8Yll: question2 ?? props.hx0b_8Yll ?? "How do I add images?", KNyidrEfR: question4 ?? props.KNyidrEfR ?? "Does Framer support XYZ?", kr50LjJ8n: transition ?? props.kr50LjJ8n ?? { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" }, lvMeUTpra: answer1 ?? props.lvMeUTpra ?? "To draw a Frame, click on Layout in the Toolbar, then select Frame. Now, you can click and drag anywhere on the Canvas.", N1DFKMWNl: question1 ?? props.N1DFKMWNl ?? "How do I draw Frames?", nNR17NJf8: answer2 ?? props.nNR17NJf8 ?? "To add an image, select any Frame, and either double-click on it, or go to the Fill property. In the Fill property, switch to the image icon. Here, you can upload images.", tZnUuoAfh: fill ?? props.tZnUuoAfh ?? "var(--token-15c58398-6ad6-435c-8016-009834f90629, rgb(238, 203, 58))", variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "gBbLfhc6W", XW8Bkcysp: textColor ?? props.XW8Bkcysp ?? "rgb(255, 255, 255)", YKPDhsvnt: answer4 ?? props.YKPDhsvnt ?? "To add a video to your site, click the \u201CInsert\u201D button and navigate to the \u201CMedia\u201D section. Then, drag and drop a video component onto the Canvas." };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className, layoutId, variant, "N1DFKMWNl": externalN1DFKMWNl, "onN1DFKMWNlChange": setExternalN1DFKMWNl, "lvMeUTpra": externallvMeUTpra, "onlvMeUTpraChange": setExternallvMeUTpra, kr50LjJ8n, "hx0b_8Yll": externalhx0b_8Yll, "onhx0b_8YllChange": setExternalhx0b_8Yll, "nNR17NJf8": externalnNR17NJf8, "onnNR17NJf8Change": setExternalnNR17NJf8, "HfER0Vust": externalHfER0Vust, "onHfER0VustChange": setExternalHfER0Vust, "f6MCfUa9_": externalf6MCfUa9_, "onf6MCfUa9_Change": setExternalf6MCfUa9_, "KNyidrEfR": externalKNyidrEfR, "onKNyidrEfRChange": setExternalKNyidrEfR, "YKPDhsvnt": externalYKPDhsvnt, "onYKPDhsvntChange": setExternalYKPDhsvnt, tZnUuoAfh, XW8Bkcysp, ...restProps } = getProps2(props);
  const [N1DFKMWNl, setN1DFKMWNl] = useStateVariable(externalN1DFKMWNl, setExternalN1DFKMWNl);
  const [lvMeUTpra, setlvMeUTpra] = useStateVariable(externallvMeUTpra, setExternallvMeUTpra);
  const [hx0b_8Yll, sethx0b_8Yll] = useStateVariable(externalhx0b_8Yll, setExternalhx0b_8Yll);
  const [nNR17NJf8, setnNR17NJf8] = useStateVariable(externalnNR17NJf8, setExternalnNR17NJf8);
  const [HfER0Vust, setHfER0Vust] = useStateVariable(externalHfER0Vust, setExternalHfER0Vust);
  const [f6MCfUa9_, setf6MCfUa9_] = useStateVariable(externalf6MCfUa9_, setExternalf6MCfUa9_);
  const [KNyidrEfR, setKNyidrEfR] = useStateVariable(externalKNyidrEfR, setExternalKNyidrEfR);
  const [YKPDhsvnt, setYKPDhsvnt] = useStateVariable(externalYKPDhsvnt, setExternalYKPDhsvnt);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder: cycleOrder2, defaultVariant: "gBbLfhc6W", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback2(baseVariant);
  const C4OcAfU0Y18ujuna = activeVariantCallback(async (...args) => {
    setVariant("bNourtPyj");
  });
  const C4OcAfU0Y1bvzo11 = activeVariantCallback(async (...args) => {
    setVariant("gBbLfhc6W");
  });
  const C4OcAfU0Y16iteef = activeVariantCallback(async (...args) => {
    setVariant("FkZuTHYh8");
  });
  const C4OcAfU0Y1pm1135 = activeVariantCallback(async (...args) => {
    setVariant("ZFeh7I2zq");
  });
  const C4OcAfU0Y1qsi468 = activeVariantCallback(async (...args) => {
    setVariant("QCrSqa6Em");
  });
  const C4OcAfU0Ym9bf4i = activeVariantCallback(async (...args) => {
    setVariant("YR2cty7YO");
  });
  const C4OcAfU0Yq6h5nl = activeVariantCallback(async (...args) => {
    setVariant("R4KvzMT7E");
  });
  const C4OcAfU0Yruc7uy = activeVariantCallback(async (...args) => {
    setVariant("sDcC1bPJj");
  });
  const C4OcAfU0Y1qyh7r0 = activeVariantCallback(async (...args) => {
    setVariant("XLjUbafbh");
  });
  const C4OcAfU0Ybsznz0 = activeVariantCallback(async (...args) => {
    setVariant("T3EbiIKgZ");
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx2(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition2, { value: kr50LjJ8n, children: /* @__PURE__ */ _jsxs2(motion2.div, { ...restProps, ...gestureHandlers, className: cx2(scopingClassNames, "framer-1f7bk7", className, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "Accordion__gBbLfhc6W", ref: refBinding, style: { ...style }, ...addPropertyOverrides2({ bNourtPyj: { "data-framer-name": "Variant 2" }, FkZuTHYh8: { "data-framer-name": "Phone 2" }, QCrSqa6Em: { "data-framer-name": "Variant 3" }, R4KvzMT7E: { "data-framer-name": "Variant 4" }, sDcC1bPJj: { "data-framer-name": "Phone 4" }, T3EbiIKgZ: { "data-framer-name": "Phone 5" }, XLjUbafbh: { "data-framer-name": "Variant 5" }, YR2cty7YO: { "data-framer-name": "Phone 3" }, ZFeh7I2zq: { "data-framer-name": "Phone 1" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx2(ComponentViewportProvider, { height: 167, width: componentViewport?.width || "100vw", y: (componentViewport?.y || 0) + 0 + 0, children: /* @__PURE__ */ _jsx2(SmartComponentScopedContainer, { className: "framer-mb4t29-container", layoutDependency, layoutId: "Accordion__Si7BEEslO-container", nodeId: "Si7BEEslO", rendersWithMotion: true, scopeId: "T5OlcMu8z", children: /* @__PURE__ */ _jsx2(m_rhyHqUH_default, { C4OcAfU0Y: C4OcAfU0Y18ujuna, cso373Khi: XW8Bkcysp, height: "100%", I6WQqOURu: kr50LjJ8n, id: "Si7BEEslO", layoutId: "Accordion__Si7BEEslO", n9YOVtVav: N1DFKMWNl, Nub1NQi8W: tZnUuoAfh, onn9YOVtVavChange: setN1DFKMWNl, ontJ_bRU_pmChange: setlvMeUTpra, style: { width: "100%" }, tJ_bRU_pm: lvMeUTpra, variant: matchVariant("STdQxmCk8"), width: "100%", ...addPropertyOverrides2({ bNourtPyj: { C4OcAfU0Y: C4OcAfU0Y1bvzo11, variant: matchVariant("V6RPM6sOr") }, FkZuTHYh8: { C4OcAfU0Y: C4OcAfU0Y1pm1135, variant: matchVariant("i33PgY7__") }, QCrSqa6Em: { C4OcAfU0Y: C4OcAfU0Y1bvzo11 }, R4KvzMT7E: { C4OcAfU0Y: C4OcAfU0Y1bvzo11 }, sDcC1bPJj: { C4OcAfU0Y: C4OcAfU0Y16iteef, variant: matchVariant("YTBnrDrAm") }, T3EbiIKgZ: { C4OcAfU0Y: C4OcAfU0Y16iteef, variant: matchVariant("YTBnrDrAm") }, YR2cty7YO: { C4OcAfU0Y: C4OcAfU0Y16iteef, variant: matchVariant("YTBnrDrAm") }, ZFeh7I2zq: { C4OcAfU0Y: C4OcAfU0Y16iteef, variant: matchVariant("YTBnrDrAm") } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsx2(ComponentViewportProvider, { height: 167, width: componentViewport?.width || "100vw", y: (componentViewport?.y || 0) + 0 + 172, children: /* @__PURE__ */ _jsx2(SmartComponentScopedContainer, { className: "framer-vo8m9r-container", layoutDependency, layoutId: "Accordion__JMS8mEM2q-container", nodeId: "JMS8mEM2q", rendersWithMotion: true, scopeId: "T5OlcMu8z", children: /* @__PURE__ */ _jsx2(m_rhyHqUH_default, { C4OcAfU0Y: C4OcAfU0Y1qsi468, cso373Khi: XW8Bkcysp, height: "100%", I6WQqOURu: kr50LjJ8n, id: "JMS8mEM2q", layoutId: "Accordion__JMS8mEM2q", n9YOVtVav: hx0b_8Yll, Nub1NQi8W: tZnUuoAfh, onn9YOVtVavChange: sethx0b_8Yll, ontJ_bRU_pmChange: setnNR17NJf8, style: { width: "100%" }, tJ_bRU_pm: nNR17NJf8, variant: matchVariant("STdQxmCk8"), width: "100%", ...addPropertyOverrides2({ FkZuTHYh8: { C4OcAfU0Y: C4OcAfU0Ym9bf4i, variant: matchVariant("YTBnrDrAm") }, QCrSqa6Em: { C4OcAfU0Y: C4OcAfU0Y1bvzo11, variant: matchVariant("V6RPM6sOr") }, sDcC1bPJj: { C4OcAfU0Y: C4OcAfU0Ym9bf4i, variant: matchVariant("YTBnrDrAm") }, T3EbiIKgZ: { C4OcAfU0Y: C4OcAfU0Ym9bf4i, variant: matchVariant("YTBnrDrAm") }, YR2cty7YO: { C4OcAfU0Y: C4OcAfU0Y1pm1135, variant: matchVariant("i33PgY7__") }, ZFeh7I2zq: { C4OcAfU0Y: C4OcAfU0Ym9bf4i, variant: matchVariant("YTBnrDrAm") } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsx2(ComponentViewportProvider, { height: 167, width: componentViewport?.width || "100vw", y: (componentViewport?.y || 0) + 0 + 344, children: /* @__PURE__ */ _jsx2(SmartComponentScopedContainer, { className: "framer-8ha8ey-container", layoutDependency, layoutId: "Accordion__n9EXKps60-container", nodeId: "n9EXKps60", rendersWithMotion: true, scopeId: "T5OlcMu8z", children: /* @__PURE__ */ _jsx2(m_rhyHqUH_default, { C4OcAfU0Y: C4OcAfU0Yq6h5nl, cso373Khi: XW8Bkcysp, height: "100%", I6WQqOURu: kr50LjJ8n, id: "n9EXKps60", layoutId: "Accordion__n9EXKps60", n9YOVtVav: HfER0Vust, Nub1NQi8W: tZnUuoAfh, onn9YOVtVavChange: setHfER0Vust, ontJ_bRU_pmChange: setf6MCfUa9_, style: { width: "100%" }, tJ_bRU_pm: f6MCfUa9_, variant: matchVariant("STdQxmCk8"), width: "100%", ...addPropertyOverrides2({ FkZuTHYh8: { C4OcAfU0Y: C4OcAfU0Yruc7uy, variant: matchVariant("YTBnrDrAm") }, R4KvzMT7E: { C4OcAfU0Y: C4OcAfU0Y1bvzo11, variant: matchVariant("V6RPM6sOr") }, sDcC1bPJj: { C4OcAfU0Y: C4OcAfU0Y1pm1135, variant: matchVariant("i33PgY7__") }, T3EbiIKgZ: { C4OcAfU0Y: C4OcAfU0Yruc7uy, variant: matchVariant("YTBnrDrAm") }, YR2cty7YO: { C4OcAfU0Y: C4OcAfU0Yruc7uy, variant: matchVariant("YTBnrDrAm") }, ZFeh7I2zq: { C4OcAfU0Y: C4OcAfU0Yruc7uy, variant: matchVariant("YTBnrDrAm") } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsx2(ComponentViewportProvider, { height: 167, width: componentViewport?.width || "100vw", y: (componentViewport?.y || 0) + 0 + 516, children: /* @__PURE__ */ _jsx2(SmartComponentScopedContainer, { className: "framer-12yo818-container", layoutDependency, layoutId: "Accordion__V4fjzBaDg-container", nodeId: "V4fjzBaDg", rendersWithMotion: true, scopeId: "T5OlcMu8z", children: /* @__PURE__ */ _jsx2(m_rhyHqUH_default, { C4OcAfU0Y: C4OcAfU0Y1qyh7r0, cso373Khi: XW8Bkcysp, height: "100%", I6WQqOURu: kr50LjJ8n, id: "V4fjzBaDg", layoutId: "Accordion__V4fjzBaDg", n9YOVtVav: KNyidrEfR, Nub1NQi8W: tZnUuoAfh, onn9YOVtVavChange: setKNyidrEfR, ontJ_bRU_pmChange: setYKPDhsvnt, style: { width: "100%" }, tJ_bRU_pm: YKPDhsvnt, variant: matchVariant("STdQxmCk8"), width: "100%", ...addPropertyOverrides2({ FkZuTHYh8: { C4OcAfU0Y: C4OcAfU0Ybsznz0, variant: matchVariant("YTBnrDrAm") }, sDcC1bPJj: { C4OcAfU0Y: C4OcAfU0Ybsznz0, variant: matchVariant("YTBnrDrAm") }, T3EbiIKgZ: { C4OcAfU0Y: C4OcAfU0Y1pm1135, variant: matchVariant("i33PgY7__") }, XLjUbafbh: { C4OcAfU0Y: C4OcAfU0Y1bvzo11, variant: matchVariant("V6RPM6sOr") }, YR2cty7YO: { C4OcAfU0Y: C4OcAfU0Ybsznz0, variant: matchVariant("YTBnrDrAm") }, ZFeh7I2zq: { C4OcAfU0Y: C4OcAfU0Ybsznz0, variant: matchVariant("YTBnrDrAm") } }, baseVariant, gestureVariant) }) }) })] }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-25Sev.framer-1p0ujqv, .framer-25Sev .framer-1p0ujqv { display: block; }", ".framer-25Sev.framer-1f7bk7 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-25Sev .framer-mb4t29-container, .framer-25Sev .framer-vo8m9r-container, .framer-25Sev .framer-8ha8ey-container, .framer-25Sev .framer-12yo818-container { flex: none; height: auto; position: relative; width: 100%; }"];
var FramerT5OlcMu8z = withCSS2(Component2, css2, "framer-25Sev");
var T5OlcMu8z_default = FramerT5OlcMu8z;
FramerT5OlcMu8z.displayName = "Accordion";
FramerT5OlcMu8z.defaultProps = { height: 251, width: 340 };
addPropertyControls2(FramerT5OlcMu8z, { variant: { options: ["gBbLfhc6W", "bNourtPyj", "QCrSqa6Em", "R4KvzMT7E", "XLjUbafbh", "ZFeh7I2zq", "FkZuTHYh8", "YR2cty7YO", "sDcC1bPJj", "T3EbiIKgZ"], optionTitles: ["Variant 1", "Variant 2", "Variant 3", "Variant 4", "Variant 5", "Phone 1", "Phone 2", "Phone 3", "Phone 4", "Phone 5"], title: "Variant", type: ControlType2.Enum }, N1DFKMWNl: { defaultValue: "How do I draw Frames?", displayTextArea: false, title: "Question 1", type: ControlType2.String }, onN1DFKMWNlChange: { changes: "N1DFKMWNl", type: ControlType2.ChangeHandler }, lvMeUTpra: { defaultValue: "To draw a Frame, click on Layout in the Toolbar, then select Frame. Now, you can click and drag anywhere on the Canvas.", displayTextArea: true, title: "Answer 1", type: ControlType2.String }, onlvMeUTpraChange: { changes: "lvMeUTpra", type: ControlType2.ChangeHandler }, kr50LjJ8n: { defaultValue: { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" }, title: "Transition", type: ControlType2.Transition }, hx0b_8Yll: { defaultValue: "How do I add images?", displayTextArea: false, title: "Question 2", type: ControlType2.String }, onhx0b_8YllChange: { changes: "hx0b_8Yll", type: ControlType2.ChangeHandler }, nNR17NJf8: { defaultValue: "To add an image, select any Frame, and either double-click on it, or go to the Fill property. In the Fill property, switch to the image icon. Here, you can upload images.", displayTextArea: true, title: "Answer 2", type: ControlType2.String }, onnNR17NJf8Change: { changes: "nNR17NJf8", type: ControlType2.ChangeHandler }, HfER0Vust: { defaultValue: "How do I add videos?", displayTextArea: false, title: "Question 3", type: ControlType2.String }, onHfER0VustChange: { changes: "HfER0Vust", type: ControlType2.ChangeHandler }, f6MCfUa9_: { defaultValue: "To add a video to your site, click the \u201CInsert\u201D button and navigate to the \u201CMedia\u201D section. Then, drag and drop a video component onto the Canvas.", displayTextArea: true, title: "Answer 3", type: ControlType2.String }, onf6MCfUa9_Change: { changes: "f6MCfUa9_", type: ControlType2.ChangeHandler }, KNyidrEfR: { defaultValue: "Does Framer support XYZ?", displayTextArea: false, title: "Question 4", type: ControlType2.String }, onKNyidrEfRChange: { changes: "KNyidrEfR", type: ControlType2.ChangeHandler }, YKPDhsvnt: { defaultValue: "To add a video to your site, click the \u201CInsert\u201D button and navigate to the \u201CMedia\u201D section. Then, drag and drop a video component onto the Canvas.", displayTextArea: true, title: "Answer 4", type: ControlType2.String }, onYKPDhsvntChange: { changes: "YKPDhsvnt", type: ControlType2.ChangeHandler }, tZnUuoAfh: { defaultValue: "var(--token-15c58398-6ad6-435c-8016-009834f90629, rgb(238, 203, 58))", title: "Fill", type: ControlType2.Color }, XW8Bkcysp: { defaultValue: "rgb(255, 255, 255)", title: "Text Color", type: ControlType2.Color } });
addFonts2(FramerT5OlcMu8z, [{ explicitInter: true, fonts: [] }, ...QuestionFonts], { supportsExplicitInterCodegen: true });
FramerT5OlcMu8z.loader = { load: (props, context) => {
  const locale = context.locale;
  return Promise.allSettled([forwardLoader(m_rhyHqUH_default, {}, context)]);
} };
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "FramerT5OlcMu8z", "slots": [], "annotations": { "framerIntrinsicWidth": "340", "framerAutoSizeImages": "true", "framerIntrinsicHeight": "251", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"bNourtPyj":{"layout":["fixed","auto"]},"QCrSqa6Em":{"layout":["fixed","auto"]},"R4KvzMT7E":{"layout":["fixed","auto"]},"XLjUbafbh":{"layout":["fixed","auto"]},"ZFeh7I2zq":{"layout":["fixed","auto"]},"FkZuTHYh8":{"layout":["fixed","auto"]},"YR2cty7YO":{"layout":["fixed","auto"]},"sDcC1bPJj":{"layout":["fixed","auto"]},"T3EbiIKgZ":{"layout":["fixed","auto"]}}}', "framerDisplayContentsDiv": "false", "framerImmutableVariables": "true", "framerContractVersion": "1", "framerComponentViewportWidth": "true", "framerVariables": '{"N1DFKMWNl":"question1","lvMeUTpra":"answer1","kr50LjJ8n":"transition","hx0b_8Yll":"question2","nNR17NJf8":"answer2","HfER0Vust":"question3","f6MCfUa9_":"answer3","KNyidrEfR":"question4","YKPDhsvnt":"answer4","tZnUuoAfh":"fill","XW8Bkcysp":"textColor"}', "framerColorSyntax": "true" } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  T5OlcMu8z_default as default
};
