import React, { useState } from 'react';
import { StyledFilter, StyledFilterItem } from './Filter.styled';
import { theme } from "../../theme";

interface IFilterValues {
  value: string;
  title: string;
  background?: string;
  color?: string;
}

export const Filter: React.FC = () => {

  const [filter, setFilter] = useState('Все');

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
  return (
    <StyledFilter>
      {filterValues.map((item, key)=>(
        <StyledFilterItem
          key={key}
          isActive={filter===item.value}
          onClick={() => {
            setFilter(item.value);
          }}>{item.title}</StyledFilterItem>
      ))}

    </StyledFilter>
  );
};
