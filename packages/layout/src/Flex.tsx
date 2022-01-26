import { ComponentProps, styled } from '@manifest-ui/styled';
import { StyleProps } from '@manifest-ui/styled-system';

export interface FlexProps extends ComponentProps<typeof Flex> {
  /**
   * Shorthand for `alignItems` style prop
   */
  align?: StyleProps['alignItems'];
  /**
   * Shorthand for `flexBasis` style prop
   */
  basis?: StyleProps['flexBasis'];
  /**
   * Shorthand for `flexDirection` style prop
   */
  direction?: StyleProps['flexDirection'];
  /**
   * Shorthand for `flexGrow` style prop
   */
  grow?: StyleProps['flexGrow'];
  /**
   * Shorthand for `justifyContent` style prop
   */
  justify?: StyleProps['justifyContent'];
  /**
   * Shorthand for `flexShrink` style prop
   */
  shrink?: StyleProps['flexShrink'];
  /**
   * Shorthand for `flexWrap` style prop
   */
  wrap?: StyleProps['flexWrap'];
}

export const Flex = styled('div', {
  label: 'Flex',
  themeKey: 'flex',
})(({ align, basis, direction, grow, justify, shrink, wrap }) => ({
  alignItems: align,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: direction,
  flexWrap: wrap,
  flexBasis: basis,
  flexGrow: grow,
  flexShrink: shrink,
  justifyContent: justify,
}));

Flex.displayName = 'Flex';
