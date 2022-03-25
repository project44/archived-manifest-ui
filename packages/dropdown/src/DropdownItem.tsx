import * as React from 'react';
import {
  StyledDropdownItem,
  StyledDropdownItemIcon,
  StyledDropdownItemText,
} from './Dropdown.styles';
import { ComponentProps } from '@manifest-ui/styled';
import { DropdownMenuItem as RadixDropdownMenuItem } from '@radix-ui/react-dropdown-menu';

export interface DropdownItemOptions {
  /**
   * Icon added after the button text.
   */
  endIcon?: React.ReactElement;
  /**
   * Whether the menu item is disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether the menu item is selected
   */
  isSelected?: boolean;
  /**
   * Icon added before the button text.
   */
  startIcon?: React.ReactElement;
}

export interface DropdownItemProps
  extends ComponentProps<typeof StyledDropdownItem>,
    DropdownItemOptions {}

export const DropdownItem = React.forwardRef<HTMLButtonElement, DropdownItemProps>(
  (props: DropdownItemProps, ref) => {
    const { children, endIcon, isSelected, isDisabled, onClick, startIcon, ...other } = props;

    return (
      <RadixDropdownMenuItem
        asChild
        disabled={isDisabled}
        onSelect={onClick as unknown as (event: Event) => void}
      >
        <StyledDropdownItem
          className="manifestui-dropdown-item"
          data-disabled={isDisabled ? '' : null}
          data-selected={isSelected ? '' : null}
          disabled={isDisabled}
          ref={ref}
          {...other}
        >
          {startIcon && (
            <StyledDropdownItemIcon
              className="manifestui-dropdown-item__start-icon"
              data-placement="start"
            >
              {startIcon}
            </StyledDropdownItemIcon>
          )}
          <StyledDropdownItemText className="manifestui-dropdown-item__text">
            {children}
          </StyledDropdownItemText>
          {endIcon && (
            <StyledDropdownItemIcon
              className="manifestui-dropdown-item__end-icon"
              data-placement="end"
            >
              {endIcon}
            </StyledDropdownItemIcon>
          )}
        </StyledDropdownItem>
      </RadixDropdownMenuItem>
    );
  },
);

DropdownItem.displayName = 'DropdownItem';
