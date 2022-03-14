import * as React from 'react';

/**
 * SSR safe useEffect.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' && window.document?.createElement
    ? React.useLayoutEffect
    : React.useEffect;
