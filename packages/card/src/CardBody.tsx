import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledCardBody } from './Card.styles';

export type CardBodyProps = ComponentProps<typeof StyledCardBody>;

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  (props: CardBodyProps, ref) => (
    <StyledCardBody className="manifestui-card-body" ref={ref} {...props} />
  ),
);

CardBody.displayName = 'CardBody';
