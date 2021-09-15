import styled from 'styled-components';
import { device } from '../../theme/devices';

export const StyledFilter = styled.div<{ isOpen?: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  max-height: ${({isOpen}) => isOpen ? '150px' : '47px'};

  transition: all .2s ease-in-out;

  ${device.tablet} {
    flex-direction: row;
    max-height: 47px;

  }
`
export const StyledFilterArrow = styled.div<{isOpen?:boolean}>`
  display: flex;
  position: absolute;
  height: 16px;
  width: 16px;
  right: 30px;
  top: 10px;
  transform: translateY(50%) rotate(${({isOpen}) => isOpen ? '-90deg' : '90deg'});
  cursor: pointer;
  transition: all .2s ease-in-out;

  > svg > path {
    fill: #fff;
  }

  ${device.tablet} {
    display: none;
  }
`
export const StyledFilterItem = styled.div<{ isActive: boolean }>`
  padding: 15px 30px;
  background-color: ${({isActive, theme}) => isActive ? theme.color.blue : '#fff'};
  color: ${({isActive}) => isActive ? '#fff' : '#000'};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  text-align: left;
  flex-basis: 33%;

  :hover {
    filter: brightness(0.9);
  }

  :not(:last-child) {
    position: relative;

    &::after {
      opacity: ${({isActive}) => isActive ? '0' : '1'};
      position: absolute;
      content: '';
      height: 30px;
      width: 1px;
      right: 0;
      background: ${({theme}) => theme.color.darkwhite}
    }
  }

  ${device.tabletL} {
    justify-content: center;
    flex-basis: inherit;
  }
`


