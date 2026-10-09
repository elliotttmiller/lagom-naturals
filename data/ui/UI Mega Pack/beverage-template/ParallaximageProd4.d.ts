export interface Parallaximageprod4Props {
  /**
   * Image
   */
  image?: string;
  /**
   * Parallax Y — pass as `verticalParallaxAmount` not `parallaxY`.
   * Range: max: 100, step: 5
   * @default 30
   */
  verticalParallaxAmount?: number;
  /**
   * Parallax X — pass as `horizontalParallaxAmount` not `parallaxX`.
   * Range: max: 100, step: 5
   * @default 0
   */
  horizontalParallaxAmount?: number;
  /**
   * Border
   */
  border?: string;
  /**
   * Radius — pass as `borderRadius` not `radius`.
   * Range: min: 0, max: 100, step: 1
   * @default 0
   */
  borderRadius?: string;
  /**
   * Shadow — pass as `boxShadow` not `shadow`.
   */
  boxShadow?: string;
  /** Additional properties */
  [key: string]: unknown;
}
