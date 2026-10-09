var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/o1PI5S8YtkA5bP5g4dFz/cAPMVEI6osbJ1UvICgTq/Embed.js
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect as useEffect7, useRef as useRef3, useState as useState3 } from "react";
import { addPropertyControls, ControlType as ControlType4 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/VTUDdizacRHpwbkOamr7/AykinQJbgwl92LvMGZwu/constants.js
import { ControlType } from "./_framer-runtime.js";
var containerStyles = {
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var emptyStateStyle = {
  ...containerStyles,
  borderRadius: 6,
  background: "rgba(136, 85, 255, 0.3)",
  color: "#85F",
  border: "1px dashed #85F",
  flexDirection: "column"
};
var defaultEvents = {
  onClick: {
    type: ControlType.EventHandler
  },
  onMouseEnter: {
    type: ControlType.EventHandler
  },
  onMouseLeave: {
    type: ControlType.EventHandler
  }
};
var fontSizeOptions = {
  type: ControlType.Number,
  title: "Font Size",
  min: 2,
  max: 200,
  step: 1,
  displayStepper: true
};
var fontControls = {
  font: {
    type: ControlType.Boolean,
    title: "Font",
    defaultValue: false,
    disabledTitle: "Default",
    enabledTitle: "Custom"
  },
  fontFamily: {
    type: ControlType.String,
    title: "Family",
    placeholder: "Inter",
    hidden: ({ font }) => !font
  },
  fontWeight: {
    type: ControlType.Enum,
    title: "Weight",
    options: [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900
    ],
    optionTitles: [
      "Thin",
      "Extra-light",
      "Light",
      "Regular",
      "Medium",
      "Semi-bold",
      "Bold",
      "Extra-bold",
      "Black"
    ],
    hidden: ({ font }) => !font
  }
};

// http-url:https://framerusercontent.com/modules/D4TWeLfcxT6Tysr2BlYg/iZjmqdxVx1EOiM3k1FaW/useOnNavigationTargetChange.js
import { useIsInCurrentNavigationTarget } from "./_framer-runtime.js";
import { useEffect } from "react";

// http-url:https://framerusercontent.com/modules/ExNgrA7EJTKUPpH6vIlN/eiOrSJ2Ab5M9jPCvVwUz/useConstant.js
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/D2Lz5CmnNVPZFFiZXalt/QaCzPbriZBfXWZIIycFI/colorFromToken.js
import { Color } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/3mKFSGQqKHV82uOV1eBc/5fbRLvOpxZC0JOXugvwm/isMotionValue.js
import { MotionValue } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/xDiQsqBGXzmMsv7AlEVy/uhunpMiNsbXxzjlXsg1y/useUniqueClassName.js
import * as React from "react";

// http-url:https://framerusercontent.com/modules/ETACN5BJyFTSo0VVDJfu/NHRqowOiXkF9UwOzczF7/variantUtils.js
import { ControlType as ControlType2 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/eMBrwoqQK7h6mEeGQUH8/GuplvPJVjmxpk9zqOTcb/isBrowser.js
import { useMemo } from "react";

// http-url:https://framerusercontent.com/modules/v9AWX2URmiYsHf7GbctE/XxKAZ9KlhWqf5x1JMyyF/useOnChange.js
import { useEffect as useEffect3 } from "react";

// http-url:https://framerusercontent.com/modules/kNDwabfjDEb3vUxkQlZS/fSIr3AOAYbGlfSPgXpYu/useAutoMotionValue.js
import { useCallback, useEffect as useEffect4, useRef as useRef2 } from "react";
import { motionValue, animate, RenderTarget } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/cuQH4dmpDnV8YK1mSgQX/KqRXqunFjE6ufhpc7ZRu/useFontControls.js
import { fontStore } from "./_framer-runtime.js";
import { useEffect as useEffect5 } from "react";

// http-url:https://framerusercontent.com/modules/afBE9Yx1W6bY5q32qPxe/m3q7puE2tbo1S2C0s0CT/useRenderTarget.js
import { useMemo as useMemo2 } from "react";
import { RenderTarget as RenderTarget2 } from "./_framer-runtime.js";
function useIsOnCanvas() {
  const onCanvas = useMemo2(
    () => RenderTarget2.current() === RenderTarget2.canvas,
    []
  );
  return onCanvas;
}

// http-url:https://framerusercontent.com/modules/zGkoP8tPDCkoBzMdt5uq/0zFSjxIYliHxrQQnryFX/useControlledState.js
import * as React2 from "react";

// http-url:https://framerusercontent.com/modules/5SM58HxZHxjjv7aLMOgQ/WXz9i6mVki0bBCrKdqB3/propUtils.js
import { useMemo as useMemo3 } from "react";
import { ControlType as ControlType3 } from "./_framer-runtime.js";
var borderRadiusControl = {
  borderRadius: {
    title: "Radius",
    type: ControlType3.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: [
      "Radius",
      "Radius per corner"
    ],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius"
    ],
    valueLabels: [
      "TL",
      "TR",
      "BR",
      "BL"
    ],
    min: 0
  }
};
var paddingControl = {
  padding: {
    type: ControlType3.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: [
      "Padding",
      "Padding per side"
    ],
    valueKeys: [
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft"
    ],
    valueLabels: [
      "T",
      "R",
      "B",
      "L"
    ],
    min: 0,
    title: "Padding"
  }
};

// http-url:https://framerusercontent.com/modules/o1PI5S8YtkA5bP5g4dFz/cAPMVEI6osbJ1UvICgTq/Embed.js
function Embed({ type, url, html, zoom, radius, border, style = {} }) {
  if (type === "url" && url) {
    return /* @__PURE__ */ _jsx(EmbedUrl, { url, zoom, radius, border, style });
  }
  if (type === "html" && html) {
    return /* @__PURE__ */ _jsx(EmbedHtml, { html, style });
  }
  return /* @__PURE__ */ _jsx(Instructions, { style });
}
addPropertyControls(Embed, { type: { type: ControlType4.Enum, defaultValue: "url", displaySegmentedControl: true, options: ["url", "html"], optionTitles: ["URL", "HTML"] }, url: { title: "URL", type: ControlType4.String, description: "Some websites don\u2019t support embedding.", hidden(props) {
  return props.type !== "url";
} }, html: { title: "HTML", type: ControlType4.String, displayTextArea: true, hidden(props) {
  return props.type !== "html";
} }, border: { title: "Border", type: ControlType4.Border, optional: true, hidden(props) {
  return props.type !== "url";
} }, radius: { type: ControlType4.BorderRadius, title: "Radius", hidden(props) {
  return props.type !== "url";
} }, zoom: { title: "Zoom", defaultValue: 1, type: ControlType4.Number, hidden(props) {
  return props.type !== "url";
}, min: 0.1, max: 1, step: 0.1, displayStepper: true } });
function Instructions({ style }) {
  return /* @__PURE__ */ _jsx("div", { style: { minHeight: getMinHeight(style), ...emptyStateStyle, overflow: "hidden", ...style }, children: /* @__PURE__ */ _jsx("div", { style: centerTextStyle, children: "To embed a website or widget, add it to the properties\xA0panel." }) });
}
function EmbedUrl({ url, zoom, radius, border, style }) {
  const hasAutoHeight = !style.height;
  if (!/[a-z]+:\/\//.test(url)) {
    url = "https://" + url;
  }
  const onCanvas = useIsOnCanvas();
  const [state, setState] = useState3(onCanvas ? void 0 : false);
  useEffect7(() => {
    if (!onCanvas)
      return;
    let isLastEffect = true;
    setState(void 0);
    async function load() {
      const response = await fetch("https://api.framer.com/functions/check-iframe-url?url=" + encodeURIComponent(url));
      if (response.status == 200) {
        const { isBlocked } = await response.json();
        if (isLastEffect) {
          setState(isBlocked);
        }
      } else {
        const message = await response.text();
        console.error(message);
        const error = new Error("This site can\u2019t be reached.");
        setState(error);
      }
    }
    load().catch((error) => {
      console.error(error);
      setState(error);
    });
    return () => {
      isLastEffect = false;
    };
  }, [url]);
  if (onCanvas && hasAutoHeight) {
    return /* @__PURE__ */ _jsx(ErrorMessage, { message: "URL embeds do not support auto height.", style });
  }
  if (!url.startsWith("https://")) {
    return /* @__PURE__ */ _jsx(ErrorMessage, { message: "Unsupported protocol.", style });
  }
  if (state === void 0) {
    return /* @__PURE__ */ _jsx(LoadingIndicator, {});
  }
  if (state instanceof Error) {
    return /* @__PURE__ */ _jsx(ErrorMessage, { message: state.message, style });
  }
  if (state === true) {
    const message = `Can\u2019t embed ${url} due to its content security policy.`;
    return /* @__PURE__ */ _jsx(ErrorMessage, { message, style });
  }
  return /* @__PURE__ */ _jsx("iframe", {
    src: url,
    style: { ...iframeStyle, ...style, ...border, zoom, borderRadius: radius, transformOrigin: "top center" },
    loading: "lazy",
    // @ts-ignore
    fetchPriority: onCanvas ? "low" : "auto",
    referrerPolicy: "no-referrer",
    sandbox: getSandbox(onCanvas),
    allowFullScreen: true,
    allow: "presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; clipboard-write"
  });
}
var iframeStyle = { width: "100%", height: "100%", border: "none" };
function getSandbox(onCanvas) {
  const result = ["allow-same-origin", "allow-scripts"];
  if (!onCanvas) {
    result.push("allow-downloads", "allow-forms", "allow-modals", "allow-orientation-lock", "allow-pointer-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-storage-access-by-user-activation", "allow-top-navigation-by-user-activation");
  }
  return result.join(" ");
}
function EmbedHtml({ html, ...props }) {
  const hasScript = html.includes("<\/script>");
  if (hasScript) {
    const hasSplineViewer = html.includes("</spline-viewer>");
    const hasComment = html.includes("<!-- framer-direct-embed -->");
    if (hasSplineViewer || hasComment) {
      return /* @__PURE__ */ _jsx(EmbedHtmlWithScripts, { html, ...props });
    }
    return /* @__PURE__ */ _jsx(EmbedHtmlInsideIframe, { html, ...props });
  }
  return /* @__PURE__ */ _jsx(EmbedHtmlWithoutScripts, { html, ...props });
}
function EmbedHtmlInsideIframe({ html, style }) {
  const ref = useRef3();
  const [iframeHeight, setIframeHeight] = useState3(0);
  useEffect7(() => {
    const iframeWindow = ref.current?.contentWindow;
    function handleMessage(event) {
      if (event.source !== iframeWindow)
        return;
      const data = event.data;
      if (typeof data !== "object" || data === null)
        return;
      const height = data.embedHeight;
      if (typeof height !== "number")
        return;
      setIframeHeight(height);
    }
    __dai_window.addEventListener("message", handleMessage);
    iframeWindow?.postMessage("getEmbedHeight", "*");
    return () => {
      __dai_window.removeEventListener("message", handleMessage);
    };
  }, []);
  const srcDoc = `
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${html}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`;
  const currentStyle = { ...iframeStyle, ...style };
  const hasAutoHeight = !style.height;
  if (hasAutoHeight) {
    currentStyle.height = iframeHeight + "px";
  }
  return /* @__PURE__ */ _jsx("iframe", { ref, style: currentStyle, srcDoc });
}
function EmbedHtmlWithScripts({ html, style }) {
  const ref = useRef3();
  useEffect7(() => {
    const div = ref.current;
    if (!div)
      return;
    div.innerHTML = html;
    executeScripts(div);
    return () => {
      div.innerHTML = "";
    };
  }, [html]);
  return /* @__PURE__ */ _jsx("div", { ref, style: { ...htmlStyle, ...style } });
}
function EmbedHtmlWithoutScripts({ html, style }) {
  return /* @__PURE__ */ _jsx("div", { style: { ...htmlStyle, ...style }, dangerouslySetInnerHTML: { __html: html } });
}
var htmlStyle = { width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" };
function executeScripts(node) {
  if (node instanceof Element && node.tagName === "SCRIPT") {
    const script = document.createElement("script");
    script.text = node.innerHTML;
    for (const { name, value } of node.attributes) {
      script.setAttribute(name, value);
    }
    node.parentElement.replaceChild(script, node);
  } else {
    for (const child of node.childNodes) {
      executeScripts(child);
    }
  }
}
function LoadingIndicator() {
  return /* @__PURE__ */ _jsx("div", { className: "framerInternalUI-componentPlaceholder", style: { ...containerStyles, overflow: "hidden" }, children: /* @__PURE__ */ _jsx("div", { style: centerTextStyle, children: "Loading\u2026" }) });
}
function ErrorMessage({ message, style }) {
  return /* @__PURE__ */ _jsx("div", { className: "framerInternalUI-errorPlaceholder", style: { minHeight: getMinHeight(style), ...containerStyles, overflow: "hidden", ...style }, children: /* @__PURE__ */ _jsx("div", { style: centerTextStyle, children: message }) });
}
var centerTextStyle = { textAlign: "center", minWidth: 140 };
function getMinHeight(style) {
  const hasAutoHeight = !style.height;
  if (hasAutoHeight)
    return 200;
}
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "Embed", "slots": [], "annotations": { "framerSupportedLayoutHeight": "any-prefer-fixed", "framerIntrinsicWidth": "600", "framerDisableUnlink": "", "framerContractVersion": "1", "framerSupportedLayoutWidth": "fixed", "framerIntrinsicHeight": "400" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  Embed as default
};
