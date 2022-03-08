import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { useMergedRef } from '@manifest-ui/hooks';
import { usePopper } from 'react-popper';
import { usePoppperContext } from './context';

export type PopperContainerProps = ComponentProps<'div'>;

/**
 * Container component for initializing the popper. We dont want to initialize this if the popper is not active,
 * which is why we need to store the initialization logic in a different component than `PopperContent`
 *
 * @private
 */
export const PopperContainer = React.forwardRef<HTMLDivElement, PopperContainerProps>(
  (props: PopperContainerProps, ref) => {
    const { anchorElement, config, popperElement, setPopperElement } = usePoppperContext();

    const { attributes, styles } = usePopper(anchorElement, popperElement, config);

    return (
      <div
        ref={useMergedRef<HTMLDivElement>(ref, setPopperElement)}
        role="tooltip"
        style={{ ...styles.popper, pointerEvents: 'none' }}
        {...attributes.popper}
        {...props}
      />
    );
  },
);

PopperContainer.displayName = 'PopperContainer';
