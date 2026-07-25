import * as S from './styles';

import { HeroProps } from './types';

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
}
