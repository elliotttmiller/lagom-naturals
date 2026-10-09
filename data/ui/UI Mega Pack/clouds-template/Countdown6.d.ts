export interface Countdown6Props {
  /**
   * Opens — pass as `targetDate` not `opens`.
   * @default "2026-11-01T19:00:00.000Z"
   */
  targetDate?: string;
  /**
   * Numbers — pass as `numberFont` not `numbers`.
   * @default {"fontSize":"64px","variant":"Light","letterSpacing":"-0.02em","lineHeight":"1em","textAlign":"center"}
   */
  numberFont?: string;
  /**
   * Labels — pass as `labelFont` not `labels`.
   * @default {"fontSize":"13px","variant":"Regular","letterSpacing":"0.02em","lineHeight":"1em","textAlign":"center"}
   */
  labelFont?: string;
  /**
   * Number — pass as `numberColor` not `number`.
   * @default "#FFFFFF"
   */
  numberColor?: string;
  /**
   * Label — pass as `labelColor` not `label`.
   * @default "rgba(255, 255, 255, 0.6)"
   */
  labelColor?: string;
  /**
   * Separator — pass as `separatorColor` not `separator`.
   * @default "rgba(255, 255, 255, 0.4)"
   */
  separatorColor?: string;
  /**
   * Separators — pass as `showSeparators` not `separators`.
   * @default true
   */
  showSeparators?: boolean;
  /**
   * Gap
   * Range: min: 0, max: 120, step: 1
   * @default 28
   */
  gap?: number;
  /**
   * Label Gap
   * Range: min: 0, max: 48, step: 1
   * @default 12
   */
  labelGap?: number;
  /**
   * Labels
   * @default {"days":"Days","hours":"Hours","minutes":"Minutes","seconds":"Seconds"}
   */
  labels?: Record<string, unknown>;
  /**
   * When Over — pass as `expiredText` not `whenOver`.
   * @default "Now open."
   */
  expiredText?: string;
  /** Additional properties */
  [key: string]: unknown;
}
