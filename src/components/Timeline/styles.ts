import styled from 'styled-components';

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  gap: 32px;

  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  gap: 8px;
`;

export const AvatarContainer = styled.div`
  position: relative;

  padding: 8px;

  display: flex;
  justify-content: center;

  span {
    z-index: 10;
    clip-path: circle(50% at 50% 50%);
  }
`;

export const Line = styled.div`
  position: absolute;
  background-color: blue;
  width: 2px;
  margin-top: -1024px;
  height: 1024px;
`;
