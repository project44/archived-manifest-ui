import * as CSS from 'csstype';
import { get, isNumber, isString } from '../utils';
import {
  RequiredTheme,
  ResponsiveValue,
  Scale,
  SystemConfigs,
  Theme,
  TLengthStyledSystem,
} from '../types';
import { system } from '../core';

export interface PositionProps<ThemeType extends Theme = RequiredTheme> {
  position?: ResponsiveValue<CSS.Property.Position, ThemeType>;
  pos?: ResponsiveValue<CSS.Property.Position, ThemeType>;
  zIndex?: ResponsiveValue<CSS.Property.ZIndex, ThemeType>;
  top?: ResponsiveValue<CSS.Property.Top<TLengthStyledSystem>, ThemeType>;
  right?: ResponsiveValue<CSS.Property.Right<TLengthStyledSystem>, ThemeType>;
  bottom?: ResponsiveValue<CSS.Property.Bottom<TLengthStyledSystem>, ThemeType>;
  left?: ResponsiveValue<CSS.Property.Left<TLengthStyledSystem>, ThemeType>;
}

const positiveOrNegative = (scale: Scale | undefined, path: number | string): any => {
  if (!isNumber(path)) {
    if (isString(path) && path.startsWith('-')) {
      const raw: string = path.slice(1);
      const value = get(scale, raw, raw);

      if (isNumber(value)) {
        return value * -1;
      }

      return `-${String(value)}`;
    }

    return get(scale, path, path);
  }

  const isNegative = path < 0;
  const abs = Math.abs(path);
  const value = get(scale, abs, abs);

  if (isNumber(value)) {
    return value * (isNegative ? -1 : 1);
  }

  if (value == null) {
    return;
  }

  return isNegative ? `-${String(value)}` : value;
};

const config: SystemConfigs = {
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
