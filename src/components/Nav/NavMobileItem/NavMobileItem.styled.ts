import styled from "styled-components";
import { INavMobileItemProps } from './NavMobileItem';
import { theme } from '../../../theme';

export const StyledNavMobileItem = styled.div<Partial<INavMobileItemProps>>`
  color: ${({isActive})=>isActive ? theme.color.yellow : theme.color.black};
  position: relative;
  padding: 20px 0;
  cursor: pointer;
  transition: all .2s ease-in;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${({theme})=>theme.color.black};
    opacity: 0.1;
    transition: all .2s ease-in;
  }
  > a {
    text-decoration: none;
    color: unset;
  }
`
