import * as Primitives from '@manifest-ui/primitive-button';
import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';

export type ButtonProps = Omit<ComponentProps<typeof Button>, 'css'>;
export type ButtonVariants = VariantProps<typeof Button>;

export const Button = styled(Primitives.Button, {
  alignItems: 'center',
  all: 'unset',
  backgroundColor: 'transparent',
  borderColor: 'transparent',
  borderRadius: '$1',
  borderStyle: 'solid',
  borderWidth: '$1',
  boxSizing: 'border-box',
  display: 'inline-flex',
  fontFamily: '$body',
  fontWeight: '$6',
  justifyContent: 'center',
  lineHeight: 1,
  outline: 'none',
  py: '$2',
  transition: '$1 $ease',
  transitionProperty: '$common',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  '&:focus': {
    boxShadow: '0 0 0 4px $$outline',
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
    isFullWidth: {
      true: {
        width: '100%',
      },
    },
    isLoading: {
      true: {
        opacity: '$disabled',
        cursor: 'not-allowed',
      },
    },
    size: {
      '1': {
        fontSize: '$3',
        px: '$3',
      },
      '2': {
        fontSize: '$4',
        px: '$4',
      },
      '3': {
        fontSize: '$5',
        px: '$4',
      },
    },
    variant: {
      solid: {
        $$outline: '$colors$blue2',
        $$bg: '$colors$blue5',
        $$bgHover: '$colors$blue6',
        $$bgActive: '$colors$blue7',
        backgroundColor: '$$bg',
        color: 'white',
        '&:hover': {
          backgroundColor: '$$bgHover',
        },
        '&:active': {
          backgroundColor: '$$bgActive',
        },
        '&:disabled': {
          backgroundColor: '$gray1',
          color: '$gray4',
        },
      },
      outline: {
        $$outline: '$colors$gray2',
        borderColor: '$gray3',
        color: '$gray5',
        '&:hover': {
          borderColor: '$gray4',
        },
        '&:active': {
          borderColor: '$gray5',
          color: '$gray6',
        },
        '&:disabled': {
          borderColor: '$gray3',
          color: '$gray3',
        },
      },
      ghost: {
        $$outline: '$colors$blue2',
        color: '$blue6',
        '&:hover': {
          bg: '$blue1',
          color: '$blue5',
        },
        '&:active': {
          bg: '$blue2',
          color: '$blue6',
        },
        '&:disabled': {
          bg: 'transparent',
          color: '$gray4',
        },
      },
      link: {
        $$outline: '$colors$blue2',
        p: 0,
        bg: 'transparent',
        color: '$blue6',
        textDecoration: 'underline',
        '&:hover': {
          color: '$blue5',
        },
        '&:active': {
          color: '$blue6',
        },
        '&:disabled': {
          color: '$gray4',
        },
      },
    },
    status: {
      success: {
        $$outline: '$colors$green2',
        $$bg: '$colors$green5',
        $$bgHover: '$colors$green6',
        $$bgActive: '$colors$green7',
      },
      danger: {
        $$outline: '$colors$red2',
        $$bg: '$colors$red5',
        $$bgHover: '$colors$red6',
        $$bgActive: '$colors$red7',
      },
    },
  },
  defaultVariants: {
    size: '2',
    variant: 'solid',
  },
});
