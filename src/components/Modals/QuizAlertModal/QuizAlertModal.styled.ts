import styled from "styled-components";
import { device } from "../../../theme/devices";

export const StyledQuizModal = styled.div`
  background-color: #fff;
  padding: 30px;
  max-width: 560px;
  display: flex;
  align-items: flex-start;
  width: 100%;

  > p {
    margin-right: 1em;
    width: 100%;
    white-space: pre-wrap;
  }

  ${device.tablet} {
    font-size: 20px;
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

export const StyledCustomText = styled.div`
  > p:first-child {
    margin-bottom: 20px;
  }
`
