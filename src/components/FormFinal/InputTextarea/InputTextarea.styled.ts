import styled from "styled-components";

export const StyledTextareaContainer = styled.div`
  position: relative;
  width: 100%;`
export const StyledTextarea = styled.textarea<any>`
  width: 100%;
  height: 100%;
  padding: 15px 30px;
  font-size: 15px;
  color: #000;
  border: ${({error, theme}) => error ? `1px solid ${theme.color.red} ` : '1px solid transparent'};
  background: ${({theme}) => theme.color.darkwhite};
  position: relative;
  resize: none;

  ::after {
    position: absolute;
    content: '';
    height: 1px;
    width: 100%;
    left: 0;
    transition: all .2s ease-in-out;
    background-color: ${({theme}) => theme.color.blue};
    bottom: 0;
    transform: scale(0);

    :focus {
      transform: scale(1);

    }
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

export const StyledTextCounter = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-weight: 500;

  color: ${({theme}) => theme.color.black};
  opacity: 0.6;
`
