import { Config as SystemConfig } from 'styled-system';

export type Config<T> = Record<keyof T, SystemConfig[string]>;
