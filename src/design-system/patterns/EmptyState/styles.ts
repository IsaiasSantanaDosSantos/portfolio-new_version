import styled from 'styled-components';

export const Container = styled.section`
  padding: ${({ theme }) => theme.spacing['2xl']};

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  gap: ${({ theme }) => theme.spacing.md};
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primaryWhite};
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.grayMedium};
`;
