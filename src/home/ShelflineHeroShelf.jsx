import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useReducedMotion } from "@/motionSystem";
import SeltzerCan from "@/products/SeltzerCan";
import { integrateShelflinePointer, projectShelflineMotion } from "./shelflineMotionMath";

/**
 * Native Shelfline DsHero reconstruction, hero-only.
 *
 * Verified original source:
 * framer/framer-helpful-instance-487483-clean-stack-6w0x/
 * scripts/vendor/yRjE-3lOcR-8CcVxQN-_fzlJXBzPAOcxn_R_MhzDr50.EFHiYFIo.mjs
 *
 * Native controller preserves the recovered pointer integration:
 * target=(pointer-sceneCentre)/sceneSize; smoothed += (target-smoothed)*.07
 * rotateX=7 - smoothY*6*tilt; rotateY=-16 + smoothX*14*tilt
 * spotlightX=50 + smoothX*60%; spotlightY=42 + smoothY*50%.
 *
 * CMS/domain data, cart, navigation and product imagery remain Lagom-owned.
 */
const MOBILE_BREAKPOINT = "(min-width: 810px) and (hover: hover) and (pointer: fine)";

export default function ShelflineHeroShelf({ products, tilt = 1 }) {
  const rootRef = useRef(null);
  const sceneRef = useRef(null);
  const unitRef = useRef(null);
  const targetsRef = useRef({ x: 0, y: 0 });
  const [entered, setEntered] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const touchUntilRef = useRef(0);
  const reducedMotion = useReducedMotion();
  const items = (Array.isArray(products) ? products : []).filter(Boolean);
  const mid = Math.ceil(items.length / 2);
  const rows = [items.slice(0, mid), items.slice(mid)].filter(row => row.length);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      setEntered(true);
      return undefined;
    }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setEntered(true);
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(root);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    const root = rootRef.current;
    const scene = sceneRef.current;
    const unit = unitRef.current;
    if (!root || !scene || !unit || reducedMotion) return undefined;

    const query = window.matchMedia(MOBILE_BREAKPOINT);
    const visible = { current: true };
    let observer;
    let raf = 0;
    let currentX = 0;
    let currentY = 0;
    let active = false;
    const target = targetsRef.current;

    const onPointerMove = event => {
      const rect = scene.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      target.x = (event.clientX - rect.left) / rect.width - 0.5;
      target.y = (event.clientY - rect.top) / rect.height - 0.5;
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    const tick = () => {
      if (!active) return;
      if (visible.current && !document.hidden) {
        const next = integrateShelflinePointer({ x: currentX, y: currentY }, target);
        currentX = next.x;
        currentY = next.y;
        const projected = projectShelflineMotion(next, tilt);
        unit.style.transform = projected.transform;
        scene.style.setProperty("--shs-sx", projected.spotlightX);
        scene.style.setProperty("--shs-sy", projected.spotlightY);
      }
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      active = false;
      cancelAnimationFrame(raf);
      raf = 0;
      target.x = 0;
      target.y = 0;
      unit.style.removeProperty("transform");
      scene.style.removeProperty("--shs-sx");
      scene.style.removeProperty("--shs-sy");
    };
    const start = () => {
      if (active || !query.matches) return;
      active = true;
      root.addEventListener("pointermove", onPointerMove, { passive: true });
      root.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(tick);
    };
    const sync = () => {
      if (query.matches) start();
      else {
        root.removeEventListener("pointermove", onPointerMove);
        root.removeEventListener("pointerleave", onLeave);
        stop();
      }
    };
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(entries => {
        visible.current = entries[0]?.isIntersecting ?? true;
      });
      observer.observe(scene);
    }
    query.addEventListener("change", sync);
    sync();
    return () => {
      query.removeEventListener("change", sync);
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerleave", onLeave);
      observer?.disconnect();
      stop();
    };
  }, [reducedMotion, tilt]);

  useEffect(() => {
    if (!activeId) return undefined;
    const timeout = window.setTimeout(() => setActiveId(null), 2100);
    return () => window.clearTimeout(timeout);
  }, [activeId]);

  if (!items.length) return null;

  const showProduct = id => { setActiveId(id); };
  const onProductClick = (event, id) => {
    if (event.detail === 0 || !window.matchMedia("(hover: none)").matches) return;
    if (activeId !== id || Date.now() > touchUntilRef.current) {
      event.preventDefault();
      touchUntilRef.current = Date.now() + 3200;
      showProduct(id);
    }
  };
  const productsMarkup = items.map((product, index) => (
    <Link
      className="shs__product"
      data-active={activeId === product.id ? "true" : "false"}
      onPointerEnter={event => { if (event.pointerType === "mouse") showProduct(product.id); }}
      onFocus={() => showProduct(product.id)}
      onClick={event => onProductClick(event, product.id)}
      key={product.id}
      to={`/product/${encodeURIComponent(product.id)}`}
      style={{ "--shs-index": index }}
      aria-label={`Discover ${product.name}${product.thcMgPerCan != null ? `, ${product.thcMgPerCan} milligrams THC per can` : ""}`}
    >
      <span className="shs__product-shadow" aria-hidden="true" />
      <span className="shs__flavor" aria-hidden="true" data-flavor={product.id}>
        <span className="shs__fruit shs__fruit--rear" />
        <span className="shs__fruit shs__fruit--front" />
      </span>
      <svg className="shs__splash" viewBox="0 0 180 160" fill="none" aria-hidden="true" focusable="false">
        <path className="shs__splash-arc shs__splash-arc--left" d="M90 147 C44 130 21 88 39 49 C43 40 50 32 56 29" />
        <path className="shs__splash-arc shs__splash-arc--right" d="M90 147 C132 130 158 89 143 52 C140 43 136 36 131 32" />
        <circle className="shs__drop shs__drop--one" cx="49" cy="32" r="4" />
        <circle className="shs__drop shs__drop--two" cx="140" cy="40" r="3" />
        <circle className="shs__drop shs__drop--three" cx="95" cy="15" r="2.5" />
      </svg>
      <span className="shs__can" aria-hidden="true">
        <SeltzerCan product={product} decorative eager={index < 2} sizes="(max-width: 809px) 44vw, (max-width: 1200px) 16vw, 172px" />
      </span>
      <span className="shs__tag" aria-hidden="true">
        <span className="shs__tag-hole" />
        <strong>{product.flavor || product.name}</strong>
        {product.thcMgPerCan != null && <small>{product.thcMgPerCan} mg THC / can</small>}
        <span className="shs__tag-cta">Discover flavor ↗</span>
      </span>
    </Link>
  ));

  return (
    <div className={`shs ${entered ? "shs--entered" : ""}`} ref={rootRef} data-motion={reducedMotion ? "reduced" : "full"}>
      <div className="shs__scene" ref={sceneRef} aria-label="Explore our four THC seltzer flavors">
        <div className="shs__unit" ref={unitRef}>
          {rows.map((row, rowIndex) => (
            <div className="shs__row" key={rowIndex} style={{ "--shs-row": rowIndex }}>
              <div className="shs__objects">{row.map(product => productsMarkup[items.indexOf(product)])}</div>
              <div className="shs__plank" aria-hidden="true">
                <i className="shs__plank-top" />
                <i className="shs__plank-front" />
                <i className="shs__plank-left" />
              </div>
            </div>
          ))}
        </div>
        <div className="shs__mobile-products">{productsMarkup.map((node, index) => React.cloneElement(node, { key: `mobile-${items[index].id}` }))}</div>
      </div>
      <p className="shs__mobile-hint">Explore flavors <span aria-hidden="true">→</span></p>
    </div>
  );
}
