import styled from "styled-components";
import { ITitleProps } from "./Title";
import { device } from '../../../theme/devices';


export const StyledTitle = styled.p<Partial<ITitleProps>>`
  font-weight: ${({weight}) => weight ? weight : '700'};
  font-size: 24px;
  color: ${({color}) => color ? color : '#fff'};
  margin: ${({customMargin}) => customMargin ? customMargin : '0'};
  position: relative;
  line-height: 1.5;
  white-space: pre-line;
  &::after {
    position: absolute;
    content: '';
    height:2px ;
    width: 46px;
    top: 26px;
    left:-76px ;
    background: ${({theme}) => theme.color.yellow};
  }

  ${device.tabletL} {
    font-size: ${({size}) => size ? `${size}px` : '45px'};

  }
  
  ${device.desktop} {
    font-size: ${({size}) => size ? `${size}px` : '45px'};

  }
`
