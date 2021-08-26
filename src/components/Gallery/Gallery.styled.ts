import styled from "styled-components";

export const StyledGallery = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 30px;
  grid-auto-flow: row dense;
  justify-content: space-between;
  margin-bottom: 30px
`

export const StyledButton = styled.div`
  width: 250px;
  margin-left: auto;
`
export const StyledGalleryWrapper = styled.div`
  display:flex;
  flex-direction:column;
`
