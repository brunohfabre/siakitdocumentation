import * as HoverCard from '@radix-ui/react-hover-card';
import styled from 'styled-components';

export const Container = styled(HoverCard.Content)`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray[3]};
`;
