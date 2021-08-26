import React from 'react';
import { BorderStuckContainer } from "../BorderStuckContainer";
import { StyledExpertSection } from './ExpertSection.styled';
import { Slider } from "../Slider";
import { ContentWrapper } from "../ContentWrapper";
import { Title } from "../Typography/Title";
import { theme } from "../../theme";

export const ExpertSection: React.FC = () => {

  return (
    <BorderStuckContainer inversed>
      <StyledExpertSection>
        <ContentWrapper customMargin={'right'}>
          <Title color={theme.color.blue} customMargin={'0 0 40px 0'}>
            Эксперты
          </Title>
          test
          <Slider/>
        </ContentWrapper>

      </StyledExpertSection>
    </BorderStuckContainer>
  );
};
