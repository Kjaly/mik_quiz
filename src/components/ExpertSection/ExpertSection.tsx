import React from 'react';
import { StyledExpertSection, StyledDecorativeWrapper, StyledTitle } from './ExpertSection.styled';
import { Slider } from '../Slider';
import { ContentWrapper } from '../ContentWrapper';
import { Title } from '../Typography/Title';
import { theme } from '../../theme';
import { SwiperSlide } from 'swiper/react';
import { ExpertCard } from './ExpertCard';
import { DecorativeLines } from '../DecorativeLines';
import { constants } from '../../contsants'

export const ExpertSection: React.FC<any> = (props) => {
  const {aboutPage} = props

const { experts } = constants
  return (
    <StyledExpertSection aboutPage={aboutPage}>
      <ContentWrapper>
        <StyledTitle>
          <Title color={theme.color.blue} customMargin={'0 0 40px 0'}>
            Жюри, эксперты и наставники
          </Title>
        </StyledTitle>

        <Slider>
          {experts.map((item, key) => {
            return (
              <SwiperSlide key={key}>
                <ExpertCard name={item.name} description={item.description} img={item.img}/>
              </SwiperSlide>
            )
          })}
        </Slider>
        <StyledDecorativeWrapper>
          <DecorativeLines opacity={0.3} color={theme.color.blue}/>
        </StyledDecorativeWrapper>
      </ContentWrapper>
    </StyledExpertSection>
  );
};
