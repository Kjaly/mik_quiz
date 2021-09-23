import React from 'react';
import {
  StyledButton,
  StyledSliderItem,
  StyledSliderItemTitle,
  StyledSliderText,
} from './SliderItem.styled';
import { Button } from "../../Button";
import { theme } from "../../../theme";
import { IconArrowRight } from "../../../Icons";
import { Title } from "../../Typography/Title";
import { history } from '../../../store';

interface ISliderItemProps {
  title: string;
  buttonText: string;
}

export const SliderItem: React.FC<ISliderItemProps> = (props) => {
  const {title, buttonText} = props
  return (
    <StyledSliderItem>
      <StyledSliderText>
        <StyledSliderItemTitle>
          <Title size={36} weight={400} customMargin={'0 0 20px 0'}>
            {title}
          </Title>
        </StyledSliderItemTitle>
        <StyledButton>
          <Button
            reversed
            icon={IconArrowRight}
            background={theme.color.yellow}
            title={buttonText}
            color={'#fff'}
            onClick={() => {
              history.push('/quiz')
            }}/>
        </StyledButton>
      </StyledSliderText>
    </StyledSliderItem>
  );
};
