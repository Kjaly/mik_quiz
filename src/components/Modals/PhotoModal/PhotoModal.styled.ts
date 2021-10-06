import styled from 'styled-components';
import { device } from '../../../theme/devices';

export const StyledPhotoModal = styled.div`
  max-width: 1100px;
  width: 90%;
  flex-direction: column;
  max-height: 625px;
  border-radius: 8px;
`;

export const StyledSwiper = styled.div`
  height: 322px;

  .swiper-container {
    height: 100%;
  }

  .swiper-slide {
    background: ${({theme})=>theme.color.darkgray};
    width: 100% !important;
  }

  
  ${device.laptop} {
    height: 625px;
  }
`;

export const StyledLeftNavigation = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(50%);
  z-index: 2;
  left: 0;
`;
export const StyledRightNavigation = styled(StyledLeftNavigation)`
  left: initial;
  right: 0;
`;
export const StyledSlideImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

export const StyledCloseIcon = styled.div`
  position: absolute;
  right: -15px;
  top: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #fff;
  height: 30px;
  width: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  z-index: 2;

  &:hover {
    transform: scale(1.1);
  }

  > svg {
    width: 18px;

    > path {
      fill: ${({theme}) => theme.color.yellow};
    }
  }

  ${device.tablet} {
    right: -20px;
    top: -20px;
    height: 40px;
    width: 40px;

    > svg {
      width: 24px;
    }
  }

`;
