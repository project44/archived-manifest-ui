import * as React from 'react';
import {
  StyledCheckboxContainer,
  StyledCheckboxControl,
  StyledCheckboxIcon,
  StyledCheckboxInput,
  StyledCheckboxLabel,
} from './Checkbox.styles';
import { ComponentProps } from '@manifest-ui/styled';
import { useControlled } from '@manifest-ui/hooks';

export interface CheckboxOptions {
  /**
   * Content to be rendered
   */
  children?: React.ReactNode;
  /**
   * Whether the toggle is checked by default.
   */
  defaultChecked?: boolean;
  /**
   * Whether the toggle is checked or indeterminate.
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
  /**
   * Whether the toggle is invalid.
   */
  isInvalid?: boolean;
}

export interface CheckboxProps
  extends ComponentProps<typeof StyledCheckboxInput>,
    CheckboxOptions {}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props: CheckboxProps, ref) => {
    const {
      defaultChecked,
      children,
      id,
      isChecked: isCheckedProp,
      isDisabled,
      isInvalid,
      isReadOnly,
      isRequired,
      name,
      onChange,
      value,
      ...other
    } = props;

    const [isChecked, setIsChecked] = useControlled({
      defaultValue: defaultChecked ?? false,
      value: isCheckedProp,
    });

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

    const handleKeyDown = React.useCallback(
      (event: any) => {
        if (event.key === ' ') {
          event.preventDefault();

          handleChange(event as React.ChangeEvent<HTMLInputElement>);
        }
      },
      [handleChange],
    );

    return (
      <StyledCheckboxLabel className="manifestui-checkbox-label" data-disabled={isDisabled}>
        <StyledCheckboxContainer
          className="manifestui-checkbox-container"
          onKeyDown={handleKeyDown}
          tabIndex={isDisabled ? -1 : 0}
        >
          <StyledCheckboxInput
            aria-disabled={isDisabled}
            aria-invalid={isInvalid}
            checked={isChecked}
            className="manifestui-checkbox-input"
            disabled={isDisabled}
            id={id}
            name={name}
            onChange={handleChange}
            ref={ref}
            readOnly={isReadOnly}
            required={isRequired}
            value={value}
            tabIndex={-1}
            type="checkbox"
            {...other}
          />
          <StyledCheckboxControl
            className="manifestui-checkbox-control"
            data-checked={isChecked ? '' : undefined}
          >
            <StyledCheckboxIcon
              className="manifestui-checkbox-icon"
              data-checked={isChecked ? '' : undefined}
            />
          </StyledCheckboxControl>
        </StyledCheckboxContainer>
        {children}
      </StyledCheckboxLabel>
    );
  },
);

Checkbox.displayName = 'Checkbox';
