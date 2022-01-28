import * as React from 'react';
import { ComponentProps, styled } from '@manifest-ui/styled';
import { Button } from './Button';

export type FabProps = Omit<
  ComponentProps<typeof StyledFab>,
  'colorTheme' | 'endIcon' | 'startIcon' | 'size' | 'variant'
>;

const StyledFab = styled(Button, {
  label: 'Fab',
  shouldForwardProp: () => true,
  themeKey: 'fab',
})({
  borderRadius: 'full',
  boxShadow: 'x-large',
  height: 48,
  justifyContent: 'center',
  padding: 0,
  width: 48,
});

export const Fab = React.forwardRef<HTMLButtonElement, FabProps>((props: FabProps, ref) => (
  <StyledFab
    className="manifest-ui-fab-button"
    ref={ref}
    {...props}
    colorTheme="brand"
    variant="filled"
  />
));

Fab.displayName = 'Fab';
