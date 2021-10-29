import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';

export type InputProps = ComponentProps<typeof Input>;
export type InputVariants = VariantProps<typeof Input>;

export const Input = styled('input', {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: '$body',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  backgroundColor: '$loContrast',
  boxShadow: 'inset 0 0 0 1px $gray600',
  borderRadius: '$2',
  color: '$hiContrast',

  ':focus': {
    boxShadow: 'inset 0px 0px 0px 1px $blue700, 0px 0px 0px 1px $blue700',
  },
  '::placeholder': {
    color: '$gray800',
  },
  ':disabled': {
    pointerEvents: 'none',
    backgroundColor: '$gray100',
    color: '$gray700',
    cursor: 'not-allowed',
    '::placeholder': {
      color: '$gray600',
    },
  },
  ':read-only': {
    backgroundColor: '$gray100',
    ':focus': {
      boxShadow: 'inset 0px 0px 0px 1px $gray600',
    },
  },
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {},
    },
  },
});
