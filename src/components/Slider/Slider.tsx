import React from 'react';
import { Swiper } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper'
import { IconArrowRight } from "../../Icons";
import { StyledSwiper, StyledSwiperNavigation } from './Slider.styled'

SwiperCore.use([Navigation])
export const Slider: React.FC = (props) => {
  const {children} = props
  return (
    <StyledSwiper>
      <StyledSwiperNavigation className={'prev'} reverse>
        <IconArrowRight/>
      </StyledSwiperNavigation>
      <Swiper
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
      >
        {children}
      </Swiper>
      <StyledSwiperNavigation className={'next'} reverse={false}>
        <IconArrowRight/>
      </StyledSwiperNavigation>
    </StyledSwiper>
  );
};
