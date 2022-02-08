import * as React from 'react';
import { useCallbackRef } from './useCallbackRef';

export interface UseUncontrolledOptions<T> {
  /**
   * The default prop value (uncontrolled).
   */
  defaultValue?: T;
  /**
   * Callback executed when the state changes.
   */
  onChange?(value: T, ...args: any[]): void;
}

/**
 * A custom hook for executing a callback when a default prop value changes.
 */
export function useUncontrolled<T>(props: UseUncontrolledOptions<T>) {
  const { defaultValue, onChange } = props;

  const [value, setValue] = React.useState<T | undefined>(defaultValue);

  const previousValue = React.useRef(value);

  const handleChange = useCallbackRef(onChange);

  React.useEffect(() => {
    if (previousValue.current !== value) {
      handleChange?.(value as T);

      previousValue.current = value;
    }
  }, [handleChange, onChange, previousValue, value]);

  return [value, setValue] as const;
}
