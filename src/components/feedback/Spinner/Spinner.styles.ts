import styled from 'styled-components';

export const Loader = styled.div`
  width: 2rem;
  height: 2rem;

  border: ${({ theme }) => theme.spacing.xs} solid
    ${({ theme }) => theme.colors.border.primary};
  border-top-color: ${({ theme }) => theme.colors.border.secondary};

  border-radius: 50%;

  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
