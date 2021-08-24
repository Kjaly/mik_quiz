import styled from "styled-components";

export const StyledFooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 1520px;
  width: 100%;
  height: 328px;
  background: ${({theme}) => theme.color.blue};
  z-index: 0;
`
export const StyledFooterWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 95px 0;
`
export const StyledFooterNav = styled.div`
  padding-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: .5;

  p, a {
    color: #fff;

  }

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

export const StyledFooterDescription = styled.p`
  color: #fff;
  font-size: 12px;
  opacity: .5;
`