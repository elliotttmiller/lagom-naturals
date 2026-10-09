export interface Cta3Props {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Variant 1" → t6QjBJQH9
   *   "Variant 2" → E69HO_QGe
   *   "Variant 3" → XRjP5Cd09
   *   "Variant 4" → pa39K6aJp
   *   "Variant 5" → KXrVBqbl1
   */
  variant?: 'Variant 1' | 'Variant 2' | 'Variant 3' | 'Variant 4' | 'Variant 5' | 't6QjBJQH9' | 'E69HO_QGe' | 'XRjP5Cd09' | 'pa39K6aJp' | 'KXrVBqbl1';
  /**
   * Title — pass as `OfHRPOZED` not `title`.
   * @default "Add to Cart"
   */
  OfHRPOZED?: string;
  onOfHRPOZEDChange?: string;
  /**
   * Fill — pass as `RyAdtOSXK` not `fill`.
   * @default "rgb(255, 255, 255)"
   */
  RyAdtOSXK?: string;
  /**
   * Text color — pass as `Jt36NHN_f` not `textColor`.
   * @default "var(--token-42ea8082-5244-4850-882c-34ee79535faf, rgb(5, 5, 5)) /* {"name":"Title"} */"
   */
  Jt36NHN_f?: string;
  /** Additional properties */
  [key: string]: unknown;
}
