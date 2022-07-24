import styled from 'styled-components';

import { Flex } from '../Flex';
import { FlexProps } from '../Flex/styles';

type ContainerProps = FlexProps;

export const Container = styled(Flex)<ContainerProps>`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray[3]};
`;
