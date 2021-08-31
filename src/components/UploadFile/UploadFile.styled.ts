import styled, { keyframes } from "styled-components";


export const StyledIcon = styled.div`
  width: 110px;
  margin: 0 10px 0 50px;
  transition: all 0.2s ease-in
`

export const StyledPreview = styled.div`
  display: flex;
  align-items: center;

`
export const StyledUploadFile = styled.div`
  display: flex;
  align-items: center;

`

export const StyledButtonWrapper = styled.div`
  height: 110px;
  width: 110px;
  background-color: ${({theme}) => theme.color.darkwhite};
  border: 1px dashed ${({theme}) => theme.color.darkgray};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all .2s ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(0.98);
    box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2) inset;


  }

  > svg {
    height: 40px;
    width: 40px;
  }

  > p {
    margin-top: 6px;
    color: ${({theme}) => theme.color.darkgray};
    font-size: 9px;
    text-align: center;
    opacity: .8;
  }

`


