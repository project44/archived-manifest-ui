import * as CSS from 'csstype';
import { createParser, Parser } from './parser';
import { SystemConfig, SystemConfigs } from '../types';
import { createConfig } from './config';

export function system(configs: SystemConfigs): Parser {
  const config: { [key: string]: SystemConfig } = {};

  for (const key in configs) {
    const value = configs[key];

    if (value === true) {
      config[key] = createConfig({
        property: key as keyof CSS.Properties,
        scale: key,
      });

      continue;
    }

    config[key] = createConfig({ ...value });
  }

  const parser = createParser(config);

  return parser;
}
