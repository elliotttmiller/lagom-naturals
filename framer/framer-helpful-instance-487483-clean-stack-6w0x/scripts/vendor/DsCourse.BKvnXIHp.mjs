import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  E as t,
  I as n,
  R as r,
  _ as i,
  b as a,
  c as o,
  l as s,
  o as c,
  s as l,
  w as u,
  y as d,
} from "./react.iNMCLRE-.mjs";
import { $ as f, P as p, b as m, o as h, v as g } from "./framer.BNAppio8.mjs";
function _() {
  d(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = E), document.head.appendChild(e));
  }, []);
}
function v() {
  let e = f(),
    t = null;
  try {
    t = g.current();
  } catch {}
  return e || (t !== null && t !== g.preview);
}
function y() {
  let e = f(),
    [t, n] = i(!1);
  return (
    d(() => {
      !e && g.current() !== g.canvas && r !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function ee(e, n) {
  let a = String(n || ``).toLowerCase(),
    [o, s] = i(a === `phone` ? 390 : a === `tablet` ? 810 : 1440),
    [c, l] = i(a === `phone` ? 844 : a === `tablet` ? 1080 : 900);
  return (
    t(() => {
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
      let i = () => l(r.innerHeight);
      i();
      let a = () => {
          let e = Math.round(t.offsetWidth);
          e > 0 && s(e);
        },
        o = r.setTimeout(a, 150),
        c = r.setTimeout(a, 700),
        u = r.setTimeout(a, 1600);
      return (
        r.addEventListener(`resize`, i),
        r.addEventListener(`load`, a),
        () => {
          (n.disconnect(),
            r.clearTimeout(o),
            r.clearTimeout(c),
            r.clearTimeout(u),
            r.removeEventListener(`resize`, i),
            r.removeEventListener(`load`, a));
        }
      );
    }, []),
    { w: o, vh: c }
  );
}
function b(e, t, n) {
  if (r === void 0) return () => {};
  let i = r;
  if (!i.__dsTick) {
    i.__dsTick = { pre: new Set(), subs: new Set(), reads: new Set(), raf: 0 };
    let e = (t) => {
      let n = i.__dsTick;
      (n.pre.forEach((e) => e(t)),
        n.reads.forEach((e) => e(t)),
        n.subs.forEach((e) => e(t)),
        (n.raf = requestAnimationFrame(e)));
    };
    i.__dsTick.raf = requestAnimationFrame(e);
  }
  return (
    i.__dsTick.subs.add(e),
    t && i.__dsTick.reads.add(t),
    n && i.__dsTick.pre.add(n),
    () => {
      (i.__dsTick.subs.delete(e), t && i.__dsTick.reads.delete(t), n && i.__dsTick.pre.delete(n));
    }
  );
}
function x(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: P(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? M(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: P(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? M(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: P(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? M(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function te(e, t) {
  d(() => {
    if (!t || !e.current || !r.matchMedia(`(hover:hover) and (pointer:fine)`).matches) return;
    let n = e.current,
      i = () => Array.from(n.querySelectorAll(`[data-mag]`)),
      a = (e) => {
        for (let t of i()) {
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
        for (let e of i()) (e.style.setProperty(`--mx`, `0px`), e.style.setProperty(`--my`, `0px`));
      };
    return (
      n.addEventListener(`pointermove`, a),
      n.addEventListener(`pointerleave`, o),
      () => {
        (n.removeEventListener(`pointermove`, a), n.removeEventListener(`pointerleave`, o));
      }
    );
  }, [t]);
}
function S(e) {
  let [t, n] = i(!1);
  return (
    d(() => {
      if (!e) return;
      let t = document.documentElement,
        i = () => !/(^|\s)ds-hold/.test(t.className);
      if (i()) {
        n(!0);
        return;
      }
      let a = new MutationObserver(() => {
        i() && (a.disconnect(), n(!0));
      });
      a.observe(t, { attributes: !0, attributeFilter: [`class`] });
      let o = r.setTimeout(() => {
        (a.disconnect(), n(!0));
      }, 9e3);
      return () => {
        (a.disconnect(), r.clearTimeout(o));
      };
    }, [e]),
    t
  );
}
function ne(e, t, n, a = 0.16) {
  let [o, s] = i(!1),
    c = v(),
    l = S(t);
  return (
    d(() => {
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
              (o = b(() => {
                let e = i.closest(`.ds-rev.is-act`);
                (e ? parseFloat(e.style.getPropertyValue(`--rv`) || `0`) : 1) > 0.24 &&
                  (s(!0), o());
              })));
        },
        {
          threshold: Math.min(
            a,
            Math.max(0.005, (r.innerHeight * 0.3) / Math.max(1, i.offsetHeight))
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
    o || c
  );
}
function C(e) {
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
function w(e, t) {
  let [n, o] = i(t),
    s = a(``);
  return (
    Q(() => {
      let t = 0,
        n = 0,
        i = 0;
      try {
        let e = r;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[X] = 1));
      } catch {}
      let a = () => {
          let t = C(e);
          if (!t) return !1;
          let n = JSON.stringify(t);
          return (n !== s.current && ((s.current = n), o(t)), !0);
        },
        c = new MutationObserver(() => {
          a() && (i++, i > 2 && c.disconnect());
        });
      (c.observe(document.body, { childList: !0, subtree: !0 }), a() && i++);
      let l = () => {
        t++ < 30 && (a(), (n = r.setTimeout(l, 150)));
      };
      return (
        (n = r.setTimeout(l, 150)),
        () => {
          (c.disconnect(), r.clearTimeout(n));
        }
      );
    }, [e]),
    n
  );
}
function T(e) {
  let {
      eyebrow: t = `The course`,
      heading: n = `A course you'll|*actually finish.*`,
      subCopy:
        r = `Short lessons, one job each, a worksheet at the end of every module. Scroll the syllabus.`,
      course: o = `launch-in-30-days`,
      button: l = `Start the course`,
      nowLabel: u = `Now playing`,
      bpHint: f = `auto`,
    } = e,
    p = L(e),
    { D: m, B: h, M: g } = x(e);
  _();
  let b = y(),
    S = F(),
    C = v(),
    T = a(null),
    D = a(null),
    { w: O } = ee(T, f),
    k = ne(T, b, S);
  te(T, b);
  let j = O < 810,
    M = O >= 810 && O < 1100,
    N = w(`courses`, Y.courses),
    P = w(`lessons`, Y.lessons),
    I = N.find((e) => e.slug === String(o || ``).trim()) || N[0] || {},
    z = P.filter((e) => !I.slug || !e.f5 || e.f5 === I.slug),
    [B, V] = i(0);
  d(() => {
    if (!b || j || !D.current) return;
    let e = Array.from(D.current.querySelectorAll(`.dsc-row`));
    if (!e.length) return;
    let t = new IntersectionObserver(
      (e) => {
        for (let t of e) t.isIntersecting && V(Number(t.target.dataset.i || 0));
      },
      { rootMargin: `-42% 0px -48% 0px`, threshold: 0 }
    );
    return (e.forEach((e) => t.observe(e)), () => t.disconnect());
  }, [b, j, z.length]);
  let W = z[B] || z[0] || {},
    X = Math.max(1, z.length);
  return s(`section`, {
    ref: T,
    className: `ds ds-sec dsc${k ? ` is-on` : ``}${j ? ` is-ph` : M ? ` is-tab` : ``}${C ? ` is-still` : ``}`,
    style: { ...R(p), ...h, ...e.style },
    "aria-label": G(n),
    children: [
      c(`link`, { rel: `stylesheet`, href: E }),
      c(`style`, { dangerouslySetInnerHTML: { __html: U + J + $ } }),
      s(`div`, {
        className: `ds-wrap dsc-wrap`,
        children: [
          s(`div`, {
            className: `dsc-head`,
            children: [
              s(`p`, {
                className: `dsc-eb`,
                style: { ...g, ...q(k, 0) },
                children: [c(`i`, { "aria-hidden": !0 }), t],
              }),
              c(K, {
                text: n,
                on: k,
                D: m,
                size: j ? `clamp(40px,12vw,56px)` : `clamp(46px,5vw,80px)`,
                lh: 0.94,
                delay: 80,
              }),
              c(`p`, { className: `dsc-sub`, style: q(k, 240), children: r }),
            ],
          }),
          s(`div`, {
            className: `dsc-grid`,
            children: [
              s(`div`, {
                className: `dsc-player-wrap`,
                children: [
                  s(`a`, {
                    className: `dsc-player`,
                    href: `/courses/${I.slug || ``}`,
                    style: q(k, 300, 30),
                    "aria-label": `${I.f1 || ``}, ${I.f2 || ``}`,
                    children: [
                      c(`span`, {
                        className: `dsc-cov`,
                        children: c(`img`, {
                          ...A(Z(I), `(max-width: 809px) 100vw, 40vw`),
                          alt: ``,
                          loading: `lazy`,
                          decoding: `async`,
                        }),
                      }),
                      s(`span`, {
                        className: `dsc-top`,
                        style: g,
                        children: [
                          s(`span`, { children: [c(`i`, { className: `dsc-live` }), u] }),
                          s(`span`, {
                            children: [
                              String(B + 1).padStart(2, `0`),
                              ` / `,
                              String(X).padStart(2, `0`),
                            ],
                          }),
                        ],
                      }),
                      s(`span`, {
                        className: `dsc-mid`,
                        children: [
                          c(`span`, {
                            className: `dsc-play`,
                            "aria-hidden": !0,
                            children: c(`svg`, {
                              viewBox: `0 0 24 24`,
                              children: c(`path`, { d: `M8 5v14l11-7z`, fill: `currentColor` }),
                            }),
                          }),
                          s(
                            `span`,
                            {
                              className: `dsc-mod`,
                              style: g,
                              children: [I.f1 ? `${I.f1} \xb7 ` : ``, W.f3],
                            },
                            `m` + B
                          ),
                          c(`b`, { className: `dsc-title`, style: m, children: W.f1 }, `t` + B),
                          c(`span`, { className: `dsc-len`, style: g, children: W.f2 }, `l` + B),
                        ],
                      }),
                      c(`span`, {
                        className: `dsc-bar`,
                        "aria-hidden": !0,
                        children: c(`i`, { style: { width: `${((B + 1) / X) * 100}%` } }),
                      }),
                      s(`span`, {
                        className: `dsc-meta`,
                        style: g,
                        children: [
                          c(`span`, { children: I.f4 }),
                          c(`span`, { children: I.f3 }),
                          c(`span`, { children: I.f5 }),
                        ],
                      }),
                    ],
                  }),
                  s(`div`, {
                    className: `dsc-cta`,
                    style: q(k, 380),
                    children: [
                      c(`span`, { className: `dsc-price`, style: m, children: I.f2 }),
                      c(H, { href: `/courses/${I.slug || ``}`, label: l, kind: `solid` }),
                    ],
                  }),
                ],
              }),
              c(`ol`, {
                className: `dsc-list`,
                ref: D,
                children: z.map((e, t) =>
                  s(
                    `li`,
                    {
                      className: `dsc-row${B === t ? ` is-cur` : ``}${t < B ? ` is-done` : ``}`,
                      "data-i": t,
                      style: q(k, 300 + t * 60, 20),
                      onMouseEnter: () => {
                        j || V(t);
                      },
                      children: [
                        c(`span`, {
                          className: `dsc-n`,
                          style: g,
                          children: String(t + 1).padStart(2, `0`),
                        }),
                        s(`span`, {
                          className: `dsc-body`,
                          children: [
                            c(`span`, { className: `dsc-m`, style: g, children: e.f3 }),
                            c(`b`, { className: `dsc-t`, style: m, children: e.f1 }),
                            c(`span`, { className: `dsc-s`, children: e.f4 }),
                          ],
                        }),
                        c(`span`, { className: `dsc-l`, style: g, children: e.f2 }),
                        c(`i`, { className: `dsc-tick`, "aria-hidden": !0 }),
                      ],
                    },
                    e.slug || t
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
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
  Y,
  X,
  Z,
  Q,
  $,
  re = e(() => {
    (n(),
      l(),
      u(),
      p(),
      (E = `../../styles/css2-a59a76.css`),
      (D = `clamp(1280px, 92vw, 1520px)`),
      (O = [160, 320, 480, 800, 1200, 1600]),
      (k = (e) => {
        let t =
            String(e || ``)
              .trim()
              .split(`,`)
              .pop() || ``,
          n = t.match(/(\d+(?:\.\d+)?)px/),
          r = t.match(/(\d+(?:\.\d+)?)vw/),
          i = n ? parseFloat(n[1]) * 2 : r ? (parseFloat(r[1]) / 100) * 1600 * 1.25 : 1600;
        return O.find((e) => e >= i) || 1600;
      }),
      (A = (e, t) => {
        let n = String(e || ``),
          r = n.split(`?`)[0];
        if (/framerusercontent\.com\/images\//.test(n)) {
          let e = k(t);
          return {
            src: `${r}?scale-down-to=${e <= 512 ? 512 : e <= 1024 ? 1024 : 2048}`,
            srcSet: `${r}?scale-down-to=512 512w, ${r}?scale-down-to=1024 1024w, ${r}?scale-down-to=2048 2048w`,
            sizes: t,
          };
        }
        if (/images\.unsplash\.com\//.test(n)) {
          let e = k(t),
            n = (e) => `${r}?w=${e}&q=70&fm=jpg&auto=format`;
          return {
            src: n(e),
            srcSet: O.filter((t) => t <= Math.max(e * 2, 480))
              .map((e) => `${n(e)} ${e}w`)
              .join(`, `),
            sizes: t,
          };
        }
        return { src: n };
      }),
      (j = (e) => {
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
      (M = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (N = (e) => {
        let t = j(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (P = (e, t, n, r) => {
        let i = e ? N(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (F = () => {
        let [e, n] = i(!1);
        return (
          t(() => {
            n(r.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (I = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (L = (e) => ({
        bone: e.bone || I.bone,
        ink: e.ink || I.ink,
        brass: e.brass || I.brass,
        pine: e.pine || I.pine,
        fog: e.fog || I.fog,
        stone: e.stone || I.stone,
        cloud: e.cloud || I.cloud,
        night: e.night || I.night,
      })),
      (R = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (z = {
        bone: { type: h.Color, title: `Paper`, defaultValue: I.bone },
        ink: { type: h.Color, title: `Ink`, defaultValue: I.ink },
        brass: { type: h.Color, title: `Accent`, defaultValue: I.brass },
        pine: { type: h.Color, title: `Deep`, defaultValue: I.pine },
        fog: { type: h.Color, title: `Line`, defaultValue: I.fog },
        stone: { type: h.Color, title: `Muted`, defaultValue: I.stone },
        cloud: { type: h.Color, title: `White`, defaultValue: I.cloud },
        night: { type: h.Color, title: `Dark`, defaultValue: I.night },
      }),
      (B = {
        customFonts: {
          type: h.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: h.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: h.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: h.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (V = {
        bpHint: {
          type: h.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (H = ({
        href: e,
        label: t,
        kind: n = `solid`,
        arrow: r = !0,
        style: i,
        className: a,
        onClick: o,
        ariaLabel: l,
        cur: u,
        icon: d,
      }) =>
        c(`a`, {
          className: `ds-btn ds-${n}${r ? `` : ` ds-noarr`}${a ? ` ` + a : ``}`,
          "data-mag": !0,
          "data-cur": u || `go`,
          href: e,
          onClick: o,
          "aria-label": l,
          style: i,
          children: s(`span`, {
            className: `ds-tag`,
            children: [
              c(`span`, { className: `ds-hole`, "aria-hidden": !0 }),
              c(`span`, { className: `ds-fill`, "aria-hidden": !0 }),
              d,
              s(`span`, {
                className: `ds-lbl`,
                children: [
                  c(`span`, { className: `ds-l1`, children: t }),
                  c(`span`, { className: `ds-l2`, "aria-hidden": !0, children: t }),
                ],
              }),
              r &&
                c(`span`, {
                  className: `ds-arr`,
                  "aria-hidden": !0,
                  children: s(`svg`, {
                    width: `13`,
                    height: `13`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2.2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [
                      c(`path`, { d: `M6 8h12l-1 12H7z` }),
                      c(`path`, { d: `M9 8V6a3 3 0 0 1 6 0v2` }),
                    ],
                  }),
                }),
            ],
          }),
        })),
      (U = `
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
      h.Boolean,
      h.Number,
      (W = (e) =>
        String(e || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => {
            let t = e.match(/^\*(.+?)\*([.,!?;:’']*)$/);
            return t
              ? { t: t[1], tail: t[2], acc: !0 }
              : { t: e.replace(/\*/g, ``), tail: ``, acc: !1 };
          })),
      (G = (e) =>
        String(e || ``)
          .replace(/\*/g, ``)
          .replace(/\s*\|\s*/g, ` `)
          .replace(/\s+/g, ` `)
          .trim()),
      (K = ({
        text: e,
        on: t,
        D: n,
        tag: r = `h2`,
        size: i = `clamp(40px,4.8vw,72px)`,
        lh: a = 0.92,
        delay: l = 0,
        step: u = 55,
        style: d,
        className: f,
      }) => {
        let p = r,
          m = 0;
        return c(p, {
          className: `ds-hd${t ? ` is-on` : ``}${f ? ` ` + f : ``}`,
          "aria-label": G(e),
          style: { ...n, fontSize: i, lineHeight: a, ...(d || {}) },
          children: String(e)
            .split(`|`)
            .map((e, t) =>
              c(
                `span`,
                {
                  className: `ds-hd-l`,
                  "aria-hidden": !0,
                  children: W(e).map((e, t) => {
                    let n = l + m++ * u;
                    return s(
                      `span`,
                      {
                        className: `ds-hd-w${e.acc ? ` is-accw` : ``}`,
                        children: [
                          c(`span`, {
                            className: `ds-hd-i${e.acc ? ` is-acc` : ``}`,
                            style: { transitionDelay: `${n}ms`, "--pd": `${n + 500}ms` },
                            children: e.acc
                              ? s(`span`, {
                                  className: `ds-it`,
                                  children: [
                                    e.t,
                                    e.tail,
                                    c(`svg`, {
                                      className: `ds-spark`,
                                      viewBox: `0 0 24 24`,
                                      "aria-hidden": !0,
                                      children: c(`path`, {
                                        d: `M12 1.5C12.9 8 16 11.1 22.5 12 16 12.9 12.9 16 12 22.5 11.1 16 8 12.9 1.5 12 8 11.1 11.1 8 12 1.5Z`,
                                      }),
                                    }),
                                  ],
                                })
                              : s(o, { children: [e.t, e.tail] }),
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
      (q = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (J = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${D} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (Y = {
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
      (X = `DsCourse@cms1`),
      (Z = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (Q = r === void 0 ? d : t),
      ($ = `
.dsc{position:relative;background:var(--ds-bone);color:var(--ds-ink);padding:clamp(90px,10vw,150px) 0;overflow:clip;z-index:12}
.dsc-head{display:flex;flex-direction:column;align-items:flex-start;gap:18px;max-width:760px;margin-bottom:clamp(40px,5vw,72px)}
.dsc-eb{display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)} .dsc-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dsc .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dsc .ds-it{color:var(--ds-acc)}
.dsc-sub{margin:0;font-size:16.5px;line-height:1.6;color:var(--ds-mut);max-width:520px}
.dsc-grid{display:grid;grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr);gap:clamp(32px,5vw,80px);align-items:start}
.dsc-player-wrap{position:sticky;top:96px;display:flex;flex-direction:column;gap:18px}
/* player card */
.dsc-player{position:relative;display:flex;flex-direction:column;justify-content:space-between;aspect-ratio:4/3;padding:22px;border-radius:18px;overflow:hidden;background:var(--ds-night);color:var(--ds-bone);text-decoration:none;box-shadow:0 40px 90px -40px rgba(0,0,0,.6);isolation:isolate}
.dsc-cov{position:absolute;inset:0;z-index:-1} .dsc-cov img{width:100%;height:100%;object-fit:cover;display:block;opacity:.4;mix-blend-mode:luminosity;transition:scale 1.4s cubic-bezier(.16,.84,.24,1)} .dsc-player:hover .dsc-cov img{scale:1.05}
.dsc-cov::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.2),color-mix(in srgb,var(--ds-night) 85%,transparent))}
.dsc-top{display:flex;justify-content:space-between;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 80%,transparent)} .dsc-top span{display:inline-flex;align-items:center;gap:8px}
.dsc-live{width:7px;height:7px;border-radius:50%;background:var(--ds-brass);animation:dsc-blink 1.4s ease-in-out infinite} @keyframes dsc-blink{50%{opacity:.3}}
.dsc-mid{display:flex;flex-direction:column;align-items:flex-start;gap:8px}
.dsc-play{display:grid;place-items:center;width:52px;height:52px;border-radius:50%;background:var(--ds-brass);color:var(--ds-ink);margin-bottom:8px;transition:transform .5s cubic-bezier(.34,1.56,.64,1)} .dsc-play svg{width:20px;height:20px;margin-left:3px} .dsc-player:hover .dsc-play{transform:scale(1.1)}
.dsc-mod{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass);animation:dsc-in .5s cubic-bezier(.2,.8,.2,1) both}
.dsc-title{font-size:clamp(22px,2.2vw,32px);line-height:1.05;font-weight:800;letter-spacing:-.025em;animation:dsc-in .5s cubic-bezier(.2,.8,.2,1) .05s both;text-wrap:balance}
.dsc-len{font-size:11px;letter-spacing:.08em;color:color-mix(in srgb,var(--ds-bone) 70%,transparent);animation:dsc-in .5s cubic-bezier(.2,.8,.2,1) .1s both}
@keyframes dsc-in{from{opacity:0;translate:0 8px}to{opacity:1;translate:0 0}}
.dsc-bar{display:block;height:3px;margin:16px 0 12px;background:color-mix(in srgb,var(--ds-bone) 18%,transparent);border-radius:3px;overflow:hidden} .dsc-bar i{display:block;height:100%;background:var(--ds-brass);transition:width .6s cubic-bezier(.2,.8,.2,1)}
.dsc-meta{display:flex;gap:16px;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 65%,transparent)}
.dsc-cta{display:flex;align-items:center;gap:18px} .dsc-price{font-size:28px;font-weight:800;letter-spacing:-.02em}
/* lesson list */
.dsc-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;border-top:1px solid color-mix(in srgb,var(--ds-ink) 18%,transparent)}
.dsc-row{position:relative;display:grid;grid-template-columns:44px minmax(0,1fr) auto;gap:16px 18px;align-items:start;padding:22px 12px 22px 18px;border-bottom:1px solid color-mix(in srgb,var(--ds-ink) 18%,transparent);transition:background .4s;isolation:isolate}
.dsc-row::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--ds-brass);transform:scaleY(0);transform-origin:50% 0;transition:transform .5s cubic-bezier(.7,0,.2,1)} .dsc-row.is-cur::before{transform:scaleY(1)}
.dsc-row.is-cur{background:color-mix(in srgb,var(--ds-cloud) 60%,transparent)}
.dsc-n{font-size:12px;letter-spacing:.08em;color:var(--ds-mut);padding-top:4px} .dsc-row.is-cur .dsc-n{color:var(--ds-acc)}
.dsc-body{display:flex;flex-direction:column;gap:5px} .dsc-m{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-mut)} .dsc-t{font-size:clamp(18px,1.6vw,24px);line-height:1.1;font-weight:800;letter-spacing:-.02em;transition:color .3s} .dsc-row.is-done .dsc-t{color:var(--ds-mut)}
.dsc-s{display:block;font-size:14.5px;line-height:1.5;color:var(--ds-mut);max-width:520px;opacity:.85;transition:opacity .4s,color .4s} .dsc-row.is-cur .dsc-s{opacity:1;color:var(--ds-ink)}
.dsc-l{font-size:11px;letter-spacing:.06em;color:var(--ds-mut);padding-top:4px}
.dsc-tick{position:absolute;right:12px;bottom:12px;width:16px;height:16px;border-radius:50%;background:var(--ds-brass);opacity:0;scale:.5;transition:opacity .3s,scale .4s cubic-bezier(.34,1.56,.64,1)} .dsc-tick::after{content:"";position:absolute;left:5px;top:3px;width:4px;height:8px;border:solid var(--ds-ink);border-width:0 2px 2px 0;rotate:45deg} .dsc-row.is-done .dsc-tick{opacity:1;scale:1}
/* tablet + phone */
.dsc.is-tab .dsc-grid{grid-template-columns:1fr;gap:34px} .dsc.is-tab .dsc-player-wrap{position:relative;top:auto}
.dsc.is-ph .dsc-grid{grid-template-columns:1fr;gap:26px} .dsc.is-ph .dsc-player-wrap{position:relative;top:auto} .dsc.is-ph .dsc-player{padding:16px;aspect-ratio:auto;min-height:280px} .dsc.is-ph .dsc-row{grid-template-columns:34px minmax(0,1fr) auto;padding:16px 8px 16px 4px} .dsc.is-ph .dsc-row.is-cur{padding-left:12px}
.dsc.is-ph .dsc-s{opacity:1} .dsc.is-ph .dsc-t{font-size:17px} .dsc.is-ph .dsc-cta{flex-wrap:wrap}
@media (prefers-reduced-motion:reduce){.dsc-mod,.dsc-title,.dsc-len{animation:none} .dsc-live{animation:none}}`),
      m(T, {
        ...V,
        eyebrow: { type: h.String, title: `Eyebrow`, defaultValue: `The course` },
        heading: {
          type: h.String,
          title: `Heading`,
          defaultValue: `A course you'll|*actually finish.*`,
          description: `*word* = accent, | = line break`,
        },
        subCopy: {
          type: h.String,
          title: `Sub copy`,
          displayTextArea: !0,
          defaultValue: `Short lessons, one job each, a worksheet at the end of every module. Scroll the syllabus.`,
        },
        course: {
          type: h.String,
          title: `Course slug`,
          description: `A Courses row; its Lessons rows fill the list`,
          defaultValue: `launch-in-30-days`,
        },
        nowLabel: { type: h.String, title: `Player label`, defaultValue: `Now playing` },
        button: { type: h.String, title: `Button`, defaultValue: `Start the course` },
        ...z,
        ...B,
      }));
  });
export { re as n, T as t };
//# sourceMappingURL=DsCourse.BKvnXIHp.mjs.map
