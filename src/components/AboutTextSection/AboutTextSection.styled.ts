import styled from 'styled-components';
import { device } from '../../theme/devices';

export const StyledTextSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  align-items: center;


  ${device.tabletL} {
    flex-direction: row;
  }
`
export const StyledImg = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({theme}) => theme.color.blue};
  position: relative;
  margin-bottom: 20px;

  ::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: ${({theme}) => theme.color.yellow};
  }

  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  ${device.tabletL} {
    max-width: 415px;
    margin-bottom: 0;
  }

`
export const StyledText = styled.div`
  width: 100%;

  > p {
    font-size: 15px;
    margin-bottom: 20px;

    :last-child {
      margin-bottom: 0;
    }
  }

  ${device.tabletL} {
    margin-left: 60px;
    max-width: 50%;
  }
`
