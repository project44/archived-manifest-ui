import { systemProps } from './isStyleProp';

const props = new Set([...systemProps, 'as', 'sx', 'theme']);

export const shouldForwardProp = (prop: string): boolean => !props.has(prop);
