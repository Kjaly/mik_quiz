import React from 'react';
import { StyledAbout } from './About.styled';
import { TitleBanner } from '../../components/TitleBanner';
import { AboutTextSection } from '../../components/AboutTextSection';
import { ExpertSection } from '../../components/ExpertSection';

export const About: React.FC = () => {
  return (
    <StyledAbout>
      <TitleBanner>Заголовок</TitleBanner>
      <AboutTextSection/>
      <ExpertSection aboutPage/>
    </StyledAbout>
  );
};
