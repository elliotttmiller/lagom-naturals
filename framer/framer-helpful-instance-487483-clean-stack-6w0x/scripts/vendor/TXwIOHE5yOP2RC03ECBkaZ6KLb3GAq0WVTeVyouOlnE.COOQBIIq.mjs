import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  E as r,
  I as i,
  R as a,
  _ as o,
  b as s,
  j as c,
  l,
  o as u,
  p as d,
  s as f,
  w as p,
  y as m,
} from "./react.iNMCLRE-.mjs";
import { a as h, k as g, r as _, t as v } from "./motion.dK94hszq.mjs";
import {
  $ as y,
  C as b,
  P as x,
  Q as S,
  X as C,
  Z as w,
  a as T,
  at as E,
  b as D,
  c as O,
  et as ee,
  i as k,
  k as A,
  o as j,
  q as M,
  tt as N,
  v as P,
  y as te,
} from "./framer.BNAppio8.mjs";
import ne, { t as re } from "./AcEnI-3ncsNylG8bAIcZ9NfzED9bLcpn2Jh0a99v9ZI.RnHTCPVP.mjs";
function ie() {
  m(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = I), document.head.appendChild(e));
  }, []);
}
function ae() {
  let e = y(),
    [t, n] = o(!1);
  return (
    m(() => {
      !e && P.current() !== P.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function oe(e, t) {
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
function se(e, t, n) {
  if (a === void 0) return () => {};
  let r = a;
  if (!r.__dsTick) {
    r.__dsTick = { pre: new Set(), subs: new Set(), reads: new Set(), raf: 0 };
    let e = (t) => {
      let n = r.__dsTick;
      (n.pre.forEach((e) => e(t)),
        n.reads.forEach((e) => e(t)),
        n.subs.forEach((e) => e(t)),
        (n.raf = requestAnimationFrame(e)));
    };
    r.__dsTick.raf = requestAnimationFrame(e);
  }
  return (
    r.__dsTick.subs.add(e),
    t && r.__dsTick.reads.add(t),
    n && r.__dsTick.pre.add(n),
    () => {
      (r.__dsTick.subs.delete(e), t && r.__dsTick.reads.delete(t), n && r.__dsTick.pre.delete(n));
    }
  );
}
function ce(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: V(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? z(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: V(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? z(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: V(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? z(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function F(e) {
  let {
      kicker: t = `Owner guide · delete before publishing`,
      heading: n = `Start *here.*`,
      intro:
        r = `How to make Shelfline yours, about twenty minutes from remix to launch. Stuck on anything? We reply fast, usually the same day.`,
      supportEmail: i = `solofoundryhq@gmail.com`,
      supportLabel: c = `Email support`,
      indexLabel: d = `Contents`,
      stepLabel: f = `Step`,
      addonTitle: p = `Optional add-on: the SoloFoundry Assistant ($29/mo)`,
      addonText:
        h = `A chat bubble for your store, trained on your own published pages. It answers what is inside a product, which bundle fits and how the licence works from your Products, Bundles, Courses, FAQ and pages. Publish your site, email us your address, and we send one tenant ID to paste into the Assistant component. This template does not include it.`,
      bpHint: g = `auto`,
    } = e,
    _ = W(e),
    { D: v, B: y, M: b } = ce(e);
  ie();
  let x = ae(),
    S = s(null),
    C = s(null),
    w = s(null),
    { w: T } = oe(S, g),
    E = T < 810,
    D = T >= 810 && T < 1100,
    [O, ee] = o(Y[0].id);
  (m(() => {
    if (!x) return;
    let e = document.querySelector(`meta[name="robots"]`);
    (e || ((e = document.createElement(`meta`)), (e.name = `robots`), document.head.appendChild(e)),
      (e.content = `noindex, nofollow`));
  }, [x]),
    m(() => {
      if (!x || !C.current) return;
      let e = C.current,
        t = 0,
        n = 1,
        r = 1,
        i = Y[0].id,
        o = ``;
      return se(
        () => {
          (w.current &&
            (w.current.style.transform = `scaleY(${H((r * 0.3 - t) / Math.max(1, n - r * 0.5)).toFixed(4)})`),
            i !== o && ((o = i), ee(i)));
        },
        () => {
          let o = e.getBoundingClientRect();
          ((t = o.top), (n = o.height), (r = a.innerHeight || 1));
          let s = Y[0].id;
          for (let e of Y) {
            let t = document.getElementById(`dssh-` + e.id);
            t && t.getBoundingClientRect().top < r * 0.32 && (s = e.id);
          }
          i = s;
        }
      );
    }, [x]));
  let k = (e, t) => {
      let n = document.getElementById(`dssh-` + t);
      if (!n) return;
      e.preventDefault();
      let r = n.getBoundingClientRect().top + a.scrollY - 24,
        i = a;
      i.lenis && i.lenis.scrollTo
        ? i.lenis.scrollTo(r)
        : a.scrollTo({ top: r, behavior: `smooth` });
    },
    A = (e) => String(e + 1).padStart(2, `0`),
    j = String(n).match(/^(.*?)\*(.+?)\*(.*)$/),
    M = j ? j[1] : n,
    N = j ? j[2] : ``,
    P = j ? j[3] : ``;
  return l(`section`, {
    ref: S,
    className: `ds dssh${E ? ` is-ph` : D ? ` is-tab` : ``}`,
    "data-ds-w": T,
    style: { ...G(_), ...y, ...(e.style || {}) },
    children: [
      u(`link`, { rel: `stylesheet`, href: I }),
      u(`style`, { dangerouslySetInnerHTML: { __html: ue + de } }),
      l(`div`, {
        className: `dssh-w`,
        children: [
          l(`header`, {
            className: `dssh-head`,
            children: [
              l(`span`, {
                className: `dssh-k`,
                style: b,
                children: [u(`i`, { "aria-hidden": !0 }), t],
              }),
              l(`h1`, {
                className: `dssh-h1`,
                style: v,
                children: [M, N && u(`em`, { children: N }), P],
              }),
              u(`p`, { className: `dssh-intro`, children: r }),
              l(`div`, {
                className: `dssh-cta`,
                children: [
                  u(le, { href: `mailto:${i}`, label: c, kind: `solid` }),
                  u(`a`, { className: `dssh-mail`, href: `mailto:${i}`, style: b, children: i }),
                ],
              }),
            ],
          }),
          l(`div`, {
            className: `dssh-in`,
            children: [
              l(`nav`, {
                className: `dssh-toc`,
                "aria-label": `Guide contents`,
                style: b,
                children: [
                  u(`p`, { children: d }),
                  l(`div`, {
                    className: `dssh-list`,
                    children: [
                      u(`span`, {
                        className: `dssh-rail`,
                        "aria-hidden": !0,
                        children: u(`span`, { ref: w }),
                      }),
                      Y.map((e, t) =>
                        l(
                          `a`,
                          {
                            href: `#dssh-${e.id}`,
                            className: O === e.id ? `is-on` : ``,
                            onClick: (t) => k(t, e.id),
                            "aria-current": O === e.id ? `step` : void 0,
                            children: [
                              l(`i`, { children: [`[`, A(t), `]`] }),
                              u(`span`, { children: e.t }),
                            ],
                          },
                          e.id
                        )
                      ),
                    ],
                  }),
                ],
              }),
              l(`div`, {
                ref: C,
                className: `dssh-body`,
                children: [
                  Y.map((e, t) =>
                    l(
                      `article`,
                      {
                        id: `dssh-${e.id}`,
                        className: `dssh-sec`,
                        children: [
                          l(`p`, {
                            className: `dssh-n`,
                            style: b,
                            children: [u(`i`, { "aria-hidden": !0 }), `[`, f, ` `, A(t), `]`],
                          }),
                          u(`h2`, { style: v, children: e.t }),
                          u(`p`, { className: `dssh-lead`, children: e.lead }),
                          e.rows
                            ? u(`dl`, {
                                children: e.rows.map(([e, t], n) =>
                                  l(
                                    `div`,
                                    {
                                      children: [
                                        u(`dt`, { style: b, children: e }),
                                        u(`dd`, { children: t }),
                                      ],
                                    },
                                    n
                                  )
                                ),
                              })
                            : null,
                          e.steps
                            ? u(`ol`, {
                                children: e.steps.map((e, t) =>
                                  l(
                                    `li`,
                                    {
                                      children: [
                                        u(`i`, { style: b, children: A(t) }),
                                        u(`span`, { children: e }),
                                      ],
                                    },
                                    t
                                  )
                                ),
                              })
                            : null,
                          e.note ? u(`p`, { className: `dssh-note`, children: e.note }) : null,
                        ],
                      },
                      e.id
                    )
                  ),
                  l(`aside`, {
                    className: `dssh-addon`,
                    children: [u(`b`, { style: v, children: p }), u(`p`, { children: h })],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  le,
  ue,
  Y,
  de,
  fe = e(() => {
    (i(),
      f(),
      p(),
      x(),
      (I = `../../styles/css2-a59a76.css`),
      (L = `clamp(1280px, 92vw, 1520px)`),
      (R = (e) => {
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
      (z = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (B = (e) => {
        let t = R(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (V = (e, t, n, r) => {
        let i = e ? B(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (H = (e) => Math.min(1, Math.max(0, e))),
      (U = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (W = (e) => ({
        bone: e.bone || U.bone,
        ink: e.ink || U.ink,
        brass: e.brass || U.brass,
        pine: e.pine || U.pine,
        fog: e.fog || U.fog,
        stone: e.stone || U.stone,
        cloud: e.cloud || U.cloud,
        night: e.night || U.night,
      })),
      (G = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (K = {
        bone: { type: j.Color, title: `Paper`, defaultValue: U.bone },
        ink: { type: j.Color, title: `Ink`, defaultValue: U.ink },
        brass: { type: j.Color, title: `Accent`, defaultValue: U.brass },
        pine: { type: j.Color, title: `Deep`, defaultValue: U.pine },
        fog: { type: j.Color, title: `Line`, defaultValue: U.fog },
        stone: { type: j.Color, title: `Muted`, defaultValue: U.stone },
        cloud: { type: j.Color, title: `White`, defaultValue: U.cloud },
        night: { type: j.Color, title: `Dark`, defaultValue: U.night },
      }),
      (q = {
        customFonts: {
          type: j.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: j.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: j.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: j.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (J = {
        bpHint: {
          type: j.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (le = ({
        href: e,
        label: t,
        kind: n = `solid`,
        arrow: r = !0,
        style: i,
        className: a,
        onClick: o,
        ariaLabel: s,
        cur: c,
        icon: d,
      }) =>
        u(`a`, {
          className: `ds-btn ds-${n}${r ? `` : ` ds-noarr`}${a ? ` ` + a : ``}`,
          "data-mag": !0,
          "data-cur": c || `go`,
          href: e,
          onClick: o,
          "aria-label": s,
          style: i,
          children: l(`span`, {
            className: `ds-tag`,
            children: [
              u(`span`, { className: `ds-hole`, "aria-hidden": !0 }),
              u(`span`, { className: `ds-fill`, "aria-hidden": !0 }),
              d,
              l(`span`, {
                className: `ds-lbl`,
                children: [
                  u(`span`, { className: `ds-l1`, children: t }),
                  u(`span`, { className: `ds-l2`, "aria-hidden": !0, children: t }),
                ],
              }),
              r &&
                u(`span`, {
                  className: `ds-arr`,
                  "aria-hidden": !0,
                  children: l(`svg`, {
                    width: `13`,
                    height: `13`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2.2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [
                      u(`path`, { d: `M6 8h12l-1 12H7z` }),
                      u(`path`, { d: `M9 8V6a3 3 0 0 1 6 0v2` }),
                    ],
                  }),
                }),
            ],
          }),
        })),
      (ue = `
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
      j.Boolean,
      j.Number,
      (Y = [
        {
          id: `map`,
          t: `Where everything lives`,
          lead: `Shelfline is one Site Layout, a set of pages and five CMS page types. The header (with the cart drawer), the footer, the loader, the page transition, smooth scrolling and the CMS connection sit in the layout, so every page gets them automatically.`,
          rows: [
            [
              `Site Layout`,
              `Pages panel → Layouts → Site Layout. The header (links, the Products drawer, the phone menu, the cart drawer, the Free guide button, site-wide fonts), the footer, the loader and the page transition live here. Hidden layers named “CMS Bridge · …” and the smooth-scroll layer connect the CMS and the scrolling. Leave them in place.`,
            ],
            [`Home`, `/ : the shelf hero, then the homepage sections down to the footer.`],
            [
              `Products`,
              `/products lists every product with filters. /products/:slug is a page for every Products row. /types/:slug is a page for every aisle (Types row).`,
            ],
            [
              `Bundles · Courses`,
              `/bundles and /bundles/:slug for every Bundles row; /courses and /courses/:slug for every Courses row, with its Lessons.`,
            ],
            [`Notes`, `/notes lists every post. /notes/:slug is a page for every Posts row.`],
            [
              `Shop flow`,
              `/checkout takes the cart (or one product from a Buy button) to /thank-you. /free is the lead magnet page.`,
            ],
            [
              `Other pages`,
              `/reviews · /about · /faq · /contact · /affiliates · /licence · /refunds · /privacy · /terms · the 404 page · this /start-here guide.`,
            ],
          ],
        },
        {
          id: `checkout`,
          t: `Connect your checkout`,
          lead: `The demo checkout page charges nothing. Your real store sells through a hosted checkout link per product.`,
          rows: [
            [
              `Per product`,
              `Products CMS → the Checkout field: paste your Lemon Squeezy, Gumroad, Stripe Payment Link or Paddle checkout URL for that product. Every Buy button on the shelf, the product page and the aisle page uses it.`,
            ],
            [
              `Bundles · Courses`,
              `The bundle and course pages have a Checkout link control on the section; leave it empty to use the demo checkout page.`,
            ],
            [
              `The cart`,
              `The cart is a demo (it remembers items in the visitor's browser). Its Checkout button is a control on the header: point it at your own cart or checkout page, or at /checkout to keep the demo flow.`,
            ],
            [
              `Thank-you page`,
              `/thank-you has a Download link control: set it to your file host, or delete the page if your checkout provider delivers files.`,
            ],
          ],
        },
        {
          id: `colours`,
          t: `Your colours`,
          lead: `Eight colour Styles repaint the whole site at once: every section, the header, the receipts, the price tags, the forms and the footer.`,
          rows: [
            [`Where`, `Assets panel → Colors. Change the swatch, not the sections.`],
            [`Paper`, `The oat page background used by the light sections and the receipts.`],
            [`Ink`, `The main text on light sections and the dark button fills.`],
            [
              `Accent`,
              `The tangerine: price tags, buttons, stamps, accent words and the free-guide band. Pick a colour that dark text reads on; small text on paper uses a darker mix by itself.`,
            ],
            [
              `Deep · Dark`,
              `The walnut: shelf planks, dark bands and the night sections (hero, window, bundles, reviews, footer).`,
            ],
            [`Line · Muted · White`, `Hairlines, secondary text, and the card and form surfaces.`],
          ],
          note: `Every section also has its own colour controls. Leave them bound to the Styles unless you want one section to look different.`,
        },
        {
          id: `fonts`,
          t: `Your fonts`,
          lead: `One switch changes the fonts on every page. The defaults are Gabarito (display), Manrope (body) and Azeret Mono (prices, labels and receipts).`,
          steps: [
            `Open the Site Layout and select the header.`,
            `Turn on Custom Fonts and pick a Display, Body and Mono font.`,
            `Every section follows. A section's own Custom Fonts switch overrides it for that section only.`,
          ],
        },
        {
          id: `cms`,
          t: `The nine CMS collections`,
          lead: `Everything that repeats is in the CMS. Add a row and it appears everywhere it belongs. A new Products, Types, Bundles, Courses or Posts row also gets its own page.`,
          rows: [
            [
              `Site`,
              `One row: Name (the logo, the loader, the footer), Descriptor, Tagline, Email (the contact card), Phone, City and Time Zone (the local-time chip), Signup Link, Socials (Label:url, …), Announcement, Address.`,
            ],
            [
              `Products`,
              `Name, Kind (the aisle it belongs to), Price, Was, Format (e.g. PDF · 212 pages), Short, Includes (a;b;c), Checkout (your hosted checkout link), Badge (Bestseller / New), Sold, Rating, Colour (the object's colour), Shape (book · box · tin · folder · notebook · cards · kit), Cover (4:5), Order. Products drive the hero shelf, the product pages, the window, the drawer and the cart.`,
            ],
            [
              `Types`,
              `The aisles: Name, Count, Blurb, Kinds (the Product Kinds that belong here, a;b;c), Cover (4:5), Order.`,
            ],
            [
              `Bundles`,
              `Name, Price, Was, Save, Items (product slugs, a;b;c), Blurb, Colour, Button, Cover (4:3), Order. The receipt maths reads the products' prices.`,
            ],
            [
              `Courses · Lessons`,
              `Courses: Name, Price, Length, Lessons, Level, Summary, Product (the matching Products slug), Cover (4:3). Lessons: Title, Length, Module, Summary, Course (the course slug), Order.`,
            ],
            [
              `Reviews`,
              `Quote, Name, Role, Product (matches a Products name for the Bought link), Stars, Photo (1:1), Order.`,
            ],
            [
              `Posts`,
              `Title, Kind (the notes filter), Read Time, Summary, Body (## headings, - bullets, > quotes), Author, Date, Cover (16:9), Order.`,
            ],
            [
              `FAQ`,
              `Question, Answer, Pages (the pages a question shows on: home, products, courses …), Order.`,
            ],
          ],
          note: `Order numbers sort every list. Deleting a row never breaks a page.`,
        },
        {
          id: `headings`,
          t: `Headings and labels`,
          lead: `Headings accept two small codes, and most repeating text is one control.`,
          rows: [
            [`*word*`, `Paints that word in the Accent colour.`],
            [`|`, `Forces a line break.`],
            [
              `a;b;c`,
              `Lists in one control (specs, facts, steps, terms) are separated by semicolons; parts inside a row use | (Label|Value).`,
            ],
            [
              `Labels`,
              `Eyebrows, button words, stamps, receipt lines, empty states and hints are all controls on each section.`,
            ],
          ],
        },
        {
          id: `photos`,
          t: `Photo sizes`,
          lead: `Export as WebP, about 1200 px on the long side and under 250 KB. The site serves smaller copies to phones by itself.`,
          rows: [
            [
              `Products · Types`,
              `Covers 4:5, 1200×1500. They are drawn over the product's Colour, so strong shapes work better than colour.`,
            ],
            [`Bundles · Courses`, `Covers 4:3, 1200×900.`],
            [`Reviews`, `Square portraits, 600×600.`],
            [`Posts`, `Covers 16:9, 1600×900.`],
            [
              `Home · About`,
              `Two studio photos on the home Behind-the-counter section (portrait 4:5 and a square polaroid) and two on /about; each is a control on the section.`,
            ],
          ],
        },
        {
          id: `links`,
          t: `Links the site understands`,
          lead: `A few URL parameters make pages open ready.`,
          rows: [
            [`/products?type=slug`, `Opens the products page with that aisle selected.`],
            [
              `/checkout?product=slug`,
              `Opens the checkout with that one product (also ?bundle= and ?course=).`,
            ],
            [`/contact?subject=Licence question`, `Preselects the subject on the contact form.`],
            [
              `Promo code`,
              `The checkout's demo code and percentage are controls on the checkout section.`,
            ],
          ],
        },
        {
          id: `forms`,
          t: `Forms and email`,
          lead: `Three forms, no code.`,
          rows: [
            [
              `Contact`,
              `Set the Endpoint control to your form service URL (Formspree, Basin, Tally webhook …) to receive a JSON post. Leave it empty and the form opens the visitor's email app addressed to the Site email.`,
            ],
            [
              `Free guide · Newsletter`,
              `The free-guide form and the footer form have a Form action control: point it at your email tool's form URL, or keep /thank-you for a demo.`,
            ],
            [`Affiliates`, `The sign-up form on /affiliates works the same way.`],
          ],
        },
        {
          id: `motion`,
          t: `Motion`,
          lead: `Every effect is on by default and respects the visitor's reduced-motion setting.`,
          rows: [
            [
              `Loader`,
              `Stocking the shelf, once per session. The layer in the Site Layout has Enabled, Duration and Once per session controls.`,
            ],
            [
              `Page transition`,
              `The tag. Enabled and Duration on its layout layer; add data-pt-skip to any link you want to open plainly.`,
            ],
            [`Smooth scroll`, `The DsSmooth layer in the layout. Delete it for native scrolling.`],
            [
              `Scroll scenes`,
              `The window, the unboxing, the stacked bundles, the shutter and the footer curtain all read the scroll position; nothing to configure.`,
            ],
          ],
        },
        {
          id: `seo`,
          t: `Search and sharing`,
          lead: `Titles, descriptions and the share image are set once at site level and per page.`,
          rows: [
            [
              `Site`,
              `Site Settings → General: title, description, social image and favicons are filled in; replace them with yours.`,
            ],
            [
              `Pages`,
              `Every page has its own title and description in the page settings; the CMS pages take the item's name.`,
            ],
            [
              `This guide`,
              `/start-here is unlinked and set to no-index. Delete it before you publish.`,
            ],
          ],
        },
        {
          id: `launch`,
          t: `Launch checklist`,
          lead: `About twenty minutes from remix to launch.`,
          steps: [
            `Fill in the Site row, then your Products, Types, Bundles, Courses, Lessons, Reviews, Posts and FAQ.`,
            `Paste your checkout links into the Products' Checkout field.`,
            `Swap the photos (see Photo sizes).`,
            `Change the colours and fonts if you want to.`,
            `Update page titles, the social image and the favicons.`,
            `Connect your domain in Site Settings → Domains.`,
            `Upgrade to a paid Framer plan to remove the “Made in Framer” badge.`,
            `Delete this page, then publish.`,
          ],
        },
      ]),
      (de = `
.dssh{position:relative;background:var(--ds-bone);color:var(--ds-ink);min-height:100vh}
.dssh-w{width:${L};max-width:100%;margin:0 auto;padding:clamp(70px,9vw,120px) 48px clamp(90px,10vw,150px)} .dssh.is-tab .dssh-w{padding-left:32px;padding-right:32px} .dssh.is-ph .dssh-w{padding-left:20px;padding-right:20px}
.dssh-head{max-width:900px;margin-bottom:clamp(50px,6vw,90px)}
.dssh-k{display:inline-flex;align-items:center;gap:10px;padding:9px 14px;border-radius:999px;background:var(--ds-ink);color:var(--ds-bone);font-size:11px;letter-spacing:.12em;text-transform:uppercase} .dssh-k i{width:8px;height:8px;border-radius:50%;background:var(--ds-brass);animation:dssh-blink 1.2s steps(1) infinite} @keyframes dssh-blink{50%{opacity:.25}}
.dssh-h1{margin:26px 0 0;font-size:clamp(72px,9vw,150px);line-height:.9;letter-spacing:-.05em;text-transform:uppercase} .dssh-h1 em{font-style:normal;background:linear-gradient(90deg,var(--ds-brass),#B9A8FF);-webkit-background-clip:text;background-clip:text;color:transparent} .dssh.is-ph .dssh-h1{font-size:clamp(52px,15vw,76px)}
.dssh-intro{margin:28px 0 0;max-width:640px;font-size:19px;line-height:1.55}
.dssh-cta{display:flex;flex-wrap:wrap;align-items:center;gap:22px;margin-top:30px} .dssh-mail{font-size:12px;letter-spacing:.08em;color:var(--ds-ink)}
.dssh-in{display:grid;grid-template-columns:290px minmax(0,1fr);gap:clamp(30px,5vw,80px);align-items:start}
.dssh-toc{position:sticky;top:30px} .dssh-toc>p{margin:0 0 14px;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-stone)}
.dssh-list{position:relative;display:grid;padding-left:18px}
.dssh-rail{position:absolute;left:0;top:4px;bottom:4px;width:2px;background:color-mix(in srgb,var(--ds-ink) 12%,transparent)} .dssh-rail span{display:block;height:100%;background:var(--ds-brass);transform:scaleY(0);transform-origin:50% 0}
.dssh-toc a{display:grid;grid-template-columns:44px 1fr;gap:4px;align-items:baseline;padding:8px 10px;border-radius:12px;color:var(--ds-stone);text-decoration:none;font-size:12px;letter-spacing:.04em;line-height:1.35;transition:color .25s,background .25s}
.dssh-toc a i{font-style:normal;font-size:11px} .dssh-toc a:hover{color:var(--ds-ink)} .dssh-toc a.is-on{background:var(--ds-ink);color:var(--ds-cloud)} .dssh-toc a.is-on i{color:#B9A8FF}
.dssh-sec{scroll-margin-top:24px;margin-bottom:18px;padding:clamp(24px,3vw,40px);border-radius:24px;background:var(--ds-cloud);box-shadow:inset 0 0 0 1px var(--ds-fog)}
.dssh-n{display:flex;align-items:center;gap:9px;margin:0;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-brass) 70%,var(--ds-ink))} .dssh-n i{width:8px;height:8px;border-radius:50%;background:var(--ds-brass)}
.dssh-sec h2{margin:12px 0 12px;font-size:clamp(28px,2.6vw,42px);letter-spacing:-.04em;line-height:1}
.dssh-lead{margin:0 0 22px;max-width:740px;font-size:16.5px;line-height:1.6;color:color-mix(in srgb,var(--ds-ink) 86%,transparent)}
.dssh-sec dl{margin:0;display:grid;border-top:1px solid var(--ds-fog)} .dssh-sec dl div{display:grid;grid-template-columns:190px minmax(0,1fr);gap:20px;padding:14px 0;border-bottom:1px solid var(--ds-fog);margin:0}
.dssh-sec dt{font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;padding-top:3px;overflow-wrap:anywhere} .dssh-sec dd{margin:0;font-size:15.5px;line-height:1.6;overflow-wrap:anywhere}
.dssh-sec ol{list-style:none;margin:0;padding:0;display:grid;gap:12px} .dssh-sec li{display:grid;grid-template-columns:44px 1fr;gap:10px;align-items:start;font-size:15.5px;line-height:1.55} .dssh-sec li i{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:var(--ds-ink);font-style:normal;font-size:11.5px;color:var(--ds-cloud)}
.dssh-note{margin:20px 0 0;padding:14px 18px;border-radius:14px;background:var(--ds-bone);box-shadow:inset 3px 0 0 var(--ds-brass);font-size:15px;line-height:1.5}
.dssh-addon{padding:clamp(24px,3vw,40px);border-radius:24px;background:var(--ds-ink);color:var(--ds-cloud)} .dssh-addon b{display:block;font-size:clamp(24px,2vw,32px);letter-spacing:-.03em;line-height:1.05} .dssh-addon p{margin:12px 0 0;max-width:740px;font-size:15.5px;line-height:1.6;color:color-mix(in srgb,var(--ds-cloud) 78%,transparent)}
.dssh.is-tab .dssh-in{grid-template-columns:230px minmax(0,1fr)} .dssh.is-tab .dssh-sec dl div{grid-template-columns:1fr;gap:4px}
.dssh.is-ph .dssh-in{grid-template-columns:1fr} .dssh.is-ph .dssh-toc{position:relative;top:auto} .dssh.is-ph .dssh-list{grid-template-columns:1fr 1fr;padding-left:0} .dssh.is-ph .dssh-rail{display:none} .dssh.is-ph .dssh-toc a{grid-template-columns:38px 1fr;font-size:11px;padding:7px 6px}
.dssh.is-ph .dssh-sec dl div{grid-template-columns:1fr;gap:4px} .dssh.is-ph .dssh-intro{font-size:17px}
`),
      D(F, {
        ...J,
        kicker: {
          type: j.String,
          title: `Kicker`,
          defaultValue: `Owner guide · delete before publishing`,
        },
        heading: { type: j.String, title: `Heading`, defaultValue: `Start *here.*` },
        intro: {
          type: j.String,
          title: `Intro`,
          displayTextArea: !0,
          defaultValue: `How to make Shelfline yours, about twenty minutes from remix to launch. Stuck on anything? We reply fast, usually the same day.`,
        },
        supportEmail: {
          type: j.String,
          title: `Support Email`,
          defaultValue: `solofoundryhq@gmail.com`,
        },
        supportLabel: { type: j.String, title: `Support Button`, defaultValue: `Email support` },
        indexLabel: { type: j.String, title: `Index Label`, defaultValue: `The steps` },
        stepLabel: { type: j.String, title: `Step Label`, defaultValue: `Step` },
        addonTitle: {
          type: j.String,
          title: `Add-on Title`,
          defaultValue: `Optional add-on: the SoloFoundry Assistant ($29/mo)`,
        },
        addonText: {
          type: j.String,
          title: `Add-on Text`,
          displayTextArea: !0,
          defaultValue: `A chat bubble for your store, trained on your own published pages. It answers what is inside a product, which bundle fits and how the licence works from your Products, Bundles, Courses, FAQ and pages. Publish your site, email us your address, and we send one tenant ID to paste into the Assistant component. This template does not include it.`,
        },
        ...K,
        ...q,
      }));
  }),
  pe,
  me,
  he,
  ge,
  X,
  _e,
  Z,
  ve,
  ye,
  Q,
  $;
e(() => {
  (f(),
    x(),
    v(),
    p(),
    fe(),
    re(),
    (pe = A(F)),
    (me = {
      h3h6wpjUZ: `(min-width: 810px) and (max-width: 1199.98px)`,
      hQkN_HrYT: `(max-width: 809.98px)`,
      UGxAo8kmc: `(min-width: 1200px)`,
    }),
    (he = []),
    (ge = `framer-2WUd9`),
    (X = {
      h3h6wpjUZ: `framer-v-em7j45`,
      hQkN_HrYT: `framer-v-hctxvo`,
      UGxAo8kmc: `framer-v-1ufq2n3`,
    }),
    (_e = (e, t, n) => (e && t ? `position` : n)),
    (Z = { Desktop: `UGxAo8kmc`, Phone: `hQkN_HrYT`, Tablet: `h3h6wpjUZ` }),
    (ve = ({ value: e }) =>
      S()
        ? null
        : u(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ye = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `UGxAo8kmc`,
    })),
    (Q = E(
      d(function (e, r) {
        let i = s(null),
          a = r ?? i,
          o = n(),
          { activeLocale: d, setLocale: f } = ee();
        M();
        let { style: p, className: m, layoutId: v, variant: y, ...x } = ye(e);
        N(c(() => ne({}, d), [d]));
        let [S, E] = w(y, me, !1),
          D = b(ge),
          A = t(O)?.isLayoutTemplate,
          j = !!t(h)?.transition?.layout,
          P = _e(A, j);
        return (
          C({}),
          u(O.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Z,
              primaryVariantId: `UGxAo8kmc`,
              variantClassNames: X,
            },
            children: l(_, {
              id: v ?? o,
              children: [
                u(ve, {
                  value: `html body { background: var(--token-58d8c640-633f-423d-a624-11c545b1a8a5); }`,
                }),
                u(g.div, {
                  ...x,
                  className: b(D, `framer-1ufq2n3`, m),
                  ref: a,
                  style: { ...p },
                  children: u(g.div, {
                    className: `framer-11rx2ii`,
                    "data-framer-name": `Owner guide`,
                    layout: P,
                    children: u(k, {
                      children: u(T, {
                        className: `framer-htd5my-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `DsStartHere`,
                        isAuthoredByUser: !0,
                        name: `DsStartHere`,
                        nodeId: `YbEK3TTWY`,
                        scopeId: `FbMmNJ7GL`,
                        children: u(F, {
                          addonText: `A chat bubble for your store, trained on your own published pages. It answers what is inside a product, which bundle fits and how the licence works from your Products, Bundles, Courses, FAQ and pages. Publish your site, email us your address, and we send one tenant ID to paste into the Assistant component. This template does not include it.`,
                          addonTitle: `Optional add-on: the SoloFoundry Assistant ($29/mo)`,
                          bodyFont: {
                            fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                            fontStyle: `normal`,
                            fontWeight: 400,
                          },
                          bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                          bpHint: `auto`,
                          brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                          cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                          customFonts: !1,
                          displayFont: {
                            fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                            fontStyle: `normal`,
                            fontWeight: 400,
                          },
                          fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                          heading: `Start *here.*`,
                          height: `100%`,
                          id: `YbEK3TTWY`,
                          indexLabel: `The steps`,
                          ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                          intro: `How to make Shelfline yours, about twenty minutes from remix to launch. Stuck on anything? We reply fast, usually the same day.`,
                          kicker: `Owner guide · delete before publishing`,
                          layoutId: `YbEK3TTWY`,
                          monoFont: {
                            fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                            fontStyle: `normal`,
                            fontWeight: 400,
                          },
                          name: `DsStartHere`,
                          night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                          pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                          stepLabel: `Step`,
                          stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                          style: { width: `100%` },
                          supportEmail: `solofoundryhq@gmail.com`,
                          supportLabel: `Email support`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  }),
                }),
                u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-2WUd9.framer-11fqbrv, .framer-2WUd9 .framer-11fqbrv { display: block; }`,
        `.framer-2WUd9.framer-1ufq2n3 { align-content: center; align-items: center; background-color: var(--token-58d8c640-633f-423d-a624-11c545b1a8a5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-2WUd9 .framer-11rx2ii { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2WUd9 .framer-htd5my-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-2WUd9.framer-1ufq2n3 { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-2WUd9.framer-1ufq2n3 { width: 390px; }}`,
      ],
      `framer-2WUd9`
    )),
    (Q.displayName = `Start here`),
    (Q.defaultProps = { height: 1080, width: 1200 }),
    te(
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
        ...pe,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerFbMmNJ7GL`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"h3h6wpjUZ":{"layout":["fixed","auto"]},"hQkN_HrYT":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicWidth: `1200`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicHeight: `1080`,
            framerContractVersion: `1`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, he as queryParamNames };
//# sourceMappingURL=TXwIOHE5yOP2RC03ECBkaZ6KLb3GAq0WVTeVyouOlnE.COOQBIIq.mjs.map
