import styled from "styled-components";
import { device } from '../../theme/devices';

export const StyledGallery = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 182px;
  grid-gap: 30px;
  grid-auto-flow: row dense;
  justify-content: space-between;
  margin-bottom: 30px;
  
  ${device.tablet}{
    grid-template-columns: repeat(2, 300px);
    grid-auto-rows: 230px;
  }
  ${device.tabletL}{
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 220px;
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

export const StyledEmptyBlock = styled.div`
  width: 100%;
  color:${({theme})=>theme.color.blue};
  font-size: 20px;
  opacity: 0.6;
  text-align: center;
  white-space: nowrap;
`
