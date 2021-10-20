import styled from 'styled-components';
import { device } from '../../theme/devices';


export const StyledContacts = styled.div`
  width: 100%;
  background: ${({theme}) => theme.color.darkwhite};
  display: flex;
  flex-direction: column;

  ${device.desktop} {
    background: linear-gradient(0deg, ${({theme}) => theme.color.darkwhite} 90%, rgba(0, 0, 0, 0) 50%);
  }
`


export const StyledContactList = styled.div`
  height: 100%;
  padding: 50px 0;

  ${device.tablet} {
    padding: 80px 0;

  }

  ${device.desktop} {
    padding: 100px 0;

  }
  > p {
    font-size: 22px;
    margin-bottom: 20px;

    > a {
      color: ${({theme}) => theme.color.blue}
    }
  } 
`
export const StyledContactItem = styled.p`
  font-size: 22px;
  margin-bottom: 20px;

  > a {
    color: ${({theme}) => theme.color.blue}
  }
`
