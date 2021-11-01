import React from 'react';

export type IconProps = React.SVGAttributes<SVGSVGElement>;

interface CreateIconOptions {
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string;
  /**
   * The `svg` path or group element
   * @type React.ReactElement | React.ReactElement[]
   */
  path?: React.ReactElement | React.ReactElement[];
  /**
   * If the has a single path, simply copy the path's `d` attribute
   */
  d?: string;
  /**
   * Default props automatically passed to the component
   */
  defaultProps?: IconProps;
}

export function createIcon(options: CreateIconOptions) {
  const {
    viewBox = '0 0 24 24',
    d: pathDefinition,
    path,
    defaultProps = {},
  } = options;

  const Comp = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <svg ref={ref} viewBox={viewBox} {...defaultProps} {...props}>
      {path ?? <path fill="currentColor" d={pathDefinition} />}
    </svg>
  ));

  return Comp;
}
