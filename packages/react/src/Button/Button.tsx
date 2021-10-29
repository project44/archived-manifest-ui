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
  backgroundColor: 'transparent',
  border: '1px solid',
  borderColor: 'transparent',
  borderRadius: '$sm',
  fontFamily: '$body',
  fontWeight: '$semibold',
  lineHeight: '1',
  py: '$2',
  outline: 'none',
  '&:focus': {
    boxShadow: '0 0 0 4px $$outline',
  },
  '&:disabled': {
    boxShadow: 'none',
    cursor: 'not-allowed',
  },
  variants: {
    size: {
      sm: {
        borderRadius: '$sm',
        fontSize: '$caption1',
        px: '$3',
      },
      md: {
        fontSize: '$footnote',
        px: '$4',
      },
      lg: {
        fontSize: '$body1',
        px: '$4',
      },
    },
    variant: {
      primary: getSolidStyles('blue'),
      secondary: {
        $$outline: '$colors$gray400',
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
        $$outline: '$colors$blue100',
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
          borderColor: '$gray400',
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
    $$outline: `$colors$${color}400`,
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
