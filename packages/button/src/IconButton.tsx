import * as React from 'react';
import { ComponentProps, styled } from '@manifest-ui/styled';
import { Button } from './Button';

export type IconButtonProps = Omit<
  ComponentProps<typeof StyledIconButton>,
  'endIcon' | 'startIcon'
>;

const StyledIconButton = styled(Button, {
  label: 'IconButton',
  shouldForwardProp: () => true,
  themeKey: 'iconButton',
})(({ size, variant }) => ({
  justifyContent: 'center',
  padding: 0,

  ...(size === 'large' && { height: 40, width: 40 }),
  ...(size === 'medium' && { height: 32, width: 32 }),
  ...(variant === 'outlined' && { padding: 0 }),
}));

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props: IconButtonProps, ref) => {
    const { size = 'large', variant = 'filled', ...other } = props;

    return (
      <StyledIconButton
        className="manifest-ui-icon-button"
        ref={ref}
        size={size}
        variant={variant}
        {...other}
      />
    );
  },
);

IconButton.displayName = 'IconButton';
