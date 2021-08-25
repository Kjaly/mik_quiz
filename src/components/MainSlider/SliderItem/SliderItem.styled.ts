import styled from "styled-components";

export const StyledSliderItem = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  text-align: left;
  width: 100%;

`
export const StyledSliderItemTitle = styled.div`
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 20px;
  position: relative;
  
  &:after {
    position: absolute;
    content: '';
    height:2px ;
    width: 46px;
    bottom: 0;
    left:-30px ;
    background: ${({theme}) => theme.color.yellow};
  }

`
export const StyledSliderItemDescription = styled.div`
  margin-bottom: 40px;
`
export const StyledButton = styled.div`
  max-width: 180px ;
`
export const StyledSliderText = styled.div`
  max-width: 640px;
`