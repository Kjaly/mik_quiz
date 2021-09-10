import React from 'react';
import { StyledSwiperNavigation } from "./SwiperNavigationButton.styled";
import { IconArrowRight } from "../../Icons";

export interface ISwiperNavigationButtonProps {
  name: string;
  reversed?: boolean;
}

export const SwiperNavigationButton: React.FC<ISwiperNavigationButtonProps> = (props) => {
  const {name, reversed} = props
  return (
    <StyledSwiperNavigation className={name} reversed={reversed}>
      <IconArrowRight/>
    </StyledSwiperNavigation>
  );
};
