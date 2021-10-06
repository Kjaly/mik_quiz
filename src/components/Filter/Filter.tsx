import React, { useEffect, useState } from 'react';
import { StyledFilter, StyledFilterItem } from './Filter.styled';
import { theme } from '../../theme';
import { DropdownSelect } from '../FormFinal/DropdownSelect';

export interface IFilterValues {
  id: number;
  name: string;
  background?: string;
  color?: string;
}

interface IInterfaceProps {
  filter: IFilterValues;
  setFilter: (filter: IFilterValues) => void;
}

export const Filter: React.FC<IInterfaceProps> = (props) => {
  const {filter, setFilter} = props;

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const filterValues: Array<IFilterValues> = [
    {
      id: 0,
      name: 'Все',
      background: theme.color.blue,
    },
    {
      id: 1,
      name: 'Региональные слеты',
    },
    {
      id: 2,
      name: 'Межрегиональные слеты',
    },
  ];

  useEffect(() => {
    window.addEventListener('resize', function () {
      setInnerWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', function () {
        setInnerWidth(window.innerWidth);
      });
    }
  }, [])

  return (
    <StyledFilter>
      {innerWidth >= 768 ? (
        <>
          {filterValues.map((item, key) => (
            <StyledFilterItem
              key={key}
              isActive={filter.id === item.id}
              onClick={() => {
                setFilter(item);
              }}>{item?.name}</StyledFilterItem>
          ))}
        </>
      ) : (
        <DropdownSelect
          setOption={setFilter}
          name={'type'}
          placeholder="Тип публикации"
          option={filter}
          background={'#fff'}
          optionsList={filterValues}/>
      )}

    </StyledFilter>
  );
};
