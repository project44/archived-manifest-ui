import * as React from 'react';
import {
  StyledToggleContainer,
  StyledToggleInput,
  StyledToggleLabel,
  StyledToggleText,
} from './Toggle.styles';
import { useControlled, useId } from '@manifest-ui/hooks';
import { chainCallbacks } from '@manifest-ui/utils';
import { ComponentProps } from '@manifest-ui/styled';

export interface ToggleOptions {
  /**
   * Content to be rendered
   */
  children?: React.ReactNode;
  /**
   * Whether the toggle is checked by default.
   */
  defaultChecked?: boolean;
  /**
   * Whether the toggle is checked.
   */
  isChecked?: boolean;
  /**
   * Whether the toggle is disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether the toggle is readonly.
   */
  isReadOnly?: boolean;
  /**
   * Whether the toggle is required.
   */
  isRequired?: boolean;
}

export interface ToggleProps extends ComponentProps<typeof StyledToggleInput>, ToggleOptions {}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>((props: ToggleProps, ref) => {
  const {
    children,
    defaultChecked,
    id: idProp,
    isChecked: isCheckedProp,
    isDisabled,
    isReadOnly,
    isRequired,
    name,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseUp,
    tabIndex = undefined,
    value,
    ...other
  } = props;

  const id = useId(idProp);

  const [isChecked, setIsChecked] = useControlled({
    defaultValue: defaultChecked ?? false,
    value: isCheckedProp,
  });

  const [isFocused, setIsFocused] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  const handleBlur = React.useCallback(() => {
    setIsFocused(false);
  }, [setIsFocused]);

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isReadOnly || isDisabled) {
        event.stopPropagation();
        event.preventDefault();

        return;
      }

      setIsChecked(!isChecked);

      onChange?.(event);
    },
    [isChecked, isDisabled, isReadOnly, onChange, setIsChecked],
  );

  const handleFocus = React.useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  const handleKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === ' ') {
        setIsActive(true);
      }
    },
    [setIsActive],
  );

  const handleKeyUp = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === ' ') {
        setIsActive(false);
      }
    },
    [setIsActive],
  );

  const handleMouseDown = React.useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();

      setIsActive(true);
    },
    [setIsActive],
  );

  const handleMouseEnter = React.useCallback(() => {
    setIsHovered(true);
  }, [setIsHovered]);

  const handleMouseLeave = React.useCallback(() => {
    setIsHovered(false);
  }, [setIsHovered]);

  const handleMouseUp = React.useCallback(() => {
    setIsActive(false);
  }, [setIsActive]);

  return (
    <StyledToggleLabel
      className="manifestui-toggle-label"
      data-checked={isChecked ? '' : undefined}
      data-disabled={isDisabled ? '' : undefined}
    >
      <StyledToggleInput
        aria-disabled={isDisabled}
        aria-checked={isChecked}
        checked={isChecked}
        className="manifestui-toggle-input"
        disabled={isDisabled}
        id={id}
        name={name}
        onBlur={chainCallbacks(onBlur, handleBlur)}
        onFocus={chainCallbacks(onFocus, handleFocus)}
        onChange={handleChange}
        onKeyDown={chainCallbacks(onKeyDown, handleKeyDown)}
        onKeyUp={chainCallbacks(onKeyUp, handleKeyUp)}
        ref={ref}
        readOnly={isReadOnly}
        required={isRequired}
        value={value}
        tabIndex={tabIndex}
        type="checkbox"
      />
      <StyledToggleContainer
        aria-hidden="true"
        className="manifestui-toggle-container"
        data-active={isActive ? '' : null}
        data-checked={isChecked ? '' : null}
        data-disabled={isDisabled ? '' : null}
        data-focus={isFocused ? '' : null}
        data-hover={isHovered ? '' : null}
        data-readonly={isReadOnly ? '' : null}
        onMouseDown={chainCallbacks(onMouseDown, handleMouseDown)}
        onMouseEnter={chainCallbacks(onMouseEnter, handleMouseEnter)}
        onMouseLeave={chainCallbacks(onMouseLeave, handleMouseLeave)}
        onMouseUp={chainCallbacks(onMouseUp, handleMouseUp)}
        {...other}
      />
      {children && (
        <StyledToggleText className="manifestui-toggle-text">{children}</StyledToggleText>
      )}
    </StyledToggleLabel>
  );
});

Toggle.displayName = 'Toggle';
