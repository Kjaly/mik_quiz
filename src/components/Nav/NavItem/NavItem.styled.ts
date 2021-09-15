import styled from 'styled-components';
import { INavItemProps } from './NavItem';
import { device } from '../../../theme/devices';

export const StyledNavItem = styled.div<Partial<INavItemProps>>`
  color: ${({isActive, theme, isFooter}) => isFooter ? isActive ? theme.color.yellow : '#fff' : theme.color.blue};
  position: relative;
  padding: 10px 0;
  cursor: pointer;
  width: ${({isFooter}) => isFooter && '100%'};


  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({isFooter}) => isFooter ? '#fff' : 'FFB801'};
    opacity: ${({isFooter}) => isFooter && '0.1'};
    transition: all .2s ease-in;
    transform: ${({isActive, isFooter}) => `scale(${isActive || isFooter ? 1 : 0})`};
  }

  &:last-child::after {
    display: ${({isFooter}) => isFooter && 'none'};
  }

  &:hover::after {
    transform: scale(1);
  }
  
  
  ${device.tablet}{
    width: auto;
    color: ${({theme, isFooter}) => isFooter ? '#fff' : theme.color.blue};

    &::after {
      background: ${({theme}) => theme.color.yellow};
      transform: ${({isActive}) => `scale(${isActive ? 1 : 0})`};
      opacity: 1;
    }
    &:last-child::after {
      display: block;
    }
    
  }
`
export const StyledNavUrl = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 15px;
`
