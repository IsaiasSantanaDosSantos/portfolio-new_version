import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;

  padding: ${({ theme }) => theme.spacing.md};

  border-radius: ${({ theme }) => theme.borderRadius.md};

  border: 1px solid ${({ theme }) => theme.colors.border.primary};

  background: ${({ theme }) => theme.colors.background.primary};

  font-family: ${({ theme }) => theme.typography.fontFamily.primary};

  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;

    border-color: ${({ theme }) => theme.colors.border.primary};
  }
`;
