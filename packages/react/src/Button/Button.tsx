import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';

export type ButtonProps = ComponentProps<typeof Button>;
export type ButtonVariants = VariantProps<typeof Button>;

export const Button = styled('button', {
  // Reset
  appearance: 'none',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  // Custom
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$1',
  backgroundColor: 'transparent',
  border: '1px solid',
  borderColor: 'transparent',
  borderRadius: '$sm',
  fontFamily: '$body',
  fontWeight: '$medium',
  lineHeight: '1',
  py: '$2',
  outline: 'none',
  transition: '$fast',
  transitionProperty: 'background-color, border-color, box-shadow, color',
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 4px $$outline',
  },
  '&:focus:not(:focus-visible)': {
    outline: 'none',
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
      sm: {
        fontSize: '$xs',
        height: '30px',
        px: '$3',
        gap: '2px',
      },
      md: {
        fontSize: '$sm',
        height: '38px',
        px: '$4',
      },
      lg: {
        fontSize: '$lg',
        height: '48px',
        px: '$4',
      },
    },
    variant: {
      primary: getSolidStyles('blue'),
      secondary: {
        $$outline: '$colors$gray200',
        borderColor: '$gray300',
        color: '$gray500',
        '&:hover': {
          borderColor: '$gray400',
        },
        '&:active': {
          borderColor: '$gray500',
          color: '$gray600',
        },
        '&:disabled': {
          borderColor: '$gray300',
          color: '$gray300',
        },
      },
      tertiary: {
        $$outline: '$colors$blue200',
        color: '$blue600',
        '&:hover': {
          bg: '$blue100',
          color: '$blue500',
        },
        '&:active': {
          bg: '$blue200',
          color: '$blue600',
        },
        '&:disabled': {
          bg: 'transparent',
          color: '$gray400',
        },
      },
      success: getSolidStyles('green'),
      danger: getSolidStyles('red'),
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});

function getSolidStyles(color: string) {
  return {
    $$outline: `$colors$${color}200`,
    backgroundColor: `$${color}500`,
    color: 'white',
    '&:hover': {
      backgroundColor: `$${color}600`,
    },
    '&:active': {
      backgroundColor: `$${color}700`,
    },
    '&:disabled': {
      backgroundColor: '$gray100',
      color: '$gray400',
    },
  };
}
