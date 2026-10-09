export interface Textrevealscroll2Props {
  /**
   * Text
   */
  text?: string;
  /**
   * Font
   */
  font?: string;
  /**
   * Base Color
   */
  baseColor?: string;
  /**
   * Reveal Color
   */
  revealColor?: string;
  /**
   * Mode
   * Options: "lines" | "words" | "chars"
   * @default "lines"
   */
  mode?: 'lines' | 'words' | 'chars';
  /**
   * Section Trigger — pass as `useSectionTrigger` not `sectionTrigger`.
   */
  useSectionTrigger?: boolean;
  /**
   * Section ID
   */
  sectionId?: string;
  /**
   * Custom Viewport Position — pass as `useInViewPercent` not `customViewportPosition`.
   */
  useInViewPercent?: boolean;
  /**
   * Start at (%) — pass as `inViewPercent` not `startAt(%)`.
   * Range: min: 0, max: 100, step: 10
   */
  inViewPercent?: number;
  /**
   * Viewport — pass as `viewportAnchor` not `viewport`.
   * Options: "top" | "center" | "bottom"
   */
  viewportAnchor?: 'top' | 'center' | 'bottom';
  /**
   * Replay
   */
  replay?: boolean;
  /**
   * Duration
   * Range: min: 0, max: 5, step: 0.1
   */
  duration?: number;
  /**
   * Ease — pass as `easeType` not `ease`.
   * Options: "smooth" | "back" | "elastic" | "linear"
   */
  easeType?: 'smooth' | 'back' | 'elastic' | 'linear';
  /**
   * Overflow — pass as `overflowMode` not `overflow`.
   * Options: "visible" | "hidden"
   */
  overflowMode?: 'visible' | 'hidden';
  /**
   * Opacity — pass as `initialOpacity` not `opacity`.
   * Range: min: 0, max: 1, step: 0.05
   */
  initialOpacity?: number;
  /**
   * Blur — pass as `initialBlur` not `blur`.
   * Range: min: 0, max: 20, step: 1
   */
  initialBlur?: number;
  /**
   * Scale — pass as `initialScale` not `scale`.
   * Range: min: 0, max: 3, step: 0.1
   */
  initialScale?: number;
  /**
   * Offset X — pass as `initialX` not `offsetX`.
   * Range: max: 300, step: 1
   */
  initialX?: number;
  /**
   * Offset Y — pass as `initialY` not `offsetY`.
   * Range: max: 300, step: 1
   */
  initialY?: number;
  /**
   * Random Order
   */
  randomOrder?: boolean;
  /**
   * Random Amount
   * Range: min: 0.1, max: 2, step: 0.1
   */
  randomAmount?: number;
  /** Additional properties */
  [key: string]: unknown;
}
