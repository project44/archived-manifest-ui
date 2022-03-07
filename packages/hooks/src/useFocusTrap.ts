import * as React from 'react';
import { createFocusTrap, FocusTrap, Options } from 'focus-trap';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export interface UseFocusTrapOptions {
  /**
   * Whether to automattically focus the first focusable element within the trap.
   *
   * @default true
   */
  autoFocus?: boolean;
  /**
   * Whether the focus trap is active.
   */
  isActive?: boolean;
  /**
   * Whether to prevent the browser from scrolling to focused element in the viewport.
   *
   * @default false
   */
  preventScroll?: boolean;
  /**
   * Whether to retrun the focus to the element focused before the trap was activated.
   *
   * @default true
   */
  returnFocus?: boolean;
}

export function useFocusTrap(ref: React.RefObject<HTMLElement>, options: UseFocusTrapOptions) {
  const { autoFocus = true, isActive, preventScroll = false, returnFocus = true } = options;

  const focusTrapRef = React.useRef<FocusTrap | null>(null);

  const focusTrapOptions = React.useMemo<Options>(
    () => ({
      preventScroll,
      returnFocusOnDeactivate: returnFocus,
      ...(!autoFocus && { initialFocus: false }),
    }),
    [autoFocus, preventScroll, returnFocus],
  );

  useIsomorphicLayoutEffect(() => {
    if (focusTrapRef.current) {
      focusTrapRef.current.deactivate();
      focusTrapRef.current = null;
    }

    if (ref.current) {
      focusTrapRef.current = createFocusTrap(ref.current, focusTrapOptions);

      if (isActive) {
        focusTrapRef.current.activate();
      }
    }
  });

  useIsomorphicLayoutEffect(() => {
    if (!isActive || !focusTrapRef.current) return;

    focusTrapRef.current.activate();

    return () => {
      focusTrapRef.current?.deactivate();
    };
  }, [isActive]);
}
