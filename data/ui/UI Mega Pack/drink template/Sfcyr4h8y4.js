var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/ymfAq2DVcLiKlsezjKVS/8WwrCHe8QToasxixJGmb/SfCyr4H8Y.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx, motion, useSVGTemplate, withCSS } from "./_framer-runtime.js";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
var mask = "var(--framer-icon-mask)";
var Base = /* @__PURE__ */ forwardRef2(function(props, ref) {
  return /* @__PURE__ */ _jsx("svg", { ...props, ref, children: props.children });
});
var MotionSVG = motion.create(Base);
var SVG = /* @__PURE__ */ forwardRef2((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx(MotionSVG, { ...rest, layoutId, ref, children }) : /* @__PURE__ */ _jsx("svg", { ...rest, ref, children });
});
var svg = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 9.751 16.501 L 18.128 8.003 C 19.959 6.172 19.959 3.204 18.128 1.373 C 16.297 -0.458 13.329 -0.458 11.498 1.373 L 9.751 3.001 L 8.003 1.373 C 6.172 -0.458 3.204 -0.458 1.373 1.373 C -0.458 3.204 -0.458 6.172 1.373 8.003 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="16.50061795926681px" id="CwPfarbfZ" transform="translate(2.249 4.499)" width="19.50123591853362px"/><path d="M 9.751 3.061 L 8.003 1.373 C 6.172 -0.458 3.204 -0.458 1.373 1.373 C -0.458 3.204 -0.458 6.172 1.373 8.003 L 9.751 16.504 L 18.128 8.007 C 19.959 6.176 19.959 3.208 18.128 1.377 C 16.297 -0.454 13.329 -0.454 11.498 1.377 L 8.251 4.504 L 11.251 7.504 L 9.751 9.004" fill="transparent" height="16.50436795926681px" id="zAan0NXH4" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.249 4.496)" width="19.50123591853362px"/></svg>';
var getProps = ({ alpha, color, height, id, width, width1, ...props }) => {
  return { ...props, ezTt3ayMo: color ?? props.ezTt3ayMo ?? "rgb(0, 0, 0)", lschgej4H: width1 ?? props.lschgej4H ?? 1.5, qxTvv_EBh: alpha ?? props.qxTvv_EBh };
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { style, className, layoutId, variant, ezTt3ayMo, lschgej4H, qxTvv_EBh, ...restProps } = getProps(props);
  const href = useSVGTemplate("1358804411", svg);
  return /* @__PURE__ */ _jsx(SVG, { ...restProps, className: cx("framer-oIQsa", className), layoutId, ref, role: "presentation", style: { "--1m6trwb": qxTvv_EBh, "--21h8s6": ezTt3ayMo, "--pgex8v": lschgej4H, ...style }, viewBox: "0 0 24 24", children: /* @__PURE__ */ _jsx("use", { href }) });
});
var css = [`.framer-oIQsa { -webkit-mask: ${mask}; aspect-ratio: 1; display: block; mask: ${mask}; width: 24px; }`];
var Icon = withCSS(Component, css, "framer-oIQsa");
Icon.displayName = "Heart Straight Break";
var SfCyr4H8Y_default = Icon;
addPropertyControls(Icon, { ezTt3ayMo: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Color", type: ControlType.Color }, lschgej4H: { defaultValue: 1.5, displayStepper: true, hidden: false, max: 6, min: 0, step: 0.5, title: "Width", type: ControlType.Number }, qxTvv_EBh: { defaultValue: 0, displayStepper: true, hidden: false, max: 1, min: 0, step: 0.1, title: "Alpha", type: ControlType.Number } });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "Icon", "slots": [], "annotations": { "framerIntrinsicWidth": "24", "framerSupportedLayoutWidth": "any-prefer-fixed", "framerIntrinsicHeight": "24", "framerVector": '{"name":"Heart Straight Break","color":{"type":"variable","value":"21h8s6"},"set":{"localId":"vectorSet/NGVKdicsm","id":"NGVKdicsm","moduleId":"omX0gWFPqDwhaiWwf6ab"}}', "framerDisableUnlink": "true", "framerSupportedLayoutHeight": "any-prefer-fixed", "framerImmutableVariables": "true", "framerContractVersion": "1", "framerVariables": '{"ezTt3ayMo":"color","lschgej4H":"width1","qxTvv_EBh":"alpha"}' } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  SfCyr4H8Y_default as default
};
