import styled from "styled-components";
import { IButtonProps } from "./Button";


export const StyledButton = styled.div<Partial<IButtonProps>>`
  display: flex;
  flex-direction: ${({reversed}) => reversed ? 'row-reverse' : 'row'};
  align-items: center;
  padding: 15px 30px;
  color: ${({color}) => color ? color : '#fff'};
  height: 55px;
  cursor: pointer;
  transition: all .2s ease-in;
  background: ${({background}) => background};

  :hover {
    filter: brightness(0.9);
  }
`

export const StyledIcon = styled.div<Partial<IButtonProps>>`
  margin: ${({reversed}) => reversed ? '0 0 0 10px' : '0 10px 0 0'};
  height: 24px;
  width: 24px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    height: 12px;
    width: 12px;
  }
`
export const StyledTitle = styled.a`
  font-weight: 700;
  font-size: 15px;`
