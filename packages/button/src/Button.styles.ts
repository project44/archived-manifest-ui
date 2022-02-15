import { shouldForwardProp, styled } from '@manifest-ui/styled';

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
  variant?: 'filled' | 'outlined' | 'text' | 'tonal';
}

const themeKey = 'button';

export const StyledButton = styled('button', {
  label: 'Button',
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && prop !== 'colorTheme',
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

  ({ colorTheme, theme, variant }) => ({
    ...(colorTheme === 'primary' && {
      ...(variant === 'filled' && {
        backgroundImage: 'gradient.default',
        color: 'neutral.50',

        '&:hover': {
          backgroundImage: 'gradient.hover',
        },

        '&:focus': {
          backgroundImage: 'gradient.focus',
          boxShadow: `0 0 0 2px ${theme.colors?.primary?.[200] as string}`,
          outline: 'none',
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

      '&:focus': {
        backgroundColor: 'neutral.200',
        boxShadow: `0 0 0 2px ${theme.colors?.neutral?.[100] as string}`,
        outline: 'none',
      },

      '&:hover:not(&:focus)': {
        backgroundColor: 'neutral.100',
      },

      ...(variant === 'outlined' && {
        borderColor: 'neutral.200',

        '&:focus': {
          backgroundColor: 'neutral.200',
          borderColor: 'neutral.400',
          boxShadow: `0 0 0 2px ${theme.colors?.neutral?.[200] as string}`,
          outline: 'none',
        },
      }),
    }),

    ...(colorTheme === 'danger' && {
      ...(variant === 'filled' && {
        backgroundColor: 'status.danger.500',
        color: 'neutral.50',

        '&:hover': {
          backgroundColor: 'status.danger.600',
        },

        '&:focus': {
          backgroundColor: 'status.danger.700',
          boxShadow: `0 0 0 2px ${theme.colors?.status?.danger?.[200] as string}`,
          outline: 'none',
        },

        '&[data-active]': {
          backgroundColor: 'status.danger.800',
        },
      }),

      ...(variant === 'tonal' && {
        backgroundColor: 'status.danger.50',
        borderColor: 'status.danger.50',
        color: 'status.danger.500',

        '&:hover': {
          borderColor: 'status.danger.500',
        },

        '&:focus': {
          backgroundColor: 'status.danger.100',
          borderColor: 'status.danger.500',
          boxShadow: `0 0 0 2px ${theme.colors?.status?.danger?.[200] as string}`,
          outline: 'none',
        },

        '&[data-active]': {
          backgroundColor: 'status.danger.100',
          borderColor: 'status.danger.500',
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
