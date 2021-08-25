import React from 'react';
import { Button } from "../components/Button";
import { theme } from "../theme";
import { StyledFilter } from './Filter.styled';

export const Filter: React.FC = () => {

  return (
    <StyledFilter>
      <Button
        background={theme.color.blue}
        title={'Все'}
        onClick={() => {
          console.log('Логин')
        }}/>
      <Button
        background={'#fff'}
        color={"#000"}
        title={'Региональные слеты'}
        onClick={() => {
          console.log('Логин')
        }}/>
      <Button
        background={'#fff'}
        color={"#000"}
        title={'Межрегиональные слеты'}
        onClick={() => {
          console.log('Логин')
        }}/>
    </StyledFilter>
  );
};
