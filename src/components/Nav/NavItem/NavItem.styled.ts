import styled from "styled-components";

export const StyledNavItem = styled.div`
  color: #3D4F87;
  position: relative;
  padding: 10px 0;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #FFB801;
    transition: all .2s ease-in;
    transform: scale(0);
  }
  &:hover:after{
    transform: scale(1);
  }
`
export const StyledNavUrl = styled.a`
`