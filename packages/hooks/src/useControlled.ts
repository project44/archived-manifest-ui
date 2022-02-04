import * as React from 'react';
import { useUncontrolled, UseUncontrolledOptions } from './useUncontrolled';
import { useCallbackRef } from './useCallbackRef';

export interface UseControlledOptions<T> extends UseUncontrolledOptions<T> {
  /**
   * The prop value. (controlled)
   */
  value?: T;
}

/**
 * A custom hook for controlling a value if not controlled by the parent. In the
 * event the value changes a callback is executed.
 */
export function useControlled<T>(props: UseControlledOptions<T>) {
  const { defaultValue, onChange, value: valueProp } = props;

  const { current: isControlled } = React.useRef(valueProp !== undefined);

  const handleChange = useCallbackRef(onChange);

  const [uncontrolledValue, setUncontrolledValue] = useUncontrolled({
    defaultValue,
    onChange,
  });

  const value = isControlled ? valueProp : uncontrolledValue;

  const setValue: React.Dispatch<React.SetStateAction<T | undefined>> = React.useCallback(
    nextValue => {
      if (isControlled) {
        const valueFn = nextValue as (prevState?: T) => T;
        const newValue = typeof nextValue === 'function' ? valueFn(valueProp) : nextValue;

        if (newValue !== valueProp) {
          handleChange(newValue as T);
        }
      } else {
        setUncontrolledValue(nextValue);
      }
    },
    [handleChange, isControlled, setUncontrolledValue, valueProp],
  );

  return [value, setValue] as const;
}
