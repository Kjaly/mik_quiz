import styled from 'styled-components';

export const StyledPhotoModal = styled.div`
  max-width: 1100px;
  width: 100%;
  flex-direction: column;
  max-height: 625px;
  border-radius: 8px;

`;

export const StyledSwiper = styled.div`
  height: 625px;

  .swiper-container {
    height: 100%;
  }
`;
export const StyledSlideImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
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
  z-index: 2;

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