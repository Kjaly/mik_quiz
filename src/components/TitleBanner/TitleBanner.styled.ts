import styled from "styled-components";

export const StyledTitleBanner = styled.div`
  background-color:${({theme})=>theme.color.darkwhite};
  min-height: 140px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 32px;
`