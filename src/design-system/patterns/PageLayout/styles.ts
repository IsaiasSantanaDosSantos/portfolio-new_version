import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.width.max};

  margin: 0 auto;

  padding: ${({ theme }) => theme.spacing.xl};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;
