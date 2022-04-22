import get from 'lodash.get';
import isNumber from 'lodash.isNumber';
import isString from 'lodash.isString';
import type { Scale } from 'styled-system';

export const positiveOrNegative = (path: any, scale?: Scale): any => {
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
};
