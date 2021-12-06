import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';

export type InputProps = ComponentProps<typeof Input>;
export type InputVariants = VariantProps<typeof Input>;

export const Input = styled('input', {
  $$border: '$colors$blue5',
  $$outline: '$colors$blue2',
  appearance: 'none',
  bg: '$loContrast',
  border: 'none',
  borderRadius: '$1',
  boxShadow: 'inset 0 0 0 1px $colors$gray3',
  boxSizing: 'border-box',
  color: '$hiContrast',
  fontFamily: '$body',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  transition: '$1 $ease',
  transitionProperty: '$common',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  width: '100%',
  zIndex: 1,
  '&:hover': {
    boxShadow: 'inset 0 0 0 2px $$border',
  },
  '&:focus': {
    boxShadow: 'inset 0 0 0 2px $$border, 0 0 0 4px $$outline',
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: '$gray1',
    color: '$gray7',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$gray6',
    },
  },
  '&::placeholder': {
    color: '$gray4',
  },
  '&:read-only': {
    backgroundColor: '$gray1',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$gray6',
    },
  },
  variants: {
    size: {
      '1': {
        fontSize: '$3',
        px: '$2',
        lineHeight: '$space$5',
      },
      '2': {
        fontSize: '$4',
        px: '$3',
        lineHeight: '$space$6',
      },
    },
    variant: {
      ghost: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        '&:hover': {
          boxShadow: 'inset 0 0 0 1px $colors$gray3',
        },
        '&:focus': {
          backgroundColor: '$loContrast',
          boxShadow:
            'inset 0px 0px 0px 1px $colors$blue2, 0px 0px 0px 1px $colors$blue2',
        },
        '&:disabled': {
          backgroundColor: 'transparent',
        },
        '&:read-only': {
          backgroundColor: 'transparent',
        },
      },
    },
    state: {
      valid: {
        $$border: '$colors$green5',
        $$outline: '$colors$green2',
      },
      invalid: {
        $$border: '$colors$red5',
        $$outline: '$colors$red2',
      },
    },
  },
  defaultVariants: {
    size: '2',
  },
});
