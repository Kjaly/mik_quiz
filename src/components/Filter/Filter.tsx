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

interface IInterfaceProps {
  filter: string;
  setFilter: (filter: string) => void;
}

export const Filter: React.FC<IInterfaceProps> = (props) => {
  const {filter, setFilter} = props;

  const [isOpen, setIsOpen] = useState(false);
  const filterValues: Array<IFilterValues> = [
    {
      value: '0',
      title: 'Все',
      background: theme.color.blue,
    },
    {
      value: '1',
      title: 'Региональные слеты',
    },
    {
      value: '2',
      title: 'Межрегиональные слеты',
    },
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
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
