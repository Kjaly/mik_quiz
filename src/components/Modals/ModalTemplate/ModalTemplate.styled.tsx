import styled from "styled-components";

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: rgba(44, 57, 99, .9);
`

export const ModalCloseButton = styled.div`
  position: absolute;
  cursor: pointer;
  right: 50px;
  top: 50px;
  height: 18px;
  width: 18px;

  > svg > path {
    fill: #fff;
  }
`