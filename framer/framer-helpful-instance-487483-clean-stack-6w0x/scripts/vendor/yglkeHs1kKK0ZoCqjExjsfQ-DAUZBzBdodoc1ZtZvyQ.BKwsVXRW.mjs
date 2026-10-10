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
import { a as ee, k as g, r as _, t as v } from "./motion.dK94hszq.mjs";
import {
  $ as y,
  C as b,
  P as x,
  Q as S,
  X as C,
  Z as w,
  a as T,
  at as te,
  b as E,
  c as D,
  et as ne,
  g as O,
  i as k,
  k as A,
  o as j,
  q as re,
  tt as ie,
  v as M,
  y as ae,
} from "./framer.BNAppio8.mjs";
import { n as oe, t as se } from "./DsCourse.BKvnXIHp.mjs";
import { n as ce, t as N } from "./DsReviews.Do5b3KPj.mjs";
import { n as le, t as P } from "./DsPageHero.BMIkCPXD.mjs";
import ue, { t as de } from "./skaQXr3alcO5XM0bg0EpkQUkLEkoylxWOvdYZnW08GQ.Dpe_74Rw.mjs";
function fe() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = R), document.head.appendChild(e));
  }, []);
}
function F() {
  let e = y(),
    t = null;
  try {
    t = M.current();
  } catch {}
  return e || (t !== null && t !== M.preview);
}
function pe() {
  let e = y(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && M.current() !== M.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function me(e, t) {
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
function he(e, t, n) {
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
function ge(e) {
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
function _e(e, t) {
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
function ve(e) {
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
function ye(e, t, n, r = 0.16) {
  let [i, s] = o(!1),
    c = F(),
    l = ve(t);
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
              (o = he(() => {
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
function be(e) {
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
    Pe(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[Me] = 1));
      } catch {}
      let s = () => {
          let t = be(e);
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
      eyebrow: t = `All courses`,
      heading: n = `Learn it|*by doing it.*`,
      subCopy:
        r = `Short video lessons with a worksheet at the end of every module. Buy once, keep every lesson we add.`,
      button: i = `See the course`,
      syllabusLabel: a = `Syllabus`,
      moduleWord: o = `Module`,
      bpHint: c = `auto`,
    } = e,
    l = Se(e),
    { D: f, B: p, M: m } = ge(e);
  fe();
  let h = pe(),
    ee = xe(),
    g = F(),
    _ = s(null),
    { w: v } = me(_, c),
    y = ye(_, h, ee, 0.06);
  _e(_, h);
  let b = v < 810,
    x = v >= 810 && v < 1100,
    S = I(`courses`, X.courses),
    C = I(`lessons`, X.lessons),
    w = (e) => {
      let t = C.filter((t) => !t.f5 || !e || t.f5 === e),
        n = [];
      return (
        t.forEach((e, t) => {
          let r = e.f3 || o,
            i = n.find((e) => e.m === r);
          (i || ((i = { m: r, rows: [] }), n.push(i)), i.rows.push({ n: t + 1, r: e }));
        }),
        n
      );
    };
  return u(`section`, {
    ref: _,
    className: `ds ds-sec dscl${y ? ` is-on` : ``}${b ? ` is-ph` : x ? ` is-tab` : ``}${g ? ` is-still` : ``}`,
    style: { ...Ce(l), ...p, ...e.style },
    "aria-label": J(n),
    children: [
      d(`link`, { rel: `stylesheet`, href: R }),
      d(`style`, { dangerouslySetInnerHTML: { __html: Oe + je + Fe } }),
      u(`div`, {
        className: `ds-wrap`,
        children: [
          u(`div`, {
            className: `dscl-head`,
            children: [
              u(`p`, {
                className: `dscl-eb`,
                style: { ...m, ...Y(y, 0) },
                children: [d(`i`, { "aria-hidden": !0 }), t],
              }),
              d(Ae, {
                text: n,
                on: y,
                D: f,
                size: b ? `clamp(36px,11vw,50px)` : `clamp(40px,4.4vw,68px)`,
                lh: 0.96,
                delay: 80,
              }),
              d(`p`, { className: `dscl-sub`, style: Y(y, 240), children: r }),
            ],
          }),
          d(`div`, {
            className: `dscl-list`,
            children: S.map((e, t) => {
              let n = w(e.slug || ``);
              return u(
                `article`,
                {
                  className: `dscl-card`,
                  style: Y(y, 200 + t * 140, 34),
                  children: [
                    u(`a`, {
                      className: `dscl-player`,
                      href: `/courses/${e.slug || ``}`,
                      "aria-label": `${e.f1}, ${e.f2}`,
                      children: [
                        d(`span`, {
                          className: `dscl-cov`,
                          children: d(`img`, {
                            ...H(Ne(e), `(max-width: 809px) 100vw, 45vw`),
                            alt: ``,
                            loading: `lazy`,
                            decoding: `async`,
                          }),
                        }),
                        u(`span`, {
                          className: `dscl-top`,
                          style: m,
                          children: [
                            u(`span`, { children: [d(`i`, { className: `dscl-live` }), e.f5] }),
                            d(`span`, { children: e.f4 }),
                          ],
                        }),
                        u(`span`, {
                          className: `dscl-mid`,
                          children: [
                            d(`span`, {
                              className: `dscl-play`,
                              "aria-hidden": !0,
                              children: d(`svg`, {
                                viewBox: `0 0 24 24`,
                                children: d(`path`, { d: `M8 5v14l11-7z`, fill: `currentColor` }),
                              }),
                            }),
                            d(`b`, { className: `dscl-name`, style: f, children: e.f1 }),
                            d(`span`, { className: `dscl-sum`, children: e.f6 }),
                          ],
                        }),
                        d(`span`, {
                          className: `dscl-bar`,
                          "aria-hidden": !0,
                          children: d(`i`, {}),
                        }),
                        u(`span`, {
                          className: `dscl-meta`,
                          style: m,
                          children: [
                            d(`span`, { children: e.f4 }),
                            d(`span`, { children: e.f3 }),
                            d(`span`, { children: e.f5 }),
                          ],
                        }),
                      ],
                    }),
                    u(`div`, {
                      className: `dscl-syl`,
                      children: [
                        u(`div`, {
                          className: `dscl-sh`,
                          children: [
                            d(`span`, { style: m, children: a }),
                            d(`span`, { className: `dscl-price`, style: f, children: e.f2 }),
                          ],
                        }),
                        d(`div`, {
                          className: `dscl-groups`,
                          children: n.map((e, t) =>
                            u(
                              `div`,
                              {
                                className: `dscl-g`,
                                children: [
                                  d(`span`, { className: `dscl-gm`, style: m, children: e.m }),
                                  d(`ol`, {
                                    className: `dscl-rows`,
                                    children: e.rows.map((e) =>
                                      u(
                                        `li`,
                                        {
                                          children: [
                                            d(`span`, {
                                              className: `dscl-n`,
                                              style: m,
                                              children: String(e.n).padStart(2, `0`),
                                            }),
                                            d(`b`, { style: f, children: e.r.f1 }),
                                            d(`span`, {
                                              className: `dscl-l`,
                                              style: m,
                                              children: e.r.f2,
                                            }),
                                          ],
                                        },
                                        e.r.slug || e.n
                                      )
                                    ),
                                  }),
                                ],
                              },
                              t
                            )
                          ),
                        }),
                        d(`div`, {
                          className: `dscl-cta`,
                          children: d(De, {
                            href: `/courses/${e.slug || ``}`,
                            label: i,
                            kind: `solid`,
                          }),
                        }),
                      ],
                    }),
                  ],
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
  xe,
  q,
  Se,
  Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  J,
  Ae,
  Y,
  je,
  X,
  Me,
  Ne,
  Pe,
  Fe,
  Ie = e(() => {
    (i(),
      p(),
      m(),
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
      (xe = () => {
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
      (Se = (e) => ({
        bone: e.bone || q.bone,
        ink: e.ink || q.ink,
        brass: e.brass || q.brass,
        pine: e.pine || q.pine,
        fog: e.fog || q.fog,
        stone: e.stone || q.stone,
        cloud: e.cloud || q.cloud,
        night: e.night || q.night,
      })),
      (Ce = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (we = {
        bone: { type: j.Color, title: `Paper`, defaultValue: q.bone },
        ink: { type: j.Color, title: `Ink`, defaultValue: q.ink },
        brass: { type: j.Color, title: `Accent`, defaultValue: q.brass },
        pine: { type: j.Color, title: `Deep`, defaultValue: q.pine },
        fog: { type: j.Color, title: `Line`, defaultValue: q.fog },
        stone: { type: j.Color, title: `Muted`, defaultValue: q.stone },
        cloud: { type: j.Color, title: `White`, defaultValue: q.cloud },
        night: { type: j.Color, title: `Dark`, defaultValue: q.night },
      }),
      (Te = {
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
      (Ee = {
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
      (De = ({
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
      (Oe = `
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
      (ke = (e) =>
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
      (Ae = ({
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
                  children: ke(e).map((e, t) => {
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
      (je = `
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
        courses: [
          {
            slug: `launch-in-30-days`,
            f1: `Launch in 30 Days`,
            f2: `$149`,
            f3: `6 h 20 min`,
            f4: `14 lessons`,
            f5: `Beginner to first sale`,
            f6: `A day-by-day course that takes a product from idea to first sale: positioning, the page, the price, the launch emails.`,
            f7: `launch-course`,
            img: `https://framerusercontent.com/images/QUfZkO9VbfSRc5QPCUTWDNKYuw.webp`,
            n1: `1`,
          },
        ],
        lessons: [
          {
            slug: `l01`,
            f1: `Pick the product people already ask for`,
            f2: `09:40`,
            f3: `Module 1 · Positioning`,
            f4: `Find the one question your audience keeps asking and shape the product around the answer.`,
            f5: `launch-in-30-days`,
            n1: `1`,
          },
          {
            slug: `l02`,
            f1: `Write the promise in one line`,
            f2: `07:15`,
            f3: `Module 1 · Positioning`,
            f4: `The sentence that goes on the cover, the page and the first email, tested three ways.`,
            f5: `launch-in-30-days`,
            n1: `2`,
          },
          {
            slug: `l03`,
            f1: `Build the page in an afternoon`,
            f2: `24:30`,
            f3: `Module 2 · The page`,
            f4: `Hero, what's inside, proof, price. The four blocks that sell, in the order that works.`,
            f5: `launch-in-30-days`,
            n1: `3`,
          },
          {
            slug: `l04`,
            f1: `Price it with a ladder, not a guess`,
            f2: `18:05`,
            f3: `Module 3 · Price`,
            f4: `Three tiers, one anchor, and the bundle maths that lifts the average order.`,
            f5: `launch-in-30-days`,
            n1: `4`,
          },
          {
            slug: `l05`,
            f1: `Record the preview that converts`,
            f2: `12:50`,
            f3: `Module 2 · The page`,
            f4: `A 90-second screen recording that shows the inside and ends on the first win.`,
            f5: `launch-in-30-days`,
            n1: `5`,
          },
          {
            slug: `l06`,
            f1: `The seven launch emails`,
            f2: `31:10`,
            f3: `Module 4 · Launch`,
            f4: `Day by day: the tease, the open, the proof, the objection, the deadline, the last call, the thank-you.`,
            f5: `launch-in-30-days`,
            n1: `6`,
          },
          {
            slug: `l07`,
            f1: `Open the doors`,
            f2: `15:00`,
            f3: `Module 4 · Launch`,
            f4: `Launch day checklist, the first-hour fixes and what to reply to the first buyer.`,
            f5: `launch-in-30-days`,
            n1: `7`,
          },
          {
            slug: `l08`,
            f1: `Keep selling after launch week`,
            f2: `21:40`,
            f3: `Module 5 · After`,
            f4: `Evergreen pages, the free download funnel and the monthly email that keeps orders coming.`,
            f5: `launch-in-30-days`,
            n1: `8`,
          },
        ],
      }),
      (Me = `DsCourseList@cms1`),
      (Ne = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (Pe = a === void 0 ? h : r),
      (Fe = `
.dscl{position:relative;background:var(--ds-bone);color:var(--ds-ink);padding:clamp(70px,8vw,120px) 0 clamp(90px,10vw,150px);overflow:clip;z-index:12}
.dscl-head{display:flex;flex-direction:column;align-items:flex-start;gap:18px;max-width:760px;margin-bottom:clamp(36px,4vw,60px)}
.dscl-eb{display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)} .dscl-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dscl .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dscl .ds-it{color:var(--ds-acc)}
.dscl-sub{margin:0;font-size:16.5px;line-height:1.6;color:var(--ds-mut);max-width:520px}
.dscl-list{display:flex;flex-direction:column;gap:clamp(30px,4vw,56px)}
.dscl-card{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(24px,4vw,64px);align-items:start;padding-top:clamp(30px,4vw,56px);border-top:1px solid color-mix(in srgb,var(--ds-ink) 18%,transparent)}
.dscl-card:first-child{border-top:0;padding-top:0}
/* player card */
.dscl-player{position:relative;display:flex;flex-direction:column;justify-content:space-between;aspect-ratio:4/3;padding:22px;border-radius:18px;overflow:hidden;background:var(--ds-night);color:var(--ds-bone);text-decoration:none;box-shadow:0 40px 90px -40px rgba(0,0,0,.6);isolation:isolate;position:sticky;top:96px}
.dscl-cov{position:absolute;inset:0;z-index:-1} .dscl-cov img{width:100%;height:100%;object-fit:cover;display:block;opacity:.4;mix-blend-mode:luminosity;transition:scale 1.4s cubic-bezier(.16,.84,.24,1)} .dscl-player:hover .dscl-cov img{scale:1.05}
.dscl-cov::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.2),color-mix(in srgb,var(--ds-night) 88%,transparent))}
.dscl-top{display:flex;justify-content:space-between;gap:12px;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 80%,transparent)} .dscl-top span{display:inline-flex;align-items:center;gap:8px}
.dscl-live{width:7px;height:7px;border-radius:50%;background:var(--ds-brass)}
.dscl-mid{display:flex;flex-direction:column;align-items:flex-start;gap:10px}
.dscl-play{display:grid;place-items:center;width:52px;height:52px;border-radius:50%;background:var(--ds-brass);color:var(--ds-ink);margin-bottom:6px;transition:transform .5s cubic-bezier(.34,1.56,.64,1)} .dscl-play svg{width:20px;height:20px;margin-left:3px} .dscl-player:hover .dscl-play{transform:scale(1.1)}
.dscl-name{font-size:clamp(26px,2.6vw,38px);line-height:1;font-weight:800;letter-spacing:-.03em;text-wrap:balance}
.dscl-sum{font-size:14.5px;line-height:1.5;max-width:420px;color:color-mix(in srgb,var(--ds-bone) 78%,transparent)}
.dscl-bar{display:block;height:3px;margin:16px 0 12px;background:color-mix(in srgb,var(--ds-bone) 18%,transparent);border-radius:3px;overflow:hidden} .dscl-bar i{display:block;width:22%;height:100%;background:var(--ds-brass)}
.dscl-meta{display:flex;flex-wrap:wrap;gap:16px;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 65%,transparent)}
/* syllabus */
.dscl-syl{display:flex;flex-direction:column;gap:18px}
.dscl-sh{display:flex;justify-content:space-between;align-items:baseline;gap:14px;padding-bottom:12px;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)} .dscl-price{font-size:26px;font-weight:800;letter-spacing:-.02em;color:var(--ds-ink)}
.dscl-groups{display:flex;flex-direction:column;gap:16px}
.dscl-gm{display:block;margin-bottom:6px;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-mut)}
.dscl-rows{list-style:none;margin:0;padding:0;display:flex;flex-direction:column}
.dscl-rows li{display:grid;grid-template-columns:34px minmax(0,1fr) auto;gap:12px;align-items:baseline;padding:10px 0;border-bottom:1px dotted color-mix(in srgb,var(--ds-ink) 28%,transparent)}
.dscl-n{font-size:11px;letter-spacing:.08em;color:var(--ds-acc)} .dscl-rows b{font-size:15.5px;font-weight:700;letter-spacing:-.01em;line-height:1.2} .dscl-l{font-size:10.5px;letter-spacing:.06em;color:var(--ds-mut)}
.dscl-cta{padding-top:6px}
.dscl.is-tab .dscl-card{grid-template-columns:1fr} .dscl.is-tab .dscl-player{position:relative;top:auto}
.dscl.is-ph .dscl-card{grid-template-columns:1fr;gap:22px} .dscl.is-ph .dscl-player{position:relative;top:auto;aspect-ratio:auto;min-height:300px;padding:16px} .dscl.is-ph .dscl-name{font-size:26px} .dscl.is-ph .dscl-rows li{grid-template-columns:28px minmax(0,1fr) auto} .dscl.is-ph .dscl-rows b{font-size:14.5px}
@media (prefers-reduced-motion:reduce){.dscl-cov img,.dscl-play{transition:none}}`),
      E(L, {
        ...Ee,
        eyebrow: { type: j.String, title: `Eyebrow`, defaultValue: `All courses` },
        heading: {
          type: j.String,
          title: `Heading`,
          defaultValue: `Learn it|*by doing it.*`,
          description: `*word* = accent, | = line break`,
        },
        subCopy: {
          type: j.String,
          title: `Sub copy`,
          displayTextArea: !0,
          defaultValue: `Short video lessons with a worksheet at the end of every module. Buy once, keep every lesson we add.`,
        },
        button: { type: j.String, title: `Button`, defaultValue: `See the course` },
        syllabusLabel: { type: j.String, title: `Syllabus label`, defaultValue: `Syllabus` },
        moduleWord: {
          type: j.String,
          title: `Module word (when a lesson has none)`,
          defaultValue: `Module`,
        },
        ...we,
        ...Te,
      }));
  }),
  Z,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Q,
  Ge,
  Ke,
  $,
  qe;
e(() => {
  (p(),
    x(),
    v(),
    m(),
    oe(),
    Ie(),
    le(),
    ce(),
    de(),
    (Z = A(P)),
    (Le = A(L)),
    (Re = A(se)),
    (ze = A(N)),
    (Be = {
      jaM3a8fgK: `(min-width: 810px) and (max-width: 1199.98px)`,
      MSIm2t4Do: `(max-width: 809.98px)`,
      XNYt30lj5: `(min-width: 1200px)`,
    }),
    (Ve = []),
    (He = `framer-b3E7L`),
    (Ue = {
      jaM3a8fgK: `framer-v-jcvovt`,
      MSIm2t4Do: `framer-v-1dmke7q`,
      XNYt30lj5: `framer-v-1timge2`,
    }),
    (We = (e, t, n) => (e && t ? `position` : n)),
    (Q = { Desktop: `XNYt30lj5`, Phone: `MSIm2t4Do`, Tablet: `jaM3a8fgK` }),
    (Ge = ({ value: e }) =>
      S()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ke = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `XNYt30lj5`,
    })),
    ($ = te(
      f(function (e, r) {
        let i = s(null),
          a = r ?? i,
          o = n(),
          { activeLocale: c, setLocale: f } = ne();
        re();
        let { style: p, className: m, layoutId: h, variant: v, ...y } = Ke(e);
        ie(l(() => ue({}, c), [c]));
        let [x, S] = w(v, Be, !1),
          te = b(He),
          E = t(D)?.isLayoutTemplate,
          A = !!t(ee)?.transition?.layout,
          j = We(E, A);
        return (
          C({}),
          d(D.Provider, {
            value: {
              activeVariantId: x,
              humanReadableVariantMap: Q,
              primaryVariantId: `XNYt30lj5`,
              variantClassNames: Ue,
            },
            children: u(_, {
              id: h ?? o,
              children: [
                d(Ge, { value: `html body { background: rgb(255, 255, 255); }` }),
                u(g.div, {
                  ...y,
                  className: b(te, `framer-1timge2`, m),
                  ref: a,
                  style: { ...p },
                  children: [
                    d(g.div, {
                      className: `framer-ickd5b`,
                      "data-framer-name": `S0 DsPageHero`,
                      layout: j,
                      children: d(k, {
                        children: d(T, {
                          className: `framer-kuunwc-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsPageHero`,
                          isAuthoredByUser: !0,
                          name: `DsPageHero`,
                          nodeId: `iry1WQicn`,
                          scopeId: `mUfdvkYKK`,
                          children: d(O, {
                            breakpoint: x,
                            overrides: {
                              jaM3a8fgK: { bpHint: `tablet` },
                              MSIm2t4Do: { bpHint: `phone` },
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
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              crumbs: `Home:/, Courses:/courses`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `Courses`,
                              facts: `14|lessons;6 h 20|of video;1,280|students`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              height: `100%`,
                              id: `iry1WQicn`,
                              index: `03`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              intro: `Video courses with one job per lesson and a worksheet at the end of every module.`,
                              layoutId: `iry1WQicn`,
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
                              title: `Short lessons,|*real launches.*`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(g.div, {
                      className: `framer-2sgjo2`,
                      "data-framer-name": `S1 DsCourseList`,
                      layout: j,
                      children: d(k, {
                        children: d(T, {
                          className: `framer-1oy646h-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsCourseList`,
                          isAuthoredByUser: !0,
                          name: `DsCourseList`,
                          nodeId: `qgo6Bv83W`,
                          scopeId: `mUfdvkYKK`,
                          children: d(O, {
                            breakpoint: x,
                            overrides: {
                              jaM3a8fgK: { bpHint: `tablet` },
                              MSIm2t4Do: { bpHint: `phone` },
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
                              button: `See the course`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `All courses`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Learn it|*by doing it.*`,
                              height: `100%`,
                              id: `qgo6Bv83W`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `qgo6Bv83W`,
                              moduleWord: `Module`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsCourseList`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Short video lessons with a worksheet at the end of every module. Buy once, keep every lesson we add.`,
                              syllabusLabel: `Syllabus`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(g.div, {
                      className: `framer-f2kmi7`,
                      "data-framer-name": `S2 DsCourse`,
                      layout: j,
                      children: d(k, {
                        children: d(T, {
                          className: `framer-2nt0cj-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsCourse`,
                          isAuthoredByUser: !0,
                          name: `DsCourse`,
                          nodeId: `GqQR9H3Gj`,
                          scopeId: `mUfdvkYKK`,
                          children: d(O, {
                            breakpoint: x,
                            overrides: {
                              jaM3a8fgK: { bpHint: `tablet` },
                              MSIm2t4Do: { bpHint: `phone` },
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
                              button: `Start the course`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              course: `launch-in-30-days`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `The course`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `A course you'll|*actually finish.*`,
                              height: `100%`,
                              id: `GqQR9H3Gj`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `GqQR9H3Gj`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsCourse`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              nowLabel: `Now playing`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Short lessons, one job each, a worksheet at the end of every module. Scroll the syllabus.`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(g.div, {
                      className: `framer-13gjipj`,
                      "data-framer-name": `S3 DsReviews`,
                      layout: j,
                      children: d(k, {
                        children: d(T, {
                          className: `framer-dj7s7d-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsReviews`,
                          isAuthoredByUser: !0,
                          name: `DsReviews`,
                          nodeId: `YR2TsFBWG`,
                          scopeId: `mUfdvkYKK`,
                          children: d(O, {
                            breakpoint: x,
                            overrides: {
                              jaM3a8fgK: { bpHint: `tablet` },
                              MSIm2t4Do: { bpHint: `phone` },
                            },
                            children: d(N, {
                              allLabel: `All reviews`,
                              allLink: `/reviews`,
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
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `Reviews`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Receipts from|*real buyers.*`,
                              height: `100%`,
                              id: `YR2TsFBWG`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `YR2TsFBWG`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsReviews`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              stampLabel: `Verified`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Every review is tied to an order. Drag the wall.`,
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
        `.framer-b3E7L.framer-z7ucvb, .framer-b3E7L .framer-z7ucvb { display: block; }`,
        `.framer-b3E7L.framer-1timge2 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-b3E7L .framer-ickd5b, .framer-b3E7L .framer-2sgjo2, .framer-b3E7L .framer-f2kmi7, .framer-b3E7L .framer-13gjipj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-b3E7L .framer-kuunwc-container, .framer-b3E7L .framer-1oy646h-container, .framer-b3E7L .framer-2nt0cj-container, .framer-b3E7L .framer-dj7s7d-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-b3E7L.framer-1timge2 { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-b3E7L.framer-1timge2 { width: 390px; }}`,
      ],
      `framer-b3E7L`
    )),
    ($.displayName = `Courses`),
    ($.defaultProps = { height: 1080, width: 1200 }),
    ae(
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
        ...Z,
        ...Le,
        ...Re,
        ...ze,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (qe = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramermUfdvkYKK`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
            framerScrollSections: `false`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicHeight: `1080`,
            framerIntrinsicWidth: `1200`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"jaM3a8fgK":{"layout":["fixed","auto"]},"MSIm2t4Do":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { qe as __FramerMetadata__, $ as default, Ve as queryParamNames };
//# sourceMappingURL=yglkeHs1kKK0ZoCqjExjsfQ-DAUZBzBdodoc1ZtZvyQ.BKwsVXRW.mjs.map
