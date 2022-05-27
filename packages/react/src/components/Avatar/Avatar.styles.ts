import { Fallback, Image, Root } from '@radix-ui/react-avatar';
import { styled } from '../../styles';

export const StyledAvatarFallback = styled(Fallback, {
  alignItems: 'center',
  color: '$text-secondary',
  display: 'flex',
  fontFamily: '$text',
  fontWeight: '$semibold',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
});

export const StyledAvatarImage = styled(Image, {
  borderRadius: 'inherit',
  boxSizing: 'border-box',
  height: '100%',
  objectFit: 'cover',
  verticalAlign: 'middle',
  width: '100%',
});

export const StyledAvatar = styled(Root, {
  alignItems: 'center',
  backgroundColor: '$background-secondary',
  borderRadius: '$full',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  outline: 'none',
  overflow: 'hidden',
  verticalAlign: 'middle',

  variants: {
    size: {
      medium: {
        size: 40,

        [`& ${StyledAvatarFallback}`]: {
          fontSize: '$small',
          lineHeight: '$medium',
        },
      },
      small: {
        size: 28,

        // TODO: Align these custom values with design tokens.
        [`& ${StyledAvatarFallback}`]: {
          fontSize: '0.5rem',
          lineHeight: '0.875rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
});
