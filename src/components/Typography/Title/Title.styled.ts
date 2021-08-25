import styled from "styled-components";
import { ITitleProps } from "./Title";


export const StyledTitle = styled.p<Partial<ITitleProps>>`
  font-weight: 700;
  font-size: 45px;
  color: ${({color}) => color ? color : '#fff'};
  margin: ${({customMargin}) => customMargin ? customMargin : '0'};`