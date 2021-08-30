import React from 'react';
import {
  PartnerGrid,
  StyledLeftBlock,
  StyledPartnersNavigation,
  StyledPartnersSection,
  StyledPartnersWrapper
} from './PartnersSection.styled';
import { ContentWrapper } from "../ContentWrapper";
import { Title } from "../Typography/Title";
import { PartnerCard } from "./PartnerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavigationButton } from "../SwiperNavigationButton";

export const PartnersSection: React.FC = () => {

  const partners = [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]]

  return (
    <StyledPartnersWrapper>
      <ContentWrapper customMargin={'right'}>
        <StyledPartnersSection>
          <StyledLeftBlock>
            <Title color={'#000'}>Партнеры</Title>
            <StyledPartnersNavigation>
              <SwiperNavigationButton name={'prev-el'} reversed/>
              <SwiperNavigationButton name={'next-el'}/>
            </StyledPartnersNavigation>
          </StyledLeftBlock>
          <Swiper
            navigation={{
              prevEl: '.prev-el',
              nextEl: '.next-el',
            }}
            slidesPerView={1}
          >
            {partners.map((partners, key) => {
              return (
                <SwiperSlide key={key}>
                  <PartnerGrid>
                    {partners.map(() => {
                      return (
                        <PartnerCard/>
                      )
                    })}
                  </PartnerGrid>
                </SwiperSlide>
              )
            })}
          </Swiper>

        </StyledPartnersSection>
      </ContentWrapper>
    </StyledPartnersWrapper>
  );
};
