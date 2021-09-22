import React from 'react';
import { StyledAbout } from './About.styled';
import { TitleBanner } from '../../components/TitleBanner';
import { AboutTextSection } from '../../components/AboutTextSection';
import { ExpertSection } from '../../components/ExpertSection';

import titleBackground from '../../assets/images/banner/mainImage3.jpg'

export const About: React.FC = () => {
  return (
    <StyledAbout>
      <TitleBanner img={titleBackground}>О проекте</TitleBanner>
      <AboutTextSection/>
      <ExpertSection aboutPage/>
    </StyledAbout>
  );
};
