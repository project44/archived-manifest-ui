import { allSystemProps } from '@manifest-ui/styled-system';

export const systemProps = [...(allSystemProps.propNames as string[])];

export const isStyleProp = (prop: string) => systemProps.includes(prop);
