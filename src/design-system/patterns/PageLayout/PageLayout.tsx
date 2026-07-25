import * as S from './styles';

import { PageLayoutProps } from './types';

export function PageLayout({ children }: PageLayoutProps) {
  return <S.Container>{children}</S.Container>;
}
