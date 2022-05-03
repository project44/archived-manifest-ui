/**
 * Copying and extending the functionality of the base styled-system css function
 * adding support for custom transformations, multiple and aliased properties.
 *
 * https://github.com/styled-system/styled-system/blob/master/packages/css/src/index.js
 */
import {
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
} from '../props';
import { defaultBreakpoints, get, parseBreakpoints } from '../utils';
import { Prop, SystemConfig, SystemStyleObject, Theme } from '../types';
import { compose } from '../core';

export const systemProps = compose(
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

const aliases: Record<string, string> = {};
const multiples: Record<string, Array<string>> = {};
const scales: Record<string, string> = {};
const transforms: Record<string, any> = {};

systemProps.propNames.forEach(propName => {
  const config: SystemConfig = systemProps.config[propName];

  if (!config) return;

  if (config.properties) {
    multiples[propName] = [...config.properties];
  }

  if (config.transform) {
    transforms[propName] = config.transform;
  }

  if (config.scale) {
    scales[propName] = config.scale;
  }

  if (config.property && propName !== config.property) {
    aliases[propName] = config.property;
  }
});

export function responsive(styles?: Record<string, any>) {
  return (theme: Theme) => {
    const result: { [key: string]: any } = {};
    const breakpoints = get(theme, 'breakpoints', defaultBreakpoints) as Prop<string | number>;

    const mediaQueries = [null, ...parseBreakpoints(breakpoints)];

    for (const style in styles) {
      const styleValue = typeof styles[style] === 'function' ? styles[style](theme) : styles[style];

      if (styleValue === null) continue;

      if (!Array.isArray(styleValue)) {
        result[style] = styleValue;

        continue;
      }

      for (let i = 0; i < styleValue.slice(0, mediaQueries.length).length; i += 1) {
        const media = mediaQueries[i];

        if (!media) {
          result[style] = styleValue[i];

          continue;
        }

        result[media] = result[media] || {};

        if (styleValue[i] == null) continue;

        result[media][style] = styleValue[i];
      }
    }

    return result;
  };
}

export function css(stylesOrFn?: SystemStyleObject) {
  return (theme: Theme = {}) => {
    if (!stylesOrFn) return {};

    const result: { [key: string]: any } = {};

    const rawStyles = typeof stylesOrFn === 'function' ? stylesOrFn(theme) : stylesOrFn;
    const styles = responsive(rawStyles)(theme);

    for (const style in styles) {
      const styleValue: SystemStyleObject = styles[style];

      if (styleValue && typeof styleValue === 'object') {
        result[style] = css(styleValue)(theme);

        continue;
      }

      const prop: string = get(aliases, style, style);
      const scaleName: string = get(scales, prop);
      const scale = get(theme, scaleName, get(theme, prop, {}));
      const transform = get(transforms, prop, get);
      const value = transform(scale, styleValue, styleValue);

      // Resolve a system prop that controls multiple css props (paddingX, marginY, etc..).
      if (multiples[prop]) {
        const dirs = multiples[prop];

        for (let i = 0; i < Object.keys(dirs).length; i += 1) {
          result[dirs[i]] = value;
        }

        continue;
      }

      result[prop] = value;
    }

    return result;
  };
}
