import styled from "styled-components";

export const StyledInfoBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin: -160px 0 100px;
`

export const StyledInfoImg = styled.div`
  width: 415px;
  height: 392px;
  background-color: ${({theme}) => theme.color.blue};
  flex-shrink: 0;
  margin-right: 60px;
  position: relative;
  
  :after{
    position: absolute;
    content: "";
    bottom: 0;
    height:3px;
    width: 100%;
    background-color: ${({theme}) => theme.color.yellow};


  }
`
export const StyledInfoText = styled.div``
export const StyledInfoDescription = styled.p`
  font-size: 15px;
`

export const StyledInfoWrapper = styled.div`
width: 100%;
margin-bottom:100px ;
`

export const StyledJoinCard = styled.div`
  width: 100%;
  display: flex;
  color: #fff;
  background-color: ${({theme}) => theme.color.blue};
  margin-bottom: 30px;

  :last-child {
    margin-bottom: 0;
  }
`
export const StyledJoinCardLeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  background-color: ${({theme}) => theme.color.blue};
  padding: 50px;
  width: 100%;
`
export const StyledJoinCardText = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`
export const StyledJoinCardDescription = styled.p`
  font-size: 15px;
  margin-bottom: 30px;
`

export const StyledJoinCardImg = styled.div`
  background-color: ${({theme}) => theme.color.yellow};
  width: 350px;
  height: auto;
  flex-shrink: 0;
`

export const StyledDecorativeWrapper = styled.div`
  position: absolute;
  content:'';
  left: 0;
  z-index: 0;
  transform: rotate(-45deg) scale(-1, -1) translate(-115px, 50px);
`