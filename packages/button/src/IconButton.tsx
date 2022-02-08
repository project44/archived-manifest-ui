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

  ...(size === 'medium' && { padding: 2 }),
  ...(size === 'small' && { padding: 1 }),
  ...(variant === 'outlined' && {
    ...(size === 'medium' && { padding: '0.4375rem' }),
    ...(size === 'small' && { padding: '0.1875rem' }),
  }),
}));

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props: IconButtonProps, ref) => {
    const { size = 'medium', variant = 'filled', ...other } = props;

    return <StyledIconButton ref={ref} size={size} variant={variant} {...other} />;
  },
);

IconButton.displayName = 'IconButton';
