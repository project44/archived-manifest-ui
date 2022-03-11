import * as React from 'react';
import { Check, Remove } from '@manifest-ui/icons';
import {
  StyledCheckboxContainer,
  StyledCheckboxIcon,
  StyledCheckboxInput,
  StyledCheckboxLabel,
  StyledCheckboxText,
} from './Checkbox.styles';
import { useControlled, useId } from '@manifest-ui/hooks';
import { chainCallbacks } from '@manifest-ui/utils';
import { ComponentProps } from '@manifest-ui/styled';

export interface CheckboxOptions {
  /**
   * Content to be rendered
   */
  children?: React.ReactNode;
  /**
   * Whether the checkbox is checked by default.
   */
  defaultChecked?: boolean;
  /**
   * Whether the checkbox is checked or indeterminate.
   */
  isChecked?: boolean;
  /**
   * Whether the checkbox is disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether the checkbox is in an indeterminate state.
   */
  isIndeterminate?: boolean;
  /**
   * Whether the checkbox is invalid.
   */
  isInvalid?: boolean;
  /**
   * Whether the checkbox is readonly.
   */
  isReadOnly?: boolean;
  /**
   * Whether the checkbox is required.
   */
  isRequired?: boolean;
}

export interface CheckboxProps
  extends ComponentProps<typeof StyledCheckboxInput>,
    CheckboxOptions {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props: CheckboxProps, ref) => {
    const {
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      defaultChecked,
      children,
      id: idProp,
      isChecked: isCheckedProp,
      isDisabled,
      isIndeterminate,
      isInvalid,
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

        setIsChecked(isIndeterminate ? true : event.target.checked);

        onChange?.(event);
      },
      [isDisabled, isIndeterminate, isReadOnly, onChange, setIsChecked],
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
      <StyledCheckboxLabel
        className="manifestui-checkbox-label"
        data-disabled={isDisabled ? '' : null}
      >
        <StyledCheckboxInput
          aria-disabled={isDisabled}
          aria-checked={isIndeterminate ? 'mixed' : isChecked}
          aria-invalid={isInvalid}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          checked={isChecked}
          className="manifestui-checkbox-input"
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
        <StyledCheckboxContainer
          aria-hidden="true"
          className="manifestui-checkbox-container"
          data-active={isActive ? '' : null}
          data-checked={isChecked ? '' : null}
          data-disabled={isDisabled ? '' : null}
          data-focus={isFocused ? '' : null}
          data-hover={isHovered ? '' : null}
          data-indeterminate={isIndeterminate ? '' : null}
          data-invalid={isInvalid ? '' : null}
          data-readonly={isReadOnly ? '' : null}
          onMouseDown={chainCallbacks(onMouseDown, handleMouseDown)}
          onMouseEnter={chainCallbacks(onMouseEnter, handleMouseEnter)}
          onMouseLeave={chainCallbacks(onMouseLeave, handleMouseLeave)}
          onMouseUp={chainCallbacks(onMouseUp, handleMouseUp)}
          {...other}
        >
          <StyledCheckboxIcon
            as={isIndeterminate ? Remove : Check}
            className="manifestui-checkbox-icon"
          />
        </StyledCheckboxContainer>
        {children && (
          <StyledCheckboxText className="manifestui-radio-text">{children}</StyledCheckboxText>
        )}
      </StyledCheckboxLabel>
    );
  },
);

Checkbox.displayName = 'Checkbox';
