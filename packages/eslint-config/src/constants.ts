import path from 'path';

export const ROOT = process.env.BEEMO_ROOT ?? process.cwd();

export const TSCONFIG_JSON_PATH = path.join(ROOT, 'tsconfig.json');

export const PACKAGE_JSON_PATH = path.join(ROOT, 'package.json');
