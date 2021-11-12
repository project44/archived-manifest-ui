import * as Primitives from '@manifest-ui/primitive-button';
import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';

export type ButtonProps = ComponentProps<typeof Button>;
export type ButtonVariants = VariantProps<typeof Button>;

export const Button = styled(Primitives.Button, {
  // Reset
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$1',
  backgroundColor: 'transparent',
  borderWidth: '$small',
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderRadius: '$small',
  fontFamily: '$body',
  fontWeight: '$base',
  lineHeight: '1',
  py: '$2',
  outline: 'none',
  transitionDuration: '$fast',
  transitionTimingFunction: '$ease',
  transitionProperty: '$common',
  '&:focus': {
    boxShadow: '$colors$neutral40',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
  '&:focus-visible': {
    boxShadow: '0 0 0 4px $$outline',
  },
  '&:disabled': {
    boxShadow: 'none',
    cursor: 'not-allowed',
  },
  variants: {
    full: {
      true: {
        width: '100%',
      },
    },
    size: {
      small: {
        fontSize: '$3',
        height: '30px',
        px: '$3',
        gap: '2px',
      },
      medium: {
        fontSize: '$4',
        height: '38px',
        px: '$4',
      },
      large: {
        fontSize: '$5',
        height: '48px',
        px: '$4',
      },
    },
    variant: {
      primary: getSolidStyles('blue'),
      secondary: {
        $$outline: '$colors$neutral20',
        borderColor: '$neutral30',
        color: '$neutral50',
        '&:hover': {
          borderColor: '$neutral40',
        },
        '&:active': {
          borderColor: '$neutral50',
          color: '$neutral60',
        },
        '&:disabled': {
          borderColor: '$neutral30',
          color: '$neutral30',
        },
      },
      tertiary: {
        $$outline: '$colors$blue20',
        color: '$blue60',
        '&:hover': {
          bg: '$blue10',
          color: '$blue50',
        },
        '&:active': {
          bg: '$blue20',
          color: '$blue60',
        },
        '&:disabled': {
          bg: 'transparent',
          color: '$neutral40',
        },
      },
      success: getSolidStyles('green'),
      danger: getSolidStyles('red'),
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
});

function getSolidStyles(color: string) {
  return {
    $$outline: `$colors$${color}20`,
    backgroundColor: `$${color}50`,
    color: 'white',
    '&:hover': {
      backgroundColor: `$${color}60`,
    },
    '&:active': {
      backgroundColor: `$${color}70`,
    },
    '&:disabled': {
      backgroundColor: '$neutral10',
      color: '$neutral40',
    },
  };
}
