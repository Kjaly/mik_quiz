import styled from "styled-components";

export const StyledRegistrationFormModal = styled.div`
  max-width: 560px;
  overflow: auto;
  height: auto;
  width: 100%;
  background-color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column
`

export const StyledTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${({theme}) => theme.color.blue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`
export const StyledCross = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > svg {
    width: 20px;
    height: 20px;

    > path {
      fill: #000;
      opacity: .3;
    }
  }
`

export const StyledForm = styled.div`
  flex: 1 0 auto;
  width: 100%;
  padding-bottom: 30px;

  > div {
    margin-bottom: 20px;
  }
`

export const StyledButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 2em;

  > div {
    flex-basis: 50%;
  }
`
export const StyledLinkBlock = styled.div`
`
export const StyledAuthLink = styled.a`
  width: 100%;
  cursor: pointer;
  display: block;
  color: ${({theme}) => theme.color.blue};
  transition: all .2s ease-in-out;

  :hover {
    filter: brightness(0.7)
  }

`