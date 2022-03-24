/* eslint-disable jsx-a11y/no-autofocus */
import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { FocusTrap } from '@manifest-ui/focus-trap';
import { PopoverContent } from '@manifest-ui/popover';
import { RovingFocusGroup } from '@radix-ui/react-roving-focus';
import { StyledDropdownMenu } from './Dropdown.styles';
import { useDropdownContext } from './context';

export type DropdownMenuProps = ComponentProps<typeof StyledDropdownMenu>;

export const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuProps>(
  (props: DropdownMenuProps, ref) => {
    const { children, ...other } = props;

    const { autoFocus, disableFocusTrap, restoreFocus } = useDropdownContext();

    return (
      <PopoverContent>
        <FocusTrap autoFocus={autoFocus} isDisabled={disableFocusTrap} restoreFocus={restoreFocus}>
          <RovingFocusGroup asChild orientation="vertical">
            <StyledDropdownMenu
              aria-orientation="vertical"
              role="menu"
              ref={ref}
              tabIndex={-1}
              {...other}
            >
              {children}
            </StyledDropdownMenu>
          </RovingFocusGroup>
        </FocusTrap>
      </PopoverContent>
    );
  },
);

DropdownMenu.displayName = 'DropdownMenu';
