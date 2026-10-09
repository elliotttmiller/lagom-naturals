export interface Productcard11Props {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Version 1" → QXmAHKumC
   *   "Version 2" → NPNMwdere
   *   "Version 3" → LSs_Qyvsg
   */
  variant?: 'Version 1' | 'Version 2' | 'Version 3' | 'QXmAHKumC' | 'NPNMwdere' | 'LSs_Qyvsg';
  /**
   * Link — pass as `zNomss0Hu` not `link`.
   */
  zNomss0Hu?: string;
  /**
   * Image 1 — pass as `t_wCHCu3L` not `image1`.
   */
  t_wCHCu3L?: string;
  /**
   * Product Type — pass as `zbLf7nA9u` not `productType`.
   * @default "CREAM FILLED"
   */
  zbLf7nA9u?: string;
  onzbLf7nA9uChange?: string;
  /**
   * Title — pass as `OY08iNrnQ` not `title`.
   * @default "Creamy Blossom"
   */
  OY08iNrnQ?: string;
  onOY08iNrnQChange?: string;
  /**
   * Price — pass as `dQFljyQ1P` not `price`.
   * @default "17.50"
   */
  dQFljyQ1P?: string;
  ondQFljyQ1PChange?: string;
  /** Additional properties */
  [key: string]: unknown;
}
