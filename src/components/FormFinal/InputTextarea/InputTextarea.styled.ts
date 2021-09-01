import styled from "styled-components";

export const StyledTextareaContainer = styled.div`
  width: 100%;`
export const StyledTextarea = styled.textarea<any>`
  width: 100%;
  max-height: 80px;
  height: auto;
  margin-bottom: 20px;
  padding: 15px 30px;
  font-size: 15px;
  color: #000;
  border: none;
  background: ${({theme}) => theme.color.darkwhite};
  position: relative;
  resize: none;
  
  :after {
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
