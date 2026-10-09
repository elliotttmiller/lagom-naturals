var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/dSivcozjt7ypfZXgouSu/mdeaeYnKS1CKmOdDSPsh/AB3wujrBb.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useOnVariantChange, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/1ZvVG89Nsyva04bSAHTP/Iuo8jDYRWAFlPlTGmqDm/nqYznXGVD.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["GF;Boldonse-regular"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Boldonse", openType: true, source: "google", style: "normal", uiFamilyName: "Boldonse", url: "https://fonts.gstatic.com/s/boldonse/v1/ZgNQjPxGPbbJUZemjC35hmHmNpCO.woff2", weight: "400" }] }];
var css = [`.framer-G0EfI .framer-styles-preset-gadxkx:not(.rich-text-wrapper), .framer-G0EfI .framer-styles-preset-gadxkx.rich-text-wrapper h1 { --framer-font-family: "Boldonse", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 80px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, #db5783); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-G0EfI .framer-styles-preset-gadxkx:not(.rich-text-wrapper), .framer-G0EfI .framer-styles-preset-gadxkx.rich-text-wrapper h1 { --framer-font-family: "Boldonse", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 60px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, #db5783); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-G0EfI .framer-styles-preset-gadxkx:not(.rich-text-wrapper), .framer-G0EfI .framer-styles-preset-gadxkx.rich-text-wrapper h1 { --framer-font-family: "Boldonse", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 140%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, #db5783); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`];
var className = "framer-G0EfI";

// http-url:https://framerusercontent.com/modules/dSivcozjt7ypfZXgouSu/mdeaeYnKS1CKmOdDSPsh/AB3wujrBb.js
var cycleOrder = ["gTz9r7EH7", "vAaswUOa7", "R9zAwefnt", "nZJ4FiG06"];
var serializationHash = "framer-5vCaE";
var variantClassNames = { gTz9r7EH7: "framer-v-vfob88", nZJ4FiG06: "framer-v-e9waz0", R9zAwefnt: "framer-v-dd3ioh", vAaswUOa7: "framer-v-gwrmmo" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { duration: 0, type: "tween" };
var transition2 = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: "tween" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var humanReadableVariantMap = { "Step 1": "gTz9r7EH7", "Step 2": "vAaswUOa7", "Step 3": "R9zAwefnt", "Step 4": "nZJ4FiG06" };
var Variants = motion.create(React.Fragment);
var getProps = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "gTz9r7EH7" };
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
  const { style, className: className2, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "gTz9r7EH7", ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onAppear1kpaxfl = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("vAaswUOa7", true), 1e3);
  });
  const onAppearll9vux = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("R9zAwefnt", true), 1500);
  });
  const onAppear1kp5ta8 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("nZJ4FiG06", true), 1500);
  });
  const onAppear17oihj3 = activeVariantCallback(async (...args) => {
    await delay(() => setVariant("gTz9r7EH7", true), 500);
  });
  useOnVariantChange(baseVariant, { default: onAppear1kpaxfl, nZJ4FiG06: onAppear17oihj3, R9zAwefnt: onAppear1kp5ta8, vAaswUOa7: onAppearll9vux });
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, ...addPropertyOverrides({ nZJ4FiG06: { value: transition2 }, R9zAwefnt: { value: transition2 }, vAaswUOa7: { value: transition2 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsxs(motion.div, { ...restProps, ...gestureHandlers, className: cx(scopingClassNames, "framer-vfob88", className2, classNames), "data-framer-name": "Step 1", "data-highlight": true, layoutDependency, layoutId: "ScrollText__gTz9r7EH7", ref: refBinding, style: { ...style }, ...addPropertyOverrides({ nZJ4FiG06: { "data-framer-name": "Step 4" }, R9zAwefnt: { "data-framer-name": "Step 3" }, vAaswUOa7: { "data-framer-name": "Step 2" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx(Transition, { value: transition1, ...addPropertyOverrides({ nZJ4FiG06: { value: transition2 }, R9zAwefnt: { value: transition2 }, vAaswUOa7: { value: transition2 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.h2, { className: "framer-styles-preset-gadxkx", "data-styles-preset": "nqYznXGVD", dir: "auto", children: "bite" }) }), className: "framer-7peiyd", fonts: ["Inter"], layoutDependency, layoutId: "ScrollText__hhtjEdooI", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }) }), /* @__PURE__ */ _jsx(Transition, { value: transition1, ...addPropertyOverrides({ nZJ4FiG06: { value: transition2 }, R9zAwefnt: { value: transition2 }, vAaswUOa7: { value: transition2 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.h2, { className: "framer-styles-preset-gadxkx", "data-styles-preset": "nqYznXGVD", dir: "auto", children: "melt" }) }), className: "framer-22f2fj", fonts: ["Inter"], layoutDependency, layoutId: "ScrollText__jW7yirI9h", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }) }), /* @__PURE__ */ _jsx(Transition, { value: transition1, ...addPropertyOverrides({ nZJ4FiG06: { value: transition2 }, R9zAwefnt: { value: transition2 }, vAaswUOa7: { value: transition2 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.h2, { className: "framer-styles-preset-gadxkx", "data-styles-preset": "nqYznXGVD", dir: "auto", children: "yum" }) }), className: "framer-1jniexb", fonts: ["Inter"], layoutDependency, layoutId: "ScrollText__rcXwNTgfH", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }) }), /* @__PURE__ */ _jsx(Transition, { value: transition1, ...addPropertyOverrides({ nZJ4FiG06: { value: transition2 }, R9zAwefnt: { value: transition2 }, vAaswUOa7: { value: transition2 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.h2, { className: "framer-styles-preset-gadxkx", "data-styles-preset": "nqYznXGVD", dir: "auto", children: "bite" }) }), className: "framer-auewig", fonts: ["Inter"], layoutDependency, layoutId: "ScrollText__w3sGab9aG", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, verticalAlignment: "top", withExternalLayout: true }) })] }) }) }) });
});
var css2 = [".framer-5vCaE.framer-1czbti7, .framer-5vCaE .framer-1czbti7 { display: block; }", ".framer-5vCaE.framer-vfob88 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-5vCaE .framer-7peiyd { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-5vCaE .framer-22f2fj, .framer-5vCaE .framer-1jniexb, .framer-5vCaE .framer-auewig { bottom: -120px; flex: none; height: auto; left: 0px; position: absolute; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-5vCaE.framer-v-gwrmmo .framer-7peiyd, .framer-5vCaE.framer-v-dd3ioh .framer-7peiyd, .framer-5vCaE.framer-v-e9waz0 .framer-7peiyd { left: 0px; position: absolute; top: -120px; white-space: pre; width: auto; z-index: 1; }", ".framer-5vCaE.framer-v-gwrmmo .framer-22f2fj, .framer-5vCaE.framer-v-dd3ioh .framer-1jniexb, .framer-5vCaE.framer-v-e9waz0 .framer-auewig { bottom: unset; left: unset; position: relative; white-space: pre; width: auto; }", ".framer-5vCaE.framer-v-dd3ioh .framer-22f2fj, .framer-5vCaE.framer-v-e9waz0 .framer-22f2fj, .framer-5vCaE.framer-v-e9waz0 .framer-1jniexb { bottom: unset; top: -120px; white-space: pre; width: auto; }", ...css];
var FramerAB3wujrBb = withCSS(Component, css2, "framer-5vCaE");
var AB3wujrBb_default = FramerAB3wujrBb;
FramerAB3wujrBb.displayName = "Scroll Text";
FramerAB3wujrBb.defaultProps = { height: 112, width: 250 };
addPropertyControls(FramerAB3wujrBb, { variant: { options: ["gTz9r7EH7", "vAaswUOa7", "R9zAwefnt", "nZJ4FiG06"], optionTitles: ["Step 1", "Step 2", "Step 3", "Step 4"], title: "Variant", type: ControlType.Enum } });
addFonts(FramerAB3wujrBb, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerAB3wujrBb", "slots": [], "annotations": { "framerContractVersion": "1", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"vAaswUOa7":{"layout":["fixed","auto"]},"R9zAwefnt":{"layout":["fixed","auto"]},"nZJ4FiG06":{"layout":["fixed","auto"]}}}', "framerIntrinsicHeight": "112", "framerDisplayContentsDiv": "false", "framerAutoSizeImages": "true", "framerColorSyntax": "true", "framerComponentViewportWidth": "true", "framerImmutableVariables": "true", "framerIntrinsicWidth": "250" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  AB3wujrBb_default as default
};
