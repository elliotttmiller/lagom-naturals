export interface Stickyfootnote4Props {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Base" → gndt8Odsu
   *   "Hidden" → XRBWMRqaj
   */
  variant?: 'Base' | 'Hidden' | 'gndt8Odsu' | 'XRBWMRqaj';
  /**
   * Note — pass as `B85HEv4Ke` not `note`.
   * @default "Get a 10% discount when buying from the store."
   */
  B85HEv4Ke?: string;
  onB85HEv4KeChange?: string;
  /** Additional properties */
  [key: string]: unknown;
}
