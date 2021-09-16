import styled from 'styled-components';
import { device } from "../../../theme/devices";

export const StyledAddPublicationModal = styled.div<{ step?: number }>`
  max-width: 740px;
  height: ${({step}) => step === 1 ? 'auto' : 'calc(100% - 100px)'};
  overflow: auto;
  width: 100%;
  background-color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  position: relative;
`
export const StyledPublicationsTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.color.blue};

  ${device.tablet} {
    margin-bottom: 30px;
  }

`
export const StyledDropDownWrapper = styled.div`
  max-width: 475px;

  > div {
    margin-bottom: 20px;
  }
`
export const StyledActiveWrapper = styled.div<{ isActive: boolean }>`
  transition: all .2s ease-in-out;
  width: 100%;
  overflow: ${({isActive}) => isActive ? 'initial' : 'hidden'};
  max-height: ${({isActive}) => isActive ? '800px' : '0px'};

  > div {
    margin-bottom: 20px;

    :last-child {
      margin-bottom: 0;
    }
  }

`
export const StyledFileViewer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`
export const StyledCross = styled.div`
  flex: 1;
  height: 20px;
  width: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  :hover {
    transform: scale(1.1);
  }

  > svg {
    height: 20px;
    width: 20px;

    > path {
      fill: #000;
      opacity: 0.2;
    }
  }
`

export const StyledButton = styled.div`
  margin-top: 30px;

  ${device.tablet} {
    max-width: 170px;

  }
`
export const StyledCompletePublication = styled.div`
  display: flex;
`
export const StyledCompleteIcon = styled.div`
  display: none;


  ${device.tablet} {
    display: block;
    height: 44px;
    width: 44px;
    flex-shrink: 0;
    margin-right: 20px;
  }
`
export const StyledCompleteText = styled.div`
  line-height: 1.5;
`
export const StyledMobileIcon = styled.div`
  height: 61px;
  width: 61px;
  margin-right: 20px;

  ${device.tablet} {
    display: none;
  }
`
