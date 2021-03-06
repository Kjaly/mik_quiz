import styled from 'styled-components';
import { device } from '../../../theme/devices';

export const StyledMailConfirmModal = styled.div`
  background-color: #fff;
  padding: 30px;
  max-width: 560px;
  align-items: flex-start;
`

export const StyledCloseIcon = styled.div`
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  > svg {
    width: 20px;

    > path {
      fill: ${({theme}) => theme.color.black};
      opacity: 0.2;
    }
  }

`

export const StyledMailConfirmTitle = styled.div`
  margin-right: 1em;
  font-size: 20px;

  ${device.tablet} {
    font-size: 30px;
  }
`
export const StyledHeader = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 30px;
  color: ${({theme}) => theme.color.blue};
  margin-bottom: 20px;
`
export const StyledDescription = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`
export const StyledText = styled.div`
  display: inline;

  > a {
    color: ${({theme}) => theme.color.blue};
  }
`
export const StyledIcon = styled.div`
  display: none;
  width: 48px;
  height: 36px;
  margin-right: 20px;

  ${device.tablet} {
    display: block
  }
`
export const StyledMobileIcon = styled(StyledIcon)`
  display: block;

  ${device.tablet} {
    display: none
  }
`
export const StyledButton = styled.div`
  max-width: 140px;
  margin: 20px auto 0;
`
