import { styledPropNames } from '../props';

const props = new Set([...styledPropNames, 'as', 'sx', 'theme']);

export const shouldForwardProp = (prop: string): boolean => !props.has(prop);
