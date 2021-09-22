import styled from 'styled-components';
import { device } from "../../theme/devices";


export const StyledQuiz = styled.div`
  width: 100%;
  background: ${({theme}) => theme.color.darkwhite};
  display: flex;
  flex-direction: column;

  ${device.desktop} {
    background: linear-gradient(0deg, ${({theme}) => theme.color.darkwhite} 90%, rgba(0, 0, 0, 0) 50%);
  }
`

export const StyledTitleDescription = styled.div`
  line-height: 1.5;
  font-size: 15px;
  font-weight: 400;
  max-width: 620px;

`
export const StyledQuizWrapper = styled.div`
  position: relative;
`
export const StyledEarlySection = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;

  ${device.tablet} {
    padding: 80px 0;
  }

  ${device.desktop} {
    padding: 100px 0;
  }

`
export const StyledButton = styled.div`
  max-width: 200px;
`
export const StyledQuizTimer = styled.div<{ isEssay: boolean }>`
  position: absolute;
  top: ${({isEssay}) => isEssay ? '-50px' : '0'};
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  color: ${({theme}) => theme.color.black};
  opacity: 0.8;
  right: 0;

  > svg {
    width: 24px;
    height: 24px;
    fill: ${({theme}) => theme.color.black};
    margin-right: 10px;
  }

  ${device.tablet} {
    top: ${({isEssay}) => isEssay ? '-50px' : '-30px'};
  }
`
