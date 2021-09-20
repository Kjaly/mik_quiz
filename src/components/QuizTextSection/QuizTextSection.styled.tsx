import styled from 'styled-components'
import { device } from "../../theme/devices";

export const StyledQuizTextSection = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: flex-start;
  column-gap: 3em;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  flex-direction: column;

  ${device.tablet} {
    flex-direction: row;
  }
`
export const StyledTextItem = styled.div<{ isEssay?: boolean }>`
  flex: 1;
  margin-bottom: 20px;

  ${device.tablet} {
    flex: ${({isEssay}) => isEssay && 0.5};
    margin-bottom: 0;
  }
`
export const StyledQuizTextTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`
export const StyledQuizTextDescription = styled.div`
  text-align: justify;
`