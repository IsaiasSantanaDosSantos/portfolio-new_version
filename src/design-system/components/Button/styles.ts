import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.spacing.md};

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};

  background: ${({ theme }) => theme.colors.primaryYellow};
  color: ${({ theme }) => theme.colors.primaryBlack};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.base};

  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.base};

  &:hover {
    opacity: ${({ theme }) => theme.opacity.hover};
  }
`;
