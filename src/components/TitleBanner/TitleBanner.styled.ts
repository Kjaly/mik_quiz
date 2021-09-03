import styled from "styled-components";

export const StyledTitleBanner = styled.div`
  //background-color:${({theme})=>theme.color.darkwhite};
  background: linear-gradient(90deg, ${({theme}) => theme.color.blue} 90%, rgba(0, 0, 0, 0) 50%);;

  min-height: 180px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 700;
  font-size: 32px;
`