import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;

  padding: ${({ theme }) => theme.spacing.md};

  border-radius: ${({ theme }) => theme.borderRadius.md};

  border: 1px solid ${({ theme }) => theme.colors.grayLight};

  background: ${({ theme }) => theme.colors.primaryWhite};

  font-family: ${({ theme }) => theme.fonts.primary};

  transition: ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;

    border-color: ${({ theme }) => theme.colors.primaryYellow};
  }
`;
