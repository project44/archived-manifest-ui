import TOKEN_MAP from './generated/tokenMap';

export function getToken<T extends keyof typeof TOKEN_MAP>(path: T) {
  const token = TOKEN_MAP[path];

  if (process.env.NODE_ENV !== 'production' && !token) {
    console.warn(`[Manifest UI] unknown design token at path: ${path}`);

    return '';
  }

  return token;
}
