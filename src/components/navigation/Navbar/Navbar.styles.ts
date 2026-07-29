import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;

  background: ${({ theme }) => theme.colors.background.primary};
`;
