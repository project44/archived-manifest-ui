/**
 * A typed version of the styled-system css function with support for custom transformers.
 *
 * https://github.com/styled-system/styled-system/blob/master/packages/css/src/index.js
 */
import { Pseudos, pseudoSelectors } from './pseudos';
import { styledPropNames, styledProps } from '../props';
import { SystemStyleObject, Theme } from '../types';
import { ConfigStyle } from '@styled-system/core';
import get from 'lodash.get';
import { responsive } from './responsive';

const aliases: Record<string, string> = {};
const multiples: Record<string, Array<string>> = {};
const scales: Record<string, string> = {};
const transforms: Record<string, any> = {};

styledPropNames.forEach(propName => {
  const config: ConfigStyle = (styledProps.config as any)[propName];

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

export function css(stylesOrFn?: SystemStyleObject) {
  return (theme: Theme = {}) => {
    if (!stylesOrFn) return {};

    const result: { [key: string]: any } = {};

    const rawStyles = typeof stylesOrFn === 'function' ? stylesOrFn(theme) : stylesOrFn;
    const styles = responsive(rawStyles)(theme);

    for (const style in styles) {
      const styleValue = styles[style];

      if (styleValue && typeof styleValue === 'object') {
        if (style in pseudoSelectors) {
          result[pseudoSelectors[style as keyof Pseudos]] = css(styleValue as SystemStyleObject)(
            theme,
          );

          continue;
        }

        result[style] = css(styleValue as SystemStyleObject)(theme);

        continue;
      }

      const prop: string | number = get(aliases, style, style);
      const scaleName: string | number = get(scales, prop);
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
