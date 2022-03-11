import { CSSObject } from '@manifest-ui/styled-system';
import { Theme } from '@manifest-ui/styled-system';

export const focusStyles = ({
  borderRadius = 'medium',
  borderWidth = 'x-small',
  theme,
}: {
  borderRadius?: string;
  borderWidth?: string;
  theme?: Theme;
}): CSSObject => {
  const borderWidthValue = theme?.borderWidths?.[borderWidth as any] as number;
  const offset = borderWidthValue === 0 ? 2 : borderWidthValue + 2;
  const negativeOffset = `${offset * -1}px`;

  return {
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',

    '&:after': {
      content: '""',
      display: 'block',
      borderRadius,
      bottom: negativeOffset,
      boxShadow: `0 0 0 ${negativeOffset} ${theme?.colors?.primary?.[200] as string}`,
      left: negativeOffset,
      pointerEvents: 'none',
      position: 'absolute',
      right: negativeOffset,
      transitionDuration: 'base',
      transitionProperty: 'common',
      top: negativeOffset,
      zIndex: 1,
    },

    '&:focus, &[data-focus]': {
      '&::after': {
        boxShadow: `0 0 0 2px ${theme?.colors?.primary?.[200] as string}`,
        outline: `1px solid transparent`,
      },
    },
  };
};
