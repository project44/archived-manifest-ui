import React from 'react';

import { Label, LabelProps } from '../Label';
import {
  Input,
  InputProps,
  InputVariants,
  InputGroup,
  InputStartAddon,
  InputEndAddon,
  InputStartElement,
  InputEndElement,
} from '../Input';
import { Text } from '../Text';

export type TextFieldProps = Omit<InputProps, 'size' | 'variant'> & {
  label: string;
  endIcon?: React.ReactNode;
  helpText?: string;
  prefix?: string;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  suffix?: string;
  variant?: 'normal' | 'success' | 'warning' | 'danger';
};
export type TextFieldVariants = InputVariants;

const iconsByVariant = {
  normal: null,
  success: '✅',
  warning: '⚠️',
  danger: '⛔️',
};

const inputToLabelSize = {
  small: 'small',
  medium: 'standard',
  large: 'standard',
};

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      helpText,
      id,
      label,
      startIcon,
      endIcon,
      prefix,
      suffix,
      size = 'medium',
      variant = 'normal',
      ...rest
    } = props;
    const labelSize = inputToLabelSize[size] as LabelProps['size'];
    const statusIcon = endIcon ?? iconsByVariant[variant];

    return (
      <>
        {label && (
          <Label htmlFor={id} size={labelSize} css={{ mb: '$1' }}>
            {label}
          </Label>
        )}
        <InputGroup>
          {prefix && <InputStartAddon>{prefix}</InputStartAddon>}
          {startIcon && <InputStartElement>{startIcon}</InputStartElement>}
          <Input ref={ref} id={id} size={size} variant={variant} {...rest} />
          {statusIcon && <InputEndElement>{statusIcon}</InputEndElement>}
          {suffix && <InputEndAddon>{suffix}</InputEndAddon>}
        </InputGroup>
        {helpText && (
          <Text variant="secondary" css={{ mt: '$1' }}>
            {helpText}
          </Text>
        )}
      </>
    );
  },
);
