import { styled } from '@manifest-ui/stitches';
import type { ComponentProps, VariantProps } from '@manifest-ui/stitches';

export type ButtonProps = ComponentProps<typeof Button>;
export type ButtonVariants = VariantProps<typeof Button>;

export const Button = styled('button', {
  backgroundColor: 'transparent',
  border: '1px solid',
  borderColor: 'transparent',
  borderRadius: '$md',
  fontFamily: '$body',
  fontWeight: '$semibold',
  lineHeight: 'normal',
  py: '$2',
  '&:focus': {
    boxShadow: '0 0 0 4px $$outline',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    boxShadow: 'none',
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
      primary: {
        $$outline: '$colors$blue100',
        $$bg: '$colors$blue500',
        $$bgHover: '$colors$blue600',
        $$bgActive: '$colors$blue700',
        backgroundColor: '$$bg',
        color: 'white',
        '&:hover': {
          bg: '$$bgHover',
        },
        '&:active': {
          bg: '$$bgActive',
        },
        '&:disabled': {
          backgroundColor: '$gray',
          color: '$gray400',
        },
      },
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
          backgroundColor: '$blue100',
          color: '$blue500',
        },
        '&:active': {
          backgroundColor: '$blue200',
          color: '$blue600',
        },
        '&:disabled': {
          borderColor: '$gray400',
          color: '$gray400',
        },
      },
    },
    tone: {
      success: {
        $$outline: '$colors$green100',
        $$bg: '$colors$green500',
        $$bgHover: '$colors$green600',
        $$bgActive: '$colors$green700',
      },
      danger: {
        $$outline: '$colors$red100',
        $$bg: '$colors$red500',
        $$bgHover: '$colors$red600',
        $$bgActive: '$colors$red700',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});
