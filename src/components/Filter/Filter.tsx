import React, { useState } from 'react';
import { StyledFilter, StyledFilterArrow, StyledFilterItem } from './Filter.styled';
import { theme } from '../../theme';
import { IconArrowRight } from '../../Icons';

interface IFilterValues {
  value: string;
  title: string;
  background?: string;
  color?: string;
}

export const Filter: React.FC = () => {

  const [filter, setFilter] = useState('Все');
  const [isOpen, setIsOpen] = useState(false)
  const filterValues: Array<IFilterValues> = [
    {
      value: 'Все',
      title: 'Все',
      background: theme.color.blue
    },
    {
      value: 'Региональные слеты',
      title: 'Региональные слеты',
    },
    {
      value: 'Межрегиональные слеты',
      title: 'Межрегиональные слеты',
    },
  ]

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <StyledFilter isOpen={isOpen} onClick={handleClick}>
      {filterValues.map((item, key) => (
        <StyledFilterItem
          key={key}
          isActive={filter === item.value}
          onClick={() => {
            setFilter(item.value);
          }}>{item.title}</StyledFilterItem>
      ))}
      <StyledFilterArrow isOpen={isOpen}>
        <IconArrowRight/>
      </StyledFilterArrow>
    </StyledFilter>
  );
};
