import * as S from './HeroSection.styles';

import type { HeroSectionProps } from './HeroSection.types';

export function HeroSection({ title, subtitle, ...props }: HeroSectionProps) {
  return (
    <S.Wrapper {...props}>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Wrapper>
  );
}
