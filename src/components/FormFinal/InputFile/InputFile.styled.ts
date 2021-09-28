import styled from 'styled-components';

export const StyledInputContainer = styled.div<any>`
  width: 100%;
  position: relative;
  background: ${({theme}) => theme.color.darkwhite};
  border: ${({error, theme}) => error ? `1px solid ${theme.color.red} ` : 'none'};
  padding: 15px 30px;
  transition: all .2s ease-in-out;
  cursor: pointer;

  :hover {
    filter: brightness(0.9);
  }

`
export const StyledInput = styled.input<{ view: string } & any>`
  width: 100%;
  height: 54px;
  font-size: 15px;
  color: #000;
  position: relative;
  display: none;

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

export const StyledText = styled.div<{ value?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  > p {
    flex-shrink: 0;
    color: ${({theme, value}) => value && theme.color.blue}
  }

  > svg {
    height: 24px;
    width: 24px;
  }
`

export const StyledLoader = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`
