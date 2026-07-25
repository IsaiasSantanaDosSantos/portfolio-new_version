import * as S from './styles';

import { ButtonProps } from './types';

export function Button({ children, ...props }: ButtonProps) {
  return <S.Container {...props}>{children}</S.Container>;
}
