import React, { useState } from 'react';
import {
  StyledDropdown,
  StyledSelect,
  StyledOption,
  StyledDropdownSelected,
  StyledArrow,
} from './DropdownSelect.styled';
import { IconArrowDown, IconCross } from "../../../Icons";

interface IDropdownSelect {
  optionsList: Array<string>;
  setOption: (option: string) => void;
  option: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
}

export const DropdownSelect: React.FC<IDropdownSelect> = (props) => {
  const {setOption, option, optionsList, placeholder, disabled} = props

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  const handleSelect = (item: string) => {
    setOption(item)
  }

  console.log(isOpen, placeholder)
  return (
    <StyledDropdown disabled={disabled || false} isOpen={isOpen} onClick={handleOpen}>
      <StyledDropdownSelected isOpen={isOpen}>
        <p>{option || placeholder}</p>
        <StyledArrow>
          <IconArrowDown/>
        </StyledArrow>
      </StyledDropdownSelected>
      <StyledSelect>
        {optionsList.map((item, key) => {
          return (
            <StyledOption disabled={option === item} onClick={() => handleSelect(item)} key={key} value={item}>
              {item}
            </StyledOption>
          )
        })}
      </StyledSelect>
    </StyledDropdown>
  );
};
