import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  C as t,
  E as n,
  I as r,
  L as i,
  N as a,
  O as o,
  P as s,
  R as c,
  S as l,
  _ as u,
  a as d,
  b as f,
  c as p,
  d as m,
  g as h,
  h as g,
  i as ee,
  l as _,
  m as v,
  n as te,
  o as y,
  p as b,
  r as x,
  s as S,
  t as C,
  w,
  y as T,
} from "./react.iNMCLRE-.mjs";
import { k as E, r as D, t as ne } from "./motion.dK94hszq.mjs";
import {
  $ as O,
  B as k,
  C as re,
  F as A,
  H as ie,
  K as ae,
  L as j,
  M as oe,
  N as se,
  P as M,
  Q as ce,
  U as le,
  V as ue,
  W as de,
  X as fe,
  Y as pe,
  Z as me,
  _ as he,
  a as N,
  at as ge,
  b as _e,
  c as ve,
  d as ye,
  et as be,
  g as xe,
  h as Se,
  i as P,
  k as Ce,
  l as we,
  lt as Te,
  m as Ee,
  n as F,
  nt as De,
  o as I,
  p as Oe,
  r as ke,
  rt as Ae,
  s as je,
  t as Me,
  u as Ne,
  ut as Pe,
  v as L,
  y as Fe,
  z as Ie,
} from "./framer.BNAppio8.mjs";
import { a as Le, r as Re } from "./FCmHoYAR6.DNwBOktz.mjs";
import { a as ze, r as Be } from "./owwGg2Iuo.yzxvNxQY.mjs";
import { a as Ve, r as He } from "./paMgNvbm8.Cwioci5V.mjs";
import { a as Ue, r as We } from "./UcnqDSpuu.Byvv2XWO.mjs";
import { i as Ge, t as Ke } from "./vyRvgQNHP.ELwhLvWF.mjs";
function R(e) {
  let {
    kind: t = ``,
    slug: n = ``,
    f1: r = ``,
    f2: i = ``,
    f3: a = ``,
    f4: o = ``,
    f5: s = ``,
    f6: c = ``,
    f7: l = ``,
    f8: u = ``,
    f9: d = ``,
    f10: f = ``,
    f11: p = ``,
    f12: m = ``,
    f13: h = ``,
    f14: g = ``,
    f15: ee = ``,
    f16: _ = ``,
    n1: v = 0,
    n2: te = 0,
    img: b,
    img2: x,
  } = e;
  return y(`span`, {
    "data-ds-row": t,
    "data-slug": n,
    "data-f1": r,
    "data-f2": i,
    "data-f3": a,
    "data-f4": o,
    "data-f5": s,
    "data-f6": c,
    "data-f7": l,
    "data-f8": u,
    "data-f9": d,
    "data-f10": f,
    "data-f11": p,
    "data-f12": m,
    "data-f13": h,
    "data-f14": g,
    "data-f15": ee,
    "data-f16": _,
    "data-n1": String(v),
    "data-n2": String(te),
    "data-img": qe(b),
    "data-img2": qe(x),
    "aria-hidden": !0,
    style: {
      ...e.style,
      display: `block`,
      width: 1,
      height: 1,
      overflow: `hidden`,
      opacity: 0,
      pointerEvents: `none`,
    },
  });
}
var qe,
  Je,
  z,
  Ye = e(() => {
    (S(),
      M(),
      (qe = (e) =>
        e && typeof e == `object` ? String(e.src || ``) : typeof e == `string` ? e : ``),
      (Je = (e) => ({
        type: I.Number,
        title: e,
        defaultValue: 0,
        min: -1e6,
        max: 1e6,
        step: 0.01,
      })),
      (z = (e) => ({ type: I.String, title: e, defaultValue: `` })),
      _e(R, {
        kind: z(`Kind`),
        slug: z(`Slug`),
        f1: z(`F1`),
        f2: z(`F2`),
        f3: z(`F3`),
        f4: z(`F4`),
        f5: z(`F5`),
        f6: z(`F6`),
        f7: z(`F7`),
        f8: z(`F8`),
        f9: z(`F9`),
        f10: z(`F10`),
        f11: z(`F11`),
        f12: z(`F12`),
        f13: z(`F13`),
        f14: z(`F14`),
        f15: z(`F15`),
        f16: z(`F16`),
        n1: Je(`N1`),
        n2: Je(`N2`),
        img: { type: I.ResponsiveImage, title: `Img` },
        img2: { type: I.ResponsiveImage, title: `Img2` },
      }));
  });
