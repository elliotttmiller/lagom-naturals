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
    ((e.id = `ds-fonts`), (e.rel = `stylesheet`), (e.href = A), document.head.appendChild(e));
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
function b(e, n) {
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
function x(e, t, n) {
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
function S(e) {
  let t = !!e.customFonts;
  return {
    D: {
      fontFamily: F(
        t,
        e.displayFont,
        `var(--ds-font-d, 'Gabarito')`,
        `Inter, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? N(e.displayFont, 700) : `var(--ds-font-dw, 700)`,
      fontStyle: t && e.displayFont && e.displayFont.fontStyle ? e.displayFont.fontStyle : `normal`,
    },
    B: {
      fontFamily: F(
        t,
        e.bodyFont,
        `var(--ds-font-b, 'Manrope')`,
        `Inter, system-ui, -apple-system, Arial, sans-serif`
      ),
      fontWeight: t ? N(e.bodyFont, 400) : `var(--ds-font-bw, 400)`,
    },
    M: {
      fontFamily: F(
        t,
        e.monoFont,
        `var(--ds-font-m, 'Azeret Mono')`,
        `ui-monospace, SFMono-Regular, Menlo, monospace`
      ),
      fontWeight: t ? N(e.monoFont, 400) : `var(--ds-font-mw, 400)`,
    },
  };
}
function C(e, t) {
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
function w(e) {
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
function T(e, t, n, a = 0.16) {
  let [o, s] = i(!1),
    c = v(),
    l = w(t);
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
              (o = x(() => {
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
function E(e) {
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
function D(e, t) {
  let [n, o] = i(t),
    s = a(``);
  return (
    Q(() => {
      let t = 0,
        n = 0,
        i = 0;
      try {
        let e = r;
        ((!e.__ltCms || typeof e.__ltCms != `object`) && (e.__ltCms = {}), (e.__ltCms[Z] = 1));
      } catch {}
      let a = () => {
          let t = E(e);
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
function O() {
  let e = D(`site`, X.site || [])[0] || (X.site || [])[0] || {},
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
function k(e) {
  let {
      eyebrow: t = `FAQ`,
      heading: n = `Questions at|*the counter.*`,
      subCopy: r = `Files, licences, refunds and tools: the answers, short.`,
      pages: o = `home`,
      askTitle: l = `Something else?`,
      askCopy: u = `Write to us with your order number and we reply the same day.`,
      askButton: d = `Ask us`,
      askLink: f = `/contact`,
      bpHint: p = `auto`,
    } = e,
    m = R(e),
    { D: h, B: g, M: x } = S(e);
  _();
  let w = y(),
    E = I(),
    k = v(),
    j = O(),
    M = a(null),
    { w: N } = b(M, p),
    P = T(M, w, E);
  C(M, w);
  let F = N < 810,
    L = N >= 810 && N < 1100,
    B = D(`faq`, X.faq),
    V = String(o || ``)
      .trim()
      .toLowerCase(),
    H = B.filter(
      (e) =>
        !V ||
        !e.f3 ||
        String(e.f3)
          .toLowerCase()
          .split(/[,;\s]+/)
          .includes(V)
    ),
    [G, Z] = i(0);
  return s(`section`, {
    ref: M,
    className: `ds ds-sec dsq${P ? ` is-on` : ``}${F ? ` is-ph` : L ? ` is-tab` : ``}${k ? ` is-still` : ``}`,
    style: { ...z(m), ...g, ...e.style },
    "aria-label": K(n),
    children: [
      c(`link`, { rel: `stylesheet`, href: A }),
      c(`style`, { dangerouslySetInnerHTML: { __html: W + Y + $ } }),
      s(`div`, {
        className: `ds-wrap dsq-wrap`,
        children: [
          s(`aside`, {
            className: `dsq-side`,
            children: [
              s(`p`, {
                className: `dsq-eb`,
                style: { ...x, ...J(P, 0) },
                children: [c(`i`, { "aria-hidden": !0 }), t],
              }),
              c(q, {
                text: n,
                on: P,
                D: h,
                size: F ? `clamp(38px,11vw,52px)` : `clamp(42px,4.4vw,68px)`,
                lh: 0.96,
                delay: 80,
              }),
              c(`p`, { className: `dsq-sub`, style: J(P, 240), children: r }),
              s(`div`, {
                className: `dsq-ask`,
                style: J(P, 340, 30),
                children: [
                  c(`b`, { style: h, children: l }),
                  c(`p`, { children: u }),
                  c(U, { href: f, label: d, kind: `solid` }),
                  j.email &&
                    c(`a`, {
                      className: `dsq-mail`,
                      href: `mailto:${j.email}`,
                      style: x,
                      children: j.email,
                    }),
                ],
              }),
            ],
          }),
          c(`div`, {
            className: `dsq-rack`,
            children: H.map((e, t) => {
              let n = G === t,
                r = `dsq-a-${t}`;
              return s(
                `div`,
                {
                  className: `dsq-tag${n ? ` is-open` : ``}`,
                  style: {
                    ...J(P, 160 + t * 60, 26),
                    "--t": `${t % 4 == 0 ? -1.8 : t % 4 == 1 ? 1.4 : t % 4 == 2 ? -0.8 : 1}deg`,
                  },
                  children: [
                    c(`span`, { className: `dsq-str`, "aria-hidden": !0 }),
                    s(`button`, {
                      type: `button`,
                      className: `dsq-q`,
                      "aria-expanded": n,
                      "aria-controls": r,
                      onClick: () => Z(n ? -1 : t),
                      children: [
                        c(`span`, { className: `dsq-hole`, "aria-hidden": !0 }),
                        s(`span`, {
                          className: `dsq-sku`,
                          style: x,
                          children: [`Q-`, String(t + 1).padStart(2, `0`)],
                        }),
                        c(`span`, { className: `dsq-qt`, style: h, children: e.f1 }),
                        s(`span`, {
                          className: `dsq-pm`,
                          "aria-hidden": !0,
                          children: [c(`i`, {}), c(`i`, {})],
                        }),
                      ],
                    }),
                    c(`div`, {
                      className: `dsq-a`,
                      id: r,
                      role: `region`,
                      "aria-label": e.f1,
                      "aria-hidden": !n,
                      children: c(`div`, {
                        className: `dsq-ain`,
                        children: c(`p`, { children: e.f2 }),
                      }),
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
var A,
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
  ee = e(() => {
    (n(),
      l(),
      u(),
      p(),
      (A = `../../styles/css2-a59a76.css`),
      (j = `clamp(1280px, 92vw, 1520px)`),
      (M = (e) => {
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
      (N = (e, t) => {
        if (!e) return t;
        if (e.fontWeight) return Number(e.fontWeight) || t;
        let n = String(e.fontSelector || ``).match(/-(\d{3})/);
        return n ? Number(n[1]) : t;
      }),
      (P = (e) => {
        let t = M(e).replace(/"/g, `'`).trim();
        return t ? (t.includes(`,`) || t.startsWith(`'`) ? t : `'${t}'`) : ``;
      }),
      (F = (e, t, n, r) => {
        let i = e ? P(t) : ``;
        return `${i ? `${i}, ` : ``}${n}, ${r}`;
      }),
      (I = () => {
        let [e, n] = i(!1);
        return (
          t(() => {
            n(r.matchMedia(`(prefers-reduced-motion: reduce)`).matches);
          }, []),
          e
        );
      }),
      (L = {
        bone: `#F3EBDD`,
        ink: `#17100C`,
        brass: `#FF6A2B`,
        pine: `#2B1C17`,
        fog: `#DACFBF`,
        stone: `#8C7F73`,
        cloud: `#FFFFFF`,
        night: `#1F1512`,
      }),
      (R = (e) => ({
        bone: e.bone || L.bone,
        ink: e.ink || L.ink,
        brass: e.brass || L.brass,
        pine: e.pine || L.pine,
        fog: e.fog || L.fog,
        stone: e.stone || L.stone,
        cloud: e.cloud || L.cloud,
        night: e.night || L.night,
      })),
      (z = (e) => ({
        "--ds-bone": e.bone,
        "--ds-ink": e.ink,
        "--ds-brass": e.brass,
        "--ds-pine": e.pine,
        "--ds-fog": e.fog,
        "--ds-stone": e.stone,
        "--ds-cloud": e.cloud,
        "--ds-night": e.night,
      })),
      (B = {
        bone: { type: h.Color, title: `Paper`, defaultValue: L.bone },
        ink: { type: h.Color, title: `Ink`, defaultValue: L.ink },
        brass: { type: h.Color, title: `Accent`, defaultValue: L.brass },
        pine: { type: h.Color, title: `Deep`, defaultValue: L.pine },
        fog: { type: h.Color, title: `Line`, defaultValue: L.fog },
        stone: { type: h.Color, title: `Muted`, defaultValue: L.stone },
        cloud: { type: h.Color, title: `White`, defaultValue: L.cloud },
        night: { type: h.Color, title: `Dark`, defaultValue: L.night },
      }),
      (V = {
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
      (H = {
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
      (U = ({
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
      (W = `
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
      (G = (e) =>
        String(e || ``)
          .split(/\s+/)
          .filter(Boolean)
          .map((e) => {
            let t = e.match(/^\*(.+?)\*([.,!?;:’']*)$/);
            return t
              ? { t: t[1], tail: t[2], acc: !0 }
              : { t: e.replace(/\*/g, ``), tail: ``, acc: !1 };
          })),
      (K = (e) =>
        String(e || ``)
          .replace(/\*/g, ``)
          .replace(/\s*\|\s*/g, ` `)
          .replace(/\s+/g, ` `)
          .trim()),
      (q = ({
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
          "aria-label": K(e),
          style: { ...n, fontSize: i, lineHeight: a, ...(d || {}) },
          children: String(e)
            .split(`|`)
            .map((e, t) =>
              c(
                `span`,
                {
                  className: `ds-hd-l`,
                  "aria-hidden": !0,
                  children: G(e).map((e, t) => {
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
      (J = (e, t = 0, n = 22) => ({
        opacity: +!!e,
        translate: e ? `0 0` : `0 ${n}px`,
        transition: `opacity .9s ease ${t}ms, translate 1s cubic-bezier(.2,.8,.2,1) ${t}ms`,
      })),
      (Y = `
.ds[data-kb] *,.ds[data-kb] *::before,.ds[data-kb] *::after{transition:none!important}
.ds-sec{position:relative;z-index:10;display:block;width:100%;--sp:.5;--pp:0}
.ds-rev{position:relative;width:100%;--rv:1} .ds-rev-in{position:relative} .ds-rev-sp{height:0}
.ds-rev.is-act{--rv:0;--t:min(var(--h),100vh);--t:min(var(--h),100svh);z-index:var(--layer,9);margin-top:calc(var(--t)*-1)}
.ds-rev.is-act>.ds-rev-in{position:sticky;top:calc(100vh - var(--t));top:calc(100svh - var(--t))} .ds-rev.is-act>.ds-rev-sp{height:var(--t)}
/* the lifting edge throws a shadow on the section beneath, and that section comes out of the dark as it is uncovered */
.ds-rev.is-act>.ds-rev-in::before{content:"";position:absolute;z-index:40;left:0;right:0;top:0;height:120px;translate:0 calc((1 - var(--rv))*var(--t));background:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,0));opacity:min(1,calc(var(--rv)*(1 - var(--rv))*9));pointer-events:none}
.ds-rev.is-act>.ds-rev-in::after{content:"";position:absolute;z-index:39;left:0;right:0;top:0;height:var(--t);background:#000;opacity:calc((1 - var(--rv))*.16);pointer-events:none}
.ds-wrap{--pad:56px;width:100%;max-width:calc(${j} + var(--pad)*2);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
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
        faq: [
          {
            slug: `q1`,
            f1: `How do I get the files after paying?`,
            f2: `Instantly. Checkout opens your download page and the same link lands in your inbox. Every file stays in your account, so you can download again any time.`,
            f3: `home`,
            n1: `1`,
          },
          {
            slug: `q2`,
            f1: `Can I use a product on client work?`,
            f2: `Yes. Every licence covers personal and commercial projects, including client work, with no credit needed. The only limit is reselling the files themselves.`,
            f3: `home`,
            n1: `2`,
          },
          {
            slug: `q3`,
            f1: `What if I buy a bundle that has something I already own?`,
            f2: `Email us with your order number and we take the price you paid off the bundle. It usually takes a few hours.`,
            f3: `home`,
            n1: `3`,
          },
          {
            slug: `q4`,
            f1: `Do updates cost anything?`,
            f2: `No. Every product is updated for life. When a new version ships you get an email with the link, and the download page always holds the latest files.`,
            f3: `home`,
            n1: `4`,
          },
          {
            slug: `q5`,
            f1: `Which tools do I need?`,
            f2: `It depends on the aisle: Figma for the UI kit, Lightroom or Camera Raw for presets, Notion for the studio templates, Canva for the social kit. Each product page lists it.`,
            f3: `home`,
            n1: `5`,
          },
          {
            slug: `q6`,
            f1: `Is there a refund policy?`,
            f2: `Digital files cannot be returned, so we do not refund on change of mind. If something is broken or not as described, write to us and we fix it or refund it.`,
            f3: `home,products`,
            n1: `6`,
          },
          {
            slug: `q7`,
            f1: `How does the course work?`,
            f2: `Fourteen video lessons, streamed from your account, with worksheets to download. You keep access for life and get every new lesson we add.`,
            f3: `courses`,
            n1: `7`,
          },
          {
            slug: `q8`,
            f1: `Can I pay in my currency?`,
            f2: `Checkout shows local prices in most countries and takes cards, Apple Pay, Google Pay and PayPal. Taxes are handled at checkout.`,
            f3: `home`,
            n1: `8`,
          },
        ],
      }),
      (Z = `DsFaq@cms1`),
      (Q = r === void 0 ? d : t),
      ($ = `
.dsq{position:relative;background:var(--ds-bone);color:var(--ds-ink);padding:clamp(90px,10vw,150px) 0;overflow:clip;z-index:12}
.dsq::before{content:"";position:absolute;inset:0;background-image:radial-gradient(color-mix(in srgb,var(--ds-ink) 9%,transparent) 1px,transparent 1.3px);background-size:24px 24px;mask-image:linear-gradient(180deg,transparent,#000 20%,#000 80%,transparent);-webkit-mask-image:linear-gradient(180deg,transparent,#000 20%,#000 80%,transparent);pointer-events:none}
.dsq-wrap{position:relative;display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.45fr);gap:clamp(40px,6vw,96px);align-items:start}
.dsq-side{position:sticky;top:100px;display:flex;flex-direction:column;align-items:flex-start;gap:20px}
.dsq-eb{display:inline-flex;align-items:center;gap:10px;margin:0;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--ds-acc)} .dsq-eb i{width:22px;height:2px;background:var(--ds-brass);border-radius:2px}
.dsq .ds-hd{text-transform:none;font-weight:800!important;letter-spacing:-.035em} .dsq .ds-it{color:var(--ds-acc)}
.dsq-sub{margin:0;max-width:400px;font-size:16.5px;line-height:1.6;color:var(--ds-mut)}
.dsq-ask{display:flex;flex-direction:column;align-items:flex-start;gap:12px;max-width:360px;padding:22px 22px 24px;background:var(--ds-night);color:var(--ds-bone);border-radius:14px;rotate:-1.2deg;transition:rotate .5s cubic-bezier(.34,1.56,.64,1)} .dsq-ask:hover{rotate:0deg}
.dsq-ask b{font-size:22px;font-weight:800;letter-spacing:-.03em} .dsq-ask p{margin:0 0 6px;font-size:14.5px;line-height:1.55;color:color-mix(in srgb,var(--ds-bone) 78%,transparent)}
.dsq-ask .ds-btn.ds-solid{--fill:var(--ds-bone);--fg2:var(--ds-ink);--holefill:var(--ds-night)} .dsq-mail{font-size:11px;letter-spacing:.06em;color:color-mix(in srgb,var(--ds-bone) 70%,transparent);text-decoration:none} .dsq-mail:hover{color:var(--ds-brass)}
/* the rack */
.dsq-rack{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px 20px;align-items:start;padding-top:10px}
.dsq-tag{position:relative;rotate:var(--t);transform-origin:20px 0;transition:rotate .5s cubic-bezier(.34,1.56,.64,1)} .dsq-tag:hover,.dsq-tag.is-open{rotate:0deg} .dsq-tag.is-open{grid-column:1/-1}
.dsq-str{position:absolute;left:19px;top:-18px;width:1.5px;height:22px;background:color-mix(in srgb,var(--ds-ink) 40%,transparent);transform-origin:50% 0;rotate:calc(var(--t)*-1)}
.dsq-q{position:relative;display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:14px;width:100%;margin:0;padding:18px 18px 18px 30px;border:0;background:var(--ds-cloud);color:var(--ds-ink);text-align:left;cursor:pointer;font:inherit;clip-path:polygon(16px 0,100% 0,100% 100%,16px 100%,0 22px);box-shadow:0 20px 40px -24px color-mix(in srgb,var(--ds-ink) 50%,transparent);transition:background .3s,color .3s}
.dsq-q::after{content:"";position:absolute;inset:0;pointer-events:none;box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--ds-ink) 14%,transparent);clip-path:inherit}
.dsq-hole{position:absolute;left:13px;top:16px;width:7px;height:7px;border-radius:50%;background:var(--ds-bone);box-shadow:0 0 0 1.5px color-mix(in srgb,var(--ds-ink) 35%,transparent)}
.dsq-sku{font-size:10px;letter-spacing:.12em;color:var(--ds-mut)} .dsq-qt{font-size:clamp(16px,1.3vw,19px);line-height:1.25;font-weight:700;letter-spacing:-.02em}
.dsq-pm{position:relative;width:26px;height:26px;border-radius:50%;background:color-mix(in srgb,var(--ds-ink) 7%,transparent);flex:none;transition:background .3s,transform .45s cubic-bezier(.34,1.56,.64,1)} .dsq-pm i{position:absolute;left:50%;top:50%;width:10px;height:2px;margin:-1px 0 0 -5px;background:currentColor;transition:transform .35s} .dsq-pm i:last-child{transform:rotate(90deg)}
.dsq-q:hover .dsq-pm{background:var(--ds-brass)} .dsq-tag.is-open .dsq-q{background:var(--ds-ink);color:var(--ds-bone)} .dsq-tag.is-open .dsq-q::after{box-shadow:none} .dsq-tag.is-open .dsq-pm{background:var(--ds-brass);color:var(--ds-ink);transform:rotate(45deg)} .dsq-tag.is-open .dsq-sku{color:var(--ds-brass)}
.dsq-a{display:grid;grid-template-rows:0fr;transition:grid-template-rows .5s cubic-bezier(.2,.8,.2,1)} .dsq-tag.is-open .dsq-a{grid-template-rows:1fr} .dsq-ain{overflow:hidden;min-height:0}
.dsq-a p{margin:0;padding:16px 18px 6px 30px;max-width:640px;font-size:15.5px;line-height:1.6;color:var(--ds-ink)}
.dsq.is-tab .dsq-wrap{grid-template-columns:1fr} .dsq.is-tab .dsq-side{position:relative;top:auto}
.dsq.is-ph .dsq-wrap{grid-template-columns:1fr;gap:34px} .dsq.is-ph .dsq-side{position:relative;top:auto} .dsq.is-ph .dsq-rack{grid-template-columns:1fr;gap:16px} .dsq.is-ph .dsq-tag{rotate:0deg} .dsq.is-ph .dsq-ask{rotate:0deg}
@media (prefers-reduced-motion:reduce){.dsq-a{transition:none} .dsq-tag{rotate:0deg}}`),
      m(k, {
        ...H,
        eyebrow: { type: h.String, title: `Eyebrow`, defaultValue: `FAQ` },
        heading: {
          type: h.String,
          title: `Heading`,
          defaultValue: `Questions at|*the counter.*`,
          description: `*word* = accent, | = line break`,
        },
        subCopy: {
          type: h.String,
          title: `Sub copy`,
          displayTextArea: !0,
          defaultValue: `Files, licences, refunds and tools: the answers, short.`,
        },
        pages: {
          type: h.String,
          title: `Show FAQ for`,
          defaultValue: `home`,
          description: `Questions whose Pages field contains this word (empty = all)`,
        },
        askTitle: { type: h.String, title: `Card title`, defaultValue: `Something else?` },
        askCopy: {
          type: h.String,
          title: `Card copy`,
          displayTextArea: !0,
          defaultValue: `Write to us with your order number and we reply the same day.`,
        },
        askButton: { type: h.String, title: `Card button`, defaultValue: `Ask us` },
        askLink: { type: h.Link, title: `Card link`, defaultValue: `/contact` },
        ...B,
        ...V,
      }));
  });
export { ee as n, k as t };
//# sourceMappingURL=DsFaq.BS2R3ms-.mjs.map
