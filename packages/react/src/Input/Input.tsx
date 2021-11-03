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
  boxShadow: 'inset 0 0 0 2px $colors$gray300',
  color: '$hiContrast',
  transition: '$fast',
  transitionProperty: 'background-color, border-color, box-shadow, color',
  '&:focus': {
    boxShadow: 'inset 0 0 0 2px $colors$blue500, 0 0 0 4px $$outline',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
  '&:focus-visible': {
    boxShadow: 'inset 0 0 0 2px $colors$blue500, 0 0 0 4px $$outline',
  },
  '&::placeholder': {
    color: '$gray400',
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: '$gray100',
    color: '$gray700',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$gray600',
    },
  },
  '&:read-only': {
    backgroundColor: '$gray100',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$gray600',
    },
  },
  variants: {
    size: {
      sm: {
        borderRadius: '$xs',
        fontSize: '$sm',
        height: '30px',
        px: '$2',
      },
      md: {
        borderRadius: '$sm',
        fontSize: '$md',
        height: '38px',
        px: '$3',
      },
      lg: {
        borderRadius: '$sm',
        fontSize: '$md',
        height: '44px',
        px: '$3',
      },
    },
    variant: {
      normal: {
        $$outline: '$colors$blue200',
      },
      success: {
        $$outline: '$colors$green200',
      },
      warning: {
        $$outline: '$colors$orange200',
      },
      danger: {
        $$outline: '$colors$red200',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'normal',
  },
});
