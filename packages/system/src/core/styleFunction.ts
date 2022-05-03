import * as CSS from 'csstype';
import { Scale, StyleFn, Transform } from '../types';
import { get } from '../utils';

export interface CreateStyleFunctionArgs {
  property?: keyof CSS.Properties;
  properties?: Array<keyof CSS.Properties>;
  scale?: string;
  transform?: Transform;
  defaultScale?: Scale;
}

export function createStyleFunction({
  properties,
  property,
  scale,
  transform = get,
  defaultScale,
}: CreateStyleFunctionArgs): StyleFn {
  const p = properties ?? (property ? [property] : []);

  const styleFn: StyleFn = (_value, _scale, _props) => {
    const result: { [key in keyof CSS.Properties]: any } = {};

    const value = transform(_scale, _value as string, _value, _props);

    if (value === null) {
      return undefined;
    }

    p.forEach(prop => {
      result[prop] = value;
    });

    return result;
  };

  styleFn.properties = properties;
  styleFn.property = property;
  styleFn.scale = scale;
  styleFn.transform = transform.name !== 'get' ? transform : undefined;
  styleFn.defaults = defaultScale;

  return styleFn;
}
