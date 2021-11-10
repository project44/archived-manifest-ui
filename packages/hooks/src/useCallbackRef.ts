import React from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

/**
 * Convert a callback to a ref to persist the handler between re-renders.
 */
export function useCallbackRef<T extends (...args: any[]) => any>(
  callback: T | null | undefined,
): T {
  const callbackRef = React.useRef(callback);

  useIsomorphicLayoutEffect(() => {
    callbackRef.current = callback;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useCallback(
    ((...args) => {
      callbackRef.current && callbackRef.current?.(...args);
    }) as T,
    [],
  );
}
