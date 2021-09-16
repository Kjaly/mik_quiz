import styled from 'styled-components';
import { device } from "../../theme/devices";

export const StyledFileViewer = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 15px;
  grid-template-columns: repeat(2, minmax(130px, 150px));
  grid-auto-rows: 100px;
  justify-content: space-between;

  ${device.tablet} {
    grid-template-columns: repeat(auto-fill, 100px);
    grid-auto-rows: 65px;

  }

`
export const StyledFileItem = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({theme}) => theme.color.darkwhite};
  position: relative;
  border-radius: 5px;
  transition: all .2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`
export const StyledFileImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

`
export const StyledFileRemove = styled.div<any>`
  width: 20px;
  height: 20px;
  background: ${({theme}) => theme.color.blue};
  border-radius: 50%;
  position: absolute;
  right: -5px;
  top: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background: ${({theme}) => theme.color.yellow};
  }

  > svg {
    width: 10px;

    > path {
      fill: #fff;
    }
  }
`
