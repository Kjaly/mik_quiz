import styled from "styled-components";

export const StyledTipError = styled.div<{ isActive?: boolean }>`
  background: ${({theme}) => theme.color.red};
  color: #fff;
  font-size: 10px;
  width: fit-content;
  padding: ${({isActive}) => isActive && '4px 12px'};
  position: absolute;
  top: ${({isActive}) => isActive ? '-10px' : '-30px'};
  left: ${({isActive}) => isActive ? '10%' : '5%'};
  transition: all .2s ease-in-out;


`