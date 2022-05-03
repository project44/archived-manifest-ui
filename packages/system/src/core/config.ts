import { ConfigStyle, SystemConfig } from '../types';
import { get } from '../utils';

export function createConfig(config: ConfigStyle): SystemConfig {
  const { defaultScale, properties, property, scale, transform = get } = config;

  const styleProperty = properties ?? (property ? [property] : []);

  const systemConfig: SystemConfig = (value, scale, props) => {
    const result: Record<string, any> = {};

    const parsedValue = transform(scale, value, value, props);

    if (parsedValue === null) return;

    styleProperty.forEach(prop => {
      result[prop] = parsedValue;
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
