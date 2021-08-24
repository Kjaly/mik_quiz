import styled from "styled-components";

interface test {
  background?: string
}

export const StyledButton = styled.div<test>`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  color: #fff;
  height: 55px;
  background: ${({background}) => background};
`

export const StyledIcon = styled.div`
  margin-right: 10px;
  height: 24px;
  width: 24px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & svg {
    height: 12px;
    width: 12px;
  }
`
export const StyledTitle = styled.a`
  font-weight: 700;
  font-size: 15px;`
