import * as CSS from 'csstype';
import {
  Config,
  get,
  RequiredTheme,
  ResponsiveValue,
  Scale,
  system,
  Theme,
  TLengthStyledSystem,
} from 'styled-system';

export interface PositionProps<ThemeType extends Theme = RequiredTheme> {
  position?: ResponsiveValue<CSS.Property.Position, ThemeType>;
  pos?: ResponsiveValue<CSS.Property.Position, ThemeType>;
  zIndex?: ResponsiveValue<CSS.Property.ZIndex, ThemeType>;
  top?: ResponsiveValue<CSS.Property.Top<TLengthStyledSystem>, ThemeType>;
  right?: ResponsiveValue<CSS.Property.Right<TLengthStyledSystem>, ThemeType>;
  bottom?: ResponsiveValue<CSS.Property.Bottom<TLengthStyledSystem>, ThemeType>;
  left?: ResponsiveValue<CSS.Property.Left<TLengthStyledSystem>, ThemeType>;
}

const positiveOrNegative = (path: number | string, scale?: Scale) => {
  if (typeof path !== 'number' || path >= 0) {
    return get(scale, path, path) as string;
  }

  const absolute = Math.abs(path);
  const value = get(scale, absolute, absolute);

  if (typeof value === 'string') return `-${String(value)}`;

  return value * -1;
};

const config: Config = {
  bottom: {
    property: 'bottom',
    scale: 'space',
    transform: positiveOrNegative,
  },
  left: {
    property: 'left',
    scale: 'space',
    transform: positiveOrNegative,
  },
  position: true,
  right: {
    property: 'right',
    scale: 'space',
    transform: positiveOrNegative,
  },
  top: {
    property: 'top',
    scale: 'space',
    transform: positiveOrNegative,
  },
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices',
  },
};

config.pos = config.position;

export const position = system(config);
