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
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = E), document.head.appendChild(e));
  }, []);
}
function _() {
  let e = f(),
    t = null;
  try {
    t = g.current();
  } catch {}
  return e || (t !== null && t !== g.preview);
}
function v() {
  let e = f(),
    [t, n] = i(!1);
  return (
    d(() => {
      !e && g.current() !== g.canvas && r !== void 0 && n(!0);
    }, [e]),
    t
  );
}
function y(e, n) {
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
function te(e) {
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
function ne(e, t) {
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
function x(e) {
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
function S(e, t, n, a = 0.16) {
  let [o, s] = i(!1),
    c = _(),
    l = x(t);
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
      eyebrow: t = `Notes`,
      heading: n = `Notes from|*the back room.*`,
      subCopy: r = `Pricing, launches and what we learned selling files.`,
      allLabel: i = `All notes`,
      allLink: o = `/notes`,
      readLabel: l = `Read the note`,
      count: u = 3,
      bpHint: d = `auto`,
    } = e,
    f = L(e),
    { D: p, B: m, M: h } = te(e);
  ee();
  let g = v(),
    b = F(),
    x = _(),
    C = a(null),
    { w: T } = y(C, d),
    D = S(C, g, b);
  ne(C, g);
  let O = T < 810,
    k = T >= 810 && T < 1100,
    j = w(`posts`, Y.posts).slice(0, Math.max(1, u));
  return s(`section`, {
    ref: C,
    className: `ds ds-sec dsn${D ? ` is-on` : ``}${O ? ` is-ph` : k ? ` is-tab` : ``}${x ? ` is-still` : ``}`,
    style: { ...R(f), ...m, ...e.style },
    "aria-label": G(n),
    children: [
      c(`link`, { rel: `stylesheet`, href: E }),
      c(`style`, { dangerouslySetInnerHTML: { __html: H + J + $ } }),
      s(`div`, {
        className: `ds-wrap`,
        children: [
          s(`div`, {
            className: `dsn-head`,
            children: [
              s(`div`, {
                children: [
                  s(`p`, {
                    className: `dsn-eb`,
                    style: { ...h, ...q(D, 0) },
                    children: [c(`i`, { "aria-hidden": !0 }), t],
                  }),
                  c(K, {
                    text: n,
                    on: D,
                    D: p,
                    size: O ? `clamp(38px,11vw,52px)` : `clamp(42px,4.4vw,68px)`,
                    lh: 0.96,
                    delay: 80,
                  }),
                ],
              }),
              s(`div`, {
                className: `dsn-side`,
                style: q(D, 240),
                children: [
                  c(`p`, { className: `dsn-sub`, children: r }),
                  s(`a`, {
                    className: `dsn-all`,
                    href: o,
                    style: h,
                    children: [i, c(U, { s: 13 })],
                  }),
                ],
              }),
            ],
          }),
          c(`div`, {
            className: `dsn-grid`,
            children: j.map((e, t) =>
              s(
                `a`,
                {
                  className: `dsn-card`,
                  href: `/notes/${e.slug || ``}`,
                  style: q(D, 200 + t * 90, 30),
                  children: [
                    s(`span`, {
                      className: `dsn-under`,
                      children: [
                        s(`span`, {
                          className: `dsn-meta`,
                          style: h,
                          children: [
                            c(`span`, { children: e.f7 }),
                            c(`i`, { "aria-hidden": !0 }),
                            c(`span`, { children: e.f3 }),
                          ],
                        }),
                        c(`span`, { className: `dsn-sum`, children: e.f4 }),
                        s(`span`, {
                          className: `dsn-read`,
                          style: h,
                          children: [l, c(U, { s: 13 })],
                        }),
                      ],
                    }),
                    s(`span`, {
                      className: `dsn-flap`,
                      children: [
                        c(`span`, {
                          className: `dsn-cov`,
                          children: c(`img`, {
                            ...A(Z(e), `(max-width: 809px) 100vw, 33vw`),
                            alt: ``,
                            loading: `lazy`,
                            decoding: `async`,
                          }),
                        }),
                        c(`span`, { className: `dsn-kind`, style: h, children: e.f2 }),
                        c(`b`, { className: `dsn-title`, style: p, children: e.f1 }),
                        c(`span`, { className: `dsn-fold`, "aria-hidden": !0 }),
                      ],
                    }),
                  ],
                },
                e.slug || t
              )
            ),
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
      (H = `
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
      (U = ({ s: e = 15 }) =>
        c(`svg`, {
          width: e,
          height: e,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `2`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          "aria-hidden": !0,
          children: c(`path`, { d: `M5 12h14M13 5l7 7-7 7` }),
        })),
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
      (X = `DsNotes@cms1`),
      (Z = (e, t = `img`) => String((e && e[t]) || ``).split(`?`)[0]),
      (Q = r === void 0 ? d : t),
      ($ = `
.dsn{position:relative;background:var(--ds-bone);color:var(--ds-ink);padding:clamp(90px,10vw,150px) 0;overflow:clip;z-index:12}
.dsn-head{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.7fr);gap:26px clamp(32px,5vw,80px);align-items:end;margin-bottom:clamp(36px,4vw,60px)}
.dsn-eb{display:inline-flex;align-items:center;gap:10px;margin:0 0 18px;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)} .dsn-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dsn .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dsn .ds-it{color:var(--ds-acc)}
.dsn-side{display:flex;flex-direction:column;align-items:flex-start;gap:16px;padding-bottom:8px} .dsn-sub{margin:0;font-size:16.5px;line-height:1.6;color:var(--ds-mut);max-width:380px}
.dsn-all{display:inline-flex;align-items:center;gap:8px;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-ink);text-decoration:none} .dsn-all svg{color:var(--ds-brass);transition:translate .3s} .dsn-all:hover svg{translate:4px 0}
.dsn-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:26px;perspective:1600px}
/* folded card: the flap hinges at the top and lifts on hover to show the summary underneath */
.dsn-card{position:relative;display:block;aspect-ratio:4/4.6;text-decoration:none;color:var(--ds-ink);transform-style:preserve-3d}
.dsn-under{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;gap:12px;padding:22px;background:var(--ds-cloud);border-radius:8px;box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--ds-ink) 12%,transparent)}
.dsn-meta{display:flex;align-items:baseline;gap:8px;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--ds-mut)} .dsn-meta i{flex:1;border-bottom:1px dotted color-mix(in srgb,var(--ds-ink) 35%,transparent);translate:0 -3px}
.dsn-sum{font-size:15px;line-height:1.55;color:var(--ds-ink)} .dsn-read{display:inline-flex;align-items:center;gap:8px;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--ds-acc)} .dsn-read svg{transition:translate .3s} .dsn-card:hover .dsn-read svg{translate:4px 0}
.dsn-flap{position:absolute;left:0;right:0;top:0;height:62%;display:flex;flex-direction:column;justify-content:flex-end;gap:8px;padding:20px;border-radius:8px 8px 4px 4px;background:var(--ds-night);color:var(--ds-bone);overflow:hidden;transform-origin:50% 0;transform:rotateX(0);transition:transform .8s cubic-bezier(.2,.8,.2,1),box-shadow .8s;box-shadow:0 20px 40px -20px rgba(0,0,0,.6);backface-visibility:hidden}
.dsn-card:hover .dsn-flap,.dsn-card:focus-visible .dsn-flap{transform:rotateX(-58deg);box-shadow:0 60px 60px -30px rgba(0,0,0,.5)}
.dsn-cov{position:absolute;inset:0} .dsn-cov img{width:100%;height:100%;object-fit:cover;display:block;opacity:.55;mix-blend-mode:luminosity} .dsn-cov::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.1),color-mix(in srgb,var(--ds-night) 85%,transparent))}
.dsn-kind{position:relative;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-brass)} .dsn-title{position:relative;font-size:clamp(18px,1.6vw,23px);line-height:1.1;font-weight:800;letter-spacing:-.02em;text-wrap:balance}
.dsn-fold{position:absolute;left:0;right:0;bottom:0;height:10px;background:linear-gradient(180deg,transparent,rgba(0,0,0,.4))}
.dsn.is-tab .dsn-head{grid-template-columns:1fr} .dsn.is-tab .dsn-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.dsn.is-ph .dsn-head{grid-template-columns:1fr;gap:18px;margin-bottom:26px} .dsn.is-ph .dsn-grid{grid-template-columns:1fr;gap:18px} .dsn.is-ph .dsn-card{aspect-ratio:auto;min-height:360px}
.dsn.is-ph .dsn-flap{position:relative;height:auto;min-height:200px;transform:none!important} .dsn.is-ph .dsn-under{position:relative;padding-top:18px;border-radius:0 0 8px 8px}
@media (prefers-reduced-motion:reduce){.dsn-flap{transition:none}}`),
      m(T, {
        ...V,
        eyebrow: { type: h.String, title: `Eyebrow`, defaultValue: `Notes` },
        heading: {
          type: h.String,
          title: `Heading`,
          defaultValue: `Notes from|*the back room.*`,
          description: `*word* = accent, | = line break`,
        },
        subCopy: {
          type: h.String,
          title: `Sub copy`,
          defaultValue: `Pricing, launches and what we learned selling files.`,
        },
        count: { type: h.Number, title: `Notes shown`, min: 1, max: 6, step: 1, defaultValue: 3 },
        readLabel: { type: h.String, title: `Read label`, defaultValue: `Read the note` },
        allLabel: { type: h.String, title: `All link label`, defaultValue: `All notes` },
        allLink: { type: h.Link, title: `All link`, defaultValue: `/notes` },
        ...z,
        ...B,
      }));
  });
export { re as n, T as t };
//# sourceMappingURL=DsNotes.C-HWWnLQ.mjs.map
