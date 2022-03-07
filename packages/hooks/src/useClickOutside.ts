import * as React from 'react';
import { useEventListener } from './useEventListener';
import { useUpdatedRef } from './useUpdatedRef';

export type Handler = (event: TouchEvent | MouseEvent) => void;

/**
 * Execute a handler whenever a click is registered outside of an element
 */
export function useClickOutside(ref: React.RefObject<HTMLElement>, handler: Handler) {
  const handlerRef = useUpdatedRef(handler);

  const handleClick = React.useCallback<Handler>(
    event => {
      const target = event.target as Element;

      // Check if the event comes from inside the ref
      if (!ref.current || ref.current.contains(target)) {
        return;
      }

      handlerRef.current?.(event);
    },
    [handlerRef, ref],
  );

  useEventListener('click', handleClick);
  useEventListener('touchend', handleClick);
}
