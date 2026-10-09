export interface Singlefaq2Props {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Closed" → JvYeiyGgx
   *   "Open" → uBxACbOVl
   */
  variant?: 'Closed' | 'Open' | 'uBxACbOVl' | 'JvYeiyGgx';
  /**
   * Question — pass as `luq3uZp5T` not `question`.
   * @default "Is it an energy drink?"
   */
  luq3uZp5T?: string;
  onluq3uZp5TChange?: string;
  /**
   * Answer — pass as `DMVNB_5NU` not `answer`.
   * @default "Yes, but built around smoother functional support instead of overload.  Does it contain alcohol?"
   */
  DMVNB_5NU?: string;
  onDMVNB_5NUChange?: string;
  /** Additional properties */
  [key: string]: unknown;
}
