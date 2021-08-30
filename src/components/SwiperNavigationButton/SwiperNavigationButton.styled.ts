import styled from "styled-components";
import { ISwiperNavigationButtonProps } from "./SwiperNavigationButton";

export const StyledSwiperNavigation = styled.div<Partial<ISwiperNavigationButtonProps>>`
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
  transform: translateY(-50%) ${({reversed}) => reversed && 'rotate(180deg)'};
  right: ${({reversed}) => !reversed && '-60px'};
  left: ${({reversed}) => reversed && '-60px'};
  transition: all .2s ease-in;
  z-index: 2;

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