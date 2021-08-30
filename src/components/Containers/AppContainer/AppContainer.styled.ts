import styled from "styled-components";

export const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  > div {
    &:first-child {
      flex: 0 0 110px;
    }

    &:nth-child(2) {
      flex: 1 0 auto;
    }

    &:last-child {
      flex: 0 0 auto;
    }
  }
`