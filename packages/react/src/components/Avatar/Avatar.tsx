import * as React from 'react';
import { StyledAvatar, StyledAvatarFallback, StyledAvatarImage } from './Avatar.styles';
import { CSS, VariantProps } from '../../styles';
import { Root } from '@radix-ui/react-avatar';

export interface AvatarProps
  extends Omit<React.ComponentProps<typeof Root>, 'asChild'>,
    VariantProps<typeof StyledAvatar> {
  /**
   * The alt text passed to the image.
   */
  alt?: string;
  /**
   * Styles applied to the avatar.
   */
  css?: CSS;
  /**
   * Name used as a fallback if src is not provided or image cannot be found.
   */
  fallback?: React.ReactNode;
  /**
   * The `src` attribute for the `img` element.
   */
  src?: string;
}

export const Avatar = React.forwardRef<React.ElementRef<typeof StyledAvatar>, AvatarProps>(
  (props, ref) => {
    const { alt, fallback, src = '', ...other } = props;

    return (
      <StyledAvatar {...other} ref={ref}>
        <StyledAvatarImage alt={alt} src={src} />
        <StyledAvatarFallback>{fallback}</StyledAvatarFallback>
      </StyledAvatar>
    );
  },
);
