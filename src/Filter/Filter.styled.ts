import styled from "styled-components";

export const StyledFilter = styled.div`
  display: flex;
  
`
export const StyledFilterItem = styled.div<{ isActive: boolean }>`
  padding: 15px 30px;
  background-color:${({isActive, theme})=> isActive ? theme.color.blue: '#fff'} ;
  color: ${({isActive})=> isActive ? '#fff': '#000'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  :hover{
    filter: brightness(0.9);
  }
  :not(:last-child) {
    position: relative;
    
    &:after {
      opacity:${({isActive})=> isActive ? '0': '1'};
      position: absolute;
      content: '';
      height: 30px;
      width: 1px;
      right: 0;
      background: ${({theme}) => theme.color.darkwhite}
    }
  }
`


