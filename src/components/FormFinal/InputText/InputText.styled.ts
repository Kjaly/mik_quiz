import styled from "styled-components";

export const StyledInputContainer = styled.div`
  width: 100%;
  position: relative;
`
export const StyledInput = styled.input<{ view: string } & any>`
  width: 100%;
  height: 54px;
  padding: 15px 30px;
  font-size: 15px;
  color: #000;
  border: none;
  background: ${({theme}) => theme.color.darkwhite};
  position: relative;
  border-bottom: 0px solid ${({theme}) => theme.color.blue};
  transition: all .2s ease-in-out;

  :focus {
    border-bottom: 1px solid ${({theme}) => theme.color.blue};

  }

  ::placeholder {
    color: #000;
    font-size: 15px;
  }

  :focus {
    outline: none;
  }

  :focus {
    &::after {
    }
  }


`
