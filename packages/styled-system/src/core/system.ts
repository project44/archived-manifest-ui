import * as CSS from 'csstype';
import { createParser, Parser } from './parser';
import { createSystemConfig, SystemConfig } from './systemConfig';
import { Configs } from '../types';

export function system(configs: Configs): Parser {
  const config: { [key: string]: SystemConfig } = {};

  for (const key in configs) {
    const value = configs[key];

    if (value === true) {
      config[key] = createSystemConfig({
        property: key as keyof CSS.Properties,
        scale: key,
      });

      continue;
    }

    config[key] = createSystemConfig({ ...value });
  }

  const parser = createParser(config);

  return parser;
}
