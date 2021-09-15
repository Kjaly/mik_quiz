import styled from "styled-components";
import { device } from '../../theme/devices';

export const StyledGallery = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 30px;
  grid-auto-flow: row dense;
  justify-content: space-between;
  margin-bottom: 30px;
  
  ${device.tablet}{
    grid-template-columns: repeat(2, 300px);
    grid-template-rows: repeat(3, 1fr);
  }
  ${device.tabletL}{
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`

export const StyledButton = styled.div`
  width: 100%;
  margin-left: auto;
  
  ${device.tablet}{
    width: 250px;

  }
`
export const StyledGalleryWrapper = styled.div`
  display:flex;
  flex-direction:column;
`
