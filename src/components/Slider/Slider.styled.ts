import styled from 'styled-components';
import { device } from '../../theme/devices';

export const StyledSwiper = styled.div`
  position: relative;

  .swiper-wrapper {
    align-items: stretch;
  }

  .swiper-slide {
    display: flex;
    height: auto;
  }
`
export const StyledMobileNavigation = styled.div`
  position: absolute;
  top: -60px;
  right: 60px;


  ${device.desktop} {
    display: none;
  }
`
export const StyledDesktopNavigation = styled.div`
  display: none;

  ${device.desktop} {
    display: block;
  }


`
