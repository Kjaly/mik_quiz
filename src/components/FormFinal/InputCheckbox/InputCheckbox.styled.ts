import styled from "styled-components";

export const StyledInputContainer = styled.label`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  position: relative;
`
export const StyledLabel = styled.p<{ checked?: boolean }>`
  opacity: ${({checked}) => checked ? 1 : 0.8};
  color: ${({theme}) => theme.color.darkgray};
  transition: all 0.2s ease-in-out;
`
export const StyledBox = styled.div<{ checked?: boolean }>`
  width: 27px;
  height: 27px;
  background-color: ${({theme}) => theme.color.darkwhite};
  margin-right: 10px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 10px;
    height: 10px;
    transition: all 0.2s ease-in-out;
    transform: scale(${({checked}) => checked ? 1 : 0})
  }

`
export const StyledInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  
`
