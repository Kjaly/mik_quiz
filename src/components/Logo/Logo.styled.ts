import styled from "styled-components"

export const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const StyledTitle = styled.p`
  font-weight: 700;
  font-size: 25px;
  color: ${({ theme }) => theme.color.blue};
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;`

export const StyledSubtitle = styled(StyledTitle)`
  font-size: 11px;
  text-transform: lowercase;
`
