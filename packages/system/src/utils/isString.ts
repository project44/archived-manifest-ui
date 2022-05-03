export function isString(value: any): value is string {
  const type = typeof value;

  return type === 'string' || (type === 'object' && value != null && !Array.isArray(value));
}
