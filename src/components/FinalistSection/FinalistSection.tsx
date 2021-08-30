import React from 'react';
import { Title } from "../Typography/Title";
import { StyledFinalistSection, StyledTitleBlock } from './FinalistSection.styled';
import { ContentWrapper } from "../ContentWrapper";
import { theme } from "../../theme";
import { Filter } from "../Filter";
import { Gallery } from "../Gallery";

export const FinalistSection: React.FC = () => {
  return (
      <StyledFinalistSection>
        <ContentWrapper customMargin={'left'}>
          <StyledTitleBlock>
            <Title color={theme.color.blue}>
              Финалисты
            </Title>
            <Filter/>
          </StyledTitleBlock>
          <Gallery/>
        </ContentWrapper>
      </StyledFinalistSection>
  );
};
