import styled from "styled-components";

export const StyledDropdown = styled.div <{ isOpen: boolean, disabled: boolean }>`
  width: 100%;
  overflow: hidden;
  max-height: ${({isOpen}) => isOpen ? '800px' : '45px'};
  height: 100%;
  transition: all .2s ease-in-out;
  cursor: ${({disabled}) => disabled ? 'initial' : 'pointer'};
  margin-bottom: 20px;
  opacity: ${({disabled}) => disabled && 0.7};

`
export const StyledDropdownSelected = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 45px;
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
export const StyledSelect = styled.ul`
  width: 100%;
  color: ${({theme}) => theme.color.darkgray};
  background: ${({theme}) => theme.color.darkwhite};
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';

  ::after, :before {
    position: absolute;
    height: 15px;
    width: 15px;
  }

`
export const StyledOption = styled.li<any>`
  list-style: none;
  width: 100%;
  height: 45px;
  padding: 10px 30px;
  transition: all 0.2s ease-in-out;
  opacity: ${({disabled}) => disabled && 0.5};: hover {
  background-color: ${({disabled, theme}) => !disabled && theme.color.blue};
  color: ${({disabled}) => !disabled && '#fff'};
}

`

export const StyledArrow = styled.div`
  width: 15px;
`
