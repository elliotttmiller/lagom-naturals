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
  et as k,
  g as A,
  i as j,
  k as M,
  o as N,
  q as P,
  tt as ee,
  v as F,
  y as te,
} from "./framer.BNAppio8.mjs";
import { n as ne, t as re } from "./DsFree.D__mpTpn.mjs";
import { n as ie, t as ae } from "./DsPageHero.BMIkCPXD.mjs";
import oe, { t as se } from "./T9T1e6DO-gguz0TJ0x7ICjqcX-8Iu85NwxVzu78nca0.3DSpD56t.mjs";
function ce() {
  m(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = R), document.head.appendChild(e));
  }, []);
}
function le() {
  let e = y(),
    t = null;
  try {
    t = F.current();
  } catch {}
  return e || (t !== null && t !== F.preview);
}
function ue() {
  let e = y(),
    [t, n] = o(!1);
  return (
    m(() => {
      !e && F.current() !== F.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function de(e, t) {
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
function fe(e, t, n) {
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
function pe(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: W(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? U(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: W(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? U(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: W(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? U(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function me(e) {
  let [t, n] = o(!1);
  return (
    m(() => {
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
function he(e, t, n, r = 0.16) {
  let [i, s] = o(!1),
    c = le(),
    l = me(t);
  return (
    m(() => {
      if (!t) return;
      if (n) {
        s(!0);
        return;
      }
      if (!l) return;
      let i = e.current;
      if (!i) return;
      let o = () => {},
        c = (e) => {
          try {
            e.target.matches(`:focus-visible`) && (i.setAttribute(`data-kb`, ``), i.offsetWidth);
          } catch {}
          s(!0);
        },
        u = (e) => {
          i.contains(e.relatedTarget) || i.removeAttribute(`data-kb`);
        };
      (i.addEventListener(`focusin`, c), i.addEventListener(`focusout`, u));
      let d = new IntersectionObserver(
        (e) => {
          for (let t of e)
            t.isIntersecting &&
              (d.disconnect(),
              (o = fe(() => {
                let e = i.closest(`.ds-rev.is-act`);
                (e ? parseFloat(e.style.getPropertyValue(`--rv`) || `0`) : 1) > 0.24 &&
                  (s(!0), o());
              })));
        },
        {
          threshold: Math.min(
            r,
            Math.max(0.005, (a.innerHeight * 0.3) / Math.max(1, i.offsetHeight))
          ),
          rootMargin: `0px 0px -6% 0px`,
        }
      );
      return (
        d.observe(i),
        () => {
          (d.disconnect(),
            o(),
            i.removeEventListener(`focusin`, c),
            i.removeEventListener(`focusout`, u));
        }
      );
    }, [t, n, l]),
    i || c
  );
}
function ge(e) {
  if (typeof document > `u` || !document.querySelector(`[data-ds-row="bridge"]`)) return null;
  let t = new Set(),
    n = [];
  return (
    document.querySelectorAll(`[data-ds-row="${e}"]`).forEach((e) => {
      let r = {};
      for (let t of Array.from(e.attributes))
        t.name.startsWith(`data-`) && (r[t.name.slice(5)] = t.value);
      let i = r.slug || JSON.stringify(r);
      t.has(i) || (t.add(i), n.push(r));
    }),
    n.sort((e, t) => (parseFloat(e.n1) || 0) - (parseFloat(t.n1) || 0))
  );
}
function I(e, t) {
  let [n, r] = o(t),
    i = s(``);
  return (
    Oe(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[De] = 1));
      } catch {}
      let s = () => {
          let t = ge(e);
          if (!t) return !1;
          let n = JSON.stringify(t);
          return (n !== i.current && ((i.current = n), r(t)), !0);
        },
        c = new MutationObserver(() => {
          s() && (o++, o > 2 && c.disconnect());
        });
      (c.observe(document.body, { childList: !0, subtree: !0 }), s() && o++);
      let l = () => {
        t++ < 30 && (s(), (n = a.setTimeout(l, 150)));
      };
      return (
        (n = a.setTimeout(l, 150)),
        () => {
          (c.disconnect(), a.clearTimeout(n));
        }
      );
    }, [e]),
    n
  );
}
function L(e) {
  let {
      summaryLabel: t = `Average rating`,
      countLabel: n = `reviews`,
      verifiedLabel: r = `Every one tied to an order`,
      allLabel: i = `All products`,
      boughtLabel: a = `Bought`,
      stampLabel: c = `Verified`,
      emptyText: d = `No reviews for that product yet.`,
      productBase: f = `/products/`,
      bpHint: p = `auto`,
    } = e,
    m = be(e),
    { D: h, B: g, M: _ } = pe(e);
  ce();
  let v = ue(),
    y = ye(),
    b = le(),
    x = s(null),
    { w: S } = de(x, p),
    C = he(x, v, y, 0.05),
    w = S < 810,
    T = S >= 810 && S < 1100,
    E = I(`reviews`, J.reviews),
    D = I(`products`, J.products),
    [O, k] = o(``),
    A = Array.from(new Set(E.map((e) => String(e.f4 || ``).trim()).filter(Boolean))),
    j = O ? E.filter((e) => String(e.f4 || ``).trim() === O) : E,
    M = (e) => Math.max(0, Math.min(5, parseFloat(e.f5 || `5`) || 5)),
    N = E.length ? E.reduce((e, t) => e + M(t), 0) / E.length : 0,
    P = (e) => {
      let t = D.find(
        (t) =>
          String(t.f1 || ``)
            .trim()
            .toLowerCase() === e.trim().toLowerCase()
      );
      return t ? t.slug : ``;
    };
  return l(`section`, {
    ref: x,
    className: `ds ds-sec dsrg${C ? ` is-on` : ``}${w ? ` is-ph` : T ? ` is-tab` : ``}${b ? ` is-still` : ``}`,
    style: { ...xe(m), ...g, ...e.style },
    "aria-label": t,
    children: [
      u(`link`, { rel: `stylesheet`, href: R }),
      u(`style`, { dangerouslySetInnerHTML: { __html: Te + Ee + ke } }),
      l(`div`, {
        className: `ds-wrap dsrg-wrap`,
        children: [
          l(`div`, {
            className: `dsrg-top`,
            children: [
              l(`div`, {
                className: `dsrg-sum`,
                style: q(C, 0, 24),
                children: [
                  u(`span`, { className: `dsrg-sl`, style: _, children: t }),
                  l(`span`, {
                    className: `dsrg-avg`,
                    children: [u(`b`, { style: h, children: N.toFixed(1) }), u(K, { v: N, s: 16 })],
                  }),
                  l(`span`, {
                    className: `dsrg-cnt`,
                    style: _,
                    children: [E.length, ` `, n, ` · `, r],
                  }),
                  u(`span`, { className: `dsrg-stamp`, style: h, "aria-hidden": !0, children: c }),
                ],
              }),
              l(`div`, {
                className: `dsrg-chips`,
                role: `group`,
                "aria-label": i,
                style: q(C, 120),
                children: [
                  l(`button`, {
                    type: `button`,
                    className: `dsrg-chip${O ? `` : ` is-on`}`,
                    style: _,
                    onClick: () => k(``),
                    children: [i, u(`small`, { children: E.length })],
                  }),
                  A.map((e) =>
                    l(
                      `button`,
                      {
                        type: `button`,
                        className: `dsrg-chip${O === e ? ` is-on` : ``}`,
                        style: _,
                        onClick: () => k(e),
                        children: [
                          e,
                          u(`small`, {
                            children: E.filter((t) => String(t.f4 || ``).trim() === e).length,
                          }),
                        ],
                      },
                      e
                    )
                  ),
                ],
              }),
            ],
          }),
          j.length
            ? u(`div`, {
                className: `dsrg-wall`,
                children: j.map((e, t) => {
                  let n = P(String(e.f4 || ``));
                  return l(
                    `article`,
                    {
                      className: `dsrg-card`,
                      style: {
                        ...q(C, 200 + (t % 6) * 70, 26),
                        "--t": `${t % 3 == 0 ? -1.4 : t % 3 == 1 ? 1.1 : -0.6}deg`,
                      },
                      children: [
                        u(`span`, { className: `dsrg-pin`, "aria-hidden": !0 }),
                        l(`div`, {
                          className: `dsrg-paper`,
                          style: _,
                          children: [
                            l(`span`, {
                              className: `dsrg-rh`,
                              children: [
                                u(`b`, { style: h, children: c }),
                                l(`span`, {
                                  children: [`#`, String(1e3 + t * 37).padStart(4, `0`)],
                                }),
                              ],
                            }),
                            u(K, { v: M(e), s: 13 }),
                            l(`p`, { className: `dsrg-q`, style: g, children: [`“`, e.f1, `”`] }),
                            l(`span`, {
                              className: `dsrg-who`,
                              children: [
                                Y(e) &&
                                  u(`span`, {
                                    className: `dsrg-av`,
                                    children: u(`img`, {
                                      ...H(Y(e), `44px`),
                                      alt: ``,
                                      loading: `lazy`,
                                      decoding: `async`,
                                    }),
                                  }),
                                l(`span`, {
                                  children: [
                                    u(`b`, { style: h, children: e.f2 }),
                                    u(`small`, { children: e.f3 }),
                                  ],
                                }),
                              ],
                            }),
                            e.f4 &&
                              l(`span`, {
                                className: `dsrg-bl`,
                                children: [
                                  u(`span`, { children: a }),
                                  u(`i`, { "aria-hidden": !0 }),
                                  n
                                    ? u(`a`, { href: `${f}${n}`, children: e.f4 })
                                    : u(`b`, { children: e.f4 }),
                                ],
                              }),
                            u(`span`, {
                              className: `dsrg-st`,
                              style: h,
                              "aria-hidden": !0,
                              children: c,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.slug || t
                  );
                }),
              })
            : u(`p`, { className: `dsrg-empty`, style: h, children: d }),
        ],
      }),
    ],
  });
}
var R,
  z,
  B,
  V,
  H,
  _e,
  U,
  ve,
  W,
  ye,
  G,
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  K,
  q,
  Ee,
  J,
  De,
  Y,
  Oe,
  ke,
  Ae = e(() => {
    (i(),
      f(),
      p(),
      x(),
      (R = `../../styles/css2-a59a76.css`),
      (z = `clamp(1280px, 92vw, 1520px)`),
      (B = [160, 320, 480, 800, 1200, 1600]),
      (V = (e) => {
        let t =
            String(e || ``)
              .trim()
              .split(`,`)
              .pop() || ``,
          n = t.match(/(\d+(?:\.\d+)?)px/),
          r = t.match(/(\d+(?:\.\d+)?)vw/),
          i = n ? parseFloat(n[1]) * 2 : r ? (parseFloat(r[1]) / 100) * 1600 * 1.25 : 1600;
        return B.find((e) => e >= i) || 1600;
      }),
      (H = (e, t) => {
        let n = String(e || ``),
          r = n.split(`?`)[0];
        if (/framerusercontent\.com\/images\//.test(n)) {
          let e = V(t);
          return {
            src: `${r}?scale-down-to=${e <= 512 ? 512 : e <= 1024 ? 1024 : 2048}`,
            srcSet: `${r}?scale-down-to=512 512w, ${r}?scale-down-to=1024 1024w, ${r}?scale-down-to=2048 2048w`,
            sizes: t,
          };
        }
        if (/images\.unsplash\.com\//.test(n)) {
          let e = V(t),
            n = (e) => `${r}?w=${e}&q=70&fm=jpg&auto=format`;
          return {
            src: n(e),
            srcSet: B.filter((t) => t <= Math.max(e * 2, 480))
              .map((e) => `${n(e)} ${e}w`)
              .join(`, `),
            sizes: t,
          };
        }
        return { src: n };
      }),
      (_e = (e) => {
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
      (U = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (ve = (e) => {
        let t = _e(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (W = (e, t, n, r) => {
        let i = e ? ve(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (ye = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (G = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (be = (e) => ({
        bone: e.bone || G.bone,
        ink: e.ink || G.ink,
        brass: e.brass || G.brass,
        pine: e.pine || G.pine,
        fog: e.fog || G.fog,
        stone: e.stone || G.stone,
        cloud: e.cloud || G.cloud,
        night: e.night || G.night,
      })),
      (xe = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (Se = {
        bone: { type: N.Color, title: `Paper`, defaultValue: G.bone },
        ink: { type: N.Color, title: `Ink`, defaultValue: G.ink },
        brass: { type: N.Color, title: `Accent`, defaultValue: G.brass },
        pine: { type: N.Color, title: `Deep`, defaultValue: G.pine },
        fog: { type: N.Color, title: `Line`, defaultValue: G.fog },
        stone: { type: N.Color, title: `Muted`, defaultValue: G.stone },
        cloud: { type: N.Color, title: `White`, defaultValue: G.cloud },
        night: { type: N.Color, title: `Dark`, defaultValue: G.night },
      }),
      (Ce = {
        customFonts: {
          type: N.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: N.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: N.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: N.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (we = {
        bpHint: {
          type: N.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (Te = `
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
      (K = ({ v: e = 5, s: t = 13 }) =>
        u(`span`, {
          className: `ds-stars`,
          "aria-hidden": !0,
          children: [0, 1, 2, 3, 4].map((n) =>
            u(
              `svg`,
              {
                width: t,
                height: t,
                viewBox: `0 0 24 24`,
                style: { opacity: n < Math.round(e) ? 1 : 0.28 },
                children: u(`path`, {
                  fill: `currentColor`,
                  d: `M12 2.6l2.9 6.1 6.7.9-4.9 4.6 1.2 6.6L12 17.6 6.1 20.8l1.2-6.6L2.4 9.6l6.7-.9z`,
                }),
              },
              n
            )
          ),
        })),
      N.Boolean,
      N.Number,
      (q = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (Ee = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${z} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (J = {
        site: [
          {
            slug: `site`,
            f1: `Shelfline`,
            f2: `Creator store`,
            f3: `Templates, ebooks, presets and courses by one studio, sold from one shelf. Instant download, lifetime updates.`,
            f4: `hello@shelfline.co`,
            f5: ``,
            f6: `Lisbon`,
            f7: `Europe/Lisbon`,
            f8: `/free`,
            f9: `X:https://x.com,Instagram:https://instagram.com,YouTube:https://youtube.com,Threads:https://threads.net`,
            f10: `Autumn bundle: 4 products for $79 until Oct 5`,
            f11: ``,
            f12: ``,
            f13: ``,
            n1: `1`,
          },
        ],
        products: [
          {
            slug: `figma-ui-kit`,
            f1: `Aurora UI Kit`,
            f2: `UI kit`,
            f3: `$49`,
            f4: `$79`,
            f5: `Figma · 320 components`,
            f6: `A dark-first product UI kit with 320 components, 40 screens and a token system that swaps in one click.`,
            f7: `320 components;40 finished screens;Colour + type tokens;Auto-layout everywhere;Free updates`,
            f8: `/checkout?product=figma-ui-kit`,
            f9: `Bestseller`,
            f10: `2,140 sold`,
            f11: `4.9`,
            f12: `#5B4BFF`,
            f13: `kit`,
            img: `https://framerusercontent.com/images/FMCKS6vZzYYsMTZ7E94PJ6hbVP0.webp`,
            n1: `1`,
          },
          {
            slug: `pricing-playbook`,
            f1: `The Pricing Playbook`,
            f2: `Ebook`,
            f3: `$29`,
            f4: ``,
            f5: `PDF + EPUB · 212 pages`,
            f6: `How to price digital products without guessing: 14 tested price ladders, the maths behind bundles and the emails that sold them.`,
            f7: `212 pages;14 price ladders;Bundle calculator sheet;Email swipe file`,
            f8: `/checkout?product=pricing-playbook`,
            f9: `New`,
            f10: `860 sold`,
            f11: `4.8`,
            f12: `#FF6A2B`,
            f13: `book`,
            img: `https://framerusercontent.com/images/rjS1i3AIxe5To4K3Imy1L0JVMQ8.webp`,
            n1: `2`,
          },
          {
            slug: `film-presets`,
            f1: `Film Look Presets`,
            f2: `Preset pack`,
            f3: `$24`,
            f4: `$39`,
            f5: `Lightroom + Camera Raw · 40 presets`,
            f6: `Forty presets built from real film stock scans: Portra warmth, Tri-X grain and two clean commercial looks.`,
            f7: `40 presets;Mobile + desktop;Before/after gallery;Install guide`,
            f8: `/checkout?product=film-presets`,
            f9: ``,
            f10: `3,410 sold`,
            f11: `4.9`,
            f12: `#2E6B5A`,
            f13: `tin`,
            img: `https://framerusercontent.com/images/JFsvHcnPMNXuRO44fhSUbQXbM.webp`,
            n1: `3`,
          },
          {
            slug: `launch-course`,
            f1: `Launch in 30 Days`,
            f2: `Course`,
            f3: `$149`,
            f4: `$199`,
            f5: `14 lessons · 6 h 20 min`,
            f6: `A day-by-day course that takes a product from idea to first sale: positioning, the page, the price, the launch emails.`,
            f7: `14 video lessons;6 worksheets;Launch email templates;Private community`,
            f8: `/checkout?product=launch-course`,
            f9: `Bestseller`,
            f10: `1,280 students`,
            f11: `5.0`,
            f12: `#1B2A6B`,
            f13: `box`,
            img: `https://framerusercontent.com/images/1l4w12Eo8dKpSAn3W1KGfIEsfAc.webp`,
            n1: `4`,
          },
          {
            slug: `notion-studio-os`,
            f1: `Studio OS for Notion`,
            f2: `Notion template`,
            f3: `$39`,
            f4: ``,
            f5: `Notion · 12 databases`,
            f6: `Clients, projects, invoices and content in one Notion workspace, with dashboards that read from every table.`,
            f7: `12 linked databases;5 dashboards;Client portal page;Video walkthrough`,
            f8: `/checkout?product=notion-studio-os`,
            f9: ``,
            f10: `1,920 sold`,
            f11: `4.8`,
            f12: `#111111`,
            f13: `notebook`,
            img: `https://framerusercontent.com/images/buLqBiEuvi3rUfG8vTFqfMlevTI.webp`,
            n1: `5`,
          },
          {
            slug: `brand-fonts`,
            f1: `Ledger Sans`,
            f2: `Font`,
            f3: `$59`,
            f4: ``,
            f5: `OTF + WOFF2 · 8 weights`,
            f6: `A quiet grotesk with a mono sibling, eight weights, tabular numbers and a desktop + web licence in one price.`,
            f7: `8 weights + italics;Mono sibling;Desktop + web licence;Variable file`,
            f8: `/checkout?product=brand-fonts`,
            f9: `New`,
            f10: `540 sold`,
            f11: `4.7`,
            f12: `#C9B79C`,
            f13: `folder`,
            img: `https://framerusercontent.com/images/T8p6CmZKZX9AL48UOBtfUFkRmU.webp`,
            n1: `6`,
          },
          {
            slug: `canva-social-kit`,
            f1: `Social Kit for Canva`,
            f2: `Template pack`,
            f3: `$19`,
            f4: `$29`,
            f5: `Canva · 180 templates`,
            f6: `Posts, stories, carousels and covers in one editable Canva kit, with a colour system that changes everything at once.`,
            f7: `180 templates;9:16, 4:5, 1:1;Colour + font system;Monthly additions`,
            f8: `/checkout?product=canva-social-kit`,
            f9: ``,
            f10: `4,050 sold`,
            f11: `4.8`,
            f12: `#FFC83D`,
            f13: `cards`,
            img: `https://framerusercontent.com/images/oClZkOJd7UXQOXNMLLeqKUBBjZk.webp`,
            n1: `7`,
          },
          {
            slug: `email-swipes`,
            f1: `100 Launch Emails`,
            f2: `Guide`,
            f3: `$19`,
            f4: ``,
            f5: `PDF + Notion · 100 emails`,
            f6: `The exact emails behind eleven launches, sorted by day, with the numbers each one made.`,
            f7: `100 emails;Sorted by launch day;Subject line bank;Notion database`,
            f8: `/checkout?product=email-swipes`,
            f9: ``,
            f10: `2,760 sold`,
            f11: `4.9`,
            f12: `#E9573F`,
            f13: `book`,
            img: `https://framerusercontent.com/images/laJnW6OsrSCp9UzASb4LjDkze8.webp`,
            n1: `8`,
          },
          {
            slug: `icon-set`,
            f1: `Outline Icons 1.0`,
            f2: `Icon set`,
            f3: `$34`,
            f4: `$49`,
            f5: `SVG + Figma · 1,200 icons`,
            f6: `Twelve hundred outline icons on a 24 px grid, matched strokes, every one a component in Figma.`,
            f7: `1,200 icons;24 px grid;Figma components;SVG + React`,
            f8: `/checkout?product=icon-set`,
            f9: ``,
            f10: `1,110 sold`,
            f11: `4.8`,
            f12: `#0F8B8D`,
            f13: `tin`,
            img: `https://framerusercontent.com/images/2Ks15Xzbhh8HfcYecsBUI3Dzhvo.webp`,
            n1: `9`,
          },
        ],
        reviews: [
          {
            slug: `r1`,
            f1: `Paid for itself with the first launch. The pricing ladder alone changed how I sell.`,
            f2: `Mara Lindqvist`,
            f3: `Course creator, Stockholm`,
            f4: `Launch in 30 Days`,
            f5: `5`,
            img: `https://framerusercontent.com/images/ctbRBlNkvzmXnFz63wljkg6a0.webp`,
            n1: `1`,
          },
          {
            slug: `r2`,
            f1: `The UI kit is the cleanest I've bought. Tokens actually work, the screens are real.`,
            f2: `Dev Patel`,
            f3: `Product designer, Bangalore`,
            f4: `Aurora UI Kit`,
            f5: `5`,
            img: `https://framerusercontent.com/images/rz8YQZCUlDjrRF2si2wg5ml6OY.webp`,
            n1: `2`,
          },
          {
            slug: `r3`,
            f1: `Forty presets and every one of them looks like film. My clients noticed in a week.`,
            f2: `Ana Ribeiro`,
            f3: `Wedding photographer, Porto`,
            f4: `Film Look Presets`,
            f5: `5`,
            img: `https://framerusercontent.com/images/8VEwRNDSFhv3bEuXXgkuxicgxf8.webp`,
            n1: `3`,
          },
          {
            slug: `r4`,
            f1: `Bought the Notion studio on a Sunday, ran my agency on it by Monday.`,
            f2: `Tomás Weller`,
            f3: `Studio owner, Berlin`,
            f4: `Studio OS for Notion`,
            f5: `5`,
            img: `https://framerusercontent.com/images/xuLpBbhiMnOOP0UV8dq7Y6HASgQ.webp`,
            n1: `4`,
          },
          {
            slug: `r5`,
            f1: `The launch emails are word-for-word usable. I changed the product name and sent them.`,
            f2: `Keiko Tanaka`,
            f3: `Newsletter writer, Osaka`,
            f4: `100 Launch Emails`,
            f5: `5`,
            img: `https://framerusercontent.com/images/QlgFDFBt3PWqpqbH5LYzApH270.webp`,
            n1: `5`,
          },
          {
            slug: `r6`,
            f1: `Ledger Sans is the font I'd been trying to find for two years.`,
            f2: `Sam Okafor`,
            f3: `Brand designer, Lagos`,
            f4: `Ledger Sans`,
            f5: `4`,
            img: `https://framerusercontent.com/images/hRANBV6qNVbFGAqLeq1HrIyvXz4.webp`,
            n1: `6`,
          },
        ],
      }),
      (De = `DsReviewGrid@cms1`),
      (Y = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (Oe = a === void 0 ? m : r),
      (ke = `
.dsrg{position:relative;background:var(--ds-bone);color:var(--ds-ink);padding:clamp(50px,6vw,90px) 0 clamp(90px,10vw,150px);overflow:clip;z-index:12}
.dsrg::before{content:"";position:absolute;inset:0;background-image:radial-gradient(color-mix(in srgb,var(--ds-ink) 8%,transparent) 1px,transparent 1.3px);background-size:24px 24px;mask-image:linear-gradient(180deg,transparent,#000 15%,#000 85%,transparent);-webkit-mask-image:linear-gradient(180deg,transparent,#000 15%,#000 85%,transparent);pointer-events:none}
.dsrg-wrap{position:relative}
.dsrg-top{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:26px clamp(30px,5vw,80px);align-items:end;margin-bottom:clamp(36px,4vw,60px)}
/* summary card */
.dsrg-sum{position:relative;display:flex;flex-direction:column;gap:10px;padding:24px 24px 26px;background:var(--ds-night);color:var(--ds-bone);border-radius:16px;rotate:-1deg;transition:rotate .5s cubic-bezier(.34,1.56,.64,1)} .dsrg-sum:hover{rotate:0deg}
.dsrg-sl{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)}
.dsrg-avg{display:flex;align-items:center;gap:14px} .dsrg-avg b{font-size:clamp(48px,5vw,72px);line-height:.95;font-weight:800;letter-spacing:-.04em;font-variant-numeric:tabular-nums} .dsrg .ds-stars{display:inline-flex;gap:2px;color:var(--ds-brass)}
.dsrg-cnt{font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 65%,transparent)}
.dsrg-stamp{position:absolute;right:18px;top:16px;padding:3px 9px;border:2px solid var(--ds-brass);border-radius:4px;color:var(--ds-brass);font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;rotate:-10deg;opacity:.9}
/* chips */
.dsrg-chips{display:flex;flex-wrap:wrap;gap:8px;padding-bottom:6px}
.dsrg-chip{display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border:0;border-radius:999px;background:var(--ds-cloud);color:var(--ds-ink);font:inherit;font-size:11px;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 16%,transparent);transition:background .3s,color .3s,transform .4s cubic-bezier(.34,1.56,.64,1)}
.dsrg-chip small{font-size:9.5px;color:var(--ds-mut)} .dsrg-chip:hover{transform:translateY(-2px)} .dsrg-chip.is-on{background:var(--ds-ink);color:var(--ds-bone);box-shadow:none} .dsrg-chip.is-on small{color:var(--ds-brass)}
/* the wall */
.dsrg-wall{columns:3;column-gap:26px}
.dsrg-empty{margin:40px 0;font-size:28px;font-weight:800;letter-spacing:-.03em;color:var(--ds-mut)}
.dsrg-card{position:relative;display:block;break-inside:avoid;margin:0 0 30px;padding-top:18px;rotate:var(--t);transition:rotate .5s cubic-bezier(.34,1.56,.64,1)} .dsrg-card:hover{rotate:0deg}
.dsrg-pin{position:absolute;left:50%;top:0;z-index:3;width:16px;height:16px;margin-left:-8px;border-radius:50%;background:var(--ds-brass);box-shadow:inset -3px -3px 6px rgba(0,0,0,.35),0 4px 8px rgba(0,0,0,.4)} .dsrg-pin::after{content:"";position:absolute;left:6px;top:6px;width:4px;height:4px;border-radius:50%;background:rgba(255,255,255,.7)}
.dsrg-paper{position:relative;display:flex;flex-direction:column;gap:12px;padding:26px 22px 30px;background:var(--ds-cloud);color:var(--ds-ink);font-size:11.5px;letter-spacing:.02em;box-shadow:0 24px 50px -30px rgba(0,0,0,.5);clip-path:polygon(0 0,100% 0,100% calc(100% - 8px),97% 100%,94% calc(100% - 8px),91% 100%,88% calc(100% - 8px),85% 100%,82% calc(100% - 8px),79% 100%,76% calc(100% - 8px),73% 100%,70% calc(100% - 8px),67% 100%,64% calc(100% - 8px),61% 100%,58% calc(100% - 8px),55% 100%,52% calc(100% - 8px),49% 100%,46% calc(100% - 8px),43% 100%,40% calc(100% - 8px),37% 100%,34% calc(100% - 8px),31% 100%,28% calc(100% - 8px),25% 100%,22% calc(100% - 8px),19% 100%,16% calc(100% - 8px),13% 100%,10% calc(100% - 8px),7% 100%,4% calc(100% - 8px),1% 100%,0 calc(100% - 8px))}
.dsrg-rh{display:flex;justify-content:space-between;padding-bottom:10px;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent);text-transform:uppercase;letter-spacing:.12em;font-size:10px} .dsrg-rh b{font-weight:800;color:var(--ds-acc)}
.dsrg-q{margin:0;font-size:16.5px;line-height:1.45;font-weight:500;letter-spacing:-.01em;color:var(--ds-ink);text-wrap:pretty}
.dsrg-who{display:flex;align-items:center;gap:12px;padding-top:4px} .dsrg-av{width:40px;height:40px;border-radius:50%;overflow:hidden;flex:none;background:var(--ds-pine)} .dsrg-av img{width:100%;height:100%;object-fit:cover;display:block}
.dsrg-who b{display:block;font-size:14px;font-weight:800;letter-spacing:-.01em} .dsrg-who small{display:block;font-size:10.5px;color:var(--ds-mut);margin-top:2px}
.dsrg-bl{display:flex;align-items:baseline;gap:8px;padding-top:10px;border-top:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent);font-size:10.5px;text-transform:uppercase;letter-spacing:.1em;color:var(--ds-mut)} .dsrg-bl i{flex:1;border-bottom:1px dotted color-mix(in srgb,var(--ds-ink) 35%,transparent);translate:0 -3px} .dsrg-bl b,.dsrg-bl a{font-weight:500;color:var(--ds-ink);text-transform:none;letter-spacing:.02em;text-decoration:none} .dsrg-bl a{border-bottom:1px solid var(--ds-brass);transition:color .3s} .dsrg-bl a:hover{color:var(--ds-acc)}
.dsrg-st{pointer-events:none;position:absolute;right:16px;bottom:34px;padding:3px 9px;border:2px solid var(--ds-brass);border-radius:4px;color:var(--ds-brass);font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;rotate:-12deg;opacity:.85}
/* tablet + phone */
.dsrg.is-tab .dsrg-top{grid-template-columns:1fr} .dsrg.is-tab .dsrg-wall{columns:2}
.dsrg.is-ph .dsrg-top{grid-template-columns:1fr;gap:18px;margin-bottom:26px} .dsrg.is-ph .dsrg-sum{rotate:0deg;padding:20px} .dsrg.is-ph .dsrg-wall{columns:1} .dsrg.is-ph .dsrg-card{rotate:0deg;margin-bottom:22px}
@media (prefers-reduced-motion:reduce){.dsrg-card,.dsrg-sum{rotate:0deg;transition:none}}`),
      D(L, {
        ...we,
        summaryLabel: { type: N.String, title: `Summary label`, defaultValue: `Average rating` },
        countLabel: { type: N.String, title: `Count word`, defaultValue: `reviews` },
        verifiedLabel: {
          type: N.String,
          title: `Verified line`,
          defaultValue: `Every one tied to an order`,
        },
        allLabel: { type: N.String, title: `All chip`, defaultValue: `All products` },
        boughtLabel: { type: N.String, title: `Bought label`, defaultValue: `Bought` },
        stampLabel: { type: N.String, title: `Stamp`, defaultValue: `Verified` },
        emptyText: {
          type: N.String,
          title: `Empty text`,
          defaultValue: `No reviews for that product yet.`,
        },
        productBase: { type: N.String, title: `Product link base`, defaultValue: `/products/` },
        ...Se,
        ...Ce,
      }));
  }),
  je,
  Me,
  Ne,
  X,
  Pe,
  Fe,
  Ie,
  Le,
  Z,
  Re,
  ze,
  Q,
  $;
e(() => {
  (f(),
    x(),
    v(),
    p(),
    ne(),
    ie(),
    Ae(),
    se(),
    (je = M(ae)),
    (Me = M(L)),
    (Ne = M(re)),
    (X = {
      jubTHrT83: `(max-width: 809.98px)`,
      nM3dqphS2: `(min-width: 810px) and (max-width: 1199.98px)`,
      YvmzdoIKY: `(min-width: 1200px)`,
    }),
    (Pe = []),
    (Fe = `framer-rcfxh`),
    (Ie = {
      jubTHrT83: `framer-v-t9t8kn`,
      nM3dqphS2: `framer-v-p74hv9`,
      YvmzdoIKY: `framer-v-1hkpj3g`,
    }),
    (Le = (e, t, n) => (e && t ? `position` : n)),
    (Z = { Desktop: `YvmzdoIKY`, Phone: `jubTHrT83`, Tablet: `nM3dqphS2` }),
    (Re = ({ value: e }) =>
      S()
        ? null
        : u(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ze = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `YvmzdoIKY`,
    })),
    (Q = E(
      d(function (e, r) {
        let i = s(null),
          a = r ?? i,
          o = n(),
          { activeLocale: d, setLocale: f } = k();
        P();
        let { style: p, className: m, layoutId: v, variant: y, ...x } = ze(e);
        ee(c(() => oe({}, d), [d]));
        let [S, E] = w(y, X, !1),
          D = b(Fe),
          M = t(O)?.isLayoutTemplate,
          N = !!t(h)?.transition?.layout,
          F = Le(M, N);
        return (
          C({}),
          u(O.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Z,
              primaryVariantId: `YvmzdoIKY`,
              variantClassNames: Ie,
            },
            children: l(_, {
              id: v ?? o,
              children: [
                u(Re, { value: `html body { background: rgb(255, 255, 255); }` }),
                l(g.div, {
                  ...x,
                  className: b(D, `framer-1hkpj3g`, m),
                  ref: a,
                  style: { ...p },
                  children: [
                    u(g.div, {
                      className: `framer-1y8sgso`,
                      "data-framer-name": `S0 DsPageHero`,
                      layout: F,
                      children: u(j, {
                        children: u(T, {
                          className: `framer-37mqey-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsPageHero`,
                          isAuthoredByUser: !0,
                          name: `DsPageHero`,
                          nodeId: `vcr_aOrzZ`,
                          scopeId: `jWG1RIbW0`,
                          children: u(A, {
                            breakpoint: S,
                            overrides: {
                              jubTHrT83: { bpHint: `phone` },
                              nM3dqphS2: { bpHint: `tablet` },
                            },
                            children: u(ae, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              crumbs: `Home:/, Reviews:/reviews`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `Reviews`,
                              facts: `4.9|average;2,140|orders this month;38|countries`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              height: `100%`,
                              id: `vcr_aOrzZ`,
                              index: `05`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              intro: `Every review on this wall is tied to an order number.`,
                              layoutId: `vcr_aOrzZ`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsPageHero`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              photoAlt: ``,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              shelfLabel: `On the shelf`,
                              showPhoto: !1,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              title: `Receipts from|*real buyers.*`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    u(g.div, {
                      className: `framer-qfcnzp`,
                      "data-framer-name": `S1 DsReviewGrid`,
                      layout: F,
                      children: u(j, {
                        children: u(T, {
                          className: `framer-18bht3n-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsReviewGrid`,
                          isAuthoredByUser: !0,
                          name: `DsReviewGrid`,
                          nodeId: `SZz1ZqrgN`,
                          scopeId: `jWG1RIbW0`,
                          children: u(A, {
                            breakpoint: S,
                            overrides: {
                              jubTHrT83: { bpHint: `phone` },
                              nM3dqphS2: { bpHint: `tablet` },
                            },
                            children: u(L, {
                              allLabel: `All products`,
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              boughtLabel: `Bought`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              countLabel: `reviews`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              emptyText: `No reviews for that product yet.`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              height: `100%`,
                              id: `SZz1ZqrgN`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `SZz1ZqrgN`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsReviewGrid`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              productBase: `/products/`,
                              stampLabel: `Verified`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              summaryLabel: `Average rating`,
                              verifiedLabel: `Every one tied to an order`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    u(g.div, {
                      className: `framer-ikgm5c`,
                      "data-framer-name": `S2 DsFree`,
                      layout: F,
                      children: u(j, {
                        children: u(T, {
                          className: `framer-1tpsjd-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsFree`,
                          isAuthoredByUser: !0,
                          name: `DsFree`,
                          nodeId: `vAXRBLaH3`,
                          scopeId: `jWG1RIbW0`,
                          children: u(A, {
                            breakpoint: S,
                            overrides: {
                              jubTHrT83: { bpHint: `phone` },
                              nM3dqphS2: { bpHint: `tablet` },
                            },
                            children: u(re, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bookKind: `Free guide`,
                              bookSub: `40 pages · PDF + EPUB`,
                              bookTitle: `Pricing Digital Products`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              button: `Send me the guide`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `Free download`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              formAction: `/thank-you`,
                              freeLabel: `Free`,
                              heading: `The pricing guide,|*on the house.*`,
                              height: `100%`,
                              id: `vAXRBLaH3`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `vAXRBLaH3`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsFree`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              note: `No spam. One email with the file.`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              placeholder: `you@studio.com`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Forty pages on pricing digital products: ladders, anchors, bundles and the emails that sold them. One email, the file, no drip.`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-rcfxh.framer-1r2fv9x, .framer-rcfxh .framer-1r2fv9x { display: block; }`,
        `.framer-rcfxh.framer-1hkpj3g { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-rcfxh .framer-1y8sgso, .framer-rcfxh .framer-qfcnzp, .framer-rcfxh .framer-ikgm5c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-rcfxh .framer-37mqey-container, .framer-rcfxh .framer-18bht3n-container, .framer-rcfxh .framer-1tpsjd-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-rcfxh.framer-1hkpj3g { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-rcfxh.framer-1hkpj3g { width: 390px; }}`,
      ],
      `framer-rcfxh`
    )),
    (Q.displayName = `Reviews`),
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
        ...je,
        ...Me,
        ...Ne,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerjWG1RIbW0`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerContractVersion: `1`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"nM3dqphS2":{"layout":["fixed","auto"]},"jubTHrT83":{"layout":["fixed","auto"]}}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `false`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicHeight: `1080`,
            framerIntrinsicWidth: `1200`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, Pe as queryParamNames };
//# sourceMappingURL=8vbBWgnItbJoXQBy1FxS5l5OGFML_5RJP_uKLG0Gd3k.DhFomGnt.mjs.map
