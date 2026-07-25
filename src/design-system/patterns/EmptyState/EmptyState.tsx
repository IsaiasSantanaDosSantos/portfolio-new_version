import * as S from './styles';

import { EmptyStateProps } from './types';

export function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.Message>{message}</S.Message>
    </S.Container>
  );
}
