var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/duCQynvF8Tsu9wdU2kIW/x7c2UBbwbEIy12dAlLWk/hC1Tne0kH.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";
var cycleOrder = ["NMN44vku5", "naGHMe8TJ"];
var serializationHash = "framer-nznb3";
var variantClassNames = { naGHMe8TJ: "framer-v-r0j1je", NMN44vku5: "framer-v-1072s9o" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { Primary: "naGHMe8TJ", White: "NMN44vku5" };
var Variants = motion.create(React.Fragment);
var getProps = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "NMN44vku5" };
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
  const { style, className, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "NMN44vku5", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-1072s9o", className, classNames), "data-framer-name": "White", layoutDependency, layoutId: "BGChange__NMN44vku5", ref: refBinding, style: { ...style }, ...addPropertyOverrides({ naGHMe8TJ: { "data-framer-name": "Primary" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx(motion.div, { className: "framer-ktg4ly", "data-framer-name": "White", layoutDependency, layoutId: "BGChange__sk_WfU_HN", style: { backgroundColor: "var(--token-4afec5b3-c9ca-4318-8586-8033acd8e73b, rgb(255, 236, 229))" } }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-3wojuu", "data-framer-name": "Primary", layoutDependency, layoutId: "BGChange__nLKXzB9Da", style: { backgroundColor: "var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))", opacity: 0 }, variants: { naGHMe8TJ: { opacity: 1 } } })] }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-nznb3.framer-y9rg95, .framer-nznb3 .framer-y9rg95 { display: block; }", ".framer-nznb3.framer-1072s9o { height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }", ".framer-nznb3 .framer-ktg4ly, .framer-nznb3 .framer-3wojuu { flex: none; height: 100%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 100%; }"];
var FramerhC1Tne0kH = withCSS(Component, css, "framer-nznb3");
var hC1Tne0kH_default = FramerhC1Tne0kH;
FramerhC1Tne0kH.displayName = "BG Change";
FramerhC1Tne0kH.defaultProps = { height: 800, width: 1200 };
addPropertyControls(FramerhC1Tne0kH, { variant: { options: ["NMN44vku5", "naGHMe8TJ"], optionTitles: ["White", "Primary"], title: "Variant", type: ControlType.Enum } });
addFonts(FramerhC1Tne0kH, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerhC1Tne0kH", "slots": [], "annotations": { "framerIntrinsicWidth": "1200", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"naGHMe8TJ":{"layout":["fixed","fixed"]}}}', "framerImmutableVariables": "true", "framerColorSyntax": "true", "framerDisplayContentsDiv": "false", "framerIntrinsicHeight": "800", "framerContractVersion": "1", "framerComponentViewportWidth": "true", "framerAutoSizeImages": "true" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  hC1Tne0kH_default as default
};
