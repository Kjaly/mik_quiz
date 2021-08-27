import React from 'react';
import { PartnerGrid, StyledPartnersSection, StyledPartnersWrapper } from './PartnersSection.styled';
import { ContentWrapper } from "../ContentWrapper";
import { Title } from "../Typography/Title";
import { PartnerCard } from "../PartnerCard";

export const PartnersSection: React.FC = () => {

  const partners = [1, 2, 3, 4, 5, 6]
  return (
    <StyledPartnersWrapper>
      <ContentWrapper customMargin={'right'}>
        <StyledPartnersSection>
          <Title color={'#000'}>Партнеры</Title>
          <PartnerGrid>
            {partners.map((item, key) => {
              return (
                <PartnerCard/>
              )
            })}
          </PartnerGrid>
        </StyledPartnersSection>
      </ContentWrapper>
    </StyledPartnersWrapper>
  );
};
