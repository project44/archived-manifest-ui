import { ComponentProps, styled } from '@manifest-ui/styled';

export type IconProps = ComponentProps<typeof Icon>;

export const Icon = styled('svg', {
  label: 'Icon',
  themeKey: 'icon',
})(({ size }) => ({
  color: 'inherit',
  display: 'inline-block',
  flexShrink: 0,
  fill: 'currentColor',
  fontSize: size,
  height: size,
  userSelect: 'none',
  width: size,
}));

Icon.defaultProps = {
  size: '24px',
  viewBox: '0 0 24 24',
};
