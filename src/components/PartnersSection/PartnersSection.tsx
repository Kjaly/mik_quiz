import React from 'react';
import {
  StyledLeftBlock,
  StyledPartnersNavigation,
  StyledPartnersSection,
  StyledPartnersWrapper
} from './PartnersSection.styled';
import { ContentWrapper } from '../ContentWrapper';
import { Title } from '../Typography/Title';
import { PartnerCard } from './PartnerCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavigationButton } from '../SwiperNavigationButton';
import {
  IconKonb,
  IconKopo,
  IconOsig,
  IconMoko,
  IconKOopo,
  IconRvio
} from '../../Icons';
import { theme } from "../../theme";


export const PartnersSection: React.FC = () => {

  const partners = [
    {
      name: 'МОКО',
      icon: IconMoko
    },
    {
      name: 'РВИО',
      icon: IconRvio
    },
    {
      name: 'КООПО',
      icon: IconKOopo
    },
    {
      name: 'ОСИГ',
      icon: IconOsig
    },
    {
      name: 'КОПО',
      icon: IconKopo
    },
    {
      name: 'КОНБ',
      icon: IconKonb
    }
  ]

  return (
    <StyledPartnersWrapper>
      <ContentWrapper customMargin={'right'}>
        <StyledPartnersSection>
          <StyledLeftBlock>
            <Title color={theme.color.blue}>Партнеры</Title>
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
            breakpoints={{
              768: {
                slidesPerView: 3,
                slidesPerColumn:2,
                spaceBetween:30
              },
            }}
            slidesPerView={2}
            slidesPerColumn={3}
            spaceBetween={20}
            slidesPerColumnFill={'row'}
          >
            {partners.map((item, key) => {
              return (
                <SwiperSlide key={key}>
                  <PartnerCard  icon={item.icon}/>
                </SwiperSlide>
              )
            })}
          </Swiper>

        </StyledPartnersSection>
      </ContentWrapper>
    </StyledPartnersWrapper>
  );
};
