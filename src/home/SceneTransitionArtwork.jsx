/**
 * Visual-only scene transition graphics inspired by the donut-template scroll
 * reveal and SVG-draw components. No Framer/GSAP runtime and no scroll capture.
 * This layer is decorative and never receives pointer or keyboard input.
 */
export default function SceneTransitionArtwork({ index, word, variant = "light" }) {
  return (
    <div className={`lagom-scene-transition lagom-scene-transition--${variant}`} aria-hidden="true">
      <span className="lagom-scene-transition__index">{String(index).padStart(2, "0")}</span>
      <span className="lagom-scene-transition__word">{word}</span>
      <span className="lagom-scene-transition__line" />
      <span className="lagom-scene-transition__orb" />
    </div>
  );
}
