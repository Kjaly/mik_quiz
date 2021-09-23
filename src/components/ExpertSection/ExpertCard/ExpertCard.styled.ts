import styled from 'styled-components';
import { device } from '../../../theme/devices';

export const StyledImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 270px;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  flex: 1 0 80%;
`;
export const StyledExpertImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.2s ease-in-out;
  min-height: 187px;
`;

export const StyledExpertCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    box-shadow: 0 22px 66px -13px rgba(104, 62, 0, 0.15);

    ${StyledExpertImg} {
      transform: scale(1.1);
    }
  }
`;

export const StyledExpertInfo = styled.div`
  width: 100%;
  flex: 1 0 20%;
  padding: 20px 30px 30px;
  min-height: 174px;

  ${device.desktop} {
    min-height: 230px;
  }
`;

export const StyledExpertName = styled.p`
  font-size: 17px;
  font-weight: 700;
  line-height: 1.25;
  position: relative;
  padding-bottom: 10px;

  ::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000;
    opacity: 0.1;
  }
`;
export const StyledExpertDescription = styled.p`
  padding-top: 10px;
  font-size: 12px;
  color: #000;
  opacity: 0.5;
`;
