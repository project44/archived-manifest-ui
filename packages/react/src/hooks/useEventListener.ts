import * as React from 'react';
import { useUpdatedRef } from './useUpdatedRef';

/**
 * Attach an event listener to a specified target
 */
export function useEventListener<T extends HTMLElement = HTMLDivElement>(
  eventName: keyof GlobalEventHandlersEventMap,
  handler: React.EventHandler<any> | null,
  ref?: React.RefObject<T>,
) {
  const handlerRef = useUpdatedRef(handler);

  const eventListener = React.useCallback(
    (event: Event): void => {
      handlerRef.current?.(event);
    },
    [handlerRef],
  );

  React.useEffect(() => {
    const targetElement: T | Window = ref?.current ?? window;

    targetElement?.addEventListener(eventName, eventListener);

    return () => {
      targetElement?.removeEventListener(eventName, eventListener);
    };
  }, [eventListener, eventName, handlerRef, ref]);
}
