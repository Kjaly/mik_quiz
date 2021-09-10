import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  padding: 25px 0;
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: space-between;
`

export const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: .5;
  
  > div {
    flex-shrink: 0;
  }
  
`
export const StyledAuthList = styled.div`
  display: flex;
  flex: .5;
  justify-content: flex-end;
  align-items: center;
  > div:first-child {
    margin-right: 20px;
  }
`