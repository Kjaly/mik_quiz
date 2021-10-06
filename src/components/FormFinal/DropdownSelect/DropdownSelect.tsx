import React, { useState } from 'react';
import {
  StyledArrow,
  StyledDropdown,
  StyledDropdownSelected,
  StyledOption,
  StyledSelect,
} from './DropdownSelect.styled';
import { IconArrowDown } from '../../../Icons';
import { TCategory } from "../../../store/publications/types";

interface IDropdownSelect {
  optionsList: Array<TCategory | any> ;
  setOption: (option: TCategory) => void;
  option?: TCategory | any;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  background?: string;
}

export const DropdownSelect: React.FC<IDropdownSelect> = (props) => {
  const {setOption, option, optionsList, placeholder, disabled, background} = props

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  const handleSelect = (item: TCategory) => {
    setOption(item)
  }

  return (
    <StyledDropdown tabIndex="0" disabled={disabled || false} isOpen={isOpen} onClick={handleOpen} onBlur={() => {
      setIsOpen(false)
    }}>
      <StyledDropdownSelected background={background} isOpen={isOpen}>
        <p>{option?.name || placeholder}</p>
        <StyledArrow>
          <IconArrowDown/>
        </StyledArrow>
      </StyledDropdownSelected>
      <StyledSelect isOpen={isOpen}>
        {optionsList.map((item) => {
          return (
            <StyledOption background={background} disabled={option?.id === item.id} onClick={() => handleSelect(item)} key={item.id}
                          value={item}>
              {item.name}
            </StyledOption>
          )
        })}
      </StyledSelect>
    </StyledDropdown>
  );
};
