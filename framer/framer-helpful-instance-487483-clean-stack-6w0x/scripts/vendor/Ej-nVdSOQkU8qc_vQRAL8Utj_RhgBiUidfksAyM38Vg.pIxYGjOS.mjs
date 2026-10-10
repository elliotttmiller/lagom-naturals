import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  C as n,
  E as r,
  I as i,
  L as a,
  R as o,
  _ as s,
  b as c,
  c as l,
  j as u,
  l as d,
  o as f,
  p,
  s as m,
  w as h,
  y as g,
} from "./react.iNMCLRE-.mjs";
import { a as ee, k as _, r as te, t as v } from "./motion.dK94hszq.mjs";
import {
  $ as y,
  A as b,
  B as x,
  C as ne,
  H as re,
  J as ie,
  P as S,
  Q as ae,
  X as oe,
  Z as se,
  a as C,
  at as w,
  b as T,
  c as E,
  et as D,
  f as O,
  g as k,
  i as A,
  k as j,
  nt as M,
  o as N,
  q as ce,
  tt as le,
  v as P,
  y as ue,
} from "./framer.BNAppio8.mjs";
import { a as de, r as F } from "./UcnqDSpuu.Byvv2XWO.mjs";
import { n as I, t as L } from "./DsNotes.C-HWWnLQ.mjs";
import fe, { t as pe } from "./RYL08LLbdVUeomuIILjHi60nmHI0WcuobW6HlDWFUhU.BxJ8UYvk.mjs";
function me() {
  g(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = H), document.head.appendChild(e));
  }, []);
}
function he() {
  let e = y(),
    t = null;
  try {
    t = P.current();
  } catch {}
  return e || (t !== null && t !== P.preview);
}
function ge() {
  let e = y(),
    [t, n] = s(!1);
  return (
    g(() => {
      !e && P.current() !== P.canvas && o !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function _e(e, t) {
  let n = String(t || ``).toLowerCase(),
    [i, a] = s(n === `phone` ? 390 : n === `tablet` ? 810 : 1440),
    [c, l] = s(n === `phone` ? 844 : n === `tablet` ? 1080 : 900);
  return (
    r(() => {
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
      let r = () => l(o.innerHeight);
      r();
      let i = () => {
          let e = Math.round(t.offsetWidth);
          e > 0 && a(e);
        },
        s = o.setTimeout(i, 150),
        c = o.setTimeout(i, 700),
        u = o.setTimeout(i, 1600);
      return (
        o.addEventListener(`resize`, r),
        o.addEventListener(`load`, i),
        () => {
          (n.disconnect(),
            o.clearTimeout(s),
            o.clearTimeout(c),
            o.clearTimeout(u),
            o.removeEventListener(`resize`, r),
            o.removeEventListener(`load`, i));
        }
      );
    }, []),
    { w: i, vh: c }
  );
}
function R(e, t, n) {
  if (o === void 0) return () => {};
  let r = o;
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
function ve(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: J(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? q(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: J(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? q(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: J(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? q(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function ye(e, t) {
  g(() => {
    if (!t || !e.current || !o.matchMedia(`(hover:hover) and (pointer:fine)`).matches) return;
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
function z(e) {
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
function be(e, t, n, r) {
  g(() => {
    if (!t || n || !e.current) return;
    let i = e.current,
      a = !0,
      s = -9,
      c = -1,
      l = -1,
      u = !1;
    z(i);
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
      g = R(
        () => {
          if (!h) return;
          let e = Oe((m - f) / (m + p)),
            t = p > m * 1.05 ? Oe(-f / (p - m)) : e;
          (c < 0
            ? ((c = e), (l = t))
            : ((c += (e - c) * Le),
              (l += (t - l) * Le),
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
          if (!a && u) {
            h = !1;
            return;
          }
          let e = i.getBoundingClientRect();
          ((f = e.top), (p = e.height), (m = o.innerHeight || 1), (h = !0));
        }
      );
    return () => {
      (g(), d.disconnect());
    };
  }, [t, n]);
}
function xe(e) {
  let [t, n] = s(!1);
  return (
    g(() => {
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
      let a = o.setTimeout(() => {
        (i.disconnect(), n(!0));
      }, 9e3);
      return () => {
        (i.disconnect(), o.clearTimeout(a));
      };
    }, [e]),
    t
  );
}
function Se(e) {
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
function B(e, t) {
  let [n, r] = s(t),
    i = c(``);
  return (
    Ke(() => {
      let t = 0,
        n = 0,
        a = 0;
      try {
        let e = o;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[He] = 1));
      } catch {}
      let s = () => {
          let t = Se(e);
          if (!t) return !1;
          let n = JSON.stringify(t);
          return (n !== i.current && ((i.current = n), r(t)), !0);
        },
        c = new MutationObserver(() => {
          s() && (a++, a > 2 && c.disconnect());
        });
      (c.observe(document.body, { childList: !0, subtree: !0 }), s() && a++);
      let l = () => {
        t++ < 30 && (s(), (n = o.setTimeout(l, 150)));
      };
      return (
        (n = o.setTimeout(l, 150)),
        () => {
          (c.disconnect(), o.clearTimeout(n));
        }
      );
    }, [e]),
    n
  );
}
function Ce(e, t, n) {
  let r = B(e, t),
    [i, a] = s(``);
  g(() => {
    try {
      a(decodeURIComponent(o.location.pathname.split(`/`).filter(Boolean).pop() || ``));
    } catch {}
  }, []);
  let c = String(n || ``).trim() || i;
  return { row: r.find((e) => e.slug === c) || r[0] || {}, rows: r };
}
function V(e) {
  let {
      slug: t = ``,
      title: n = ``,
      kind: r = ``,
      readTime: i = ``,
      summary: u = ``,
      body: p = ``,
      author: m = ``,
      date: h = ``,
      crumbHome: ee = `Home`,
      crumbList: _ = `Notes`,
      crumbListLink: te = `/notes`,
      writtenBy: v = `Written by`,
      bodyFallback:
        y = `This note is being written. Check back in a day or two, or browse the shelf in the meantime.`,
      sideTitle: b = `New on the shelf`,
      sideCopy: x = `Templates, ebooks, presets and courses, updated for life. Instant download.`,
      sideButton: ne = `Browse products`,
      sideLink: re = `/products`,
      shareLabel: ie = `Share`,
      shareX: S = `Post on X`,
      copyLabel: ae = `Copy link`,
      copiedLabel: oe = `Copied`,
      nextLabel: se = `Next note`,
      bpHint: C = `auto`,
    } = e,
    w = ke(e),
    { D: T, B: E, M: D } = ve(e);
  me();
  let O = ge(),
    k = De(),
    A = he(),
    j = c(null),
    { w: M } = _e(j, C);
  (ye(j, O), be(j, O, k));
  let N = xe(O),
    [ce, le] = s(!1);
  g(() => {
    if (!O || !N) return;
    let e = o.setTimeout(() => le(!0), 100);
    return () => o.clearTimeout(e);
  }, [O, N]);
  let P = ce || A || k,
    ue = M < 810,
    de = M >= 810 && M < 1100,
    { row: F, rows: I } = Ce(`posts`, Ve.posts, t),
    L = {
      t: Z(n, F.f1 || ``),
      k: Z(r, F.f2 || ``),
      rt: Z(i, F.f3 || ``),
      sum: Z(u, F.f4 || ``),
      body: Z(p, F.f5 || ``) || y,
      by: Z(m, F.f6 || ``),
      d: Z(h, F.f7 || ``),
      img: we(e.photo, Ue(F)),
    },
    fe = qe(L.body),
    pe = I.findIndex((e) => e.slug === F.slug),
    R = I.length > 1 ? I[(pe + 1) % I.length] : null,
    [z, Se] = s(``);
  g(() => {
    O && Se(o.location.href);
  }, [O, F.slug]);
  let [B, V] = s(!1),
    U = async () => {
      try {
        (await a.clipboard.writeText(z || o.location.href), V(!0), o.setTimeout(() => V(!1), 1800));
      } catch {}
    },
    W = `https://x.com/intent/post?text=${encodeURIComponent(L.t)}&url=${encodeURIComponent(z)}`,
    G = `ds ds-sec dspo${P ? ` is-on` : ``}${ue ? ` is-ph` : de ? ` is-tab` : ``}${A ? ` is-still` : ``}`,
    K = 0;
  return d(`article`, {
    ref: j,
    className: G,
    style: { ...Ae(w), ...E, ...e.style },
    "aria-label": L.t,
    children: [
      f(`link`, { rel: `stylesheet`, href: H }),
      f(`style`, { dangerouslySetInnerHTML: { __html: Fe + Be + Je } }),
      f(`div`, {
        className: `dspo-band ds-dark`,
        children: d(`div`, {
          className: `ds-wrap dspo-bw`,
          children: [
            d(`nav`, {
              className: `dspo-crumbs`,
              "aria-label": `Breadcrumb`,
              style: { ...D, ...X(P, 0) },
              children: [
                f(`a`, { href: `/`, children: ee }),
                f(`i`, { "aria-hidden": !0 }),
                f(`a`, { href: te, children: _ }),
                L.k &&
                  d(l, { children: [f(`i`, { "aria-hidden": !0 }), f(`span`, { children: L.k })] }),
              ],
            }),
            f(`h1`, { className: `dspo-h1`, style: { ...T, ...X(P, 100) }, children: L.t }),
            L.sum && f(`p`, { className: `dspo-sum`, style: X(P, 180), children: L.sum }),
            d(`p`, {
              className: `dspo-meta`,
              style: { ...D, ...X(P, 240) },
              children: [
                L.by &&
                  d(l, {
                    children: [
                      d(`span`, {
                        className: `dspo-by`,
                        children: [v, ` `, f(`b`, { children: L.by })],
                      }),
                      f(`i`, { "aria-hidden": !0 }),
                    ],
                  }),
                L.d &&
                  d(l, { children: [f(`span`, { children: L.d }), f(`i`, { "aria-hidden": !0 })] }),
                f(`span`, { children: L.rt }),
              ],
            }),
          ],
        }),
      }),
      f(`div`, {
        className: `ds-wrap dspo-cw`,
        children: f(ze, {
          src: L.img || Ge(F),
          alt: ``,
          on: P,
          shape: `up`,
          ratio: `21/9`,
          par: 0.8,
          radius: 10,
          delay: 200,
          sizes: `(max-width: 809px) 100vw, 90vw`,
          className: `dspo-cover`,
          eager: !0,
        }),
      }),
      d(`div`, {
        className: `ds-wrap dspo-grid`,
        children: [
          f(`div`, {
            className: `dspo-body`,
            style: X(P, 320),
            children: fe.map((e, t) =>
              e.t === `h2`
                ? f(`h2`, { id: `dspo-s${++K}`, style: T, children: e.s }, t)
                : e.t === `h3`
                  ? f(`h3`, { style: T, children: e.s }, t)
                  : e.t === `ul`
                    ? f(
                        `ul`,
                        { children: (e.l || []).map((e, t) => f(`li`, { children: e }, t)) },
                        t
                      )
                    : e.t === `q`
                      ? f(`blockquote`, { style: T, children: e.s }, t)
                      : f(`p`, { children: e.s }, t)
            ),
          }),
          d(`aside`, {
            className: `dspo-side`,
            style: X(P, 380),
            children: [
              d(`div`, {
                className: `dspo-share`,
                children: [
                  f(`span`, { className: `dspo-sl`, style: D, children: ie }),
                  d(`a`, {
                    className: `dspo-sb`,
                    href: W,
                    target: `_blank`,
                    rel: `noreferrer`,
                    style: D,
                    children: [S, f(Ie, { s: 12 })],
                  }),
                  f(`button`, {
                    type: `button`,
                    className: `dspo-sb${B ? ` is-ok` : ``}`,
                    style: D,
                    onClick: U,
                    "aria-live": `polite`,
                    children: B ? oe : ae,
                  }),
                ],
              }),
              d(`div`, {
                className: `dspo-card`,
                children: [
                  f(`span`, { className: `dspo-cl`, style: D, children: b }),
                  f(`p`, { children: x }),
                  f(Pe, { href: re, label: ne, kind: `solid` }),
                ],
              }),
            ],
          }),
        ],
      }),
      R &&
        f(`a`, {
          className: `dspo-next`,
          href: `${String(te || `/notes`).replace(/\/?$/, `/`)}${R.slug || ``}`,
          style: X(P, 440),
          children: d(`span`, {
            className: `ds-wrap dspo-nw`,
            children: [
              d(`span`, {
                className: `dspo-nl`,
                style: D,
                children: [se, f(`i`, { "aria-hidden": !0 }), R.f2],
              }),
              d(`span`, { className: `dspo-nt`, style: T, children: [R.f1, f(Ie, { s: 22 })] }),
            ],
          }),
        }),
    ],
  });
}
var H,
  we,
  U,
  W,
  G,
  K,
  Te,
  q,
  Ee,
  J,
  De,
  Oe,
  Y,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  X,
  Re,
  ze,
  Be,
  Ve,
  He,
  Z,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye = e(() => {
    (i(),
      m(),
      h(),
      S(),
      (H = `../../styles/css2-a59a76.css`),
      (we = (e, t) =>
        e && typeof e == `object` && e.src
          ? String(e.src).split(`?`)[0]
          : typeof e == `string` && e.trim()
            ? e.trim().split(`?`)[0]
            : t),
      (U = `clamp(1280px, 92vw, 1520px)`),
      (W = [160, 320, 480, 800, 1200, 1600]),
      (G = (e) => {
        let t =
            String(e || ``)
              .trim()
              .split(`,`)
              .pop() || ``,
          n = t.match(/(\d+(?:\.\d+)?)px/),
          r = t.match(/(\d+(?:\.\d+)?)vw/),
          i = n ? parseFloat(n[1]) * 2 : r ? (parseFloat(r[1]) / 100) * 1600 * 1.25 : 1600;
        return W.find((e) => e >= i) || 1600;
      }),
      (K = (e, t) => {
        let n = String(e || ``),
          r = n.split(`?`)[0];
        if (/framerusercontent\.com\/images\//.test(n)) {
          let e = G(t);
          return {
            src: `${r}?scale-down-to=${e <= 512 ? 512 : e <= 1024 ? 1024 : 2048}`,
            srcSet: `${r}?scale-down-to=512 512w, ${r}?scale-down-to=1024 1024w, ${r}?scale-down-to=2048 2048w`,
            sizes: t,
          };
        }
        if (/images\.unsplash\.com\//.test(n)) {
          let e = G(t),
            n = (e) => `${r}?w=${e}&q=70&fm=jpg&auto=format`;
          return {
            src: n(e),
            srcSet: W.filter((t) => t <= Math.max(e * 2, 480))
              .map((e) => `${n(e)} ${e}w`)
              .join(`, `),
            sizes: t,
          };
        }
        return { src: n };
      }),
      (Te = (e) => {
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
      (q = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (Ee = (e) => {
        let t = Te(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (J = (e, t, n, r) => {
        let i = e ? Ee(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (De = () => {
        let [e, t] = s(!1);
        return (
          r(() => {
            t(o.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (Oe = (e) => Math.min(1, Math.max(0, e))),
      (Y = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (ke = (e) => ({
        bone: e.bone || Y.bone,
        ink: e.ink || Y.ink,
        brass: e.brass || Y.brass,
        pine: e.pine || Y.pine,
        fog: e.fog || Y.fog,
        stone: e.stone || Y.stone,
        cloud: e.cloud || Y.cloud,
        night: e.night || Y.night,
      })),
      (Ae = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (je = {
        bone: { type: N.Color, title: `Paper`, defaultValue: Y.bone },
        ink: { type: N.Color, title: `Ink`, defaultValue: Y.ink },
        brass: { type: N.Color, title: `Accent`, defaultValue: Y.brass },
        pine: { type: N.Color, title: `Deep`, defaultValue: Y.pine },
        fog: { type: N.Color, title: `Line`, defaultValue: Y.fog },
        stone: { type: N.Color, title: `Muted`, defaultValue: Y.stone },
        cloud: { type: N.Color, title: `White`, defaultValue: Y.cloud },
        night: { type: N.Color, title: `Dark`, defaultValue: Y.night },
      }),
      (Me = {
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
      (Ne = {
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
      (Pe = ({
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
        f(`a`, {
          className: `ds-btn ds-${n}${r ? `` : ` ds-noarr`}${a ? ` ` + a : ``}`,
          "data-mag": !0,
          "data-cur": c || `go`,
          href: e,
          onClick: o,
          "aria-label": s,
          style: i,
          children: d(`span`, {
            className: `ds-tag`,
            children: [
              f(`span`, { className: `ds-hole`, "aria-hidden": !0 }),
              f(`span`, { className: `ds-fill`, "aria-hidden": !0 }),
              l,
              d(`span`, {
                className: `ds-lbl`,
                children: [
                  f(`span`, { className: `ds-l1`, children: t }),
                  f(`span`, { className: `ds-l2`, "aria-hidden": !0, children: t }),
                ],
              }),
              r &&
                f(`span`, {
                  className: `ds-arr`,
                  "aria-hidden": !0,
                  children: d(`svg`, {
                    width: `13`,
                    height: `13`,
                    viewBox: `0 0 24 24`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: `2.2`,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    children: [
                      f(`path`, { d: `M6 8h12l-1 12H7z` }),
                      f(`path`, { d: `M9 8V6a3 3 0 0 1 6 0v2` }),
                    ],
                  }),
                }),
            ],
          }),
        })),
      (Fe = `
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
      (Ie = ({ s: e = 15 }) =>
        f(`svg`, {
          width: e,
          height: e,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          "aria-hidden": !0,
          children: f(`path`, { d: `M5 12h14M13 5l7 7-7 7` }),
        })),
      (Le = 0.18),
      N.Boolean,
      N.Number,
      (X = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (Re = {
        up: [`inset(100% 0 0 0)`, `inset(0 0 0 0)`],
        down: [`inset(0 0 100% 0)`, `inset(0 0 0 0)`],
        left: [`inset(0 100% 0 0)`, `inset(0 0 0 0)`],
        right: [`inset(0 0 0 100%)`, `inset(0 0 0 0)`],
        diag: [`polygon(0 100%,0 100%,0 100%,0 100%)`, `polygon(0 -160%,260% 100%,0 100%,0 100%)`],
        iris: [`circle(0% at 50% 55%)`, `circle(85% at 50% 55%)`],
        arch: [`inset(100% 0 0 0 round 999px 999px 0 0)`, `inset(0 0 0 0 round 999px 999px 0 0)`],
        slit: [`inset(0 50% 0 50%)`, `inset(0 0 0 0)`],
      }),
      (ze = ({
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
        className: d,
        eager: p = !1,
      }) => {
        let m = Re[r] || Re.up,
          h = K(e, l);
        return f(`div`, {
          className: `ds-um${n ? ` is-on` : ``}${d ? ` ` + d : ``}`,
          style: {
            aspectRatio: i,
            borderRadius: c,
            clipPath: n ? m[1] : m[0],
            WebkitClipPath: n ? m[1] : m[0],
            transitionDelay: `${a}ms`,
            "--par": o,
            ...(u || {}),
          },
          children: f(`img`, {
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
      (Be = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${U} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (Ve = {
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
      (He = `DsPost@cms1`),
      (Z = (e, t) => (e != null && String(e).trim() ? String(e).trim() : t)),
      (Ue = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (We = `data:image/svg+xml;utf8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20400%20500'%20preserveAspectRatio%3D'xMidYMid%20slice'%3E%3Crect%20width%3D'400'%20height%3D'500'%20fill%3D'%23D3D8E2'%2F%3E%3Crect%20x%3D'120'%20y%3D'170'%20width%3D'160'%20height%3D'160'%20rx%3D'8'%20fill%3D'none'%20stroke%3D'%23AEB6C6'%20stroke-width%3D'1.5'%2F%3E%3Crect%20x%3D'100'%20y%3D'150'%20width%3D'200'%20height%3D'200'%20rx%3D'10'%20fill%3D'none'%20stroke%3D'%23C3CAD8'%20stroke-width%3D'1'%20stroke-dasharray%3D'2%206'%2F%3E%3C%2Fsvg%3E`),
      (Ge = (e, t = `img`) => Ue(e, t) || We),
      (Ke = o === void 0 ? g : r),
      (qe = (e) =>
        String(e || ``)
          .replace(/\r/g, ``)
          .split(/\n\s*\n/)
          .map((e) => e.trim())
          .filter(Boolean)
          .map((e) => {
            if (e.startsWith(`### `)) return { t: `h3`, s: e.slice(4).trim() };
            if (e.startsWith(`## `)) return { t: `h2`, s: e.slice(3).trim() };
            let t = e
              .split(
                `
`
              )
              .map((e) => e.trim())
              .filter(Boolean);
            return t.every((e) => e.startsWith(`- `))
              ? { t: `ul`, s: ``, l: t.map((e) => e.slice(2).trim()) }
              : e.startsWith(`> `)
                ? { t: `q`, s: t.map((e) => e.replace(/^>\s?/, ``)).join(` `) }
                : { t: `p`, s: t.join(` `) };
          })),
      (Je = `
.dspo{position:relative;background:var(--ds-bone);color:var(--ds-ink);overflow:clip;z-index:12;padding-bottom:0}
.dspo-band{position:relative;background:var(--ds-night);color:var(--ds-bone);padding:clamp(120px,13vw,170px) 0 clamp(120px,12vw,180px)}
.dspo-band::before{content:"";position:absolute;inset:0;background:radial-gradient(60% 70% at 80% 0,color-mix(in srgb,var(--ds-brass) 14%,transparent),transparent 60%);pointer-events:none}
.dspo-bw{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:18px;max-width:calc(${U} * .8)}
.dspo-crumbs{display:flex;align-items:center;gap:10px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 65%,transparent)} .dspo-crumbs a{text-decoration:none;color:inherit;transition:color .3s} .dspo-crumbs a:hover{color:var(--ds-brass)} .dspo-crumbs i{width:14px;height:1px;background:color-mix(in srgb,var(--ds-bone) 40%,transparent)} .dspo-crumbs span{color:var(--ds-brass)}
.dspo-h1{margin:0;font-size:clamp(38px,4.8vw,76px);line-height:.98;font-weight:800;letter-spacing:-.035em;text-wrap:balance;max-width:16ch}
.dspo-sum{margin:0;max-width:640px;font-size:clamp(17px,1.4vw,20px);line-height:1.5;color:color-mix(in srgb,var(--ds-bone) 75%,transparent)}
.dspo-meta{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin:6px 0 0;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 65%,transparent)} .dspo-meta b{font-weight:500;color:var(--ds-bone)} .dspo-meta i{width:6px;height:6px;border-radius:50%;background:var(--ds-brass)}
/* cover overlaps the band */
.dspo-cw{margin-top:calc(clamp(70px,8vw,120px) * -1)} .dspo-cover{width:100%;box-shadow:0 40px 90px -40px rgba(0,0,0,.6)} .dspo-cover img{filter:saturate(.88)}
/* body + side */
.dspo-grid{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,.5fr);gap:clamp(40px,6vw,96px);align-items:start;padding:clamp(56px,6vw,90px) var(--pad,56px) clamp(90px,10vw,150px)}
.dspo-body{max-width:720px;font-size:clamp(17px,1.3vw,19px);line-height:1.65}
.dspo-body p{margin:0 0 1.3em} .dspo-body h2{margin:1.8em 0 .6em;font-size:clamp(26px,2.4vw,36px);line-height:1.08;font-weight:800;letter-spacing:-.03em} .dspo-body h3{margin:1.5em 0 .5em;font-size:clamp(20px,1.6vw,24px);line-height:1.15;font-weight:700;letter-spacing:-.02em}
.dspo-body h2:first-child,.dspo-body h3:first-child{margin-top:0}
.dspo-body ul{margin:0 0 1.4em;padding:0;list-style:none} .dspo-body li{position:relative;padding:8px 0 8px 26px;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 22%,transparent)} .dspo-body li::before{content:"";position:absolute;left:4px;top:1.05em;width:8px;height:8px;border-radius:50%;background:var(--ds-brass)}
.dspo-body blockquote{margin:1.6em 0;padding:22px 26px;border-left:4px solid var(--ds-brass);background:var(--ds-cloud);border-radius:0 10px 10px 0;font-size:clamp(20px,1.7vw,26px);line-height:1.3;font-weight:700;letter-spacing:-.02em}
.dspo-side{position:sticky;top:96px;display:flex;flex-direction:column;gap:22px}
.dspo-share{display:flex;flex-direction:column;gap:8px;padding-bottom:18px;border-bottom:1px dashed color-mix(in srgb,var(--ds-ink) 28%,transparent)}
.dspo-sl{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc);margin-bottom:4px}
.dspo-sb{display:inline-flex;align-items:center;justify-content:space-between;gap:10px;width:100%;padding:11px 14px;border:0;border-radius:6px;background:var(--ds-cloud);color:var(--ds-ink);font:inherit;font-size:11px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;cursor:pointer;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 14%,transparent);transition:background .3s,color .3s}
.dspo-sb:hover{background:var(--ds-ink);color:var(--ds-bone)} .dspo-sb.is-ok{background:var(--ds-brass);color:var(--ds-ink)}
.dspo-card{display:flex;flex-direction:column;align-items:flex-start;gap:12px;padding:20px;border-radius:14px;background:var(--ds-night);color:var(--ds-bone);rotate:-1deg;transition:rotate .5s cubic-bezier(.34,1.56,.64,1)} .dspo-card:hover{rotate:0deg}
.dspo-cl{font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)} .dspo-card p{margin:0 0 4px;font-size:14px;line-height:1.55;color:color-mix(in srgb,var(--ds-bone) 78%,transparent)}
.dspo-card .ds-btn.ds-solid{--fill:var(--ds-bone);--fg2:var(--ds-ink);--holefill:var(--ds-night);font-size:12.5px;min-height:44px}
/* next band */
.dspo-next{display:block;background:var(--ds-pine);color:var(--ds-bone);text-decoration:none;padding:clamp(40px,5vw,72px) 0;transition:background .4s} .dspo-next:hover{background:color-mix(in srgb,var(--ds-pine) 80%,var(--ds-brass))}
.dspo-nw{display:flex;flex-direction:column;gap:12px}
.dspo-nl{display:inline-flex;align-items:center;gap:10px;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)} .dspo-nl i{width:16px;height:1px;background:color-mix(in srgb,var(--ds-bone) 40%,transparent)}
.dspo-nt{display:flex;align-items:center;justify-content:space-between;gap:20px;font-size:clamp(26px,3vw,46px);line-height:1.05;font-weight:800;letter-spacing:-.03em;text-wrap:balance} .dspo-nt svg{flex:none;color:var(--ds-brass);transition:translate .35s} .dspo-next:hover .dspo-nt svg{translate:8px 0}
/* tablet + phone */
.dspo.is-tab .dspo-grid{grid-template-columns:1fr;gap:34px} .dspo.is-tab .dspo-side{position:relative;top:auto}
.dspo.is-ph .dspo-band{padding:100px 0 90px} .dspo.is-ph .dspo-h1{font-size:clamp(32px,9.5vw,44px);max-width:none} .dspo.is-ph .dspo-cw{margin-top:-50px} .dspo.is-ph .dspo-cover{aspect-ratio:4/3!important}
.dspo.is-ph .dspo-grid{grid-template-columns:1fr;gap:30px;padding-top:40px} .dspo.is-ph .dspo-side{position:relative;top:auto} .dspo.is-ph .dspo-body{font-size:16.5px} .dspo.is-ph .dspo-card{rotate:0deg} .dspo.is-ph .dspo-nt{font-size:24px}
@media (prefers-reduced-motion:reduce){.dspo-card{rotate:0deg}}`),
      T(V, {
        ...Ne,
        slug: {
          type: N.String,
          title: `Slug`,
          description: `Bind to the Posts slug on the CMS page`,
          defaultValue: ``,
        },
        title: { type: N.String, title: `Title override`, defaultValue: `` },
        kind: { type: N.String, title: `Kind override`, defaultValue: `` },
        readTime: { type: N.String, title: `Read time override`, defaultValue: `` },
        summary: {
          type: N.String,
          title: `Summary override`,
          displayTextArea: !0,
          defaultValue: ``,
        },
        body: {
          type: N.String,
          title: `Body override`,
          displayTextArea: !0,
          defaultValue: ``,
          description: `## heading, - list, > quote, blank line = paragraph`,
        },
        author: { type: N.String, title: `Author override`, defaultValue: `` },
        date: { type: N.String, title: `Date override`, defaultValue: `` },
        photo: { type: N.ResponsiveImage, title: `Cover override` },
        crumbHome: { type: N.String, title: `Crumb home`, defaultValue: `Home` },
        crumbList: { type: N.String, title: `Crumb list`, defaultValue: `Notes` },
        crumbListLink: { type: N.Link, title: `Crumb list link`, defaultValue: `/notes` },
        writtenBy: { type: N.String, title: `Byline label`, defaultValue: `Written by` },
        bodyFallback: {
          type: N.String,
          title: `Empty body text`,
          displayTextArea: !0,
          defaultValue: `This note is being written. Check back in a day or two, or browse the shelf in the meantime.`,
        },
        sideTitle: { type: N.String, title: `Side card title`, defaultValue: `New on the shelf` },
        sideCopy: {
          type: N.String,
          title: `Side card copy`,
          displayTextArea: !0,
          defaultValue: `Templates, ebooks, presets and courses, updated for life. Instant download.`,
        },
        sideButton: { type: N.String, title: `Side card button`, defaultValue: `Browse products` },
        sideLink: { type: N.Link, title: `Side card link`, defaultValue: `/products` },
        shareLabel: { type: N.String, title: `Share label`, defaultValue: `Share` },
        shareX: { type: N.String, title: `Share on X label`, defaultValue: `Post on X` },
        copyLabel: { type: N.String, title: `Copy label`, defaultValue: `Copy link` },
        copiedLabel: { type: N.String, title: `Copied label`, defaultValue: `Copied` },
        nextLabel: { type: N.String, title: `Next label`, defaultValue: `Next note` },
        ...je,
        ...Me,
      }));
  }),
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  Q,
  at,
  $,
  ot;
e(() => {
  (m(),
    S(),
    v(),
    h(),
    I(),
    Ye(),
    F(),
    pe(),
    (Xe = j(V)),
    (Ze = j(L)),
    (Qe = {
      ayU0uES9j: `(max-width: 809.98px)`,
      ubkA8tVss: `(min-width: 810px) and (max-width: 1199.98px)`,
      xxXFj_sId: `(min-width: 1200px)`,
    }),
    ($e = []),
    (et = `framer-f8Vmk`),
    (tt = {
      ayU0uES9j: `framer-v-1fw3apg`,
      ubkA8tVss: `framer-v-1g8qyss`,
      xxXFj_sId: `framer-v-7sm83g`,
    }),
    (nt = (e, t, n) => (e && t ? `position` : n)),
    (rt = { Desktop: `xxXFj_sId`, Phone: `ayU0uES9j`, Tablet: `ubkA8tVss` }),
    (it = ({ value: e }) =>
      ae()
        ? null
        : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Q = (e) => ({
      from: { alias: `uHSQC5ZYr`, data: de, type: `Collection` },
      select: [{ collection: `uHSQC5ZYr`, name: `lSwtK9xTL`, type: `Identifier` }],
      where: e,
    })),
    (at = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: rt[r.variant] ?? r.variant ?? `xxXFj_sId`,
    })),
    ($ = w(
      p(function (e, r) {
        let i = c(null),
          a = r ?? i,
          o = n(),
          { activeLocale: s, setLocale: l } = D();
        ce();
        let p = ie(),
          [m] = M(Q(b(p, `uHSQC5ZYr`)));
        if (!m) throw new O(`No data matches path variables: ${JSON.stringify(p)}`);
        let {
          style: h,
          className: g,
          layoutId: v,
          variant: y,
          lSwtK9xTL: x = m.lSwtK9xTL ?? ``,
          ...re
        } = at(e);
        le(u(() => fe({}, s), [s]));
        let [S, ae] = se(y, Qe, !1),
          w = ne(et),
          T = t(E)?.isLayoutTemplate,
          j = !!t(ee)?.transition?.layout,
          N = nt(T, j);
        return (
          oe({}),
          f(E.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: rt,
              primaryVariantId: `xxXFj_sId`,
              variantClassNames: tt,
            },
            children: d(te, {
              id: v ?? o,
              children: [
                f(it, { value: `html body { background: rgb(255, 255, 255); }` }),
                d(_.div, {
                  ...re,
                  className: ne(w, `framer-7sm83g`, g),
                  ref: a,
                  style: { ...h },
                  children: [
                    f(_.div, {
                      className: `framer-agdva7`,
                      "data-framer-name": `S0 DsPost`,
                      layout: N,
                      children: f(A, {
                        children: f(C, {
                          className: `framer-px6g6y-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsPost`,
                          isAuthoredByUser: !0,
                          name: `DsPost`,
                          nodeId: `URNRgEbjC`,
                          scopeId: `uHSQC5ZYr`,
                          children: f(k, {
                            breakpoint: S,
                            overrides: {
                              ayU0uES9j: { bpHint: `phone` },
                              ubkA8tVss: { bpHint: `tablet` },
                            },
                            children: f(V, {
                              author: ``,
                              body: ``,
                              bodyFallback: `This note is being written. Check back in a day or two, or browse the shelf in the meantime.`,
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              copiedLabel: `Copied`,
                              copyLabel: `Copy link`,
                              crumbHome: `Home`,
                              crumbList: `Notes`,
                              crumbListLink: `/notes`,
                              customFonts: !1,
                              date: ``,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              height: `100%`,
                              id: `URNRgEbjC`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              kind: ``,
                              layoutId: `URNRgEbjC`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsPost`,
                              nextLabel: `Next note`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              readTime: ``,
                              shareLabel: `Share`,
                              shareX: `Post on X`,
                              sideButton: `Browse products`,
                              sideCopy: `Templates, ebooks, presets and courses, updated for life. Instant download.`,
                              sideLink: `/products`,
                              sideTitle: `New on the shelf`,
                              slug: x,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              summary: ``,
                              title: ``,
                              width: `100%`,
                              writtenBy: `Written by`,
                            }),
                          }),
                        }),
                      }),
                    }),
                    f(_.div, {
                      className: `framer-2qxoze`,
                      "data-framer-name": `S1 DsNotes`,
                      layout: N,
                      children: f(A, {
                        children: f(C, {
                          className: `framer-1rj7myh-container`,
                          "data-code-component-plugin-id": `api`,
                          "data-framer-name": `DsNotes`,
                          isAuthoredByUser: !0,
                          name: `DsNotes`,
                          nodeId: `vh1y_pamL`,
                          scopeId: `uHSQC5ZYr`,
                          children: f(k, {
                            breakpoint: S,
                            overrides: {
                              ayU0uES9j: { bpHint: `phone` },
                              ubkA8tVss: { bpHint: `tablet` },
                            },
                            children: f(L, {
                              allLabel: `All notes`,
                              allLink: `/notes`,
                              bodyFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              bone: `var(--token-58d8c640-633f-423d-a624-11c545b1a8a5)`,
                              bpHint: `desktop`,
                              brass: `var(--token-8f98b098-1d4c-402a-9ba0-725db4b89444)`,
                              cloud: `var(--token-ef157450-b6ee-4863-91ae-8b7cf732a39d)`,
                              count: 3,
                              customFonts: !1,
                              displayFont: {
                                fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              eyebrow: `Notes`,
                              fog: `var(--token-eab97b2d-c9b3-41c8-bd0a-d477635459cd)`,
                              heading: `Notes from|*the back room.*`,
                              height: `100%`,
                              id: `vh1y_pamL`,
                              ink: `var(--token-6ae3bbdb-cb5b-45bf-89da-4a04388ae28f)`,
                              layoutId: `vh1y_pamL`,
                              monoFont: {
                                fontFamily: `"Fragment Mono", "Fragment Mono Placeholder", monospace`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                              },
                              name: `DsNotes`,
                              night: `var(--token-bf53dd4c-a898-48cd-b604-c4b5b896b4c5)`,
                              pine: `var(--token-0c39aeba-900e-41b8-bc29-33a7b85e80be)`,
                              readLabel: `Read the note`,
                              stone: `var(--token-1d0b7fde-f0fa-4bc6-9eca-f38c2fdcb15f)`,
                              style: { width: `100%` },
                              subCopy: `Pricing, launches and what we learned selling files.`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                f(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-f8Vmk.framer-1lipqqe, .framer-f8Vmk .framer-1lipqqe { display: block; }`,
        `.framer-f8Vmk.framer-7sm83g { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-f8Vmk .framer-agdva7, .framer-f8Vmk .framer-2qxoze { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-f8Vmk .framer-px6g6y-container, .framer-f8Vmk .framer-1rj7myh-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-f8Vmk.framer-7sm83g { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-f8Vmk.framer-7sm83g { width: 390px; }}`,
      ],
      `framer-f8Vmk`
    )),
    ($.displayName = `Note`),
    ($.defaultProps = { height: 1080, width: 1200 }),
    ue(
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
        ...Xe,
        ...Ze,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority;
        return re([() => x.get(Q(b(t.pathVariables, `uHSQC5ZYr`)), n, r).preload()], t);
      },
    }),
    (ot = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameruHSQC5ZYr`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1200`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicHeight: `1080`,
            framerAutoSizeImages: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ubkA8tVss":{"layout":["fixed","auto"]},"ayU0uES9j":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `false`,
            framerResponsiveScreen: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ot as __FramerMetadata__, $ as default, $e as queryParamNames };
//# sourceMappingURL=Ej-nVdSOQkU8qc_vQRAL8Utj_RhgBiUidfksAyM38Vg.pIxYGjOS.mjs.map
