import * as React from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

/**
 * Convert callback to a ref to avoid re-renders when passed a prop
 */
export function useCallbackRef<T extends (...args: any[]) => any>(
  callback: T | null | undefined,
): T {
  const callbackRef = React.useRef(callback);

  useIsomorphicLayoutEffect(() => {
    callbackRef.current = callback;
  });

  return React.useMemo(
    () =>
      ((...args) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        callbackRef.current?.(...args);
      }) as T,
    [],
  );
}
