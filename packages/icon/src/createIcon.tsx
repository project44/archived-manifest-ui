import * as React from 'react';
import { Icon, IconProps } from './Icon';

export interface CreateIconOptions {
  size?: string;
  viewBox?: string;
}

export function createIcon(path: React.ReactNode, name: string, options?: CreateIconOptions) {
  const Component = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <Icon size={options?.size} ref={ref} viewBox={options?.viewBox} {...props}>
      {path}
    </Icon>
  ));

  Component.displayName = `${name}Icon`;

  return React.memo(Component);
}
