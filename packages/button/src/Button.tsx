import * as React from 'react';
import { ComponentProps, shouldForwardProp, styled } from '@manifest-ui/styled';

export interface ButtonOptions {
  /**
   * The button color theme.
   *
   * @default 'gradient'
   */
  colorTheme?: 'primary' | 'danger' | 'gradient';
  /**
   * Icon added after the button text.
   */
  endIcon?: React.ReactElement;
  /**
   * Href value used if the button is rendered as an `<a>` tag.
   */
  href?: string | undefined;
  /**
   * Whether the button is active
   */
  isActive?: boolean;
  /**
   * Whether the button is disabled.
   */
  isDisabled?: boolean;
  /**
   * Rel value used if the button is rendered as an `<a>` tag.
   */
  rel?: string | undefined;
  /**
   * The size of the button.
   *
   * @default 'medium'
   */
  size?: 'medium' | 'small';
  /**
   * Icon added before the button text.
   */
  startIcon?: React.ReactElement;
  /**
   * Target value used if the button is rendered as an `<a>` tag.
   */
  target?: string | undefined;
  /**
   * The button type.
   */
  type?: 'button' | 'reset' | 'submit';
  /**
   * The button variant.
   *
   * @default 'filled'
   */
  variant?: 'filled' | 'outlined' | 'text' | 'tonal';
}

export type ButtonProps = ComponentProps<typeof StyledButton>;

const StyledButton = styled('button', {
  label: 'Button',
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && prop !== 'colorTheme',
  themeKey: 'button',
})<ButtonOptions>(({ colorTheme, variant }) => ({
  alignItems: 'center',
  appearance: 'none',
  border: 0,
  borderRadius: 'medium',
  boxSizing: 'border-box',
  cursor: 'pointer',
  display: 'inline-flex',
  margin: 0,
  outline: 0,
  px: 4,
  py: 2,
  transitionDuration: 'base',
  transitionProperty: 'colors',
  textDecoration: 'none',
  userSelect: 'none',

  '&[disabled], &[aria-disabled=true], &[data-disabled]': {
    opacity: 0.32,
    pointerEvents: 'none',
  },

  ...(variant === 'filled' && {
    color: 'neutral.50',

    ...(colorTheme === 'primary' && {
      backgroundColor: 'primary.500',

      '&:hover, &[data-hover]': {
        backgroundColor: 'primary.600',
      },

      '&:focus, &[data-focus]': {
        backgroundColor: 'primary.700',
      },

      '&:active, &[data-active]': {
        backgroundColor: 'primary.800',
      },
    }),

    ...(colorTheme === 'danger' && {
      backgroundColor: 'status.danger.500',

      '&:hover, &[data-hover]': {
        backgroundColor: 'status.danger.600',
      },

      '&:focus, &[data-focus]': {
        backgroundColor: 'status.danger.700',
      },

      '&:active, &[data-active]': {
        backgroundColor: 'status.danger.800',
      },
    }),

    ...(colorTheme === 'gradient' && {
      backgroundImage: 'primary.gradient.0',

      '&:hover, &[data-hover]': {
        backgroundImage: 'primary.gradient.20',
      },

      '&:focus, &[data-focus]': {
        backgroundImage: 'primary.gradient.40',
      },

      '&:active, &[data-active]': {
        backgroundImage: 'primary.gradient.60',
      },
    }),
  }),

  ...(variant === 'outlined' && {
    backgroundColor: 'transparent',
    borderColor: 'neutral.200',
    borderStyle: 'solid',
    borderWidth: 1,
    color: 'neutral.900',
    px: '0.938rem',
    py: '0.438rem',

    '&:hover, &[data-hover]': {
      backgroundColor: 'neutral.50',
      borderColor: 'neutral.400',
    },

    '&:focus, &[data-focus]': {
      backgroundColor: 'neutral.100',
      borderColor: 'neutral.400',
    },

    '&:active, &[data-active]': {
      backgroundColor: 'neutral.200',
      borderColor: 'neutral.400',
    },
  }),

  ...(variant === 'text' && {
    backgroundColor: 'transparent',
    color: 'neutral.900',

    '&:hover, &[data-hover]': {
      backgroundColor: 'neutral.50',
    },

    '&:focus, &[data-focus]': {
      backgroundColor: 'neutral.100',
    },

    '&:active, &[data-active]': {
      backgroundColor: 'neutral.200',
    },
  }),

  ...(variant === 'tonal' && {
    backgroundColor: 'status.danger.50',
    borderColor: 'status.danger.50',
    borderStyle: 'solid',
    borderWidth: 1,
    color: 'status.danger.500',
    px: '0.938rem',
    py: '0.438rem',

    '&:hover, &[data-hover]': {
      borderColor: 'status.danger.500',
    },

    '&:focus, &[data-focus]': {
      backgroundColor: 'status.danger.100',
      borderColor: 'status.danger.500',
    },

    '&:active, &[data-active]': {
      backgroundColor: 'status.danger.100',
      borderColor: 'status.danger.500',
    },
  }),
}));

const StyledEndIcon = styled('span', {
  label: 'ButtonEndIcon',
  slot: 'endIcon',
  themeKey: 'button',
})({
  alignSelf: 'center',
  display: 'inline-flex',
  flexShrink: 0,
  ml: 2,
});

const StyledStartIcon = styled('span', {
  label: 'ButtonStartIcon',
  slot: 'startIcon',
  themeKey: 'button',
})({
  alignSelf: 'center',
  display: 'inline-flex',
  flexShrink: 0,
  mr: 2,
});

const StyledButtonText = styled('span', {
  label: 'ButtonText',
  slot: 'text',
  themeKey: 'button',
})(({ size }) => ({
  fontFamily: 'body',
  fontWeight: 'semibold',
  letterSpacing: 'normal',

  ...(size === 'medium' && {
    fontSize: 'medium',
    lineHeight: 'large',
  }),

  ...(size === 'small' && {
    fontSize: 'small',
    lineHeight: 'medium',
  }),
}));

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      as = 'button',
      children: childrenProp,
      colorTheme = 'gradient',
      endIcon,
      href,
      isActive,
      isDisabled,
      rel,
      size = 'medium',
      startIcon,
      target,
      tabIndex,
      type,
      variant = 'filled',
      ...other
    } = props;

    const ariaProps =
      as !== 'button'
        ? {
            'aria-disabled': !isDisabled ? undefined : isDisabled,
            href: as === 'a' && isDisabled ? undefined : href,
            rel: as === 'a' ? rel : undefined,
            role: 'button',
            tabIndex: isDisabled ? undefined : 0,
            target: as === 'a' ? target : undefined,
          }
        : {
            disabled: isDisabled,
            tabIndex: isDisabled ? -1 : tabIndex,
            type: type ?? 'button',
          };

    let children = childrenProp;

    if (typeof children === 'string') {
      children = <StyledButtonText size={size}>{children}</StyledButtonText>;
    }

    return (
      <StyledButton
        as={as}
        colorTheme={colorTheme}
        data-active={isActive ? '' : null}
        data-disabled={isDisabled ? '' : null}
        ref={ref}
        variant={variant}
        {...ariaProps}
        {...other}
      >
        {startIcon && <StyledStartIcon>{startIcon}</StyledStartIcon>}
        {children}
        {endIcon && <StyledEndIcon>{endIcon}</StyledEndIcon>}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
