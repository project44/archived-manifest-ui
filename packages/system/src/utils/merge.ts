export function merge(a: Record<string, unknown>, b: Record<string, unknown>) {
  const result = { ...a, ...b };

  Object.keys(result).forEach(key => {
    if (!a[key] || typeof b[key] !== 'object') {
      return;
    }

    Object.assign(result, { [key]: Object.assign(a[key], b[key]) });
  });

  return result;
}
