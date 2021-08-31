import styled from "styled-components";

export const StyledDropdown = styled.div <{ isOpen: boolean }>`
  width: 100%;
  overflow: hidden;
  max-height: ${({isOpen}) => isOpen ? '800px' : '45px'};
  border: 1px solid ${({theme}) => theme.color.darkgray};
  transition: all .2s ease-in-out;
  cursor: pointer;
  margin-bottom: 20px;

`
export const StyledDropdownSelected = styled.div<{ isOpen: boolean }>`
  width: 100%;
  overflow: hidden;
  padding: 10px 20px;
  position: relative;


  :after {
    position: absolute;
    content: '';
    height: 1px;
    width: 100%;
    left: 0;
    transition: all .2s ease-in-out;
    background-color: ${({theme}) => theme.color.darkgray};
    bottom: 0;
    transform: ${({isOpen}) => isOpen ? 'scale(1)' : 'scale(0)'};
  }

`
export const StyledSelect = styled.ul`
  width: 100%;
  color: ${({theme}) => theme.color.darkgray};
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';

  :hover {
    filter: brightness(0.9);
  }

  :after, :before {
    position: absolute;
    height: 15px;
    width: 15px;
  }

`
export const StyledOption = styled.li<any>`
  list-style: none;
  width: 100%;
  height: 45px;
  padding: 10px 20px;
  transition: all 0.2s ease-in-out;
  opacity: ${({disabled}) => disabled && 0.5};
  : hover {
    background-color: ${({disabled, theme}) => !disabled && theme.color.blue};
    color: ${({disabled}) => !disabled && '#fff'};
  }

`