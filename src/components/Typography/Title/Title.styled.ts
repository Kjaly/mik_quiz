import styled from "styled-components";
import { ITitleProps } from "./Title";
import { device } from '../../../theme/devices';


export const StyledTitle = styled.div<Partial<ITitleProps>>`
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
    height: 2px;
    width: 46px;
    top: 20px;
    left: -60px;
    background: ${({theme}) => theme.color.yellow};
  }

  ${device.tabletL} {
    font-size: ${({size}) => size ? `${size}px` : '45px'};

    &::after {
      top: 40px;
      left: -76px;
    }
  }

  ${device.desktop} {
    font-size: ${({size}) => size ? `${size}px` : '45px'};

  }
`
