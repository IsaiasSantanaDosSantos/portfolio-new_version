import styled from 'styled-components';

export const Container = styled.header`
  display: flex;

  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.sm};

  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};

  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};

  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;
