import React from 'react';
import { StyledAbout } from './About.styled';
import { TitleBanner } from '../../components/TitleBanner';
import { AboutTextSection } from '../../components/AboutTextSection';
import { ExpertSection } from '../../components/ExpertSection';

import titleBackground from '../../assets/images/about/titleBackground.png'
import { MetaWrapper } from '../../components/MetaWrapper';

export const About: React.FC = () => {
  return (
    <MetaWrapper>
      <StyledAbout>
        <TitleBanner img={titleBackground}>О проекте</TitleBanner>
        <AboutTextSection/>
        <ExpertSection aboutPage/>
      </StyledAbout>
    </MetaWrapper>
  );
};
