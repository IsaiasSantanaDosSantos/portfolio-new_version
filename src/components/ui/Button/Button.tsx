import * as S from './Button.styles';
import type { ButtonProps } from './Button.types';

export function Button({ children, ...props }: ButtonProps) {
  return <S.Container {...props}>{children}</S.Container>;
}
