import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  padding: ${({ theme }) => theme.spacing['2xl']} 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['3xl']};

  color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const Subtitle = styled.p`
  margin-top: ${({ theme }) => theme.spacing.md};

  font-size: ${({ theme }) => theme.fontSize.lg};

  color: ${({ theme }) => theme.colors.grayLight};
`;
