import get from 'lodash.get';
import { Theme } from '../types';

export const responsive = (styles?: Record<string, any>) => (theme: Theme) => {
  const result: { [key: string]: any } = {};

  const breakpoints = get(theme, 'breakpoints', ['40em', '64em', '80em', '120em']);
  const mediaQueries = [null, ...breakpoints.map(n => `@media screen and (min-width: ${n})`)];

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
