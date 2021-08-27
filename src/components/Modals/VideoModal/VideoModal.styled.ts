import styled from "styled-components";

export const StyledVideoModal = styled.div`
  height: 560px;
  width: 800px;
  display: flex;
  flex-direction: column;

  > div {
    flex: 1;
    background-color: #dedede;
    border-radius: 8px;
    max-height: 450px;
    margin-bottom: 30px;
    position: relative;
  }

`

export const StyledVideoTitle = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;

`
export const StyledVideoDescription = styled.p`
  color: #fff;
  font-size: 15px;
`

export const StyledCloseIcon = styled.div`
  position: absolute;
  right: -20px;
  top: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #fff;
  height: 40px;
  width: 40px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover{
    transform: scale(1.1);
  }
  > svg {
    width: 24px;
    > path {
      fill:  ${({theme}) => theme.color.yellow};
    }
  }
  
`