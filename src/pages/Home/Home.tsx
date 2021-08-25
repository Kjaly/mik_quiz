import React from 'react';
import { MainSlider } from '../../components/MainSlider';
import { ExpertSection } from "../../components/ExpertSection/ExpertSection";
import { FinalistSection } from "../../components/FinalistSection";

export const Home: React.FC = () => {
  return (
    <>
      <MainSlider/>
      <ExpertSection/>
      <FinalistSection/>
    </>
  );
};
