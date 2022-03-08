import * as React from 'react';
import { chainCallbacks } from './function';
import clsx from 'clsx';

export function mergeProps<T extends Record<string, any>[]>(...args: T) {
  return args.reduce((mergedProps, props) => {
    const result = { ...mergedProps };

    for (const propName in props) {
      const mergedValue = result[propName];
      const propValue = props[propName];

      // Merge classNames
      if (
        propName === 'className' &&
        typeof mergedValue === 'string' &&
        typeof propValue === 'string'
      ) {
        result[propName] = clsx(mergedValue, propValue);

        // Merge styles
      } else if (propName === 'style') {
        result[propName] = { ...mergedValue, ...propValue };

        // Merge event handlers that start with `on`
      } else if (
        typeof mergedValue === 'function' &&
        typeof propValue === 'function' &&
        /^on[A-Z]/.test(propName)
      ) {
        result[propName] = chainCallbacks(mergedValue, propValue);
      } else {
        result[propName] = propValue ?? mergedValue;
      }
    }

    return result;
  }, {});
}

export function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
  return (value: T) => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}
