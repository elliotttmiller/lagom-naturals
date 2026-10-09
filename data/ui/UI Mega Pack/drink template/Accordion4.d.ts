export interface Accordion4Props {
  /**
   * Variant
   * Friendly names map to internal IDs:
   *   "Phone 1" → ZFeh7I2zq
   *   "Phone 2" → FkZuTHYh8
   *   "Phone 3" → YR2cty7YO
   *   "Phone 4" → sDcC1bPJj
   *   "Phone 5" → T3EbiIKgZ
   *   "Variant 1" → gBbLfhc6W
   *   "Variant 2" → bNourtPyj
   *   "Variant 3" → QCrSqa6Em
   *   "Variant 4" → R4KvzMT7E
   *   "Variant 5" → XLjUbafbh
   */
  variant?: 'Phone 1' | 'Phone 2' | 'Phone 3' | 'Phone 4' | 'Phone 5' | 'Variant 1' | 'Variant 2' | 'Variant 3' | 'Variant 4' | 'Variant 5' | 'gBbLfhc6W' | 'bNourtPyj' | 'QCrSqa6Em' | 'R4KvzMT7E' | 'XLjUbafbh' | 'ZFeh7I2zq' | 'FkZuTHYh8' | 'YR2cty7YO' | 'sDcC1bPJj' | 'T3EbiIKgZ';
  /**
   * Question 1 — pass as `N1DFKMWNl` not `question1`.
   * @default "How do I draw Frames?"
   */
  N1DFKMWNl?: string;
  onN1DFKMWNlChange?: string;
  /**
   * Answer 1 — pass as `lvMeUTpra` not `answer1`.
   * @default "To draw a Frame, click on Layout in the Toolbar, then select Frame. Now, you can click and drag anywhere on the Canvas."
   */
  lvMeUTpra?: string;
  onlvMeUTpraChange?: string;
  /**
   * Transition — pass as `kr50LjJ8n` not `transition`.
   * @default {"bounce":0.2,"delay":0,"duration":0.4,"type":"spring"}
   */
  kr50LjJ8n?: object;
  /**
   * Question 2 — pass as `hx0b_8Yll` not `question2`.
   * @default "How do I add images?"
   */
  hx0b_8Yll?: string;
  onhx0b_8YllChange?: string;
  /**
   * Answer 2 — pass as `nNR17NJf8` not `answer2`.
   * @default "To add an image, select any Frame, and either double-click on it, or go to the Fill property. In the Fill property, switch to the image icon. Here, you can upload images."
   */
  nNR17NJf8?: string;
  onnNR17NJf8Change?: string;
  /**
   * Question 3 — pass as `HfER0Vust` not `question3`.
   * @default "How do I add videos?"
   */
  HfER0Vust?: string;
  onHfER0VustChange?: string;
  /**
   * Answer 3 — pass as `f6MCfUa9_` not `answer3`.
   * @default "To add a video to your site, click the “Insert” button and navigate to the “Media” section. Then, drag and drop a video component onto the Canvas."
   */
  f6MCfUa9_?: string;
  onf6MCfUa9_Change?: string;
  /**
   * Question 4 — pass as `KNyidrEfR` not `question4`.
   * @default "Does Framer support XYZ?"
   */
  KNyidrEfR?: string;
  onKNyidrEfRChange?: string;
  /**
   * Answer 4 — pass as `YKPDhsvnt` not `answer4`.
   * @default "To add a video to your site, click the “Insert” button and navigate to the “Media” section. Then, drag and drop a video component onto the Canvas."
   */
  YKPDhsvnt?: string;
  onYKPDhsvntChange?: string;
  /**
   * Fill — pass as `tZnUuoAfh` not `fill`.
   * @default "var(--token-15c58398-6ad6-435c-8016-009834f90629, rgb(238, 203, 58))"
   */
  tZnUuoAfh?: string;
  /**
   * Text Color — pass as `XW8Bkcysp` not `textColor`.
   * @default "rgb(255, 255, 255)"
   */
  XW8Bkcysp?: string;
  /** Additional properties */
  [key: string]: unknown;
}
