import * as React from 'react';
import {
  StyledCheckboxContainer,
  StyledCheckboxIcon,
  StyledCheckboxInput,
  StyledCheckboxLabel,
  StyledCheckboxText,
} from './Checkbox.styles';
import { useControlled, useId } from '@manifest-ui/hooks';
import { ComponentProps } from '@manifest-ui/styled';

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
      id: idProp,
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

    const id = useId(idProp);

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

    return (
      <StyledCheckboxLabel className="manifestui-checkbox-label" data-disabled={isDisabled}>
        <StyledCheckboxContainer className="manifestui-checkbox-container">
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
            type="checkbox"
            {...other}
          />
          <StyledCheckboxIcon className="manifestui-checkbox-icon" />
        </StyledCheckboxContainer>
        {children && (
          <StyledCheckboxText className="manifestui-radio-text">{children}</StyledCheckboxText>
        )}
      </StyledCheckboxLabel>
    );
  },
);

Checkbox.displayName = 'Checkbox';
