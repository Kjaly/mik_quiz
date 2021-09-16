import styled from 'styled-components';
import { device } from '../../theme/devices';

export const StyledNav = styled.div<{ mobileHidden?: boolean, isFooter?: boolean }>`
  display: ${({mobileHidden}) => mobileHidden ? 'none' : 'flex'};
  width: 100%;
  justify-content: space-between;
  align-items: center;

  flex-direction: ${({isFooter}) => isFooter ? 'column' : 'row'};
  max-width: 300px;

  ${device.tabletL} {
    display: flex;
  }
`
export const StyledNavMobile = styled.div<{ isOpen?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 4;
  transform: translateY(${({isOpen}) => isOpen ? '0' : '-100%'});
  transition: .2s ease-in-out;
  padding: 30px;


  ${device.tabletL} {
    display: none;
  }
`

export const StyledNavTitle = styled.span`
  display: block;
  width: 100%;
  color: ${({theme}) => theme.color.blue};
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`

export const StyledNavMobileAuth = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1 0 auto;
`
