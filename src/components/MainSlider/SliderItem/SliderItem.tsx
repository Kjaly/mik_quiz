import React from 'react';
import {
  StyledSliderItem,
  StyledSliderItemTitle,
  StyledSliderItemDescription,
  StyledButton,
  StyledSliderText
} from './SliderItem.styled';
import { Button } from "../../Button";
import { IconLock } from "../../../Icons/IconLock";
import { theme } from "../../../theme";


interface ISliderItemProps {
  title: string;
  description?: string;
}

export const SliderItem: React.FC<ISliderItemProps> = (props) => {
  const {title, description} = props
  return (
    <StyledSliderItem>
      <StyledSliderText>
        <StyledSliderItemTitle>
          {title}
        </StyledSliderItemTitle>
        <StyledSliderItemDescription>
          {description}
        </StyledSliderItemDescription>
        <StyledButton>
          <Button
            reversed
            icon={IconLock}
            background={theme.color.yellow}
            title={'Подробнее'}
            onClick={() => {
              console.log('Логин')
            }}/>
        </StyledButton>
      </StyledSliderText>
    </StyledSliderItem>
  );
};
