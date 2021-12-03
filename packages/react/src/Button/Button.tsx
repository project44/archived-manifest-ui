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
  borderRadius: '$small',
  borderStyle: 'solid',
  borderWidth: '$small',
  boxSizing: 'border-box',
  display: 'inline-flex',
  fontFamily: '$body',
  fontWeight: '$semibold',
  justifyContent: 'center',
  lineHeight: 1,
  outline: 'none',
  py: '$2',
  transition: '$fast $ease',
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
      small: {
        fontSize: '$3',
        px: '$3',
      },
      medium: {
        fontSize: '$4',
        px: '$4',
      },
      large: {
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
          backgroundColor: '$neutral1',
          color: '$neutral4',
        },
      },
      outline: {
        $$outline: '$colors$neutral2',
        borderColor: '$neutral3',
        color: '$neutral5',
        '&:hover': {
          borderColor: '$neutral4',
        },
        '&:active': {
          borderColor: '$neutral5',
          color: '$neutral6',
        },
        '&:disabled': {
          borderColor: '$neutral3',
          color: '$neutral3',
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
          color: '$neutral4',
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
          color: '$neutral4',
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
    size: 'medium',
    variant: 'solid',
  },
});
