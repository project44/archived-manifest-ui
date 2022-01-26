import { ComponentProps, styled } from '@manifest-ui/styled';
import { SystemProps } from '@manifest-ui/styled-system';

export interface FlexOptions {
  /**
   * Shorthand for `alignItems` style prop
   */
  align?: SystemProps['alignItems'];
  /**
   * Shorthand for `flexBasis` style prop
   */
  basis?: SystemProps['flexBasis'];
  /**
   * Shorthand for `flexDirection` style prop
   */
  direction?: SystemProps['flexDirection'];
  /**
   * Shorthand for `flexGrow` style prop
   */
  grow?: SystemProps['flexGrow'];
  /**
   * Shorthand for `justifyContent` style prop
   */
  justify?: SystemProps['justifyContent'];
  /**
   * Shorthand for `flexShrink` style prop
   */
  shrink?: SystemProps['flexShrink'];
  /**
   * Shorthand for `flexWrap` style prop
   */
  wrap?: SystemProps['flexWrap'];
}

export type FlexProps = ComponentProps<typeof Flex>;

export const Flex = styled('div', {
  label: 'Flex',
  themeKey: 'flex',
})<FlexOptions>(({ align, basis, direction, grow, justify, shrink, wrap }) => ({
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
