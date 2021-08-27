import styled from "styled-components";

export const StyledExpertSection = styled.div`
  width: 100%;
  background: linear-gradient(-90deg, ${({theme}) => theme.color.darkwhite} 90%, rgba(0,0,0,0) 50%); ;
  height: 756px;
  position: relative;
  top: -150px;
  z-index: 0;
  padding-top: calc(150px + 75px);
`