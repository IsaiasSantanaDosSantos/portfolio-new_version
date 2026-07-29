import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.width.max};
  width: ${({ theme }) => theme.width.min};
  margin: ${({ theme }) => theme.spacing.sm} auto;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xs};
`;
