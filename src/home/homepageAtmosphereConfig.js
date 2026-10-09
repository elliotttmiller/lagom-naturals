// Shared atmosphere tuning keeps the gate and homepage on the same sky field.
export const HOMEPAGE_ATMOSPHERE = {
  background: {
    type: "gradient",
    color: "#1689D8",
    colorTop: "#0879D1",
    colorBottom: "#37A5E4",
    angle: 180,
  },
  parallax: { enabled: true, strengthX: 0.018, strengthY: 0.012, ease: 0.012 },
  intro: { trigger: "inView", distance: 0.45, duration: 1.4, fade: false },
  fogColor: "#1986D2",
  tint: "#F5FBFF",
  speed: 9,
  opacity: 0.62,
};
