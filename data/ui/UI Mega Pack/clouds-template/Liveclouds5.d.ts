export interface Liveclouds5Props {
  /**
   * Texture — pass as `textureSource` not `texture`.
   * Options: "image" | "procedural"
   * @default "image"
   */
  textureSource?: 'image' | 'procedural';
  /**
   * Cloud Image — pass as `image` not `cloudImage`.
   */
  image?: string;
  /**
   * Puffiness
   * Range: min: 1, max: 12, step: 1
   * @default 5
   */
  puffiness?: number;
  /**
   * Softness
   * Range: min: 0, max: 1, step: 0.05
   * @default 0.5
   */
  softness?: number;
  /**
   * Tint
   * @default "#FFFFFF"
   */
  tint?: string;
  /**
   * Opacity
   * Range: min: 0, max: 1, step: 0.05
   * @default 1
   */
  opacity?: number;
  /**
   * Blending
   * Options: "normal" | "additive"
   * @default "normal"
   */
  blending?: 'normal' | 'additive';
  /**
   * Play
   * @default true
   */
  play?: boolean;
  /**
   * Speed
   * Range: min: 0, max: 300, step: 1
   * @default 30
   */
  speed?: number;
  /**
   * Direction
   * Options: "forward" | "backward"
   * @default "forward"
   */
  direction?: 'forward' | 'backward';
  /**
   * Fog Color
   * @default "#4584B4"
   */
  fogColor?: string;
  /**
   * Fog Near
   * Range: max: 3000, step: 10
   */
  fogNear?: number;
  /**
   * Fog Far
   * Range: min: 100, max: 10000, step: 50
   * @default 3000
   */
  fogFar?: number;
  /**
   * Depth Fade
   * Range: min: 0, max: 60, step: 1
   * @default 20
   */
  depthFade?: number;
  /**
   * Background
   */
  background?: Record<string, unknown>;
  /**
   * Clouds
   */
  clouds?: Record<string, unknown>;
  /**
   * Parallax
   */
  parallax?: Record<string, unknown>;
  /**
   * Camera
   */
  camera?: Record<string, unknown>;
  /**
   * Intro
   */
  intro?: Record<string, unknown>;
  /**
   * Mobile Quality — pass as `mobile` not `mobileQuality`.
   */
  mobile?: Record<string, unknown>;
  /**
   * Advanced
   */
  advanced?: Record<string, unknown>;
  /** Additional properties */
  [key: string]: unknown;
}
