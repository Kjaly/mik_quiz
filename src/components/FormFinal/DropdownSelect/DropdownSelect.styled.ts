import styled from "styled-components";

export const StyledDropdown = styled.div <{ isOpen: boolean, disabled: boolean } | any>`
  width: 100%;
  height: 54px;
  transition: all .2s ease-in-out;
  cursor: ${({disabled}) => disabled ? 'initial' : 'pointer'};
  opacity: ${({disabled}) => disabled && 0.7};
  position: relative;

`
export const StyledDropdownSelected = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 10px 30px;
  position: relative;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({theme}) => theme.color.darkwhite};


  ::after {
    position: absolute;
    content: '';
    height: 1px;
    width: 100%;
    left: 0;
    transition: all .2s ease-in-out;
    background-color: ${({theme}) => theme.color.blue};
    bottom: 0;
    transform: ${({isOpen}) => isOpen ? 'scale(1)' : 'scale(0)'};
  }

  > div {
    transition: all .2s ease-in-out;
    transform: rotate(${({isOpen}) => isOpen ? '180deg' : 0});
  }

`
export const StyledOption = styled.li<any>`
  list-style: none;
  width: 100%;
  padding: 10px 30px;
  transition: all 0.2s ease-in-out;
  height: 54px;
  opacity: ${({disabled}) => disabled && 0.5};: hover {
  background-color: ${({disabled, theme}) => !disabled && theme.color.blue};
  color: ${({disabled}) => !disabled && '#fff'};
}

`
export const StyledSelect = styled.ul<{ isOpen: boolean }>`
  width: 100%;
  color: ${({theme}) => theme.color.darkgray};
  background: ${({theme}) => theme.color.darkwhite};
  position: absolute;
  z-index: 1;
  top: 54px;
  max-height: ${({isOpen}) => isOpen ? '300px': 0};
  overflow: auto;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
  transition: all .2s ease-in-out;

`

export const StyledArrow = styled.div`
  width: 15px;
`
