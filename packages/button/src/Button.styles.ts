import { shouldForwardProp, styled } from '@manifest-ui/styled';
import { focusStyles } from '@manifest-ui/theme';

const props = new Set(['colorTheme', 'isActive']);

export interface StyledButtonOptions {
  /**
   * The button color theme.
   *
   * @default 'gradient'
   */
  colorTheme?: 'primary' | 'danger' | 'neutral';
  /**
   * The size of the button.
   *
   * @default 'medium'
   */
  size?: 'medium' | 'small';
  /**
   * The button variant.
   *
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined' | 'text';
}

const themeKey = 'button';

export const StyledButton = styled('button', {
  label: 'Button',
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && !props.has(prop),
  themeKey: 'button',
})<StyledButtonOptions>(
  {
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderRadius: 'medium',
    borderWidth: 'small',
    boxSizing: 'border-box',
    color: 'emphasis.primary',
    cursor: 'pointer',
    display: 'inline-flex',
    margin: 0,
    outline: 0,
    position: 'relative',
    px: 3,
    transitionDuration: 'base',
    transitionProperty: 'common',
    textDecoration: 'none',
    userSelect: 'none',
    width: 'auto',

    '&[data-disabled]': {
      opacity: 0.32,
      pointerEvents: 'none',
    },
  },

  ({ colorTheme, variant }) => ({
    ...(colorTheme === 'primary' && {
      ...(variant === 'filled' && {
        backgroundImage: 'gradient.default',
        color: 'neutral.50',

        '&:hover': {
          backgroundImage: 'gradient.hover',
        },

        '&[data-active]': {
          backgroundImage: 'gradient.active',
        },
      }),
    }),

    ...(colorTheme === 'neutral' && {
      '&[data-active]': {
        backgroundColor: 'neutral.300',
      },

      '&:hover:not(&:focus)': {
        backgroundColor: 'neutral.100',
      },

      ...(variant === 'outlined' && {
        borderColor: 'neutral.200',
      }),
    }),

    ...(colorTheme === 'danger' && {
      ...(variant === 'filled' && {
        backgroundColor: 'status.danger.500',
        color: 'neutral.50',

        '&:hover': {
          backgroundColor: 'status.danger.600',
        },

        '&[data-active]': {
          backgroundColor: 'status.danger.800',
        },
      }),
    }),
  }),
  ({ size }) => ({
    ...(size === 'medium' && {
      height: 40,

      '& > .manifestui-button-text': {
        fontSize: 'medium',
        lineHeight: 'large',
      },
    }),

    ...(size === 'small' && {
      height: 32,

      '& > .manifestui-button-text': {
        fontSize: 'small',
        lineHeight: 'medium',
      },
    }),
  }),
  ({ theme }) => focusStyles({ borderWidth: 'small', theme }),
);

export const StyledButtonIcon = styled('span', {
  slot: 'icon',
  themeKey,
})({
  alignSelf: 'center',
  display: 'inline-flex',
  flexShrink: 0,

  '&[data-placement=end]': {
    ml: 2,
  },

  '&[data-placement=start]': {
    mr: 2,
  },
});

export const StyledButtonText = styled('span', {
  slot: 'text',
  themeKey,
})({
  fontFamily: 'body',
  fontWeight: 'semibold',
  letterSpacing: 'normal',
});
