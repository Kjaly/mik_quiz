import styled from 'styled-components';
import { device } from '../../theme/devices';

export const StyledPartnersWrapper = styled.div`
  width: 100%;

  padding: 30px 0 50px;

  ${device.tablet} {
    padding: 50px 0 80px;

  }

  ${device.desktop} {
    padding: 75px 0 100px;

  }

`
export const StyledPartnersSection = styled.div`
  display: flex;
  flex-direction: column;

  ${device.tabletL} {
    flex-direction: row;
  }

  > p {
    height: 100%;
  }

  .swiper-container {
    width: 100%;
  }

  .swiper-wrapper {
    height: inherit;
  }
`


export const StyledLeftBlock = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  justify-content: space-between;

  ${device.tabletL} {
    max-width: 280px;
    width: inherit;
    display: block;
    margin-bottom: 0;
    margin-right: 60px;
  }

`
export const StyledPartnersNavigation = styled.div`

  position: relative;
  height: 40px;
  width: 90px;

  ${device.tabletL} {
    height: 100%;
  }

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
