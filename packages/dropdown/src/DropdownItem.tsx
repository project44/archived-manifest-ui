import * as React from 'react';
import {
  StyledDropdownItem,
  StyledDropdownItemIcon,
  StyledDropdownItemText,
} from './Dropdown.styles';
import { ComponentProps } from '@manifest-ui/styled';
import { RovingFocusGroupItem } from '@radix-ui/react-roving-focus';

export interface DropdownItemProps extends ComponentProps<typeof StyledDropdownItem> {
  /**
   * Text rendered below the primary text.
   */
  description?: string;
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

export const DropdownItem = React.forwardRef<HTMLButtonElement, DropdownItemProps>(
  (props: DropdownItemProps, ref) => {
    const {
      children,
      description,
      endIcon,
      isSelected,
      isDisabled,
      startIcon,
      tabIndex,
      ...other
    } = props;

    return (
      <RovingFocusGroupItem asChild focusable={!isDisabled}>
        <StyledDropdownItem
          className="manifestui-dropdown-item"
          data-disabled={isDisabled ? '' : null}
          data-selected={isSelected ? '' : null}
          disabled={isDisabled}
          ref={ref}
          role="menuitem"
          tabIndex={isDisabled ? -1 : tabIndex}
          type="button"
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
      </RovingFocusGroupItem>
    );
  },
);

DropdownItem.displayName = 'DropdownItem';
