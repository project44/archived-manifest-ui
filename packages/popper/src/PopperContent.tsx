import * as React from 'react';
import { createPopper, Instance } from '@popperjs/core';
import { useIsomorphicLayoutEffect, useMergedRef } from '@manifest-ui/hooks';
import { ComponentProps } from '@manifest-ui/styled';
import { Portal } from '@manifest-ui/portal';
import { usePoppperContext } from './context';

export type PopperContentProps = ComponentProps<'div'>;

export const PopperContent = React.forwardRef<HTMLDivElement, PopperContentProps>(
  (props: PopperContentProps, ref) => {
    const { anchorElement, config, disablePortal, isOpen, popperElement, setPopperElement } =
      usePoppperContext();

    const instanceRef = React.useRef<Instance | null>(null);
    const mergedRef = useMergedRef(ref, setPopperElement) as any;

    useIsomorphicLayoutEffect(() => {
      if (instanceRef.current) {
        void instanceRef.current.setOptions({ ...config });
      }
    }, [config]);

    useIsomorphicLayoutEffect(() => {
      if (!anchorElement || !isOpen) return;

      if (popperElement) {
        instanceRef.current = createPopper(anchorElement, popperElement, config);

        instanceRef.current.forceUpdate();
      }

      return () => {
        if (instanceRef.current) {
          instanceRef.current.destroy();
          instanceRef.current = null;
        }
      };
    }, [anchorElement, config, isOpen, popperElement]);

    const content = <div ref={mergedRef} role="tooltip" {...props} />;

    if (!isOpen) return null;

    return disablePortal ? content : <Portal>{content}</Portal>;
  },
);

PopperContent.displayName = 'PopperContent';
