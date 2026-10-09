/**
 * Note: This interface may be incomplete.
 * Unresolved spread operators: borderRadiusControl
 * These may contain additional properties from external modules.
 */
export interface Googlemaps6Props {
  /**
   * Location — pass as `coordinates` not `location`.
   * @default "Framer B.V."
   */
  coordinates?: string;
  /**
   * Zoom
   * Range: min: 0, max: 25, step: 1
   * @default 15
   */
  zoom?: number;
  /** Additional properties */
  [key: string]: unknown;
}
