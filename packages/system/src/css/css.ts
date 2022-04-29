/**
 * Copying and extending the functionality of the base styled-system css function to
 * ensuring support for custom transformations, multiple and aliased properties.
 *
 * https://github.com/styled-system/styled-system/blob/master/packages/css/src/index.js
 */
import { allSystemProps, systemProps } from '../props';
import { CSSObject, get } from '@styled-system/css';

const aliases: Record<string, string> = {};
const multiples: Record<string, Array<string>> = {};
const scales: Record<string, string> = {};
const transforms: Record<string, any> = {};

allSystemProps.forEach(propName => {
  //@ts-expect-error: styled-system config type is a generic object.
  const config = systemProps.config?.[propName];

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

const defaultBreakpoints = [40, 52, 64].map(n => `${n}em`);

const defaultTheme = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

export const responsive = (styles: Record<string, any>) => (theme: JSON) => {
  const result: { [key: string]: any } = {};
  const breakpoints = get(theme, 'breakpoints', defaultBreakpoints) as string[];

  const mediaQueries = [
    null,
    ...breakpoints.map(breakpoint => `@media screen and (min-width: ${breakpoint})`),
  ];

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

export function css(stylesOrFn: any) {
  return (props = {}): CSSObject => {
    const theme: JSON = { ...defaultTheme, ...((props as any)?.theme || props) };

    const result: { [key: string]: any } = {};

    const rawStyles: object = typeof stylesOrFn === 'function' ? stylesOrFn(theme) : stylesOrFn;
    const styles = responsive(rawStyles)(theme);

    Object.keys(styles).forEach(style => {
      const styleValue = styles[style];

      if (styleValue && typeof styleValue === 'object') {
        result[style] = css(styleValue)(theme);

        return;
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

        return;
      }

      result[prop] = value;
    });

    return result;
  };
}
