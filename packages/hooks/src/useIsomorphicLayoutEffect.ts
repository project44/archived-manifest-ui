import * as React from 'react';

/**
 * An SSR safe useEffect implementation.
 */
export const useIsomorphicLayoutEffect = !(
  typeof window !== 'undefined' && window.document?.createElement
)
  ? React.useLayoutEffect
  : React.useEffect;
