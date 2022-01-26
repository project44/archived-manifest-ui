import { ConfigStyle, Props, Scale, Transform } from '../types';
import get from 'lodash.get';

export interface SystemConfig {
  (value: string | number, scale: Scale, props: Props, cache?: Cache): any;
  defaultScale?: Scale;
  properties?: string[];
  property?: string;
  scale?: string;
  transform?: Transform;
}

export function createSystemConfig(config: ConfigStyle): SystemConfig {
  const { defaultScale, properties, property, scale, transform = get } = config;

  const styleProperty = properties ?? (property ? [property] : []);

  const systemConfig: SystemConfig = (value, scale, props) => {
    const result: Record<string, any> = {};

    const parsedValue = transform(scale, value, value, props);

    if (parsedValue === null) return;

    styleProperty.forEach(prop => {
      if (prop) {
        result[prop] = parsedValue;
      }
    });

    return result;
  };

  systemConfig.defaultScale = defaultScale;
  systemConfig.properties = properties;
  systemConfig.property = property;
  systemConfig.scale = scale;
  systemConfig.transform = transform.name !== 'get' ? transform : undefined;

  return systemConfig;
}
