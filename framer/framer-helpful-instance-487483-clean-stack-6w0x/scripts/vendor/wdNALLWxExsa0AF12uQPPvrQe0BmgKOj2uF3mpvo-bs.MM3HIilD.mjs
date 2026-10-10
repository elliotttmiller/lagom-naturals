import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  b as r,
  j as i,
  l as a,
  o,
  p as s,
  s as c,
  w as l,
} from "./react.iNMCLRE-.mjs";
import { a as u, k as d, r as f, t as p } from "./motion.dK94hszq.mjs";
import {
  C as m,
  P as h,
  Q as g,
  X as _,
  Z as v,
  a as y,
  at as b,
  c as x,
  et as S,
  g as C,
  i as w,
  k as T,
  q as E,
  tt as D,
  y as O,
} from "./framer.BNAppio8.mjs";
import { n as k, t as A } from "./DsLegal.Bzhin_M1.mjs";
import j, { t as M } from "./hy_-w2iujLqeEIb84WpAMiYhi3q4QoEmYpJhvq4zJnc.B1Log8FL.mjs";
var N, P, F, I, L, R, z, B, V, H, U;
e(() => {
  (c(),
    h(),
    p(),
    l(),
    k(),
    M(),
    (N = T(A)),
    (P = {
      lZL93nSQX: `(max-width: 809.98px)`,
      nudLkNXMn: `(min-width: 810px) and (max-width: 1199.98px)`,
      xc7ajDuLN: `(min-width: 1200px)`,
    }),
    (F = []),
    (I = `framer-vSOET`),
    (L = {
      lZL93nSQX: `framer-v-4d3k9i`,
      nudLkNXMn: `framer-v-ywqzxu`,
      xc7ajDuLN: `framer-v-117iw6j`,
    }),
    (R = (e, t, n) => (e && t ? `position` : n)),
    (z = { Desktop: `xc7ajDuLN`, Phone: `lZL93nSQX`, Tablet: `nudLkNXMn` }),
    (B = ({ value: e }) =>
      g()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (V = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: z[r.variant] ?? r.variant ?? `xc7ajDuLN`,
    })),
    (H = b(
      s(function (e, s) {
        let c = r(null),
          l = s ?? c,
          p = n(),
          { activeLocale: h, setLocale: g } = S();
        E();
        let { style: b, className: T, layoutId: O, variant: k, ...M } = V(e);
        D(i(() => j({}, h), [h]));
        let [N, F] = v(k, P, !1),
          H = m(I),
          U = t(x)?.isLayoutTemplate,
          W = !!t(u)?.transition?.layout,
          G = R(U, W);
        return (
          _({}),
          o(x.Provider, {
            value: {
              activeVariantId: N,
              humanReadableVariantMap: z,
              primaryVariantId: `xc7ajDuLN`,
              variantClassNames: L,
            },
            children: a(f, {
              id: O ?? p,
              children: [
                o(B, { value: `html body { background: rgb(255, 255, 255); }` }),
                o(d.div, {
                  ...M,
                  className: m(H, `framer-117iw6j`, T),
                  ref: l,
                  style: { ...b },
                  children: o(d.div, {
                    className: `framer-2zae9c`,
                    "data-framer-name": `S0 DsLegal`,
                    layout: G,
                    children: o(w, {
                      children: o(y, {
                        className: `framer-1cr6kdx-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `DsLegal`,
                        isAuthoredByUser: !0,
                        name: `DsLegal`,
                        nodeId: `fVFCFJZ0g`,
                        scopeId: `S_MHfjqaa`,
                        children: o(C, {
                          breakpoint: N,
                          overrides: {
                            lZL93nSQX: { bpHint: `phone` },
                            nudLkNXMn: { bpHint: `tablet` },
                          },
                          children: o(A, {
                            bodyFont: {
                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                            },
                            bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                            bpHint: `desktop`,
                            brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                            cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                            contactLine: `Questions about this page? Write to`,
                            crumbHome: `Home`,
                            customFonts: !1,
                            displayFont: {
                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                            },
                            fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                            height: `100%`,
                            id: `fVFCFJZ0g`,
                            ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                            intro: ``,
                            kind: `terms`,
                            layoutId: `fVFCFJZ0g`,
                            monoFont: {
                              fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                            },
                            name: `DsLegal`,
                            night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                            pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                            sections: ``,
                            stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                            style: { width: `100%` },
                            tiers: `Personal|Included with every product|1 person, personal projects, unlimited personal sites, no client work, no resale; Commercial|Most products, see the page|1 person, client work, unlimited projects, no resale; Team|Ask for a quote|Up to 5 people, client work, unlimited projects, no resale`,
                            tiersLabel: `Licence tiers`,
                            title: ``,
                            tocLabel: `On this page`,
                            updated: `Updated 26 September 2026`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-vSOET.framer-vls1ig, .framer-vSOET .framer-vls1ig { display: block; }`,
        `.framer-vSOET.framer-117iw6j { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-vSOET .framer-2zae9c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vSOET .framer-1cr6kdx-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-vSOET.framer-117iw6j { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-vSOET.framer-117iw6j { width: 390px; }}`,
      ],
      `framer-vSOET`
    )),
    (H.displayName = `Terms`),
    (H.defaultProps = { height: 1080, width: 1200 }),
    O(
      H,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Fragment Mono`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Fragment Mono`,
              url: `https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnN4FNh4UI_1U.woff2`,
              weight: `400`,
            },
          ],
        },
        ...N,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (U = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerS_MHfjqaa`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerIntrinsicHeight: `1080`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"nudLkNXMn":{"layout":["fixed","auto"]},"lZL93nSQX":{"layout":["fixed","auto"]}}}`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerScrollSections: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { U as __FramerMetadata__, H as default, F as queryParamNames };
//# sourceMappingURL=wdNALLWxExsa0AF12uQPPvrQe0BmgKOj2uF3mpvo-bs.MM3HIilD.mjs.map
