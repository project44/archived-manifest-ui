import * as React from 'react';
import { StyledDismissIcon, StyledTag, StyledTagText } from './Tag.styles';
import { ComponentProps } from '@manifest-ui/styled';
import { IconProps } from '@manifest-ui/icon';
import { useMergedRef } from '@manifest-ui/hooks';

export interface TagOptions {
  /**
   * Props for the dismiss icon.
   */
  dismissIconProps?: IconProps;
  /**
   * The icon rendered at the start of the tag.
   */
  icon?: React.ReactNode;
  /**
   * Whether the tag is active
   */
  isActive?: boolean;
  /**
   * Whether the tag is disabled.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Whether the tag is clickable.
   *
   * @default false
   */
  isClickable?: boolean;
  /**
   * Whether the tag is dismissible.
   *
   * @default false
   */
  isDismissible?: boolean;
  /**
   * Callback function fired when the dismiss icon is clicked.
   */
  onDismiss?: React.EventHandler<any>;
}

export interface TagProps extends ComponentProps<typeof StyledTag>, TagOptions {}

export const Tag = React.forwardRef<HTMLDivElement, TagProps>((props: TagProps, ref) => {
  const {
    children,
    dismissIconProps = {},
    icon: iconProp,
    isActive,
    isDisabled,
    isClickable,
    isDismissible,
    onClick,
    onDismiss,
    onKeyUp,
    onKeyDown,
    size = 'large',
    variant = 'outlined',
    ...other
  } = props;

  const tagRef = React.useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(tagRef, ref);

  const handleDismiss = React.useCallback(
    (event: React.MouseEvent<SVGSVGElement>) => {
      event.stopPropagation();

      onDismiss?.(event);
    },
    [onDismiss],
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (
        event.currentTarget === event.target &&
        (event.key === 'Backspace' || event.key === 'Delete')
      ) {
        event.preventDefault();
      }

      onKeyDown?.(event);
    },
    [onKeyDown],
  );

  const handleKeyUp = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.currentTarget === event.target) {
        if (onDismiss && (event.key === 'Backspace' || event.key === 'Delete')) {
          onDismiss(event);
        } else if (event.key === 'Escape' && tagRef.current) {
          tagRef.current.blur();
        }
      }

      onKeyUp?.(event);
    },
    [onDismiss, onKeyUp],
  );

  let icon = null;
  if (iconProp && React.isValidElement(iconProp)) {
    icon = React.cloneElement(iconProp, {
      className: 'manifestui-tag-icon',
    });
  }

  return (
    <StyledTag
      as={isClickable || onDismiss ? 'button' : 'div'}
      className="manifestui-tag"
      data-active={isActive ? '' : null}
      data-clickable={isClickable ? '' : null}
      data-disabled={isDisabled ? '' : null}
      data-dismissible={isDismissible ? '' : null}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      ref={mergedRef}
      size={size}
      variant={variant}
      {...(isClickable && { role: 'button', tabIndex: isDisabled ? -1 : 0 })}
      {...other}
    >
      {icon}
      <StyledTagText className="manifestui-tag-text">{children}</StyledTagText>
      {isDismissible && (
        <StyledDismissIcon
          className="manifestui-tag-dismiss"
          onClick={handleDismiss}
          {...dismissIconProps}
        />
      )}
    </StyledTag>
  );
});

Tag.displayName = 'Tag';
