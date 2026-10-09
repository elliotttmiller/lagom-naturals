export interface Arctext1Props {
  /**
   * Text
   */
  text?: string;
  /**
   * Preset
   * Options: "none" | "arch" | "stadium_wide" | "s_curve" | "diagonal" | "wave_single" | "wave_double" | "infinity_loop"
   */
  preset?: 'none' | 'arch' | 'stadium_wide' | 's_curve' | 'diagonal' | 'wave_single' | 'wave_double' | 'infinity_loop';
  /**
   * Typography
   */
  typography?: Record<string, unknown>;
  /**
   * Animation
   */
  animation?: Record<string, unknown>;
  /**
   * Style
   */
  style?: Record<string, unknown>;
  /**
   * Path Settings — pass as `pathCustom` not `pathSettings`.
   */
  pathCustom?: Record<string, unknown>;
  /** Additional properties */
  [key: string]: unknown;
}
