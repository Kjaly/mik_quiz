import styled from "styled-components";

export const StyledPartnersWrapper = styled.div`
  width: 100%;
  padding: 100px 0;
`
export const StyledPartnersSection = styled.div`
  display: flex;

  > p {
    height: 100%;
  }
`

export const PartnerGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px;
  grid-auto-flow: row dense;
  justify-content: space-between;
  margin-bottom: 30px`

export const StyledLeftBlock = styled.div`
  margin-right: 60px;

`
export const StyledPartnersNavigation = styled.div`
  position: relative;
  height: 100%;
  width: 100px;
  > div {
    background-color: ${({theme}) => theme.color.darkwhite};

    .swiper-button-disabled {
      cursor: initial;
      background: ${({theme}) => theme.color.yellow};

      > svg > path {
        fill: #fff;
      }
    }

    > svg {
      height: 24px;
    }
  }
  > :first-child {
    left: 0;
  } 
  > :last-child {
    right: 0;
  }
`