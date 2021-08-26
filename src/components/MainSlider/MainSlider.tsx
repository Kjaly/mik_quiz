import React from 'react';
import { StyledMainSlider } from "./MainSlider.styled";
import { BorderStuckContainer } from "../BorderStuckContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderItem } from "./SliderItem";

import SwiperCore, {
  Pagination
} from 'swiper/core';
import { ContentWrapper } from "../ContentWrapper";

SwiperCore.use([Pagination]);

interface IMainSliderProps {
  inversed?: boolean;
}

interface ISliderItem {
  title: string,
  description: string
}

const sliders: Array<ISliderItem> = [
  {
    title: 'Заголовок',
    description: 'Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации новых предложений. Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение соответствующий условий активизации. С другой стороны новая модель организационной деятельности позволяет оценить значение дальнейших направлений развития. ',
  },
  {
    title: 'Заголовок2',
    description: 'Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации новых предложений. Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение соответствующий условий активизации. С другой стороны новая модель организационной деятельности позволяет оценить значение дальнейших направлений развития. ',
  },
  {
    title: 'Заголовок3',
    description: 'Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации новых предложений. Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение соответствующий условий активизации. С другой стороны новая модель организационной деятельности позволяет оценить значение дальнейших направлений развития. ',
  },
  {
    title: 'Заголовок4',
    description: 'Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации новых предложений. Задача организации, в особенности же новая модель организационной деятельности позволяет оценить значение соответствующий условий активизации. С другой стороны новая модель организационной деятельности позволяет оценить значение дальнейших направлений развития. ',
  },
]

export const MainSlider: React.FC<IMainSliderProps> = (props) => {
  const {inversed} = props

  return (
    <BorderStuckContainer inversed={inversed}>
      <StyledMainSlider>
        <ContentWrapper customMargin={'left'}>
          <Swiper
            pagination={{clickable: true}}
            slidesPerView={1}>
            {sliders?.map(item => {
              return (
                <SwiperSlide>
                  <SliderItem
                    title={item.title}
                    description={item.description}/>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </ContentWrapper>
      </StyledMainSlider>
    </BorderStuckContainer>

  );
};
