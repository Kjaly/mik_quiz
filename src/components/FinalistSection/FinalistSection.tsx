import React from 'react';
import { Title } from "../Typography/Title";
import { StyledFinalistSection, StyledTitleBlock } from './FinalistSection.styled';
import { ContentWrapper } from "../ContentWrapper";
import { BorderStuckContainer } from "../BorderStuckContainer";
import { theme } from "../../theme";
import { Filter } from "../Filter";
import { Gallery } from "../Gallery";

export const FinalistSection: React.FC = () => {
  return (
    <BorderStuckContainer>
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
    </BorderStuckContainer>
  );
};
