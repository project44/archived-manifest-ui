import type { Dict } from './types';

export function capitalize(str: string): string {
  if (typeof str === 'string') {
    return str.replace(/^\w/, (c) => c.toUpperCase());
  } else {
    return '';
  }
}

export function mapToVariant<
  InputType = string | Dict,
  OutputType = string | Dict,
>(map: Dict, input: InputType, fallback = '') {
  if (typeof input === 'string') {
    return map[input] || fallback;
  }

  const mapping: Dict = {};
  Object.keys(input).forEach(
    (key: string) => (mapping[key] = map[(input as Dict)[key]]),
  );
  return mapping as OutputType;
}
