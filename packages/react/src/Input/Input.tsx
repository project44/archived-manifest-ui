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
  borderRadius: '$small',
  boxShadow: 'inset 0 0 0 1px $colors$neutral3',
  boxSizing: 'border-box',
  color: '$hiContrast',
  fontFamily: '$body',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  transition: '$fast $ease',
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
    backgroundColor: '$neutral1',
    color: '$neutral7',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$neutral6',
    },
  },
  '&::placeholder': {
    color: '$neutral4',
  },
  '&:read-only': {
    backgroundColor: '$neutral1',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$neutral6',
    },
  },
  variants: {
    size: {
      small: {
        fontSize: '$3',
        px: '$2',
        lineHeight: '$space$5',
      },
      medium: {
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
          boxShadow: 'inset 0 0 0 1px $colors$neutral3',
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
    status: {
      success: {
        $$border: '$colors$green5',
        $$outline: '$colors$green2',
      },
      warning: {
        $$border: '$colors$orange5',
        $$outline: '$colors$orange2',
      },
      danger: {
        $$border: '$colors$red5',
        $$outline: '$colors$red2',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
