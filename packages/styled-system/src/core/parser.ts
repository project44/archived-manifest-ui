import {
  defaultBreakpoints,
  parseBreakpoints,
  parseResponsiveObject,
  parseResponsiveStyle,
} from './responsive';
import { Prop, Scale } from '../types';
import get from 'lodash.get';
import merge from 'lodash.merge';
import { SystemConfig } from './systemConfig';

export interface Parser {
  (...args: any[]): any;
  cache: ParserCache;
  config: { [key: string]: SystemConfig };
  propNames: string[];
}

export type ParserCache = Map<string, any>;

// Sort responsive values.
function sort(obj: { [x: string]: unknown }) {
  const next: { [x: string]: unknown } = {};

  Object.keys(obj)
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: 'base',
      }),
    )
    .forEach(key => {
      next[key] = obj[key];
    });

  return next;
}

export function createParser(config: { [key: string]: SystemConfig }) {
  const cache: ParserCache = new Map();

  const parser = (props: { [key: string]: any }) => {
    let styles: Record<string, any> = {};
    let shouldSort = false;

    const isCacheDisabled = props?.theme && props.theme.disableStyledSystemCache;

    for (const prop in props) {
      if (!config[prop]) continue;

      const systemConfig = config[prop];

      const scale = get(
        props.theme,
        systemConfig.scale as string,
        systemConfig.defaultScale,
      ) as Scale;

      let propValue = props[prop];

      if (propValue === undefined) return {};

      if (typeof propValue === 'function') {
        propValue = propValue(props.theme);
      }

      if (typeof propValue === 'object') {
        const breakpoints: Prop<string | number> =
          (!isCacheDisabled && cache.get('breakpoints')) ||
          get(props.theme, 'breakpoints', defaultBreakpoints);

        cache.set('breakpoints', breakpoints);

        if (Array.isArray(propValue)) {
          const mediaQueries = (!isCacheDisabled && cache.get('mediaQueries')) || [
            null,
            ...parseBreakpoints(breakpoints),
          ];

          cache.set('mediaQueries', mediaQueries);

          const responsiveStyles = parseResponsiveStyle({
            cache,
            propValue,
            props,
            scale,
            systemConfig,
          });

          styles = merge(styles, responsiveStyles);

          continue;
        }

        if (propValue !== null) {
          shouldSort = true;

          const responsiveStyles = parseResponsiveObject({
            cache,
            propValue,
            props,
            scale,
            systemConfig,
          });

          styles = merge(styles, responsiveStyles);

          continue;
        }
      }

      styles = { ...styles, ...systemConfig(propValue as string | number, scale, props) };
    }

    if (shouldSort) {
      styles = sort(styles);
    }

    return styles;
  };

  parser.config = config;
  parser.propNames = Object.keys(config);
  parser.cache = cache;

  const keys = Object.keys(config).filter(k => !['config', 'propNames', 'cache'].includes(k));

  if (keys.length > 1) {
    keys.forEach(key => {
      Object.assign(parser, { [key]: createParser({ [key]: config[key] }) });
    });
  }

  return parser;
}
