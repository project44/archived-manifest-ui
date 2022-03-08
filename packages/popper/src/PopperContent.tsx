import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { PopperContainer } from './PopperContainer';
import { Portal } from '@manifest-ui/portal';
import { usePoppperContext } from './context';

export type PopperContentProps = ComponentProps<'div'>;

export const PopperContent = React.forwardRef<HTMLDivElement, PopperContentProps>(
  (props: PopperContentProps, ref) => {
    const { disablePortal, isOpen } = usePoppperContext();

    if (!isOpen) {
      return null;
    }

    if (disablePortal) {
      return <PopperContainer ref={ref} {...props} />;
    }

    return (
      <Portal>
        <PopperContainer ref={ref} {...props} />
      </Portal>
    );
  },
);

PopperContent.displayName = 'PopperContent';