function Xe() {
  T(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = ft), document.head.appendChild(e));
  }, []);
}
function Ze() {
  let e = O(),
    t = null;
  try {
    t = L.current();
  } catch {}
  return e || (t !== null && t !== L.preview);
}
function Qe() {
  let e = O(),
    [t, n] = u(!1);
  return (
    T(() => {
      !e && L.current() !== L.canvas && c !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function $e(e, t) {
  let r = String(t || ``).toLowerCase(),
    [i, a] = u(r === `phone` ? 390 : r === `tablet` ? 810 : 1440),
    [o, s] = u(r === `phone` ? 844 : r === `tablet` ? 1080 : 900);
  return (
    n(() => {
      let t = e.current;
      if (!t) return;
      let n = new ResizeObserver(([e]) => {
        let n = Math.round(
          (e.borderBoxSize && e.borderBoxSize[0] ? e.borderBoxSize[0].inlineSize : 0) ||
            t.offsetWidth
        );
        n > 0 && a(n);
      });
      n.observe(t);
      let r = () => s(c.innerHeight);
      r();
      let i = () => {
          let e = Math.round(t.offsetWidth);
          e > 0 && a(e);
        },
        o = c.setTimeout(i, 150),
        l = c.setTimeout(i, 700),
        u = c.setTimeout(i, 1600);
      return (
        c.addEventListener(`resize`, r),
        c.addEventListener(`load`, i),
        () => {
          (n.disconnect(),
            c.clearTimeout(o),
            c.clearTimeout(l),
            c.clearTimeout(u),
            c.removeEventListener(`resize`, r),
            c.removeEventListener(`load`, i));
        }
      );
    }, []),
    { w: i, vh: o }
  );
}
function et(e, t, n) {
  if (c === void 0) return () => {};
  let r = c;
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
function tt(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: _t(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? ht(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: _t(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? ht(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: _t(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? ht(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function nt(e, t) {
  T(() => {
    if (!t || !e.current || !c.matchMedia(`(hover:hover) and (pointer:fine)`).matches) return;
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
      a = () => {
        for (let e of r()) (e.style.setProperty(`--mx`, `0px`), e.style.setProperty(`--my`, `0px`));
      };
    return (
      n.addEventListener(`pointermove`, i),
      n.addEventListener(`pointerleave`, a),
      () => {
        (n.removeEventListener(`pointermove`, i), n.removeEventListener(`pointerleave`, a));
      }
    );
  }, [t]);
}
function rt(e) {
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
function it(e, t, n, r) {
  T(() => {
    if (!t || n || !e.current) return;
    let i = e.current,
      a = !0,
      o = -9,
      s = -1,
      l = -1,
      u = !1;
    rt(i);
    let d = new IntersectionObserver(
      (e) => {
        a = e[0].isIntersecting;
      },
      { rootMargin: `25% 0px 25% 0px` }
    );
    d.observe(i);
    let f = 0,
      p = 0,
      m = 1,
      h = !1,
      g = et(
        () => {
          if (!h) return;
          let e = yt((m - f) / (m + p)),
            t = p > m * 1.05 ? yt(-f / (p - m)) : e;
          (s < 0
            ? ((s = e), (l = t))
            : ((s += (e - s) * Dt),
              (l += (t - l) * Dt),
              Math.abs(e - s) < 5e-4 && (s = e),
              Math.abs(t - l) < 5e-4 && (l = t)),
            (u = s === e && l === t),
            !(Math.abs(s + l - o) < 3e-4) &&
              ((o = s + l),
              i.style.setProperty(`--sp`, s.toFixed(4)),
              i.style.setProperty(`--pp`, l.toFixed(4)),
              r && r(s, l)));
        },
        () => {
          if (!a && u) {
            h = !1;
            return;
          }
          let e = i.getBoundingClientRect();
          ((f = e.top), (p = e.height), (m = c.innerHeight || 1), (h = !0));
        }
      );
    return () => {
      (g(), d.disconnect());
    };
  }, [t, n]);
}
function at(e) {
  let [t, n] = u(!1);
  return (
    T(() => {
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
      let a = c.setTimeout(() => {
        (i.disconnect(), n(!0));
      }, 9e3);
      return () => {
        (i.disconnect(), c.clearTimeout(a));
      };
    }, [e]),
    t
  );
}
function ot(e, t, n, r = 0.16) {
  let [i, a] = u(!1),
    o = Ze(),
    s = at(t);
  return (
    T(() => {
      if (!t) return;
      if (n) {
        a(!0);
        return;
      }
      if (!s) return;
      let i = e.current;
      if (!i) return;
      let o = () => {},
        l = (e) => {
          try {
            e.target.matches(`:focus-visible`) && (i.setAttribute(`data-kb`, ``), i.offsetWidth);
          } catch {}
          a(!0);
        },
        u = (e) => {
          i.contains(e.relatedTarget) || i.removeAttribute(`data-kb`);
        };
      (i.addEventListener(`focusin`, l), i.addEventListener(`focusout`, u));
      let d = new IntersectionObserver(
        (e) => {
          for (let t of e)
            t.isIntersecting &&
              (d.disconnect(),
              (o = et(() => {
                let e = i.closest(`.ds-rev.is-act`);
                (e ? parseFloat(e.style.getPropertyValue(`--rv`) || `0`) : 1) > 0.24 &&
                  (a(!0), o());
              })));
        },
        {
          threshold: Math.min(
            r,
            Math.max(0.005, (c.innerHeight * 0.3) / Math.max(1, i.offsetHeight))
          ),
          rootMargin: `0px 0px -6% 0px`,
        }
      );
      return (
        d.observe(i),
        () => {
          (d.disconnect(),
            o(),
            i.removeEventListener(`focusin`, l),
            i.removeEventListener(`focusout`, u));
        }
      );
    }, [t, n, s]),
    i || o
  );
}
function st({ on: e, layer: t = 9, style: n, children: r }) {
  let i = Qe(),
    a = vt(),
    o = f(null),
    s = f(null),
    l = f(null),
    [d, p] = u(0),
    m = e && i && !a && d > 0;
  return (
    T(() => {
      if (!e || !i || a || !s.current) return;
      let t = s.current,
        n = () => p(t.offsetHeight);
      n();
      let r = new ResizeObserver(n);
      return (r.observe(t), () => r.disconnect());
    }, [e, i, a]),
    T(() => {
      if (!m || !o.current) return;
      let e = o.current,
        t = !0,
        n = -1,
        r = new IntersectionObserver(
          (e) => {
            t = e[0].isIntersecting;
          },
          { rootMargin: `30% 0px 30% 0px` }
        );
      r.observe(e);
      let i = -1,
        a = 0,
        s = 1,
        u = 0,
        d = !1,
        f = et(
          () => {
            if (!d || !a) return;
            let t = yt((s - a - u) / a);
            (i < 0 ? (i = t) : ((i += (t - i) * Dt), Math.abs(t - i) < 5e-4 && (i = t)),
              !(Math.abs(i - n) < 4e-4) && ((n = i), e.style.setProperty(`--rv`, i.toFixed(4))));
          },
          () => {
            if (!t) {
              d = !1;
              return;
            }
            ((a = l.current ? l.current.offsetHeight : 0),
              (s = c.innerHeight),
              (u = e.getBoundingClientRect().top),
              (d = !0));
          }
        );
      return () => {
        (f(), r.disconnect());
      };
    }, [m]),
    _(`div`, {
      ref: o,
      className: `ds-rev${m ? ` is-act` : ``}`,
      style: { ...(n || {}), "--h": `${d}px`, "--layer": t },
      onFocusCapture: (e) => {
        if (!m || !o.current) return;
        let t = e.target,
          n = c,
          r = o.current.getBoundingClientRect(),
          i = l.current ? l.current.offsetHeight : 0,
          a = Math.max(
            0,
            Math.min(
              document.documentElement.scrollHeight - c.innerHeight,
              r.top + c.scrollY - c.innerHeight + 2 * i
            )
          );
        (Math.abs(c.scrollY - a) > 4 &&
          (n.__ltLenis ? n.__ltLenis.scrollTo(a, { immediate: !0, force: !0 }) : c.scrollTo(0, a)),
          requestAnimationFrame(() => {
            try {
              t.scrollIntoView({ block: `nearest` });
            } catch {}
          }));
      },
      children: [
        y(`div`, { ref: s, className: `ds-rev-in`, children: r }),
        y(`div`, { ref: l, className: `ds-rev-sp`, "aria-hidden": !0 }),
      ],
    })
  );
}
function ct(e) {
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
function lt(e, t) {
  let [n, r] = u(t),
    i = f(``);
  return (
    Nt(() => {
      let t = 0,
        n = 0,
        a = 0;
      try {
        let e = c;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[Mt] = 1));
      } catch {}
      let o = () => {
          let t = ct(e);
          if (!t) return !1;
          let n = JSON.stringify(t);
          return (n !== i.current && ((i.current = n), r(t)), !0);
        },
        s = new MutationObserver(() => {
          o() && (a++, a > 2 && s.disconnect());
        });
      (s.observe(document.body, { childList: !0, subtree: !0 }), o() && a++);
      let l = () => {
        t++ < 30 && (o(), (n = c.setTimeout(l, 150)));
      };
      return (
        (n = c.setTimeout(l, 150)),
        () => {
          (s.disconnect(), c.clearTimeout(n));
        }
      );
    }, [e]),
    n
  );
}
function ut() {
  let e = lt(`site`, jt.site || [])[0] || (jt.site || [])[0] || {},
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
function dt(e) {
  let {
      reveal: t = !0,
      layer: n = 9,
      tagline: r = `Templates, ebooks, presets and courses, sold from one shelf.`,
      col1Title: i = `Shop`,
      col1: a = `Products:/products, Bundles:/bundles, Courses:/courses, Free guide:/free, Reviews:/reviews`,
      col2Title: o = `Studio`,
      col2: s = `About:/about, Notes:/notes, Contact:/contact, Affiliates:/affiliates`,
      col3Title: l = `Legal`,
      col3: d = `Licence:/licence, Refunds:/refunds, Privacy:/privacy, Terms:/terms`,
      newsTitle: p = `New on the shelf`,
      newsCopy: m = `One email a month: new products, updates, the odd discount.`,
      placeholder: h = `you@studio.com`,
      newsButton: g = `Subscribe`,
      formAction: ee = `/thank-you`,
      legal: v = `© {year} {brand}. All files are licensed, not sold.`,
      timeLabel: te = `Local time`,
      bpHint: b = `auto`,
    } = e,
    x = bt(e),
    { D: S, B: C, M: w } = tt(e);
  Xe();
  let E = Qe(),
    D = vt(),
    ne = Ze(),
    O = ut(),
    k = f(null),
    { w: re } = $e(k, b),
    A = ot(k, E, D, 0.05);
  (nt(k, E), it(k, E, D));
  let ie = re < 810,
    ae = re >= 810 && re < 1100,
    j = O.name || `Shelfline`,
    [oe, se] = u(`--:--`);
  T(() => {
    if (!E) return;
    let e = () => {
      try {
        let e = new Date();
        se(
          new Intl.DateTimeFormat(`en-GB`, {
            hour: `2-digit`,
            minute: `2-digit`,
            timeZone: O.tz || `Europe/Lisbon`,
          }).format(e)
        );
      } catch {
        let e = new Date();
        se(`${Ft(e.getHours())}:${Ft(e.getMinutes())}`);
      }
    };
    e();
    let t = c.setInterval(e, 15e3);
    return () => c.clearInterval(t);
  }, [E, O.tz]);
  let M = [
      [i, Pt(a)],
      [o, Pt(s)],
      [l, Pt(d)],
    ],
    ce = Pt(O.socials || ``),
    le = _(`footer`, {
      ref: k,
      className: `ds ds-sec ds-dark dsft${A ? ` is-on` : ``}${ie ? ` is-ph` : ae ? ` is-tab` : ``}${ne ? ` is-still` : ``}`,
      style: { ...xt(x), ...C, ...e.style },
      "aria-label": `Footer`,
      children: [
        y(`link`, { rel: `stylesheet`, href: ft }),
        y(`style`, { dangerouslySetInnerHTML: { __html: Tt + At + It } }),
        _(`div`, {
          className: `ds-wrap dsft-wrap`,
          children: [
            _(`div`, {
              className: `dsft-top`,
              children: [
                _(`div`, {
                  className: `dsft-brand`,
                  style: kt(A, 0),
                  children: [
                    _(`a`, {
                      href: `/`,
                      className: `dsft-logo`,
                      style: S,
                      children: [
                        _(`svg`, {
                          width: `22`,
                          height: `22`,
                          viewBox: `0 0 24 24`,
                          "aria-hidden": !0,
                          children: [
                            y(`path`, {
                              d: `M3 12.5V4.8A1.8 1.8 0 0 1 4.8 3h7.7c.5 0 .9.2 1.3.5l7.2 7.2a1.8 1.8 0 0 1 0 2.6l-7.7 7.7a1.8 1.8 0 0 1-2.6 0l-7.2-7.2a1.8 1.8 0 0 1-.5-1.3z`,
                              fill: `none`,
                              stroke: `currentColor`,
                              strokeWidth: `2.2`,
                              strokeLinejoin: `round`,
                            }),
                            y(`circle`, { cx: `8`, cy: `8`, r: `1.6`, fill: `currentColor` }),
                          ],
                        }),
                        j,
                      ],
                    }),
                    y(`p`, { className: `dsft-tag`, children: O.tagline || r }),
                    _(`span`, {
                      className: `dsft-time`,
                      style: w,
                      children: [
                        y(`i`, { "aria-hidden": !0 }),
                        te,
                        O.city ? ` \xb7 ${O.city}` : ``,
                        ` `,
                        y(`b`, { children: oe }),
                      ],
                    }),
                    O.email &&
                      y(`a`, {
                        className: `dsft-mail`,
                        href: `mailto:${O.email}`,
                        style: w,
                        children: O.email,
                      }),
                  ],
                }),
                _(`div`, {
                  className: `dsft-cols`,
                  children: [
                    M.map(([e, t], n) =>
                      _(
                        `div`,
                        {
                          className: `dsft-col`,
                          style: kt(A, 100 + n * 80),
                          children: [
                            y(`span`, { className: `dsft-ct`, style: w, children: e }),
                            y(`ul`, {
                              children: t.map((e, t) =>
                                y(
                                  `li`,
                                  {
                                    children: _(`a`, {
                                      href: e.h,
                                      children: [
                                        y(`span`, { children: e.l }),
                                        y(`i`, { "aria-hidden": !0 }),
                                      ],
                                    }),
                                  },
                                  t
                                )
                              ),
                            }),
                          ],
                        },
                        n
                      )
                    ),
                    _(`div`, {
                      className: `dsft-col dsft-news`,
                      style: kt(A, 340),
                      children: [
                        y(`span`, { className: `dsft-ct`, style: w, children: p }),
                        y(`p`, { children: m }),
                        _(`form`, {
                          className: `dsft-form`,
                          action: ee,
                          method: `get`,
                          onSubmit: (e) => {
                            ee || e.preventDefault();
                          },
                          children: [
                            y(`label`, {
                              className: `ds-sr`,
                              htmlFor: `dsft-email`,
                              children: `Email`,
                            }),
                            y(`input`, {
                              id: `dsft-email`,
                              type: `email`,
                              name: `email`,
                              placeholder: h,
                              required: !0,
                              autoComplete: `email`,
                            }),
                            y(`button`, {
                              type: `submit`,
                              "aria-label": g,
                              children: y(Et, { s: 16 }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            _(`div`, {
              className: `dsft-bot`,
              style: kt(A, 420),
              children: [
                y(`span`, {
                  className: `dsft-legal`,
                  style: w,
                  children: v
                    .replace(`{year}`, String(new Date().getFullYear()))
                    .replace(`{brand}`, j),
                }),
                y(`span`, {
                  className: `dsft-soc`,
                  children: ce.map((e, t) =>
                    y(
                      `a`,
                      { href: e.h, target: `_blank`, rel: `noreferrer`, style: w, children: e.l },
                      t
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
        y(`div`, { className: `dsft-ghost`, "aria-hidden": !0, style: S, children: j }),
      ],
    });
  return t ? y(st, { on: E, layer: n, children: le }) : le;
}
var ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  B,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt = e(() => {
    (r(),
      S(),
      w(),
      M(),
      (ft = `../../styles/css2-a59a76.css`),
      (pt = `clamp(1280px, 92vw, 1520px)`),
      (mt = (e) => {
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
      (ht = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (gt = (e) => {
        let t = mt(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (_t = (e, t, n, r) => {
        let i = e ? gt(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (vt = () => {
        let [e, t] = u(!1);
        return (
          n(() => {
            t(c.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (yt = (e) => Math.min(1, Math.max(0, e))),
      (B = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (bt = (e) => ({
        bone: e.bone || B.bone,
        ink: e.ink || B.ink,
        brass: e.brass || B.brass,
        pine: e.pine || B.pine,
        fog: e.fog || B.fog,
        stone: e.stone || B.stone,
        cloud: e.cloud || B.cloud,
        night: e.night || B.night,
      })),
      (xt = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (St = {
        bone: { type: I.Color, title: `Paper`, defaultValue: B.bone },
        ink: { type: I.Color, title: `Ink`, defaultValue: B.ink },
        brass: { type: I.Color, title: `Accent`, defaultValue: B.brass },
        pine: { type: I.Color, title: `Deep`, defaultValue: B.pine },
        fog: { type: I.Color, title: `Line`, defaultValue: B.fog },
        stone: { type: I.Color, title: `Muted`, defaultValue: B.stone },
        cloud: { type: I.Color, title: `White`, defaultValue: B.cloud },
        night: { type: I.Color, title: `Dark`, defaultValue: B.night },
      }),
      (Ct = {
        customFonts: {
          type: I.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: I.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: I.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: I.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (wt = {
        bpHint: {
          type: I.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (Tt = `
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
      (Et = ({ s: e = 15 }) =>
        y(`svg`, {
          width: e,
          height: e,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          "aria-hidden": !0,
          children: y(`path`, { d: `M5 12h14M13 5l7 7-7 7` }),
        })),
      (Dt = 0.18),
      (Ot = {
        reveal: {
          type: I.Boolean,
          title: `Reveal`,
          description: `Curtain: this section waits behind the one above and is uncovered as that one lifts away`,
          enabledTitle: `Curtain`,
          disabledTitle: `Off`,
          defaultValue: !0,
        },
        layer: {
          type: I.Number,
          title: `Layer`,
          description: `Stacking order. Must be LOWER than the section above (sections default to 10)`,
          min: 0,
          max: 20,
          step: 1,
          displayStepper: !0,
          defaultValue: 9,
          hidden: (e) => e.reveal === !1,
        },
      }),
      (kt = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (At = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${pt} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (jt = {
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
      (Mt = `DsFooter@cms1`),
      (Nt = c === void 0 ? T : n),
      (Pt = (e) =>
        String(e || ``)
          .split(`,`)
          .map((e) => e.trim())
          .filter(Boolean)
          .map((e) => {
            let t = e.indexOf(`:`);
            return { l: t < 0 ? e : e.slice(0, t).trim(), h: t < 0 ? `/` : e.slice(t + 1).trim() };
          })),
      (Ft = (e) => String(e).padStart(2, `0`)),
      (It = `
.dsft{position:relative;background:var(--ds-night);color:var(--ds-bone);padding:clamp(80px,9vw,130px) 0 clamp(150px,16vw,240px);overflow:clip;z-index:9;isolation:isolate}
.dsft::before{content:"";position:absolute;inset:0;background:radial-gradient(70% 60% at 50% 100%,color-mix(in srgb,var(--ds-pine) 70%,var(--ds-night)),transparent 70%);pointer-events:none}
.dsft-wrap{position:relative;z-index:2}
.dsft-top{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.6fr);gap:clamp(40px,6vw,100px);align-items:start}
.dsft-brand{display:flex;flex-direction:column;align-items:flex-start;gap:16px}
.dsft-logo{display:inline-flex;align-items:center;gap:10px;font-size:24px;font-weight:800;letter-spacing:-.02em;text-decoration:none;color:var(--ds-bone)} .dsft-logo svg{color:var(--ds-brass)}
.dsft-tag{margin:0;max-width:340px;font-size:15.5px;line-height:1.55;color:color-mix(in srgb,var(--ds-bone) 70%,transparent)}
.dsft-time{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:999px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 80%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-bone) 20%,transparent)} .dsft-time i{width:7px;height:7px;border-radius:50%;background:var(--ds-brass);animation:dsft-blink 1.6s ease-in-out infinite} .dsft-time b{font-weight:500;color:var(--ds-bone)} @keyframes dsft-blink{50%{opacity:.3}}
.dsft-mail{font-size:11px;letter-spacing:.06em;color:color-mix(in srgb,var(--ds-bone) 70%,transparent);text-decoration:none} .dsft-mail:hover{color:var(--ds-brass)}
.dsft-cols{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:30px 26px}
.dsft-ct{display:block;margin-bottom:16px;padding-bottom:10px;border-bottom:1px dashed color-mix(in srgb,var(--ds-bone) 25%,transparent);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)}
.dsft-col ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:9px} .dsft-col a{display:flex;align-items:baseline;gap:8px;font-size:14.5px;text-decoration:none;color:color-mix(in srgb,var(--ds-bone) 80%,transparent);transition:color .3s} .dsft-col a i{flex:1;border-bottom:1px dotted color-mix(in srgb,var(--ds-bone) 25%,transparent);translate:0 -4px;opacity:0;transition:opacity .3s} .dsft-col a:hover{color:var(--ds-bone)} .dsft-col a:hover i{opacity:1}
.dsft-news p{margin:0 0 14px;font-size:14px;line-height:1.55;color:color-mix(in srgb,var(--ds-bone) 70%,transparent)}
.dsft-form{display:flex;height:46px;border-radius:4px;background:color-mix(in srgb,var(--ds-cloud) 8%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-bone) 24%,transparent)} .dsft-form input{flex:1;min-width:0;padding:0 14px;border:0;border-radius:4px 0 0 4px;background:transparent;color:var(--ds-bone);font:inherit;font-size:14px} .dsft-form input::placeholder{color:color-mix(in srgb,var(--ds-bone) 45%,transparent)}
.dsft-form button{display:grid;place-items:center;width:46px;border:0;border-radius:0 4px 4px 0;background:var(--ds-brass);color:var(--ds-ink);cursor:pointer;transition:background .3s} .dsft-form button:hover{background:var(--ds-bone)}
.dsft-form button:focus-visible{outline:2px solid var(--ds-bone)!important;outline-offset:-4px!important;box-shadow:none!important} .dsft-form:focus-within{box-shadow:inset 0 0 0 2px var(--ds-brass)}
.dsft-bot{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;margin-top:clamp(50px,6vw,90px);padding-top:22px;border-top:1px solid color-mix(in srgb,var(--ds-bone) 16%,transparent)}
.dsft-legal{font-size:10.5px;letter-spacing:.06em;color:color-mix(in srgb,var(--ds-bone) 55%,transparent)} .dsft-soc{display:flex;gap:18px} .dsft-soc a{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;color:color-mix(in srgb,var(--ds-bone) 75%,transparent)} .dsft-soc a:hover{color:var(--ds-brass)}
/* ghost wordmark rises along the bottom edge as the footer is reached */
.dsft-ghost{position:absolute;left:50%;bottom:-.14em;z-index:1;translate:-50% 0;font-size:clamp(120px,22vw,340px);line-height:1;font-weight:900;letter-spacing:-.05em;white-space:nowrap;color:color-mix(in srgb,var(--ds-bone) 5%,transparent);transform:translateY(calc((1 - var(--sp,.5))*30%));pointer-events:none;user-select:none}
.dsft.is-tab .dsft-top{grid-template-columns:1fr;gap:40px} .dsft.is-tab .dsft-cols{grid-template-columns:repeat(2,minmax(0,1fr))}
.dsft.is-ph .dsft-top{grid-template-columns:1fr;gap:34px} .dsft.is-ph .dsft-cols{grid-template-columns:1fr 1fr;gap:26px 18px} .dsft.is-ph .dsft-news{grid-column:1/-1} .dsft.is-ph .dsft-bot{flex-direction:column;align-items:flex-start} .dsft.is-ph{padding-bottom:120px}
@media (prefers-reduced-motion:reduce){.dsft-time i{animation:none} .dsft-ghost{transform:none}}`),
      _e(dt, {
        ...wt,
        ...Ot,
        tagline: {
          type: I.String,
          title: `Tagline`,
          description: `Used when the Site tagline is empty`,
          displayTextArea: !0,
          defaultValue: `Templates, ebooks, presets and courses, sold from one shelf.`,
        },
        col1Title: { type: I.String, title: `Column 1`, defaultValue: `Shop` },
        col1: {
          type: I.String,
          title: `Column 1 links`,
          description: `Label:/path, …`,
          displayTextArea: !0,
          defaultValue: `Products:/products, Bundles:/bundles, Courses:/courses, Free guide:/free, Reviews:/reviews`,
        },
        col2Title: { type: I.String, title: `Column 2`, defaultValue: `Studio` },
        col2: {
          type: I.String,
          title: `Column 2 links`,
          displayTextArea: !0,
          defaultValue: `About:/about, Notes:/notes, Contact:/contact, Affiliates:/affiliates`,
        },
        col3Title: { type: I.String, title: `Column 3`, defaultValue: `Legal` },
        col3: {
          type: I.String,
          title: `Column 3 links`,
          displayTextArea: !0,
          defaultValue: `Licence:/licence, Refunds:/refunds, Privacy:/privacy, Terms:/terms`,
        },
        newsTitle: { type: I.String, title: `Newsletter title`, defaultValue: `New on the shelf` },
        newsCopy: {
          type: I.String,
          title: `Newsletter copy`,
          displayTextArea: !0,
          defaultValue: `One email a month: new products, updates, the odd discount.`,
        },
        placeholder: { type: I.String, title: `Placeholder`, defaultValue: `you@studio.com` },
        newsButton: { type: I.String, title: `Submit label`, defaultValue: `Subscribe` },
        formAction: { type: I.String, title: `Form action`, defaultValue: `/thank-you` },
        legal: {
          type: I.String,
          title: `Legal line`,
          description: `{year} and {brand} are filled in`,
          defaultValue: `© {year} {brand}. All files are licensed, not sold.`,
        },
        timeLabel: { type: I.String, title: `Time label`, defaultValue: `Local time` },
        ...St,
        ...Ct,
      }));
  });
function Rt() {
  T(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = Yt), document.head.appendChild(e));
  }, []);
}
function zt() {
  let e = O(),
    t = null;
  try {
    t = L.current();
  } catch {}
  return e || (t !== null && t !== L.preview);
}
function Bt() {
  let e = O(),
    [t, n] = u(!1);
  return (
    T(() => {
      !e && L.current() !== L.canvas && c !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function Vt(e, t) {
  let r = String(t || ``).toLowerCase(),
    [i, a] = u(r === `phone` ? 390 : r === `tablet` ? 810 : 1440),
    [o, s] = u(r === `phone` ? 844 : r === `tablet` ? 1080 : 900);
  return (
    n(() => {
      let t = e.current;
      if (!t) return;
      let n = new ResizeObserver(([e]) => {
        let n = Math.round(
          (e.borderBoxSize && e.borderBoxSize[0] ? e.borderBoxSize[0].inlineSize : 0) ||
            t.offsetWidth
        );
        n > 0 && a(n);
      });
      n.observe(t);
      let r = () => s(c.innerHeight);
      r();
      let i = () => {
          let e = Math.round(t.offsetWidth);
          e > 0 && a(e);
        },
        o = c.setTimeout(i, 150),
        l = c.setTimeout(i, 700),
        u = c.setTimeout(i, 1600);
      return (
        c.addEventListener(`resize`, r),
        c.addEventListener(`load`, i),
        () => {
          (n.disconnect(),
            c.clearTimeout(o),
            c.clearTimeout(l),
            c.clearTimeout(u),
            c.removeEventListener(`resize`, r),
            c.removeEventListener(`load`, i));
        }
      );
    }, []),
    { w: i, vh: o }
  );
}
function Ht(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: rn(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? tn(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: rn(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? tn(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: rn(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? tn(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function Ut(e, t) {
  T(() => {
    if (!t || !e.current || !c.matchMedia(`(hover:hover) and (pointer:fine)`).matches) return;
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
      a = () => {
        for (let e of r()) (e.style.setProperty(`--mx`, `0px`), e.style.setProperty(`--my`, `0px`));
      };
    return (
      n.addEventListener(`pointermove`, i),
      n.addEventListener(`pointerleave`, a),
      () => {
        (n.removeEventListener(`pointermove`, i), n.removeEventListener(`pointerleave`, a));
      }
    );
  }, [t]);
}
function Wt(e) {
  let [t, n] = u([]);
  return (
    T(() => {
      if (!e) return;
      n(mn());
      let t = () => n(mn());
      return (
        c.addEventListener(`ds-cart`, t),
        c.addEventListener(`storage`, t),
        () => {
          (c.removeEventListener(`ds-cart`, t), c.removeEventListener(`storage`, t));
        }
      );
    }, [e]),
    t
  );
}
function Gt(e) {
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
function Kt(e, t) {
  let [n, r] = u(t),
    i = f(``);
  return (
    Sn(() => {
      let t = 0,
        n = 0,
        a = 0;
      try {
        let e = c;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[bn] = 1));
      } catch {}
      let o = () => {
          let t = Gt(e);
          if (!t) return !1;
          let n = JSON.stringify(t);
          return (n !== i.current && ((i.current = n), r(t)), !0);
        },
        s = new MutationObserver(() => {
          o() && (a++, a > 2 && s.disconnect());
        });
      (s.observe(document.body, { childList: !0, subtree: !0 }), o() && a++);
      let l = () => {
        t++ < 30 && (o(), (n = c.setTimeout(l, 150)));
      };
      return (
        (n = c.setTimeout(l, 150)),
        () => {
          (s.disconnect(), c.clearTimeout(n));
        }
      );
    }, [e]),
    n
  );
}
function qt() {
  let e = Kt(`site`, yn.site || [])[0] || (yn.site || [])[0] || {},
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
function Jt(e) {
  let {
      links:
        t = `Products:/products, Bundles:/bundles, Courses:/courses, Notes:/notes, About:/about`,
      cta: n = `Free guide`,
      ctaLink: r = `/free`,
      showCart: i = !0,
      cartLabel: a = `Cart`,
      drawerLabel: o = `Shop the shelf`,
      aislesLabel: s = `Aisles`,
      featuredLabel: l = `Featured this week`,
      allLabel: d = `All products`,
      allLink: p = `/products`,
      freeTitle: m = `The pricing guide, free`,
      freeCopy: h = `Forty pages on pricing digital products. One email, the file.`,
      freeButton: g = `Get the guide`,
      freeLink: v = `/free`,
      menuLabel: te = `Menu`,
      closeLabel: b = `Close`,
      bpHint: x = `auto`,
    } = e,
    S = an(e),
    { D: C, B: w, M: E } = Ht(e);
  Rt();
  let D = Bt(),
    ne = zt(),
    O = qt(),
    k = f(null),
    re = f(null),
    A = f(null),
    ie = f(null),
    { w: ae } = Vt(k, x);
  Ut(re, D);
  let j = ae < 810,
    oe = Kt(`types`, yn.types),
    se = [...Kt(`products`, yn.products)]
      .sort((e, t) => !!String(t.f9 || ``).trim() - +!!String(e.f9 || ``).trim())
      .slice(0, 3),
    M = Cn(t),
    ce = Cn(O.socials || ``),
    le = O.name || `Shelfline`,
    [ue, de] = u(!1),
    [fe, pe] = u(!1),
    [me, he] = u(!1),
    N = f(0),
    {
      cartTitle: ge = `Your cart`,
      cartEmpty: _e = `Nothing on the counter yet.`,
      cartCheckout: ve = `Checkout`,
      checkoutLink: ye = `/checkout`,
      cartContinue: be = `Keep browsing`,
      cartRemove: xe = `Remove`,
      subtotalLabel: Se = `Subtotal`,
      cartNote: P = `Instant download after checkout. Files stay in your account.`,
    } = e,
    [Ce, we] = u(!1),
    Te = Wt(D),
    [Ee, F] = u(!1),
    De = f(null),
    I = Te.reduce((e, t) => e + _n(t.price), 0);
  (T(() => {
    if (!D) return;
    let e = () => F(!0);
    return (c.addEventListener(`ds-cart-open`, e), () => c.removeEventListener(`ds-cart-open`, e));
  }, [D]),
    T(() => {
      if (!D) return;
      let e = document.documentElement;
      if (Ee) {
        e.style.overflow = `hidden`;
        let t = c.setTimeout(() => De.current?.querySelector(`button,a`)?.focus(), 60);
        return () => {
          (c.clearTimeout(t), (e.style.overflow = ``));
        };
      }
    }, [D, Ee]),
    T(() => {
      if (!D) return;
      let e = 0,
        t = (e) => {
          let t = String(e || ``).match(
            /rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/
          );
          if (!t || (t[4] === void 0 ? 1 : parseFloat(t[4])) < 0.5) return null;
          let n = (e) => ((e /= 255), e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4);
          return 0.2126 * n(+t[1]) + 0.7152 * n(+t[2]) + 0.0722 * n(+t[3]);
        },
        n = () => {
          let e = c.scrollY;
          de(e > 40);
          try {
            let e = document.elementsFromPoint(
                Math.round(c.innerWidth / 2),
                (c.innerWidth < 810 ? 64 : 72) + 6
              ),
              n = null;
            for (let r of e) {
              if (r.closest?.(`.dshd`)) continue;
              if (r.closest?.(`.ds-dark`)) {
                n = 0.05;
                break;
              }
              let e = t(getComputedStyle(r).backgroundColor);
              if (e !== null) {
                n = e;
                break;
              }
            }
            we(n !== null && n > 0.45);
          } catch {}
        },
        r = () => {
          (cancelAnimationFrame(e), (e = requestAnimationFrame(n)));
        };
      n();
      let i = c.setTimeout(n, 900);
      return (
        c.addEventListener(`scroll`, r, { passive: !0 }),
        c.addEventListener(`resize`, r),
        () => {
          (cancelAnimationFrame(e),
            c.clearTimeout(i),
            c.removeEventListener(`scroll`, r),
            c.removeEventListener(`resize`, r));
        }
      );
    }, [D]));
  let Oe = () => {
      (c.clearTimeout(N.current), pe(!0));
    },
    ke = (e = 160) => {
      (c.clearTimeout(N.current), (N.current = c.setTimeout(() => pe(!1), e)));
    };
  (T(() => {
    if (!D) return;
    let e = (e) => {
      e.key === `Escape` && (pe(!1), F(!1), me && (he(!1), ie.current?.focus()));
    };
    return (
      document.addEventListener(`keydown`, e),
      () => document.removeEventListener(`keydown`, e)
    );
  }, [D, me]),
    T(() => {
      if (!D) return;
      let e = document.documentElement;
      if (!me) {
        e.style.overflow = ``;
        return;
      }
      e.style.overflow = `hidden`;
      let t = A.current,
        n = c.setTimeout(() => t?.querySelector(`a,button`)?.focus(), 60),
        r = (e) => {
          if (e.key !== `Tab` || !t) return;
          let n = Array.from(
              t.querySelectorAll(`a[href],button,input,[tabindex]:not([tabindex="-1"])`)
            ),
            r = ie.current ? [ie.current, ...n] : n;
          if (!r.length) return;
          let i = r[0],
            a = r[r.length - 1];
          e.shiftKey && document.activeElement === i
            ? (e.preventDefault(), a.focus())
            : !e.shiftKey && document.activeElement === a && (e.preventDefault(), i.focus());
        };
      return (
        document.addEventListener(`keydown`, r),
        () => {
          (c.clearTimeout(n), document.removeEventListener(`keydown`, r), (e.style.overflow = ``));
        }
      );
    }, [D, me]),
    T(() => {
      j ? pe(!1) : he(!1);
    }, [j]));
  let Ae = _(`header`, {
      ref: re,
      className: `ds ds-dark dshd${ue ? ` is-scr` : ``}${Ce ? ` is-lt` : ``}${Ee ? ` is-cart` : ``}${fe ? ` is-open` : ``}${me ? ` is-sheet` : ``}${j ? ` is-ph` : ``}${ne ? ` is-still` : ``}`,
      style: { ...on(S), ...w },
      children: [
        _(`div`, {
          className: `dshd-bar`,
          children: [
            _(`a`, {
              className: `dshd-logo`,
              href: `/`,
              style: C,
              "aria-label": le,
              children: [y(wn, {}), le],
            }),
            !j &&
              y(`nav`, {
                className: `dshd-nav`,
                "aria-label": `Main`,
                children: M.map((e, t) =>
                  t === 0
                    ? y(
                        `div`,
                        {
                          className: `dshd-item`,
                          onPointerEnter: Oe,
                          onPointerLeave: () => ke(),
                          children: _(`a`, {
                            href: e.h,
                            className: `dshd-link is-trig`,
                            "aria-haspopup": `true`,
                            "aria-expanded": fe,
                            onFocus: Oe,
                            onClick: (e) => {
                              !fe &&
                                c.matchMedia(`(hover:none)`).matches &&
                                (e.preventDefault(), Oe());
                            },
                            children: [e.l, y(`i`, { className: `dshd-chev`, "aria-hidden": !0 })],
                          }),
                        },
                        t
                      )
                    : y(`a`, { href: e.h, className: `dshd-link`, children: e.l }, t)
                ),
              }),
            _(`div`, {
              className: `dshd-right`,
              children: [
                i &&
                  _(`button`, {
                    type: `button`,
                    className: `dshd-cart${Te.length ? ` has` : ``}`,
                    style: E,
                    onClick: () => F(!0),
                    "aria-haspopup": `dialog`,
                    "aria-expanded": Ee,
                    "aria-label": `${a}, ${Te.length}`,
                    children: [
                      y(Tn, {}),
                      a,
                      ` · `,
                      y(`b`, { className: `dshd-cn`, children: Te.length }, Te.length),
                    ],
                  }),
                !j && y(dn, { href: r, label: n, kind: `quiet`, className: `dshd-cta`, arrow: !1 }),
                j &&
                  _(`button`, {
                    ref: ie,
                    type: `button`,
                    className: `dshd-burger`,
                    "aria-expanded": me,
                    "aria-controls": `dshd-sheet`,
                    "aria-label": me ? b : te,
                    onClick: () => he((e) => !e),
                    children: [y(`i`, {}), y(`i`, {})],
                  }),
              ],
            }),
          ],
        }),
        !j &&
          y(`div`, {
            className: `dshd-drawer`,
            role: `region`,
            "aria-label": o,
            "aria-hidden": !fe,
            onPointerEnter: Oe,
            onPointerLeave: () => ke(),
            onFocusCapture: Oe,
            onBlurCapture: (e) => {
              e.currentTarget.contains(e.relatedTarget) || ke(60);
            },
            onClick: (e) => {
              e.target.closest(`a`) && pe(!1);
            },
            children: _(`div`, {
              className: `dshd-din`,
              children: [
                _(`div`, {
                  className: `dshd-col`,
                  children: [
                    y(`span`, { className: `dshd-ct`, style: E, children: s }),
                    y(`ul`, {
                      children: oe.map((e, t) =>
                        y(
                          `li`,
                          {
                            children: _(`a`, {
                              href: `/types/${e.slug || ``}`,
                              children: [
                                y(`span`, { className: `dshd-an`, style: C, children: e.f1 }),
                                y(`span`, { className: `dshd-ac`, style: E, children: e.f2 }),
                              ],
                            }),
                          },
                          e.slug || t
                        )
                      ),
                    }),
                    _(`a`, {
                      className: `dshd-all`,
                      href: p,
                      style: E,
                      children: [d, y(vn, { s: 13 })],
                    }),
                  ],
                }),
                _(`div`, {
                  className: `dshd-col`,
                  children: [
                    y(`span`, { className: `dshd-ct`, style: E, children: l }),
                    y(`div`, {
                      className: `dshd-fgrid`,
                      children: se.map((e, t) =>
                        _(
                          `a`,
                          {
                            href: `/products/${e.slug || ``}`,
                            className: `dshd-fp`,
                            style: { "--col": e.f12 || `#5B4BFF` },
                            children: [
                              _(`span`, {
                                className: `dshd-fc`,
                                children: [
                                  xn(e) &&
                                    y(`img`, {
                                      ...$t(xn(e), `180px`),
                                      alt: ``,
                                      loading: `lazy`,
                                      decoding: `async`,
                                    }),
                                  e.f9 && y(`i`, { style: E, children: e.f9 }),
                                ],
                              }),
                              y(`b`, { style: C, children: e.f1 }),
                              _(`small`, {
                                style: E,
                                children: [e.f2, e.f3 ? ` \xb7 ${e.f3}` : ``],
                              }),
                            ],
                          },
                          e.slug || t
                        )
                      ),
                    }),
                  ],
                }),
                _(`a`, {
                  className: `dshd-free`,
                  href: v,
                  children: [
                    y(`span`, {
                      className: `dshd-fs`,
                      style: C,
                      "aria-hidden": !0,
                      children: `Free`,
                    }),
                    y(`b`, { style: C, children: m }),
                    y(`p`, { children: h }),
                    _(`span`, { className: `dshd-fb`, style: E, children: [g, y(vn, { s: 13 })] }),
                  ],
                }),
              ],
            }),
          }),
        j &&
          y(`div`, {
            ref: A,
            id: `dshd-sheet`,
            className: `dshd-sheet`,
            role: `dialog`,
            "aria-modal": `true`,
            "aria-label": te,
            "aria-hidden": !me,
            children: _(`div`, {
              className: `dshd-sin`,
              children: [
                y(`nav`, {
                  className: `dshd-slinks`,
                  "aria-label": `Main`,
                  children: M.map((e, t) =>
                    y(
                      `a`,
                      {
                        href: e.h,
                        style: { ...C, "--i": t },
                        onClick: () => he(!1),
                        children: e.l,
                      },
                      t
                    )
                  ),
                }),
                y(`span`, { className: `dshd-ct`, style: E, children: s }),
                y(`ul`, {
                  className: `dshd-sais`,
                  children: oe.map((e, t) =>
                    y(
                      `li`,
                      {
                        children: _(`a`, {
                          href: `/types/${e.slug || ``}`,
                          onClick: () => he(!1),
                          children: [
                            y(`span`, { children: e.f1 }),
                            y(`small`, { style: E, children: e.f2 }),
                          ],
                        }),
                      },
                      e.slug || t
                    )
                  ),
                }),
                _(`div`, {
                  className: `dshd-sfoot`,
                  children: [
                    y(dn, { href: r, label: n, kind: `solid` }),
                    ce.length > 0 &&
                      y(`span`, {
                        className: `dshd-soc`,
                        children: ce.map((e, t) =>
                          y(
                            `a`,
                            {
                              href: e.h,
                              target: `_blank`,
                              rel: `noreferrer`,
                              style: E,
                              children: e.l,
                            },
                            t
                          )
                        ),
                      }),
                    O.email &&
                      y(`a`, {
                        className: `dshd-mail`,
                        href: `mailto:${O.email}`,
                        style: E,
                        children: O.email,
                      }),
                  ],
                }),
              ],
            }),
          }),
        _(`div`, {
          className: `dshd-cwrap${Ee ? ` is-on` : ``}`,
          "aria-hidden": !Ee,
          children: [
            y(`div`, { className: `dshd-cback`, onClick: () => F(!1) }),
            _(`div`, {
              className: `dshd-cdr`,
              ref: De,
              role: `dialog`,
              "aria-modal": `true`,
              "aria-label": ge,
              children: [
                _(`div`, {
                  className: `dshd-chd`,
                  children: [
                    _(`span`, {
                      className: `dshd-ctt`,
                      style: C,
                      children: [ge, y(`small`, { style: E, children: Te.length })],
                    }),
                    _(`button`, {
                      type: `button`,
                      className: `dshd-cx`,
                      onClick: () => F(!1),
                      "aria-label": b,
                      children: [y(`i`, {}), y(`i`, {})],
                    }),
                  ],
                }),
                Te.length === 0
                  ? y(`p`, { className: `dshd-cempty`, children: _e })
                  : y(`ul`, {
                      className: `dshd-cl`,
                      style: E,
                      children: Te.map((e) =>
                        _(
                          `li`,
                          {
                            className: `dshd-ci`,
                            children: [
                              y(`a`, {
                                className: `dshd-cim`,
                                href: e.href || `#`,
                                children:
                                  e.cover &&
                                  y(`img`, {
                                    ...$t(e.cover, `56px`),
                                    alt: ``,
                                    loading: `lazy`,
                                    decoding: `async`,
                                  }),
                              }),
                              _(`span`, {
                                className: `dshd-cit`,
                                children: [
                                  y(`a`, {
                                    href: e.href || `#`,
                                    style: w,
                                    children: y(`b`, { children: e.name }),
                                  }),
                                  y(`small`, { children: e.kind }),
                                ],
                              }),
                              y(`span`, { className: `dshd-cip`, children: e.price }),
                              y(`button`, {
                                type: `button`,
                                className: `dshd-crm`,
                                onClick: () => gn(e.slug),
                                "aria-label": `${xe} ${e.name}`,
                                children: xe,
                              }),
                            ],
                          },
                          e.slug
                        )
                      ),
                    }),
                _(`div`, {
                  className: `dshd-cft`,
                  style: E,
                  children: [
                    _(`span`, {
                      className: `dshd-csub`,
                      children: [
                        y(`span`, { children: Se }),
                        y(`i`, { "aria-hidden": !0 }),
                        y(`b`, { style: C, children: `$${I.toLocaleString(`en-US`)}` }),
                      ],
                    }),
                    y(dn, { href: ye, label: ve, kind: `solid`, className: `dshd-cbtn` }),
                    y(`button`, {
                      type: `button`,
                      className: `dshd-ccont`,
                      onClick: () => F(!1),
                      children: be,
                    }),
                    y(`span`, { className: `dshd-cnote`, children: P }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    je = ln(e);
  return _(`div`, {
    ref: k,
    className: `ds dshd-root`,
    style: {
      ...e.style,
      height: 0,
      minHeight: 0,
      width: `100%`,
      position: `relative`,
      zIndex: 80,
      overflow: `visible`,
    },
    children: [
      y(`link`, { rel: `stylesheet`, href: Yt }),
      y(`style`, { dangerouslySetInnerHTML: { __html: fn + En } }),
      je && y(`style`, { dangerouslySetInnerHTML: { __html: je } }),
      D && typeof document < `u` ? ee(Ae, document.body) : Ae,
    ],
  });
}
var Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  V,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn = e(() => {
    (r(),
      S(),
      w(),
      d(),
      M(),
      (Yt = `../../styles/css2-a59a76.css`),
      (Xt = `clamp(1280px, 92vw, 1520px)`),
      (Zt = [160, 320, 480, 800, 1200, 1600]),
      (Qt = (e) => {
        let t =
            String(e || ``)
              .trim()
              .split(`,`)
              .pop() || ``,
          n = t.match(/(\d+(?:\.\d+)?)px/),
          r = t.match(/(\d+(?:\.\d+)?)vw/),
          i = n ? parseFloat(n[1]) * 2 : r ? (parseFloat(r[1]) / 100) * 1600 * 1.25 : 1600;
        return Zt.find((e) => e >= i) || 1600;
      }),
      ($t = (e, t) => {
        let n = String(e || ``),
          r = n.split(`?`)[0];
        if (/framerusercontent\.com\/images\//.test(n)) {
          let e = Qt(t);
          return {
            src: `${r}?scale-down-to=${e <= 512 ? 512 : e <= 1024 ? 1024 : 2048}`,
            srcSet: `${r}?scale-down-to=512 512w, ${r}?scale-down-to=1024 1024w, ${r}?scale-down-to=2048 2048w`,
            sizes: t,
          };
        }
        if (/images\.unsplash\.com\//.test(n)) {
          let e = Qt(t),
            n = (e) => `${r}?w=${e}&q=70&fm=jpg&auto=format`;
          return {
            src: n(e),
            srcSet: Zt.filter((t) => t <= Math.max(e * 2, 480))
              .map((e) => `${n(e)} ${e}w`)
              .join(`, `),
            sizes: t,
          };
        }
        return { src: n };
      }),
      (en = (e) => {
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
      (tn = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (nn = (e) => {
        let t = en(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (rn = (e, t, n, r) => {
        let i = e ? nn(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
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
      (an = (e) => ({
        bone: e.bone || V.bone,
        ink: e.ink || V.ink,
        brass: e.brass || V.brass,
        pine: e.pine || V.pine,
        fog: e.fog || V.fog,
        stone: e.stone || V.stone,
        cloud: e.cloud || V.cloud,
        night: e.night || V.night,
      })),
      (on = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (sn = {
        bone: { type: I.Color, title: `Paper`, defaultValue: V.bone },
        ink: { type: I.Color, title: `Ink`, defaultValue: V.ink },
        brass: { type: I.Color, title: `Accent`, defaultValue: V.brass },
        pine: { type: I.Color, title: `Deep`, defaultValue: V.pine },
        fog: { type: I.Color, title: `Line`, defaultValue: V.fog },
        stone: { type: I.Color, title: `Muted`, defaultValue: V.stone },
        cloud: { type: I.Color, title: `White`, defaultValue: V.cloud },
        night: { type: I.Color, title: `Dark`, defaultValue: V.night },
      }),
      (cn = {
        customFonts: {
          type: I.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: I.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: I.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: I.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (ln = (e) => {
        if (!e || !e.customFonts) return ``;
        let t = [],
          n = (e, n, r) => {
            let i = nn(n);
            i && (t.push(`--ds-font-${e}:${i}`), t.push(`--ds-font-${e}w:${tn(n, r)}`));
          };
        return (
          n(`d`, e.displayFont, 700),
          n(`b`, e.bodyFont, 400),
          n(`m`, e.monoFont, 400),
          n(`a`, e.accentFont, 400),
          t.length ? `:root{${t.join(`;`)}}` : ``
        );
      }),
      (un = {
        bpHint: {
          type: I.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      (dn = ({
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
        y(`a`, {
          className: `ds-btn ds-${n}${r ? `` : ` ds-noarr`}${a ? ` ` + a : ``}`,
          "data-mag": !0,
          "data-cur": c || `go`,
          href: e,
          onClick: o,
          "aria-label": s,
          style: i,
          children: _(`span`, {
            className: `ds-tag`,
            children: [
              y(`span`, { className: `ds-hole`, "aria-hidden": !0 }),
              y(`span`, { className: `ds-fill`, "aria-hidden": !0 }),
              l,
              _(`span`, {
                className: `ds-lbl`,
                children: [
                  y(`span`, { className: `ds-l1`, children: t }),
                  y(`span`, { className: `ds-l2`, "aria-hidden": !0, children: t }),
                ],
              }),
              r &&
                y(`span`, {
                  className: `ds-arr`,
                  "aria-hidden": !0,
                  children: _(`svg`, {
                    width: `13`,
                    height: `13`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2.2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [
                      y(`path`, { d: `M6 8h12l-1 12H7z` }),
                      y(`path`, { d: `M9 8V6a3 3 0 0 1 6 0v2` }),
                    ],
                  }),
                }),
            ],
          }),
        })),
      (fn = `
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
      (pn = `ds-cart`),
      (mn = () => {
        try {
          let e = JSON.parse(localStorage.getItem(pn) || `[]`);
          return Array.isArray(e) ? e : [];
        } catch {
          return [];
        }
      }),
      (hn = (e) => {
        try {
          localStorage.setItem(pn, JSON.stringify(e));
        } catch {}
        try {
          c.dispatchEvent(new CustomEvent(`ds-cart`, { detail: { items: e } }));
        } catch {}
      }),
      (gn = (e) => hn(mn().filter((t) => t.slug !== e))),
      (_n = (e) => parseFloat(String(e || ``).replace(/[^\d.]/g, ``)) || 0),
      (vn = ({ s: e = 15 }) =>
        y(`svg`, {
          width: e,
          height: e,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          "aria-hidden": !0,
          children: y(`path`, { d: `M5 12h14M13 5l7 7-7 7` }),
        })),
      I.Boolean,
      I.Number,
      (yn = {
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
        types: [
          {
            slug: `templates`,
            f1: `Templates`,
            f2: `24 products`,
            f3: `Notion, Canva and Figma templates that swap colours and fonts in one place.`,
            f4: `Template pack;Notion template;UI kit`,
            img: `https://framerusercontent.com/images/xF4ZWJhwOlDmKnEJ7o38BRVftmM.webp`,
            n1: `1`,
          },
          {
            slug: `ebooks`,
            f1: `Ebooks & guides`,
            f2: `11 products`,
            f3: `Short, worked-example books: pricing, launches, the emails behind them.`,
            f4: `Ebook;Guide`,
            img: `https://framerusercontent.com/images/BD9yLWb5qMKb4v02bMykF61kRj4.webp`,
            n1: `2`,
          },
          {
            slug: `presets`,
            f1: `Presets & LUTs`,
            f2: `9 products`,
            f3: `Film-stock looks for Lightroom, Camera Raw and DaVinci, with install guides.`,
            f4: `Preset pack`,
            img: `https://framerusercontent.com/images/fk512pFY41jFysKn4vzr4WuciX4.webp`,
            n1: `3`,
          },
          {
            slug: `courses`,
            f1: `Courses`,
            f2: `4 products`,
            f3: `Day-by-day video courses with worksheets and a private community.`,
            f4: `Course`,
            img: `https://framerusercontent.com/images/FKWCPeLHSzmJzDoLjxPFBS87d8I.webp`,
            n1: `4`,
          },
          {
            slug: `fonts`,
            f1: `Fonts`,
            f2: `6 products`,
            f3: `Quiet grotesks and mono siblings, desktop + web licence in one price.`,
            f4: `Font`,
            img: `https://framerusercontent.com/images/SiQAgSaYyCaWF8j6NDZdMD0gOw.webp`,
            n1: `5`,
          },
          {
            slug: `icons`,
            f1: `Icons & assets`,
            f2: `7 products`,
            f3: `Icon sets, illustration packs and mockups, every one a component.`,
            f4: `Icon set`,
            img: `https://framerusercontent.com/images/eVvUGROnovaUQGYRG5m3DFNo.webp`,
            n1: `6`,
          },
        ],
      }),
      (bn = `DsHeader@cms1`),
      (xn = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (Sn = c === void 0 ? T : n),
      (Cn = (e) =>
        String(e || ``)
          .split(`,`)
          .map((e) => e.trim())
          .filter(Boolean)
          .map((e) => {
            let t = e.indexOf(`:`);
            return { l: t < 0 ? e : e.slice(0, t).trim(), h: t < 0 ? `/` : e.slice(t + 1).trim() };
          })),
      (wn = ({ s: e = 22 }) =>
        _(`svg`, {
          width: e,
          height: e,
          viewBox: `0 0 24 24`,
          "aria-hidden": !0,
          children: [
            y(`path`, {
              d: `M3 12.5V4.8A1.8 1.8 0 0 1 4.8 3h7.7c.5 0 .9.2 1.3.5l7.2 7.2a1.8 1.8 0 0 1 0 2.6l-7.7 7.7a1.8 1.8 0 0 1-2.6 0l-7.2-7.2a1.8 1.8 0 0 1-.5-1.3z`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `2.2`,
              strokeLinejoin: `round`,
            }),
            y(`circle`, { cx: `8`, cy: `8`, r: `1.6`, fill: `currentColor` }),
          ],
        })),
      (Tn = () =>
        _(`svg`, {
          viewBox: `0 0 24 24`,
          "aria-hidden": !0,
          children: [
            y(`path`, {
              d: `M6 8h12l-1 12H7z`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `2.2`,
              strokeLinejoin: `round`,
            }),
            y(`path`, {
              d: `M9 8V6a3 3 0 0 1 6 0v2`,
              fill: `none`,
              stroke: `currentColor`,
              strokeWidth: `2.2`,
              strokeLinecap: `round`,
            }),
          ],
        })),
      (En = `
.dshd-root{height:0!important;min-height:0!important}
.dshd{position:fixed;left:0;right:0;top:0;z-index:80;color:var(--ds-bone);--barh:72px;pointer-events:none}
.dshd-bar{pointer-events:auto;position:relative;z-index:2;display:flex;align-items:center;gap:28px;height:var(--barh);padding:0 clamp(16px,3vw,44px);transition:background .4s,box-shadow .4s}
.dshd.is-scr .dshd-bar,.dshd.is-open .dshd-bar,.dshd.is-sheet .dshd-bar{background:color-mix(in srgb,var(--ds-night) 80%,transparent);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);box-shadow:0 1px 0 color-mix(in srgb,var(--ds-bone) 10%,transparent)}
.dshd-logo{display:inline-flex;align-items:center;gap:10px;font-size:22px;font-weight:800;letter-spacing:-.02em;text-decoration:none;color:var(--ds-bone)} .dshd-logo svg{color:var(--ds-brass)}
.dshd-nav{display:flex;align-items:center;gap:2px;margin-left:auto} .dshd-item{position:relative}
.dshd-link{display:inline-flex;align-items:center;gap:7px;padding:10px 13px;border-radius:999px;font-size:14px;font-weight:600;text-decoration:none;color:color-mix(in srgb,var(--ds-bone) 82%,transparent);transition:color .3s,background .3s}
.dshd-link:hover,.dshd-link.is-trig[aria-expanded="true"]{color:var(--ds-bone);background:color-mix(in srgb,var(--ds-cloud) 8%,transparent)}
.dshd-chev{width:6px;height:6px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;rotate:45deg;translate:0 -2px;transition:rotate .3s,translate .3s} .dshd-link.is-trig[aria-expanded="true"] .dshd-chev{rotate:225deg;translate:0 2px}
.dshd-right{display:flex;align-items:center;gap:12px}
.dshd-cart{display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;font-size:11px;letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-cloud) 22%,transparent)} .dshd-cart svg{width:14px;height:14px} .dshd-cart b{font-weight:500;color:var(--ds-brass)}
.dshd-cta{font-size:13px;min-height:44px;filter:none;flex:none} @media (max-width:1100px){.dshd-bar{gap:14px} .dshd-link{padding:10px 8px;font-size:13px} .dshd-nav{gap:2px}}
/* the shop drawer */
.dshd-drawer{pointer-events:auto;position:absolute;left:0;right:0;top:var(--barh);z-index:1;background:color-mix(in srgb,var(--ds-night) 94%,transparent);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:0 40px 80px -30px rgba(0,0,0,.8),inset 0 1px 0 color-mix(in srgb,var(--ds-bone) 10%,transparent);visibility:hidden;opacity:0;translate:0 -8px;transition:opacity .3s,translate .4s cubic-bezier(.2,.8,.2,1),visibility 0s .3s}
.dshd.is-open .dshd-drawer{visibility:visible;opacity:1;translate:0 0;transition:opacity .3s,translate .4s cubic-bezier(.2,.8,.2,1),visibility 0s}
.dshd-din{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.5fr) 260px;gap:clamp(24px,4vw,56px);width:min(100%,${Xt});margin:0 auto;padding:26px clamp(16px,3vw,44px) 32px}
.dshd-ct{display:block;margin-bottom:12px;padding-bottom:10px;border-bottom:1px dashed color-mix(in srgb,var(--ds-bone) 25%,transparent);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)}
.dshd-col ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column}
.dshd-col li a{display:flex;align-items:baseline;justify-content:space-between;gap:12px;padding:8px 0;text-decoration:none;color:var(--ds-bone);border-bottom:1px solid color-mix(in srgb,var(--ds-bone) 8%,transparent);transition:color .3s,padding .3s} .dshd-col li a:hover{color:var(--ds-brass);padding-left:4px}
.dshd-an{font-size:17px;font-weight:700;letter-spacing:-.01em} .dshd-ac{font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 55%,transparent);white-space:nowrap}
.dshd-all{display:inline-flex;align-items:center;gap:8px;margin-top:14px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-bone);text-decoration:none} .dshd-all svg{color:var(--ds-brass);transition:translate .3s} .dshd-all:hover svg{translate:4px 0}
.dshd-fgrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.dshd-fp{display:flex;flex-direction:column;gap:8px;text-decoration:none;color:var(--ds-bone)}
.dshd-fc{position:relative;aspect-ratio:4/3;border-radius:6px;overflow:hidden;background:var(--col);box-shadow:0 20px 40px -20px rgba(0,0,0,.8);transition:transform .5s cubic-bezier(.34,1.56,.64,1)} .dshd-fp:hover .dshd-fc{transform:translateY(-4px) rotate(-1deg)}
.dshd-fc img{width:100%;height:100%;object-fit:cover;display:block;opacity:.6;mix-blend-mode:luminosity} .dshd-fc::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,color-mix(in srgb,var(--col) 55%,#000))}
.dshd-fc i{position:absolute;left:10px;top:10px;z-index:1;padding:3px 7px;background:var(--ds-brass);color:var(--ds-ink);font-size:8px;letter-spacing:.14em;text-transform:uppercase;font-style:normal;rotate:-5deg}
.dshd-fp b{font-size:14px;font-weight:800;letter-spacing:-.01em;line-height:1.1} .dshd-fp small{font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 55%,transparent)}
.dshd-free{position:relative;display:flex;flex-direction:column;gap:8px;padding:22px;border-radius:10px;background:var(--ds-brass);color:var(--ds-ink);text-decoration:none;overflow:hidden;transition:transform .4s cubic-bezier(.34,1.56,.64,1)} .dshd-free:hover{transform:translateY(-3px)}
.dshd-fs{position:absolute;right:-8px;top:-16px;font-size:64px;font-weight:900;letter-spacing:-.05em;opacity:.16;rotate:-8deg}
.dshd-free b{position:relative;font-size:18px;font-weight:800;letter-spacing:-.02em;line-height:1.1} .dshd-free p{position:relative;margin:0;font-size:13px;line-height:1.5;color:color-mix(in srgb,var(--ds-ink) 80%,transparent)}
.dshd-fb{position:relative;display:inline-flex;align-items:center;gap:8px;margin-top:auto;padding-top:8px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase} .dshd-fb svg{transition:translate .3s} .dshd-free:hover .dshd-fb svg{translate:4px 0}
/* phone: burger + sheet */
.dshd-burger{position:relative;width:44px;height:44px;border:0;border-radius:50%;background:color-mix(in srgb,var(--ds-cloud) 8%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-cloud) 22%,transparent);cursor:pointer;color:var(--ds-bone);padding:0}
.dshd-burger i{position:absolute;left:14px;width:16px;height:2px;background:currentColor;transition:transform .35s,translate .35s} .dshd-burger i:first-child{top:18px} .dshd-burger i:last-child{top:24px}
.dshd.is-sheet .dshd-burger i:first-child{translate:0 3px;transform:rotate(45deg)} .dshd.is-sheet .dshd-burger i:last-child{translate:0 -3px;transform:rotate(-45deg)}
.dshd-sheet{pointer-events:auto;position:fixed;inset:0;z-index:1;background:var(--ds-night);color:var(--ds-bone);overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;opacity:0;transition:opacity .3s,visibility 0s .3s} .dshd.is-sheet .dshd-sheet{visibility:visible;opacity:1;transition:opacity .3s,visibility 0s}
.dshd-sin{display:flex;flex-direction:column;gap:22px;min-height:100%;padding:calc(var(--barh) + 12px) 20px 40px}
.dshd-slinks{display:flex;flex-direction:column} .dshd-slinks a{padding:11px 0;font-size:34px;font-weight:800;letter-spacing:-.03em;text-decoration:none;color:var(--ds-bone);border-bottom:1px solid color-mix(in srgb,var(--ds-bone) 10%,transparent);opacity:0;translate:0 12px;transition:opacity .5s ease calc(var(--i)*60ms + 80ms),translate .6s cubic-bezier(.2,.8,.2,1) calc(var(--i)*60ms + 80ms)}
.dshd.is-sheet .dshd-slinks a{opacity:1;translate:0 0}
.dshd-sais{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:4px 16px} .dshd-sais a{display:flex;justify-content:space-between;align-items:baseline;gap:8px;padding:9px 0;font-size:15px;font-weight:600;text-decoration:none;color:var(--ds-bone);border-bottom:1px solid color-mix(in srgb,var(--ds-bone) 8%,transparent)} .dshd-sais small{font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 55%,transparent)}
.dshd-sfoot{display:flex;flex-direction:column;align-items:flex-start;gap:16px;margin-top:auto;padding-top:20px}
.dshd-soc{display:flex;flex-wrap:wrap;gap:16px} .dshd-soc a{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;color:color-mix(in srgb,var(--ds-bone) 75%,transparent)} .dshd-soc a:hover{color:var(--ds-brass)}
.dshd-mail{font-size:11px;letter-spacing:.06em;color:color-mix(in srgb,var(--ds-bone) 70%,transparent);text-decoration:none}
.dshd.is-ph .dshd-bar{height:64px;gap:12px;padding:0 16px;--barh:64px} .dshd.is-ph{--barh:64px} .dshd.is-ph .dshd-right{margin-left:auto} .dshd.is-ph .dshd-cart{padding:8px 11px;font-size:10px}
@media (max-width:1100px){.dshd-din{grid-template-columns:minmax(0,1fr) minmax(0,1.4fr)} .dshd-free{grid-column:1/-1;flex-direction:row;align-items:center;gap:18px} .dshd-free b{flex:1} .dshd-free p{flex:1.4} .dshd-free .dshd-fb{margin-top:0;padding-top:0}}
/* over a light first section (before the 40px scroll) the bar prints in ink */
.dshd.is-lt:not(.is-scr):not(.is-open):not(.is-sheet) .dshd-logo,.dshd.is-lt:not(.is-scr):not(.is-open):not(.is-sheet) .dshd-link,.dshd.is-lt:not(.is-scr):not(.is-open):not(.is-sheet) .dshd-cart,.dshd.is-lt:not(.is-scr):not(.is-open):not(.is-sheet) .dshd-burger{color:var(--ds-ink)}
.dshd.is-lt:not(.is-scr):not(.is-open):not(.is-sheet) .dshd-link:hover{color:var(--ds-ink);background:color-mix(in srgb,var(--ds-ink) 7%,transparent)}
.dshd.is-lt:not(.is-scr):not(.is-open):not(.is-sheet) .dshd-cart{box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 24%,transparent)} .dshd.is-lt:not(.is-scr):not(.is-open):not(.is-sheet) .dshd-cart b{color:color-mix(in srgb,var(--ds-brass) 62%,var(--ds-ink))}
.dshd.is-lt:not(.is-scr):not(.is-open):not(.is-sheet) .dshd-burger{background:color-mix(in srgb,var(--ds-ink) 7%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 22%,transparent)}
.dshd.is-lt:not(.is-scr):not(.is-open):not(.is-sheet) .ds-btn.ds-quiet{--face:transparent;--rim:color-mix(in srgb,var(--ds-ink) 28%,transparent);--rim2:color-mix(in srgb,var(--ds-ink) 35%,transparent);--holefill:var(--ds-bone);--fill:var(--ds-ink);--fg:var(--ds-ink);--fg2:var(--ds-cloud);--chip:var(--ds-ink);--chipfg:var(--ds-cloud)}
/* scrolled bar follows the ground: walnut glass over dark, paper glass over light */
.dshd.is-scr .dshd-bar,.dshd.is-open .dshd-bar,.dshd.is-sheet .dshd-bar{background:color-mix(in srgb,color-mix(in srgb,var(--ds-pine) 70%,var(--ds-night)) 84%,transparent)}
.dshd.is-scr.is-lt:not(.is-open):not(.is-sheet) .dshd-bar{background:color-mix(in srgb,var(--ds-bone) 88%,transparent);box-shadow:0 1px 0 color-mix(in srgb,var(--ds-ink) 10%,transparent)}
.dshd.is-scr.is-lt:not(.is-open):not(.is-sheet) .dshd-logo,.dshd.is-scr.is-lt:not(.is-open):not(.is-sheet) .dshd-link,.dshd.is-scr.is-lt:not(.is-open):not(.is-sheet) .dshd-cart,.dshd.is-scr.is-lt:not(.is-open):not(.is-sheet) .dshd-burger{color:var(--ds-ink)}
.dshd.is-scr.is-lt:not(.is-open):not(.is-sheet) .dshd-link:hover{color:var(--ds-ink);background:color-mix(in srgb,var(--ds-ink) 7%,transparent)}
.dshd.is-scr.is-lt:not(.is-open):not(.is-sheet) .dshd-cart{box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 24%,transparent)} .dshd.is-scr.is-lt:not(.is-open):not(.is-sheet) .dshd-cart b{color:color-mix(in srgb,var(--ds-brass) 62%,var(--ds-ink))}
.dshd.is-scr.is-lt:not(.is-open):not(.is-sheet) .dshd-burger{background:color-mix(in srgb,var(--ds-ink) 7%,transparent);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 22%,transparent)}
.dshd.is-scr.is-lt:not(.is-open):not(.is-sheet) .ds-btn.ds-quiet{--face:transparent;--rim:color-mix(in srgb,var(--ds-ink) 28%,transparent);--rim2:color-mix(in srgb,var(--ds-ink) 35%,transparent);--holefill:var(--ds-bone);--fill:var(--ds-ink);--fg:var(--ds-ink);--fg2:var(--ds-cloud);--chip:var(--ds-ink);--chipfg:var(--ds-cloud)}
/* cart chip + drawer */
.dshd-cart{border:0;cursor:pointer;font:inherit;color:inherit;background:transparent;transition:transform .35s cubic-bezier(.34,1.56,.64,1),box-shadow .3s} .dshd-cart:hover{transform:translateY(-1px)} .dshd-cart.has b{color:var(--ds-brass)} .dshd-cn{display:inline-block;animation:dshd-pop .5s cubic-bezier(.34,1.56,.64,1)} @keyframes dshd-pop{40%{transform:scale(1.4)}}
.dshd-cwrap{position:fixed;inset:0;z-index:70;pointer-events:none;visibility:hidden;transition:visibility 0s .45s} .dshd-cwrap.is-on{pointer-events:auto;visibility:visible;transition-delay:0s}
.dshd-cback{position:absolute;inset:0;background:rgba(0,0,0,.45);opacity:0;transition:opacity .4s} .dshd-cwrap.is-on .dshd-cback{opacity:1}
.dshd-cdr{position:absolute;top:0;right:0;bottom:0;width:min(100%,420px);display:flex;flex-direction:column;background:var(--ds-night);color:var(--ds-bone);box-shadow:-30px 0 80px rgba(0,0,0,.5);transform:translateX(102%);transition:transform .5s cubic-bezier(.2,.8,.2,1)} .dshd-cwrap.is-on .dshd-cdr{transform:translateX(0)}
.dshd-chd{display:flex;align-items:center;justify-content:space-between;padding:22px 22px 16px;border-bottom:1px dashed color-mix(in srgb,var(--ds-bone) 25%,transparent)} .dshd-ctt{display:inline-flex;align-items:baseline;gap:10px;font-size:22px;font-weight:800;letter-spacing:-.02em} .dshd-ctt small{font-size:11px;letter-spacing:.12em;color:var(--ds-brass)}
.dshd-cx{position:relative;width:40px;height:40px;border:0;border-radius:50%;background:color-mix(in srgb,var(--ds-cloud) 8%,transparent);color:var(--ds-bone);cursor:pointer} .dshd-cx i{position:absolute;left:12px;top:19px;width:16px;height:2px;background:currentColor;rotate:45deg} .dshd-cx i:last-child{rotate:-45deg}
.dshd-cempty{margin:0;padding:34px 22px;font-size:15px;color:color-mix(in srgb,var(--ds-bone) 70%,transparent)}
.dshd-cl{list-style:none;margin:0;padding:8px 22px;flex:1;overflow:auto;display:flex;flex-direction:column}
.dshd-ci{display:grid;grid-template-columns:48px minmax(0,1fr) auto;gap:6px 12px;align-items:center;padding:12px 0;border-bottom:1px dashed color-mix(in srgb,var(--ds-bone) 20%,transparent)}
.dshd-cim{display:block;width:48px;height:60px;border-radius:3px;overflow:hidden;background:var(--ds-pine)} .dshd-cim img{width:100%;height:100%;object-fit:cover;display:block;opacity:.8}
.dshd-cit{display:flex;flex-direction:column;gap:3px;min-width:0} .dshd-cit a{text-decoration:none;color:var(--ds-bone)} .dshd-cit b{display:block;font-size:14px;font-weight:700;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis} .dshd-cit small{font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 60%,transparent)}
.dshd-cip{font-size:13px;font-weight:500} .dshd-crm{grid-column:2/-1;justify-self:start;border:0;background:none;padding:0;font:inherit;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 55%,transparent);cursor:pointer} .dshd-crm:hover{color:var(--ds-brass)}
.dshd-cft{display:flex;flex-direction:column;gap:12px;padding:16px 22px 24px;border-top:1px dashed color-mix(in srgb,var(--ds-bone) 25%,transparent)}
.dshd-csub{display:flex;align-items:baseline;gap:10px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 70%,transparent)} .dshd-csub i{flex:1;border-bottom:1px dotted color-mix(in srgb,var(--ds-bone) 30%,transparent);translate:0 -4px} .dshd-csub b{font-size:24px;font-weight:800;letter-spacing:-.02em;color:var(--ds-bone)}
.dshd-cbtn{align-self:stretch;justify-content:center} .dshd-ccont{border:0;background:none;padding:6px 0;font:inherit;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 70%,transparent);cursor:pointer;text-align:left} .dshd-ccont:hover{color:var(--ds-brass)}
.dshd-cnote{font-size:10px;letter-spacing:.06em;color:color-mix(in srgb,var(--ds-bone) 50%,transparent)}
@media (prefers-reduced-motion:reduce){.dshd-cdr,.dshd-cback{transition:none} .dshd-cn{animation:none}}
@media (prefers-reduced-motion:reduce){.dshd-drawer,.dshd-sheet,.dshd-slinks a,.dshd-bar{transition:none}}`),
      _e(Jt, {
        ...un,
        links: {
          type: I.String,
          title: `Links`,
          description: `Label:/path, … (the first one opens the shop drawer)`,
          displayTextArea: !0,
          defaultValue: `Products:/products, Bundles:/bundles, Courses:/courses, Notes:/notes, About:/about`,
        },
        cta: { type: I.String, title: `Button`, defaultValue: `Free guide` },
        ctaLink: { type: I.Link, title: `Button link`, defaultValue: `/free` },
        showCart: { type: I.Boolean, title: `Cart chip`, defaultValue: !0 },
        cartTitle: { type: I.String, title: `Cart title`, defaultValue: `Your cart` },
        cartEmpty: {
          type: I.String,
          title: `Cart empty text`,
          defaultValue: `Nothing on the counter yet.`,
        },
        cartCheckout: { type: I.String, title: `Cart checkout button`, defaultValue: `Checkout` },
        checkoutLink: { type: I.Link, title: `Cart checkout link`, defaultValue: `/checkout` },
        cartContinue: {
          type: I.String,
          title: `Cart continue label`,
          defaultValue: `Keep browsing`,
        },
        cartRemove: { type: I.String, title: `Cart remove label`, defaultValue: `Remove` },
        subtotalLabel: { type: I.String, title: `Subtotal label`, defaultValue: `Subtotal` },
        cartNote: {
          type: I.String,
          title: `Cart note`,
          defaultValue: `Instant download after checkout. Files stay in your account.`,
        },
        cartLabel: {
          type: I.String,
          title: `Cart label`,
          defaultValue: `Cart`,
          hidden: (e) => !e.showCart,
        },
        drawerLabel: { type: I.String, title: `Drawer name`, defaultValue: `Shop the shelf` },
        aislesLabel: { type: I.String, title: `Aisles title`, defaultValue: `Aisles` },
        featuredLabel: {
          type: I.String,
          title: `Featured title`,
          defaultValue: `Featured this week`,
        },
        allLabel: { type: I.String, title: `All link`, defaultValue: `All products` },
        allLink: { type: I.Link, title: `All link path`, defaultValue: `/products` },
        freeTitle: {
          type: I.String,
          title: `Free card title`,
          defaultValue: `The pricing guide, free`,
        },
        freeCopy: {
          type: I.String,
          title: `Free card copy`,
          displayTextArea: !0,
          defaultValue: `Forty pages on pricing digital products. One email, the file.`,
        },
        freeButton: { type: I.String, title: `Free card button`, defaultValue: `Get the guide` },
        freeLink: { type: I.Link, title: `Free card link`, defaultValue: `/free` },
        menuLabel: { type: I.String, title: `Menu label`, defaultValue: `Menu` },
        closeLabel: { type: I.String, title: `Close label`, defaultValue: `Close` },
        ...sn,
        ...cn,
      }));
  });
function On() {
  T(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = Fn), document.head.appendChild(e));
  }, []);
}
function kn() {
  let e = O(),
    [t, n] = u(!1);
  return (
    T(() => {
      !e && L.current() !== L.canvas && c !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function An(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: zn(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? Ln(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: zn(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? Ln(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: zn(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? Ln(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function jn(e) {
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
function Mn(e, t) {
  let [n, r] = u(t),
    i = f(``);
  return (
    qn(() => {
      let t = 0,
        n = 0,
        a = 0;
      try {
        let e = c;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[Kn] = 1));
      } catch {}
      let o = () => {
          let t = jn(e);
          if (!t) return !1;
          let n = JSON.stringify(t);
          return (n !== i.current && ((i.current = n), r(t)), !0);
        },
        s = new MutationObserver(() => {
          o() && (a++, a > 2 && s.disconnect());
        });
      (s.observe(document.body, { childList: !0, subtree: !0 }), o() && a++);
      let l = () => {
        t++ < 30 && (o(), (n = c.setTimeout(l, 150)));
      };
      return (
        (n = c.setTimeout(l, 150)),
        () => {
          (s.disconnect(), c.clearTimeout(n));
        }
      );
    }, [e]),
    n
  );
}
function Nn() {
  let e = Mn(`site`, Gn.site || [])[0] || (Gn.site || [])[0] || {},
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
function Pn(e) {
  let {
      enabled: t = !0,
      statusLabel: n = `Stocking the shelf`,
      doneLabel: r = `Open`,
      duration: i = 2.6,
      once: a = !0,
      respectRm: o = !0,
    } = e,
    s = Bn(e),
    { D: l, M: d } = An(e);
  On();
  let m = kn(),
    h = Nn(),
    g = String(h.name || `Shelfline`),
    ee = Mn(`products`, Gn.products).slice(0, 9),
    v = Math.max(4, Math.min(9, ee.length || 9)),
    te = f(null),
    [b, x] = u(`shell`),
    [S, C] = u(0);
  if (
    (T(() => {
      if (!m) return;
      let e = document.documentElement,
        n = te.current,
        r = () => {
          (e.classList.remove(`dsld-go`, `ds-hold-ld`, `dsld-rm`), x(`gone`));
        };
      if (!t || !e.classList.contains(`dsld-go`) || !n) {
        r();
        return;
      }
      n.style.animation = `none`;
      let o = [],
        s = () => {
          if (a)
            try {
              sessionStorage.setItem(`ds-loaded`, `1`);
            } catch {}
        };
      if (e.classList.contains(`dsld-rm`))
        return (
          x(`ready`),
          C(v),
          o.push(
            c.setTimeout(() => {
              (e.classList.remove(`ds-hold-ld`), s(), x(`exit`));
            }, 500)
          ),
          o.push(c.setTimeout(r, 950)),
          () => o.forEach((e) => c.clearTimeout(e))
        );
      let l = Math.max(1.8, i) * 1e3,
        u = l * 0.7,
        d = u / v,
        f = l * 0.3;
      (x(`load`), C(1));
      for (let e = 2; e <= v; e++) o.push(c.setTimeout(() => C(e), d * (e - 1)));
      return (
        o.push(c.setTimeout(() => x(`ready`), u)),
        o.push(
          c.setTimeout(() => {
            (x(`exit`), e.classList.remove(`ds-hold-ld`), s());
          }, u + f)
        ),
        o.push(c.setTimeout(r, u + f + 950 + 120)),
        () => o.forEach((e) => c.clearTimeout(e))
      );
    }, [m]),
    L.current() === L.canvas || !t || b === `gone`)
  )
    return null;
  let w = `(function(){try{var h=document.documentElement;${a ? `if(sessionStorage.getItem('ds-loaded'))return;` : ``}h.classList.add('dsld-go','ds-hold-ld');${o ? `if(matchMedia('(prefers-reduced-motion: reduce)').matches)h.classList.add('dsld-rm');` : ``}}catch(e){}})()`,
    E = (Math.max(1.8, i) * 0.7) / v,
    D = {
      book: [22, 32],
      box: [26, 30],
      tin: [24, 24],
      folder: [30, 22],
      notebook: [22, 31],
      cards: [26, 26],
      kit: [32, 22],
    };
  return _(p, {
    children: [
      y(`style`, { dangerouslySetInnerHTML: { __html: Jn } }),
      y(`script`, { dangerouslySetInnerHTML: { __html: w } }),
      _(`div`, {
        ref: te,
        className: `dsld is-${b}`,
        "aria-hidden": !0,
        style: { ...Vn(s), "--per": `${E.toFixed(3)}s`, "--n": v, ...(e.style || {}) },
        children: [
          y(`div`, {
            className: `dsld-half dsld-top`,
            children: y(`div`, { className: `dsld-glow` }),
          }),
          y(`div`, { className: `dsld-half dsld-bot` }),
          _(`div`, {
            className: `dsld-mid`,
            children: [
              _(`div`, {
                className: `dsld-tag`,
                style: l,
                children: [
                  y(`i`, { className: `dsld-string` }),
                  y(`i`, { className: `dsld-hole` }),
                  y(`span`, { className: `dsld-brand`, children: g }),
                  _(`span`, {
                    className: `dsld-line`,
                    style: d,
                    children: [
                      y(`span`, { children: b === `ready` || b === `exit` ? r : n }),
                      _(`b`, {
                        children: [
                          String(Math.max(1, Math.min(v, S))).padStart(2, `0`),
                          `/`,
                          String(v).padStart(2, `0`),
                        ],
                      }),
                    ],
                  }),
                  y(`span`, { className: `dsld-open`, style: l, children: r }),
                ],
              }),
              y(`div`, {
                className: `dsld-objs`,
                children: Array.from({ length: v }, (e, t) => {
                  let n = ee[t] || {},
                    [r, i] = D[String(n.f13 || `book`).toLowerCase()] || D.book;
                  return y(
                    `i`,
                    { style: { "--i": t, "--col": n.f12 || `#5B4BFF`, width: r, height: i } },
                    t
                  );
                }),
              }),
              y(`div`, { className: `dsld-plank`, children: y(`i`, {}) }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Fn,
  In,
  Ln,
  Rn,
  zn,
  H,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn = e(() => {
    (r(),
      S(),
      w(),
      M(),
      (Fn = `../../styles/css2-a59a76.css`),
      (In = (e) => {
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
      (Ln = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (Rn = (e) => {
        let t = In(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (zn = (e, t, n, r) => {
        let i = e ? Rn(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
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
      (Bn = (e) => ({
        bone: e.bone || H.bone,
        ink: e.ink || H.ink,
        brass: e.brass || H.brass,
        pine: e.pine || H.pine,
        fog: e.fog || H.fog,
        stone: e.stone || H.stone,
        cloud: e.cloud || H.cloud,
        night: e.night || H.night,
      })),
      (Vn = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (Hn = {
        bone: { type: I.Color, title: `Paper`, defaultValue: H.bone },
        ink: { type: I.Color, title: `Ink`, defaultValue: H.ink },
        brass: { type: I.Color, title: `Accent`, defaultValue: H.brass },
        pine: { type: I.Color, title: `Deep`, defaultValue: H.pine },
        fog: { type: I.Color, title: `Line`, defaultValue: H.fog },
        stone: { type: I.Color, title: `Muted`, defaultValue: H.stone },
        cloud: { type: I.Color, title: `White`, defaultValue: H.cloud },
        night: { type: I.Color, title: `Dark`, defaultValue: H.night },
      }),
      (Un = {
        customFonts: {
          type: I.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: I.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: I.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: I.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (Wn = {
        bpHint: {
          type: I.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      I.Boolean,
      I.Number,
      (Gn = {
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
      }),
      (Kn = `DsLoader@cms1`),
      (qn = c === void 0 ? T : n),
      (Jn = `
.dsld{display:none}html.dsld-go{overflow:hidden!important}html.dsld-go .dsld{display:block;animation:dsld-fb .6s ease 8s both}@keyframes dsld-fb{to{opacity:0;visibility:hidden}}
.dsld{position:fixed;inset:0;z-index:9999;pointer-events:auto;overflow:hidden;color:var(--ds-bone)}
.dsld *{box-sizing:border-box}
.dsld-half{position:absolute;left:0;right:0;height:50%;background:var(--ds-night);will-change:transform;overflow:hidden} .dsld-top{top:0} .dsld-bot{bottom:0;background:linear-gradient(180deg,color-mix(in srgb,var(--ds-pine) 60%,var(--ds-night)),var(--ds-night) 40%)}
.dsld-glow{position:absolute;left:50%;top:100%;width:120vmax;height:120vmax;translate:-50% -50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--ds-brass) 18%,transparent),transparent 62%)}
.dsld-mid{position:absolute;left:50%;top:50%;width:min(86vw,720px);translate:-50% -50%;height:0}
/* the plank on the centre line */
.dsld-plank{position:absolute;left:0;right:0;top:0;height:12px;background:linear-gradient(180deg,color-mix(in srgb,var(--ds-pine) 60%,var(--ds-cloud) 12%),color-mix(in srgb,var(--ds-pine) 85%,var(--ds-night)));box-shadow:0 18px 40px -10px rgba(0,0,0,.7);transform:scaleX(0);transform-origin:0 50%;animation:dsld-pl .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes dsld-pl{to{transform:scaleX(1)}}
.dsld-plank i{position:absolute;left:0;right:0;bottom:-6px;height:2px;background:var(--ds-brass);transform:scaleX(0);transform-origin:0 50%}
.dsld.is-load .dsld-plank i{animation:dsld-bar calc(var(--per) * var(--n)) linear both} @keyframes dsld-bar{to{transform:scaleX(1)}} .dsld.is-ready .dsld-plank i,.dsld.is-exit .dsld-plank i{transform:scaleX(1)}
/* products drop onto the plank one by one */
.dsld-objs{position:absolute;left:4%;right:4%;bottom:0;display:flex;align-items:flex-end;justify-content:space-between}
.dsld-objs i{display:block;background:var(--col);border-radius:2px 3px 3px 2px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.14),inset -4px 0 0 rgba(0,0,0,.28),0 10px 20px -8px rgba(0,0,0,.6);opacity:0;translate:0 -46px}
.dsld.is-load .dsld-objs i{animation:dsld-drop .55s cubic-bezier(.34,1.5,.64,1) both;animation-delay:calc(var(--per) * var(--i))} @keyframes dsld-drop{from{opacity:0;translate:0 -46px}60%{opacity:1}to{opacity:1;translate:0 0}}
.dsld.is-ready .dsld-objs i,.dsld.is-exit .dsld-objs i{opacity:1;translate:0 0}
/* the tag hanging above the plank */
.dsld-tag{position:absolute;left:50%;bottom:52px;width:min(320px,74vw);translate:-50% 0;padding:18px 20px 16px 30px;background:var(--ds-bone);color:var(--ds-ink);clip-path:polygon(16px 0,100% 0,100% 100%,16px 100%,0 50%);transform-origin:8px 50%;animation:dsld-sw 1.6s cubic-bezier(.34,1.56,.64,1) both;display:flex;flex-direction:column;gap:6px}
@keyframes dsld-sw{0%{transform:rotate(-12deg) translateY(-20px);opacity:0}30%{opacity:1}55%{transform:rotate(4deg) translateY(0)}100%{transform:rotate(0)}}
.dsld-string{position:absolute;left:11px;top:-60px;width:1.5px;height:62px;background:color-mix(in srgb,var(--ds-bone) 55%,transparent);transform-origin:50% 0;rotate:14deg} .dsld-hole{position:absolute;left:9px;top:50%;width:7px;height:7px;margin-top:-3.5px;border-radius:50%;background:var(--ds-night);box-shadow:0 0 0 1.5px color-mix(in srgb,var(--ds-ink) 35%,transparent)}
.dsld-brand{font-size:22px;font-weight:800;letter-spacing:-.02em;line-height:1}
.dsld-line{display:flex;justify-content:space-between;gap:10px;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-ink) 70%,transparent)} .dsld-line b{font-weight:500;color:var(--ds-ink);font-variant-numeric:tabular-nums}
.dsld-open{position:absolute;right:14px;top:-16px;padding:5px 10px;border:2px solid var(--ds-brass);border-radius:4px;background:var(--ds-bone);color:color-mix(in srgb,var(--ds-brass) 66%,var(--ds-ink));font-size:12px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;rotate:-8deg;scale:0;opacity:0}
.dsld.is-ready .dsld-open,.dsld.is-exit .dsld-open{scale:1;opacity:1;transition:scale .5s cubic-bezier(.34,1.8,.6,1),opacity .1s}
.dsld.is-ready .dsld-tag{animation:dsld-pop .5s cubic-bezier(.34,1.8,.6,1) both} @keyframes dsld-pop{0%{transform:rotate(0)}40%{transform:rotate(-5deg) scale(1.03)}100%{transform:rotate(0) scale(1)}}
/* exit: the cover parts along the plank line */
.dsld.is-exit{pointer-events:none} .dsld.is-exit .dsld-top{transform:translateY(-102%);transition:transform .9s cubic-bezier(.7,0,.2,1)} .dsld.is-exit .dsld-bot{transform:translateY(102%);transition:transform .9s cubic-bezier(.7,0,.2,1)}
.dsld.is-exit .dsld-mid{opacity:0;transition:opacity .35s ease .1s}
html.dsld-rm .dsld-half,html.dsld-rm .dsld-mid{transition:none!important} html.dsld-rm .dsld.is-exit{opacity:0;transition:opacity .35s ease} html.dsld-rm .dsld-tag,html.dsld-rm .dsld-plank,html.dsld-rm .dsld-objs i{animation:none;opacity:1;transform:none;translate:0 0}
@media (max-width:809px){.dsld-mid{width:88vw} .dsld-objs i{transform:scale(.8);transform-origin:50% 100%} .dsld-tag{width:min(260px,80vw);padding:14px 16px 12px 26px;bottom:44px} .dsld-brand{font-size:18px}}
`),
      _e(Pn, {
        enabled: { type: I.Boolean, title: `Enabled`, defaultValue: !0 },
        statusLabel: { type: I.String, title: `Status label`, defaultValue: `Stocking the shelf` },
        doneLabel: { type: I.String, title: `Done label`, defaultValue: `Open` },
        duration: {
          type: I.Number,
          title: `Duration`,
          min: 1.8,
          max: 5,
          step: 0.1,
          unit: `s`,
          defaultValue: 2.6,
        },
        once: { type: I.Boolean, title: `Once per session`, defaultValue: !0 },
        respectRm: {
          type: I.Boolean,
          title: `Respect reduced motion`,
          description: `On = a short fade instead of the stocking`,
          defaultValue: !0,
        },
        ...Wn,
        ...Hn,
        ...Un,
      }));
  });
function Xn() {
  T(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = rr), document.head.appendChild(e));
  }, []);
}
function Zn() {
  let e = O(),
    [t, n] = u(!1);
  return (
    T(() => {
      !e && L.current() !== L.canvas && c !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function Qn(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: sr(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? ar(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: sr(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? ar(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: sr(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? ar(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function $n(e) {
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
function er(e, t) {
  let [n, r] = u(t),
    i = f(``);
  return (
    hr(() => {
      let t = 0,
        n = 0,
        a = 0;
      try {
        let e = c;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[mr] = 1));
      } catch {}
      let o = () => {
          let t = $n(e);
          if (!t) return !1;
          let n = JSON.stringify(t);
          return (n !== i.current && ((i.current = n), r(t)), !0);
        },
        s = new MutationObserver(() => {
          o() && (a++, a > 2 && s.disconnect());
        });
      (s.observe(document.body, { childList: !0, subtree: !0 }), o() && a++);
      let l = () => {
        t++ < 30 && (o(), (n = c.setTimeout(l, 150)));
      };
      return (
        (n = c.setTimeout(l, 150)),
        () => {
          (s.disconnect(), c.clearTimeout(n));
        }
      );
    }, [e]),
    n
  );
}
function tr() {
  let e = er(`site`, pr.site || [])[0] || (pr.site || [])[0] || {},
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
function nr(e) {
  let {
      enabled: t = !0,
      homeName: n = `Home`,
      nextLabel: r = `Next aisle`,
      duration: i = 0.8,
      respectRm: a = !0,
    } = e,
    o = cr(e),
    { D: s, M: l } = Qn(e);
  Xn();
  let d = Zn(),
    m = tr(),
    h = String(m.name || `Shelfline`),
    g = f(null),
    [ee, v] = u(``),
    [te, b] = u(1),
    [x, S] = u(`arrive`),
    [C, w] = u(0),
    E = f({ mode: `arrive`, t: 0, href: ``, target: ``, busy: !1 });
  if (
    (T(() => {
      if (!d || !t) return;
      let e = document.documentElement,
        r = [],
        o = Math.max(0.3, i) * 1e3,
        s = (e) => {
          ((E.current.mode = e),
            (E.current.t = performance.now()),
            S(e),
            e === `arrive` && w((e) => e + 1));
        },
        l = () => {
          (s(`arrive`),
            (E.current.busy = !1),
            r.push(
              c.setTimeout(
                () => {
                  E.current.mode === `arrive` && s(`idle`);
                },
                o * 0.9 + 350
              )
            ),
            r.push(c.setTimeout(() => e.classList.remove(`ds-hold-pt`), 60 + o * 0.42)));
        },
        u = !1;
      try {
        let e = sessionStorage.getItem(`ds-pt-name`);
        if (e) {
          let [t, n] = e.split(`|`);
          (v(t), b(parseInt(n, 10) || 1), (u = !0));
        }
        sessionStorage.removeItem(`ds-pt-name`);
      } catch {}
      if (!u) {
        let e = location.pathname.replace(/\/+$/, ``),
          t = decodeURIComponent(e.split(`/`).pop() || ``);
        (v(e ? t.replace(/[-_]+/g, ` `) : n),
          b((e.split(`/`).filter(Boolean).length || 0) + 1 + (e.length % 7)));
      }
      if (
        ((E.current.href = location.href),
        a && c.matchMedia(`(prefers-reduced-motion: reduce)`).matches)
      )
        return (e.classList.remove(`ds-hold-pt`), s(`idle`), () => {});
      ((E.current.t = performance.now()),
        r.push(
          c.setTimeout(
            () => {
              E.current.mode === `arrive` && s(`idle`);
            },
            o * 0.9 + 400
          )
        ),
        r.push(
          c.setTimeout(
            () => e.classList.remove(`ds-hold-pt`),
            Math.max(0, 60 + o * 0.42 - performance.now())
          )
        ));
      let f = (e, t) => {
          let r = e.getAttribute(`data-pt-name`);
          if (r) return r;
          let i = t.pathname.replace(/\/+$/, ``);
          if (!i) return n;
          let a = i.split(`/`).filter(Boolean),
            o = decodeURIComponent(a[a.length - 1] || ``).replace(/[-_]+/g, ` `);
          if (a.length === 1) return o;
          let s = (e.getAttribute(`aria-label`) || e.textContent || ``).replace(/\s+/g, ` `).trim(),
            c = s.length >> 1;
          return (
            s.length % 2 == 0 && c > 1 && s.slice(0, c) === s.slice(c) && (s = s.slice(0, c)),
            (s = s.split(`,`)[0].trim()),
            s && s.length <= 28 && !/[→↗]/.test(s) ? s : o
          );
        },
        p = (e) => {
          if (
            E.current.busy ||
            e.defaultPrevented ||
            e.button !== 0 ||
            e.metaKey ||
            e.ctrlKey ||
            e.shiftKey ||
            e.altKey
          )
            return;
          let t = e.target?.closest?.(`a[href]`);
          if (
            !t ||
            (t.target && t.target !== `_self`) ||
            t.hasAttribute(`download`) ||
            t.closest(`[data-pt-skip]`)
          )
            return;
          let n = t.getAttribute(`href`) || ``;
          if (/^(mailto|tel|javascript):/i.test(n) || n.startsWith(`#`)) return;
          let i;
          try {
            i = new URL(t.href, location.href);
          } catch {
            return;
          }
          if (
            i.origin !== location.origin ||
            (i.pathname === location.pathname && i.search === location.search)
          )
            return;
          (e.preventDefault(),
            e.stopPropagation(),
            (E.current.busy = !0),
            (E.current.target = i.href),
            (E.current.href = location.href));
          let a = f(t, i),
            u = (i.pathname.split(`/`).filter(Boolean).length || 0) + 1 + (i.pathname.length % 7);
          (v(a), b(u), s(`leave`));
          try {
            sessionStorage.setItem(`ds-pt-name`, `${a}|${u}`);
          } catch {}
          r.push(
            c.setTimeout(() => {
              if (E.current.mode === `leave`)
                if (location.pathname === i.pathname && location.search === i.search) {
                  try {
                    sessionStorage.removeItem(`ds-pt-name`);
                  } catch {}
                  l();
                } else location.href = i.href;
            }, o + 380)
          );
        },
        m = c.setInterval(() => {
          let e = E.current,
            t = performance.now();
          if (location.href !== e.href && ((e.href = location.href), e.mode === `leave`)) {
            let n = Math.max(0, o * 0.75 - (t - e.t));
            r.push(
              c.setTimeout(() => {
                if (E.current.mode === `leave`) {
                  try {
                    sessionStorage.removeItem(`ds-pt-name`);
                  } catch {}
                  l();
                }
              }, n)
            );
          }
          (e.mode === `leave` && t - e.t > 2500 && l(),
            e.mode === `arrive` && t - e.t > 2500 && s(`idle`));
        }, 100),
        h = (e) => {
          e.persisted && l();
        };
      return (
        document.addEventListener(`click`, p, !0),
        c.addEventListener(`pageshow`, h),
        c.addEventListener(`popstate`, () => {
          E.current.href = ``;
        }),
        () => {
          (c.clearInterval(m),
            r.forEach((e) => c.clearTimeout(e)),
            document.removeEventListener(`click`, p, !0),
            c.removeEventListener(`pageshow`, h));
        }
      );
    }, [d, t, a, i, n]),
    L.current() === L.canvas || !t)
  )
    return null;
  let D = `(function(){try{${a ? `if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;` : ``}document.documentElement.classList.add('ds-hold-pt')}catch(e){}})()`;
  return _(p, {
    children: [
      y(`style`, {
        dangerouslySetInnerHTML: {
          __html: gr + (a ? `@media (prefers-reduced-motion:reduce){.dspt{display:none}}` : ``),
        },
      }),
      y(`script`, { dangerouslySetInnerHTML: { __html: D } }),
      _(
        `div`,
        {
          ref: g,
          className: `dspt ${x === `leave` ? `dspt-leave dspt-on` : x === `idle` ? `dspt-idle` : `dspt-enter`}`,
          "aria-hidden": !0,
          style: { ...lr(o), "--d": `${i}s`, pointerEvents: x === `leave` ? `auto` : `none` },
          children: [
            y(`div`, { className: `dspt-cover`, children: y(`div`, { className: `dspt-glow` }) }),
            _(`div`, {
              className: `dspt-tag`,
              style: s,
              children: [
                y(`i`, { className: `dspt-string` }),
                y(`i`, { className: `dspt-hole` }),
                _(`p`, {
                  className: `dspt-at`,
                  style: l,
                  children: [
                    y(`span`, { children: h }),
                    _(`span`, { children: [r, ` · `, String(te).padStart(2, `0`)] }),
                  ],
                }),
                y(`p`, {
                  className: `dspt-name`,
                  children: y(`span`, { children: d ? ee || n : `` }),
                }),
                y(`div`, { className: `dspt-bar`, children: y(`i`, {}) }),
              ],
            }),
          ],
        },
        x === `arrive` ? `a` + C : x
      ),
    ],
  });
}
var rr,
  ir,
  ar,
  or,
  sr,
  U,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r = e(() => {
    (r(),
      S(),
      w(),
      M(),
      (rr = `../../styles/css2-a59a76.css`),
      (ir = (e) => {
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
      (ar = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (or = (e) => {
        let t = ir(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (sr = (e, t, n, r) => {
        let i = e ? or(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
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
      (cr = (e) => ({
        bone: e.bone || U.bone,
        ink: e.ink || U.ink,
        brass: e.brass || U.brass,
        pine: e.pine || U.pine,
        fog: e.fog || U.fog,
        stone: e.stone || U.stone,
        cloud: e.cloud || U.cloud,
        night: e.night || U.night,
      })),
      (lr = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (ur = {
        bone: { type: I.Color, title: `Paper`, defaultValue: U.bone },
        ink: { type: I.Color, title: `Ink`, defaultValue: U.ink },
        brass: { type: I.Color, title: `Accent`, defaultValue: U.brass },
        pine: { type: I.Color, title: `Deep`, defaultValue: U.pine },
        fog: { type: I.Color, title: `Line`, defaultValue: U.fog },
        stone: { type: I.Color, title: `Muted`, defaultValue: U.stone },
        cloud: { type: I.Color, title: `White`, defaultValue: U.cloud },
        night: { type: I.Color, title: `Dark`, defaultValue: U.night },
      }),
      (dr = {
        customFonts: {
          type: I.Boolean,
          title: `Custom Fonts`,
          description: `Off = the site fonts (set once on the Header in the Site Layout). On = different fonts for this section only`,
          defaultValue: !1,
        },
        displayFont: {
          type: I.Font,
          title: `Display Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        bodyFont: {
          type: I.Font,
          title: `Body Font`,
          defaultFontType: `sans-serif`,
          hidden: (e) => !e.customFonts,
        },
        monoFont: {
          type: I.Font,
          title: `Mono Font`,
          defaultFontType: `monospace`,
          hidden: (e) => !e.customFonts,
        },
      }),
      (fr = {
        bpHint: {
          type: I.Enum,
          title: `Breakpoint Hint`,
          description: `Set per breakpoint copy so the server render starts at the right width`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
          hidden: () => !0,
        },
      }),
      I.Boolean,
      I.Number,
      (pr = {
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
      (mr = `DsPageTrans@cms1`),
      (hr = c === void 0 ? T : n),
      (gr = `
.dspt{position:fixed;inset:0;z-index:9998;pointer-events:none;overflow:hidden;color:var(--ds-ink)}
.dspt-cover{position:absolute;inset:0;background:var(--ds-night);will-change:transform;overflow:hidden}
.dspt-glow{position:absolute;left:50%;top:50%;width:120vmax;height:120vmax;translate:-50% -50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--ds-pine) 70%,var(--ds-night)),transparent 62%)}
.dspt-tag{position:absolute;left:50%;top:50%;width:min(88vw,760px);translate:-50% -50%;padding:clamp(26px,4vw,48px) clamp(26px,4vw,52px) clamp(26px,4vw,44px) clamp(44px,6vw,80px);background:var(--ds-brass);color:var(--ds-ink);clip-path:polygon(clamp(26px,3.6vw,48px) 0,100% 0,100% 100%,clamp(26px,3.6vw,48px) 100%,0 50%);transform-origin:14px 50%;will-change:transform,opacity;box-shadow:0 60px 120px -40px rgba(0,0,0,.8)}
.dspt-string{position:absolute;left:18px;top:-70vh;width:2px;height:70vh;background:color-mix(in srgb,var(--ds-bone) 45%,transparent);transform-origin:50% 100%;rotate:6deg}
.dspt-hole{position:absolute;left:13px;top:50%;width:12px;height:12px;margin-top:-6px;border-radius:50%;background:var(--ds-night);box-shadow:0 0 0 2px color-mix(in srgb,var(--ds-ink) 35%,transparent)}
.dspt-at{margin:0 0 14px;display:flex;justify-content:space-between;gap:14px;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-ink) 75%,transparent)}
.dspt-name{margin:0;font-size:clamp(40px,7vw,104px);line-height:.92;font-weight:900;letter-spacing:-.045em;text-transform:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap} .dspt-name span{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis}
.dspt-bar{margin-top:20px;height:3px;border-radius:3px;background:color-mix(in srgb,var(--ds-ink) 20%,transparent);overflow:hidden} .dspt-bar i{display:block;height:100%;background:var(--ds-ink);transform:scaleX(0);transform-origin:0 50%}
/* leaving: the cover rises from the bottom, the tag swings in from its hole */
.dspt-leave .dspt-cover{animation:dspt-up calc(var(--d) * .6) cubic-bezier(.7,0,.2,1) both} @keyframes dspt-up{from{transform:translateY(102%)}to{transform:translateY(0)}}
.dspt-leave .dspt-tag{animation:dspt-in calc(var(--d) * .9) cubic-bezier(.34,1.4,.64,1) calc(var(--d) * .25) both} @keyframes dspt-in{from{transform:rotate(-26deg) translateY(-80vh);opacity:0}30%{opacity:1}70%{transform:rotate(4deg) translateY(0)}to{transform:rotate(0) translateY(0);opacity:1}}
.dspt-leave .dspt-bar i{animation:dspt-pb calc(var(--d) * .6) linear calc(var(--d) * .55) both} @keyframes dspt-pb{to{transform:scaleX(1)}}
/* arrival: covered in the server HTML, the tag swings away and the cover lifts */
.dspt-enter .dspt-tag{transform:rotate(0);animation:dspt-out calc(var(--d) * .7) cubic-bezier(.6,0,.4,1) .06s both} @keyframes dspt-out{from{transform:rotate(0) translateY(0);opacity:1}to{transform:rotate(18deg) translateY(30vh);opacity:0}}
.dspt-enter .dspt-cover{animation:dspt-lift calc(var(--d) * .9) cubic-bezier(.7,0,.2,1) calc(var(--d) * .15) both} @keyframes dspt-lift{from{transform:translateY(0)}to{transform:translateY(-102%)}}
.dspt-enter .dspt-bar i{transform:scaleX(1)}
.dspt-idle{display:none!important}
@media (max-width:809px){.dspt-name{font-size:clamp(32px,11vw,56px);white-space:normal} .dspt-name span{white-space:normal} .dspt-tag{width:90vw;padding:22px 22px 22px 40px}}
`),
      _e(nr, {
        enabled: { type: I.Boolean, title: `Enabled`, defaultValue: !0 },
        nextLabel: { type: I.String, title: `Next label`, defaultValue: `Next aisle` },
        homeName: { type: I.String, title: `Home name`, defaultValue: `Home` },
        duration: {
          type: I.Number,
          title: `Duration`,
          min: 0.4,
          max: 1.6,
          step: 0.05,
          unit: `s`,
          defaultValue: 0.8,
        },
        respectRm: { type: I.Boolean, title: `Respect reduced motion`, defaultValue: !0 },
        ...fr,
        ...ur,
        ...dr,
      }));
  });
function vr() {
  let e = O(),
    [t, n] = u(!1);
  return (
    T(() => {
      !e && L.current() !== L.canvas && c !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function yr(e, t, n) {
  if (c === void 0) return () => {};
  let r = c;
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
function br(e) {
  let { smoothness: t = 0.1, wheelSpeed: n = 1, anchorOffset: r = 72 } = e,
    i = r,
    a = vr();
  return (
    T(() => {
      if (
        !a ||
        c.matchMedia(`(prefers-reduced-motion: reduce)`).matches ||
        !c.matchMedia(`(hover: hover) and (pointer: fine)`).matches
      )
        return;
      let e = c;
      if (e.__ltLenis || e.__vcLenis) return;
      let r = null,
        o = () => {},
        s = !1,
        l = (e) => {
          let t = e.target?.closest?.(`a[href*='#']`);
          if (!t || !r) return;
          let n = t.getAttribute(`href`) || ``,
            a = n.indexOf(`#`),
            o = n.slice(0, a);
          if (o && o !== location.pathname && o !== ``) return;
          let s = n.slice(a + 1),
            c = s && document.getElementById(s);
          c &&
            (e.preventDefault(),
            r.scrollTo(c, { offset: -i }),
            history.pushState(null, ``, `#` + s));
        };
      return (
        import("./lenis_1.1.NJQGRwQU.mjs")
          .then((i) => {
            s ||
              ((r = new (i.default || i.Lenis || i)({
                lerp: t,
                wheelMultiplier: n,
                smoothWheel: !0,
              })),
              (e.__ltLenis = r),
              (o = yr(
                () => {},
                void 0,
                (e) => r.raf(e)
              )),
              document.addEventListener(`click`, l),
              document.documentElement.classList.add(`lenis`));
          })
          .catch(() => {}),
        () => {
          ((s = !0),
            o(),
            document.removeEventListener(`click`, l),
            r && r.destroy(),
            (e.__ltLenis = null));
        }
      );
    }, [a, t, n, i]),
    y(`span`, {
      "aria-hidden": !0,
      style: {
        ...e.style,
        display: `block`,
        width: `100%`,
        height: 0,
        opacity: L.current() === L.canvas ? 0.4 : 0,
      },
    })
  );
}
var xr,
  Sr = e(() => {
    (r(),
      S(),
      w(),
      M(),
      (xr = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      I.Color,
      xr.bone,
      I.Color,
      xr.ink,
      I.Color,
      xr.brass,
      I.Color,
      xr.pine,
      I.Color,
      xr.fog,
      I.Color,
      xr.stone,
      I.Color,
      xr.cloud,
      I.Color,
      xr.night,
      I.Boolean,
      I.Font,
      I.Font,
      I.Font,
      I.Enum,
      I.Boolean,
      I.Number,
      _e(br, {
        smoothness: {
          type: I.Number,
          title: `Smoothness`,
          description: `Lower = more glide`,
          defaultValue: 0.1,
          min: 0.03,
          max: 0.2,
          step: 0.01,
        },
        wheelSpeed: {
          type: I.Number,
          title: `Wheel Speed`,
          defaultValue: 1,
          min: 0.5,
          max: 2,
          step: 0.1,
        },
        anchorOffset: {
          type: I.Number,
          title: `Anchor Offset`,
          unit: `px`,
          defaultValue: 72,
          min: 0,
          max: 200,
          step: 4,
        },
      }));
  });
function W(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Cr(e) {
  return typeof e == `function` ? e() : e;
}
function wr(e, t) {
  return Fi[e] > Fi[t];
}
function Tr(e) {
  let t;
  for (let n of e) {
    let e = Cr(n);
    if (((t === void 0 || wr(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function Er(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function G(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Dr(e) {
  throw Error(`Unexpected value: ${e}`);
}
function Or(e) {
  return typeof e == `string`;
}
function kr(e) {
  return Number.isFinite(e);
}
function Ar(e) {
  return e === null;
}
function jr(e) {
  if (Ar(e)) return 0;
  switch (e.type) {
    case `array`:
      return 1;
    case `boolean`:
      return 2;
    case `color`:
      return 3;
    case `date`:
      return 4;
    case `enum`:
      return 5;
    case `file`:
      return 6;
    case `responsiveimage`:
      return 10;
    case `link`:
      return 7;
    case `number`:
      return 8;
    case `object`:
      return 9;
    case `richtext`:
      return 11;
    case `string`:
      return 12;
    case `vectorsetitem`:
      return 13;
    default:
      Dr(e);
  }
}
function Mr(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = wi.read(e);
    n.push(t);
  }
  return { type: `array`, value: n };
}
function Nr(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) wi.write(e, n);
}
function Pr(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = wi.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Fr(e) {
  return { type: `boolean`, value: e.readUint8() !== 0 };
}
function Ir(e, t) {
  e.writeUint8(+!!t.value);
}
function Lr(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Rr(e) {
  return { type: `color`, value: e.readString() };
}
function zr(e, t) {
  e.writeString(t.value);
}
function Br(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Vr(e) {
  let t = e.readInt64();
  return { type: `date`, value: new Date(t).toISOString() };
}
function Hr(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function Ur(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Wr(e) {
  return { type: `enum`, value: e.readString() };
}
function Gr(e, t) {
  e.writeString(t.value);
}
function Kr(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function qr(e) {
  return { type: `file`, value: e.readString() };
}
function Jr(e, t) {
  e.writeString(t.value);
}
function Yr(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Xr(e) {
  return { type: `link`, value: e.readJson() };
}
function Zr(e, t) {
  e.writeJson(t.value);
}
function Qr(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function $r(e) {
  return { type: `number`, value: e.readFloat64() };
}
function ei(e, t) {
  e.writeFloat64(t.value);
}
function ti(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ni(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = wi.read(e);
  }
  return { type: `object`, value: n };
}
function ri(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), wi.write(e, r));
}
function ii(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = wi.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function ai(e) {
  return { type: `responsiveimage`, value: e.readJson() };
}
function oi(e, t) {
  e.writeJson(t.value);
}
function si(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function ci(e) {
  let t = e.readInt8();
  if (t === 0) return { type: `richtext`, value: e.readUint32() };
  if (t === 1) return { type: `richtext`, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function li(e, t) {
  if (kr(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (Or(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function ui(e, t) {
  let n = e.value,
    r = t.value;
  if ((kr(n) && kr(r)) || (Or(n) && Or(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function di(e) {
  return { type: `string`, value: e.readString() };
}
function fi(e, t) {
  e.writeString(t.value);
}
function pi(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function mi(e) {
  return { type: `vectorsetitem`, value: e.readUint32() };
}
function hi(e, t) {
  e.writeUint32(t.value);
}
function gi(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function _i(e) {
  let t = Math.floor(Ui * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function vi(e, t) {
  let n = bi(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await Gi(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Ki(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function yi(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function bi(e) {
  G(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function xi(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = wi.read(e);
  }
  return t;
}
function* Si(e) {
  for (let t of e) yield* t.prioritySources;
}
var Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi = e(() => {
    (r(),
      M(),
      (Ti = Object.create),
      (Ei = Object.defineProperty),
      (Di = Object.getOwnPropertyDescriptor),
      (Oi = Object.getOwnPropertyNames),
      (ki = Object.getPrototypeOf),
      (Ai = Object.prototype.hasOwnProperty),
      (ji = (e, t) =>
        function () {
          try {
            return (t || (0, e[Oi(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (Mi = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of Oi(t))
            Ai.call(e, i) ||
              i === n ||
              Ei(e, i, { get: () => t[i], enumerable: !(r = Di(t, i)) || r.enumerable });
        return e;
      }),
      (Ni = (e, t, n) => (
        (n = e == null ? {} : Ti(ki(e))),
        Mi(!t && e && e.__esModule ? n : Ei(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (Pi = Ni(
        ji({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (Fi = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (Ii = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (Li =
        ((Ci = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = Ii.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = Ii.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = Ii.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = Ii.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = Ii.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = Ii.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = Ii.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = Ii.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = Ii.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = Ii.Float64;
            this.ensureLength(e);
            let t = this.view.getFloat64(this.offset);
            return ((this.offset += e), t);
          }
          readBytes(e) {
            let t = this.offset,
              n = t + e,
              r = this.bytes.subarray(t, n);
            return ((this.offset = n), r);
          }
          readString() {
            let t = this.readUint32(),
              n = this.readBytes(t);
            return e.textDecoder.decode(n);
          }
          readJson() {
            let e = this.readString();
            return JSON.parse(e);
          }
          constructor(e) {
            (W(this, `bytes`, void 0),
              W(this, `offset`, 0),
              W(this, `view`, void 0),
              (this.bytes = e),
              (this.view = Er(this.bytes)));
          }
        }),
        W(Ci, `textDecoder`, new TextDecoder()),
        Ci)),
      c !== void 0 && c.requestIdleCallback,
      (Ri = (e) => 2 ** e - 1),
      (zi = (e) => -(2 ** (e - 1))),
      (Bi = (e) => 2 ** (e - 1) - 1),
      zi(8),
      zi(16),
      zi(32),
      -(BigInt(2) ** BigInt(63)),
      Ri(8),
      Ri(16),
      Ri(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      Bi(8),
      Bi(16),
      Bi(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (Vi = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            G(kr(n), `Invalid chunkId`),
            G(kr(r), `Invalid offset`),
            G(kr(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (G(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (W(this, `chunkId`, void 0),
            W(this, `offset`, void 0),
            W(this, `length`, void 0),
            (this.chunkId = e),
            (this.offset = t),
            (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return Mr(e);
            case 2:
              return Fr(e);
            case 3:
              return Rr(e);
            case 4:
              return Vr(e);
            case 5:
              return Wr(e);
            case 6:
              return qr(e);
            case 7:
              return Xr(e);
            case 8:
              return $r(e);
            case 9:
              return ni(e);
            case 10:
              return ai(e);
            case 11:
              return ci(e);
            case 12:
              return di(e);
            case 13:
              return mi(e);
            default:
              Dr(t);
          }
        }),
          (e.write = function (e, t) {
            let n = jr(t);
            if ((e.writeUint8(n), !Ar(t)))
              switch (t.type) {
                case `array`:
                  return Nr(e, t);
                case `boolean`:
                  return Ir(e, t);
                case `color`:
                  return zr(e, t);
                case `date`:
                  return Hr(e, t);
                case `enum`:
                  return Gr(e, t);
                case `file`:
                  return Jr(e, t);
                case `link`:
                  return Zr(e, t);
                case `number`:
                  return ei(e, t);
                case `object`:
                  return ri(e, t);
                case `responsiveimage`:
                  return oi(e, t);
                case `richtext`:
                  return li(e, t);
                case `vectorsetitem`:
                  return hi(e, t);
                case `string`:
                  return fi(e, t);
                default:
                  Dr(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = jr(e),
              i = jr(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (Ar(e) || Ar(t)) return 0;
            switch (e.type) {
              case `array`:
                return (G(t.type === `array`), Pr(e, t, n));
              case `boolean`:
                return (G(t.type === `boolean`), Lr(e, t));
              case `color`:
                return (G(t.type === `color`), Br(e, t));
              case `date`:
                return (G(t.type === `date`), Ur(e, t));
              case `enum`:
                return (G(t.type === `enum`), Kr(e, t));
              case `file`:
                return (G(t.type === `file`), Yr(e, t));
              case `link`:
                return (G(t.type === `link`), Qr(e, t));
              case `number`:
                return (G(t.type === `number`), ti(e, t));
              case `object`:
                return (G(t.type === `object`), ii(e, t, n));
              case `responsiveimage`:
                return (G(t.type === `responsiveimage`), si(e, t));
              case `richtext`:
                return (G(t.type === `richtext`), ui(e, t));
              case `vectorsetitem`:
                return (G(t.type === `vectorsetitem`), gi(e, t));
              case `string`:
                return (G(t.type === `string`), pi(e, t, n));
              default:
                Dr(e);
            }
          }));
      })((wi ||= {})),
      (Hi = 3),
      (Ui = 250),
      (Wi = [408, 429, 500, 502, 503, 504]),
      (Gi = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Wi.includes(r.status) || ++n > Hi) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > Hi) throw e;
          }
          await _i(n);
        }
      }),
      (Ki = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((G(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = yi(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((G(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = yi(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          W(this, `chunks`, []);
        }
      }),
      (qi = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = Gi(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new Li(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = Tr(this.scanPrioritySources),
                        t = e ? Pe({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = xi(n),
                        o = n.getOffset() - i,
                        s = new Vi(this.id, i, o).toString(),
                        c = { pointer: s, data: a };
                      (this.itemLoader.prime({ pointer: s, prioritySources: new Set() }, c),
                        r.push(c));
                    }
                    return r;
                  })
                  .finally(() => {
                    ((this.isScanning = !1), this.scanPrioritySources.clear());
                  }))),
            this.itemsPromise
          );
        }
        resolveItem(e, t) {
          let n = this.itemPrioritySources.get(e);
          (n || ((n = new Set()), this.itemPrioritySources.set(e, n)), t && n.add(t));
          let r = this.itemLoader.load({ pointer: e, prioritySources: n }),
            i = () => this.itemPrioritySources.delete(e);
          return (r.then(i, i), r);
        }
        constructor(e, t) {
          (W(this, `id`, void 0),
            W(this, `url`, void 0),
            W(this, `itemsPromise`, void 0),
            W(this, `isScanning`, !1),
            W(this, `scanPrioritySources`, new Set()),
            W(this, `itemPrioritySources`, new Map()),
            W(
              this,
              `itemLoader`,
              new Pi.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = Vi.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await vi(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = Tr(Si(e)),
                      a = i ? Pe({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    G(o, `Missing range bytes`);
                    let s = xi(new Li(o)),
                      c = e[t]?.pointer;
                    (G(c, `Missing pointer`), r.push({ pointer: c, data: s }));
                  }
                  return r;
                },
                { maxBatchSize: 250, cacheKeyFn: (e) => e.pointer }
              )
            ),
            (this.id = e),
            (this.url = t));
        }
      }),
      (Ji = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = Vi.fromString(e),
                r = this.chunks[n.chunkId];
              return (G(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = Vi.fromString(e.pointer),
            r = Vi.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return wi.compare(e, t, n);
        }
        constructor(e) {
          (W(this, `options`, void 0),
            W(this, `id`, void 0),
            W(this, `schema`, void 0),
            W(this, `indexes`, void 0),
            W(this, `resolveRichText`, void 0),
            W(this, `resolveVectorSetItem`, void 0),
            W(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new qi(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function Xi(e) {
  return typeof e == `object` && !!e && !v(e) && ra in e;
}
function Zi(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Qi(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    if (typeof i == `number`) {
      e[r] = n(i, t);
      continue;
    }
    $i(t, i, n);
  }
}
function $i(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : $i(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || Qi(e, t, n);
  }
}
function ea(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let i = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return m(s, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return m(ye, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a] = n;
          Qi(i, a, (n, r) => {
            if (n === 1) return r && t(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (Xi(i) && i.preload(), i) : r;
          });
          let o = e[r];
          return (
            Zi(o, `Module not found`),
            Xi(o) && o.preload(),
            y(ke, {
              componentIdentifier: r,
              children: (e) => y(Me, { component: o, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return m(e === `a` ? E.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, i), i);
  };
}
var ta,
  na,
  ra,
  ia,
  aa,
  oa = e(() => {
    (r(),
      S(),
      M(),
      w(),
      c !== void 0 && c.requestIdleCallback,
      (ra = `preload`),
      (ia =
        (((ta = ia || {})[(ta.Fragment = 1)] = `Fragment`),
        (ta[(ta.Link = 2)] = `Link`),
        (ta[(ta.Module = 3)] = `Module`),
        (ta[(ta.Tag = 4)] = `Tag`),
        (ta[(ta.Text = 5)] = `Text`),
        ta)),
      (aa =
        (((na = aa || {})[(na.RichText = 1)] = `RichText`),
        (na[(na.VectorSetItem = 2)] = `VectorSetItem`),
        na)));
  }),
  sa,
  ca,
  la,
  ua,
  da,
  fa = e(() => {
    (M(),
      Yi(),
      oa(),
      (sa = {
        C7qAVoTaK: { isNullable: !0, type: I.String },
        createdAt: { isNullable: !0, type: I.Date },
        id: { isNullable: !1, type: I.String },
        lesNXuiI6: { isNullable: !0, type: I.Number },
        MX3MjvNZ8: { isNullable: !0, type: I.String },
        nextItemId: { isNullable: !0, type: I.String },
        Omng3EMVB: { isNullable: !0, type: I.String },
        previousItemId: { isNullable: !0, type: I.String },
        qtDbzJU0Y: { isNullable: !0, type: I.String },
        s9byjIxIy: { isNullable: !0, type: I.String },
        updatedAt: { isNullable: !0, type: I.Date },
        VbX6L3f2D: { isNullable: !0, type: I.ResponsiveImage },
        wnpvYCHY5: { isNullable: !0, type: I.String },
      }),
      (ca = []),
      (la = (e) => {
        let t = ca[e];
        if (t) return t().then((e) => e.default);
      }),
      (ua = ea({})),
      new he(),
      (da = {
        collectionByLocaleId: {
          default: new Ji({
            chunks: [
              new URL(
                `./BJMU1IgNs-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/9ipWbjupVQc6f7DEaCbS/59TS1TgDcXCryqKW8OEH/BJMU1IgNs.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `55e20efe-e786-48d1-8a85-11c5bce7a1e9default`,
            indexes: [],
            resolveRichText: ua,
            resolveVectorSetItem: la,
            schema: sa,
          }),
        },
        displayName: `Reviews`,
        id: `55e20efe-e786-48d1-8a85-11c5bce7a1e9`,
      }),
      _e(da, {
        Omng3EMVB: { preventLocalization: !1, title: `Slug`, type: I.String },
        wnpvYCHY5: { defaultValue: ``, title: `Quote`, type: I.String },
        qtDbzJU0Y: { defaultValue: ``, title: `Name`, type: I.String },
        MX3MjvNZ8: { defaultValue: ``, title: `Role`, type: I.String },
        C7qAVoTaK: { defaultValue: ``, title: `Product`, type: I.String },
        s9byjIxIy: { defaultValue: ``, title: `Stars`, type: I.String },
        VbX6L3f2D: { title: `Photo`, type: I.ResponsiveImage },
        lesNXuiI6: { defaultValue: 0, title: `Order`, type: I.Number },
        createdAt: { title: `Created`, type: I.Date },
        updatedAt: { title: `Updated`, type: I.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/BJMU1IgNs:default`,
          title: `Previous`,
          type: I.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/BJMU1IgNs:default`,
          title: `Next`,
          type: I.CollectionReference,
        },
      }));
  });
function K(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function pa(e) {
  return typeof e == `function` ? e() : e;
}
function ma(e, t) {
  return Eo[e] > Eo[t];
}
function ha(e) {
  let t;
  for (let n of e) {
    let e = pa(n);
    if (((t === void 0 || ma(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function ga(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function q(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function _a(e) {
  throw Error(`Unexpected value: ${e}`);
}
function va(e) {
  return typeof e == `string`;
}
function ya(e) {
  return Number.isFinite(e);
}
function ba(e) {
  return e === null;
}
function xa(e) {
  if (ba(e)) return 0;
  switch (e.type) {
    case `array`:
      return 1;
    case `boolean`:
      return 2;
    case `color`:
      return 3;
    case `date`:
      return 4;
    case `enum`:
      return 5;
    case `file`:
      return 6;
    case `responsiveimage`:
      return 10;
    case `link`:
      return 7;
    case `number`:
      return 8;
    case `object`:
      return 9;
    case `richtext`:
      return 11;
    case `string`:
      return 12;
    case `vectorsetitem`:
      return 13;
    default:
      _a(e);
  }
}
function Sa(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = ho.read(e);
    n.push(t);
  }
  return { type: `array`, value: n };
}
function Ca(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) ho.write(e, n);
}
function wa(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = ho.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Ta(e) {
  return { type: `boolean`, value: e.readUint8() !== 0 };
}
function Ea(e, t) {
  e.writeUint8(+!!t.value);
}
function Da(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Oa(e) {
  return { type: `color`, value: e.readString() };
}
function ka(e, t) {
  e.writeString(t.value);
}
function Aa(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ja(e) {
  let t = e.readInt64();
  return { type: `date`, value: new Date(t).toISOString() };
}
function Ma(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function Na(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Pa(e) {
  return { type: `enum`, value: e.readString() };
}
function Fa(e, t) {
  e.writeString(t.value);
}
function Ia(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function La(e) {
  return { type: `file`, value: e.readString() };
}
function Ra(e, t) {
  e.writeString(t.value);
}
function za(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ba(e) {
  return { type: `link`, value: e.readJson() };
}
function Va(e, t) {
  e.writeJson(t.value);
}
function Ha(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Ua(e) {
  return { type: `number`, value: e.readFloat64() };
}
function Wa(e, t) {
  e.writeFloat64(t.value);
}
function Ga(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ka(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = ho.read(e);
  }
  return { type: `object`, value: n };
}
function qa(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), ho.write(e, r));
}
function Ja(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = ho.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Ya(e) {
  return { type: `responsiveimage`, value: e.readJson() };
}
function Xa(e, t) {
  e.writeJson(t.value);
}
function Za(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Qa(e) {
  let t = e.readInt8();
  if (t === 0) return { type: `richtext`, value: e.readUint32() };
  if (t === 1) return { type: `richtext`, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function $a(e, t) {
  if (ya(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (va(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function eo(e, t) {
  let n = e.value,
    r = t.value;
  if ((ya(n) && ya(r)) || (va(n) && va(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function to(e) {
  return { type: `string`, value: e.readString() };
}
function no(e, t) {
  e.writeString(t.value);
}
function ro(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function io(e) {
  return { type: `vectorsetitem`, value: e.readUint32() };
}
function ao(e, t) {
  e.writeUint32(t.value);
}
function oo(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function so(e) {
  let t = Math.floor(No * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function co(e, t) {
  let n = uo(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await Fo(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Io(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function lo(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function uo(e) {
  q(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function fo(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = ho.read(e);
  }
  return t;
}
function* po(e) {
  for (let t of e) yield* t.prioritySources;
}
var mo,
  ho,
  go,
  _o,
  vo,
  yo,
  bo,
  xo,
  So,
  Co,
  wo,
  To,
  Eo,
  J,
  Do,
  Oo,
  ko,
  Ao,
  jo,
  Mo,
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro,
  zo = e(() => {
    (r(),
      M(),
      (go = Object.create),
      (_o = Object.defineProperty),
      (vo = Object.getOwnPropertyDescriptor),
      (yo = Object.getOwnPropertyNames),
      (bo = Object.getPrototypeOf),
      (xo = Object.prototype.hasOwnProperty),
      (So = (e, t) =>
        function () {
          try {
            return (t || (0, e[yo(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (Co = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of yo(t))
            xo.call(e, i) ||
              i === n ||
              _o(e, i, { get: () => t[i], enumerable: !(r = vo(t, i)) || r.enumerable });
        return e;
      }),
      (wo = (e, t, n) => (
        (n = e == null ? {} : go(bo(e))),
        Co(!t && e && e.__esModule ? n : _o(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (To = wo(
        So({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (Eo = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (J = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (Do =
        ((mo = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = J.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = J.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = J.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = J.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = J.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = J.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = J.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = J.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = J.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = J.Float64;
            this.ensureLength(e);
            let t = this.view.getFloat64(this.offset);
            return ((this.offset += e), t);
          }
          readBytes(e) {
            let t = this.offset,
              n = t + e,
              r = this.bytes.subarray(t, n);
            return ((this.offset = n), r);
          }
          readString() {
            let t = this.readUint32(),
              n = this.readBytes(t);
            return e.textDecoder.decode(n);
          }
          readJson() {
            let e = this.readString();
            return JSON.parse(e);
          }
          constructor(e) {
            (K(this, `bytes`, void 0),
              K(this, `offset`, 0),
              K(this, `view`, void 0),
              (this.bytes = e),
              (this.view = ga(this.bytes)));
          }
        }),
        K(mo, `textDecoder`, new TextDecoder()),
        mo)),
      c !== void 0 && c.requestIdleCallback,
      (Oo = (e) => 2 ** e - 1),
      (ko = (e) => -(2 ** (e - 1))),
      (Ao = (e) => 2 ** (e - 1) - 1),
      ko(8),
      ko(16),
      ko(32),
      -(BigInt(2) ** BigInt(63)),
      Oo(8),
      Oo(16),
      Oo(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      Ao(8),
      Ao(16),
      Ao(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (jo = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            q(ya(n), `Invalid chunkId`),
            q(ya(r), `Invalid offset`),
            q(ya(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (q(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (K(this, `chunkId`, void 0),
            K(this, `offset`, void 0),
            K(this, `length`, void 0),
            (this.chunkId = e),
            (this.offset = t),
            (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return Sa(e);
            case 2:
              return Ta(e);
            case 3:
              return Oa(e);
            case 4:
              return ja(e);
            case 5:
              return Pa(e);
            case 6:
              return La(e);
            case 7:
              return Ba(e);
            case 8:
              return Ua(e);
            case 9:
              return Ka(e);
            case 10:
              return Ya(e);
            case 11:
              return Qa(e);
            case 12:
              return to(e);
            case 13:
              return io(e);
            default:
              _a(t);
          }
        }),
          (e.write = function (e, t) {
            let n = xa(t);
            if ((e.writeUint8(n), !ba(t)))
              switch (t.type) {
                case `array`:
                  return Ca(e, t);
                case `boolean`:
                  return Ea(e, t);
                case `color`:
                  return ka(e, t);
                case `date`:
                  return Ma(e, t);
                case `enum`:
                  return Fa(e, t);
                case `file`:
                  return Ra(e, t);
                case `link`:
                  return Va(e, t);
                case `number`:
                  return Wa(e, t);
                case `object`:
                  return qa(e, t);
                case `responsiveimage`:
                  return Xa(e, t);
                case `richtext`:
                  return $a(e, t);
                case `vectorsetitem`:
                  return ao(e, t);
                case `string`:
                  return no(e, t);
                default:
                  _a(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = xa(e),
              i = xa(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (ba(e) || ba(t)) return 0;
            switch (e.type) {
              case `array`:
                return (q(t.type === `array`), wa(e, t, n));
              case `boolean`:
                return (q(t.type === `boolean`), Da(e, t));
              case `color`:
                return (q(t.type === `color`), Aa(e, t));
              case `date`:
                return (q(t.type === `date`), Na(e, t));
              case `enum`:
                return (q(t.type === `enum`), Ia(e, t));
              case `file`:
                return (q(t.type === `file`), za(e, t));
              case `link`:
                return (q(t.type === `link`), Ha(e, t));
              case `number`:
                return (q(t.type === `number`), Ga(e, t));
              case `object`:
                return (q(t.type === `object`), Ja(e, t, n));
              case `responsiveimage`:
                return (q(t.type === `responsiveimage`), Za(e, t));
              case `richtext`:
                return (q(t.type === `richtext`), eo(e, t));
              case `vectorsetitem`:
                return (q(t.type === `vectorsetitem`), oo(e, t));
              case `string`:
                return (q(t.type === `string`), ro(e, t, n));
              default:
                _a(e);
            }
          }));
      })((ho ||= {})),
      (Mo = 3),
      (No = 250),
      (Po = [408, 429, 500, 502, 503, 504]),
      (Fo = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Po.includes(r.status) || ++n > Mo) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > Mo) throw e;
          }
          await so(n);
        }
      }),
      (Io = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((q(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = lo(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((q(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = lo(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          K(this, `chunks`, []);
        }
      }),
      (Lo = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = Fo(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new Do(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = ha(this.scanPrioritySources),
                        t = e ? Pe({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = fo(n),
                        o = n.getOffset() - i,
                        s = new jo(this.id, i, o).toString(),
                        c = { pointer: s, data: a };
                      (this.itemLoader.prime({ pointer: s, prioritySources: new Set() }, c),
                        r.push(c));
                    }
                    return r;
                  })
                  .finally(() => {
                    ((this.isScanning = !1), this.scanPrioritySources.clear());
                  }))),
            this.itemsPromise
          );
        }
        resolveItem(e, t) {
          let n = this.itemPrioritySources.get(e);
          (n || ((n = new Set()), this.itemPrioritySources.set(e, n)), t && n.add(t));
          let r = this.itemLoader.load({ pointer: e, prioritySources: n }),
            i = () => this.itemPrioritySources.delete(e);
          return (r.then(i, i), r);
        }
        constructor(e, t) {
          (K(this, `id`, void 0),
            K(this, `url`, void 0),
            K(this, `itemsPromise`, void 0),
            K(this, `isScanning`, !1),
            K(this, `scanPrioritySources`, new Set()),
            K(this, `itemPrioritySources`, new Map()),
            K(
              this,
              `itemLoader`,
              new To.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = jo.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await co(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = ha(po(e)),
                      a = i ? Pe({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    q(o, `Missing range bytes`);
                    let s = fo(new Do(o)),
                      c = e[t]?.pointer;
                    (q(c, `Missing pointer`), r.push({ pointer: c, data: s }));
                  }
                  return r;
                },
                { maxBatchSize: 250, cacheKeyFn: (e) => e.pointer }
              )
            ),
            (this.id = e),
            (this.url = t));
        }
      }),
      (Ro = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = jo.fromString(e),
                r = this.chunks[n.chunkId];
              return (q(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = jo.fromString(e.pointer),
            r = jo.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return ho.compare(e, t, n);
        }
        constructor(e) {
          (K(this, `options`, void 0),
            K(this, `id`, void 0),
            K(this, `schema`, void 0),
            K(this, `indexes`, void 0),
            K(this, `resolveRichText`, void 0),
            K(this, `resolveVectorSetItem`, void 0),
            K(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new Lo(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function Bo(e) {
  return typeof e == `object` && !!e && !v(e) && Ko in e;
}
function Vo(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Ho(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    if (typeof i == `number`) {
      e[r] = n(i, t);
      continue;
    }
    Uo(t, i, n);
  }
}
function Uo(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : Uo(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || Ho(e, t, n);
  }
}
function Wo(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let i = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return m(s, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return m(ye, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a] = n;
          Ho(i, a, (n, r) => {
            if (n === 1) return r && t(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (Bo(i) && i.preload(), i) : r;
          });
          let o = e[r];
          return (
            Vo(o, `Module not found`),
            Bo(o) && o.preload(),
            y(ke, {
              componentIdentifier: r,
              children: (e) => y(Me, { component: o, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return m(e === `a` ? E.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, i), i);
  };
}
var Y,
  Go,
  Ko,
  qo,
  Jo,
  Yo = e(() => {
    (r(),
      S(),
      M(),
      w(),
      c !== void 0 && c.requestIdleCallback,
      (Ko = `preload`),
      (qo =
        (((Y = qo || {})[(Y.Fragment = 1)] = `Fragment`),
        (Y[(Y.Link = 2)] = `Link`),
        (Y[(Y.Module = 3)] = `Module`),
        (Y[(Y.Tag = 4)] = `Tag`),
        (Y[(Y.Text = 5)] = `Text`),
        Y)),
      (Jo =
        (((Go = Jo || {})[(Go.RichText = 1)] = `RichText`),
        (Go[(Go.VectorSetItem = 2)] = `VectorSetItem`),
        Go)));
  }),
  Xo,
  Zo,
  Qo,
  $o,
  es,
  ts = e(() => {
    (M(),
      zo(),
      Yo(),
      (Xo = {
        createdAt: { isNullable: !0, type: I.Date },
        id: { isNullable: !1, type: I.String },
        l3GOtpCdm: { isNullable: !0, type: I.String },
        LAzMxw8Vj: { isNullable: !0, type: I.String },
        Mi6VpAFNz: { isNullable: !0, type: I.String },
        nextItemId: { isNullable: !0, type: I.String },
        previousItemId: { isNullable: !0, type: I.String },
        updatedAt: { isNullable: !0, type: I.Date },
        X1kw4cktH: { isNullable: !0, type: I.Number },
        XgwkBr3yG: { isNullable: !0, type: I.String },
      }),
      (Zo = []),
      (Qo = (e) => {
        let t = Zo[e];
        if (t) return t().then((e) => e.default);
      }),
      ($o = Wo({})),
      new he(),
      (es = {
        collectionByLocaleId: {
          default: new Ro({
            chunks: [
              new URL(
                `./pQixXxhdy-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/2PsE6YHDSw0D9VNdxLrW/FSLXwn3Xupu1zHDuaHzs/pQixXxhdy.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `b57890a4-e940-4b5d-a97d-7837cf00f90edefault`,
            indexes: [],
            resolveRichText: $o,
            resolveVectorSetItem: Qo,
            schema: Xo,
          }),
        },
        displayName: `FAQ`,
        id: `b57890a4-e940-4b5d-a97d-7837cf00f90e`,
      }),
      _e(es, {
        Mi6VpAFNz: { preventLocalization: !1, title: `Slug`, type: I.String },
        XgwkBr3yG: { defaultValue: ``, title: `Question`, type: I.String },
        l3GOtpCdm: { defaultValue: ``, title: `Answer`, type: I.String },
        LAzMxw8Vj: { defaultValue: ``, title: `Pages`, type: I.String },
        X1kw4cktH: { defaultValue: 0, title: `Order`, type: I.Number },
        createdAt: { title: `Created`, type: I.Date },
        updatedAt: { title: `Updated`, type: I.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/pQixXxhdy:default`,
          title: `Previous`,
          type: I.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/pQixXxhdy:default`,
          title: `Next`,
          type: I.CollectionReference,
        },
      }));
  });
function X(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function ns(e) {
  return typeof e == `function` ? e() : e;
}
function rs(e, t) {
  return mc[e] > mc[t];
}
function is(e) {
  let t;
  for (let n of e) {
    let e = ns(n);
    if (((t === void 0 || rs(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function as(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Z(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function os(e) {
  throw Error(`Unexpected value: ${e}`);
}
function ss(e) {
  return typeof e == `string`;
}
function cs(e) {
  return Number.isFinite(e);
}
function ls(e) {
  return e === null;
}
function us(e) {
  if (ls(e)) return 0;
  switch (e.type) {
    case `array`:
      return 1;
    case `boolean`:
      return 2;
    case `color`:
      return 3;
    case `date`:
      return 4;
    case `enum`:
      return 5;
    case `file`:
      return 6;
    case `responsiveimage`:
      return 10;
    case `link`:
      return 7;
    case `number`:
      return 8;
    case `object`:
      return 9;
    case `richtext`:
      return 11;
    case `string`:
      return 12;
    case `vectorsetitem`:
      return 13;
    default:
      os(e);
  }
}
function ds(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = rc.read(e);
    n.push(t);
  }
  return { type: `array`, value: n };
}
function fs(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) rc.write(e, n);
}
function ps(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = rc.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function ms(e) {
  return { type: `boolean`, value: e.readUint8() !== 0 };
}
function hs(e, t) {
  e.writeUint8(+!!t.value);
}
function gs(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function _s(e) {
  return { type: `color`, value: e.readString() };
}
function vs(e, t) {
  e.writeString(t.value);
}
function ys(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function bs(e) {
  let t = e.readInt64();
  return { type: `date`, value: new Date(t).toISOString() };
}
function xs(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function Ss(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Cs(e) {
  return { type: `enum`, value: e.readString() };
}
function ws(e, t) {
  e.writeString(t.value);
}
function Ts(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Es(e) {
  return { type: `file`, value: e.readString() };
}
function Ds(e, t) {
  e.writeString(t.value);
}
function Os(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ks(e) {
  return { type: `link`, value: e.readJson() };
}
function As(e, t) {
  e.writeJson(t.value);
}
function js(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Ms(e) {
  return { type: `number`, value: e.readFloat64() };
}
function Ns(e, t) {
  e.writeFloat64(t.value);
}
function Ps(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Fs(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = rc.read(e);
  }
  return { type: `object`, value: n };
}
function Is(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), rc.write(e, r));
}
function Ls(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = rc.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Rs(e) {
  return { type: `responsiveimage`, value: e.readJson() };
}
function zs(e, t) {
  e.writeJson(t.value);
}
function Bs(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Vs(e) {
  let t = e.readInt8();
  if (t === 0) return { type: `richtext`, value: e.readUint32() };
  if (t === 1) return { type: `richtext`, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Hs(e, t) {
  if (cs(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (ss(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Us(e, t) {
  let n = e.value,
    r = t.value;
  if ((cs(n) && cs(r)) || (ss(n) && ss(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function Ws(e) {
  return { type: `string`, value: e.readString() };
}
function Gs(e, t) {
  e.writeString(t.value);
}
function Ks(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function qs(e) {
  return { type: `vectorsetitem`, value: e.readUint32() };
}
function Js(e, t) {
  e.writeUint32(t.value);
}
function Ys(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function Xs(e) {
  let t = Math.floor(Sc * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function Zs(e, t) {
  let n = $s(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await wc(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Tc(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function Qs(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function $s(e) {
  Z(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function ec(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = rc.read(e);
  }
  return t;
}
function* tc(e) {
  for (let t of e) yield* t.prioritySources;
}
var nc,
  rc,
  ic,
  ac,
  oc,
  sc,
  cc,
  lc,
  uc,
  dc,
  fc,
  pc,
  mc,
  hc,
  gc,
  _c,
  vc,
  yc,
  bc,
  xc,
  Sc,
  Cc,
  wc,
  Tc,
  Ec,
  Dc,
  Oc = e(() => {
    (r(),
      M(),
      (ic = Object.create),
      (ac = Object.defineProperty),
      (oc = Object.getOwnPropertyDescriptor),
      (sc = Object.getOwnPropertyNames),
      (cc = Object.getPrototypeOf),
      (lc = Object.prototype.hasOwnProperty),
      (uc = (e, t) =>
        function () {
          try {
            return (t || (0, e[sc(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (dc = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of sc(t))
            lc.call(e, i) ||
              i === n ||
              ac(e, i, { get: () => t[i], enumerable: !(r = oc(t, i)) || r.enumerable });
        return e;
      }),
      (fc = (e, t, n) => (
        (n = e == null ? {} : ic(cc(e))),
        dc(!t && e && e.__esModule ? n : ac(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (pc = fc(
        uc({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (mc = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (hc = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (gc =
        ((nc = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = hc.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = hc.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = hc.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = hc.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = hc.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = hc.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = hc.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = hc.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = hc.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = hc.Float64;
            this.ensureLength(e);
            let t = this.view.getFloat64(this.offset);
            return ((this.offset += e), t);
          }
          readBytes(e) {
            let t = this.offset,
              n = t + e,
              r = this.bytes.subarray(t, n);
            return ((this.offset = n), r);
          }
          readString() {
            let t = this.readUint32(),
              n = this.readBytes(t);
            return e.textDecoder.decode(n);
          }
          readJson() {
            let e = this.readString();
            return JSON.parse(e);
          }
          constructor(e) {
            (X(this, `bytes`, void 0),
              X(this, `offset`, 0),
              X(this, `view`, void 0),
              (this.bytes = e),
              (this.view = as(this.bytes)));
          }
        }),
        X(nc, `textDecoder`, new TextDecoder()),
        nc)),
      c !== void 0 && c.requestIdleCallback,
      (_c = (e) => 2 ** e - 1),
      (vc = (e) => -(2 ** (e - 1))),
      (yc = (e) => 2 ** (e - 1) - 1),
      vc(8),
      vc(16),
      vc(32),
      -(BigInt(2) ** BigInt(63)),
      _c(8),
      _c(16),
      _c(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      yc(8),
      yc(16),
      yc(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (bc = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            Z(cs(n), `Invalid chunkId`),
            Z(cs(r), `Invalid offset`),
            Z(cs(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (Z(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (X(this, `chunkId`, void 0),
            X(this, `offset`, void 0),
            X(this, `length`, void 0),
            (this.chunkId = e),
            (this.offset = t),
            (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return ds(e);
            case 2:
              return ms(e);
            case 3:
              return _s(e);
            case 4:
              return bs(e);
            case 5:
              return Cs(e);
            case 6:
              return Es(e);
            case 7:
              return ks(e);
            case 8:
              return Ms(e);
            case 9:
              return Fs(e);
            case 10:
              return Rs(e);
            case 11:
              return Vs(e);
            case 12:
              return Ws(e);
            case 13:
              return qs(e);
            default:
              os(t);
          }
        }),
          (e.write = function (e, t) {
            let n = us(t);
            if ((e.writeUint8(n), !ls(t)))
              switch (t.type) {
                case `array`:
                  return fs(e, t);
                case `boolean`:
                  return hs(e, t);
                case `color`:
                  return vs(e, t);
                case `date`:
                  return xs(e, t);
                case `enum`:
                  return ws(e, t);
                case `file`:
                  return Ds(e, t);
                case `link`:
                  return As(e, t);
                case `number`:
                  return Ns(e, t);
                case `object`:
                  return Is(e, t);
                case `responsiveimage`:
                  return zs(e, t);
                case `richtext`:
                  return Hs(e, t);
                case `vectorsetitem`:
                  return Js(e, t);
                case `string`:
                  return Gs(e, t);
                default:
                  os(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = us(e),
              i = us(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (ls(e) || ls(t)) return 0;
            switch (e.type) {
              case `array`:
                return (Z(t.type === `array`), ps(e, t, n));
              case `boolean`:
                return (Z(t.type === `boolean`), gs(e, t));
              case `color`:
                return (Z(t.type === `color`), ys(e, t));
              case `date`:
                return (Z(t.type === `date`), Ss(e, t));
              case `enum`:
                return (Z(t.type === `enum`), Ts(e, t));
              case `file`:
                return (Z(t.type === `file`), Os(e, t));
              case `link`:
                return (Z(t.type === `link`), js(e, t));
              case `number`:
                return (Z(t.type === `number`), Ps(e, t));
              case `object`:
                return (Z(t.type === `object`), Ls(e, t, n));
              case `responsiveimage`:
                return (Z(t.type === `responsiveimage`), Bs(e, t));
              case `richtext`:
                return (Z(t.type === `richtext`), Us(e, t));
              case `vectorsetitem`:
                return (Z(t.type === `vectorsetitem`), Ys(e, t));
              case `string`:
                return (Z(t.type === `string`), Ks(e, t, n));
              default:
                os(e);
            }
          }));
      })((rc ||= {})),
      (xc = 3),
      (Sc = 250),
      (Cc = [408, 429, 500, 502, 503, 504]),
      (wc = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Cc.includes(r.status) || ++n > xc) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > xc) throw e;
          }
          await Xs(n);
        }
      }),
      (Tc = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((Z(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = Qs(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((Z(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = Qs(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          X(this, `chunks`, []);
        }
      }),
      (Ec = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = wc(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new gc(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = is(this.scanPrioritySources),
                        t = e ? Pe({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = ec(n),
                        o = n.getOffset() - i,
                        s = new bc(this.id, i, o).toString(),
                        c = { pointer: s, data: a };
                      (this.itemLoader.prime({ pointer: s, prioritySources: new Set() }, c),
                        r.push(c));
                    }
                    return r;
                  })
                  .finally(() => {
                    ((this.isScanning = !1), this.scanPrioritySources.clear());
                  }))),
            this.itemsPromise
          );
        }
        resolveItem(e, t) {
          let n = this.itemPrioritySources.get(e);
          (n || ((n = new Set()), this.itemPrioritySources.set(e, n)), t && n.add(t));
          let r = this.itemLoader.load({ pointer: e, prioritySources: n }),
            i = () => this.itemPrioritySources.delete(e);
          return (r.then(i, i), r);
        }
        constructor(e, t) {
          (X(this, `id`, void 0),
            X(this, `url`, void 0),
            X(this, `itemsPromise`, void 0),
            X(this, `isScanning`, !1),
            X(this, `scanPrioritySources`, new Set()),
            X(this, `itemPrioritySources`, new Map()),
            X(
              this,
              `itemLoader`,
              new pc.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = bc.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await Zs(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = is(tc(e)),
                      a = i ? Pe({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    Z(o, `Missing range bytes`);
                    let s = ec(new gc(o)),
                      c = e[t]?.pointer;
                    (Z(c, `Missing pointer`), r.push({ pointer: c, data: s }));
                  }
                  return r;
                },
                { maxBatchSize: 250, cacheKeyFn: (e) => e.pointer }
              )
            ),
            (this.id = e),
            (this.url = t));
        }
      }),
      (Dc = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = bc.fromString(e),
                r = this.chunks[n.chunkId];
              return (Z(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = bc.fromString(e.pointer),
            r = bc.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return rc.compare(e, t, n);
        }
        constructor(e) {
          (X(this, `options`, void 0),
            X(this, `id`, void 0),
            X(this, `schema`, void 0),
            X(this, `indexes`, void 0),
            X(this, `resolveRichText`, void 0),
            X(this, `resolveVectorSetItem`, void 0),
            X(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new Ec(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function kc(e) {
  return typeof e == `object` && !!e && !v(e) && Ic in e;
}
function Ac(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function jc(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    if (typeof i == `number`) {
      e[r] = n(i, t);
      continue;
    }
    Mc(t, i, n);
  }
}
function Mc(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : Mc(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || jc(e, t, n);
  }
}
function Nc(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let i = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return m(s, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return m(ye, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a] = n;
          jc(i, a, (n, r) => {
            if (n === 1) return r && t(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (kc(i) && i.preload(), i) : r;
          });
          let o = e[r];
          return (
            Ac(o, `Module not found`),
            kc(o) && o.preload(),
            y(ke, {
              componentIdentifier: r,
              children: (e) => y(Me, { component: o, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return m(e === `a` ? E.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, i), i);
  };
}
var Pc,
  Fc,
  Ic,
  Lc,
  Rc,
  zc = e(() => {
    (r(),
      S(),
      M(),
      w(),
      c !== void 0 && c.requestIdleCallback,
      (Ic = `preload`),
      (Lc =
        (((Pc = Lc || {})[(Pc.Fragment = 1)] = `Fragment`),
        (Pc[(Pc.Link = 2)] = `Link`),
        (Pc[(Pc.Module = 3)] = `Module`),
        (Pc[(Pc.Tag = 4)] = `Tag`),
        (Pc[(Pc.Text = 5)] = `Text`),
        Pc)),
      (Rc =
        (((Fc = Rc || {})[(Fc.RichText = 1)] = `RichText`),
        (Fc[(Fc.VectorSetItem = 2)] = `VectorSetItem`),
        Fc)));
  }),
  Bc,
  Vc,
  Hc,
  Uc,
  Wc,
  Gc = e(() => {
    (M(),
      Oc(),
      zc(),
      (Bc = {
        C7F_gwBzx: { isNullable: !0, type: I.Number },
        cdf8hj_TH: { isNullable: !0, type: I.String },
        createdAt: { isNullable: !0, type: I.Date },
        GzQkLWulm: { isNullable: !0, type: I.String },
        hKCwQJp8Q: { isNullable: !0, type: I.String },
        id: { isNullable: !1, type: I.String },
        Lg9zshr1F: { isNullable: !0, type: I.String },
        LjnR4FGDs: { isNullable: !0, type: I.String },
        nextItemId: { isNullable: !0, type: I.String },
        nzzzZSmvL: { isNullable: !0, type: I.String },
        previousItemId: { isNullable: !0, type: I.String },
        updatedAt: { isNullable: !0, type: I.Date },
      }),
      (Vc = []),
      (Hc = (e) => {
        let t = Vc[e];
        if (t) return t().then((e) => e.default);
      }),
      (Uc = Nc({})),
      new he(),
      (Wc = {
        collectionByLocaleId: {
          default: new Dc({
            chunks: [
              new URL(
                `./uAf3EYIUC-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/b4bbKLfGiB5qE4Wkt7QS/ChSFThXXX03yea2r2THp/uAf3EYIUC.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `34a553ed-a5e0-4b46-9cb6-6a6a6ad9b9e4default`,
            indexes: [],
            resolveRichText: Uc,
            resolveVectorSetItem: Hc,
            schema: Bc,
          }),
        },
        displayName: `Lessons`,
        id: `34a553ed-a5e0-4b46-9cb6-6a6a6ad9b9e4`,
      }),
      _e(Wc, {
        Lg9zshr1F: { preventLocalization: !1, title: `Slug`, type: I.String },
        hKCwQJp8Q: { defaultValue: ``, title: `Title`, type: I.String },
        LjnR4FGDs: { defaultValue: ``, title: `Length`, type: I.String },
        GzQkLWulm: { defaultValue: ``, title: `Module`, type: I.String },
        cdf8hj_TH: { defaultValue: ``, title: `Summary`, type: I.String },
        nzzzZSmvL: { defaultValue: ``, title: `Course`, type: I.String },
        C7F_gwBzx: { defaultValue: 0, title: `Order`, type: I.Number },
        createdAt: { title: `Created`, type: I.Date },
        updatedAt: { title: `Updated`, type: I.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/uAf3EYIUC:default`,
          title: `Previous`,
          type: I.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/uAf3EYIUC:default`,
          title: `Next`,
          type: I.CollectionReference,
        },
      }));
  });
function Q(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Kc(e) {
  return typeof e == `function` ? e() : e;
}
function qc(e, t) {
  return iu[e] > iu[t];
}
function Jc(e) {
  let t;
  for (let n of e) {
    let e = Kc(n);
    if (((t === void 0 || qc(e, t)) && (t = e), t === `user-blocking`)) break;
  }
  return t;
}
function Yc(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function $(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Xc(e) {
  throw Error(`Unexpected value: ${e}`);
}
function Zc(e) {
  return typeof e == `string`;
}
function Qc(e) {
  return Number.isFinite(e);
}
function $c(e) {
  return e === null;
}
function el(e) {
  if ($c(e)) return 0;
  switch (e.type) {
    case `array`:
      return 1;
    case `boolean`:
      return 2;
    case `color`:
      return 3;
    case `date`:
      return 4;
    case `enum`:
      return 5;
    case `file`:
      return 6;
    case `responsiveimage`:
      return 10;
    case `link`:
      return 7;
    case `number`:
      return 8;
    case `object`:
      return 9;
    case `richtext`:
      return 11;
    case `string`:
      return 12;
    case `vectorsetitem`:
      return 13;
    default:
      Xc(e);
  }
}
function tl(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = ql.read(e);
    n.push(t);
  }
  return { type: `array`, value: n };
}
function nl(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) ql.write(e, n);
}
function rl(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = ql.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function il(e) {
  return { type: `boolean`, value: e.readUint8() !== 0 };
}
function al(e, t) {
  e.writeUint8(+!!t.value);
}
function ol(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function sl(e) {
  return { type: `color`, value: e.readString() };
}
function cl(e, t) {
  e.writeString(t.value);
}
function ll(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ul(e) {
  let t = e.readInt64();
  return { type: `date`, value: new Date(t).toISOString() };
}
function dl(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function fl(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function pl(e) {
  return { type: `enum`, value: e.readString() };
}
function ml(e, t) {
  e.writeString(t.value);
}
function hl(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function gl(e) {
  return { type: `file`, value: e.readString() };
}
function _l(e, t) {
  e.writeString(t.value);
}
function vl(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function yl(e) {
  return { type: `link`, value: e.readJson() };
}
function bl(e, t) {
  e.writeJson(t.value);
}
function xl(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Sl(e) {
  return { type: `number`, value: e.readFloat64() };
}
function Cl(e, t) {
  e.writeFloat64(t.value);
}
function wl(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Tl(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = ql.read(e);
  }
  return { type: `object`, value: n };
}
function El(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), ql.write(e, r));
}
function Dl(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = ql.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Ol(e) {
  return { type: `responsiveimage`, value: e.readJson() };
}
function kl(e, t) {
  e.writeJson(t.value);
}
function Al(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function jl(e) {
  let t = e.readInt8();
  if (t === 0) return { type: `richtext`, value: e.readUint32() };
  if (t === 1) return { type: `richtext`, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Ml(e, t) {
  if (Qc(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (Zc(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Nl(e, t) {
  let n = e.value,
    r = t.value;
  if ((Qc(n) && Qc(r)) || (Zc(n) && Zc(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function Pl(e) {
  return { type: `string`, value: e.readString() };
}
function Fl(e, t) {
  e.writeString(t.value);
}
function Il(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Ll(e) {
  return { type: `vectorsetitem`, value: e.readUint32() };
}
function Rl(e, t) {
  e.writeUint32(t.value);
}
function zl(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function Bl(e) {
  let t = Math.floor(fu * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function Vl(e, t) {
  let n = Ul(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await mu(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new hu(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function Hl(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function Ul(e) {
  $(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function Wl(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = ql.read(e);
  }
  return t;
}
function* Gl(e) {
  for (let t of e) yield* t.prioritySources;
}
var Kl,
  ql,
  Jl,
  Yl,
  Xl,
  Zl,
  Ql,
  $l,
  eu,
  tu,
  nu,
  ru,
  iu,
  au,
  ou,
  su,
  cu,
  lu,
  uu,
  du,
  fu,
  pu,
  mu,
  hu,
  gu,
  _u,
  vu = e(() => {
    (r(),
      M(),
      (Jl = Object.create),
      (Yl = Object.defineProperty),
      (Xl = Object.getOwnPropertyDescriptor),
      (Zl = Object.getOwnPropertyNames),
      (Ql = Object.getPrototypeOf),
      ($l = Object.prototype.hasOwnProperty),
      (eu = (e, t) =>
        function () {
          try {
            return (t || (0, e[Zl(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (tu = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of Zl(t))
            $l.call(e, i) ||
              i === n ||
              Yl(e, i, { get: () => t[i], enumerable: !(r = Xl(t, i)) || r.enumerable });
        return e;
      }),
      (nu = (e, t, n) => (
        (n = e == null ? {} : Jl(Ql(e))),
        tu(!t && e && e.__esModule ? n : Yl(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (ru = nu(
        eu({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (iu = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (au = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (ou =
        ((Kl = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = au.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = au.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = au.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = au.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = au.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = au.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = au.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = au.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = au.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = au.Float64;
            this.ensureLength(e);
            let t = this.view.getFloat64(this.offset);
            return ((this.offset += e), t);
          }
          readBytes(e) {
            let t = this.offset,
              n = t + e,
              r = this.bytes.subarray(t, n);
            return ((this.offset = n), r);
          }
          readString() {
            let t = this.readUint32(),
              n = this.readBytes(t);
            return e.textDecoder.decode(n);
          }
          readJson() {
            let e = this.readString();
            return JSON.parse(e);
          }
          constructor(e) {
            (Q(this, `bytes`, void 0),
              Q(this, `offset`, 0),
              Q(this, `view`, void 0),
              (this.bytes = e),
              (this.view = Yc(this.bytes)));
          }
        }),
        Q(Kl, `textDecoder`, new TextDecoder()),
        Kl)),
      c !== void 0 && c.requestIdleCallback,
      (su = (e) => 2 ** e - 1),
      (cu = (e) => -(2 ** (e - 1))),
      (lu = (e) => 2 ** (e - 1) - 1),
      cu(8),
      cu(16),
      cu(32),
      -(BigInt(2) ** BigInt(63)),
      su(8),
      su(16),
      su(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      lu(8),
      lu(16),
      lu(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (uu = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            $(Qc(n), `Invalid chunkId`),
            $(Qc(r), `Invalid offset`),
            $(Qc(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : ($(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (Q(this, `chunkId`, void 0),
            Q(this, `offset`, void 0),
            Q(this, `length`, void 0),
            (this.chunkId = e),
            (this.offset = t),
            (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return tl(e);
            case 2:
              return il(e);
            case 3:
              return sl(e);
            case 4:
              return ul(e);
            case 5:
              return pl(e);
            case 6:
              return gl(e);
            case 7:
              return yl(e);
            case 8:
              return Sl(e);
            case 9:
              return Tl(e);
            case 10:
              return Ol(e);
            case 11:
              return jl(e);
            case 12:
              return Pl(e);
            case 13:
              return Ll(e);
            default:
              Xc(t);
          }
        }),
          (e.write = function (e, t) {
            let n = el(t);
            if ((e.writeUint8(n), !$c(t)))
              switch (t.type) {
                case `array`:
                  return nl(e, t);
                case `boolean`:
                  return al(e, t);
                case `color`:
                  return cl(e, t);
                case `date`:
                  return dl(e, t);
                case `enum`:
                  return ml(e, t);
                case `file`:
                  return _l(e, t);
                case `link`:
                  return bl(e, t);
                case `number`:
                  return Cl(e, t);
                case `object`:
                  return El(e, t);
                case `responsiveimage`:
                  return kl(e, t);
                case `richtext`:
                  return Ml(e, t);
                case `vectorsetitem`:
                  return Rl(e, t);
                case `string`:
                  return Fl(e, t);
                default:
                  Xc(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = el(e),
              i = el(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if ($c(e) || $c(t)) return 0;
            switch (e.type) {
              case `array`:
                return ($(t.type === `array`), rl(e, t, n));
              case `boolean`:
                return ($(t.type === `boolean`), ol(e, t));
              case `color`:
                return ($(t.type === `color`), ll(e, t));
              case `date`:
                return ($(t.type === `date`), fl(e, t));
              case `enum`:
                return ($(t.type === `enum`), hl(e, t));
              case `file`:
                return ($(t.type === `file`), vl(e, t));
              case `link`:
                return ($(t.type === `link`), xl(e, t));
              case `number`:
                return ($(t.type === `number`), wl(e, t));
              case `object`:
                return ($(t.type === `object`), Dl(e, t, n));
              case `responsiveimage`:
                return ($(t.type === `responsiveimage`), Al(e, t));
              case `richtext`:
                return ($(t.type === `richtext`), Nl(e, t));
              case `vectorsetitem`:
                return ($(t.type === `vectorsetitem`), zl(e, t));
              case `string`:
                return ($(t.type === `string`), Il(e, t, n));
              default:
                Xc(e);
            }
          }));
      })((ql ||= {})),
      (du = 3),
      (fu = 250),
      (pu = [408, 429, 500, 502, 503, 504]),
      (mu = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!pu.includes(r.status) || ++n > du) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > du) throw e;
          }
          await Bl(n);
        }
      }),
      (hu = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if (($(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = Hl(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if (($(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = Hl(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          Q(this, `chunks`, []);
        }
      }),
      (gu = class {
        scanItems(e) {
          return (
            this.itemsPromise
              ? this.isScanning && e && this.scanPrioritySources.add(e)
              : ((this.isScanning = !0),
                e && this.scanPrioritySources.add(e),
                (this.itemsPromise = mu(this.url)
                  .then(async (e) => {
                    if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
                    let t = await e.arrayBuffer(),
                      n = new ou(new Uint8Array(t)),
                      r = [],
                      i = n.readUint32();
                    for (let e = 0; e < i; e++) {
                      let e = Jc(this.scanPrioritySources),
                        t = e ? Pe({ batch: !0, priority: e }) : void 0;
                      t && (await t);
                      let i = n.getOffset(),
                        a = Wl(n),
                        o = n.getOffset() - i,
                        s = new uu(this.id, i, o).toString(),
                        c = { pointer: s, data: a };
                      (this.itemLoader.prime({ pointer: s, prioritySources: new Set() }, c),
                        r.push(c));
                    }
                    return r;
                  })
                  .finally(() => {
                    ((this.isScanning = !1), this.scanPrioritySources.clear());
                  }))),
            this.itemsPromise
          );
        }
        resolveItem(e, t) {
          let n = this.itemPrioritySources.get(e);
          (n || ((n = new Set()), this.itemPrioritySources.set(e, n)), t && n.add(t));
          let r = this.itemLoader.load({ pointer: e, prioritySources: n }),
            i = () => this.itemPrioritySources.delete(e);
          return (r.then(i, i), r);
        }
        constructor(e, t) {
          (Q(this, `id`, void 0),
            Q(this, `url`, void 0),
            Q(this, `itemsPromise`, void 0),
            Q(this, `isScanning`, !1),
            Q(this, `scanPrioritySources`, new Set()),
            Q(this, `itemPrioritySources`, new Map()),
            Q(
              this,
              `itemLoader`,
              new ru.default(
                async (e) => {
                  let t = e.map(({ pointer: e }) => {
                      let t = uu.fromString(e);
                      return { from: t.offset, to: t.offset + t.length };
                    }),
                    n = await Vl(this.url, t),
                    r = [];
                  for (let t = 0; t < n.length; t++) {
                    let i = Jc(Gl(e)),
                      a = i ? Pe({ batch: !0, priority: i }) : void 0;
                    a && (await a);
                    let o = n[t];
                    $(o, `Missing range bytes`);
                    let s = Wl(new ou(o)),
                      c = e[t]?.pointer;
                    ($(c, `Missing pointer`), r.push({ pointer: c, data: s }));
                  }
                  return r;
                },
                { maxBatchSize: 250, cacheKeyFn: (e) => e.pointer }
              )
            ),
            (this.id = e),
            (this.url = t));
        }
      }),
      (_u = class {
        async scanItems(e) {
          return (await Promise.all(this.chunks.map(async (t) => t.scanItems(e)))).flat();
        }
        resolveItems(e, t) {
          return Promise.all(
            e.map((e) => {
              let n = uu.fromString(e),
                r = this.chunks[n.chunkId];
              return ($(r, `Missing chunk`), r.resolveItem(e, t));
            })
          );
        }
        compareItems(e, t) {
          let n = uu.fromString(e.pointer),
            r = uu.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return ql.compare(e, t, n);
        }
        constructor(e) {
          (Q(this, `options`, void 0),
            Q(this, `id`, void 0),
            Q(this, `schema`, void 0),
            Q(this, `indexes`, void 0),
            Q(this, `resolveRichText`, void 0),
            Q(this, `resolveVectorSetItem`, void 0),
            Q(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new gu(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function yu(e) {
  return typeof e == `object` && !!e && !v(e) && Eu in e;
}
function bu(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function xu(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    if (typeof i == `number`) {
      e[r] = n(i, t);
      continue;
    }
    Su(t, i, n);
  }
}
function Su(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? (e[t] = n(r, i)) : Su(i, r, n);
      }
      return;
    }
    typeof e != `object` || !e || Array.isArray(e) || xu(e, t, n);
  }
}
function Cu(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let i = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return m(s, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return m(ye, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a] = n;
          xu(i, a, (n, r) => {
            if (n === 1) return r && t(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (yu(i) && i.preload(), i) : r;
          });
          let o = e[r];
          return (
            bu(o, `Module not found`),
            yu(o) && o.preload(),
            y(ke, {
              componentIdentifier: r,
              children: (e) => y(Me, { component: o, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return m(e === `a` ? E.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, i), i);
  };
}
var wu,
  Tu,
  Eu,
  Du,
  Ou,
  ku = e(() => {
    (r(),
      S(),
      M(),
      w(),
      c !== void 0 && c.requestIdleCallback,
      (Eu = `preload`),
      (Du =
        (((wu = Du || {})[(wu.Fragment = 1)] = `Fragment`),
        (wu[(wu.Link = 2)] = `Link`),
        (wu[(wu.Module = 3)] = `Module`),
        (wu[(wu.Tag = 4)] = `Tag`),
        (wu[(wu.Text = 5)] = `Text`),
        wu)),
      (Ou =
        (((Tu = Ou || {})[(Tu.RichText = 1)] = `RichText`),
        (Tu[(Tu.VectorSetItem = 2)] = `VectorSetItem`),
        Tu)));
  }),
  Au,
  ju,
  Mu,
  Nu,
  Pu,
  Fu = e(() => {
    (M(),
      vu(),
      ku(),
      (Au = {
        amGxs7jw2: { isNullable: !0, type: I.Number },
        createdAt: { isNullable: !0, type: I.Date },
        dyIfVE2l5: { isNullable: !0, type: I.String },
        eUW1HV19w: { isNullable: !0, type: I.String },
        FftqP1jIz: { isNullable: !0, type: I.String },
        id: { isNullable: !1, type: I.String },
        IGoVWexWJ: { isNullable: !0, type: I.String },
        jtLccHAwQ: { isNullable: !0, type: I.String },
        KbwCWod77: { isNullable: !0, type: I.String },
        MRFa_J3kt: { isNullable: !0, type: I.String },
        nextItemId: { isNullable: !0, type: I.String },
        previousItemId: { isNullable: !0, type: I.String },
        pXwMxinr1: { isNullable: !0, type: I.String },
        ti8Mllzri: { isNullable: !0, type: I.String },
        tmFL_eCZD: { isNullable: !0, type: I.String },
        tV9cq8_jT: { isNullable: !0, type: I.String },
        UDxk3qMt3: { isNullable: !0, type: I.String },
        updatedAt: { isNullable: !0, type: I.Date },
        wLdCCqFhx: { isNullable: !0, type: I.String },
        YxgEOTUGe: { isNullable: !0, type: I.String },
      }),
      (ju = []),
      (Mu = (e) => {
        let t = ju[e];
        if (t) return t().then((e) => e.default);
      }),
      (Nu = Cu({})),
      new he(),
      (Pu = {
        collectionByLocaleId: {
          default: new _u({
            chunks: [
              new URL(
                `./um6wgwt7E-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/Art0D1gTT5wpDab2YkkV/32YUK1dk4FuF5iO4Q55F/um6wgwt7E.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `88e009a2-b8f8-437d-a839-4363163514a5default`,
            indexes: [],
            resolveRichText: Nu,
            resolveVectorSetItem: Mu,
            schema: Au,
          }),
        },
        displayName: `Site`,
        id: `88e009a2-b8f8-437d-a839-4363163514a5`,
      }),
      _e(Pu, {
        UDxk3qMt3: { preventLocalization: !1, title: `Slug`, type: I.String },
        YxgEOTUGe: { defaultValue: ``, title: `Name`, type: I.String },
        tmFL_eCZD: { defaultValue: ``, title: `Descriptor`, type: I.String },
        tV9cq8_jT: { defaultValue: ``, title: `Tagline`, type: I.String },
        pXwMxinr1: { defaultValue: ``, title: `Email`, type: I.String },
        wLdCCqFhx: { defaultValue: ``, title: `Phone`, type: I.String },
        KbwCWod77: { defaultValue: ``, title: `City`, type: I.String },
        IGoVWexWJ: { defaultValue: ``, title: `Time Zone`, type: I.String },
        FftqP1jIz: { defaultValue: ``, title: `Signup Link`, type: I.String },
        dyIfVE2l5: { defaultValue: ``, title: `Socials`, type: I.String },
        MRFa_J3kt: { defaultValue: ``, title: `Announcement`, type: I.String },
        ti8Mllzri: { defaultValue: ``, title: `Address`, type: I.String },
        jtLccHAwQ: { defaultValue: ``, title: `Hours`, type: I.String },
        eUW1HV19w: { defaultValue: ``, title: `Open Hours`, type: I.String },
        amGxs7jw2: { defaultValue: 0, title: `Order`, type: I.Number },
        createdAt: { title: `Created`, type: I.Date },
        updatedAt: { title: `Updated`, type: I.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/um6wgwt7E:default`,
          title: `Previous`,
          type: I.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/um6wgwt7E:default`,
          title: `Next`,
          type: I.CollectionReference,
        },
      }));
  }),
  Iu,
  Lu,
  Ru,
  zu,
  Bu,
  Vu,
  Hu,
  Uu,
  Wu,
  Gu,
  Ku,
  qu,
  Ju,
  Yu,
  Xu,
  Zu,
  Qu,
  $u,
  ed,
  td,
  nd,
  rd,
  id,
  ad,
  od,
  sd,
  cd,
  ld,
  ud,
  dd,
  fd,
  pd = e(() => {
    (S(),
      M(),
      ne(),
      w(),
      Ye(),
      Lt(),
      Dn(),
      Yn(),
      _r(),
      Sr(),
      fa(),
      Re(),
      Be(),
      He(),
      ts(),
      Gc(),
      We(),
      Fu(),
      Ge(),
      (Iu = Ce(Jt)),
      (Lu = Ce(Pn)),
      (Ru = Ce(nr)),
      (zu = Ce(br)),
      (Bu = Ce(R)),
      (Vu = Ce(dt)),
      (Hu = {
        fc869Tomn: `(min-width: 1200px)`,
        GBn81WlMo: `(max-width: 809.98px)`,
        VmVo9IokI: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (Uu = `framer-1TBC6`),
      (Wu = {
        fc869Tomn: `framer-v-1veo2b1`,
        GBn81WlMo: `framer-v-1e2wzxa`,
        VmVo9IokI: `framer-v-i5mzmj`,
      }),
      (Gu = () => ({
        from: { alias: `VpWxZ0vq_`, data: es, type: `Collection` },
        orderBy: [{ collection: `VpWxZ0vq_`, name: `X1kw4cktH`, type: `Identifier` }],
        select: [
          { collection: `VpWxZ0vq_`, name: `Mi6VpAFNz`, type: `Identifier` },
          { collection: `VpWxZ0vq_`, name: `XgwkBr3yG`, type: `Identifier` },
          { collection: `VpWxZ0vq_`, name: `l3GOtpCdm`, type: `Identifier` },
          { collection: `VpWxZ0vq_`, name: `LAzMxw8Vj`, type: `Identifier` },
          { collection: `VpWxZ0vq_`, name: `X1kw4cktH`, type: `Identifier` },
          { collection: `VpWxZ0vq_`, name: `id`, type: `Identifier` },
        ],
      })),
      (Ku = ({ query: e, pageSize: t, children: n }) => n(De(e))),
      (qu = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ju = () => ({
        from: { alias: `j2FhpVsww`, data: Ue, type: `Collection` },
        orderBy: [{ collection: `j2FhpVsww`, name: `MpXWY6yTF`, type: `Identifier` }],
        select: [
          { collection: `j2FhpVsww`, name: `lSwtK9xTL`, type: `Identifier` },
          { collection: `j2FhpVsww`, name: `RohWnRj_v`, type: `Identifier` },
          { collection: `j2FhpVsww`, name: `KAmabM7fp`, type: `Identifier` },
          { collection: `j2FhpVsww`, name: `DYoJJ7ujP`, type: `Identifier` },
          { collection: `j2FhpVsww`, name: `J0Dm9ztHK`, type: `Identifier` },
          { collection: `j2FhpVsww`, name: `F6HkgCYXH`, type: `Identifier` },
          { collection: `j2FhpVsww`, name: `rTbDHFSAJ`, type: `Identifier` },
          { collection: `j2FhpVsww`, name: `uAgzmCNOa`, type: `Identifier` },
          { collection: `j2FhpVsww`, name: `MpXWY6yTF`, type: `Identifier` },
          { collection: `j2FhpVsww`, name: `wch3HqaGt`, type: `Identifier` },
          { collection: `j2FhpVsww`, name: `id`, type: `Identifier` },
        ],
      })),
      (Yu = () => ({
        from: { alias: `ZSz9xCBPw`, data: da, type: `Collection` },
        orderBy: [{ collection: `ZSz9xCBPw`, name: `lesNXuiI6`, type: `Identifier` }],
        select: [
          { collection: `ZSz9xCBPw`, name: `Omng3EMVB`, type: `Identifier` },
          { collection: `ZSz9xCBPw`, name: `wnpvYCHY5`, type: `Identifier` },
          { collection: `ZSz9xCBPw`, name: `qtDbzJU0Y`, type: `Identifier` },
          { collection: `ZSz9xCBPw`, name: `MX3MjvNZ8`, type: `Identifier` },
          { collection: `ZSz9xCBPw`, name: `C7qAVoTaK`, type: `Identifier` },
          { collection: `ZSz9xCBPw`, name: `s9byjIxIy`, type: `Identifier` },
          { collection: `ZSz9xCBPw`, name: `lesNXuiI6`, type: `Identifier` },
          { collection: `ZSz9xCBPw`, name: `VbX6L3f2D`, type: `Identifier` },
          { collection: `ZSz9xCBPw`, name: `id`, type: `Identifier` },
        ],
      })),
      (Xu = () => ({
        from: { alias: `bxktZqamP`, data: Wc, type: `Collection` },
        orderBy: [{ collection: `bxktZqamP`, name: `C7F_gwBzx`, type: `Identifier` }],
        select: [
          { collection: `bxktZqamP`, name: `Lg9zshr1F`, type: `Identifier` },
          { collection: `bxktZqamP`, name: `hKCwQJp8Q`, type: `Identifier` },
          { collection: `bxktZqamP`, name: `LjnR4FGDs`, type: `Identifier` },
          { collection: `bxktZqamP`, name: `GzQkLWulm`, type: `Identifier` },
          { collection: `bxktZqamP`, name: `cdf8hj_TH`, type: `Identifier` },
          { collection: `bxktZqamP`, name: `nzzzZSmvL`, type: `Identifier` },
          { collection: `bxktZqamP`, name: `C7F_gwBzx`, type: `Identifier` },
          { collection: `bxktZqamP`, name: `id`, type: `Identifier` },
        ],
      })),
      (Zu = () => ({
        from: { alias: `yCoBLL6rg`, data: Le, type: `Collection` },
        orderBy: [{ collection: `yCoBLL6rg`, name: `PZixC3F1A`, type: `Identifier` }],
        select: [
          { collection: `yCoBLL6rg`, name: `ZDADCUIEj`, type: `Identifier` },
          { collection: `yCoBLL6rg`, name: `rg2xZmlCd`, type: `Identifier` },
          { collection: `yCoBLL6rg`, name: `AQqVW_qFu`, type: `Identifier` },
          { collection: `yCoBLL6rg`, name: `v1PqM355w`, type: `Identifier` },
          { collection: `yCoBLL6rg`, name: `NCP6vGIWR`, type: `Identifier` },
          { collection: `yCoBLL6rg`, name: `eXJgeSCVs`, type: `Identifier` },
          { collection: `yCoBLL6rg`, name: `Mo2XkLP_C`, type: `Identifier` },
          { collection: `yCoBLL6rg`, name: `RAW4BqV4q`, type: `Identifier` },
          { collection: `yCoBLL6rg`, name: `PZixC3F1A`, type: `Identifier` },
          { collection: `yCoBLL6rg`, name: `UNIEqb2g1`, type: `Identifier` },
          { collection: `yCoBLL6rg`, name: `id`, type: `Identifier` },
        ],
      })),
      (Qu = () => ({
        from: { alias: `eEHM6EGXK`, data: ze, type: `Collection` },
        orderBy: [{ collection: `eEHM6EGXK`, name: `UL7w7MTTN`, type: `Identifier` }],
        select: [
          { collection: `eEHM6EGXK`, name: `xKaH73n4V`, type: `Identifier` },
          { collection: `eEHM6EGXK`, name: `IQ_MQzQdG`, type: `Identifier` },
          { collection: `eEHM6EGXK`, name: `fn1aS67tZ`, type: `Identifier` },
          { collection: `eEHM6EGXK`, name: `DP95cJVaR`, type: `Identifier` },
          { collection: `eEHM6EGXK`, name: `P5_qc74WG`, type: `Identifier` },
          { collection: `eEHM6EGXK`, name: `qnIBjrfoC`, type: `Identifier` },
          { collection: `eEHM6EGXK`, name: `TpFConvPp`, type: `Identifier` },
          { collection: `eEHM6EGXK`, name: `qzsDlgwzc`, type: `Identifier` },
          { collection: `eEHM6EGXK`, name: `I3T80yNkY`, type: `Identifier` },
          { collection: `eEHM6EGXK`, name: `UL7w7MTTN`, type: `Identifier` },
          { collection: `eEHM6EGXK`, name: `u7bdxjp8_`, type: `Identifier` },
          { collection: `eEHM6EGXK`, name: `id`, type: `Identifier` },
        ],
      })),
      ($u = () => ({
        from: { alias: `lvqpzaizr`, data: Ve, type: `Collection` },
        orderBy: [{ collection: `lvqpzaizr`, name: `n9kEuPAvU`, type: `Identifier` }],
        select: [
          { collection: `lvqpzaizr`, name: `AP6SQ8Q5U`, type: `Identifier` },
          { collection: `lvqpzaizr`, name: `C8c1w1cSh`, type: `Identifier` },
          { collection: `lvqpzaizr`, name: `iGeNNVO7b`, type: `Identifier` },
          { collection: `lvqpzaizr`, name: `Gizox_2MS`, type: `Identifier` },
          { collection: `lvqpzaizr`, name: `aEVze8YUU`, type: `Identifier` },
          { collection: `lvqpzaizr`, name: `n9kEuPAvU`, type: `Identifier` },
          { collection: `lvqpzaizr`, name: `RAwOabbcB`, type: `Identifier` },
          { collection: `lvqpzaizr`, name: `id`, type: `Identifier` },
        ],
      })),
      (ed = () => ({
        from: { alias: `liRyz9tWl`, data: Ke, type: `Collection` },
        orderBy: [{ collection: `liRyz9tWl`, name: `IhNgvTLiS`, type: `Identifier` }],
        select: [
          { collection: `liRyz9tWl`, name: `A70ozZl1g`, type: `Identifier` },
          { collection: `liRyz9tWl`, name: `zoxXo_JIg`, type: `Identifier` },
          { collection: `liRyz9tWl`, name: `KSEpZvb8y`, type: `Identifier` },
          { collection: `liRyz9tWl`, name: `TAHF0QRkE`, type: `Identifier` },
          { collection: `liRyz9tWl`, name: `z2mEMYbh4`, type: `Identifier` },
          { collection: `liRyz9tWl`, name: `sr9LL5J65`, type: `Identifier` },
          { collection: `liRyz9tWl`, name: `pOJwH5Nva`, type: `Identifier` },
          { collection: `liRyz9tWl`, name: `Yn9105kWk`, type: `Identifier` },
          { collection: `liRyz9tWl`, name: `vOPZN5OMy`, type: `Identifier` },
          { collection: `liRyz9tWl`, name: `MmHf8TuPR`, type: `Identifier` },
          { collection: `liRyz9tWl`, name: `pXFdl6DWJ`, type: `Identifier` },
          { collection: `liRyz9tWl`, name: `WNVBRxOf5`, type: `Identifier` },
          { collection: `liRyz9tWl`, name: `O31cZ1uPz`, type: `Identifier` },
          { collection: `liRyz9tWl`, name: `ZqPcvYc0g`, type: `Identifier` },
          { collection: `liRyz9tWl`, name: `IhNgvTLiS`, type: `Identifier` },
          { collection: `liRyz9tWl`, name: `aOvwD_1Et`, type: `Identifier` },
          { collection: `liRyz9tWl`, name: `id`, type: `Identifier` },
        ],
      })),
      (td = () => ({
        from: { alias: `PG11dVvsq`, data: Pu, type: `Collection` },
        orderBy: [{ collection: `PG11dVvsq`, name: `amGxs7jw2`, type: `Identifier` }],
        select: [
          { collection: `PG11dVvsq`, name: `UDxk3qMt3`, type: `Identifier` },
          { collection: `PG11dVvsq`, name: `YxgEOTUGe`, type: `Identifier` },
          { collection: `PG11dVvsq`, name: `tmFL_eCZD`, type: `Identifier` },
          { collection: `PG11dVvsq`, name: `tV9cq8_jT`, type: `Identifier` },
          { collection: `PG11dVvsq`, name: `pXwMxinr1`, type: `Identifier` },
          { collection: `PG11dVvsq`, name: `wLdCCqFhx`, type: `Identifier` },
          { collection: `PG11dVvsq`, name: `KbwCWod77`, type: `Identifier` },
          { collection: `PG11dVvsq`, name: `IGoVWexWJ`, type: `Identifier` },
          { collection: `PG11dVvsq`, name: `FftqP1jIz`, type: `Identifier` },
          { collection: `PG11dVvsq`, name: `dyIfVE2l5`, type: `Identifier` },
          { collection: `PG11dVvsq`, name: `MRFa_J3kt`, type: `Identifier` },
          { collection: `PG11dVvsq`, name: `ti8Mllzri`, type: `Identifier` },
          { collection: `PG11dVvsq`, name: `jtLccHAwQ`, type: `Identifier` },
          { collection: `PG11dVvsq`, name: `eUW1HV19w`, type: `Identifier` },
          { collection: `PG11dVvsq`, name: `amGxs7jw2`, type: `Identifier` },
          { collection: `PG11dVvsq`, name: `id`, type: `Identifier` },
        ],
      })),
      (nd = {
        GBn81WlMo: [
          `.framer-1TBC6 .framer-jkk61q, .framer-1TBC6 .framer-1rou6kr, .framer-1TBC6 .framer-ocqpkz, .framer-1TBC6 .framer-nmdbeo, .framer-1TBC6 .framer-1od2bvy, .framer-1TBC6 .framer-95h2r6, .framer-1TBC6 .framer-1o9goe2, .framer-1TBC6 .framer-1n9zi94, .framer-1TBC6 .framer-1xsku83 { right: 0px; width: unset; }`,
        ],
        VmVo9IokI: [
          `.framer-1TBC6 .framer-jkk61q, .framer-1TBC6 .framer-1rou6kr, .framer-1TBC6 .framer-ocqpkz, .framer-1TBC6 .framer-nmdbeo, .framer-1TBC6 .framer-1od2bvy, .framer-1TBC6 .framer-95h2r6, .framer-1TBC6 .framer-1o9goe2, .framer-1TBC6 .framer-1n9zi94, .framer-1TBC6 .framer-1xsku83 { right: 0px; width: unset; }`,
        ],
      }),
      (rd = Object.keys(nd)),
      (id = { GBn81WlMo: `.framer-1e2wzxa-override`, VmVo9IokI: `.framer-i5mzmj-override` }),
      (ad = [
        `.framer-1TBC6.framer-1qhr603, .framer-1TBC6 .framer-1qhr603 { display: block; }`,
        `.framer-1TBC6.framer-1veo2b1 { align-content: center; align-items: center; background-color: var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1TBC6 .framer-1ygoc8d { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 0px; justify-content: flex-start; order: -1000; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1TBC6 .framer-pdkeib-container, .framer-1TBC6 .framer-473q64-container, .framer-1TBC6 .framer-1ccyi5a-container, .framer-1TBC6 .framer-xz3jui-container { flex: none; height: 0px; position: relative; width: 100%; }`,
        `.framer-1TBC6 .framer-ntrnsa { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 0px; justify-content: flex-start; order: -999; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1TBC6 .framer-dkx36g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 0px; justify-content: flex-start; order: -998; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1TBC6 .framer-1qaor8c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 0px; justify-content: flex-start; order: -997; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1TBC6 .framer-jkk61q { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; left: 0px; order: -996; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 1px; }`,
        `.framer-1TBC6 .framer-e8ov6m, .framer-1TBC6 .framer-1eonzly, .framer-1TBC6 .framer-zlclv0, .framer-1TBC6 .framer-1fv4dnf, .framer-1TBC6 .framer-1fz20rr, .framer-1TBC6 .framer-rb2w7o, .framer-1TBC6 .framer-h1tn9a, .framer-1TBC6 .framer-8v8feg, .framer-1TBC6 .framer-1jfu2d7 { flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
        `.framer-1TBC6 .framer-r1llpi-container, .framer-1TBC6 .framer-1scnwvv-container, .framer-1TBC6 .framer-k2sc85-container, .framer-1TBC6 .framer-1699f6m-container, .framer-1TBC6 .framer-8ulzr3-container, .framer-1TBC6 .framer-112fcky-container, .framer-1TBC6 .framer-8pjpm0-container, .framer-1TBC6 .framer-15aud3i-container, .framer-1TBC6 .framer-deg5zk-container { flex: none; height: 1px; left: calc(2.220446049250313e-14% - 1px / 2); position: absolute; top: calc(2.220446049250313e-14% - 1px / 2); width: 1px; }`,
        `.framer-1TBC6 .framer-1rou6kr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; left: 0px; order: -995; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 1px; }`,
        `.framer-1TBC6 .framer-ocqpkz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; left: 0px; order: -994; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 1px; }`,
        `.framer-1TBC6 .framer-nmdbeo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; left: 0px; order: -993; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 1px; }`,
        `.framer-1TBC6 .framer-1od2bvy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; left: 0px; order: -992; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 1px; }`,
        `.framer-1TBC6 .framer-95h2r6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; left: 0px; order: -991; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 1px; }`,
        `.framer-1TBC6 .framer-1o9goe2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; left: 0px; order: -990; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 1px; }`,
        `.framer-1TBC6 .framer-1n9zi94 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; left: 0px; order: -989; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 1px; }`,
        `.framer-1TBC6 .framer-1xsku83 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; left: 0px; order: -988; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 1px; }`,
        `.framer-1TBC6 .framer-9iv65w-container { flex: none; height: 1px; left: 0px; order: -987; position: absolute; top: 0px; width: 1px; }`,
        `.framer-1TBC6 .framer-17h4c4l { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-1TBC6 .framer-gupg4g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; order: 1015; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-1TBC6 .framer-w0twtf-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (od = {
        fc869Tomn: `(min-width: 1200px)`,
        GBn81WlMo: `(max-width: 809.98px)`,
        VmVo9IokI: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (sd = { Desktop: `fc869Tomn`, Phone: `GBn81WlMo`, Tablet: `VmVo9IokI` }),
      (cd = ({ value: e }) =>
        ce()
          ? null
          : y(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (ld = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: sd[r.variant] ?? r.variant ?? `fc869Tomn`,
      })),
      (ud = b(function (e, n) {
        let r = f(null),
          i = n ?? r,
          a = t(),
          { activeLocale: o, setLocale: s } = be(),
          { style: c, className: l, layoutId: u, variant: d, children: m, ...h } = ld(e),
          [g, ee] = me(d, Hu, !1),
          v = re(Uu);
        return (
          fe({}),
          y(ve.Provider, {
            value: {
              activeVariantId: g,
              humanReadableVariantMap: sd,
              isLayoutTemplate: !0,
              primaryVariantId: `fc869Tomn`,
              variantClassNames: Wu,
            },
            children: _(D, {
              id: u ?? a,
              children: [
                y(cd, {
                  value: `:root body { background: var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5); }`,
                }),
                _(E.div, {
                  ...h,
                  className: re(v, `framer-1veo2b1`, l),
                  "data-layout-template": !0,
                  ref: i,
                  style: { ...c },
                  children: [
                    y(E.div, {
                      className: `framer-1ygoc8d`,
                      "data-framer-name": `① HEADER — links, products drawer, cart, phone menu, site-wide fonts`,
                      children: y(P, {
                        children: y(N, {
                          className: `framer-pdkeib-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsHeader`,
                          isAuthoredByUser: !0,
                          name: `DsHeader`,
                          nodeId: `FM5bOZSMO`,
                          scopeId: `FJ4uV8_M0`,
                          children: y(xe, {
                            breakpoint: g,
                            overrides: {
                              GBn81WlMo: { bpHint: `phone` },
                              VmVo9IokI: { bpHint: `tablet` },
                            },
                            children: y(Jt, {
                              aislesLabel: `Aisles`,
                              allLabel: `All products`,
                              allLink: `/products`,
                              bodyFont: {
                                fontFamily: `"Work Sans", "Work Sans Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              cartCheckout: `Checkout`,
                              cartContinue: `Keep browsing`,
                              cartEmpty: `Nothing on the counter yet.`,
                              cartLabel: `Cart`,
                              cartNote: `Instant download after checkout. Files stay in your account.`,
                              cartRemove: `Remove`,
                              cartTitle: `Your cart`,
                              checkoutLink: `/checkout`,
                              closeLabel: `Close`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              cta: `Free guide`,
                              ctaLink: `/free`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Playfair Display", "Playfair Display Placeholder", serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              drawerLabel: `Shop the shelf`,
                              featuredLabel: `Featured this week`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              freeButton: `Get the guide`,
                              freeCopy: `Forty pages on pricing digital products. One email, the file.`,
                              freeLink: `/free`,
                              freeTitle: `The pricing guide, free`,
                              height: `100%`,
                              id: `FM5bOZSMO`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `FM5bOZSMO`,
                              links: `Products:/products, Bundles:/bundles, Courses:/courses, Notes:/notes, About:/about`,
                              menuLabel: `Menu`,
                              monoFont: {
                                fontFamily: `"Space Mono", "Space Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsHeader`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              showCart: !0,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { height: `100%`, width: `100%` },
                              subtotalLabel: `Subtotal`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    y(E.div, {
                      className: `framer-ntrnsa`,
                      "data-framer-name": `L DsLoader — stocking the shelf, once per session`,
                      children: y(P, {
                        children: y(N, {
                          className: `framer-473q64-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsLoader`,
                          isAuthoredByUser: !0,
                          name: `DsLoader`,
                          nodeId: `vov_lh2Yi`,
                          scopeId: `FJ4uV8_M0`,
                          children: y(xe, {
                            breakpoint: g,
                            overrides: {
                              GBn81WlMo: { bpHint: `phone` },
                              VmVo9IokI: { bpHint: `tablet` },
                            },
                            children: y(Pn, {
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
                              doneLabel: `Open`,
                              duration: 2.6,
                              enabled: !0,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              height: `100%`,
                              id: `vov_lh2Yi`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `vov_lh2Yi`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsLoader`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              once: !0,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              respectRm: !0,
                              statusLabel: `Stocking the shelf`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    y(E.div, {
                      className: `framer-dkx36g`,
                      "data-framer-name": `L DsPageTrans — the tag`,
                      children: y(P, {
                        children: y(N, {
                          className: `framer-1ccyi5a-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsPageTrans`,
                          isAuthoredByUser: !0,
                          name: `DsPageTrans`,
                          nodeId: `HRL_q7FCu`,
                          scopeId: `FJ4uV8_M0`,
                          children: y(xe, {
                            breakpoint: g,
                            overrides: {
                              GBn81WlMo: { bpHint: `phone` },
                              VmVo9IokI: { bpHint: `tablet` },
                            },
                            children: y(nr, {
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
                              duration: 0.8,
                              enabled: !0,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              height: `100%`,
                              homeName: `Home`,
                              id: `HRL_q7FCu`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `HRL_q7FCu`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsPageTrans`,
                              nextLabel: `Next aisle`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              respectRm: !0,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    y(E.div, {
                      className: `framer-1qaor8c`,
                      "data-framer-name": `Smooth scroll (keep)`,
                      children: y(P, {
                        children: y(N, {
                          className: `framer-xz3jui-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsSmooth`,
                          isAuthoredByUser: !0,
                          name: `DsSmooth`,
                          nodeId: `wy4pCK43b`,
                          scopeId: `FJ4uV8_M0`,
                          children: y(br, {
                            anchorOffset: 72,
                            height: `100%`,
                            id: `wy4pCK43b`,
                            layoutId: `wy4pCK43b`,
                            name: `DsSmooth`,
                            smoothness: 0.1,
                            style: { height: `100%`, width: `100%` },
                            wheelSpeed: 1,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    y(E.div, {
                      className: `framer-jkk61q`,
                      "data-framer-name": `CMS Bridge · faq (keep)`,
                      children: y(F, {
                        children: y(Ku, {
                          query: Gu(),
                          children: (e, t, n) =>
                            y(p, {
                              children: e?.map(
                                (
                                  {
                                    id: e,
                                    l3GOtpCdm: t,
                                    LAzMxw8Vj: n,
                                    Mi6VpAFNz: r,
                                    X1kw4cktH: i,
                                    XgwkBr3yG: a,
                                  },
                                  o
                                ) => (
                                  (r ??= ``),
                                  (a ??= ``),
                                  (t ??= ``),
                                  (n ??= ``),
                                  (i ??= 0),
                                  y(
                                    D,
                                    {
                                      id: `VpWxZ0vq_-${e}`,
                                      children: y(Se.Provider, {
                                        value: { Mi6VpAFNz: r },
                                        children: y(`div`, {
                                          className: `framer-e8ov6m`,
                                          "data-framer-name": `faq-item`,
                                          children: y(P, {
                                            children: y(N, {
                                              className: `framer-r1llpi-container`,
                                              "data-code-component-plugin-id": `api`,
                                              "data-framer-name": `faq-row`,
                                              isAuthoredByUser: !0,
                                              name: `faq-row`,
                                              nodeId: `dRisaceC1`,
                                              scopeId: `FJ4uV8_M0`,
                                              children: y(R, {
                                                f1: a,
                                                f10: ``,
                                                f11: ``,
                                                f12: ``,
                                                f13: ``,
                                                f14: ``,
                                                f15: ``,
                                                f16: ``,
                                                f2: t,
                                                f3: n,
                                                f4: ``,
                                                f5: ``,
                                                f6: ``,
                                                f7: ``,
                                                f8: ``,
                                                f9: ``,
                                                height: `100%`,
                                                id: `dRisaceC1`,
                                                kind: `faq`,
                                                layoutId: `dRisaceC1`,
                                                n1: i,
                                                n2: 0,
                                                name: `faq-row`,
                                                slug: r,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    },
                                    e
                                  )
                                )
                              ),
                            }),
                        }),
                      }),
                    }),
                    y(E.div, {
                      className: `framer-1rou6kr`,
                      "data-framer-name": `CMS Bridge · posts (keep)`,
                      children: y(F, {
                        children: y(Ku, {
                          query: Ju(),
                          children: (e, t, n) =>
                            y(p, {
                              children: e?.map(
                                (
                                  {
                                    DYoJJ7ujP: e,
                                    F6HkgCYXH: t,
                                    id: n,
                                    J0Dm9ztHK: r,
                                    KAmabM7fp: i,
                                    lSwtK9xTL: a,
                                    MpXWY6yTF: o,
                                    RohWnRj_v: s,
                                    rTbDHFSAJ: c,
                                    uAgzmCNOa: l,
                                    wch3HqaGt: u,
                                  },
                                  d
                                ) => (
                                  (a ??= ``),
                                  (s ??= ``),
                                  (i ??= ``),
                                  (e ??= ``),
                                  (r ??= ``),
                                  (t ??= ``),
                                  (c ??= ``),
                                  (l ??= ``),
                                  (o ??= 0),
                                  y(
                                    D,
                                    {
                                      id: `j2FhpVsww-${n}`,
                                      children: y(Se.Provider, {
                                        value: { lSwtK9xTL: a },
                                        children: y(`div`, {
                                          className: `framer-1eonzly`,
                                          "data-framer-name": `posts-item`,
                                          children: y(P, {
                                            children: y(N, {
                                              className: `framer-1scnwvv-container`,
                                              "data-code-component-plugin-id": `api`,
                                              "data-framer-name": `posts-row`,
                                              isAuthoredByUser: !0,
                                              name: `posts-row`,
                                              nodeId: `xAQtgEXKs`,
                                              scopeId: `FJ4uV8_M0`,
                                              children: y(R, {
                                                f1: s,
                                                f10: ``,
                                                f11: ``,
                                                f12: ``,
                                                f13: ``,
                                                f14: ``,
                                                f15: ``,
                                                f16: ``,
                                                f2: i,
                                                f3: e,
                                                f4: r,
                                                f5: t,
                                                f6: c,
                                                f7: l,
                                                f8: ``,
                                                f9: ``,
                                                height: `100%`,
                                                id: `xAQtgEXKs`,
                                                img: qu(u),
                                                kind: `posts`,
                                                layoutId: `xAQtgEXKs`,
                                                n1: o,
                                                n2: 0,
                                                name: `posts-row`,
                                                slug: a,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    },
                                    n
                                  )
                                )
                              ),
                            }),
                        }),
                      }),
                    }),
                    y(E.div, {
                      className: `framer-ocqpkz`,
                      "data-framer-name": `CMS Bridge · reviews (keep)`,
                      children: y(F, {
                        children: y(Ku, {
                          query: Yu(),
                          children: (e, t, n) =>
                            y(p, {
                              children: e?.map(
                                (
                                  {
                                    C7qAVoTaK: e,
                                    id: t,
                                    lesNXuiI6: n,
                                    MX3MjvNZ8: r,
                                    Omng3EMVB: i,
                                    qtDbzJU0Y: a,
                                    s9byjIxIy: o,
                                    VbX6L3f2D: s,
                                    wnpvYCHY5: c,
                                  },
                                  l
                                ) => (
                                  (i ??= ``),
                                  (c ??= ``),
                                  (a ??= ``),
                                  (r ??= ``),
                                  (e ??= ``),
                                  (o ??= ``),
                                  (n ??= 0),
                                  y(
                                    D,
                                    {
                                      id: `ZSz9xCBPw-${t}`,
                                      children: y(Se.Provider, {
                                        value: { Omng3EMVB: i },
                                        children: y(`div`, {
                                          className: `framer-zlclv0`,
                                          "data-framer-name": `reviews-item`,
                                          children: y(P, {
                                            children: y(N, {
                                              className: `framer-k2sc85-container`,
                                              "data-code-component-plugin-id": `api`,
                                              "data-framer-name": `reviews-row`,
                                              isAuthoredByUser: !0,
                                              name: `reviews-row`,
                                              nodeId: `eLz0AM75o`,
                                              scopeId: `FJ4uV8_M0`,
                                              children: y(R, {
                                                f1: c,
                                                f10: ``,
                                                f11: ``,
                                                f12: ``,
                                                f13: ``,
                                                f14: ``,
                                                f15: ``,
                                                f16: ``,
                                                f2: a,
                                                f3: r,
                                                f4: e,
                                                f5: o,
                                                f6: ``,
                                                f7: ``,
                                                f8: ``,
                                                f9: ``,
                                                height: `100%`,
                                                id: `eLz0AM75o`,
                                                img: qu(s),
                                                kind: `reviews`,
                                                layoutId: `eLz0AM75o`,
                                                n1: n,
                                                n2: 0,
                                                name: `reviews-row`,
                                                slug: i,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    },
                                    t
                                  )
                                )
                              ),
                            }),
                        }),
                      }),
                    }),
                    y(E.div, {
                      className: `framer-nmdbeo`,
                      "data-framer-name": `CMS Bridge · lessons (keep)`,
                      children: y(F, {
                        children: y(Ku, {
                          query: Xu(),
                          children: (e, t, n) =>
                            y(p, {
                              children: e?.map(
                                (
                                  {
                                    C7F_gwBzx: e,
                                    cdf8hj_TH: t,
                                    GzQkLWulm: n,
                                    hKCwQJp8Q: r,
                                    id: i,
                                    Lg9zshr1F: a,
                                    LjnR4FGDs: o,
                                    nzzzZSmvL: s,
                                  },
                                  c
                                ) => (
                                  (a ??= ``),
                                  (r ??= ``),
                                  (o ??= ``),
                                  (n ??= ``),
                                  (t ??= ``),
                                  (s ??= ``),
                                  (e ??= 0),
                                  y(
                                    D,
                                    {
                                      id: `bxktZqamP-${i}`,
                                      children: y(Se.Provider, {
                                        value: { Lg9zshr1F: a },
                                        children: y(`div`, {
                                          className: `framer-1fv4dnf`,
                                          "data-framer-name": `lessons-item`,
                                          children: y(P, {
                                            children: y(N, {
                                              className: `framer-1699f6m-container`,
                                              "data-code-component-plugin-id": `api`,
                                              "data-framer-name": `lessons-row`,
                                              isAuthoredByUser: !0,
                                              name: `lessons-row`,
                                              nodeId: `CfyamJRYS`,
                                              scopeId: `FJ4uV8_M0`,
                                              children: y(R, {
                                                f1: r,
                                                f10: ``,
                                                f11: ``,
                                                f12: ``,
                                                f13: ``,
                                                f14: ``,
                                                f15: ``,
                                                f16: ``,
                                                f2: o,
                                                f3: n,
                                                f4: t,
                                                f5: s,
                                                f6: ``,
                                                f7: ``,
                                                f8: ``,
                                                f9: ``,
                                                height: `100%`,
                                                id: `CfyamJRYS`,
                                                kind: `lessons`,
                                                layoutId: `CfyamJRYS`,
                                                n1: e,
                                                n2: 0,
                                                name: `lessons-row`,
                                                slug: a,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    },
                                    i
                                  )
                                )
                              ),
                            }),
                        }),
                      }),
                    }),
                    y(E.div, {
                      className: `framer-1od2bvy`,
                      "data-framer-name": `CMS Bridge · courses (keep)`,
                      children: y(F, {
                        children: y(Ku, {
                          query: Zu(),
                          children: (e, t, n) =>
                            y(p, {
                              children: e?.map(
                                (
                                  {
                                    AQqVW_qFu: e,
                                    eXJgeSCVs: t,
                                    id: n,
                                    Mo2XkLP_C: r,
                                    NCP6vGIWR: i,
                                    PZixC3F1A: a,
                                    RAW4BqV4q: o,
                                    rg2xZmlCd: s,
                                    UNIEqb2g1: c,
                                    v1PqM355w: l,
                                    ZDADCUIEj: u,
                                  },
                                  d
                                ) => (
                                  (u ??= ``),
                                  (s ??= ``),
                                  (e ??= ``),
                                  (l ??= ``),
                                  (i ??= ``),
                                  (t ??= ``),
                                  (r ??= ``),
                                  (o ??= ``),
                                  (a ??= 0),
                                  y(
                                    D,
                                    {
                                      id: `yCoBLL6rg-${n}`,
                                      children: y(Se.Provider, {
                                        value: { ZDADCUIEj: u },
                                        children: y(`div`, {
                                          className: `framer-1fz20rr`,
                                          "data-framer-name": `courses-item`,
                                          children: y(P, {
                                            children: y(N, {
                                              className: `framer-8ulzr3-container`,
                                              "data-code-component-plugin-id": `api`,
                                              "data-framer-name": `courses-row`,
                                              isAuthoredByUser: !0,
                                              name: `courses-row`,
                                              nodeId: `Znsg1Tt9G`,
                                              scopeId: `FJ4uV8_M0`,
                                              children: y(R, {
                                                f1: s,
                                                f10: ``,
                                                f11: ``,
                                                f12: ``,
                                                f13: ``,
                                                f14: ``,
                                                f15: ``,
                                                f16: ``,
                                                f2: e,
                                                f3: l,
                                                f4: i,
                                                f5: t,
                                                f6: r,
                                                f7: o,
                                                f8: ``,
                                                f9: ``,
                                                height: `100%`,
                                                id: `Znsg1Tt9G`,
                                                img: qu(c),
                                                kind: `courses`,
                                                layoutId: `Znsg1Tt9G`,
                                                n1: a,
                                                n2: 0,
                                                name: `courses-row`,
                                                slug: u,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    },
                                    n
                                  )
                                )
                              ),
                            }),
                        }),
                      }),
                    }),
                    y(E.div, {
                      className: `framer-95h2r6`,
                      "data-framer-name": `CMS Bridge · bundles (keep)`,
                      children: y(F, {
                        children: y(Ku, {
                          query: Qu(),
                          children: (e, t, n) =>
                            y(p, {
                              children: e?.map(
                                (
                                  {
                                    DP95cJVaR: e,
                                    fn1aS67tZ: t,
                                    I3T80yNkY: n,
                                    id: r,
                                    IQ_MQzQdG: i,
                                    P5_qc74WG: a,
                                    qnIBjrfoC: o,
                                    qzsDlgwzc: s,
                                    TpFConvPp: c,
                                    u7bdxjp8_: l,
                                    UL7w7MTTN: u,
                                    xKaH73n4V: d,
                                  },
                                  f
                                ) => (
                                  (d ??= ``),
                                  (i ??= ``),
                                  (t ??= ``),
                                  (e ??= ``),
                                  (a ??= ``),
                                  (o ??= ``),
                                  (c ??= ``),
                                  (s ??= ``),
                                  (n ??= ``),
                                  (u ??= 0),
                                  y(
                                    D,
                                    {
                                      id: `eEHM6EGXK-${r}`,
                                      children: y(Se.Provider, {
                                        value: { xKaH73n4V: d },
                                        children: y(`div`, {
                                          className: `framer-rb2w7o`,
                                          "data-framer-name": `bundles-item`,
                                          children: y(P, {
                                            children: y(N, {
                                              className: `framer-112fcky-container`,
                                              "data-code-component-plugin-id": `api`,
                                              "data-framer-name": `bundles-row`,
                                              isAuthoredByUser: !0,
                                              name: `bundles-row`,
                                              nodeId: `Bbk_1N26b`,
                                              scopeId: `FJ4uV8_M0`,
                                              children: y(R, {
                                                f1: i,
                                                f10: ``,
                                                f11: ``,
                                                f12: ``,
                                                f13: ``,
                                                f14: ``,
                                                f15: ``,
                                                f16: ``,
                                                f2: t,
                                                f3: e,
                                                f4: a,
                                                f5: o,
                                                f6: c,
                                                f7: s,
                                                f8: n,
                                                f9: ``,
                                                height: `100%`,
                                                id: `Bbk_1N26b`,
                                                img: qu(l),
                                                kind: `bundles`,
                                                layoutId: `Bbk_1N26b`,
                                                n1: u,
                                                n2: 0,
                                                name: `bundles-row`,
                                                slug: d,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    },
                                    r
                                  )
                                )
                              ),
                            }),
                        }),
                      }),
                    }),
                    y(E.div, {
                      className: `framer-1o9goe2`,
                      "data-framer-name": `CMS Bridge · types (keep)`,
                      children: y(F, {
                        children: y(Ku, {
                          query: $u(),
                          children: (e, t, n) =>
                            y(p, {
                              children: e?.map(
                                (
                                  {
                                    aEVze8YUU: e,
                                    AP6SQ8Q5U: t,
                                    C8c1w1cSh: n,
                                    Gizox_2MS: r,
                                    id: i,
                                    iGeNNVO7b: a,
                                    n9kEuPAvU: o,
                                    RAwOabbcB: s,
                                  },
                                  c
                                ) => (
                                  (t ??= ``),
                                  (n ??= ``),
                                  (a ??= ``),
                                  (r ??= ``),
                                  (e ??= ``),
                                  (o ??= 0),
                                  y(
                                    D,
                                    {
                                      id: `lvqpzaizr-${i}`,
                                      children: y(Se.Provider, {
                                        value: { AP6SQ8Q5U: t },
                                        children: y(`div`, {
                                          className: `framer-h1tn9a`,
                                          "data-framer-name": `types-item`,
                                          children: y(P, {
                                            children: y(N, {
                                              className: `framer-8pjpm0-container`,
                                              "data-code-component-plugin-id": `api`,
                                              "data-framer-name": `types-row`,
                                              isAuthoredByUser: !0,
                                              name: `types-row`,
                                              nodeId: `MwyFSxTkl`,
                                              scopeId: `FJ4uV8_M0`,
                                              children: y(R, {
                                                f1: n,
                                                f10: ``,
                                                f11: ``,
                                                f12: ``,
                                                f13: ``,
                                                f14: ``,
                                                f15: ``,
                                                f16: ``,
                                                f2: a,
                                                f3: r,
                                                f4: e,
                                                f5: ``,
                                                f6: ``,
                                                f7: ``,
                                                f8: ``,
                                                f9: ``,
                                                height: `100%`,
                                                id: `MwyFSxTkl`,
                                                img: qu(s),
                                                kind: `types`,
                                                layoutId: `MwyFSxTkl`,
                                                n1: o,
                                                n2: 0,
                                                name: `types-row`,
                                                slug: t,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    },
                                    i
                                  )
                                )
                              ),
                            }),
                        }),
                      }),
                    }),
                    y(E.div, {
                      className: `framer-1n9zi94`,
                      "data-framer-name": `CMS Bridge · products (keep)`,
                      children: y(F, {
                        children: y(Ku, {
                          query: ed(),
                          children: (e, t, n) =>
                            y(p, {
                              children: e?.map(
                                (
                                  {
                                    A70ozZl1g: e,
                                    aOvwD_1Et: t,
                                    id: n,
                                    IhNgvTLiS: r,
                                    KSEpZvb8y: i,
                                    MmHf8TuPR: a,
                                    O31cZ1uPz: o,
                                    pOJwH5Nva: s,
                                    pXFdl6DWJ: c,
                                    sr9LL5J65: l,
                                    TAHF0QRkE: u,
                                    vOPZN5OMy: d,
                                    WNVBRxOf5: f,
                                    Yn9105kWk: p,
                                    z2mEMYbh4: m,
                                    zoxXo_JIg: h,
                                    ZqPcvYc0g: g,
                                  },
                                  ee
                                ) => (
                                  (e ??= ``),
                                  (h ??= ``),
                                  (i ??= ``),
                                  (u ??= ``),
                                  (m ??= ``),
                                  (l ??= ``),
                                  (s ??= ``),
                                  (p ??= ``),
                                  (d ??= ``),
                                  (a ??= ``),
                                  (c ??= ``),
                                  (f ??= ``),
                                  (o ??= ``),
                                  (g ??= ``),
                                  (r ??= 0),
                                  y(
                                    D,
                                    {
                                      id: `liRyz9tWl-${n}`,
                                      children: y(Se.Provider, {
                                        value: { A70ozZl1g: e },
                                        children: y(`div`, {
                                          className: `framer-8v8feg`,
                                          "data-framer-name": `products-item`,
                                          children: y(P, {
                                            children: y(N, {
                                              className: `framer-15aud3i-container`,
                                              "data-code-component-plugin-id": `api`,
                                              "data-framer-name": `products-row`,
                                              isAuthoredByUser: !0,
                                              name: `products-row`,
                                              nodeId: `qTdt3Judb`,
                                              scopeId: `FJ4uV8_M0`,
                                              children: y(R, {
                                                f1: h,
                                                f10: c,
                                                f11: f,
                                                f12: o,
                                                f13: g,
                                                f14: ``,
                                                f15: ``,
                                                f16: ``,
                                                f2: i,
                                                f3: u,
                                                f4: m,
                                                f5: l,
                                                f6: s,
                                                f7: p,
                                                f8: d,
                                                f9: a,
                                                height: `100%`,
                                                id: `qTdt3Judb`,
                                                img: qu(t),
                                                kind: `products`,
                                                layoutId: `qTdt3Judb`,
                                                n1: r,
                                                n2: 0,
                                                name: `products-row`,
                                                slug: e,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    },
                                    n
                                  )
                                )
                              ),
                            }),
                        }),
                      }),
                    }),
                    y(E.div, {
                      className: `framer-1xsku83`,
                      "data-framer-name": `CMS Bridge · site (keep)`,
                      children: y(F, {
                        children: y(Ku, {
                          query: td(),
                          children: (e, t, n) =>
                            y(p, {
                              children: e?.map(
                                (
                                  {
                                    amGxs7jw2: e,
                                    dyIfVE2l5: t,
                                    eUW1HV19w: n,
                                    FftqP1jIz: r,
                                    id: i,
                                    IGoVWexWJ: a,
                                    jtLccHAwQ: o,
                                    KbwCWod77: s,
                                    MRFa_J3kt: c,
                                    pXwMxinr1: l,
                                    ti8Mllzri: u,
                                    tmFL_eCZD: d,
                                    tV9cq8_jT: f,
                                    UDxk3qMt3: p,
                                    wLdCCqFhx: m,
                                    YxgEOTUGe: h,
                                  },
                                  g
                                ) => (
                                  (p ??= ``),
                                  (h ??= ``),
                                  (d ??= ``),
                                  (f ??= ``),
                                  (l ??= ``),
                                  (m ??= ``),
                                  (s ??= ``),
                                  (a ??= ``),
                                  (r ??= ``),
                                  (t ??= ``),
                                  (c ??= ``),
                                  (u ??= ``),
                                  (o ??= ``),
                                  (n ??= ``),
                                  (e ??= 0),
                                  y(
                                    D,
                                    {
                                      id: `PG11dVvsq-${i}`,
                                      children: y(Se.Provider, {
                                        value: { UDxk3qMt3: p },
                                        children: y(`div`, {
                                          className: `framer-1jfu2d7`,
                                          "data-framer-name": `site-item`,
                                          children: y(P, {
                                            children: y(N, {
                                              className: `framer-deg5zk-container`,
                                              "data-code-component-plugin-id": `api`,
                                              "data-framer-name": `site-row`,
                                              isAuthoredByUser: !0,
                                              name: `site-row`,
                                              nodeId: `dvNNiPKhx`,
                                              scopeId: `FJ4uV8_M0`,
                                              children: y(R, {
                                                f1: h,
                                                f10: c,
                                                f11: u,
                                                f12: o,
                                                f13: n,
                                                f14: ``,
                                                f15: ``,
                                                f16: ``,
                                                f2: d,
                                                f3: f,
                                                f4: l,
                                                f5: m,
                                                f6: s,
                                                f7: a,
                                                f8: r,
                                                f9: t,
                                                height: `100%`,
                                                id: `dvNNiPKhx`,
                                                kind: `site`,
                                                layoutId: `dvNNiPKhx`,
                                                n1: e,
                                                n2: 0,
                                                name: `site-row`,
                                                slug: p,
                                                style: { height: `100%`, width: `100%` },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    },
                                    i
                                  )
                                )
                              ),
                            }),
                        }),
                      }),
                    }),
                    y(P, {
                      children: y(N, {
                        className: `framer-9iv65w-container`,
                        "data-code-component-plugin-id": `api`,
                        "data-framer-name": `CMS Bridge · marker (keep)`,
                        isAuthoredByUser: !0,
                        name: `CMS Bridge · marker (keep)`,
                        nodeId: `YvyHRlUZ0`,
                        scopeId: `FJ4uV8_M0`,
                        children: y(R, {
                          f1: ``,
                          f10: ``,
                          f11: ``,
                          f12: ``,
                          f13: ``,
                          f14: ``,
                          f15: ``,
                          f16: ``,
                          f2: ``,
                          f3: ``,
                          f4: ``,
                          f5: ``,
                          f6: ``,
                          f7: ``,
                          f8: ``,
                          f9: ``,
                          height: `100%`,
                          id: `YvyHRlUZ0`,
                          kind: `bridge`,
                          layoutId: `YvyHRlUZ0`,
                          n1: 0,
                          n2: 0,
                          name: `CMS Bridge · marker (keep)`,
                          slug: ``,
                          style: { height: `100%`, width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                    m,
                    y(`div`, { className: `framer-17h4c4l` }),
                    y(E.div, {
                      className: `framer-gupg4g`,
                      "data-framer-name": `② FOOTER — link columns, newsletter, local time, socials`,
                      children: y(P, {
                        children: y(N, {
                          className: `framer-w0twtf-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsFooter`,
                          isAuthoredByUser: !0,
                          name: `DsFooter`,
                          nodeId: `RPM8QFIbP`,
                          scopeId: `FJ4uV8_M0`,
                          children: y(xe, {
                            breakpoint: g,
                            overrides: {
                              GBn81WlMo: { bpHint: `phone` },
                              VmVo9IokI: { bpHint: `tablet` },
                            },
                            children: y(dt, {
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              col1: `Products:/products, Bundles:/bundles, Courses:/courses, Free guide:/free, Reviews:/reviews`,
                              col1Title: `Shop`,
                              col2: `About:/about, Notes:/notes, Contact:/contact, Affiliates:/affiliates`,
                              col2Title: `Studio`,
                              col3: `Licence:/licence, Refunds:/refunds, Privacy:/privacy, Terms:/terms`,
                              col3Title: `Legal`,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              formAction: `/thank-you`,
                              height: `100%`,
                              id: `RPM8QFIbP`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layer: 9,
                              layoutId: `RPM8QFIbP`,
                              legal: `© {year} {brand}. All files are licensed, not sold.`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsFooter`,
                              newsButton: `Subscribe`,
                              newsCopy: `One email a month: new products, updates, the odd discount.`,
                              newsTitle: `New on the shelf`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              placeholder: `you@studio.com`,
                              reveal: !0,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              tagline: `Templates, ebooks, presets and courses, sold from one shelf.`,
                              timeLabel: `Local time`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                y(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (dd = (e) =>
        e === L.canvas || e === L.export
          ? [
              ...ad,
              ...rd.flatMap((e) => {
                let t = id[e];
                return nd[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...ad, ...rd.map((e) => `@media ${od[e]} { ${nd[e].join(` `)} }`)]),
      (fd = ge(ud, dd, `framer-1TBC6`)),
      (fd.displayName = `Site Layout`),
      (fd.defaultProps = { height: 1e3, width: 1200 }),
      Fe(
        fd,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Playfair Display`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Playfair Display`,
                url: `https://fonts.gstatic.com/s/playfairdisplay/v40/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvUDVZNLo_U2r.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Work Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Work Sans`,
                url: `https://fonts.gstatic.com/s/worksans/v24/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXNi0Dp6_cOyA.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Space Mono`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Space Mono`,
                url: `https://fonts.gstatic.com/s/spacemono/v17/i7dPIFZifjKcF5UAWdDRUEN2RFq7AwU.woff2`,
                weight: `400`,
              },
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
          ...Iu,
          ...Lu,
          ...Ru,
          ...zu,
          ...Bu,
          ...Vu,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (fd.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = t.priority,
            i = k.get(Gu(), n, r),
            a = k.get(Ju(), n, r),
            o = k.get(Yu(), n, r),
            s = k.get(Xu(), n, r),
            c = k.get(Zu(), n, r),
            l = k.get(Qu(), n, r),
            u = k.get($u(), n, r),
            d = k.get(ed(), n, r),
            f = k.get(td(), n, r);
          return ie(
            [
              () => i.preload(),
              () => a.preload(),
              () => o.preload(),
              () => s.preload(),
              () => c.preload(),
              () => l.preload(),
              () => u.preload(),
              () => d.preload(),
              () => f.preload(),
            ],
            t
          );
        },
      }));
  });
function md({ webPageId: e, children: t, style: n, ...r }) {
  let i = {}[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `Rj9qoo16e`:
    case `MygUYNvnA`:
    case `mUfdvkYKK`:
    case `TLkzFA69h`:
    case `gB0glT7h6`:
    case `jWG1RIbW0`:
    case `NPvIE_gOs`:
    case `Shqn2J1uh`:
    case `uC34JE7ov`:
    case `tr5NvG9Zy`:
    case `cLwfMHTHt`:
    case `qOJh1h1UP`:
    case `Otdn253v5`:
    case `S_MHfjqaa`:
    case `weqlf_oHq`:
    case `WmmAEcbjh`:
    case `rZsWM0mIZ`:
    case `XdtB2w6fX`:
    case `Dev5HtCTV`:
    case `jZz6Y9MLV`:
    case `uHSQC5ZYr`:
    case `Mtq3fVICC`:
      return m(fd, { ...i, key: `SiteLayout`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function hd(e) {
  switch (e) {
    case `augiA20Il`:
    case `Rj9qoo16e`:
    case `MygUYNvnA`:
    case `mUfdvkYKK`:
    case `TLkzFA69h`:
    case `gB0glT7h6`:
    case `jWG1RIbW0`:
    case `NPvIE_gOs`:
    case `Shqn2J1uh`:
    case `uC34JE7ov`:
    case `tr5NvG9Zy`:
    case `cLwfMHTHt`:
    case `qOJh1h1UP`:
    case `Otdn253v5`:
    case `S_MHfjqaa`:
    case `weqlf_oHq`:
    case `WmmAEcbjh`:
    case `rZsWM0mIZ`:
    case `XdtB2w6fX`:
    case `Dev5HtCTV`:
    case `jZz6Y9MLV`:
    case `uHSQC5ZYr`:
    case `Mtq3fVICC`:
      return [
        { hash: `1veo2b1`, mediaQuery: `(min-width: 1200px)` },
        { hash: `i5mzmj`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `1e2wzxa`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function gd({
  routeId: e,
  pathVariables: t,
  canonicalPathVariables: r,
  localeId: i,
  collectionItemId: a,
  contentLocaleId: d,
  shouldResolveInitialRouteContentState: p = !1,
}) {
  let h = yd[e].page.preload();
  (de({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    le(Cd));
  let g = m(Oe, {
    children: m(we, {
      children: m(Ee, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        canonicalPathVariables: r,
        routes: yd,
        collectionUtils: xd,
        serverDatabaseClient: Sd,
        framerSiteId: Cd,
        notFoundPage: A(() => import("./3I-M3mse93VHa57ZV-Hs8gtmxmpAwuQXqrDlnjwTqz4.CIxgA6D5.mjs")),
        isReducedMotion: void 0,
        localeId: i,
        locales: bd,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://helpful-instance-487483.framer.app`,
        EditorBar:
          c === void 0
            ? void 0
            : (() => {
                if (Td) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return A(async () => {
                  c.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: pe, useLocaleInfo: be, useRouter: Ae },
                    react: {
                      createElement: m,
                      Fragment: s,
                      memo: l,
                      useCallback: o,
                      useEffect: T,
                      useRef: f,
                      useState: u,
                      useLayoutEffect: n,
                    },
                    "react-dom": { createPortal: ee },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        LayoutTemplate: md,
        loadSnippetsModule: new Ne(
          () => import("./2U6vEurbmgkAtqlagGinz-7KaHmPwzKkSaCJA9_25-Q.CZgN5Rbf.mjs")
        ),
        initialCollectionItemId: a,
        initialContentLocaleIdOverride: d,
      }),
    }),
    value: { routes: {} },
  });
  return (await h, g);
}
function _d() {
  wd && c.__framer_events.push(arguments);
}
async function vd(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || c.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    _d(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, o, s, l, u, d;
    if (e)
      ((d = JSON.parse(t.dataset.framerHydrateV2)),
        (r = d.routeId),
        (i = d.localeId),
        (o = d.contentLocaleId),
        (s = d.pathVariables),
        (l = d.canonicalPathVariables),
        (u = d.breakpoints),
        (r = Ie(yd, r)));
    else {
      Ie(yd, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((s ??= {}), (s[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = oe(yd, decodeURIComponent(location.pathname), !0, bd);
        ((r = e.routeId), (i = e.localeId), (s = e.pathVariables));
      }
    }
    let f = gd({
      routeId: r,
      localeId: i,
      contentLocaleId: o,
      pathVariables: s,
      canonicalPathVariables: l,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    c !== void 0 &&
      (async () => {
        let e = yd[r],
          t = bd.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = d?.collectionItemId ?? null;
        if (n === null && e?.collectionId && xd) {
          let r = await xd[e.collectionId]?.(),
            [i] = Object.values(s);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let a = Intl.DateTimeFormat().resolvedOptions(),
          o = a.timeZone,
          l = a.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          c.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Cd,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: c.location.href,
              hostname: c.location.hostname || null,
              pathname: c.location.pathname || null,
              hash: c.location.hash || null,
              search: c.location.search || null,
              timezone: o,
              locale: l,
            },
            `eager`,
          ]),
          await Pe({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let p = await f;
    e
      ? (Te(`framer-rewrite-breakpoints`, () => {
          (ue(u), c.__framer_onRewriteBreakpoints?.(u));
        }),
        (Td ? (e) => e() : a)(() => {
          (j(), ae(), C(t, p, { onRecoverableError: n }));
        }))
      : x(t, { onRecoverableError: n }).render(p);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var yd, bd, xd, Sd, Cd, wd, Td;
e(() => {
  if (
    (r(),
    M(),
    w(),
    d(),
    te(),
    pd(),
    (yd = {
      augiA20Il: {
        elements: {},
        page: A(() => import("./yRjE-3lOcR-8CcVxQN-_fzlJXBzPAOcxn_R_MhzDr50.EFHiYFIo.mjs")),
        path: `/`,
      },
      Rj9qoo16e: {
        elements: {},
        page: A(() => import("./iS-Rb38qNOKywWgfhIZ0bZxKuZ4Q1LPti-AfsMFbuU4.ZmJzifSO.mjs")),
        path: `/products`,
      },
      MygUYNvnA: {
        elements: {},
        page: A(() => import("./-Ld7BKzZKMnfsA5tBpQnHNjpZOgT3m2C1tYRbtpAPwU.lzxX_TAG.mjs")),
        path: `/bundles`,
      },
      mUfdvkYKK: {
        elements: {},
        page: A(() => import("./yglkeHs1kKK0ZoCqjExjsfQ-DAUZBzBdodoc1ZtZvyQ.BKwsVXRW.mjs")),
        path: `/courses`,
      },
      TLkzFA69h: {
        elements: {},
        page: A(() => import("./tVaiFAiD53oXRq22khCDVHVU7Cnd2Zl7k-B_4PHbNo4.7OLRZHVI.mjs")),
        path: `/free`,
      },
      gB0glT7h6: {
        elements: {},
        page: A(() => import("./eeKJi4vA7DGIHJ95BC80n8JhqqZggTXAMRBsWOsQJLY.B91rEf74.mjs")),
        path: `/thank-you`,
      },
      jWG1RIbW0: {
        elements: {},
        page: A(() => import("./8vbBWgnItbJoXQBy1FxS5l5OGFML_5RJP_uKLG0Gd3k.DhFomGnt.mjs")),
        path: `/reviews`,
      },
      NPvIE_gOs: {
        elements: {},
        page: A(() => import("./Vl2PFr1HrLwLK__A0mdQUyZshkDSUHfnTrZi35ohQvs.DGCS9ZSY.mjs")),
        path: `/about`,
      },
      Shqn2J1uh: {
        elements: {},
        page: A(() => import("./kgqqFOe_O7TGhBjnTyd_O8UUjJIKO4ofEzJ3rncn5Wg.DbFeRb5A.mjs")),
        path: `/notes`,
      },
      uC34JE7ov: {
        elements: {},
        page: A(() => import("./PK8PWs2MMLe-qAcDwKepCt7JoAKTcyc8FYcQK0Dd3lY.BVcpGbZS.mjs")),
        path: `/faq`,
      },
      tr5NvG9Zy: {
        elements: {},
        page: A(() => import("./UjnhYNo5zH8BUt_rwTPJiS1PH_GvLiRe2f314J0Beb0.BzdtfgLm.mjs")),
        path: `/contact`,
      },
      cLwfMHTHt: {
        elements: {},
        page: A(() => import("./LUigrFh-UrOrhgm1N7BtDGEd9lJ7NANaPann4OD9l7k.Cz2B9dG3.mjs")),
        path: `/licence`,
      },
      qOJh1h1UP: {
        elements: {},
        page: A(() => import("./MVJkn7UXSCK6dizhuZ2SZY-iKRcHq6a9zJZsminOh54.Upbnl--0.mjs")),
        path: `/refunds`,
      },
      Otdn253v5: {
        elements: {},
        page: A(() => import("./mPIXpAVJSQXNRJ3lgMVVFbng2QRaB3-BmszdcbL-QQY.CA7ELuRv.mjs")),
        path: `/privacy`,
      },
      S_MHfjqaa: {
        elements: {},
        page: A(() => import("./wdNALLWxExsa0AF12uQPPvrQe0BmgKOj2uF3mpvo-bs.MM3HIilD.mjs")),
        path: `/terms`,
      },
      weqlf_oHq: {
        elements: {},
        page: A(() => import("./qXys29oma5mgbMFp8pKlx-NfqhbLMT5aTUWqOJmLCBg.lA4ZwSMS.mjs")),
        path: `/affiliates`,
      },
      WmmAEcbjh: {
        elements: {},
        page: A(() => import("./3I-M3mse93VHa57ZV-Hs8gtmxmpAwuQXqrDlnjwTqz4.CIxgA6D5.mjs")),
        path: `/404`,
      },
      rZsWM0mIZ: {
        elements: {},
        page: A(() => import("./j5zF3-7bPP298u56DsrBAYxLPtlNkmaVFvHK6G9XCAU.6ae-uQ4B.mjs")),
        path: `/checkout`,
      },
      FbMmNJ7GL: {
        elements: {},
        page: A(() => import("./TXwIOHE5yOP2RC03ECBkaZ6KLb3GAq0WVTeVyouOlnE.COOQBIIq.mjs")),
        path: `/start-here`,
      },
      XdtB2w6fX: {
        collectionId: `vyRvgQNHP`,
        elements: {},
        page: A(() => import("./QUwKO9s1UygP1l4vZCyw0PH912qD_6QMkKBvJE1r6Yw.DJ2paen8.mjs")),
        path: `/products/:A70ozZl1g`,
      },
      Dev5HtCTV: {
        collectionId: `owwGg2Iuo`,
        elements: {},
        page: A(() => import("./vf3vuCmidbbGqV9q4f6WbnFCAr61t3EU6_LoYussKgc.CHXwPgmv.mjs")),
        path: `/bundles/:xKaH73n4V`,
      },
      jZz6Y9MLV: {
        collectionId: `FCmHoYAR6`,
        elements: {},
        page: A(() => import("./l3tBSjaOMI5BMSo_wXg_WpKaWEn5FjpeNK2ULSj4OAY.D6ZHVwxW.mjs")),
        path: `/courses/:ZDADCUIEj`,
      },
      uHSQC5ZYr: {
        collectionId: `UcnqDSpuu`,
        elements: {},
        page: A(() => import("./Ej-nVdSOQkU8qc_vQRAL8Utj_RhgBiUidfksAyM38Vg.pIxYGjOS.mjs")),
        path: `/notes/:lSwtK9xTL`,
      },
      Mtq3fVICC: {
        collectionId: `paMgNvbm8`,
        elements: {},
        page: A(() => import("./43YHpebQIK0pyUJtudlfL53PGDUEi23Zh25BrCzwVaY.CMreWx5Q.mjs")),
        path: `/types/:AP6SQ8Q5U`,
      },
    }),
    (bd = [{ code: `en-US`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (xd = {
      FCmHoYAR6: async () =>
        (await import("./H-yuxOCOu-1C_YRqrBzacHcXQ_t6wZKFsPF-3z-Uoyk.DSIEEBqf.mjs"))?.utils,
      owwGg2Iuo: async () =>
        (await import("./2Twk2q3kVCPtGcZ98kqxXhB3sJizdHLCK9EGSGgDH5o.BbccNBb6.mjs"))?.utils,
      paMgNvbm8: async () =>
        (await import("./RzDAGTghQsGMiTarpmpzWCr8UqC5wJ85tgwKx8YWXQU.dUWpw22u.mjs"))?.utils,
      UcnqDSpuu: async () =>
        (await import("./j2dQV5NH2xkIWRpYjbgP8FxAikpchvjcOD6326lW6nk.D4XpgZlF.mjs"))?.utils,
      vyRvgQNHP: async () =>
        (await import("./eYzjN4sDT4XyZ3ydfnre5Ly1QvzSTnAwbszYLU0vcEo.C-RTITdA.mjs"))?.utils,
    }),
    (Sd = void 0),
    (Cd = `464b7e90ee82db772ce0a0f6115d5361bff432bcd83f70544a19d74ac1883bbf`),
    (wd = typeof document < `u`),
    (Td = wd && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(i.userAgent)),
    wd)
  ) {
    ((c.__framer_importFromPackage = (e, t) => () =>
      m(je, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (c.__framer_events = c.__framer_events || []),
      se());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? vd(!0, e) : vd(!1, e);
  }
})();
export { hd as getLayoutTemplateBreakpoints, gd as getPageRoot };
//# sourceMappingURL=script_main.Ds8MjvmL.mjs.map
