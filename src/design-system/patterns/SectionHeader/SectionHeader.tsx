import * as S from './styles';

import { SectionHeaderProps } from './types';

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.Description>{description}</S.Description>
    </S.Container>
  );
}
