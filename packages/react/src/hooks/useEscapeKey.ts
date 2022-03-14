import * as React from 'react';
import { useEventListener } from './useEventListener';
import { useUpdatedRef } from './useUpdatedRef';

export type KeyboardEventHandler = (evt: KeyboardEvent) => void;

/**
 * Execute a handler whenever an escape key is pressed
 */
export function useEscapeKey(handler: KeyboardEventHandler): void {
  const handlerRef = useUpdatedRef(handler);

  const handleKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;

      handlerRef.current?.(event);
    },
    [handlerRef],
  );

  useEventListener('keydown', handleKeyDown);
}
