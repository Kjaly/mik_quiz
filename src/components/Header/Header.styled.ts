import styled from 'styled-components';
import { device } from '../../theme/devices';

export const StyledHeaderWrapper = styled.div`
  padding: 25px 0;
  width: 100%;
  height: 110px;
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
`
export const StyledAuthList = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${device.tablet} {
    > div:not(:last-child) {
      margin-right: 20px;
    }
  }

  ${device.tabletL} {
    > div:not(:last-child) {
      margin-right: 0;
    }
  }

`
export const AuthWrapper = styled.div`
  display: none;

  ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div:not(:last-child) {
      margin-right: 20px;
    }
  }

`

export const StyledBurgerMenu = styled.div<{ isOpen: boolean }>`
  height: 54px;
  width: 54px;
  background-color: ${({theme}) => theme.color.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 4;

  ${device.tabletL} {
    display: none;

  }
`


export const StyledBurger = styled.div<{ isOpen?: boolean }>`
  height: ${({isOpen}) => isOpen ? '100%' : '24px'};
  width: ${({isOpen}) => isOpen ? '100%' : '24px'};
  border-radius: ${({isOpen}) => isOpen ? 'none' : '50%'};
  background-color: #fff;
  position: relative;
  transition: .2s ease-in-out;
`

export const StyledBurgerLine = styled.span<{ isOpen?: boolean }>`
  background: ${({theme, isOpen}) => isOpen ? theme.color.lightgray : theme.color.blue};
  position: absolute;
  height: 2px;
  width: ${({isOpen}) => isOpen ? '22px' : '10px'};
  opacity: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 50%);
  transition: .25s ease-in-out;

  :nth-child(1) {
    top: ${({isOpen}) => isOpen ? '27px' : '5px'};
    transform: ${({isOpen}) => isOpen ? 'rotate(135deg)' : 'rotate(0) translate(-50%, 50%)'};
    left: ${({isOpen}) => isOpen ? '25%' : '50%'}
  }

  :nth-child(2) {
    top: ${({isOpen}) => isOpen ? '27px' : '10px'};
    transform: ${({isOpen}) => isOpen ? 'translate(40px)' : 'translate(-50%, 50%)'};
    opacity: ${({isOpen}) => isOpen ? '0' : '1'};
  }

  :nth-child(3) {
    top: ${({isOpen}) => isOpen ? '27px' : '15px'};
    transform: ${({isOpen}) => isOpen ? 'rotate(-135deg)' : 'rotate(0) translate(-50%, 50%)'};
    left: ${({isOpen}) => isOpen ? '25%' : '50%'}

  }

`

export const StyledAuthDropDown = styled.div<{ authIsOpen?: boolean }>`
  min-width: 190px;

  > div:first-child {
    > div {
      transition: all .2s ease-in-out;
      transform: rotate(${({authIsOpen}) => authIsOpen ? '-90deg' : '90deg'});
    }
  }

  position: relative;
`

export const StyledAuthDropDownList = styled.div<{ authIsOpen?: boolean }>`
  position: absolute;
  top: 54px;
  z-index: 3;
  width: 100%;
  max-height: ${({authIsOpen}) => authIsOpen ? '180px' : '0'};
  transition: all .2s ease-in-out;
  overflow: hidden;

  > a {
    color: ${({theme}) => theme.color.blue};
    text-decoration: none;
  }
`
export const StyledAuthDropDownItem = styled.div`
  background: ${({theme}) => theme.color.darkwhite};
  padding: 15px 30px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :last-child {
    margin-bottom: 0;
    padding: 15px 30px;
  }

  :hover {
    filter: brightness(0.9);
  }


`
