import * as CSS from 'csstype';
import { Config, ResponsiveValue, system, TLengthStyledSystem } from 'styled-system';
import { RequiredTheme, Theme } from '../types';

export interface PositionProps<ThemeType extends Theme = RequiredTheme> {
  position?: ResponsiveValue<CSS.Property.Position, ThemeType>;
  pos?: ResponsiveValue<CSS.Property.Position, ThemeType>;
  zIndex?: ResponsiveValue<CSS.Property.ZIndex, ThemeType>;
  top?: ResponsiveValue<CSS.Property.Top<TLengthStyledSystem>, ThemeType>;
  right?: ResponsiveValue<CSS.Property.Right<TLengthStyledSystem>, ThemeType>;
  bottom?: ResponsiveValue<CSS.Property.Bottom<TLengthStyledSystem>, ThemeType>;
  left?: ResponsiveValue<CSS.Property.Left<TLengthStyledSystem>, ThemeType>;
}

const config: Config = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices',
  },
  top: {
    property: 'top',
    scale: 'space',
  },
  right: {
    property: 'right',
    scale: 'space',
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
  },
  left: {
    property: 'left',
    scale: 'space',
  },
};

config.pos = config.position;

export const position = system(config);
