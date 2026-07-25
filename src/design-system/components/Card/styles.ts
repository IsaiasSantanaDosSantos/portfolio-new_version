import styled from 'styled-components';

export const Container = styled.article`
  background: ${({ theme }) => theme.glass.background};

  border: 1px solid ${({ theme }) => theme.glass.border};

  backdrop-filter: blur(${({ theme }) => theme.glass.blur});

  border-radius: ${({ theme }) => theme.borderRadius.lg};

  padding: ${({ theme }) => theme.spacing.lg};

  box-shadow: ${({ theme }) => theme.glass.shadow};
`;
