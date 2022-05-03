import {
  Cache,
  Prop,
  Props,
  ResponsiveArray,
  ResponsiveObject,
  Scale,
  SystemConfig,
  Theme,
} from '../types';

export const createMediaQuery = (n: string) => `@media screen and (min-width: ${n})`;

export const defaultBreakpoints = ['40em', '52em', '64em'];

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
