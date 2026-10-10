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
function ee() {
  d(() => {
    if (typeof document > `u` || document.getElementById(`ds-fonts`)) return;
    let e = document.createElement(`link`);
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = b), document.head.appendChild(e));
  }, []);
}
function te() {
  let e = f(),
    t = null;
  try {
    t = g.current();
  } catch {}
  return e || (t !== null && t !== g.preview);
}
function _() {
  let e = f(),
    [t, n] = i(!1);
  return (
    d(() => {
      !e && g.current() !== g.canvas && r !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function ne(e, n) {
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
function re(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: k(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? D(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: k(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? D(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: k(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? D(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function ie(e, t) {
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
function ae(e) {
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
function v(e) {
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
function oe(e, t) {
  let [n, o] = i(t),
    s = a(``);
  return (
    K(() => {
      let t = 0,
        n = 0,
        i = 0;
      try {
        let e = r;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[W] = 1));
      } catch {}
      let a = () => {
          let t = v(e);
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
function y(e) {
  let {
      index: t = `02`,
      eyebrow: n = `Products`,
      title: o = `Everything on|*the shelf.*`,
      intro:
        l = `Templates, ebooks, presets, courses, fonts and icons. Every product is a file you own: instant download, lifetime updates.`,
      crumbs: u = `Home:/, Products:/products`,
      facts: f = `31|products;6|aisles;4.9|average rating`,
      showPhoto: p = !1,
      photoAlt: m = ``,
      shelfLabel: h = `On the shelf`,
      bpHint: g = `auto`,
    } = e,
    v = M(e),
    { D: y, B: S, M: C } = re(e);
  ee();
  let w = _(),
    E = A(),
    D = te(),
    O = a(null),
    { w: k } = ne(O, g);
  ie(O, w);
  let j = ae(w),
    [P, F] = i(!1);
  d(() => {
    if (!w || !j) return;
    let e = r.setTimeout(() => F(!0), 100);
    return () => r.clearTimeout(e);
  }, [w, j]);
  let I = P || D || E,
    R = k < 810,
    W = k >= 810 && k < 1100,
    K = x(e.photo, ``),
    X = p && !!K,
    se = oe(`products`, U.products)
      .filter((e) => e.f1)
      .slice(0, R ? 4 : 5),
    Z = q(u),
    Q = J(f)
      .map((e) => {
        let t = e.split(`|`).map((e) => e.trim());
        return { v: t[0] || ``, l: t[1] || `` };
      })
      .filter((e) => e.v),
    $ = String(t || ``)
      .replace(/\D/g, ``)
      .slice(0, 3);
  return s(`section`, {
    ref: O,
    className: `ds ds-sec ds-dark dsph${I ? ` is-in` : ``}${R ? ` is-ph` : W ? ` is-tab` : ``}${D ? ` is-still` : ``}${X ? ` has-ph` : ``}`,
    style: { ...N(v), ...S, ...e.style },
    "aria-label": z(o),
    children: [
      c(`link`, { rel: `stylesheet`, href: b }),
      c(`style`, { dangerouslySetInnerHTML: { __html: L + H + Y } }),
      c(`div`, {
        className: `dsph-wall`,
        "aria-hidden": !0,
        children: c(`i`, { className: `dsph-spot` }),
      }),
      s(`div`, {
        className: `ds-wrap dsph-wrap`,
        children: [
          s(`div`, {
            className: `dsph-top`,
            style: V(I, 0, -10),
            children: [
              Z.length > 0 &&
                c(`nav`, {
                  className: `dsph-crumbs`,
                  "aria-label": `Breadcrumb`,
                  style: C,
                  children: Z.map((e, t) =>
                    s(
                      `span`,
                      {
                        children: [
                          t > 0 && c(`i`, { "aria-hidden": !0, children: `/` }),
                          c(`a`, { href: e.h, children: e.l }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              $ &&
                s(`span`, {
                  className: `dsph-idx`,
                  style: C,
                  "aria-hidden": !0,
                  children: [`№ `, $],
                }),
            ],
          }),
          s(`div`, {
            className: `dsph-grid`,
            children: [
              s(`div`, {
                className: `dsph-copy`,
                children: [
                  n &&
                    s(`p`, {
                      className: `dsph-eb`,
                      style: { ...C, ...V(I, 100) },
                      children: [c(`i`, { "aria-hidden": !0 }), n],
                    }),
                  c(B, {
                    text: o,
                    on: I,
                    D: y,
                    tag: `h1`,
                    size: R ? `clamp(40px,12vw,56px)` : `clamp(46px,5.6vw,88px)`,
                    lh: 0.92,
                    delay: 160,
                  }),
                  l && c(`p`, { className: `dsph-intro`, style: V(I, 320), children: l }),
                  Q.length > 0 &&
                    c(`ul`, {
                      className: `dsph-facts`,
                      style: { ...C, ...V(I, 400) },
                      children: Q.map((e, t) =>
                        s(
                          `li`,
                          {
                            children: [
                              c(`b`, { style: y, children: e.v }),
                              c(`i`, { "aria-hidden": !0 }),
                              c(`span`, { children: e.l }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                ],
              }),
              X
                ? s(`div`, {
                    className: `dsph-photo`,
                    style: V(I, 300, 30),
                    children: [
                      c(`img`, {
                        ...T(K, `(max-width: 809px) 100vw, 40vw`),
                        alt: m,
                        loading: `eager`,
                        decoding: `async`,
                      }),
                      c(`span`, { className: `dsph-pf`, "aria-hidden": !0 }),
                    ],
                  })
                : s(`div`, {
                    className: `dsph-shelf`,
                    "aria-hidden": !0,
                    children: [
                      c(`span`, { className: `dsph-sl`, style: C, children: h }),
                      c(`div`, {
                        className: `dsph-tiles`,
                        children: se.map((e, t) =>
                          s(
                            `span`,
                            {
                              className: `dsph-tile`,
                              style: { "--col": e.f12 || `#5B4BFF`, "--i": t },
                              children: [
                                G(e) &&
                                  c(`img`, {
                                    ...T(G(e), `140px`),
                                    alt: ``,
                                    loading: `lazy`,
                                    decoding: `async`,
                                  }),
                                c(`b`, { style: y, children: e.f1 }),
                              ],
                            },
                            e.slug || t
                          )
                        ),
                      }),
                      s(`span`, {
                        className: `dsph-plank`,
                        children: [c(`i`, { className: `pt` }), c(`i`, { className: `pf` })],
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
var b,
  x,
  S,
  C,
  w,
  T,
  E,
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
  X = e(() => {
    (n(),
      l(),
      u(),
      p(),
      (b = `../../styles/css2-a59a76.css`),
      (x = (e, t) =>
        e && typeof e == `object` && e.src
          ? String(e.src).split(`?`)[0]
          : typeof e == `string` && e.trim()
            ? e.trim().split(`?`)[0]
            : t),
      (S = `clamp(1280px, 92vw, 1520px)`),
      (C = [160, 320, 480, 800, 1200, 1600]),
      (w = (e) => {
        let t =
            String(e || ``)
              .trim()
              .split(`,`)
              .pop() || ``,
          n = t.match(/(\d+(?:\.\d+)?)px/),
          r = t.match(/(\d+(?:\.\d+)?)vw/),
          i = n ? parseFloat(n[1]) * 2 : r ? (parseFloat(r[1]) / 100) * 1600 * 1.25 : 1600;
        return C.find((e) => e >= i) || 1600;
      }),
      (T = (e, t) => {
        let n = String(e || ``),
          r = n.split(`?`)[0];
        if (/framerusercontent\.com\/images\//.test(n)) {
          let e = w(t);
          return {
            src: `${r}?scale-down-to=${e <= 512 ? 512 : e <= 1024 ? 1024 : 2048}`,
            srcSet: `${r}?scale-down-to=512 512w, ${r}?scale-down-to=1024 1024w, ${r}?scale-down-to=2048 2048w`,
            sizes: t,
          };
        }
        if (/images\.unsplash\.com\//.test(n)) {
          let e = w(t),
            n = (e) => `${r}?w=${e}&q=70&fm=jpg&auto=format`;
          return {
            src: n(e),
            srcSet: C.filter((t) => t <= Math.max(e * 2, 480))
              .map((e) => `${n(e)} ${e}w`)
              .join(`, `),
            sizes: t,
          };
        }
        return { src: n };
      }),
      (E = (e) => {
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
      (D = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (O = (e) => {
        let t = E(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (k = (e, t, n, r) => {
        let i = e ? O(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (A = () => {
        let [e, n] = i(!1);
        return (
          t(() => {
            n(r.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (j = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (M = (e) => ({
        bone: e.bone || j.bone,
        ink: e.ink || j.ink,
        brass: e.brass || j.brass,
        pine: e.pine || j.pine,
        fog: e.fog || j.fog,
        stone: e.stone || j.stone,
        cloud: e.cloud || j.cloud,
        night: e.night || j.night,
      })),
      (N = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (P = {
        bone: { type: h.Color, title: `Paper`, defaultValue: j.bone },
        ink: { type: h.Color, title: `Ink`, defaultValue: j.ink },
        brass: { type: h.Color, title: `Accent`, defaultValue: j.brass },
        pine: { type: h.Color, title: `Deep`, defaultValue: j.pine },
        fog: { type: h.Color, title: `Line`, defaultValue: j.fog },
        stone: { type: h.Color, title: `Muted`, defaultValue: j.stone },
        cloud: { type: h.Color, title: `White`, defaultValue: j.cloud },
        night: { type: h.Color, title: `Dark`, defaultValue: j.night },
      }),
      (F = {
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
      (I = {
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
      (L = `
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
      (R = (e) =>
        String(e || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => {
            let t = e.match(/^\*(.+?)\*([.,!?;:’']*)$/);
            return t
              ? { t: t[1], tail: t[2], acc: !0 }
              : { t: e.replace(/\*/g, ``), tail: ``, acc: !1 };
          })),
      (z = (e) =>
        String(e || ``)
          .replace(/\*/g, ``)
          .replace(/\s*\|\s*/g, ` `)
          .replace(/\s+/g, ` `)
          .trim()),
      (B = ({
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
          "aria-label": z(e),
          style: { ...n, fontSize: i, lineHeight: a, ...(d || {}) },
          children: String(e)
            .split(`|`)
            .map((e, t) =>
              c(
                `span`,
                {
                  className: `ds-hd-l`,
                  "aria-hidden": !0,
                  children: R(e).map((e, t) => {
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
      (V = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (H = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${S} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
      (U = {
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
      (W = `DsPageHero@cms1`),
      (G = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (K = r === void 0 ? d : t),
      (q = (e) =>
        String(e || ``)
          .split(`,`)
          .map((e) => e.trim())
          .filter(Boolean)
          .map((e) => {
            let t = e.indexOf(`:`);
            return { l: t < 0 ? e : e.slice(0, t).trim(), h: t < 0 ? `/` : e.slice(t + 1).trim() };
          })),
      (J = (e) =>
        String(e || ``)
          .split(`;`)
          .map((e) => e.trim())
          .filter(Boolean)),
      (Y = `
.dsph{position:relative;background:var(--ds-night);color:var(--ds-bone);padding:calc(72px + clamp(48px,6vw,96px)) 0 0;overflow:hidden;z-index:11;isolation:isolate}
.dsph-wall{position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(110% 80% at 80% 0,color-mix(in srgb,var(--ds-pine) 70%,var(--ds-night)),var(--ds-night) 60%)}
.dsph-wall::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0 118px,color-mix(in srgb,var(--ds-cloud) 3%,transparent) 118px 119px);opacity:.7}
.dsph-spot{position:absolute;inset:-20%;background:radial-gradient(34% 30% at 68% 78%,color-mix(in srgb,var(--ds-brass) 20%,transparent),transparent 70%);opacity:0;transition:opacity 1.2s .3s} .is-in .dsph-spot{opacity:1}
.dsph-wrap{position:relative;z-index:1}
.dsph-top{display:flex;justify-content:space-between;align-items:baseline;gap:20px;margin-bottom:clamp(30px,4vw,56px)}
.dsph-crumbs{display:flex;flex-wrap:wrap;gap:8px;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 60%,transparent)} .dsph-crumbs a{color:inherit;text-decoration:none;transition:color .3s} .dsph-crumbs a:hover{color:var(--ds-bone)} .dsph-crumbs span:last-child a{color:var(--ds-brass)} .dsph-crumbs i{font-style:normal;margin-right:8px;opacity:.5}
.dsph-idx{font-size:12px;letter-spacing:.14em;color:color-mix(in srgb,var(--ds-bone) 55%,transparent)}
.dsph-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);gap:clamp(24px,4vw,64px);align-items:end}
.dsph-copy{display:flex;flex-direction:column;align-items:flex-start;gap:20px;padding-bottom:clamp(50px,6vw,84px)}
.dsph-eb{display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)} .dsph-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dsph .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dsph .ds-it{color:var(--ds-brass)}
.dsph-intro{margin:0;max-width:560px;font-size:17px;line-height:1.55;color:color-mix(in srgb,var(--ds-bone) 76%,transparent)}
.dsph-facts{list-style:none;margin:6px 0 0;padding:0;display:flex;flex-wrap:wrap;gap:10px 28px}
.dsph-facts li{display:flex;align-items:baseline;gap:10px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 62%,transparent)} .dsph-facts b{font-size:22px;font-weight:800;letter-spacing:-.02em;color:var(--ds-bone);text-transform:none} .dsph-facts i{width:22px;border-bottom:1px dotted color-mix(in srgb,var(--ds-bone) 40%,transparent);translate:0 -4px}
/* the quiet shelf */
.dsph-shelf{position:relative;align-self:end;display:flex;flex-direction:column;justify-content:flex-end;min-height:280px;perspective:1200px;perspective-origin:50% 0}
.dsph-sl{position:absolute;right:0;top:0;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:color-mix(in srgb,var(--ds-bone) 50%,transparent)}
.dsph-tiles{position:relative;z-index:1;display:flex;align-items:flex-end;justify-content:space-evenly;gap:12px;padding:0 6% 10px;transform-style:preserve-3d}
.dsph-tile{position:relative;display:flex;align-items:flex-end;width:92px;height:118px;padding:9px;border-radius:2px 5px 5px 2px;background:var(--col);color:#fff;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08),-6px 0 0 -2px color-mix(in srgb,var(--col) 55%,#000),0 26px 30px -18px rgba(0,0,0,.9);transform:rotateY(-10deg);opacity:0;translate:0 -40px;transition:opacity .5s ease calc(var(--i)*90ms + 300ms),translate 1s cubic-bezier(.34,1.4,.64,1) calc(var(--i)*90ms + 300ms)}
.is-in .dsph-tile{opacity:1;translate:0 0}
.dsph-tile:nth-child(2n){height:104px;width:86px} .dsph-tile:nth-child(3n){height:126px}
.dsph-tile img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.5;mix-blend-mode:luminosity} .dsph-tile::before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 35%,color-mix(in srgb,var(--col) 70%,#000))}
.dsph-tile b{position:relative;font-size:10px;line-height:1.05;font-weight:800;letter-spacing:-.01em;text-wrap:balance}
.dsph-plank{position:relative;display:block;height:14px;transform-style:preserve-3d;opacity:0;translate:60px 0;transition:opacity .8s ease .15s,translate 1s cubic-bezier(.2,.8,.2,1) .15s} .is-in .dsph-plank{opacity:1;translate:0 0}
.dsph-plank i{position:absolute;left:0;right:0;display:block}
.dsph-plank .pt{top:-8px;height:8px;background:linear-gradient(180deg,color-mix(in srgb,var(--ds-pine) 60%,var(--ds-cloud) 12%),color-mix(in srgb,var(--ds-pine) 85%,var(--ds-night)))}
.dsph-plank .pf{top:0;bottom:0;background:linear-gradient(180deg,color-mix(in srgb,var(--ds-pine) 70%,var(--ds-night)),var(--ds-night));box-shadow:0 22px 40px -10px rgba(0,0,0,.6)}
/* photo variant */
.dsph-photo{position:relative;align-self:end;margin-bottom:clamp(40px,5vw,70px);aspect-ratio:4/3;border-radius:10px;overflow:hidden;background:var(--ds-pine);box-shadow:0 40px 80px -30px rgba(0,0,0,.8)} .dsph-photo img{width:100%;height:100%;object-fit:cover;display:block} .dsph-pf{position:absolute;inset:0;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-bone) 12%,transparent);border-radius:inherit;pointer-events:none}
/* tablet + phone */
.dsph.is-tab .dsph-grid{grid-template-columns:1fr;gap:20px} .dsph.is-tab .dsph-copy{padding-bottom:20px} .dsph.is-tab .dsph-shelf{min-height:200px} .dsph.is-tab .dsph-photo{margin-bottom:0;border-radius:10px 10px 0 0}
.dsph.is-ph{padding-top:calc(64px + 40px)} .dsph.is-ph .dsph-grid{grid-template-columns:1fr;gap:14px} .dsph.is-ph .dsph-copy{padding-bottom:14px;gap:16px} .dsph.is-ph .dsph-top{margin-bottom:26px} .dsph.is-ph .dsph-intro{font-size:16px}
.dsph.is-ph .dsph-shelf{min-height:170px;margin:0 -16px} .dsph.is-ph .dsph-tile{width:66px;height:86px;padding:7px} .dsph.is-ph .dsph-tile b{font-size:8.5px} .dsph.is-ph .dsph-tile:nth-child(2n){height:76px;width:60px} .dsph.is-ph .dsph-tile:nth-child(3n){height:92px} .dsph.is-ph .dsph-sl{display:none}
.dsph.is-ph .dsph-photo{margin:0 -16px;border-radius:0} .dsph.is-ph .dsph-facts b{font-size:18px}
@media (prefers-reduced-motion:reduce){.dsph-tile,.dsph-plank{transition:none;opacity:1;translate:0 0}}`),
      m(y, {
        ...I,
        index: { type: h.String, title: `Page number`, defaultValue: `02` },
        eyebrow: { type: h.String, title: `Eyebrow`, defaultValue: `Products` },
        title: {
          type: h.String,
          title: `Title`,
          description: `*word* = accent, | = line break`,
          displayTextArea: !0,
          defaultValue: `Everything on|*the shelf.*`,
        },
        intro: {
          type: h.String,
          title: `Intro`,
          displayTextArea: !0,
          defaultValue: `Templates, ebooks, presets, courses, fonts and icons. Every product is a file you own: instant download, lifetime updates.`,
        },
        crumbs: {
          type: h.String,
          title: `Crumbs`,
          description: `Label:/path, …`,
          defaultValue: `Home:/, Products:/products`,
        },
        facts: {
          type: h.String,
          title: `Facts`,
          description: `Value|Label; …`,
          defaultValue: `31|products;6|aisles;4.9|average rating`,
        },
        shelfLabel: {
          type: h.String,
          title: `Shelf label`,
          defaultValue: `On the shelf`,
          hidden: (e) => !!e.showPhoto,
        },
        showPhoto: {
          type: h.Boolean,
          title: `Show photo`,
          description: `A photo instead of the small shelf`,
          defaultValue: !1,
        },
        photo: { type: h.ResponsiveImage, title: `Photo`, hidden: (e) => !e.showPhoto },
        photoAlt: {
          type: h.String,
          title: `Photo alt`,
          defaultValue: ``,
          hidden: (e) => !e.showPhoto,
        },
        ...P,
        ...F,
      }));
  });
export { X as n, y as t };
//# sourceMappingURL=DsPageHero.BMIkCPXD.mjs.map
