import styled from "styled-components";
import { IDecorativeLinesProps } from "./DecorativeLines";

export const StyledDecorativeLines = styled.div<Partial<IDecorativeLinesProps>>`
  width: 500px;
  height: auto;
  > div {
    background: ${({theme, color}) => color ? color : theme.color.darkwhite};
    opacity: ${({opacity}) => opacity && opacity};
  }
`
export const StyledLine = styled.div`
  height: 1px;
  margin-bottom: 30px;

  :first-child {
    width: 60%;
  }

  :nth-child(2) {
    width: 100%;
  }

  :last-child {
    width: 75%;
  }
`

