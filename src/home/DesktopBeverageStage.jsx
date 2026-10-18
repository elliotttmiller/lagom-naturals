import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SeltzerCan from "@/products/SeltzerCan";
import "./desktop-beverage-stage.css";

/**
 * Desktop-only native beverage campaign stage.
 * The small-screen Shelfline experience is rendered independently by
 * HomeHeroPortal; this component intentionally owns no mobile animation.
 * Uses existing catalog objects and branded can artwork.
 */
export default function DesktopBeverageStage({ products = [] }) {
  const items = products.filter(Boolean);
  const [activeId, setActiveId] = useState(items[0]?.id ?? null);
  const selected = items.find(item => item.id === activeId) || items[0];
  if (!selected) return null;

  return (
    <div className="lagom-beverage-stage" aria-label="Discover Lagom sparkling THC seltzers">
      <div className="lagom-beverage-stage__halo" aria-hidden="true" />
      <div className="lagom-beverage-stage__ambient lagom-beverage-stage__ambient--left" aria-hidden="true" />
      <div className="lagom-beverage-stage__ambient lagom-beverage-stage__ambient--right" aria-hidden="true" />

      <div className="lagom-beverage-stage__collection" aria-label="Choose a flavor to feature">
        {items.map((product, index) => {
          const isActive = product.id === selected.id;
          return (
            <button
              type="button"
              key={product.id}
              className="lagom-beverage-stage__can"
              data-active={isActive ? "true" : "false"}
              style={{ "--beverage-index": index, "--beverage-count": items.length }}
              aria-label={`Feature ${product.flavor || product.name}`}
              aria-pressed={isActive}
              onClick={() => setActiveId(product.id)}
              onPointerEnter={event => {
                if (event.pointerType === "mouse") setActiveId(product.id);
              }}
              onFocus={() => setActiveId(product.id)}
            >
              <span className="lagom-beverage-stage__can-inner">
                <SeltzerCan product={product} decorative eager={index < 2} sizes="(min-width: 900px) 230px, 1px" />
              </span>
              <span className="lagom-beverage-stage__can-caption">{product.flavor || product.name}</span>
            </button>
          );
        })}
      </div>
      <div className="lagom-beverage-stage__editorial" aria-live="polite" aria-atomic="true">
        <span className="lagom-beverage-stage__overline">CHOOSE YOUR FLAVOR / {String(items.findIndex(p => p.id === selected.id) + 1).padStart(2, "0")}</span>
        <strong className="lagom-beverage-stage__flavor">{selected.flavor || selected.name}</strong>
        <span className="lagom-beverage-stage__details">
          {Number.isFinite(selected.thcMgPerCan) ? `${selected.thcMgPerCan} mg THC per can` : "See product for THC content"}
          {selected.canVolume ? ` · ${selected.canVolume}` : ""}
        </span>
        <Link className="lagom-beverage-stage__discover" to={`/product/${encodeURIComponent(selected.id)}`}>
          Explore flavor <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
      <div className="lagom-beverage-stage__baseline" aria-hidden="true"><span>MADE FOR THE MOMENT</span><span>FLAVOR FIRST · ALWAYS</span></div>
    </div>
  );
}
