import * as S from './Input.styles';
import type { InputProps } from './Input.types';

export function Input({ label, error, ...props }: InputProps) {
  return (
    <S.Wrapper>
      {label && <label>{label}</label>}

      <S.Field {...props} />

      {error && <small>{error}</small>}
    </S.Wrapper>
  );
}
