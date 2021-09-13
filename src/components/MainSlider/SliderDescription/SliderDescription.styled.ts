import styled from "styled-components";

export const StyledSliderDescription = styled.div`
  color: #fff;
  max-width: 400px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction:column;
  margin-top: 60px;
  line-height: 1.5;
  
`
export const StyledSliderTitle = styled.p`
  margin-bottom: 20px;
  width: 100%;
`
export const StyledSliderDescriptionList = styled.div`
  width: 100%;
`
export const StyledSliderDescriptionItem = styled.div`
  margin-bottom: 10px;
  position: relative;
  
  :after {
    position: absolute;
    content:'';
    width: 10px;
    height: 10px;
    left: -20px;
    bottom: 50%;
    transform: translateY(50%);
    background: ${({theme}) => theme.color.yellow};
    border-radius: 50%;
  }
  :last-child {
    margin-bottom: 0;
  }
`