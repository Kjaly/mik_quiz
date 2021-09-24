import styled from "styled-components";

export const StyledModalWrapper = styled.div<{ isShown?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: rgba(44, 57, 99, .9);
  padding: 20px;
  opacity: ${({isShown}) => isShown ? 1 : 0};
  transition: all .2s ease-in-out;

  > div {
    border-radius: 4px;
    transition: all .2s ease-in-out;
    opacity: ${({isShown}) => isShown ? 1 : 0};
    transform: translateY(${({isShown}) => isShown ? '0' : '200px'});
    max-height:80%;
    overflow: auto;
  }
`
