import React from 'react';
import {
  StyledButton,
  StyledSliderItem,
  StyledSliderItemDescription,
  StyledSliderItemTitle,
  StyledSliderText
} from './SliderItem.styled';
import { Button } from "../../Button";
import { theme } from "../../../theme";
import { IconArrowRight } from "../../../Icons/IconArrowRight";


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
            icon={IconArrowRight}
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
