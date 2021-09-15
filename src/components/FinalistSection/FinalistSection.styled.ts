import styled from 'styled-components';
import { device } from '../../theme/devices';

export const StyledFinalistSection = styled.div`
  width: 100%;
  background: ${({theme}) => theme.color.darkwhite};
  padding: 100px 0;
  position: relative;

  ${device.tabletL} {
    background: linear-gradient(90deg, ${({theme}) => theme.color.darkwhite} 90%, rgba(0, 0, 0, 0) 50%);

  }
`
export const StyledTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 40px;
  
  ${device.tabletL}{
    flex-direction: row;
  }
`

export const StyledDecorativeWrapper = styled.div`
  display: none;

  ${device.tabletL} {
    position: absolute;
    content: '';
    right: 0;
    z-index: 0;
    transform: rotate(45deg) scale(1, -1) translate(-185px, 120px);

    :first-child {
      left: 100px;
      right: initial;
      bottom: 400px;
      transform: rotate(-45deg) scale(-1, -1) translate(-115px, 50px);

    }
  }
`
