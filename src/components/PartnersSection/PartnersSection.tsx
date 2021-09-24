import React, { useEffect } from 'react';
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
import { theme } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { fetchPartnersRequest } from "../../store/partners/actions";
import { getPartnersSelector } from "../../store/partners/selectors";


export const PartnersSection: React.FC = () => {


  const dispatch = useDispatch()
  const fetchPartners = () => {
    dispatch(fetchPartnersRequest())
  }
  const partners = useSelector(getPartnersSelector);

  useEffect(() => {
    if (!partners.length) {
    fetchPartners()
    }
  }, [])

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
                slidesPerColumn: 2,
                spaceBetween: 30
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
                  <PartnerCard img={item.photo.url} name={item.name}/>
                </SwiperSlide>
              )
            })}
          </Swiper>

        </StyledPartnersSection>
      </ContentWrapper>
    </StyledPartnersWrapper>
  );
};
