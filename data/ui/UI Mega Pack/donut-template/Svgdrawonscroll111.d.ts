export interface Svgdrawonscroll111Props {
  /**
   * Section ID
   * @default "section1"
   */
  sectionId?: string;
  /**
   * SVG Path
   * @default "M1262.5 257.5C2024.33 551.666 3503.3 982.2 3324.5 351C3101 -438 2293 525 1424 1195.5C555 1866 -562.5 90.4996 468 351C1292.4 559.4 2529.5 1451.83 3045 1872"
   */
  svgPath?: string;
  /**
   * Stroke Color — pass as `color` not `strokeColor`.
   * @default "#000000"
   */
  color?: string;
  /**
   * Stroke Width
   * Range: min: 1, max: 200, step: 1
   * @default 109
   */
  strokeWidth?: number;
  /**
   * ViewBox — pass as `viewBox` not `viewbox`.
   * @default "0 0 3394 1915"
   */
  viewBox?: string;
  /** Additional properties */
  [key: string]: unknown;
}
