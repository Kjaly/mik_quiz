import styled from "styled-components";
import { device } from "../../theme/devices";

export const StyledPublications = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 50px;

  ${device.tablet} {
    margin-bottom: 80px;
  }

  ${device.desktop} {
    margin-bottom: 100px;
  }

`
export const StyledFilesGrid = styled.div<{ isEmpty: boolean }>`
  width: 100%;
  height: auto;
  margin-top: 50px;
  display: grid;
  grid-template-columns: ${({isEmpty}) => !isEmpty && 'repeat(1, 1fr)'};
  grid-auto-rows: 180px;
  grid-gap: 30px;

  ${device.tablet} {
    grid-template-columns: ${({isEmpty}) => !isEmpty && 'repeat(2, 1fr)'};
    margin-top: 80px;
  }

  ${device.desktop} {
    grid-template-columns: ${({isEmpty}) => !isEmpty && 'repeat(4, 1fr)'};
    margin-top: 100px;
  }

`
export const StyledPreviewBlock = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  width: 100%;
`

