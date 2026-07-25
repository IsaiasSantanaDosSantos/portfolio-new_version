import styled from 'styled-components';

export const Container = styled.header`
  display: flex;

  flex-direction: column;

  gap: ${({ theme }) => theme.spacing.sm};

  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize['2xl']};

  color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.grayLight};

  font-size: ${({ theme }) => theme.fontSize.base};
`;
