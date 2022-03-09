import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledCardFooter } from './Card.styles';

export type CardFooterProps = ComponentProps<typeof StyledCardFooter>;

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  (props: CardFooterProps, ref) => (
    <StyledCardFooter className="manifestui-card-footer" ref={ref} {...props} />
  ),
);

CardFooter.displayName = 'CardFooter';
