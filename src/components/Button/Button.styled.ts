import styled from "styled-components";

interface test {
  background?: string
}

export const StyledButton = styled.div<test>`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  color: #fff;
  background: ${({background}) => background};
`

export const StyledIcon = styled.div`
  margin-right: 10px;
  height: 24px;
  width: 24px;
  background: #fff;
  border-radius: 50%;
`
export const StyledTitle = styled.p`
  font-weight: 700;
  font-size: 15px;`
