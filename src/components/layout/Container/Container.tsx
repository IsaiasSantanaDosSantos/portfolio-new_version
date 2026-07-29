import { Wrapper } from './Container.styles';
import type { ContainerProps } from './Container.types';

export function Container({ children, ...props }: ContainerProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}
