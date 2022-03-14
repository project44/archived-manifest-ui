import { Cache, Prop, Props, ResponsiveArray, ResponsiveObject, Scale, Theme } from '../types';
import get from 'lodash.get';
import { SystemConfig } from './systemConfig';

export const createMediaQuery = (n: string) => `@media screen and (min-width: ${n})`;

export const defaultBreakpoints = ['600px', '1024px', '1280px', '1920px'];

export function parseBreakpoints(breakpoints: Prop<string | number>) {
  return (breakpoints as string[]).map((item: string) => createMediaQuery(item));
}

export function parseResponsiveStyle(options: {
  cache: Cache;
  props: Props;
  propValue: Array<string | number | ((theme: Theme | undefined) => string | number)>;
  scale: Scale;
  systemConfig: SystemConfig;
}) {
  const { cache, propValue, props, scale, systemConfig } = options;
  const mediaQueries = cache.get('mediaQueries') as ResponsiveArray<string | number>;

  let styles: { [key: string]: any } = {};

  propValue.slice(0, mediaQueries.length).forEach((item, index) => {
    const media = mediaQueries[index];
    const value = typeof item === 'function' ? item(props.theme as Theme) : item;
    const style = systemConfig(value, scale, props);

    styles = !media
      ? { ...styles, ...style }
      : { ...styles, [media]: { ...styles[media], ...style } };
  });

  return styles;
}

export function parseResponsiveObject(options: {
  cache: Cache;
  props: Props;
  propValue: {
    [x: string]: string | number | ((theme: Theme | undefined) => string | number);
  };
  scale: Scale;
  systemConfig: SystemConfig;
}) {
  const { cache, propValue, props, scale, systemConfig } = options;
  const breakpoints = cache.get('breakpoints') as ResponsiveObject<string | number>;

  let styles: { [key: string]: any } = {};

  for (const key in propValue) {
    const breakpoint = breakpoints[key];
    const item = propValue[key];
    const value = typeof item === 'function' ? item(props.theme as Theme) : item;
    const style = systemConfig(value, scale, props);

    if (!breakpoint) {
      styles = { ...styles, ...style };
    } else {
      const media = createMediaQuery(breakpoint as string);

      styles = { ...styles, [media]: { ...styles[media], ...style } };
    }
  }

  return styles;
}

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
