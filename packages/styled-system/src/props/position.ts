import * as CSS from 'csstype';
import { Configs, Length, ResponsiveValue, Scale } from '../types';
import get from 'lodash.get';
import isNumber from 'lodash.isnumber';
import isString from 'lodash.isString';
import { system } from '../core';

export interface PositionProps {
  position?: ResponsiveValue<CSS.Property.Position>;
  pos?: ResponsiveValue<CSS.Property.Position>;
  zIndex?: ResponsiveValue<CSS.Property.ZIndex>;
  top?: ResponsiveValue<CSS.Property.Top<Length>>;
  right?: ResponsiveValue<CSS.Property.Right<Length>>;
  bottom?: ResponsiveValue<CSS.Property.Bottom<Length>>;
  left?: ResponsiveValue<CSS.Property.Left<Length>>;
}

function positiveOrNegative(scale?: Scale, path?: any): any {
  if (!isNumber(path)) {
    if (isString(path) && path.startsWith('-')) {
      const raw = path.slice(1);
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
}

const config: Configs = {
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
