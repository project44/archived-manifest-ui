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
            aria-checked={isIndeterminate ? 'mixed' : isChecked}
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
