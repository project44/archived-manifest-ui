export const TRANSITION_DURATIONS = {
  base: '200ms',
  fast: '125ms',
  slow: '300ms',
};

export const TRANSITION_PROPERTIES = {
  colors: 'background-color, border-color, color, fill, stroke',
  common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
};

export const TRANSITION_TIMING_FUNCTION = {
  ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
};

export const transitions = {
  transitions: {
    duration: TRANSITION_DURATIONS,
    property: TRANSITION_PROPERTIES,
    timingFunction: TRANSITION_TIMING_FUNCTION,
  },
};
