import styled from "styled-components";

export const StyledFooterBackground = styled.div`
  width: 100%;
  background: ${({theme}) => theme.color.blue};
`
export const StyledFooterWrapper = styled.div`
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