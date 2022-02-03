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
import { compose, responsive, SystemConfig } from '../core';
import { SystemStyleObject, SystemTheme } from '../types';
import get from 'lodash.get';

const systemProps = compose(
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

systemProps.propNames.forEach((propName: string) => {
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

export function css(stylesOrFn: SystemStyleObject) {
  return (theme: SystemTheme = {}) => {
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

      const prop = get(aliases, style, style);
      const scaleName = get(scales, prop);
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
