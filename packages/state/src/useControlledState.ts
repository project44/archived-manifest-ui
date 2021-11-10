import * as React from 'react';
import { useCallbackRef } from '@manifest-ui/hooks';

export interface UseControlledStateProps<T> {
  /**
   * The initial value to be used, in uncontrolled mode
   */
  defaultValue?: T;
  /**
   * The value to used in controlled mode
   */
  value?: T;
  /**
   * Handler called when the controlled state changes.
   */
  onChange?(value: T, ...args: any[]): void;
}

export function useControlledState<T>(props: UseControlledStateProps<T>) {
  const {
    defaultValue,
    onChange = () => {
      // noop
    },
    value: valueProp,
  } = props;
  const isControlled = valueProp !== undefined;
  const handleChange = useCallbackRef(onChange);

  const [state, setState] = React.useState<T | undefined>(defaultValue);

  const value = isControlled ? valueProp : state;

  const setValue: React.Dispatch<React.SetStateAction<T | undefined>> =
    React.useCallback(
      (nextValue) => {
        if (isControlled) {
          const valueFn = nextValue as (prevState?: T) => T;
          const newValue =
            typeof nextValue === 'function' ? valueFn(valueProp) : nextValue;

          if (newValue !== valueProp) {
            handleChange(newValue as T);
          }
        } else {
          setState(nextValue);
        }
      },
      [handleChange, isControlled, setState, valueProp],
    );

  return [value, setValue] as const;
}
