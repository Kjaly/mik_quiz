import styled from "styled-components";

export const StyledPartnerCard = styled.div`
  max-width: 250px;
  height: 150px;
  background-color: ${({theme}) => theme.color.darkwhite};
  padding: 30px;

  > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`
