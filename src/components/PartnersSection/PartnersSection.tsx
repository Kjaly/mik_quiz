import React from 'react';
import {
  PartnerGrid,
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


export const PartnersSection: React.FC = () => {

  const partners = [[
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
  ],
  ]

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
                    {partners.map((item, index) => {
                      return (
                        <PartnerCard key={index} icon={item.icon}/>
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
