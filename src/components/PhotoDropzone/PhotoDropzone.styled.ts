import styled from 'styled-components';
import { device } from "../../theme/devices";

export const StyledPhotoDropZone = styled.div<{ isDragActive: boolean }>`
  width: 100%;
  background-color: ${({theme}) => theme.color.darkwhite};
  padding: 30px;
  display: flex;
  flex-direction: column-reverse;
  filter: brightness(${({isDragActive}) => isDragActive && 0.9});

  ${device.tablet} {
    flex-direction: row;
    height: 100px;
  }

`
export const StyledButton = styled.div`
  width: 100%;
  margin-right: 33px;

  > div {
    height: 40px;
    padding: 15px 20px;

    > a {
      font-size: 12px;
    }
  }

  ${device.tablet} {
    max-width: 150px;

  }
`
export const StyledTextZone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  line-height: 1.5;

  > p {
    font-size: 12px;
    font-weight: 500;
    text-transform: lowercase;
    margin-bottom: 10px;
  }

  ${device.tablet} {
    > p {
      margin-bottom: 0;
    }
  }

`
export const StyledAccepted = styled.div`
  font-size: 12px;
  opacity: 0.8;
  margin-right: 10px;
`
export const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  ${device.tablet} {
    margin-bottom: 0;

  }
`
