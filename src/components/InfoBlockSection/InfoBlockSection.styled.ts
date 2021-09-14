import styled from 'styled-components';
import { device } from '../../theme/devices';


export const StyledInfoWrapper = styled.div`
  width: 100%;
  padding: 100px 0;

`

export const StyledJoinCard = styled.div`
  width: 100%;
  display: flex;
  color: #fff;
  background-color: ${({theme}) => theme.color.blue};
  margin-bottom: 30px;

  :last-child {
    margin-bottom: 0;
  }
`
export const StyledJoinCardLeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  background-color: ${({theme}) => theme.color.blue};
  padding: 50px;
  flex-basis: 50%;

  ${device.tabletL} {
    flex-basis: 100%;
  }

`
export const StyledJoinCardText = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
  
  ${device.tabletL}{
    font-size: 30px;
  }
`
export const StyledJoinCardDescription = styled.p`
  font-size: 15px;
  margin-bottom: 30px;
`
export const StyledButtonWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: flex-end;

`

export const StyledJoinCardImg = styled.div`
  background-color: ${({theme}) => theme.color.yellow};
  flex-basis: 50%;
  max-height: 500px;
  flex-shrink: 0;
  overflow: hidden;
  cursor: pointer;
  transition: all .2s ease-in-out;

  > img {
    transition: all .2s ease-in-out;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  :hover {
    > img {
      transform: scale(1.2);
    }
  }

  ${device.tablet} {
    max-height:340px;
  }
  
  ${device.tabletL} {
    width: 350px;
    height: 100%;
  }
`

export const StyledDecorativeWrapper = styled.div`
  position: absolute;
  content: '';
  left: 0;
  z-index: 0;
  transform: rotate(-45deg) scale(-1, -1) translate(-115px, 50px);
`
