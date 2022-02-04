import * as React from 'react';
import { ComponentProps, styled } from '@manifest-ui/styled';
import { keyframes } from '@emotion/react';
import { VisuallyHidden } from '@manifest-ui/visually-hidden';

export interface SpinnerOptions {
  /**
   * Label for screen readers, will be visually hidden.
   */
  label?: React.ReactNode;
}

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const SpinnerRoot = styled('span', {
  label: 'Spinner',
  themeKey: 'spinner',
})<SpinnerOptions>({
  borderColor: 'currentColor',
  borderStyle: 'solid',
  borderRadius: '50%',
  borderTopColor: 'transparent',
  borderWidth: 'medium',
  color: 'primary.500',
  display: 'inline-block',
  animation: `${spin} .8s linear infinite`,
  height: 32,
  width: 32,
});

export type SpinnerProps = ComponentProps<typeof SpinnerRoot>;

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (props: SpinnerProps, ref) => {
    const { label, ...other } = props;

    return (
      <SpinnerRoot ref={ref} {...other}>
        {label && <VisuallyHidden>{label}</VisuallyHidden>}
      </SpinnerRoot>
    );
  },
);

Spinner.displayName = 'Spinner';
