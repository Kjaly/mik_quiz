import styled from 'styled-components';
import { device } from '../../theme/devices';

export const StyledExpertSection = styled.div<{ aboutPage: boolean }>`
  width: 100%;
  background: ${({theme}) => theme.color.darkwhite};

  position: relative;
  z-index: 0;
  padding: 100px 0;

  ${device.tabletL} {
    background: ${({
                     aboutPage,
                     theme
                   }) => aboutPage ? theme.color.darkwhite : `linear-gradient(-90deg, ${theme.color.darkwhite} 90%, rgba(0, 0, 0, 0) 50%)`};
  }

`

export const StyledDecorativeWrapper = styled.div`
  display: none;

  ${device.tabletL} {
    position: absolute;
    content: '';
    left: 0;
    z-index: 0;
    transform: rotate(-45deg) scale(-1, -1) translate(-115px, 50px);
  }
`

export const StyledTitle = styled.div`
  max-width: 50%
`

