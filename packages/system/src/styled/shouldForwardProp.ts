import { systemProps } from '../css';

export const allSystemProps = [...systemProps.propNames];

const props = new Set([...allSystemProps, 'as', 'sx', 'theme']);

export const shouldForwardProp = (prop: string): boolean => !props.has(prop);
