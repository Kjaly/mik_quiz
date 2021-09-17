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
export const StyledQuizTimer = styled.div`
  position: absolute;
  top: -30px;
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
    fill:${({theme}) => theme.color.black};
    margin-right: 10px;
  }
`
