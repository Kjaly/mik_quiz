import styled from "styled-components";
import { device } from "../../../theme/devices";

export const StyledFinalistModal = styled.div`
  background-color: #fff;
  padding: 30px;
  max-width: 560px;
  align-items: flex-start;
  width: 100%;

  > p {
    margin-right: 1em;
    width: 100%;
    white-space: pre-wrap;
  }

`

export const StyledCloseIcon = styled.div`
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  > svg {
    width: 20px;

    > path {
      fill: ${({theme}) => theme.color.black};
      opacity: 0.2;
    }
  }

`
export const StyledFinalistConfirmTitle = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${({theme}) => theme.color.blue};
  margin-bottom: 20px;

  > p {
    margin-right: 2rem;
    font-weight: 700;
  }

  ${device.tablet} {
    font-size: 30px;
  }
`

export const StyledTextBlock = styled.div`
  margin-bottom: 30px;
`
export const StyledImgBlock = styled.div`
  margin-bottom: 30px;

  > p {
    margin-bottom: 20px;
  }
`

export const StyledImgView = styled.div`
  display: flex;
  flex-direction: column;
  height: 360px;
  overflow: hidden;

  ${device.tablet} {
    flex-direction: row-reverse;
    height: 110px;

  }
`
export const StyledImgText = styled.div`
  font-size: 13px;
  background-color: ${({theme}) => theme.color.lightgray2};
  padding: 20px;


  ${device.tablet} {
    font-size: 15px;
    padding: 20px 30px;
    flex: 0.7;
  }
`

export const StyledImgWrapper = styled.div`
  height: 100%;
  display: block;
  position: relative;
  overflow: hidden;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({theme}) => theme.color.yellow};
  }

  ${device.tablet} {
    flex: 0.3;

  }
`
export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const StyledButton = styled.div`
  max-width: 100%;

  ${device.tablet} {
    max-width: 255px;
  }
`