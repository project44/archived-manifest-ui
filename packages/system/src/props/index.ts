import { background, BackgroundProps } from './background';
import { border, BorderProps } from './border';
import { color, ColorProps } from './color';
import { flexbox, FlexboxProps } from './flexbox';
import { grid, GridProps } from './grid';
import { layout, LayoutProps } from './layout';
import { other, OtherProps } from './other';
import { position, PositionProps } from './position';
import { shadow, ShadowProps } from './shadow';
import { space, SpaceProps } from './space';
import { transition, TransitionProps } from './transition';
import { typography, TypographyProps } from './typography';
import { compose } from '@styled-system/core';

export interface StyledProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    OtherProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TransitionProps,
    TypographyProps {}

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
  transition,
  typography,
);

export const styledPropNames = [...(styledProps.propNames as string[])];
