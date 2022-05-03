// based on https://github.com/developit/dlv
export function get(obj: unknown, path: string | number, fallback?: unknown): any {
  const keyAsArray = path && typeof path === 'string' ? path.split('.') : [path];

  let values: any = obj;

  keyAsArray.forEach(k => {
    values = values ? values[k] : undefined;
  });

  return values === undefined ? fallback : values;
}
