import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledSeparator } from './Separator.styles';

export interface SeparatorProps extends ComponentProps<typeof StyledSeparator> {
  /**
   * The axis the separator should align with.
   *
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
}

export const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  (props: SeparatorProps, ref) => {
    const { orientation = 'horizontal', ...other } = props;

    return (
      <StyledSeparator
        aria-orientation={orientation}
        className="manifestui-separator"
        data-orientation={orientation}
        ref={ref}
        role="separator"
        {...other}
      />
    );
  },
);

Separator.displayName = 'Separator';
