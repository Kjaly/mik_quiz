import styled from "styled-components";

export const StyledPartnersWrapper = styled.div`
  width: 100%;
  margin-bottom: 100px;
`
export const StyledPartnersSection = styled.div`
  display: flex;

  > p {
    height: 100%;
    margin-right: 60px;
  }
`

export const PartnerGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px;
  grid-auto-flow: row dense;
  justify-content: space-between;
  margin-bottom: 30px`