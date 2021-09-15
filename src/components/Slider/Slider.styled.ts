import styled from 'styled-components';
import { device } from '../../theme/devices';

export const StyledSwiper = styled.div`
  position: relative;
`
export const StyledMobileNavigation = styled.div`
  position: absolute;
  top: -60px;
  right: 60px;


  ${device.tabletL} {
    display: none;
  }
`
export const StyledDesktopNavigation = styled.div`
  display: none;

  ${device.tabletL} {
    display: block;
  }

`
