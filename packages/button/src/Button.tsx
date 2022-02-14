import * as React from 'react';
import { StyledButton, StyledButtonIcon, StyledButtonText } from './Button.styles';
import { ComponentProps } from '@manifest-ui/styled';

export interface ButtonOptions {
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
}

export interface ButtonProps extends ComponentProps<typeof StyledButton>, ButtonOptions {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      as = 'button',
      children: childrenProp,
      colorTheme = 'primary',
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
      children = <StyledButtonText className="manifestui-button-text">{children}</StyledButtonText>;
    }

    return (
      <StyledButton
        as={as}
        className="manifestui-button"
        colorTheme={colorTheme}
        data-active={isActive ? '' : null}
        data-disabled={isDisabled ? '' : null}
        ref={ref}
        size={size}
        variant={variant}
        {...ariaProps}
        {...other}
      >
        {startIcon && (
          <StyledButtonIcon className="manifestui-button-endIcon" data-placement="start">
            {startIcon}
          </StyledButtonIcon>
        )}
        {children}
        {endIcon && (
          <StyledButtonIcon className="manifestui-button-endIcon" data-placement="end">
            {endIcon}
          </StyledButtonIcon>
        )}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
