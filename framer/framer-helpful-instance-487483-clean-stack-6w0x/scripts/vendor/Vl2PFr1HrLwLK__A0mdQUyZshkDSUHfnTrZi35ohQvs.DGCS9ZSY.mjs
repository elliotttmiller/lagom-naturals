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
  Q as ee,
  X as te,
  Z as C,
  a as w,
  at as T,
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
import { n as oe, t as se } from "./DsCta.iOw7KJfv.mjs";
import { n as ce, t as le } from "./DsReviews.Do5b3KPj.mjs";
import { n as ue, t as de } from "./DsPageHero.BMIkCPXD.mjs";
import fe, { t as pe } from "./xw6NoXCgW16Z6a9mKg7KOUnl80VuLOsuErNdEOdus6s.Bc7dbj_r.mjs";
function me() {
  h(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = P), document.head.appendChild(e));
  }, []);
}
function he() {
  let e = b(),
    t = null;
  try {
    t = M.current();
  } catch {}
  return e || (t !== null && t !== M.preview);
}
function ge() {
  let e = b(),
    [t, n] = o(!1);
  return (
    h(() => {
      !e && M.current() !== M.canvas && a !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function _e(e, t) {
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
function ve(e, t, n) {
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
function ye(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: z(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? R(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: z(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? R(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: z(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? R(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function be(e, t) {
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
function xe(e) {
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
function Se(e, t, n, r) {
  h(() => {
    if (!t || n || !e.current) return;
    let i = e.current,
      o = !0,
      s = -9,
      c = -1,
      l = -1,
      u = !1;
    xe(i);
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
      g = ve(
        () => {
          if (!h) return;
          let e = B((m - f) / (m + p)),
            t = p > m * 1.05 ? B(-f / (p - m)) : e;
          (c < 0
            ? ((c = e), (l = t))
            : ((c += (e - c) * H),
              (l += (t - l) * H),
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
function Ce(e) {
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
function we(e, t, n, r = 0.16) {
  let [i, s] = o(!1),
    c = he(),
    l = Ce(t);
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
              (o = ve(() => {
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
function Te(e) {
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
function Ee(e, t) {
  let [n, r] = o(t),
    i = s(``);
  return (
    We(() => {
      let t = 0,
        n = 0,
        o = 0;
      try {
        let e = a;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[Ue] = 1));
      } catch {}
      let s = () => {
          let t = Te(e);
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
function De() {
  let e = Ee(`site`, q.site || [])[0] || (q.site || [])[0] || {},
    t = (t) => String(e[t] ?? ``).trim();
  return {
    name: t(`f1`),
    role: t(`f2`),
    tagline: t(`f3`),
    email: t(`f4`),
    phone: t(`f5`),
    city: t(`f6`),
    tz: t(`f7`) || `Europe/London`,
    booking: t(`f8`) || `/book`,
    socials: t(`f9`),
    intake: t(`f10`),
    address: t(`f11`),
    hours: t(`f12`),
    openHours: t(`f13`),
  };
}
function N(e) {
  let {
      eyebrow: t = `How it started`,
      heading: n = `A folder of files,|*then a shelf.*`,
      subCopy:
        r = `Every product began as something we needed on our own work. When a file got good enough to hand to a client, it went on the shelf.`,
      timelineLabel: i = `Milestones`,
      milestones:
        a = `2021|Started as a folder of files we kept re-using; 2022|First product on the shelf: the UI kit; 2023|The pricing guide, then the course; 2024|1,000 orders, the first bundle; 2026|31 products, updated for life`,
      caption1: o = `The desk, most mornings`,
      caption2: c = `Packing the launch`,
      valuesTitle: l = `House rules`,
      values:
        f = `Buy once, keep forever|Every update is free, for life, on every product; Real replies, same day|Write to us and a person answers, usually within hours; Files we use ourselves|Nothing goes on the shelf that we don't run on our own work; No dark patterns|No fake timers, no drip, one email with the file`,
      stats:
        p = `31|products on the shelf; 2,140|orders this month; 38|countries; 4.9|average rating`,
      button: m = `Browse the shelf`,
      buttonLink: h = `/products`,
      bpHint: g = `auto`,
    } = e,
    _ = Ne(e),
    { D: v, B: y, M: b } = ye(e);
  me();
  let x = ge(),
    S = Me(),
    ee = he(),
    te = De(),
    C = s(null),
    { w } = _e(C, g),
    T = we(C, x, S, 0.06);
  (be(C, x), Se(C, x, S));
  let E = w < 810,
    D = w >= 810 && w < 1100,
    ne = F(e.photo1, Y(`1497215728101-856f4ea42174`) + `?w=1200&q=70&fm=jpg&auto=format`),
    O = F(e.photo2, Y(`1524758631624-e2822e304c36`) + `?w=1200&q=70&fm=jpg&auto=format`),
    k = J(a)
      .map((e) => {
        let [t, n] = e.split(`|`);
        return { y: (t || ``).trim(), t: (n || ``).trim() };
      })
      .filter((e) => e.y),
    A = J(f)
      .map((e) => {
        let [t, n] = e.split(`|`);
        return { k: (t || ``).trim(), v: (n || ``).trim() };
      })
      .filter((e) => e.k),
    j = J(p)
      .map((e) => {
        let [t, n] = e.split(`|`);
        return { n: (t || ``).trim(), l: (n || ``).trim() };
      })
      .filter((e) => e.n),
    re = te.name || `Shelfline`;
  return u(`section`, {
    ref: C,
    className: `ds ds-sec dsab${T ? ` is-on` : ``}${E ? ` is-ph` : D ? ` is-tab` : ``}${ee ? ` is-still` : ``}${S ? ` is-rm` : ``}`,
    style: { ...Pe(_), ...y, ...e.style, "--n": k.length },
    "aria-label": U(n),
    children: [
      d(`link`, { rel: `stylesheet`, href: P }),
      d(`style`, { dangerouslySetInnerHTML: { __html: ze + He + Ge } }),
      u(`div`, {
        className: `ds-wrap`,
        children: [
          u(`div`, {
            className: `dsab-top`,
            children: [
              u(`div`, {
                className: `dsab-copy`,
                children: [
                  u(`p`, {
                    className: `dsab-eb`,
                    style: { ...b, ...W(T, 0) },
                    children: [d(`i`, { "aria-hidden": !0 }), t],
                  }),
                  d(Ve, {
                    text: n,
                    on: T,
                    D: v,
                    size: E ? `clamp(36px,11vw,50px)` : `clamp(40px,4.4vw,68px)`,
                    lh: 0.96,
                    delay: 80,
                  }),
                  d(`p`, { className: `dsab-sub`, style: W(T, 240), children: r }),
                ],
              }),
              u(`div`, {
                className: `dsab-tl`,
                style: { ...b, ...W(T, 300, 30) },
                "aria-label": i,
                children: [
                  u(`span`, {
                    className: `dsab-th`,
                    children: [
                      d(`b`, { children: re.toUpperCase() }),
                      u(`span`, { children: [`· `, i] }),
                    ],
                  }),
                  d(`div`, { className: `dsab-spine`, "aria-hidden": !0, children: d(`i`, {}) }),
                  d(`ol`, {
                    className: `dsab-ms`,
                    children: k.map((e, t) =>
                      u(
                        `li`,
                        {
                          style: { "--i": t },
                          children: [
                            d(`span`, { className: `dsab-dot`, "aria-hidden": !0 }),
                            d(`b`, { style: v, children: e.y }),
                            d(`span`, { className: `dsab-mt`, style: y, children: e.t }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
          u(`div`, {
            className: `dsab-photos`,
            children: [
              u(`div`, {
                className: `dsab-ph`,
                children: [
                  d(K, {
                    src: ne,
                    alt: ``,
                    on: T,
                    shape: `arch`,
                    ratio: `4/5`,
                    par: 1.1,
                    radius: 0,
                    sizes: `(max-width: 809px) 100vw, 44vw`,
                    className: `dsab-um`,
                  }),
                  d(`span`, { className: `dsab-cap`, style: b, children: o }),
                ],
              }),
              u(`div`, {
                className: `dsab-ph dsab-ph2`,
                children: [
                  d(K, {
                    src: O,
                    alt: ``,
                    on: T,
                    shape: `up`,
                    ratio: `4/3`,
                    par: 0.8,
                    radius: 6,
                    delay: 200,
                    sizes: `(max-width: 809px) 100vw, 44vw`,
                    className: `dsab-um`,
                  }),
                  d(`span`, { className: `dsab-cap`, style: b, children: c }),
                ],
              }),
            ],
          }),
          u(`div`, {
            className: `dsab-vals`,
            children: [
              d(`h3`, { className: `dsab-vt`, style: v, children: l }),
              d(`div`, {
                className: `dsab-rack`,
                children: A.map((e, t) =>
                  u(
                    `div`,
                    {
                      className: `dsab-tag`,
                      style: { ...W(T, 200 + t * 80, 24), "--t": `${t % 2 ? 1.2 : -1.2}deg` },
                      children: [
                        d(`span`, { className: `dsab-hole`, "aria-hidden": !0 }),
                        d(`b`, { style: v, children: e.k }),
                        d(`span`, { children: e.v }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
          u(`div`, {
            className: `dsab-stats`,
            style: W(T, 380),
            children: [
              j.map((e, t) =>
                u(
                  `div`,
                  {
                    className: `dsab-st`,
                    children: [
                      d(`b`, { style: v, children: e.n }),
                      d(`span`, { style: b, children: e.l }),
                    ],
                  },
                  t
                )
              ),
              d(`div`, {
                className: `dsab-cta`,
                children: d(Re, { href: h, label: m, kind: `solid` }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var P,
  F,
  Oe,
  I,
  L,
  ke,
  Ae,
  R,
  je,
  z,
  Me,
  B,
  V,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  H,
  Be,
  U,
  Ve,
  W,
  G,
  K,
  He,
  q,
  Ue,
  We,
  J,
  Y,
  Ge,
  Ke = e(() => {
    (i(),
      p(),
      m(),
      S(),
      (P = `../../styles/css2-a59a76.css`),
      (F = (e, t) =>
        e && typeof e == `object` && e.src
          ? String(e.src).split(`?`)[0]
          : typeof e == `string` && e.trim()
            ? e.trim().split(`?`)[0]
            : t),
      (Oe = `clamp(1280px, 92vw, 1520px)`),
      (I = [160, 320, 480, 800, 1200, 1600]),
      (L = (e) => {
        let t =
            String(e || ``)
              .trim()
              .split(`,`)
              .pop() || ``,
          n = t.match(/(\d+(?:\.\d+)?)px/),
          r = t.match(/(\d+(?:\.\d+)?)vw/),
          i = n ? parseFloat(n[1]) * 2 : r ? (parseFloat(r[1]) / 100) * 1600 * 1.25 : 1600;
        return I.find((e) => e >= i) || 1600;
      }),
      (ke = (e, t) => {
        let n = String(e || ``),
          r = n.split(`?`)[0];
        if (/framerusercontent\.com\/images\//.test(n)) {
          let e = L(t);
          return {
            src: `${r}?scale-down-to=${e <= 512 ? 512 : e <= 1024 ? 1024 : 2048}`,
            srcSet: `${r}?scale-down-to=512 512w, ${r}?scale-down-to=1024 1024w, ${r}?scale-down-to=2048 2048w`,
            sizes: t,
          };
        }
        if (/images\.unsplash\.com\//.test(n)) {
          let e = L(t),
            n = (e) => `${r}?w=${e}&q=70&fm=jpg&auto=format`;
          return {
            src: n(e),
            srcSet: I.filter((t) => t <= Math.max(e * 2, 480))
              .map((e) => `${n(e)} ${e}w`)
              .join(`, `),
            sizes: t,
          };
        }
        return { src: n };
      }),
      (Ae = (e) => {
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
      (je = (e) => {
        let t = Ae(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (z = (e, t, n, r) => {
        let i = e ? je(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (Me = () => {
        let [e, t] = o(!1);
        return (
          r(() => {
            t(a.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (B = (e) => Math.min(1, Math.max(0, e))),
      (V = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (Ne = (e) => ({
        bone: e.bone || V.bone,
        ink: e.ink || V.ink,
        brass: e.brass || V.brass,
        pine: e.pine || V.pine,
        fog: e.fog || V.fog,
        stone: e.stone || V.stone,
        cloud: e.cloud || V.cloud,
        night: e.night || V.night,
      })),
      (Pe = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (Fe = {
        bone: { type: j.Color, title: `Paper`, defaultValue: V.bone },
        ink: { type: j.Color, title: `Ink`, defaultValue: V.ink },
        brass: { type: j.Color, title: `Accent`, defaultValue: V.brass },
        pine: { type: j.Color, title: `Deep`, defaultValue: V.pine },
        fog: { type: j.Color, title: `Line`, defaultValue: V.fog },
        stone: { type: j.Color, title: `Muted`, defaultValue: V.stone },
        cloud: { type: j.Color, title: `White`, defaultValue: V.cloud },
        night: { type: j.Color, title: `Dark`, defaultValue: V.night },
      }),
      (Ie = {
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
      (Le = {
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
      (Re = ({
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
      (ze = `
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
      (H = 0.18),
      j.Boolean,
      j.Number,
      (Be = (e) =>
        String(e || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => {
            let t = e.match(/^\*(.+?)\*([.,!?;:’']*)$/);
            return t
              ? { t: t[1], tail: t[2], acc: !0 }
              : { t: e.replace(/\*/g, ``), tail: ``, acc: !1 };
          })),
      (U = (e) =>
        String(e || ``)
          .replace(/\*/g, ``)
          .replace(/\s*\|\s*/g, ` `)
          .replace(/\s+/g, ` `)
          .trim()),
      (Ve = ({
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
          "aria-label": U(e),
          style: { ...n, fontSize: i, lineHeight: a, ...(l || {}) },
          children: String(e)
            .split(`|`)
            .map((e, t) =>
              d(
                `span`,
                {
                  className: `ds-hd-l`,
                  "aria-hidden": !0,
                  children: Be(e).map((e, t) => {
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
      (W = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (G = {
        up: [`inset(100% 0 0 0)`, `inset(0 0 0 0)`],
        down: [`inset(0 0 100% 0)`, `inset(0 0 0 0)`],
        left: [`inset(0 100% 0 0)`, `inset(0 0 0 0)`],
        right: [`inset(0 0 0 100%)`, `inset(0 0 0 0)`],
        diag: [`polygon(0 100%,0 100%,0 100%,0 100%)`, `polygon(0 -160%,260% 100%,0 100%,0 100%)`],
        iris: [`circle(0% at 50% 55%)`, `circle(85% at 50% 55%)`],
        arch: [`inset(100% 0 0 0 round 999px 999px 0 0)`, `inset(0 0 0 0 round 999px 999px 0 0)`],
        slit: [`inset(0 50% 0 50%)`, `inset(0 0 0 0)`],
      }),
      (K = ({
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
        let m = G[r] || G.up,
          h = ke(e, l);
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
      (He = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${Oe} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (q = {
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
      }),
      (Ue = `DsAbout@cms1`),
      (We = a === void 0 ? h : r),
      (J = (e) =>
        String(e || ``)
          .split(`;`)
          .map((e) => e.trim())
          .filter(Boolean)),
      (Y = (e) => `https://images.unsplash.com/photo-${e}`),
      (Ge = `
.dsab{position:relative;background:var(--ds-bone);color:var(--ds-ink);padding:clamp(70px,8vw,120px) 0 clamp(90px,10vw,150px);overflow:clip;z-index:12}
.dsab::before{content:"";position:absolute;inset:0;background-image:radial-gradient(color-mix(in srgb,var(--ds-ink) 9%,transparent) 1px,transparent 1.3px);background-size:24px 24px;mask-image:linear-gradient(180deg,transparent,#000 15%,#000 85%,transparent);-webkit-mask-image:linear-gradient(180deg,transparent,#000 15%,#000 85%,transparent);pointer-events:none}
.dsab-top{position:relative;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:clamp(32px,5vw,90px);align-items:start;margin-bottom:clamp(60px,7vw,110px)}
.dsab-copy{display:flex;flex-direction:column;align-items:flex-start;gap:18px}
.dsab-eb{display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)} .dsab-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dsab .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dsab .ds-it{color:var(--ds-acc)}
.dsab-sub{margin:0;max-width:520px;font-size:16.5px;line-height:1.6;color:var(--ds-mut)}
/* timeline receipt: --sp runs 0→1 over the section; the spine fills between .18 and .5 */
.dsab-tl{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px 20px 30px 20px;background:var(--ds-cloud);color:var(--ds-ink);font-size:11.5px;letter-spacing:.02em;rotate:1deg;box-shadow:0 30px 60px -30px rgba(0,0,0,.45);--f:clamp(0,calc((var(--sp,.5) - .16)/.34),1);clip-path:polygon(0 0,100% 0,100% calc(100% - 8px),97% 100%,94% calc(100% - 8px),91% 100%,88% calc(100% - 8px),85% 100%,82% calc(100% - 8px),79% 100%,76% calc(100% - 8px),73% 100%,70% calc(100% - 8px),67% 100%,64% calc(100% - 8px),61% 100%,58% calc(100% - 8px),55% 100%,52% calc(100% - 8px),49% 100%,46% calc(100% - 8px),43% 100%,40% calc(100% - 8px),37% 100%,34% calc(100% - 8px),31% 100%,28% calc(100% - 8px),25% 100%,22% calc(100% - 8px),19% 100%,16% calc(100% - 8px),13% 100%,10% calc(100% - 8px),7% 100%,4% calc(100% - 8px),1% 100%,0 calc(100% - 8px))}
.dsab-th{display:flex;gap:8px;padding-bottom:8px;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 30%,transparent);text-transform:uppercase;letter-spacing:.12em;font-size:10.5px} .dsab-th b{font-weight:500}
.dsab-spine{position:absolute;left:29px;top:62px;bottom:34px;width:2px;background:color-mix(in srgb,var(--ds-ink) 14%,transparent)} .dsab-spine i{position:absolute;left:0;top:0;width:100%;height:calc(var(--f)*100%);background:var(--ds-brass)}
.dsab-ms{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:16px}
.dsab-ms li{position:relative;display:grid;grid-template-columns:56px minmax(0,1fr);gap:4px 12px;align-items:baseline;padding-left:20px;--k:clamp(0,calc((var(--f) - var(--i)/var(--n,5))*var(--n,5)*1.4),1);opacity:calc(.35 + var(--k)*.65)}
.dsab-dot{position:absolute;left:4px;top:.3em;width:10px;height:10px;border-radius:50%;background:color-mix(in srgb,var(--ds-ink) 20%,transparent);box-shadow:0 0 0 3px var(--ds-cloud);transform:scale(calc(.7 + var(--k)*.4))} .dsab-ms li{--dot:var(--k)} .dsab-dot::after{content:"";position:absolute;inset:0;border-radius:50%;background:var(--ds-brass);opacity:var(--k)}
.dsab-ms b{font-size:15px;font-weight:800;letter-spacing:-.01em} .dsab-mt{font-size:13.5px;line-height:1.45;color:var(--ds-ink)}
/* photos */
.dsab-photos{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(24px,4vw,64px);align-items:end;margin-bottom:clamp(60px,7vw,110px)}
.dsab-ph{position:relative} .dsab-ph2{padding-bottom:12%} .dsab-um{width:100%} .dsab-um img{filter:saturate(.85)}
.dsab-cap{position:absolute;left:14px;bottom:14px;padding:6px 10px;background:var(--ds-bone);color:var(--ds-ink);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;rotate:-2deg;box-shadow:0 10px 20px -10px rgba(0,0,0,.4)} .dsab-ph2 .dsab-cap{bottom:calc(12% + 14px)}
/* values rack */
.dsab-vals{margin-bottom:clamp(50px,6vw,90px)}
.dsab-vt{margin:0 0 22px;font-size:clamp(24px,2.4vw,34px);line-height:1;font-weight:800;letter-spacing:-.03em}
.dsab-rack{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px 20px}
.dsab-tag{position:relative;display:flex;flex-direction:column;gap:6px;padding:18px 20px 18px 32px;background:var(--ds-cloud);color:var(--ds-ink);rotate:var(--t);clip-path:polygon(16px 0,100% 0,100% 100%,16px 100%,0 22px);box-shadow:0 20px 40px -24px color-mix(in srgb,var(--ds-ink) 50%,transparent);transition:rotate .5s cubic-bezier(.34,1.56,.64,1)} .dsab-tag:hover{rotate:0deg}
.dsab-tag::after{content:"";position:absolute;inset:0;pointer-events:none;box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--ds-ink) 14%,transparent);clip-path:inherit}
.dsab-hole{position:absolute;left:13px;top:16px;width:7px;height:7px;border-radius:50%;background:var(--ds-bone);box-shadow:0 0 0 1.5px color-mix(in srgb,var(--ds-ink) 35%,transparent)}
.dsab-tag b{font-size:17px;font-weight:800;letter-spacing:-.02em} .dsab-tag span{font-size:14px;line-height:1.5;color:var(--ds-mut)}
/* stats */
.dsab-stats{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:22px;align-items:end;padding-top:22px;border-top:1px solid color-mix(in srgb,var(--ds-ink) 18%,transparent)}
.dsab-st{display:flex;flex-direction:column;gap:6px} .dsab-st b{font-size:clamp(30px,3.2vw,46px);line-height:1;font-weight:800;letter-spacing:-.03em} .dsab-st span{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-mut)}
.dsab-cta{justify-self:end}
/* tablet + phone */
.dsab.is-tab .dsab-top{grid-template-columns:1fr} .dsab.is-tab .dsab-stats{grid-template-columns:repeat(2,minmax(0,1fr))} .dsab.is-tab .dsab-cta{grid-column:1/-1;justify-self:start}
.dsab.is-ph .dsab-top{grid-template-columns:1fr;gap:26px} .dsab.is-ph .dsab-tl{rotate:0deg} .dsab.is-ph .dsab-photos{grid-template-columns:1fr;gap:22px} .dsab.is-ph .dsab-ph2{padding-bottom:0} .dsab.is-ph .dsab-ph2 .dsab-cap{bottom:14px}
.dsab.is-ph .dsab-rack{grid-template-columns:1fr;gap:14px} .dsab.is-ph .dsab-tag{rotate:0deg} .dsab.is-ph .dsab-stats{grid-template-columns:1fr 1fr;gap:18px} .dsab.is-ph .dsab-cta{grid-column:1/-1;justify-self:start}
.dsab.is-rm .dsab-tl,.dsab.is-still .dsab-tl,.dsab.is-ph .dsab-tl{--f:1}
@media (prefers-reduced-motion:reduce){.dsab-tag{transition:none;rotate:0deg}}`),
      E(N, {
        ...Le,
        eyebrow: { type: j.String, title: `Eyebrow`, defaultValue: `How it started` },
        heading: {
          type: j.String,
          title: `Heading`,
          defaultValue: `A folder of files,|*then a shelf.*`,
          description: `*word* = accent, | = line break`,
        },
        subCopy: {
          type: j.String,
          title: `Sub copy`,
          displayTextArea: !0,
          defaultValue: `Every product began as something we needed on our own work. When a file got good enough to hand to a client, it went on the shelf.`,
        },
        timelineLabel: { type: j.String, title: `Timeline label`, defaultValue: `Milestones` },
        milestones: {
          type: j.String,
          title: `Milestones`,
          description: `Year|Line; …`,
          displayTextArea: !0,
          defaultValue: `2021|Started as a folder of files we kept re-using; 2022|First product on the shelf: the UI kit; 2023|The pricing guide, then the course; 2024|1,000 orders, the first bundle; 2026|31 products, updated for life`,
        },
        photo1: { type: j.ResponsiveImage, title: `Photo 1` },
        caption1: { type: j.String, title: `Caption 1`, defaultValue: `The desk, most mornings` },
        photo2: { type: j.ResponsiveImage, title: `Photo 2` },
        caption2: { type: j.String, title: `Caption 2`, defaultValue: `Packing the launch` },
        valuesTitle: { type: j.String, title: `Values heading`, defaultValue: `House rules` },
        values: {
          type: j.String,
          title: `Values`,
          description: `Title|Line; …`,
          displayTextArea: !0,
          defaultValue: `Buy once, keep forever|Every update is free, for life, on every product; Real replies, same day|Write to us and a person answers, usually within hours; Files we use ourselves|Nothing goes on the shelf that we don't run on our own work; No dark patterns|No fake timers, no drip, one email with the file`,
        },
        stats: {
          type: j.String,
          title: `Stats`,
          description: `Number|Label; …`,
          displayTextArea: !0,
          defaultValue: `31|products on the shelf; 2,140|orders this month; 38|countries; 4.9|average rating`,
        },
        button: { type: j.String, title: `Button`, defaultValue: `Browse the shelf` },
        buttonLink: { type: j.Link, title: `Button link`, defaultValue: `/products` },
        ...Fe,
        ...Ie,
      }));
  }),
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  X,
  Qe,
  $e,
  et,
  Z,
  Q,
  tt,
  nt,
  $,
  rt;
e(() => {
  (p(),
    S(),
    y(),
    m(),
    Ke(),
    oe(),
    ue(),
    ce(),
    pe(),
    (qe = A(de)),
    (Je = A(N)),
    (Ye = A(le)),
    (Xe = A(se)),
    (Ze = {
      ikVn7oMyn: `(min-width: 1200px)`,
      p_STYvNTX: `(min-width: 810px) and (max-width: 1199.98px)`,
      vSiuPH6Uo: `(max-width: 809.98px)`,
    }),
    (X = []),
    (Qe = `framer-ZuVD4`),
    ($e = {
      ikVn7oMyn: `framer-v-1h5ahg3`,
      p_STYvNTX: `framer-v-1px8f23`,
      vSiuPH6Uo: `framer-v-16f1cc5`,
    }),
    (et = (e, t, n) => (e && t ? `position` : n)),
    (Z = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Q = { Desktop: `ikVn7oMyn`, Phone: `vSiuPH6Uo`, Tablet: `p_STYvNTX` }),
    (tt = ({ value: e }) =>
      ee()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (nt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `ikVn7oMyn`,
    })),
    ($ = T(
      f(function (e, r) {
        let i = s(null),
          a = r ?? i,
          o = n(),
          { activeLocale: c, setLocale: f } = ne();
        re();
        let { style: p, className: m, layoutId: h, variant: y, ...b } = nt(e);
        ie(l(() => fe({}, c), [c]));
        let [S, ee] = C(y, Ze, !1),
          T = x(Qe),
          E = t(D)?.isLayoutTemplate,
          A = !!t(g)?.transition?.layout,
          j = et(E, A);
        return (
          te({}),
          d(D.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Q,
              primaryVariantId: `ikVn7oMyn`,
              variantClassNames: $e,
            },
            children: u(v, {
              id: h ?? o,
              children: [
                d(tt, { value: `html body { background: rgb(255, 255, 255); }` }),
                u(_.div, {
                  ...b,
                  className: x(T, `framer-1h5ahg3`, m),
                  ref: a,
                  style: { ...p },
                  children: [
                    d(_.div, {
                      className: `framer-1ojye3m`,
                      "data-framer-name": `S0 DsPageHero`,
                      layout: j,
                      children: d(k, {
                        children: d(w, {
                          className: `framer-145zmpq-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsPageHero`,
                          isAuthoredByUser: !0,
                          name: `DsPageHero`,
                          nodeId: `ljOuk8teQ`,
                          scopeId: `NPvIE_gOs`,
                          children: d(O, {
                            breakpoint: S,
                            overrides: {
                              p_STYvNTX: { bpHint: `tablet` },
                              vSiuPH6Uo: { bpHint: `phone` },
                            },
                            children: d(de, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              crumbs: `Home:/, About:/about`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `The studio`,
                              facts: `2021|founded;31|products;same day|replies`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              height: `100%`,
                              id: `ljOuk8teQ`,
                              index: `06`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              intro: `A small studio in Lisbon that sells the files it uses on its own work.`,
                              layoutId: `ljOuk8teQ`,
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
                              title: `Behind|*the counter.*`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-1b4b38m`,
                      "data-framer-name": `S1 DsAbout`,
                      layout: j,
                      children: d(k, {
                        children: d(w, {
                          className: `framer-1jfq83h-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsAbout`,
                          isAuthoredByUser: !0,
                          name: `DsAbout`,
                          nodeId: `o3Z5EJJlv`,
                          scopeId: `NPvIE_gOs`,
                          children: d(O, {
                            breakpoint: S,
                            overrides: {
                              p_STYvNTX: { bpHint: `tablet` },
                              vSiuPH6Uo: { bpHint: `phone` },
                            },
                            children: d(N, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              button: `Browse the shelf`,
                              buttonLink: `/products`,
                              caption1: `The desk, most mornings`,
                              caption2: `Packing the launch`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `How it started`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `A folder of files,|*then a shelf.*`,
                              height: `100%`,
                              id: `o3Z5EJJlv`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `o3Z5EJJlv`,
                              milestones: `2021|Started as a folder of files we kept re-using; 2022|First product on the shelf: the UI kit; 2023|The pricing guide, then the course; 2024|1,000 orders, the first bundle; 2026|31 products, updated for life`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsAbout`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              photo1: Z(
                                {
                                  pixelHeight: 1500,
                                  pixelWidth: 1200,
                                  src: `https://framerusercontent.com/images/chrKCh9lmPyXHU8EdfNVyXtX2Ag.webp?width=1200&height=1500`,
                                  srcSet: `https://framerusercontent.com/images/chrKCh9lmPyXHU8EdfNVyXtX2Ag.webp?scale-down-to=1024&width=1200&height=1500 819w,https://framerusercontent.com/images/chrKCh9lmPyXHU8EdfNVyXtX2Ag.webp?width=1200&height=1500 1200w`,
                                },
                                ``
                              ),
                              photo2: Z(
                                {
                                  pixelHeight: 900,
                                  pixelWidth: 1200,
                                  src: `https://framerusercontent.com/images/1WYhzmGYI5qLc4ufAfkINr8mLU.webp?width=1200&height=900`,
                                  srcSet: `https://framerusercontent.com/images/1WYhzmGYI5qLc4ufAfkINr8mLU.webp?scale-down-to=512&width=1200&height=900 512w,https://framerusercontent.com/images/1WYhzmGYI5qLc4ufAfkINr8mLU.webp?scale-down-to=1024&width=1200&height=900 1024w,https://framerusercontent.com/images/1WYhzmGYI5qLc4ufAfkINr8mLU.webp?width=1200&height=900 1200w`,
                                },
                                ``
                              ),
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              stats: `31|products on the shelf; 2,140|orders this month; 38|countries; 4.9|average rating`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Every product began as something we needed on our own work. When a file got good enough to hand to a client, it went on the shelf.`,
                              timelineLabel: `Milestones`,
                              values: `Buy once, keep forever|Every update is free, for life, on every product; Real replies, same day|Write to us and a person answers, usually within hours; Files we use ourselves|Nothing goes on the shelf that we don't run on our own work; No dark patterns|No fake timers, no drip, one email with the file`,
                              valuesTitle: `House rules`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    d(_.div, {
                      className: `framer-c7j4oo`,
                      "data-framer-name": `S2 DsReviews`,
                      layout: j,
                      children: d(k, {
                        children: d(w, {
                          className: `framer-116hnsw-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsReviews`,
                          isAuthoredByUser: !0,
                          name: `DsReviews`,
                          nodeId: `qGzCIMosp`,
                          scopeId: `NPvIE_gOs`,
                          children: d(O, {
                            breakpoint: S,
                            overrides: {
                              p_STYvNTX: { bpHint: `tablet` },
                              vSiuPH6Uo: { bpHint: `phone` },
                            },
                            children: d(le, {
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
                              id: `qGzCIMosp`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `qGzCIMosp`,
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
                    d(_.div, {
                      className: `framer-qsrj6t`,
                      "data-framer-name": `S3 DsCta`,
                      layout: j,
                      children: d(k, {
                        children: d(w, {
                          className: `framer-bbn70u-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsCta`,
                          isAuthoredByUser: !0,
                          name: `DsCta`,
                          nodeId: `iJSiwzvhS`,
                          scopeId: `NPvIE_gOs`,
                          children: d(O, {
                            breakpoint: S,
                            overrides: {
                              p_STYvNTX: { bpHint: `tablet` },
                              vSiuPH6Uo: { bpHint: `phone` },
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
                              button1: `Browse the shelf`,
                              button1Link: `/products`,
                              button2: `Get the free guide`,
                              button2Link: `/free`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `Open 24/7`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Open your|*own shelf.*`,
                              height: `100%`,
                              hoursLine: `Instant download · lifetime updates · same-day replies`,
                              id: `iJSiwzvhS`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `iJSiwzvhS`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsCta`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              shutterLabel: `Shelfline · digital goods`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Browse the products, take the free guide, or write to us about a bundle for your team. The shop never closes.`,
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
        `.framer-ZuVD4.framer-vp1hqk, .framer-ZuVD4 .framer-vp1hqk { display: block; }`,
        `.framer-ZuVD4.framer-1h5ahg3 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-ZuVD4 .framer-1ojye3m, .framer-ZuVD4 .framer-1b4b38m, .framer-ZuVD4 .framer-c7j4oo, .framer-ZuVD4 .framer-qsrj6t { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZuVD4 .framer-145zmpq-container, .framer-ZuVD4 .framer-1jfq83h-container, .framer-ZuVD4 .framer-116hnsw-container, .framer-ZuVD4 .framer-bbn70u-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-ZuVD4.framer-1h5ahg3 { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-ZuVD4.framer-1h5ahg3 { width: 390px; }}`,
      ],
      `framer-ZuVD4`
    )),
    ($.displayName = `About`),
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
        ...qe,
        ...Je,
        ...Ye,
        ...Xe,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (rt = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerNPvIE_gOs`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"p_STYvNTX":{"layout":["fixed","auto"]},"vSiuPH6Uo":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicWidth: `1200`,
            framerScrollSections: `false`,
            framerIntrinsicHeight: `1080`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { rt as __FramerMetadata__, $ as default, X as queryParamNames };
//# sourceMappingURL=Vl2PFr1HrLwLK__A0mdQUyZshkDSUHfnTrZi35ohQvs.DGCS9ZSY.mjs.map
