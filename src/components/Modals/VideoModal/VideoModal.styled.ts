import styled from 'styled-components';
import { device } from '../../../theme/devices';

export const StyledVideoModal = styled.div`
  height: 560px;
  width: 800px;
  display: flex;
  flex-direction: column;

`;

export const StyledPlayer = styled.div`
  flex: 1;
  background-color: #dedede;
  border-radius: 8px;
  min-height: 180px;
  height: 180px;
  width: 100%;
  margin-bottom: 20px;
  position: relative;

  > div:nth-child(2) {
    height: 100%;

    > iframe {
      border-radius: 8px;
    }
  }

  ${device.tablet} {
    min-height: 322px;
    height: 322px;
  }

  ${device.desktop} {
    margin-bottom: 30px;
    min-height: 450px;
    height: 450px;
  }
`;

export const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
export const StyledVideoTitle = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;

`;
export const StyledVideoDescription = styled.p`
  color: #fff;
  font-size: 15px;
`;

export const StyledCloseIcon = styled.div`
  position: absolute;
  right: -20px;
  top: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #fff;
  height: 40px;
  width: 40px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    transform: scale(1.1);
  }

  > svg {
    width: 24px;

    > path {
      fill: ${({theme}) => theme.color.yellow};
    }
  }

`;