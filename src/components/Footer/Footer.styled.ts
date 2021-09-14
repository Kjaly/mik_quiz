import styled from 'styled-components';
import { device } from '../../theme/devices';

export const StyledFooterBackground = styled.div`
  width: 100%;
  background: ${({theme}) => theme.color.blue};
`
export const StyledFooterWrapper = styled.div`
  width: 100%;
  padding: 95px 0;
`
export const StyledFooterNav = styled.div`
  padding-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const StyledLogo = styled.div`
  flex-shrink: 0;
`
export const StyledNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 1 300px;
  padding: 0 20px;

  p, a {
    color: #fff;

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
  ${device.tabletL} {
    display: none;
  }
`

export const StyledFooterDescription = styled.p`
  color: #fff;
  font-size: 12px;
  line-height: 1.5;
  opacity: .4;
`
