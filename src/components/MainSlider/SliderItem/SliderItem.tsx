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
import { IconArrowRight } from "../../../Icons";
import { Title } from "../../Typography/Title";


interface ISliderItemProps {
  title: string;
  description?: string;
  buttonText: string;
}

export const SliderItem: React.FC<ISliderItemProps> = (props) => {
  const {title, description, buttonText} = props
  return (
    <StyledSliderItem>
      <StyledSliderText>
        <StyledSliderItemTitle>
          <Title size={36} weight={400} customMargin={'0 0 20px 0'}>
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
            title={buttonText}
            color={'#fff'}
            onClick={() => {
              console.log('Логин')
            }}/>
        </StyledButton>
      </StyledSliderText>
    </StyledSliderItem>
  );
};
