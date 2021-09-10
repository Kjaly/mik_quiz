import React from 'react';
import { Title } from "../Typography/Title";
import { StyledDecorativeWrapper, StyledFinalistSection, StyledTitleBlock } from './FinalistSection.styled';
import { ContentWrapper } from "../ContentWrapper";
import { theme } from "../../theme";
import { Filter } from "../Filter";
import { Gallery } from "../Gallery";
import { DecorativeLines } from "../DecorativeLines";

export const FinalistSection: React.FC = () => {
  return (
      <StyledFinalistSection>
        <ContentWrapper customMargin={'left'}>
          <StyledDecorativeWrapper>
            <DecorativeLines opacity={0.3} color={theme.color.blue}/>
          </StyledDecorativeWrapper>
          <StyledTitleBlock>
            <Title color={theme.color.blue}>
              Финалисты
            </Title>
            <Filter/>
          </StyledTitleBlock>
          <Gallery/>
        </ContentWrapper>
        <StyledDecorativeWrapper>
          <DecorativeLines opacity={0.3} color={theme.color.blue}/>
        </StyledDecorativeWrapper>
      </StyledFinalistSection>
  );
};
