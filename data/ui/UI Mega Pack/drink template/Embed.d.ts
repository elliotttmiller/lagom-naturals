export interface EmbedProps {
  /**
   * Options: "url" | "html"
   * @default "url"
   */
  type?: 'url' | 'html';
  /**
   * URL
   */
  url?: string;
  /**
   * HTML
   */
  html?: string;
  /**
   * Border
   */
  border?: string;
  /**
   * Radius
   */
  radius?: string;
  /**
   * Zoom
   * Range: min: 0.1, max: 1, step: 0.1
   * @default 1
   */
  zoom?: number;
  /** Additional properties */
  [key: string]: unknown;
}
