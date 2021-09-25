import styled from 'styled-components';
import { device } from '../../../theme/devices';

export const StyledRegistrationFormModal = styled.div`
  max-width: 560px;
  max-height: 775px;
  overflow: auto;
  height: auto;
  width: 100%;
  background-color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const StyledTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${({theme}) => theme.color.blue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`
export const StyledCross = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > svg {
    width: 20px;
    height: 20px;

    > path {
      fill: #000;
      opacity: .3;
    }
  }
`

export const StyledForm = styled.div`
  flex: 1 0 auto;
  width: 100%;
  padding-bottom: 30px;

  > div {
    margin-bottom: 20px;
  }
`

export const StyledButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;

  > div:last-child {
    margin-bottom: 20px;
  }

  > div {
    width: 100%;
  }

  ${device.tablet} {
    flex-direction: row;

    > div {
      width: initial;
    }

    > div:last-child {
      margin-bottom: 0;
    }
  }
`
export const StyledError = styled.div`
  color:${({theme})=>theme.color.red};
  font-size: 12px;
`

export const StyledPreloader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`
