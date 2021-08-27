import styled from "styled-components";

export const StyledSwiper = styled.div`
  position: relative;
`
export const StyledSwiperNavigation = styled.div<{ reverse: boolean }>`
  cursor: pointer;
  background: #fff;
  position: absolute;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%) ${({reverse})=>reverse && 'rotate(180deg)' };
  right: ${({reverse})=>!reverse && '-60px' };
  left: ${({reverse})=>reverse && '-60px' };
  transition: all .2s ease-in;
  &.swiper-button-disabled {
    cursor: initial;
    background: ${({theme}) => theme.color.yellow};
    > svg > path {
      fill: #fff;
    }
  }
  > svg {
    height: 24px;
  }
`