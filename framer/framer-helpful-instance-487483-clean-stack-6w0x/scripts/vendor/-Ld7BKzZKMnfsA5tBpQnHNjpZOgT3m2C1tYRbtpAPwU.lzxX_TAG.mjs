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
  et as ee,
  g as A,
  i as j,
  k as M,
  o as N,
  q as te,
  tt as ne,
  v as P,
  y as re,
} from "./framer.BNAppio8.mjs";
import { n as ie, t as ae } from "./DsFaq.BS2R3ms-.mjs";
import { n as oe, t as se } from "./DsPageHero.BMIkCPXD.mjs";
import ce, { t as le } from "./JXsuKyZUJyHwElqZyXcJPGr5aBiDcCFBOT8r-i-W6Ac.BRPDYxsT.mjs";
function ue() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = R), document.head.appendChild(e));
  }, []);
}
function F() {
  let e = b(),
    t = null;
  try {
    t = P.current();
  } catch {}
  return e || (t !== null && t !== P.preview);
}
function de() {
  let e = b(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && P.current() !== P.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function fe(e, t) {
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
function pe(e, t, n) {
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
function me(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: K(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? W(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: K(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? W(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: K(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? W(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function he(e, t) {
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
function ge(e) {
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
function _e(e, t, n, r = 0.16) {
  let [i, s] = o(!1),
    c = F(),
    l = ge(t);
  return (
    h(() => {
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
              (o = pe(() => {
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
function ve(e) {
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
    Me(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[Ae] = 1));
      } catch {}
      let s = () => {
          let t = ve(e);
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
      eyebrow: t = `All bundles`,
      heading: n = `Sets that|*go together.*`,
      subCopy:
        r = `Every bundle is priced below the sum of its parts. The receipt shows exactly how far below.`,
      itemsLabel: i = `items`,
      subtotalLabel: a = `Subtotal`,
      bundleLabel: o = `Bundle price`,
      totalLabel: c = `You pay`,
      saveLabel: l = `You save`,
      buttonFallback: f = `Get the bundle`,
      bpHint: p = `auto`,
    } = e,
    m = be(e),
    { D: h, B: g, M: _ } = me(e);
  ue();
  let v = de(),
    y = ye(),
    b = F(),
    x = s(null),
    { w: S } = fe(x, p),
    C = _e(x, v, y, 0.06);
  he(x, v);
  let w = S < 810,
    T = S >= 810 && S < 1100,
    E = I(`bundles`, X.bundles),
    D = I(`products`, X.products),
    O = (e) => D.find((t) => t.slug === e.trim());
  return u(`section`, {
    ref: x,
    className: `ds ds-sec ds-dark dsbl${C ? ` is-on` : ``}${w ? ` is-ph` : T ? ` is-tab` : ``}${b ? ` is-still` : ``}`,
    style: { ...xe(m), ...g, ...e.style },
    "aria-label": J(n),
    children: [
      d(`link`, { rel: `stylesheet`, href: R }),
      d(`style`, { dangerouslySetInnerHTML: { __html: Ee + ke + Ne } }),
      u(`div`, {
        className: `ds-wrap`,
        children: [
          u(`div`, {
            className: `dsbl-head`,
            children: [
              u(`p`, {
                className: `dsbl-eb`,
                style: { ..._, ...Y(C, 0) },
                children: [d(`i`, { "aria-hidden": !0 }), t],
              }),
              d(Oe, {
                text: n,
                on: C,
                D: h,
                size: w ? `clamp(36px,11vw,50px)` : `clamp(40px,4.4vw,68px)`,
                lh: 0.96,
                delay: 80,
              }),
              d(`p`, { className: `dsbl-sub`, style: Y(C, 240), children: r }),
            ],
          }),
          d(`div`, {
            className: `dsbl-list`,
            children: E.map((e, t) => {
              let n = String(e.f5 || ``)
                .split(`;`)
                .map(O)
                .filter(Boolean);
              return d(
                `article`,
                {
                  className: `dsbl-card${t % 2 ? ` is-alt` : ``}`,
                  style: { ...Y(C, 200 + t * 120, 34), "--col": e.f7 || `#1B2A6B` },
                  children: u(`div`, {
                    className: `dsbl-in`,
                    children: [
                      u(`div`, {
                        className: `dsbl-l`,
                        children: [
                          u(`span`, {
                            className: `dsbl-n`,
                            style: _,
                            children: [String(t + 1).padStart(2, `0`), ` · `, n.length, ` `, i],
                          }),
                          d(`h3`, {
                            className: `dsbl-name`,
                            style: h,
                            children: d(`a`, { href: `/bundles/${e.slug || ``}`, children: e.f1 }),
                          }),
                          d(`p`, { className: `dsbl-bl`, children: e.f6 }),
                          d(`div`, {
                            className: `dsbl-minis`,
                            children: n.map((e, t) =>
                              u(
                                `a`,
                                {
                                  className: `dsbl-mini`,
                                  href: `/products/${e.slug}`,
                                  style: { "--pc": e.f12 || `#5B4BFF` },
                                  "aria-label": `${e.f1}, ${e.f3}`,
                                  children: [
                                    u(`span`, {
                                      className: `dsbl-mc`,
                                      children: [
                                        d(`img`, {
                                          ...H(je(e), `140px`),
                                          alt: ``,
                                          loading: `lazy`,
                                          decoding: `async`,
                                        }),
                                        d(`b`, { style: h, children: e.f1 }),
                                      ],
                                    }),
                                    d(`small`, { style: _, children: e.f2 }),
                                  ],
                                },
                                e.slug || t
                              )
                            ),
                          }),
                          d(Te, {
                            href: `/bundles/${e.slug || ``}`,
                            label: e.f8 || f,
                            kind: `solid`,
                            className: `dsbl-btn`,
                          }),
                        ],
                      }),
                      u(`div`, {
                        className: `dsbl-r ds-lt`,
                        style: _,
                        "aria-label": `${e.f1} receipt`,
                        children: [
                          u(`span`, {
                            className: `dsbl-rh`,
                            children: [
                              d(`b`, { children: e.f1 }),
                              u(`span`, { children: [n.length, ` `, i] }),
                            ],
                          }),
                          n.map((e, t) =>
                            u(
                              `span`,
                              {
                                className: `dsbl-rl`,
                                children: [
                                  d(`span`, { children: e.f1 }),
                                  d(`i`, { "aria-hidden": !0 }),
                                  d(`b`, { children: e.f3 }),
                                ],
                              },
                              t
                            )
                          ),
                          u(`span`, {
                            className: `dsbl-rl dsbl-sum`,
                            children: [
                              d(`span`, { children: a }),
                              d(`i`, { "aria-hidden": !0 }),
                              d(`b`, { children: e.f3 }),
                            ],
                          }),
                          u(`span`, {
                            className: `dsbl-rl`,
                            children: [
                              d(`span`, { children: o }),
                              d(`i`, { "aria-hidden": !0 }),
                              d(`b`, { children: e.f2 }),
                            ],
                          }),
                          u(`span`, {
                            className: `dsbl-tot`,
                            children: [
                              d(`span`, { children: c }),
                              d(`em`, { style: h, children: e.f2 }),
                            ],
                          }),
                          u(`span`, { className: `dsbl-save`, style: h, children: [l, ` `, e.f4] }),
                        ],
                      }),
                    ],
                  }),
                },
                e.slug || t
              );
            }),
          }),
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
  U,
  W,
  G,
  K,
  ye,
  q,
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  De,
  J,
  Oe,
  Y,
  ke,
  X,
  Ae,
  je,
  Me,
  Ne,
  Pe = e(() => {
    (i(),
      p(),
      m(),
      S(),
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
      (U = (e) => {
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
      (W = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (G = (e) => {
        let t = U(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (K = (e, t, n, r) => {
        let i = e ? G(t) : ``;
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
      (q = {
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
        bone: e.bone || q.bone,
        ink: e.ink || q.ink,
        brass: e.brass || q.brass,
        pine: e.pine || q.pine,
        fog: e.fog || q.fog,
        stone: e.stone || q.stone,
        cloud: e.cloud || q.cloud,
        night: e.night || q.night,
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
        bone: { type: N.Color, title: `Paper`, defaultValue: q.bone },
        ink: { type: N.Color, title: `Ink`, defaultValue: q.ink },
        brass: { type: N.Color, title: `Accent`, defaultValue: q.brass },
        pine: { type: N.Color, title: `Deep`, defaultValue: q.pine },
        fog: { type: N.Color, title: `Line`, defaultValue: q.fog },
        stone: { type: N.Color, title: `Muted`, defaultValue: q.stone },
        cloud: { type: N.Color, title: `White`, defaultValue: q.cloud },
        night: { type: N.Color, title: `Dark`, defaultValue: q.night },
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
      (Te = ({
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
      (Ee = `
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
      N.Boolean,
      N.Number,
      (De = (e) =>
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
      (Oe = ({
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
                  children: De(e).map((e, t) => {
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
      (ke = `
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
      (X = {
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
        bundles: [
          {
            slug: `launch-stack`,
            f1: `The Launch Stack`,
            f2: `$179`,
            f3: `$247`,
            f4: `$68`,
            f5: `launch-course;pricing-playbook;email-swipes`,
            f6: `The course, the pricing book and the launch emails. Everything between an idea and the first sale.`,
            f7: `#1B2A6B`,
            f8: `Get the stack`,
            img: `https://framerusercontent.com/images/zaaqlh0So2UAYYmiayF4jjTYrw.webp`,
            n1: `1`,
          },
          {
            slug: `designer-kit`,
            f1: `The Designer Kit`,
            f2: `$99`,
            f3: `$142`,
            f4: `$43`,
            f5: `figma-ui-kit;icon-set;brand-fonts`,
            f6: `UI kit, icon set and the Ledger Sans family. One licence, every screen.`,
            f7: `#5B4BFF`,
            f8: `Get the kit`,
            img: `https://framerusercontent.com/images/3L0U5KQFYJB7qYSFgPEtUdu3ynU.webp`,
            n1: `2`,
          },
          {
            slug: `creator-pack`,
            f1: `The Creator Pack`,
            f2: `$59`,
            f3: `$82`,
            f4: `$23`,
            f5: `canva-social-kit;film-presets;notion-studio-os`,
            f6: `Post, edit and plan: the social kit, the presets and the Notion studio, together.`,
            f7: `#2E6B5A`,
            f8: `Get the pack`,
            img: `https://framerusercontent.com/images/zuYkIFCmggCHn4ZIYIBeCHr6iXg.webp`,
            n1: `3`,
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
      }),
      (Ae = `DsBundleList@cms1`),
      (je = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (Me = a === void 0 ? h : r),
      (Ne = `
.dsbl{position:relative;background:var(--ds-night);color:var(--ds-bone);padding:clamp(70px,8vw,120px) 0 clamp(90px,10vw,150px);overflow:clip;z-index:11}
.dsbl::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0 118px,color-mix(in srgb,var(--ds-cloud) 3%,transparent) 118px 119px);pointer-events:none}
.dsbl-head{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:18px;max-width:760px;margin-bottom:clamp(36px,4vw,60px)}
.dsbl-eb{display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)} .dsbl-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dsbl .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dsbl .ds-it{color:var(--ds-brass)}
.dsbl-sub{margin:0;font-size:16.5px;line-height:1.6;color:color-mix(in srgb,var(--ds-bone) 70%,transparent);max-width:520px}
.dsbl-list{position:relative;display:flex;flex-direction:column;gap:26px}
.dsbl-in{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.7fr);gap:clamp(24px,4vw,64px);padding:clamp(24px,3vw,44px);border-radius:22px;background:var(--col);position:relative;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1),0 40px 80px -40px rgba(0,0,0,.8)}
.dsbl-in::before{content:"";position:absolute;inset:0;background:radial-gradient(70% 80% at 100% 0,rgba(255,255,255,.14),transparent 60%),linear-gradient(180deg,transparent,rgba(0,0,0,.25));pointer-events:none}
.dsbl-card.is-alt .dsbl-r{order:-1}
.dsbl-l{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:16px;color:#fff}
.dsbl-n{font-size:11px;letter-spacing:.14em;text-transform:uppercase;opacity:.92}
.dsbl-name{margin:0;font-size:clamp(28px,3.2vw,46px);line-height:1;font-weight:800;letter-spacing:-.03em} .dsbl-name a{color:inherit;text-decoration:none} .dsbl-name a:hover{text-decoration:underline;text-decoration-thickness:3px;text-underline-offset:6px}
.dsbl-bl{margin:0;max-width:460px;font-size:15.5px;line-height:1.55;opacity:.96}
.dsbl-minis{display:flex;flex-wrap:wrap;gap:14px;margin:6px 0 10px}
.dsbl-mini{display:flex;flex-direction:column;gap:6px;width:92px;text-decoration:none;color:#fff;transition:transform .5s cubic-bezier(.34,1.56,.64,1)} .dsbl-mini:hover{transform:translateY(-6px) rotate(-2deg)}
.dsbl-mc{position:relative;display:flex;align-items:flex-end;width:92px;height:118px;padding:8px;border-radius:3px 6px 6px 3px;background:var(--pc);overflow:hidden;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1),0 18px 30px -16px rgba(0,0,0,.7);border-left:3px solid color-mix(in srgb,var(--pc) 55%,#000)}
.dsbl-mc img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5;mix-blend-mode:luminosity} .dsbl-mc::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 30%,color-mix(in srgb,var(--pc) 70%,#000))}
.dsbl-mc b{position:relative;font-size:10.5px;line-height:1.1;font-weight:800;letter-spacing:-.01em;text-wrap:balance}
.dsbl-mini small{font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;opacity:.95}
.dsbl-btn{margin-top:auto}
.dsbl-r{position:relative;align-self:start;display:flex;flex-direction:column;gap:6px;padding:18px 18px 26px;background:var(--ds-bone);color:var(--ds-ink);font-size:12px;letter-spacing:.02em;box-shadow:0 30px 60px -30px rgba(0,0,0,.8);clip-path:polygon(0 0,100% 0,100% calc(100% - 8px),97% 100%,94% calc(100% - 8px),91% 100%,88% calc(100% - 8px),85% 100%,82% calc(100% - 8px),79% 100%,76% calc(100% - 8px),73% 100%,70% calc(100% - 8px),67% 100%,64% calc(100% - 8px),61% 100%,58% calc(100% - 8px),55% 100%,52% calc(100% - 8px),49% 100%,46% calc(100% - 8px),43% 100%,40% calc(100% - 8px),37% 100%,34% calc(100% - 8px),31% 100%,28% calc(100% - 8px),25% 100%,22% calc(100% - 8px),19% 100%,16% calc(100% - 8px),13% 100%,10% calc(100% - 8px),7% 100%,4% calc(100% - 8px),1% 100%,0 calc(100% - 8px))}
.dsbl-rh{display:flex;justify-content:space-between;gap:10px;padding-bottom:8px;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent);text-transform:uppercase;letter-spacing:.12em;font-size:10.5px} .dsbl-rh b{font-weight:500}
.dsbl-rl{display:flex;align-items:baseline;gap:8px;color:color-mix(in srgb,var(--ds-ink) 75%,transparent)} .dsbl-rl i{flex:1;border-bottom:1px dotted color-mix(in srgb,var(--ds-ink) 35%,transparent);translate:0 -3px} .dsbl-rl b{font-weight:500;color:var(--ds-ink)}
.dsbl-sum{margin-top:6px;padding-top:8px;border-top:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent)} .dsbl-sum b{text-decoration:line-through;color:var(--ds-mut)}
.dsbl-tot{display:flex;justify-content:space-between;align-items:baseline;margin-top:8px;padding-top:10px;border-top:2px solid var(--ds-ink);text-transform:uppercase;letter-spacing:.12em;font-size:10.5px} .dsbl-tot em{font-style:normal;font-size:28px;font-weight:800;letter-spacing:-.02em}
.dsbl-save{align-self:flex-end;margin-top:4px;padding:4px 10px;border:2px solid var(--ds-acc);border-radius:4px;color:var(--ds-acc);font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;rotate:-6deg}
.dsbl.is-tab .dsbl-in{grid-template-columns:1fr} .dsbl.is-tab .dsbl-card.is-alt .dsbl-r{order:0}
.dsbl.is-ph .dsbl-list{gap:18px} .dsbl.is-ph .dsbl-in{grid-template-columns:1fr;padding:20px;border-radius:18px;gap:20px} .dsbl.is-ph .dsbl-card.is-alt .dsbl-r{order:0} .dsbl.is-ph .dsbl-name{font-size:30px} .dsbl.is-ph .dsbl-r{font-size:11.5px} .dsbl.is-ph .dsbl-mini{width:78px} .dsbl.is-ph .dsbl-mc{width:78px;height:100px}
@media (prefers-reduced-motion:reduce){.dsbl-mini{transition:none}}`),
      O(L, {
        ...we,
        eyebrow: { type: N.String, title: `Eyebrow`, defaultValue: `All bundles` },
        heading: {
          type: N.String,
          title: `Heading`,
          defaultValue: `Sets that|*go together.*`,
          description: `*word* = accent, | = line break`,
        },
        subCopy: {
          type: N.String,
          title: `Sub copy`,
          displayTextArea: !0,
          defaultValue: `Every bundle is priced below the sum of its parts. The receipt shows exactly how far below.`,
        },
        itemsLabel: { type: N.String, title: `Items word`, defaultValue: `items` },
        subtotalLabel: { type: N.String, title: `Subtotal label`, defaultValue: `Subtotal` },
        bundleLabel: { type: N.String, title: `Bundle label`, defaultValue: `Bundle price` },
        totalLabel: { type: N.String, title: `Total label`, defaultValue: `You pay` },
        saveLabel: { type: N.String, title: `Save label`, defaultValue: `You save` },
        buttonFallback: {
          type: N.String,
          title: `Button (when the row has none)`,
          defaultValue: `Get the bundle`,
        },
        ...Se,
        ...Ce,
      }));
  }),
  Fe,
  Ie,
  Z,
  Le,
  Re,
  ze,
  Be,
  Ve,
  Q,
  He,
  Ue,
  $,
  We;
e(() => {
  (p(),
    S(),
    y(),
    m(),
    Pe(),
    ie(),
    oe(),
    le(),
    (Fe = M(se)),
    (Ie = M(L)),
    (Z = M(ae)),
    (Le = {
      CjgEbitmz: `(max-width: 809.98px)`,
      fzhyItDEX: `(min-width: 1200px)`,
      hDWNZvoOh: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (Re = []),
    (ze = `framer-jh96I`),
    (Be = {
      CjgEbitmz: `framer-v-1fbxyzb`,
      fzhyItDEX: `framer-v-1wdmkmv`,
      hDWNZvoOh: `framer-v-15o1jzm`,
    }),
    (Ve = (e, t, n) => (e && t ? `position` : n)),
    (Q = { Desktop: `fzhyItDEX`, Phone: `CjgEbitmz`, Tablet: `hDWNZvoOh` }),
    (He = ({ value: e }) =>
      C()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ue = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `fzhyItDEX`,
    })),
    ($ = D(
      f(function (e, r) {
        let i = s(null),
          a = r ?? i,
          o = n(),
          { activeLocale: c, setLocale: f } = ee();
        te();
        let { style: p, className: m, layoutId: h, variant: y, ...b } = Ue(e);
        ne(l(() => ce({}, c), [c]));
        let [S, C] = T(y, Le, !1),
          D = x(ze),
          O = t(k)?.isLayoutTemplate,
          M = !!t(g)?.transition?.layout,
          N = Ve(O, M);
        return (
          w({}),
          d(k.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Q,
              primaryVariantId: `fzhyItDEX`,
              variantClassNames: Be,
            },
            children: u(v, {
              id: h ?? o,
              children: [
                d(He, { value: `html body { background: rgb(255, 255, 255); }` }),
                u(_.div, {
                  ...b,
                  className: x(D, `framer-1wdmkmv`, m),
                  ref: a,
                  style: { ...p },
                  children: [
                    d(_.div, {
                      className: `framer-1jofwca`,
                      "data-framer-name": `S0 DsPageHero`,
                      layout: N,
                      children: d(j, {
                        children: d(E, {
                          className: `framer-1gyhxj4-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsPageHero`,
                          isAuthoredByUser: !0,
                          name: `DsPageHero`,
                          nodeId: `PfgsfxjJQ`,
                          scopeId: `MygUYNvnA`,
                          children: d(A, {
                            breakpoint: S,
                            overrides: {
                              CjgEbitmz: { bpHint: `phone` },
                              hDWNZvoOh: { bpHint: `tablet` },
                            },
                            children: d(se, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              crumbs: `Home:/, Bundles:/bundles`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `Bundles`,
                              facts: `3|bundles;$68|biggest saving;1|licence`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              height: `100%`,
                              id: `PfgsfxjJQ`,
                              index: `02`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              intro: `Three sets that go together. The saving is printed on every receipt.`,
                              layoutId: `PfgsfxjJQ`,
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
                              title: `Buy the set,|*save the difference.*`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-cx58hp`,
                      "data-framer-name": `S1 DsBundleList`,
                      layout: N,
                      children: d(j, {
                        children: d(E, {
                          className: `framer-du2kzi-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsBundleList`,
                          isAuthoredByUser: !0,
                          name: `DsBundleList`,
                          nodeId: `Sa6jxDrN0`,
                          scopeId: `MygUYNvnA`,
                          children: d(A, {
                            breakpoint: S,
                            overrides: {
                              CjgEbitmz: { bpHint: `phone` },
                              hDWNZvoOh: { bpHint: `tablet` },
                            },
                            children: d(L, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              bundleLabel: `Bundle price`,
                              buttonFallback: `Get the bundle`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `All bundles`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Sets that|*go together.*`,
                              height: `100%`,
                              id: `Sa6jxDrN0`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              itemsLabel: `items`,
                              layoutId: `Sa6jxDrN0`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsBundleList`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              saveLabel: `You save`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Every bundle is priced below the sum of its parts. The receipt shows exactly how far below.`,
                              subtotalLabel: `Subtotal`,
                              totalLabel: `You pay`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-1l5ohfr`,
                      "data-framer-name": `S2 DsFaq`,
                      layout: N,
                      children: d(j, {
                        children: d(E, {
                          className: `framer-1orhuni-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsFaq`,
                          isAuthoredByUser: !0,
                          name: `DsFaq`,
                          nodeId: `bVKaP0Bgg`,
                          scopeId: `MygUYNvnA`,
                          children: d(A, {
                            breakpoint: S,
                            overrides: {
                              CjgEbitmz: { bpHint: `phone` },
                              hDWNZvoOh: { bpHint: `tablet` },
                            },
                            children: d(ae, {
                              askButton: `Ask us`,
                              askCopy: `Write to us with your order number and we reply the same day.`,
                              askLink: `/contact`,
                              askTitle: `Something else?`,
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `FAQ`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Questions at|*the counter.*`,
                              height: `100%`,
                              id: `bVKaP0Bgg`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `bVKaP0Bgg`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsFaq`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pages: `products`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Files, licences, refunds and tools: the answers, short.`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-jh96I.framer-sgocfk, .framer-jh96I .framer-sgocfk { display: block; }`,
        `.framer-jh96I.framer-1wdmkmv { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-jh96I .framer-1jofwca, .framer-jh96I .framer-cx58hp, .framer-jh96I .framer-1l5ohfr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-jh96I .framer-1gyhxj4-container, .framer-jh96I .framer-du2kzi-container, .framer-jh96I .framer-1orhuni-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-jh96I.framer-1wdmkmv { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-jh96I.framer-1wdmkmv { width: 390px; }}`,
      ],
      `framer-jh96I`
    )),
    ($.displayName = `Bundles`),
    ($.defaultProps = { height: 1080, width: 1200 }),
    re(
      $,
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
        ...Fe,
        ...Ie,
        ...Z,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (We = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerMygUYNvnA`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"hDWNZvoOh":{"layout":["fixed","auto"]},"CjgEbitmz":{"layout":["fixed","auto"]}}}`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerColorSyntax: `true`,
            framerIntrinsicHeight: `1080`,
            framerScrollSections: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { We as __FramerMetadata__, $ as default, Re as queryParamNames };
//# sourceMappingURL=-Ld7BKzZKMnfsA5tBpQnHNjpZOgT3m2C1tYRbtpAPwU.lzxX_TAG.mjs.map
