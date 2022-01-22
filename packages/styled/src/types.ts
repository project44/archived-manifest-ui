export type As<Props = any> = React.ElementType<Props>;

export type PropsWithoutRef<P> = P extends any
  ? 'ref' extends keyof P
    ? Pick<P, Exclude<keyof P, 'ref'>>
    : P
  : P;

export type ComponentProps<T extends React.ElementType> = PropsWithoutRef<React.ComponentProps<T>>;
