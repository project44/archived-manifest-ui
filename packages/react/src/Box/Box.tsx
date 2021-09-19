import React from 'react';

type BoxProps = React.AllHTMLAttributes<HTMLDivElement>;

export const Box = ({ className, ...props }: BoxProps) => (
  <div className={`Box ${className}`} {...props} />
);
