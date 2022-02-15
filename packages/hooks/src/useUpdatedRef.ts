import * as React from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

/**
 * Keep the ref during render cycles, but update it if the value changes
 *
 * @param value the value or function to keep
 */
export function useUpdatedRef<T>(value: T): React.RefObject<T> {
  const ref = React.useRef(value);

  useIsomorphicLayoutEffect(() => {
    ref.current = value;
  });

  return ref;
}
