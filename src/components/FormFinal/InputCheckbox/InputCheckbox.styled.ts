import styled from "styled-components";

export const StyledInputContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const StyledBox = styled.div`
  width: 27px;
  height: 27px;
  background-color:${({theme}) => theme.color.darkwhite};
  margin-right: 10px;

`
export const StyledInput = styled.input`
  //position: absolute;
  //z-index: -1;
  //opacity: 0;
  
  :checked(StyledBox) {
    background-color:red;
  }

`
