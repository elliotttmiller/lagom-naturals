import React, { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  m,
  Presence,
  motionTokens,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "@/motionSystem";

function clampIndex(index, length) {
  return Math.max(0, Math.min(length - 1, index));
}

export default function HomeProductStage({
  kind,
  items,
  eyebrow,
  headingId,
  headingText,
  intro,
  ariaLabel,
  getKey = (item) => item.id || item.name,
  getTitle = (item) => item.name,
  getAccent = (item) => item.accent || "#597d90",
  renderMedia,
  renderDetails,
}) {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [mobile, setMobile] = useState(false);
  const [pulse, setPulse] = useState({ side: null, key: 0 });
  const dragX = useMotionValue(0);
  const titleDrag = useTransform(dragX, (value) => value * 0.08);
  const mediaDrag = useTransform(dragX, (value) => value * 0.2);
  const nearDrag = useTransform(dragX, (value) => value * 0.34);
  const farDrag = useTransform(dragX, (value) => value * 0.13);

  const activeItem = items[activeIndex];
  const itemKey = getKey(activeItem);
  const activeTitle = getTitle(activeItem);
  const accent = getAccent(activeItem);
  const progress = items.length ? ((activeIndex + 1) / items.length) * 100 : 100;

  useEffect(() => {
    const query = window.matchMedia("(max-width: 899px)");
    const sync = () => setMobile(query.matches);
    sync();
    query.addEventListener?.("change", sync);
    return () => query.removeEventListener?.("change", sync);
  }, []);

  useEffect(() => {
    dragX.set(0);
  }, [activeIndex, dragX]);

  const goTo = (nextIndex, nextDirection, pulseSide = null) => {
    const bounded = clampIndex(nextIndex, items.length);
    if (bounded === activeIndex) return;
    setDirection(nextDirection);
    setActiveIndex(bounded);
    if (pulseSide) setPulse((current) => ({ side: pulseSide, key: current.key + 1 }));
  };

  const previous = (source = "button") => goTo(activeIndex - 1, -1, source === "button" ? "previous" : null);
  const next = (source = "button") => goTo(activeIndex + 1, 1, source === "button" ? "next" : null);

  const handleDragEnd = (_, info) => {
    if (!mobile || reduceMotion) return;
    const distance = Math.abs(info.offset.x);
    const velocity = Math.abs(info.velocity.x);
    if (distance < 46 && velocity < 430) return;
    if (info.offset.x < 0 || info.velocity.x < -430) next("swipe");
    else if (info.offset.x > 0 || info.velocity.x > 430) previous("swipe");
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous("keyboard");
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next("keyboard");
    }
  };

  const mediaInitial = reduceMotion
    ? false
    : { opacity: 0, x: direction * 86, rotate: direction * 4, scale: 0.9 };
  const mediaExit = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, x: direction * -72, rotate: direction * -3, scale: 0.94 };
  const titleInitial = reduceMotion ? false : { opacity: 0, x: direction * 46, y: 18 };
  const titleExit = reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -38, y: -12 };

  const accentNodes = useMemo(() => [0, 1, 2, 3], []);

  return (
    <div
      className={`home-product-stage home-product-stage--${kind}`}
      style={{ "--stage-accent": accent, "--stage-progress": `${progress}%` }}
      role="group"
      aria-roledescription="product slider"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <h2 id={headingId} className="sr-only">{headingText}</h2>
      <div className="home-product-stage__wash" aria-hidden="true" />

      <div className="home-product-stage__topline">
        <p>{eyebrow}</p>
        <span>{intro}</span>
      </div>

      <div className="home-product-stage__visual">
        <m.div
          className="home-product-stage__gesture"
          drag={mobile && !reduceMotion ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.075}
          dragMomentum={false}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          style={{ x: dragX, touchAction: "pan-y" }}
          onDragEnd={handleDragEnd}
          aria-hidden="true"
        />

        <m.div className="home-product-stage__accent-field home-product-stage__accent-field--far" style={{ x: farDrag }} aria-hidden="true">
          {accentNodes.slice(0, 2).map((slot) => <span key={slot} className={`home-product-stage__accent home-product-stage__accent--${slot + 1}`} />)}
        </m.div>

        <m.div className="home-product-stage__title-parallax" style={{ x: titleDrag }} aria-hidden="true">
          <Presence mode="popLayout" initial={false}>
            <m.div
              key={`title-${itemKey}`}
              className="home-product-stage__backdrop-title"
              initial={titleInitial}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={titleExit}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.58, ease: motionTokens.easeSoft }}
            >
              {activeTitle}
            </m.div>
          </Presence>
        </m.div>

        <m.div className="home-product-stage__accent-field home-product-stage__accent-field--near" style={{ x: nearDrag }} aria-hidden="true">
          {accentNodes.slice(2).map((slot) => <span key={slot} className={`home-product-stage__accent home-product-stage__accent--${slot + 1}`} />)}
        </m.div>

        <m.div className="home-product-stage__media-parallax" style={{ x: mediaDrag }}>
          <Presence mode="popLayout" initial={false}>
            <m.div
              key={`media-${itemKey}`}
              className="home-product-stage__media"
              initial={mediaInitial}
              animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              exit={mediaExit}
              transition={reduceMotion ? { duration: 0 } : motionTokens.springMedia}
            >
              {renderMedia(activeItem, activeIndex)}
            </m.div>
          </Presence>
        </m.div>

        <div className="home-product-stage__desktop-nav" aria-label={`${ariaLabel} navigation`}>
          <m.button
            type="button"
            className="home-product-stage__nav home-product-stage__nav--previous"
            onClick={() => previous("button")}
            disabled={activeIndex === 0}
            aria-label="Previous"
            whileHover={reduceMotion ? undefined : { scale: 1.045 }}
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
          >
            <ArrowLeft aria-hidden="true" />
            {pulse.side === "previous" && <m.span key={`prev-${pulse.key}`} className="home-product-stage__nav-wave" initial={{ opacity: 0.45, scale: 0.72 }} animate={{ opacity: 0, scale: 1.85 }} transition={{ duration: 0.58, ease: motionTokens.easeSoft }} />}
          </m.button>
          <m.button
            type="button"
            className="home-product-stage__nav home-product-stage__nav--next"
            onClick={() => next("button")}
            disabled={activeIndex === items.length - 1}
            aria-label="Next"
            whileHover={reduceMotion ? undefined : { scale: 1.045 }}
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
          >
            <ArrowRight aria-hidden="true" />
            {pulse.side === "next" && <m.span key={`next-${pulse.key}`} className="home-product-stage__nav-wave" initial={{ opacity: 0.45, scale: 0.72 }} animate={{ opacity: 0, scale: 1.85 }} transition={{ duration: 0.58, ease: motionTokens.easeSoft }} />}
          </m.button>
        </div>
      </div>

      <Presence mode="popLayout" initial={false}>
        <m.div
          key={`details-${itemKey}`}
          className="home-product-stage__details"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.46, ease: motionTokens.easeSoft }}
        >
          {renderDetails(activeItem, activeIndex)}
        </m.div>
      </Presence>

      <div className="home-product-stage__progress" aria-hidden="true">
        <span>{String(activeIndex + 1).padStart(2, "0")} <i>/</i> {String(items.length).padStart(2, "0")}</span>
        <b><i /></b>
        <em>Swipe</em>
      </div>

      <span className="sr-only" aria-live="polite">{activeTitle}, item {activeIndex + 1} of {items.length}</span>
    </div>
  );
}
