import { systemProps } from './isStyleProp';

const props = new Set([...systemProps, 'as', 'size', 'sx', 'theme', 'variant']);

export const shouldForwardProp = (prop: string): boolean => !props.has(prop);
