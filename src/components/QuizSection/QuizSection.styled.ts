import styled from "styled-components";
import { device } from "../../theme/devices";

export const StyledQuizBlock = styled.div`

  margin: 30px 0 50px;

  ${device.tablet} {
    margin: 50px 0 80px;

  }

  ${device.desktop} {
    margin: 70px 0 100px;
  }
`
export const StyledQuizHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

`
export const StyledQuizTitle = styled.div`
`
export const StyledQuizBullets = styled.div`
  display: flex;
  column-gap: 10px;

`
export const StyledBulletItem = styled.div<{ isEnabled?: boolean, active?: boolean }>`
  height: 7px;
  width: 7px;
  background-color: ${({theme, isEnabled, active}) => !isEnabled && !active ? theme.color.blue : theme.color.yellow};
  opacity: ${({isEnabled, active}) => !isEnabled && !active && 0.2};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  transform: ${({active}) => active && 'scale(1.2)'};

  :hover {
    transform: scale(1.2);
  }
`
export const StyledQuizMainSection = styled.div`
  width: 100%;
  background-color: #fff;
  height: 400px;
  box-shadow: 0 22px 66px -13px rgba(104, 62, 0, 0.15);
  padding: 40px;

`
export const StyledQuizQuestion = styled.div`
  position: relative;
  padding-bottom: 30px;
  ::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({theme}) => theme.color.darkgray};
    opacity: 0.2;
  }
`
export const StyledQuizAnswers = styled.div`
`
export const StyledButton = styled.div`
`
