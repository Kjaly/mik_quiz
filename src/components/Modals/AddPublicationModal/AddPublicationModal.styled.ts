import styled from 'styled-components';

export const StyledAddPublicationModal = styled.div`
  max-width: 740px;
  max-height: 2000px;
  height: auto;
  width: 100%;
  background-color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  position: relative;
`
export const StyledPublicationsTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
`
export const StyledDropDownWrapper = styled.div`
  max-width: 475px;
`
export const StyledActiveWrapper = styled.div<{ isActive: boolean }>`
  transition: all .2s ease-in-out;
  width: 100%;
  overflow: hidden;
  max-height: ${({isActive}) => isActive ? '800px' : '0px'}
`
export const StyledFileViewer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`
export const StyledCross = styled.div`
  position: absolute;
  right: 15px;
  height: 14px;
  width: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  :hover {
    transform: scale(1.1);
  }

  > svg {
    > path {
      fill: ${({theme}) => theme.color.darkgray}
    }
  }
`

export const StyledButton = styled.div`
  margin-top: 30px;
  max-width: 285px;
`
