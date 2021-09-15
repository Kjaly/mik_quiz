import React from 'react';
import { StyledAbout } from './About.styled';
import { TitleBanner } from '../../components/TitleBanner';
import { AboutTextSection } from '../../components/AboutTextSection';
import { ExpertSection } from '../../components/ExpertSection';

import titleBackground from '../../assets/images/about/titleBackground.png'

export const About: React.FC = () => {
  return (
    <StyledAbout>
      <TitleBanner img={titleBackground}>Заголовок</TitleBanner>
      <AboutTextSection/>
      <ExpertSection aboutPage/>
    </StyledAbout>
  );
};
