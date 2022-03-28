import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledRequiredIndicator } from './FormControl.styles';
import { useFormControl } from './context';

export type RequiredIndicatorProps = ComponentProps<typeof StyledRequiredIndicator>;

export const RequiredIndicator = React.forwardRef<HTMLLabelElement, RequiredIndicatorProps>(
  (props: RequiredIndicatorProps, ref) => {
    const { children, ...other } = props;

    const { isRequired } = useFormControl();

    if (!isRequired) return null;

    return (
      <StyledRequiredIndicator aria-hidden role="presentation" ref={ref} {...other}>
        {children ?? '*'}
      </StyledRequiredIndicator>
    );
  },
);

RequiredIndicator.displayName = 'RequiredIndicator';
