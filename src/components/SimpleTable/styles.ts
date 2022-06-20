import styled from 'styled-components';

export const Item = styled.div`
  height: 44px;
  display: flex;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[6]};
`;
