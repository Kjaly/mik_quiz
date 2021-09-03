import styled from "styled-components";

export const StyledPublications = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 100px;

`
export const StyledFilesGrid = styled.div<{ isEmpty: boolean }>`
  width: 100%;
  height: auto;
  margin-top: 100px;
  display: grid;
  grid-template-columns: ${({isEmpty}) => !isEmpty && 'repeat(4, 1fr)'};
  grid-auto-rows: 180px;
  grid-gap: 30px;

`
export const StyledPreviewBlock = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
`

