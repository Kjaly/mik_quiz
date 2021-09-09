import React from 'react';
import {
  StyledExpertCard,
  StyledExpertImg,
  StyledExpertName,
  StyledExpertDescription,
  StyledImgWrapper,
  StyledExpertInfo
} from "./ExpertCard.styled";

export interface IExpertCardProps {
  name: string;
  description: string;
  img: string;
}

export const ExpertCard: React.FC<IExpertCardProps> = (props) => {
  const {name, description, img} = props;
  return (
    <StyledExpertCard>
      <StyledImgWrapper>
        <StyledExpertImg
          src={img}/>
      </StyledImgWrapper>
      <StyledExpertInfo>
        <StyledExpertName>{name}</StyledExpertName>
        <StyledExpertDescription>{description}</StyledExpertDescription>
      </StyledExpertInfo>
    </StyledExpertCard>
  );
};
