import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  other,
  position,
  shadow,
  space,
  typography,
} from '@manifest-ui/styled-system';

export const styledProps = compose(
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  other,
  position,
  shadow,
  space,
  typography,
);

export const systemProps = [...(styledProps.propNames as string[])];

export const isStyleProp = (prop: string) => systemProps.includes(prop);
