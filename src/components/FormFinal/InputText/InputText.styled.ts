import styled from "styled-components";

export const StyledInputContainer = styled.div`
width: 100%;`
export const StyledInput = styled.input`
  width: 100%;
  height: 54px;
  margin-bottom: 20px;
  padding: 15px 30px;
  font-size: 15px;
  color: #000;
  border: none;
  background: ${({theme}) => theme.color.darkwhite};
`