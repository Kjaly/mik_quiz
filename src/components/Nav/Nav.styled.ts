import styled from 'styled-components';
import { device } from '../../theme/devices';

export const StyledNav = styled.div<{ mobileHidden?: boolean }>`
  display: none;

  ${device.tabletL} {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    max-width: 300px;
  }
`
export const StyledNavMobile = styled.div<{ isOpen?: boolean }>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 3;
  transform: translateY(${({isOpen}) => isOpen ? '0' : '-100%'});
  transition: .2s ease-in-out;
  padding: 30px;


`

export const StyledNavTitle = styled.span`
  display: block;
  width: 100%;
  color:${({theme}) => theme.color.blue};
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
`
