import styled from 'styled-components';

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
  border: ${({error, theme}) => error ? `1px solid ${theme.color.red} ` : '1px solid transparent'};
  background: ${({theme}) => theme.color.darkwhite};
  position: relative;
  transition: all .2s ease-in-out;

  :focus {
    border-bottom: 1px solid ${({theme}) => theme.color.blue};
    color: ${({theme}) => theme.color.blue};

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
