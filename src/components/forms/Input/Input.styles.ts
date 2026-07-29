import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Field = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;

  border: ${({ theme }) => theme.spacing.xs} solid
    ${({ theme }) => theme.colors.border.primary};

  background: ${({ theme }) => theme.colors.background.primary};

  color: ${({ theme }) => theme.colors.text.primary};
`;
