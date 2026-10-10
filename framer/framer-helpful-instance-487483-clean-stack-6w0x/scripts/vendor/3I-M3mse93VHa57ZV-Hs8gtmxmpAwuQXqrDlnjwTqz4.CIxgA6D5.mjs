import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  E as r,
  I as i,
  R as a,
  _ as o,
  b as s,
  c,
  j as l,
  l as u,
  o as d,
  p as f,
  s as p,
  w as m,
  y as h,
} from "./react.iNMCLRE-.mjs";
import { a as g, k as _, r as v, t as y } from "./motion.dK94hszq.mjs";
import {
  $ as b,
  C as x,
  P as S,
  Q as C,
  X as w,
  Z as T,
  a as E,
  at as D,
  b as O,
  c as k,
  et as A,
  g as ee,
  i as te,
  k as j,
  o as M,
  q as ne,
  tt as re,
  v as N,
  y as ie,
} from "./framer.BNAppio8.mjs";
import ae, { t as oe } from "./1Z5-F8N0X90W9yQisEq2qIXqF4LpNRObdbYfwwxw1qU.8Yhc8Q6U.mjs";
function se() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = F), document.head.appendChild(e));
  }, []);
}
function ce() {
  let e = b(),
    t = null;
  try {
    t = N.current();
  } catch {}
  return e || (t !== null && t !== N.preview);
}
function le() {
  let e = b(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && N.current() !== N.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function ue(e, t) {
  let n = String(t || ``).toLowerCase(),
    [i, s] = o(n === `phone` ? 390 : n === `tablet` ? 810 : 1440),
    [c, l] = o(n === `phone` ? 844 : n === `tablet` ? 1080 : 900);
  return (
    r(() => {
      let t = e.current;
      if (!t) return;
      let n = new ResizeObserver(([e]) => {
        let n = Math.round(
          (e.borderBoxSize && e.borderBoxSize[0] ? e.borderBoxSize[0].inlineSize : 0) ||
            t.offsetWidth
        );
        n > 0 && s(n);
      });
      n.observe(t);
      let r = () => l(a.innerHeight);
      r();
      let i = () => {
          let e = Math.round(t.offsetWidth);
          e > 0 && s(e);
        },
        o = a.setTimeout(i, 150),
        c = a.setTimeout(i, 700),
        u = a.setTimeout(i, 1600);
      return (
        a.addEventListener(`resize`, r),
        a.addEventListener(`load`, i),
        () => {
          (n.disconnect(),
            a.clearTimeout(o),
            a.clearTimeout(c),
            a.clearTimeout(u),
            a.removeEventListener(`resize`, r),
            a.removeEventListener(`load`, i));
        }
      );
    }, []),
    { w: i, vh: c }
  );
}
function de(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: B(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? R(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: B(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? R(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: B(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? R(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function fe(e, t) {
  h(() => {
    if (!t || !e.current || !a.matchMedia(`(hover:hover) and (pointer:fine)`).matches) return;
    let n = e.current,
      r = () => Array.from(n.querySelectorAll(`[data-mag]`)),
      i = (e) => {
        for (let t of r()) {
          let n = t.getBoundingClientRect(),
            r = e.clientX - (n.left + n.width / 2),
            i = e.clientY - (n.top + n.height / 2),
            a = Math.hypot(r, i),
            o = a < 150 ? (1 - a / 150) * 9 : 0;
          (t.style.setProperty(`--mx`, `${(r / (a || 1)) * o}px`),
            t.style.setProperty(`--my`, `${(i / (a || 1)) * o}px`));
        }
      },
      o = () => {
        for (let e of r()) (e.style.setProperty(`--mx`, `0px`), e.style.setProperty(`--my`, `0px`));
      };
    return (
      n.addEventListener(`pointermove`, i),
      n.addEventListener(`pointerleave`, o),
      () => {
        (n.removeEventListener(`pointermove`, i), n.removeEventListener(`pointerleave`, o));
      }
    );
  }, [t]);
}
function pe(e) {
  let [t, n] = o(!1);
  return (
    h(() => {
      if (!e) return;
      let t = document.documentElement,
        r = () => !/(^|\s)ds-hold/.test(t.className);
      if (r()) {
        n(!0);
        return;
      }
      let i = new MutationObserver(() => {
        r() && (i.disconnect(), n(!0));
      });
      i.observe(t, { attributes: !0, attributeFilter: [`class`] });
      let o = a.setTimeout(() => {
        (i.disconnect(), n(!0));
      }, 9e3);
      return () => {
        (i.disconnect(), a.clearTimeout(o));
      };
    }, [e]),
    t
  );
}
function P(e) {
  let {
      eyebrow: t = `Out of stock`,
      title: n = `That shelf is|*empty.*`,
      copy: r = `The page you asked for was moved, sold out or never existed. The rest of the shelf is right here.`,
      tagLabel: i = `404`,
      tagLine: c = `Not on the shelf`,
      button1: l = `Back to the shelf`,
      button1Link: f = `/products`,
      button2: p = `Home`,
      button2Link: m = `/`,
      bpHint: g = `auto`,
    } = e,
    _ = U(e),
    { D: v, B: y, M: b } = de(e);
  se();
  let x = le(),
    S = V(),
    C = ce(),
    w = s(null),
    { w: T } = ue(w, g);
  fe(w, x);
  let E = pe(x),
    [D, O] = o(!1);
  h(() => {
    if (!x || !E) return;
    let e = a.setTimeout(() => O(!0), 100);
    return () => a.clearTimeout(e);
  }, [x, E]);
  let k = D || C || S,
    A = T < 810;
  return u(`section`, {
    ref: w,
    className: `ds ds-sec ds-dark ds44${k ? ` is-in` : ``}${A ? ` is-ph` : T >= 810 && T < 1100 ? ` is-tab` : ``}${C ? ` is-still` : ``}${S ? ` is-rm` : ``}`,
    style: { ...W(_), ...y, ...e.style },
    "aria-label": J(n),
    children: [
      d(`link`, { rel: `stylesheet`, href: F }),
      d(`style`, { dangerouslySetInnerHTML: { __html: he + ve + ye } }),
      d(`div`, {
        className: `ds44-wall`,
        "aria-hidden": !0,
        children: d(`i`, { className: `ds44-spot` }),
      }),
      u(`div`, {
        className: `ds-wrap ds44-wrap`,
        children: [
          u(`div`, {
            className: `ds44-copy`,
            children: [
              u(`p`, {
                className: `ds44-eb`,
                style: { ...b, ...Y(k, 0) },
                children: [d(`i`, { "aria-hidden": !0 }), t],
              }),
              d(_e, {
                text: n,
                on: k,
                D: v,
                tag: `h1`,
                size: A ? `clamp(44px,13vw,60px)` : `clamp(52px,6.4vw,104px)`,
                lh: 0.9,
                delay: 120,
              }),
              d(`p`, { className: `ds44-sub`, style: Y(k, 300), children: r }),
              u(`div`, {
                className: `ds44-btns`,
                style: Y(k, 380),
                children: [
                  d(q, { href: f, label: l, kind: `solid` }),
                  d(q, { href: m, label: p, kind: `quiet` }),
                ],
              }),
            ],
          }),
          d(`div`, {
            className: `ds44-scene`,
            "aria-hidden": !0,
            children: d(`div`, {
              className: `ds44-unit`,
              children: [0, 1, 2].map((e) =>
                u(
                  `div`,
                  {
                    className: `ds44-row`,
                    style: { "--p": e },
                    children: [
                      e === 0 &&
                        u(`span`, {
                          className: `ds44-tag`,
                          children: [
                            d(`i`, { className: `ds44-str` }),
                            u(`span`, {
                              className: `ds44-tin`,
                              children: [
                                d(`i`, { className: `ds44-hole` }),
                                d(`b`, { style: v, children: i }),
                                d(`small`, { style: b, children: c }),
                              ],
                            }),
                          ],
                        }),
                      u(`div`, {
                        className: `ds44-plank`,
                        children: [
                          d(`i`, { className: `pt` }),
                          d(`i`, { className: `pf` }),
                          d(`i`, { className: `pl` }),
                        ],
                      }),
                      d(`span`, { className: `ds44-dust` }),
                    ],
                  },
                  e
                )
              ),
            }),
          }),
        ],
      }),
    ],
  });
}
var F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  me,
  G,
  K,
  q,
  he,
  ge,
  J,
  _e,
  Y,
  ve,
  ye,
  be = e(() => {
    (i(),
      p(),
      m(),
      S(),
      (F = `../../styles/css2-a59a76.css`),
      (I = `clamp(1280px, 92vw, 1520px)`),
      (L = (e) => {
        if (!e) return ``;
        if (typeof e == `string`) return e.includes(`;`) ? `` : e;
        if (e.fontFamily && !String(e.fontFamily).includes(`;`)) return String(e.fontFamily);
        let t = String(e.fontSelector || ``);
        return t
          ? (t.split(`;`).pop() || ``)
              .replace(/-(regular|italic|bold|\d{3}(italic)?)$/i, ``)
              .replace(/-/g, ` `)
          : ``;
      }),
      (R = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (z = (e) => {
        let t = L(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (B = (e, t, n, r) => {
        let i = e ? z(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (V = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (H = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (U = (e) => ({
        bone: e.bone || H.bone,
        ink: e.ink || H.ink,
        brass: e.brass || H.brass,
        pine: e.pine || H.pine,
        fog: e.fog || H.fog,
        stone: e.stone || H.stone,
        cloud: e.cloud || H.cloud,
        night: e.night || H.night,
      })),
      (W = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (me = {
        bone: { type: M.Color, title: `Paper`, defaultValue: H.bone },
        ink: { type: M.Color, title: `Ink`, defaultValue: H.ink },
        brass: { type: M.Color, title: `Accent`, defaultValue: H.brass },
        pine: { type: M.Color, title: `Deep`, defaultValue: H.pine },
        fog: { type: M.Color, title: `Line`, defaultValue: H.fog },
        stone: { type: M.Color, title: `Muted`, defaultValue: H.stone },
        cloud: { type: M.Color, title: `White`, defaultValue: H.cloud },
        night: { type: M.Color, title: `Dark`, defaultValue: H.night },
      }),
      (G = {
        customFonts: {
          type: M.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: M.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: M.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: M.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (K = {
        bpHint: {
          type: M.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (q = ({
        href: e,
        label: t,
        kind: n = `solid`,
        arrow: r = !0,
        style: i,
        className: a,
        onClick: o,
        ariaLabel: s,
        cur: c,
        icon: l,
      }) =>
        d(`a`, {
          className: `ds-btn ds-${n}${r ? `` : ` ds-noarr`}${a ? ` ` + a : ``}`,
          "data-mag": !0,
          "data-cur": c || `go`,
          href: e,
          onClick: o,
          "aria-label": s,
          style: i,
          children: u(`span`, {
            className: `ds-tag`,
            children: [
              d(`span`, { className: `ds-hole`, "aria-hidden": !0 }),
              d(`span`, { className: `ds-fill`, "aria-hidden": !0 }),
              l,
              u(`span`, {
                className: `ds-lbl`,
                children: [
                  d(`span`, { className: `ds-l1`, children: t }),
                  d(`span`, { className: `ds-l2`, "aria-hidden": !0, children: t }),
                ],
              }),
              r &&
                d(`span`, {
                  className: `ds-arr`,
                  "aria-hidden": !0,
                  children: u(`svg`, {
                    width: `13`,
                    height: `13`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2.2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [
                      d(`path`, { d: `M6 8h12l-1 12H7z` }),
                      d(`path`, { d: `M9 8V6a3 3 0 0 1 6 0v2` }),
                    ],
                  }),
                }),
            ],
          }),
        })),
      (he = `
:where(.hk){position:relative;z-index:10} .hk,.ds *{box-sizing:border-box;min-width:0} .ds-sr{position:absolute!important;width:1px!important;height:1px!important;overflow:hidden!important;clip:rect(0 0 0 0)!important;white-space:nowrap!important;padding:0!important;margin:-1px!important;border:0!important} :where(.hk) a{color:inherit} html,body{overflow-x:clip}
:where(a[href],button,input,select,textarea,summary,[tabindex]:not([tabindex="-1"]),[role="button"]):focus-visible{outline:3px solid var(--ds-ink,#1D1830)!important;outline-offset:2px!important;box-shadow:0 0 0 2px var(--ds-bone,#EDE3D1)!important} :where(.ds-dark) :where(a[href],button,input,select,textarea,summary,[tabindex]:not([tabindex="-1"])):focus-visible{outline-color:var(--ds-cloud,#FFFFFF)!important;box-shadow:0 0 0 2px var(--ds-night,#0F1113)!important} :where(.ds-inring) :where(a[href],button):focus-visible{outline-offset:-4px!important;box-shadow:none!important} :where(.hk) :is(input:not([type=range]):not([type=checkbox]):not([type=radio]),textarea,select):focus-visible{outline:2px solid var(--ds-ink,#17100C)!important;outline-offset:-2px!important;box-shadow:none!important} :where(.ds-dark) :is(input,textarea,select):focus-visible{outline-color:var(--ds-bone,#F3EBDD)!important} :where(.hk) textarea{resize:none} .ds-inring:focus-visible{outline-offset:-3px!important;box-shadow:none!important} html{scroll-padding-top:96px;scroll-padding-bottom:88px}
.ds-btn{position:relative;display:inline-flex;padding:0;min-height:50px;text-decoration:none;cursor:pointer;isolation:isolate;white-space:nowrap;font-size:14px;font-weight:700;letter-spacing:.01em;text-transform:none;border:0;color:var(--fg);filter:drop-shadow(0 6px 14px rgba(0,0,0,.18));transition:color .35s,transform .35s cubic-bezier(.34,1.56,.64,1)}
.ds-tag{position:relative;display:inline-flex;align-items:center;gap:12px;width:100%;min-height:inherit;padding:0 8px 0 30px;background:var(--face);overflow:hidden;isolation:isolate;clip-path:polygon(16px 0,100% 0,100% 100%,16px 100%,0 50%);transform-origin:8px 50%;transition:transform .5s cubic-bezier(.34,1.56,.64,1)}
.ds-tag::after{content:"";position:absolute;inset:0;pointer-events:none;box-shadow:inset 0 0 0 1.5px var(--rim);clip-path:inherit}
.ds-hole{position:absolute;left:11px;top:50%;width:7px;height:7px;margin-top:-3.5px;border-radius:50%;background:var(--holefill);box-shadow:0 0 0 1.5px var(--rim2);z-index:2}
.ds-fill{position:absolute;z-index:-1;inset:0;background:var(--fill);clip-path:circle(0% at 14px 50%);transition:clip-path .6s cubic-bezier(.7,0,.2,1)}
.ds-btn:hover .ds-fill,.ds-btn:focus-visible .ds-fill{clip-path:circle(160% at 14px 50%)}
.ds-btn:hover .ds-tag,.ds-btn:focus-visible .ds-tag{animation:ds-swing .9s cubic-bezier(.34,1.56,.64,1) 1}
@keyframes ds-swing{0%{transform:rotate(0)}25%{transform:rotate(-4deg)}60%{transform:rotate(2.5deg)}100%{transform:rotate(0)}}
.ds-btn:hover,.ds-btn:focus-visible{color:var(--fg2)}
.ds-btn.ds-noarr .ds-tag{padding-right:26px}
.ds-port{width:7px;height:7px;flex:none;border-radius:50%;background:var(--ds-brass);animation:ds-blink 1.4s ease-in-out infinite}
@keyframes ds-blink{50%{opacity:.25}}
.ds-arr{display:grid;place-items:center;width:34px;height:34px;flex:none;background:var(--chip);color:var(--chipfg);transition:background .3s,color .3s,transform .5s cubic-bezier(.34,1.56,.64,1)} .ds-arr svg{width:14px;height:14px} .ds-btn:hover .ds-arr{transform:translateY(-2px) rotate(-8deg)}
.ds-lbl{position:relative;display:inline-block;height:1.2em;overflow:hidden;line-height:1.2} .ds-l1,.ds-l2{display:block;transition:translate .45s cubic-bezier(.7,0,.2,1)} .ds-btn:hover .ds-l1,.ds-btn:hover .ds-l2{translate:0 -100%}
.ds-btn.ds-solid{--face:var(--ds-brass);--rim:transparent;--rim2:color-mix(in srgb,var(--ds-ink) 35%,transparent);--holefill:var(--ds-bone);--fill:var(--ds-ink);--fg:var(--ds-ink);--fg2:var(--ds-cloud);--chip:var(--ds-ink);--chipfg:var(--ds-cloud);--sa:var(--ds-cloud);--sb:var(--ds-ink)}
.ds-btn.ds-solid:hover{--chip:var(--ds-brass);--chipfg:var(--ds-ink);--holefill:var(--ds-bone)}
.ds-btn.ds-ghost{--face:var(--ds-bone);--rim:color-mix(in srgb,var(--ds-ink) 28%,transparent);--rim2:color-mix(in srgb,var(--ds-ink) 35%,transparent);--holefill:var(--ds-bone);--fill:var(--ds-ink);--fg:var(--ds-ink);--fg2:var(--ds-cloud);--chip:var(--ds-ink);--chipfg:var(--ds-cloud);--sa:var(--ds-brass);--sb:var(--ds-ink)}
.ds-btn.ds-ghost:hover{--chip:var(--ds-brass);--chipfg:var(--ds-ink)}
.ds-btn.ds-quiet{--face:color-mix(in srgb,var(--ds-cloud) 10%,transparent);--rim:color-mix(in srgb,var(--ds-cloud) 34%,transparent);--rim2:color-mix(in srgb,var(--ds-cloud) 45%,transparent);--holefill:var(--ds-night);--fill:var(--ds-cloud);--fg:var(--ds-cloud);--fg2:var(--ds-ink);--chip:var(--ds-cloud);--chipfg:var(--ds-ink);--sa:var(--ds-ink);--sb:var(--ds-cloud)}
@media (max-width:600px),(hover:none){.ds .ds-btn{white-space:normal;text-align:left;line-height:1.25;min-height:50px;max-width:100%} .ds .ds-lbl{height:auto} .ds .ds-l2{display:none}}
.ds-btn:hover{transform:translate(var(--mx,0px),var(--my,0px))} .ds-btn:active{transform:translate(var(--mx,0px),var(--my,0px)) scale(.97)!important}
.ds-dark .ds-btn.ds-ghost{--face:color-mix(in srgb,var(--ds-cloud) 7%,transparent);--rim:color-mix(in srgb,var(--ds-cloud) 36%,transparent);--rim2:color-mix(in srgb,var(--ds-cloud) 45%,transparent);--holefill:var(--ds-night);--fill:var(--ds-cloud);--fg:var(--ds-cloud);--fg2:var(--ds-ink);--chip:var(--ds-cloud);--chipfg:var(--ds-ink);--sa:var(--ds-ink);--sb:var(--ds-cloud)} .ds-dark .ds-btn.ds-ghost:hover{--chip:var(--ds-brass);--chipfg:var(--ds-ink)}
.ds-dark .ds-btn.ds-solid{--fill:var(--ds-cloud);--fg2:var(--ds-ink);--sa:var(--ds-ink);--sb:var(--ds-cloud);--holefill:var(--ds-night)}
/* TEXT-SAFE accents: tangerine reads as large text on paper only — small accent text uses the darker --ds-acc; on walnut a lighter tangerine. */
.hk{--ds-acc:color-mix(in srgb,var(--ds-brass) 66%,var(--ds-ink));--ds-acc-lg:var(--ds-brass);--ds-mut:color-mix(in srgb,var(--ds-stone) 60%,var(--ds-ink));--ds-acc-d:color-mix(in srgb,var(--ds-brass) 80%,var(--ds-cloud))}
.ds-lt,.ds .ds-lt{--ds-acc:color-mix(in srgb,var(--ds-brass) 66%,var(--ds-ink));--ds-acc-lg:var(--ds-brass);--ds-mut:color-mix(in srgb,var(--ds-stone) 60%,var(--ds-ink))}
.ds-dark,.ds.ds-dark{--ds-acc:color-mix(in srgb,var(--ds-brass) 80%,var(--ds-cloud));--ds-acc-lg:color-mix(in srgb,var(--ds-brass) 85%,var(--ds-cloud));--ds-mut:color-mix(in srgb,var(--ds-stone) 55%,var(--ds-cloud))}
/* LED segment strip (status rows) */
.ds-bar{width:26px;height:10px;flex:none;display:inline-block;background:repeating-linear-gradient(90deg,currentColor 0 1px,transparent 1px 3px,currentColor 3px 5px,transparent 5px 6px,currentColor 6px 7px,transparent 7px 9px,currentColor 9px 10px,transparent 10px 12px)}
@media (prefers-reduced-motion:reduce){.ds *,.sth *{animation-duration:.01ms!important;transition-duration:.01ms!important}}
.dscs-next:focus-visible,.dspo-next:focus-visible,.dsw-row a:focus-visible,.dso-band:focus-visible,.dso-mq a:focus-visible{outline-offset:-4px!important;box-shadow:none!important}`),
      M.Boolean,
      M.Number,
      (ge = (e) =>
        String(e || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => {
            let t = e.match(/^\*(.+?)\*([.,!?;:’']*)$/);
            return t
              ? { t: t[1], tail: t[2], acc: !0 }
              : { t: e.replace(/\*/g, ``), tail: ``, acc: !1 };
          })),
      (J = (e) =>
        String(e || ``)
          .replace(/\*/g, ``)
          .replace(/\s*\|\s*/g, ` `)
          .replace(/\s+/g, ` `)
          .trim()),
      (_e = ({
        text: e,
        on: t,
        D: n,
        tag: r = `h2`,
        size: i = `clamp(40px,4.8vw,72px)`,
        lh: a = 0.92,
        delay: o = 0,
        step: s = 55,
        style: l,
        className: f,
      }) => {
        let p = r,
          m = 0;
        return d(p, {
          className: `ds-hd${t ? ` is-on` : ``}${f ? ` ` + f : ``}`,
          "aria-label": J(e),
          style: { ...n, fontSize: i, lineHeight: a, ...(l || {}) },
          children: String(e)
            .split(`|`)
            .map((e, t) =>
              d(
                `span`,
                {
                  className: `ds-hd-l`,
                  "aria-hidden": !0,
                  children: ge(e).map((e, t) => {
                    let n = o + m++ * s;
                    return u(
                      `span`,
                      {
                        className: `ds-hd-w${e.acc ? ` is-accw` : ``}`,
                        children: [
                          d(`span`, {
                            className: `ds-hd-i${e.acc ? ` is-acc` : ``}`,
                            style: { transitionDelay: `${n}ms`, "--pd": `${n + 500}ms` },
                            children: e.acc
                              ? u(`span`, {
                                  className: `ds-it`,
                                  children: [
                                    e.t,
                                    e.tail,
                                    d(`svg`, {
                                      className: `ds-spark`,
                                      viewBox: `0 0 24 24`,
                                      "aria-hidden": !0,
                                      children: d(`path`, {
                                        d: `M12 1.5C12.9 8 16 11.1 22.5 12 16 12.9 12.9 16 12 22.5 11.1 16 8 12.9 1.5 12 8 11.1 11.1 8 12 1.5Z`,
                                      }),
                                    }),
                                  ],
                                })
                              : u(c, { children: [e.t, e.tail] }),
                          }),
                          ` `,
                        ],
                      },
                      t
                    );
                  }),
                },
                t
              )
            ),
        });
      }),
      (Y = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (ve = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${I} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
.ds-eb{display:inline-flex;align-items:center;gap:10px;width:max-content;max-width:100%;margin:0;padding:0;background:none;color:var(--ds-ink);font-size:11.5px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;opacity:0;translate:0 10px;transition:opacity .8s ease,translate .9s cubic-bezier(.2,.8,.2,1)} .ds-eb.is-on{opacity:1;translate:0 0} .ds-eb::before{content:"[";opacity:.5} .ds-eb::after{content:"]";opacity:.5}
.ds-eb i{width:7px;height:7px;display:block;flex:none;background:var(--ds-brass);order:-1;margin-right:2px}
.ds-dark .ds-eb{color:var(--ds-cloud)}
.ds-hd{margin:0;letter-spacing:.005em;text-wrap:balance;text-transform:uppercase;font-weight:400!important} .ds-hd-l{display:block}
.ds-hd-w{display:inline-block;overflow:hidden;vertical-align:top;padding:0 .05em .17em;margin:0 -.05em -.17em;white-space:pre}
.ds-hd-i{position:relative;display:inline-block;translate:0 108%;transition:translate 1s cubic-bezier(.2,.75,.2,1)}
.ds-hd.is-on .ds-hd-i{translate:0 0}
.ds-hd-w.is-accw{overflow:visible;clip-path:inset(-.6em -.6em .02em -.2em)}
.ds-it{position:relative;color:var(--ds-acc-lg)} .ds-dark .ds-it{color:var(--ds-brass)}
.ds-spark{display:none}

.ds-um{position:relative;overflow:hidden;transition:clip-path 1.35s cubic-bezier(.7,0,.2,1);background:color-mix(in srgb,var(--ds-stone) 22%,transparent)}
.ds-um img{position:absolute;left:0;top:-9%;width:100%;height:118%;display:block;object-fit:cover;scale:1.28;translate:0 calc((var(--sp,.5) - .5)*var(--par,1)*-7%);transition:scale 1.9s cubic-bezier(.16,.84,.24,1);user-select:none}
.ds-um.is-on img{scale:1}
/* diagonal cuts: the section hangs over its neighbour and is cut on a slope (clip-path, so the neighbour shows through) */
.ds-cut-t{margin-top:calc(var(--cut,7vw)*-1);clip-path:polygon(0 var(--cut,7vw),100% 0,100% 100%,0 100%);padding-top:var(--cut,7vw)}
.ds-cut-b{margin-bottom:calc(var(--cut,7vw)*-1);padding-bottom:var(--cut,7vw)}
.ds-cut-t.ds-cut-b{clip-path:polygon(0 var(--cut,7vw),100% 0,100% calc(100% - var(--cut,7vw)),0 100%)}
.ds-cut-b:not(.ds-cut-t){clip-path:polygon(0 0,100% 0,100% calc(100% - var(--cut,7vw)),0 100%)}
@media (max-width:1099px){.ds-wrap{--pad:32px}}
@media (max-width:699px){.ds-wrap{--pad:20px}}
@media (prefers-reduced-motion:reduce){.ds-hd-i{translate:0 0!important} .ds-spark{scale:1!important;rotate:0deg!important;animation:none!important} .ds-um{clip-path:none!important} .ds-um img{scale:1!important;translate:0 0!important}}
`),
      (ye = `
.ds44{position:relative;min-height:100svh;background:var(--ds-night);color:var(--ds-bone);padding:calc(72px + clamp(40px,5vw,80px)) 0 clamp(60px,7vw,100px);overflow:hidden;display:flex;align-items:center;isolation:isolate;z-index:11}
.ds44-wall{position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(120% 90% at 70% 20%,color-mix(in srgb,var(--ds-pine) 70%,var(--ds-night)),var(--ds-night) 60%)}
.ds44-wall::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0 118px,color-mix(in srgb,var(--ds-cloud) 3%,transparent) 118px 119px);opacity:.7}
.ds44-spot{position:absolute;inset:-20%;background:radial-gradient(36% 32% at 66% 46%,color-mix(in srgb,var(--ds-brass) 16%,transparent),transparent 70%);opacity:0;transition:opacity 1.2s .2s} .is-in .ds44-spot{opacity:1}
.ds44-wrap{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(24px,4vw,64px);align-items:center;width:100%}
.ds44-copy{display:flex;flex-direction:column;align-items:flex-start;gap:22px}
.ds44-eb{display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)} .ds44-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.ds44 .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.04em} .ds44 .ds-it{color:var(--ds-brass)}
.ds44-sub{margin:0;max-width:480px;font-size:17px;line-height:1.55;color:color-mix(in srgb,var(--ds-bone) 76%,transparent)}
.ds44-btns{display:flex;flex-wrap:wrap;gap:14px 12px;margin-top:4px}
/* the empty shelf */
.ds44-scene{position:relative;min-height:480px;perspective:1500px;perspective-origin:50% 8%;display:flex;align-items:center;justify-content:center}
.ds44-unit{position:relative;width:min(100%,560px);transform-style:preserve-3d;transform:rotateX(7deg) rotateY(-16deg);display:flex;flex-direction:column;gap:30px;padding:60px 0 20px}
.ds44-row{position:relative;transform-style:preserve-3d;height:120px}
.ds44-plank{position:absolute;left:0;right:0;bottom:0;height:14px;transform-style:preserve-3d;opacity:0;translate:70px 0;transition:opacity .9s ease calc(var(--p)*160ms),translate 1.1s cubic-bezier(.2,.8,.2,1) calc(var(--p)*160ms)} .is-in .ds44-plank{opacity:1;translate:0 0}
.ds44-plank i{position:absolute;display:block}
.ds44-plank .pt{left:0;right:0;top:0;height:150px;background:linear-gradient(180deg,color-mix(in srgb,var(--ds-pine) 60%,var(--ds-cloud) 12%),color-mix(in srgb,var(--ds-pine) 85%,var(--ds-night)));transform-origin:50% 0;transform:translateZ(75px) rotateX(-90deg)}
.ds44-plank .pf{left:0;right:0;top:0;bottom:0;background:linear-gradient(180deg,color-mix(in srgb,var(--ds-pine) 70%,var(--ds-night)),var(--ds-night));transform:translateZ(75px);box-shadow:0 22px 40px -10px rgba(0,0,0,.6)}
.ds44-plank .pl{left:0;top:0;width:150px;height:14px;background:var(--ds-night);transform-origin:0 50%;transform:translateZ(75px) rotateY(90deg)}
.ds44-dust{position:absolute;left:10%;right:10%;bottom:14px;height:1px;background:color-mix(in srgb,var(--ds-bone) 6%,transparent);transform:translateZ(20px)}
/* the dangling tag */
.ds44-tag{position:absolute;left:38%;top:-28px;z-index:3;transform:translateZ(90px);transform-origin:8px 0;opacity:0;transition:opacity .5s .6s} .is-in .ds44-tag{opacity:1;animation:ds44-sw 4s ease-in-out .6s infinite alternate}
@keyframes ds44-sw{0%{rotate:-6deg}100%{rotate:5deg}}
.ds44-str{position:absolute;left:7px;top:0;width:1.5px;height:44px;background:color-mix(in srgb,var(--ds-bone) 55%,transparent)}
.ds44-tin{position:relative;display:flex;flex-direction:column;gap:2px;margin-top:42px;padding:12px 16px 12px 24px;background:var(--ds-bone);color:var(--ds-ink);clip-path:polygon(14px 0,100% 0,100% 100%,14px 100%,0 12px);box-shadow:0 20px 40px -14px rgba(0,0,0,.7)}
.ds44-hole{position:absolute;left:7px;top:6px;width:6px;height:6px;border-radius:50%;background:var(--ds-night);box-shadow:0 0 0 1.5px color-mix(in srgb,var(--ds-ink) 30%,transparent)}
.ds44-tin b{font-size:34px;line-height:1;font-weight:900;letter-spacing:-.03em;color:var(--ds-acc)} .ds44-tin small{font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-mut)}
/* tablet + phone */
.ds44.is-tab .ds44-wrap{grid-template-columns:1fr;gap:20px} .ds44.is-tab .ds44-scene{min-height:400px}
.ds44.is-ph{padding-top:calc(64px + 30px);min-height:0} .ds44.is-ph .ds44-wrap{grid-template-columns:1fr;gap:10px} .ds44.is-ph .ds44-scene{min-height:300px;perspective:900px} .ds44.is-ph .ds44-unit{width:min(100%,320px);gap:16px;padding:40px 0 0} .ds44.is-ph .ds44-row{height:70px} .ds44.is-ph .ds44-tin b{font-size:26px}
.ds44.is-rm .ds44-tag,.ds44.is-still .ds44-tag{animation:none;opacity:1} .ds44.is-rm .ds44-plank,.ds44.is-still .ds44-plank{transition:none;opacity:1;translate:0 0}`),
      O(P, {
        ...K,
        eyebrow: { type: M.String, title: `Eyebrow`, defaultValue: `Out of stock` },
        title: {
          type: M.String,
          title: `Title`,
          description: `*word* = accent, | = line break`,
          defaultValue: `That shelf is|*empty.*`,
        },
        copy: {
          type: M.String,
          title: `Copy`,
          displayTextArea: !0,
          defaultValue: `The page you asked for was moved, sold out or never existed. The rest of the shelf is right here.`,
        },
        tagLabel: { type: M.String, title: `Tag`, defaultValue: `404` },
        tagLine: { type: M.String, title: `Tag line`, defaultValue: `Not on the shelf` },
        button1: { type: M.String, title: `Button 1`, defaultValue: `Back to the shelf` },
        button1Link: { type: M.Link, title: `Button 1 link`, defaultValue: `/products` },
        button2: { type: M.String, title: `Button 2`, defaultValue: `Home` },
        button2Link: { type: M.Link, title: `Button 2 link`, defaultValue: `/` },
        ...me,
        ...G,
      }));
  }),
  xe,
  Se,
  Ce,
  X,
  we,
  Te,
  Z,
  Ee,
  De,
  Q,
  $;
e(() => {
  (p(),
    S(),
    y(),
    m(),
    be(),
    oe(),
    (xe = j(P)),
    (Se = {
      GN_QEyFpA: `(max-width: 809.98px)`,
      IxfN1XjR0: `(min-width: 810px) and (max-width: 1199.98px)`,
      RS7WgMx4v: `(min-width: 1200px)`,
    }),
    (Ce = []),
    (X = `framer-ATQAC`),
    (we = {
      GN_QEyFpA: `framer-v-1yzgygr`,
      IxfN1XjR0: `framer-v-ixbp20`,
      RS7WgMx4v: `framer-v-it111a`,
    }),
    (Te = (e, t, n) => (e && t ? `position` : n)),
    (Z = { Desktop: `RS7WgMx4v`, Phone: `GN_QEyFpA`, Tablet: `IxfN1XjR0` }),
    (Ee = ({ value: e }) =>
      C()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (De = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `RS7WgMx4v`,
    })),
    (Q = D(
      f(function (e, r) {
        let i = s(null),
          a = r ?? i,
          o = n(),
          { activeLocale: c, setLocale: f } = A();
        ne();
        let { style: p, className: m, layoutId: h, variant: y, ...b } = De(e);
        re(l(() => ae({}, c), [c]));
        let [S, C] = T(y, Se, !1),
          D = x(X),
          O = t(k)?.isLayoutTemplate,
          j = !!t(g)?.transition?.layout,
          M = Te(O, j);
        return (
          w({}),
          d(k.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Z,
              primaryVariantId: `RS7WgMx4v`,
              variantClassNames: we,
            },
            children: u(v, {
              id: h ?? o,
              children: [
                d(Ee, { value: `html body { background: rgb(255, 255, 255); }` }),
                d(_.div, {
                  ...b,
                  className: x(D, `framer-it111a`, m),
                  ref: a,
                  style: { ...p },
                  children: d(_.div, {
                    className: `framer-tuvc4h`,
                    "data-framer-name": `S0 Ds404`,
                    layout: M,
                    children: d(te, {
                      children: d(E, {
                        className: `framer-tqtoth-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `Ds404`,
                        isAuthoredByUser: !0,
                        name: `Ds404`,
                        nodeId: `zkiBg3sUP`,
                        scopeId: `WmmAEcbjh`,
                        children: d(ee, {
                          breakpoint: S,
                          overrides: {
                            GN_QEyFpA: { bpHint: `phone` },
                            IxfN1XjR0: { bpHint: `tablet` },
                          },
                          children: d(P, {
                            bodyFont: {
                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                            },
                            bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                            bpHint: `desktop`,
                            brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                            button1: `Back to the shelf`,
                            button1Link: `/products`,
                            button2: `Home`,
                            button2Link: `/`,
                            cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                            copy: `The page you asked for was moved, sold out or never existed. The rest of the shelf is right here.`,
                            customFonts: !1,
                            displayFont: {
                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                            },
                            eyebrow: `Out of stock`,
                            fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                            height: `100%`,
                            id: `zkiBg3sUP`,
                            ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                            layoutId: `zkiBg3sUP`,
                            monoFont: {
                              fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                            },
                            name: `Ds404`,
                            night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                            pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                            stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                            style: { width: `100%` },
                            tagLabel: `404`,
                            tagLine: `Not on the shelf`,
                            title: `That shelf is|*empty.*`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
                d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-ATQAC.framer-avd9nd, .framer-ATQAC .framer-avd9nd { display: block; }`,
        `.framer-ATQAC.framer-it111a { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-ATQAC .framer-tuvc4h { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ATQAC .framer-tqtoth-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-ATQAC.framer-it111a { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-ATQAC.framer-it111a { width: 390px; }}`,
      ],
      `framer-ATQAC`
    )),
    (Q.displayName = `404`),
    (Q.defaultProps = { height: 1080, width: 1200 }),
    ie(
      Q,
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
        ...xe,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerWmmAEcbjh`,
          slots: [],
          annotations: {
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `false`,
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"IxfN1XjR0":{"layout":["fixed","auto"]},"GN_QEyFpA":{"layout":["fixed","auto"]}}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicWidth: `1200`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `1080`,
            framerComponentViewportWidth: `true`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, Ce as queryParamNames };
//# sourceMappingURL=3I-M3mse93VHa57ZV-Hs8gtmxmpAwuQXqrDlnjwTqz4.CIxgA6D5.mjs.map
