import React, { useState } from 'react';
import {
  StyledDropdown,
  StyledSelect,
  StyledOption,
  StyledDropdownSelected,
} from './DropdownSelect.styled';

interface IDropdownSelect {
  optionsList: Array<string>;
  setOption: (option: string) => void;
  option: string;
  name: string;
}

export const DropdownSelect: React.FC<IDropdownSelect> = (props) => {
  const {setOption, option, optionsList, name} = props

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (item: string) => {
    setOption(item)
  }

  return (
    <StyledDropdown isOpen={isOpen} onClick={handleOpen}>
      <StyledDropdownSelected isOpen={isOpen}>
        {option}
      </StyledDropdownSelected>
      <StyledSelect>
        {optionsList.map((item, key) => {
          return (
            <StyledOption disabled={option===item} onClick={() => handleSelect(item)} key={key} value={item}>
              {item}
            </StyledOption>
          )
        })}
      </StyledSelect>
    </StyledDropdown>
  );
};
