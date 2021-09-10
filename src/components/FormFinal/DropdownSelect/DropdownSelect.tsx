import React, { useState } from 'react';
import {
  StyledArrow,
  StyledDropdown,
  StyledDropdownSelected,
  StyledOption,
  StyledSelect,
} from './DropdownSelect.styled';
import { IconArrowDown } from '../../../Icons';

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

  return (
    <StyledDropdown tabIndex="0" disabled={disabled || false} isOpen={isOpen} onClick={handleOpen} onBlur={() => {
      setIsOpen(false)
    }}>
      <StyledDropdownSelected isOpen={isOpen}>
        <p>{option || placeholder}</p>
        <StyledArrow>
          <IconArrowDown/>
        </StyledArrow>
      </StyledDropdownSelected>
      <StyledSelect isOpen={isOpen}>
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
