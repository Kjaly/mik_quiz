import styled from "styled-components";

export const StyledExpertCard = styled.div`
  width: 250px;
  height: 320px;
  background-color: #fff;

  > div {
    padding: 20px 30px;
  }
`

export const StyledExpertImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 200px;;`
export const StyledExpertName = styled.p`
  font-size: 18px;
  font-weight: 700;
  position: relative;
  padding-bottom: 10px;

  :after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000;
    opacity: 0.1;
  }
`
export const StyledExpertDescription = styled.p`
  padding-top: 10px;
  font-size: 12px;
  color: #000;
  opacity: 0.5;
`