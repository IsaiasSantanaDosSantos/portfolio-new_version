import * as S from './Navbar.styles';
import type { NavbarProps } from './Navbar.types';

export function Navbar({ children, ...props }: NavbarProps) {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
}
