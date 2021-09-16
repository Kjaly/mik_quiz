import styled from 'styled-components';
import { device } from '../../theme/devices';

export const StyledFooterBackground = styled.div`
  width: 100%;
  background: ${({theme}) => theme.color.blue};
`
export const StyledFooterWrapper = styled.div`
  width: 100%;
  padding: 70px 0;
`
export const StyledDescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  ${device.tablet} {
    flex-direction: row;

  }
`
export const StyledFooterNav = styled.div`
  padding-bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  ${device.tablet} {
    padding-bottom: 50px;
    flex-direction: row;
  }
`
export const StyledLogo = styled.div`
  flex-shrink: 0;
`
export const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 1 auto;


  ${device.tablet} {
    flex: 0 1 300px;
    padding: 0 20px;

    > div {
      flex-direction: row;
      align-items: center;
    }

    > div > div:not(:last-child)::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      opacity: 1;
      background: #FFB801;
      transition: all .2s ease-in;
    }
  }
`

export const StyledAuthListDesktop = styled.div`

  display: none;

  ${device.tabletL} {
    display: flex;
    flex: .5;
    justify-content: flex-end;
    align-items: center;

    > div:first-child {
      margin-right: 20px;
    }

  }
`
export const StyledAuthListMobile = styled(StyledAuthListDesktop)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;


  ${device.tablet} {
    flex-basis: 50%;
    justify-content: flex-end;

    > div {
      &:first-child {
        margin-right: 20px;
      }
    }
  }

  ${device.tabletL} {
    display: none;
  }
`

export const StyledFooterDescription = styled.div`
  color: #fff;
  font-size: 12px;
  line-height: 1.5;
  text-align: justify;
  flex-basis: 100%;

  p {
    opacity: .4;
    &:first-child {
      opacity: .8;
      margin-bottom: 10px;
    }
    > span {
      text-decoration: underline;
      cursor: pointer;
    }
    
  }
  

`
