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
import { Title } from "../../Typography/Title";


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
          <Title customMargin={'0 0 20px 0'}>
            {title}
          </Title>
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
