export interface StickygridgalleryProps {
  /**
   * Source
   * Options: "cms" | "images"
   * @default "cms"
   */
  source?: 'cms' | 'images';
  /**
   * Collection — pass as `children` not `collection`.
   */
  children?: string;
  /**
   * Styled Text — pass as `styledContent` not `styledText`.
   */
  styledContent?: string;
  /**
   * Images
   * @default []
   */
  images?: unknown[];
  /**
   * Background — pass as `backgroundColor` not `background`.
   * @default "#FFFFFF"
   */
  backgroundColor?: string;
  /**
   * Scroll Length
   * Range: min: 150, max: 1000, step: 5
   * @default 425
   */
  scrollLength?: number;
  /**
   * Grid
   */
  grid?: Record<string, unknown>;
  /**
   * Animation
   */
  animation?: Record<string, unknown>;
  /**
   * Text — pass as `content` not `text`.
   */
  content?: Record<string, unknown>;
  /**
   * Mobile — pass as `responsive` not `mobile`.
   */
  responsive?: Record<string, unknown>;
  /**
   * Lightbox
   */
  lightbox?: Record<string, unknown>;
  /**
   * Advanced
   */
  advanced?: Record<string, unknown>;
  /** Additional properties */
  [key: string]: unknown;
}
