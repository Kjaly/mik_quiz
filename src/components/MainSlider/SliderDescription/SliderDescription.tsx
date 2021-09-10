import React from 'react';
import {
  StyledSliderDescription, StyledSliderDescriptionItem, StyledSliderDescriptionList, StyledSliderTitle
} from './SliderDescription.styled';


export const SliderDescription: React.FC = () => {
  return (
    <StyledSliderDescription>
      <StyledSliderTitle>Межрегиональный обмен между Калининградской и Псковской областями:</StyledSliderTitle>
      <StyledSliderDescriptionList>
        <StyledSliderDescriptionItem>
          онлайн-викторина по истории России для учащихся 9-11 классов;
        </StyledSliderDescriptionItem>
        <StyledSliderDescriptionItem>
          конкурс видеороликов среди полуфиналистов викторины;
        </StyledSliderDescriptionItem>
        <StyledSliderDescriptionItem>
          межрегиональные туристские слёты для победителей викторины;
        </StyledSliderDescriptionItem>
        <StyledSliderDescriptionItem>
          открытые уроки истории России в школах Калининградской и Псковской областей.
        </StyledSliderDescriptionItem>
      </StyledSliderDescriptionList>
    </StyledSliderDescription>
  );
};
