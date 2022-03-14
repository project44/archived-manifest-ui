import * as React from 'react';
import { useEventListener } from './useEventListener';
import { useUpdatedRef } from './useUpdatedRef';

export type Handler = (event: TouchEvent | MouseEvent) => void;

/**
 * Execute a handler whenever a click is registered outside of a set of elements.
 */
export function useClickOutside<T extends HTMLElement = any>(
  handler: Handler,
  nodes?: (React.RefObject<any> | undefined)[],
) {
  const elementRef = React.useRef<T>();

  const handlerRef = useUpdatedRef(handler);

  const handleClick = React.useCallback<Handler>(
    event => {
      const target = event.target as Element;

      if (Array.isArray(nodes)) {
        const shouldTrigger = nodes.every(node => node?.current && !node.current.contains(target));

        shouldTrigger && handlerRef.current?.(event);
      } else if (elementRef.current && !elementRef.current.contains(target)) {
        handlerRef.current?.(event);
      }
    },
    [elementRef, handlerRef, nodes],
  );

  useEventListener('click', handleClick);
  useEventListener('touchend', handleClick);

  return elementRef;
}
