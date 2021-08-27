import styled from "styled-components";

export const StyledModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background:rgba(44, 57, 99, .9); ;
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