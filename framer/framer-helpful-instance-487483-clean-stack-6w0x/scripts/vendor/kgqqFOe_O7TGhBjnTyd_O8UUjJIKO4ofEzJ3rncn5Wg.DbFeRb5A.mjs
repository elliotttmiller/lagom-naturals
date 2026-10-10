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
  g as j,
  i as M,
  k as N,
  o as P,
  q as ee,
  tt as te,
  v as F,
  y as ne,
} from "./framer.BNAppio8.mjs";
import { n as re, t as ie } from "./DsFree.D__mpTpn.mjs";
import { n as ae, t as oe } from "./DsPageHero.BMIkCPXD.mjs";
import se, { t as ce } from "./6K9WBwUz9UC-iy89HovUmG_d8yjJWeM6z2fcQ0wjn4M.3qwIDbhn.mjs";
function le() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = L), document.head.appendChild(e));
  }, []);
}
function ue() {
  let e = b(),
    t = null;
  try {
    t = F.current();
  } catch {}
  return e || (t !== null && t !== F.preview);
}
function de() {
  let e = b(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && F.current() !== F.canvas && a !== void 0 && n(!0);
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
      fontFamily: H(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? V(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: H(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? V(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: H(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? V(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
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
  try {
    let t = new IntersectionObserver(
      (n) => {
        n[0].isIntersecting &&
          (t.disconnect(),
          e.querySelectorAll(`img`).forEach((e) => {
            try {
              ((e.loading = `eager`), e.decode().catch(() => {}));
            } catch {}
          }));
      },
      { rootMargin: `150% 0px 150% 0px` }
    );
    t.observe(e);
  } catch {}
}
function _e(e, t, n, r) {
  h(() => {
    if (!t || n || !e.current) return;
    let i = e.current,
      o = !0,
      s = -9,
      c = -1,
      l = -1,
      u = !1;
    ge(i);
    let d = new IntersectionObserver(
      (e) => {
        o = e[0].isIntersecting;
      },
      { rootMargin: `25% 0px 25% 0px` }
    );
    d.observe(i);
    let f = 0,
      p = 0,
      m = 1,
      h = !1,
      g = pe(
        () => {
          if (!h) return;
          let e = U((m - f) / (m + p)),
            t = p > m * 1.05 ? U(-f / (p - m)) : e;
          (c < 0
            ? ((c = e), (l = t))
            : ((c += (e - c) * K),
              (l += (t - l) * K),
              Math.abs(e - c) < 5e-4 && (c = e),
              Math.abs(t - l) < 5e-4 && (l = t)),
            (u = c === e && l === t),
            !(Math.abs(c + l - s) < 3e-4) &&
              ((s = c + l),
              i.style.setProperty(`--sp`, c.toFixed(4)),
              i.style.setProperty(`--pp`, l.toFixed(4)),
              r && r(c, l)));
        },
        () => {
          if (!o && u) {
            h = !1;
            return;
          }
          let e = i.getBoundingClientRect();
          ((f = e.top), (p = e.height), (m = a.innerHeight || 1), (h = !0));
        }
      );
    return () => {
      (g(), d.disconnect());
    };
  }, [t, n]);
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
    c = ue(),
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
function xe(e, t) {
  let [n, r] = o(t),
    i = s(``);
  return (
    Be(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[Le] = 1));
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
function I(e) {
  let {
      heading: t = `Notes from|*the back room.*`,
      subCopy:
        n = `Pricing, launches and what we learned selling files. New notes land here first.`,
      featuredLabel: r = `Latest`,
      allLabel: i = `All`,
      readLabel: a = `Read the note`,
      listLabel: c = `Earlier notes`,
      filterLabel: l = `Filter by kind`,
      emptyText: f = `No notes of that kind yet.`,
      linkBase: p = `/notes/`,
      bpHint: m = `auto`,
    } = e,
    h = Ee(e),
    { D: g, B: _, M: v } = me(e);
  le();
  let y = de(),
    b = Te(),
    x = ue(),
    S = s(null),
    { w: C } = fe(S, m),
    w = ye(S, y, b);
  (he(S, y), _e(S, y, b));
  let T = C < 810,
    E = C >= 810 && C < 1100,
    D = xe(`posts`, Ie.posts),
    O = Array.from(new Set(D.map((e) => String(e.f2 || ``).trim()).filter(Boolean))),
    [k, A] = o(``),
    j = D[0],
    M = D.slice(1).filter((e) => !k || String(e.f2 || ``).trim() === k),
    N = String(p || `/notes/`).replace(/\/?$/, `/`);
  return u(`section`, {
    ref: S,
    className: `ds ds-sec dsnl${w ? ` is-on` : ``}${T ? ` is-ph` : E ? ` is-tab` : ``}${x ? ` is-still` : ``}`,
    style: { ...De(h), ..._, ...e.style },
    "aria-label": q(t),
    children: [
      d(`link`, { rel: `stylesheet`, href: L }),
      d(`style`, { dangerouslySetInnerHTML: { __html: je + Fe + Ve } }),
      u(`div`, {
        className: `ds-wrap`,
        children: [
          u(`div`, {
            className: `dsnl-head`,
            children: [
              d(Ne, {
                text: t,
                on: w,
                D: g,
                size: T ? `clamp(36px,10vw,48px)` : `clamp(40px,4.2vw,64px)`,
                lh: 0.96,
                delay: 60,
              }),
              d(`p`, { className: `dsnl-sub`, style: J(w, 200), children: n }),
            ],
          }),
          j &&
            u(`a`, {
              className: `dsnl-feat`,
              href: `${N}${j.slug || ``}`,
              style: J(w, 260, 30),
              children: [
                d(Pe, {
                  src: X(j),
                  alt: ``,
                  on: w,
                  shape: `left`,
                  ratio: `16/10`,
                  par: 0.8,
                  radius: 8,
                  sizes: `(max-width: 809px) 100vw, 56vw`,
                  className: `dsnl-fum`,
                }),
                u(`span`, {
                  className: `dsnl-fbody`,
                  children: [
                    u(`span`, {
                      className: `dsnl-ftop`,
                      style: v,
                      children: [
                        d(`b`, { children: r }),
                        d(`i`, { "aria-hidden": !0 }),
                        d(`span`, { children: j.f2 }),
                      ],
                    }),
                    d(`h3`, { className: `dsnl-ft`, style: g, children: j.f1 }),
                    d(`span`, { className: `dsnl-fs`, children: j.f4 }),
                    u(`span`, {
                      className: `dsnl-fby`,
                      style: v,
                      children: [
                        d(`span`, { children: j.f6 }),
                        d(`i`, { "aria-hidden": !0 }),
                        d(`span`, { children: j.f7 }),
                        d(`i`, { "aria-hidden": !0 }),
                        d(`span`, { children: j.f3 }),
                      ],
                    }),
                    u(`span`, { className: `dsnl-read`, style: v, children: [a, d(G, { s: 13 })] }),
                  ],
                }),
              ],
            }),
          u(`div`, {
            className: `dsnl-bar`,
            style: J(w, 340),
            children: [
              d(`span`, { className: `dsnl-ll`, style: v, children: c }),
              u(`div`, {
                className: `dsnl-chips`,
                role: `group`,
                "aria-label": l,
                children: [
                  d(`button`, {
                    type: `button`,
                    className: `dsnl-chip${k ? `` : ` is-on`}`,
                    style: v,
                    onClick: () => A(``),
                    "aria-pressed": !k,
                    children: i,
                  }),
                  O.map((e) =>
                    d(
                      `button`,
                      {
                        type: `button`,
                        className: `dsnl-chip${k === e ? ` is-on` : ``}`,
                        style: v,
                        onClick: () => A(k === e ? `` : e),
                        "aria-pressed": k === e,
                        children: e,
                      },
                      e
                    )
                  ),
                ],
              }),
            ],
          }),
          u(`div`, {
            className: `dsnl-list`,
            children: [
              M.map((e, t) =>
                u(
                  `a`,
                  {
                    className: `dsnl-row`,
                    href: `${N}${e.slug || ``}`,
                    style: J(w, 380 + t * 60, 18),
                    children: [
                      d(`span`, { className: `dsnl-rd`, style: v, children: e.f7 }),
                      d(`span`, { className: `dsnl-rk`, style: v, children: e.f2 }),
                      d(`span`, { className: `dsnl-rt`, style: g, children: e.f1 }),
                      d(`span`, { className: `dsnl-rr`, style: v, children: e.f3 }),
                      d(`span`, {
                        className: `dsnl-ra`,
                        "aria-hidden": !0,
                        children: d(G, { s: 15 }),
                      }),
                      d(`span`, {
                        className: `dsnl-peek`,
                        "aria-hidden": !0,
                        children: d(`img`, {
                          ...B(X(e), `180px`),
                          alt: ``,
                          loading: `lazy`,
                          decoding: `async`,
                        }),
                      }),
                    ],
                  },
                  e.slug || t
                )
              ),
              !M.length && d(`p`, { className: `dsnl-empty`, style: v, children: f }),
            ],
          }),
        ],
      }),
    ],
  });
}
var L,
  Se,
  R,
  z,
  B,
  Ce,
  V,
  we,
  H,
  Te,
  U,
  W,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  G,
  K,
  Me,
  q,
  Ne,
  J,
  Y,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  X,
  Be,
  Ve,
  He = e(() => {
    (i(),
      p(),
      m(),
      S(),
      (L = `../../styles/css2-a59a76.css`),
      (Se = `clamp(1280px, 92vw, 1520px)`),
      (R = [160, 320, 480, 800, 1200, 1600]),
      (z = (e) => {
        let t =
            String(e || ``)
              .trim()
              .split(`,`)
              .pop() || ``,
          n = t.match(/(\d+(?:\.\d+)?)px/),
          r = t.match(/(\d+(?:\.\d+)?)vw/),
          i = n ? parseFloat(n[1]) * 2 : r ? (parseFloat(r[1]) / 100) * 1600 * 1.25 : 1600;
        return R.find((e) => e >= i) || 1600;
      }),
      (B = (e, t) => {
        let n = String(e || ``),
          r = n.split(`?`)[0];
        if (/framerusercontent\.com\/images\//.test(n)) {
          let e = z(t);
          return {
            src: `${r}?scale-down-to=${e <= 512 ? 512 : e <= 1024 ? 1024 : 2048}`,
            srcSet: `${r}?scale-down-to=512 512w, ${r}?scale-down-to=1024 1024w, ${r}?scale-down-to=2048 2048w`,
            sizes: t,
          };
        }
        if (/images\.unsplash\.com\//.test(n)) {
          let e = z(t),
            n = (e) => `${r}?w=${e}&q=70&fm=jpg&auto=format`;
          return {
            src: n(e),
            srcSet: R.filter((t) => t <= Math.max(e * 2, 480))
              .map((e) => `${n(e)} ${e}w`)
              .join(`, `),
            sizes: t,
          };
        }
        return { src: n };
      }),
      (Ce = (e) => {
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
      (V = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (we = (e) => {
        let t = Ce(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (H = (e, t, n, r) => {
        let i = e ? we(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (Te = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (U = (e) => Math.min(1, Math.max(0, e))),
      (W = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (Ee = (e) => ({
        bone: e.bone || W.bone,
        ink: e.ink || W.ink,
        brass: e.brass || W.brass,
        pine: e.pine || W.pine,
        fog: e.fog || W.fog,
        stone: e.stone || W.stone,
        cloud: e.cloud || W.cloud,
        night: e.night || W.night,
      })),
      (De = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (Oe = {
        bone: { type: P.Color, title: `Paper`, defaultValue: W.bone },
        ink: { type: P.Color, title: `Ink`, defaultValue: W.ink },
        brass: { type: P.Color, title: `Accent`, defaultValue: W.brass },
        pine: { type: P.Color, title: `Deep`, defaultValue: W.pine },
        fog: { type: P.Color, title: `Line`, defaultValue: W.fog },
        stone: { type: P.Color, title: `Muted`, defaultValue: W.stone },
        cloud: { type: P.Color, title: `White`, defaultValue: W.cloud },
        night: { type: P.Color, title: `Dark`, defaultValue: W.night },
      }),
      (ke = {
        customFonts: {
          type: P.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: P.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: P.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: P.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (Ae = {
        bpHint: {
          type: P.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (je = `
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
      (G = ({ s: e = 15 }) =>
        d(`svg`, {
          width: e,
          height: e,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          "aria-hidden": !0,
          children: d(`path`, { d: `M5 12h14M13 5l7 7-7 7` }),
        })),
      (K = 0.18),
      P.Boolean,
      P.Number,
      (Me = (e) =>
        String(e || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => {
            let t = e.match(/^\*(.+?)\*([.,!?;:’']*)$/);
            return t
              ? { t: t[1], tail: t[2], acc: !0 }
              : { t: e.replace(/\*/g, ``), tail: ``, acc: !1 };
          })),
      (q = (e) =>
        String(e || ``)
          .replace(/\*/g, ``)
          .replace(/\s*\|\s*/g, ` `)
          .replace(/\s+/g, ` `)
          .trim()),
      (Ne = ({
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
          "aria-label": q(e),
          style: { ...n, fontSize: i, lineHeight: a, ...(l || {}) },
          children: String(e)
            .split(`|`)
            .map((e, t) =>
              d(
                `span`,
                {
                  className: `ds-hd-l`,
                  "aria-hidden": !0,
                  children: Me(e).map((e, t) => {
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
      (J = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (Y = {
        up: [`inset(100% 0 0 0)`, `inset(0 0 0 0)`],
        down: [`inset(0 0 100% 0)`, `inset(0 0 0 0)`],
        left: [`inset(0 100% 0 0)`, `inset(0 0 0 0)`],
        right: [`inset(0 0 0 100%)`, `inset(0 0 0 0)`],
        diag: [`polygon(0 100%,0 100%,0 100%,0 100%)`, `polygon(0 -160%,260% 100%,0 100%,0 100%)`],
        iris: [`circle(0% at 50% 55%)`, `circle(85% at 50% 55%)`],
        arch: [`inset(100% 0 0 0 round 999px 999px 0 0)`, `inset(0 0 0 0 round 999px 999px 0 0)`],
        slit: [`inset(0 50% 0 50%)`, `inset(0 0 0 0)`],
      }),
      (Pe = ({
        src: e,
        alt: t = ``,
        on: n,
        shape: r = `up`,
        ratio: i = `4/5`,
        delay: a = 0,
        par: o = 1,
        focus: s = `50% 40%`,
        radius: c = 4,
        sizes: l = `(max-width: 809px) 100vw, 50vw`,
        style: u,
        className: f,
        eager: p = !1,
      }) => {
        let m = Y[r] || Y.up,
          h = B(e, l);
        return d(`div`, {
          className: `ds-um${n ? ` is-on` : ``}${f ? ` ` + f : ``}`,
          style: {
            aspectRatio: i,
            borderRadius: c,
            clipPath: n ? m[1] : m[0],
            WebkitClipPath: n ? m[1] : m[0],
            transitionDelay: `${a}ms`,
            "--par": o,
            ...(u || {}),
          },
          children: d(`img`, {
            src: h.src,
            srcSet: h.srcSet,
            sizes: h.sizes,
            alt: t,
            loading: p ? `eager` : `lazy`,
            decoding: `async`,
            draggable: !1,
            style: { objectPosition: s, transitionDelay: `${a}ms` },
          }),
        });
      }),
      (Fe = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${Se} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (Ie = {
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
        posts: [
          {
            slug: `price-ladders`,
            f1: `Three price ladders that lifted our average order`,
            f2: `Playbook`,
            f3: `6 min`,
            f4: `The exact tiers we run on the shelf, why the middle one is the anchor, and the bundle maths behind it.`,
            f5: `## Why three tiers

One price is a yes/no. Three prices are a choice.

## The anchor

The middle tier does the selling.`,
            f6: `Studio`,
            f7: `Sep 18, 2026`,
            img: `https://framerusercontent.com/images/2GmZi7W3dkbtzxxNixGkQ3m4Uc.webp`,
            n1: `1`,
          },
          {
            slug: `free-download-funnel`,
            f1: `The free download that pays for the ads`,
            f2: `Growth`,
            f3: `5 min`,
            f4: `How the free guide page turned a 2% email rate into 11%, and the three emails that follow it.`,
            f5: `## The page

One file, one field, one button.

## The emails

The file, the story, the offer.`,
            f6: `Studio`,
            f7: `Sep 9, 2026`,
            img: `https://framerusercontent.com/images/YTCDUh9lvGc3V5087X1QlcTDklI.webp`,
            n1: `2`,
          },
          {
            slug: `update-policy`,
            f1: `Why every product gets free updates for life`,
            f2: `Notes`,
            f3: `4 min`,
            f4: `Updates are the cheapest marketing we run: every new version is an email people are glad to open.`,
            f5: `## The rule

Buy once, keep it forever.

## What it costs

Less than one refund.`,
            f6: `Studio`,
            f7: `Aug 28, 2026`,
            img: `https://framerusercontent.com/images/fOFbgq5ch0e1COmT6ABH5rOr5c.webp`,
            n1: `3`,
          },
        ],
      }),
      (Le = `DsNotesList@cms1`),
      (Re = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (ze = `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20400%20500'%20preserveAspectRatio%3D'xMidYMid%20slice'%3E%3Crect%20width%3D'400'%20height%3D'500'%20fill%3D'%23D3D8E2'%2F%3E%3Crect%20x%3D'120'%20y%3D'170'%20width%3D'160'%20height%3D'160'%20rx%3D'8'%20fill%3D'none'%20stroke%3D'%23AEB6C6'%20stroke-width%3D'1.5'%2F%3E%3Crect%20x%3D'100'%20y%3D'150'%20width%3D'200'%20height%3D'200'%20rx%3D'10'%20fill%3D'none'%20stroke%3D'%23C3CAD8'%20stroke-width%3D'1'%20stroke-dasharray%3D'2%206'%2F%3E%3C%2Fsvg%3E`),
      (X = (e, t = `img`) => Re(e, t) || ze),
      (Be = a === void 0 ? h : r),
      (Ve = `
.dsnl{position:relative;background:var(--ds-bone);color:var(--ds-ink);padding:clamp(70px,8vw,120px) 0 clamp(90px,10vw,150px);overflow:clip;z-index:12}
.dsnl-head{display:flex;flex-direction:column;align-items:flex-start;gap:16px;max-width:720px;margin-bottom:clamp(34px,4vw,56px)}
.dsnl .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dsnl .ds-it{color:var(--ds-acc)}
.dsnl-sub{margin:0;font-size:16.5px;line-height:1.6;color:var(--ds-mut);max-width:520px}
/* feature card */
.dsnl-feat{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);gap:clamp(24px,4vw,56px);align-items:center;padding:clamp(18px,2.4vw,32px);border-radius:16px;background:var(--ds-cloud);color:var(--ds-ink);text-decoration:none;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 10%,transparent);transition:box-shadow .4s,transform .5s cubic-bezier(.2,.8,.2,1)}
.dsnl-feat:hover{transform:translateY(-3px);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 10%,transparent),0 30px 60px -34px color-mix(in srgb,var(--ds-ink) 60%,transparent)}
.dsnl-fum{width:100%} .dsnl-fum img{filter:saturate(.85)}
.dsnl-fbody{display:flex;flex-direction:column;align-items:flex-start;gap:12px}
.dsnl-ftop{display:flex;align-items:baseline;gap:10px;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-mut)} .dsnl-ftop b{font-weight:500;color:var(--ds-acc)} .dsnl-ftop i{width:22px;border-bottom:1px dotted color-mix(in srgb,var(--ds-ink) 40%,transparent);translate:0 -3px}
.dsnl-ft{margin:0;font-size:clamp(26px,2.6vw,38px);line-height:1.05;font-weight:800;letter-spacing:-.03em;text-wrap:balance}
.dsnl-fs{font-size:15.5px;line-height:1.55;color:var(--ds-mut)}
.dsnl-fby{display:flex;flex-wrap:wrap;align-items:baseline;gap:8px;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--ds-mut)} .dsnl-fby i{width:14px;border-bottom:1px dotted color-mix(in srgb,var(--ds-ink) 40%,transparent);translate:0 -3px}
.dsnl-read{display:inline-flex;align-items:center;gap:8px;margin-top:6px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-acc)} .dsnl-read svg{transition:translate .3s} .dsnl-feat:hover .dsnl-read svg{translate:4px 0}
/* filter bar */
.dsnl-bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;margin:clamp(40px,5vw,64px) 0 8px}
.dsnl-ll{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)}
.dsnl-chips{display:flex;flex-wrap:wrap;gap:8px}
.dsnl-chip{padding:8px 13px;border:0;border-radius:999px;background:transparent;color:var(--ds-ink);font:inherit;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 22%,transparent);transition:background .3s,color .3s,box-shadow .3s}
.dsnl-chip:hover{box-shadow:inset 0 0 0 1px var(--ds-ink)} .dsnl-chip.is-on{background:var(--ds-ink);color:var(--ds-bone);box-shadow:none}
/* receipt rows */
.dsnl-list{display:flex;flex-direction:column;border-top:1px solid color-mix(in srgb,var(--ds-ink) 18%,transparent)}
.dsnl-row{position:relative;display:grid;grid-template-columns:120px 130px minmax(0,1fr) 70px 30px;gap:18px;align-items:center;padding:22px 8px;border-bottom:1px solid color-mix(in srgb,var(--ds-ink) 18%,transparent);text-decoration:none;color:inherit;isolation:isolate;transition:padding .3s}
.dsnl-row::before{content:"";position:absolute;inset:-1px -6px;z-index:-1;background:var(--ds-cloud);opacity:0;transition:opacity .3s} .dsnl-row:hover::before,.dsnl-row:focus-visible::before{opacity:1} .dsnl-row:focus-visible{outline-offset:-4px!important}
.dsnl-rd,.dsnl-rk,.dsnl-rr{font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--ds-mut)} .dsnl-row:hover .dsnl-rk{color:var(--ds-acc)}
.dsnl-rt{font-size:clamp(18px,1.6vw,24px);line-height:1.15;font-weight:800;letter-spacing:-.02em;transition:translate .4s cubic-bezier(.2,.8,.2,1)} .dsnl-row:hover .dsnl-rt{translate:6px 0}
.dsnl-ra{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:color-mix(in srgb,var(--ds-ink) 7%,transparent);color:var(--ds-ink);transition:background .3s,color .3s} .dsnl-row:hover .dsnl-ra{background:var(--ds-brass);color:var(--ds-ink)}
.dsnl-peek{position:absolute;right:70px;top:50%;z-index:2;width:150px;aspect-ratio:4/3;translate:0 -50%;border-radius:6px;overflow:hidden;background:var(--ds-pine);box-shadow:0 24px 44px -20px rgba(0,0,0,.5);opacity:0;scale:.86;rotate:-3deg;transition:opacity .3s,scale .45s cubic-bezier(.34,1.56,.64,1),rotate .45s cubic-bezier(.34,1.56,.64,1);pointer-events:none}
.dsnl-peek img{width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.85)} .dsnl-row:hover .dsnl-peek,.dsnl-row:focus-visible .dsnl-peek{opacity:1;scale:1;rotate:-2deg}
.dsnl-empty{margin:0;padding:34px 8px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-mut)}
/* tablet + phone */
.dsnl.is-tab .dsnl-feat{grid-template-columns:1fr} .dsnl.is-tab .dsnl-row{grid-template-columns:100px minmax(0,1fr) 60px 30px} .dsnl.is-tab .dsnl-rk{display:none} .dsnl.is-tab .dsnl-peek{display:none}
.dsnl.is-ph .dsnl-feat{grid-template-columns:1fr;gap:18px;padding:14px;border-radius:12px} .dsnl.is-ph .dsnl-ft{font-size:24px}
.dsnl.is-ph .dsnl-bar{flex-direction:column;align-items:flex-start} .dsnl.is-ph .dsnl-row{grid-template-columns:minmax(0,1fr) 30px;grid-template-areas:"d a" "t a" "k a";gap:6px 12px;padding:16px 4px} .dsnl.is-ph .dsnl-rd{grid-area:d} .dsnl.is-ph .dsnl-rt{grid-area:t;font-size:18px} .dsnl.is-ph .dsnl-rk{grid-area:k} .dsnl.is-ph .dsnl-rr{display:none} .dsnl.is-ph .dsnl-ra{grid-area:a;align-self:center} .dsnl.is-ph .dsnl-peek{display:none} .dsnl.is-ph .dsnl-row:hover .dsnl-rt{translate:0 0}
@media (prefers-reduced-motion:reduce){.dsnl-peek{transition:none} .dsnl-feat{transition:none}}`),
      O(I, {
        ...Ae,
        heading: {
          type: P.String,
          title: `Heading`,
          defaultValue: `Notes from|*the back room.*`,
          description: `*word* = accent, | = line break`,
        },
        subCopy: {
          type: P.String,
          title: `Sub copy`,
          displayTextArea: !0,
          defaultValue: `Pricing, launches and what we learned selling files. New notes land here first.`,
        },
        featuredLabel: { type: P.String, title: `Feature label`, defaultValue: `Latest` },
        listLabel: { type: P.String, title: `List label`, defaultValue: `Earlier notes` },
        filterLabel: { type: P.String, title: `Filter label`, defaultValue: `Filter by kind` },
        allLabel: { type: P.String, title: `All chip`, defaultValue: `All` },
        readLabel: { type: P.String, title: `Read label`, defaultValue: `Read the note` },
        emptyText: {
          type: P.String,
          title: `Empty text`,
          defaultValue: `No notes of that kind yet.`,
        },
        linkBase: {
          type: P.String,
          title: `Note link base`,
          defaultValue: `/notes/`,
          description: `The note's slug is appended`,
        },
        ...Oe,
        ...ke,
      }));
  }),
  Ue,
  Z,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Q,
  Xe,
  Ze,
  $,
  Qe;
e(() => {
  (p(),
    S(),
    y(),
    m(),
    re(),
    He(),
    ae(),
    ce(),
    (Ue = N(oe)),
    (Z = N(I)),
    (We = N(ie)),
    (Ge = {
      JpDDwr2gt: `(max-width: 809.98px)`,
      pUjGGxqst: `(min-width: 810px) and (max-width: 1199.98px)`,
      sBM6hyF7n: `(min-width: 1200px)`,
    }),
    (Ke = []),
    (qe = `framer-dVK92`),
    (Je = {
      JpDDwr2gt: `framer-v-1ydv8lp`,
      pUjGGxqst: `framer-v-l5rmtu`,
      sBM6hyF7n: `framer-v-1ioxl1g`,
    }),
    (Ye = (e, t, n) => (e && t ? `position` : n)),
    (Q = { Desktop: `sBM6hyF7n`, Phone: `JpDDwr2gt`, Tablet: `pUjGGxqst` }),
    (Xe = ({ value: e }) =>
      C()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ze = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `sBM6hyF7n`,
    })),
    ($ = D(
      f(function (e, r) {
        let i = s(null),
          a = r ?? i,
          o = n(),
          { activeLocale: c, setLocale: f } = A();
        ee();
        let { style: p, className: m, layoutId: h, variant: y, ...b } = Ze(e);
        te(l(() => se({}, c), [c]));
        let [S, C] = T(y, Ge, !1),
          D = x(qe),
          O = t(k)?.isLayoutTemplate,
          N = !!t(g)?.transition?.layout,
          P = Ye(O, N);
        return (
          w({}),
          d(k.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Q,
              primaryVariantId: `sBM6hyF7n`,
              variantClassNames: Je,
            },
            children: u(v, {
              id: h ?? o,
              children: [
                d(Xe, { value: `html body { background: rgb(255, 255, 255); }` }),
                u(_.div, {
                  ...b,
                  className: x(D, `framer-1ioxl1g`, m),
                  ref: a,
                  style: { ...p },
                  children: [
                    d(_.div, {
                      className: `framer-1q4qonb`,
                      "data-framer-name": `S0 DsPageHero`,
                      layout: P,
                      children: d(M, {
                        children: d(E, {
                          className: `framer-1v3ytgm-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsPageHero`,
                          isAuthoredByUser: !0,
                          name: `DsPageHero`,
                          nodeId: `UO017Idhe`,
                          scopeId: `Shqn2J1uh`,
                          children: d(j, {
                            breakpoint: S,
                            overrides: {
                              JpDDwr2gt: { bpHint: `phone` },
                              pUjGGxqst: { bpHint: `tablet` },
                            },
                            children: d(oe, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              crumbs: `Home:/, Notes:/notes`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `Notes`,
                              facts: `3|notes;5 min|average read;monthly|new`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              height: `100%`,
                              id: `UO017Idhe`,
                              index: `07`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              intro: `Pricing, launches and what we learned selling files.`,
                              layoutId: `UO017Idhe`,
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
                              title: `Notes from|*the back room.*`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-1vn0nbx`,
                      "data-framer-name": `S1 DsNotesList`,
                      layout: P,
                      children: d(M, {
                        children: d(E, {
                          className: `framer-1rvft3z-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsNotesList`,
                          isAuthoredByUser: !0,
                          name: `DsNotesList`,
                          nodeId: `w5ju0HWd4`,
                          scopeId: `Shqn2J1uh`,
                          children: d(j, {
                            breakpoint: S,
                            overrides: {
                              JpDDwr2gt: { bpHint: `phone` },
                              pUjGGxqst: { bpHint: `tablet` },
                            },
                            children: d(I, {
                              allLabel: `All`,
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
                              emptyText: `No notes of that kind yet.`,
                              featuredLabel: `Latest`,
                              filterLabel: `Filter by kind`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Notes from|*the back room.*`,
                              height: `100%`,
                              id: `w5ju0HWd4`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `w5ju0HWd4`,
                              linkBase: `/notes/`,
                              listLabel: `Earlier notes`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsNotesList`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              readLabel: `Read the note`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Pricing, launches and what we learned selling files. New notes land here first.`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-wppp3f`,
                      "data-framer-name": `S2 DsFree`,
                      layout: P,
                      children: d(M, {
                        children: d(E, {
                          className: `framer-kzcxt6-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsFree`,
                          isAuthoredByUser: !0,
                          name: `DsFree`,
                          nodeId: `N9PgEeop2`,
                          scopeId: `Shqn2J1uh`,
                          children: d(j, {
                            breakpoint: S,
                            overrides: {
                              JpDDwr2gt: { bpHint: `phone` },
                              pUjGGxqst: { bpHint: `tablet` },
                            },
                            children: d(ie, {
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
                              id: `N9PgEeop2`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `N9PgEeop2`,
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
                d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-dVK92.framer-opw3p1, .framer-dVK92 .framer-opw3p1 { display: block; }`,
        `.framer-dVK92.framer-1ioxl1g { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-dVK92 .framer-1q4qonb, .framer-dVK92 .framer-1vn0nbx, .framer-dVK92 .framer-wppp3f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-dVK92 .framer-1v3ytgm-container, .framer-dVK92 .framer-1rvft3z-container, .framer-dVK92 .framer-kzcxt6-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-dVK92.framer-1ioxl1g { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-dVK92.framer-1ioxl1g { width: 390px; }}`,
      ],
      `framer-dVK92`
    )),
    ($.displayName = `Notes`),
    ($.defaultProps = { height: 1080, width: 1200 }),
    ne(
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
        ...Ue,
        ...Z,
        ...We,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Qe = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerShqn2J1uh`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"pUjGGxqst":{"layout":["fixed","auto"]},"JpDDwr2gt":{"layout":["fixed","auto"]}}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerContractVersion: `1`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `1080`,
            framerScrollSections: `false`,
            framerIntrinsicWidth: `1200`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Qe as __FramerMetadata__, $ as default, Ke as queryParamNames };
//# sourceMappingURL=kgqqFOe_O7TGhBjnTyd_O8UUjJIKO4ofEzJ3rncn5Wg.DbFeRb5A.mjs.map
