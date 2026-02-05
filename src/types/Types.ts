export interface MapPropType {
  /** Custom CSS class name for the map container */
  className?: string
  /** Width of the map (e.g., "500px", "100%") */
  size?: string
  /** Default fill color for states (CSS color value) */
  mapColor?: string
  /** Border/stroke color for states (CSS color value) */
  strokeColor?: string
  /** Border/stroke width for states */
  strokeWidth?: string
  /** Fill color when hovering over a state (CSS color value) */
  hoverColor?: string
  /** Callback function triggered when a state is clicked, receives state code */
  onClick: (stateCode: string) => void
}

/** State code type representing Indian states and union territories */
export type StateCode =
  | 'AN' | 'AP' | 'AR' | 'AS' | 'BR' | 'CH' | 'CT' | 'DD'
  | 'DL' | 'DN' | 'GA' | 'GJ' | 'HP' | 'HR' | 'JH' | 'JK'
  | 'KA' | 'KL' | 'LA' | 'LD' | 'MH' | 'ML' | 'MN' | 'MP'
  | 'MZ' | 'NL' | 'OR' | 'PB' | 'PY' | 'RJ' | 'SK' | 'TG'
  | 'TN' | 'TR' | 'UP' | 'UT' | 'WB'

/** Mapping of state codes to their full names */
export type StateNameMap = Record<StateCode, string>