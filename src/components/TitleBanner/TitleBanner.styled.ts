import styled from "styled-components";

export const StyledTitleBanner = styled.div`
  background: linear-gradient(90deg, ${({theme}) => theme.color.blue} 90%, rgba(0, 0, 0, 0) 50%);;
  position: relative;
  min-height: 180px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 700;
  font-size: 32px;
`

export const StyledDecorativeLines = styled.div`
  position: absolute;
  content: '';
  right: 0;
  bottom: -300px;
  z-index: -1;
  transform: rotate(45deg) scale(1, -1) translate(-185px, 120px);
`
