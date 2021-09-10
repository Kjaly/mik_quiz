import styled from "styled-components";

export const StyledFinalistSection = styled.div`
  width: 100%;
  background: linear-gradient(90deg, ${({theme}) => theme.color.darkwhite} 90%, rgba(0, 0, 0, 0) 50%);
  padding: 100px 0;
  position: relative;
`
export const StyledTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`

export const StyledDecorativeWrapper = styled.div`
  position: absolute;
  content: '';
  right: 0;
  z-index: 0;
  transform: rotate(45deg) scale(1, -1) translate(-185px, 120px);
  
  :first-child {
    left: 100px;
    right: initial;
    bottom: 400px;
    transform: rotate(-45deg) scale(-1, -1) translate(-115px, 50px);

  }
`