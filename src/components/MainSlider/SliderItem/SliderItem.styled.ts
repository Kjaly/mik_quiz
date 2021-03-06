import styled from 'styled-components';
import { device } from '../../../theme/devices';

export const StyledSliderItem = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  text-align: left;
  width: 100%;
  padding-left: 76px;
`
export const StyledSliderItemTitle = styled.div`
  margin-bottom: 20px;
  position: relative;
`
export const StyledButton = styled.div`
  width: fit-content;
  > div {
    min-height: 54px;
    height: initial ;
  }
`
export const StyledSliderText = styled.div`
  max-width: 100%;

  ${device.tablet} {
    max-width: 50%;
  }

  ${device.laptop} {
    max-width: 640px;
  }
`
