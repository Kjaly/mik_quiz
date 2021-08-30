import styled from "styled-components";

export const StyledFinalistSection = styled.div`
  width: 100%;
  background: linear-gradient(90deg, ${({theme}) => theme.color.darkwhite} 90%, rgba(0, 0, 0, 0) 50%);
  padding: 75px 0 100px;
  margin-bottom: 85px;
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
`