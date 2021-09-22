import React from 'react';
import { MainSlider } from '../../components/MainSlider';
import { ExpertSection } from '../../components/ExpertSection';
import { FinalistSection } from '../../components/FinalistSection';
import { PartnersSection } from '../../components/PartnersSection';
import { StyledHome } from './Home.styled';
import { InfoBlockSection } from '../../components/InfoBlockSection';

export const Home: React.FC = () => {
  return (
    <StyledHome>
      <MainSlider/>
      <ExpertSection/>
      <PartnersSection/>
      <FinalistSection/>
      <InfoBlockSection/>
    </StyledHome>
  );
};
