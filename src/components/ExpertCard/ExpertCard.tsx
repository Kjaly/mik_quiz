import React from 'react';
import {
  StyledExpertCard,
  StyledExpertImg,
  StyledExpertName,
  StyledExpertDescription
} from "./ExpertCard.styled";

export interface IExpertCardProps {
  name: string;
  description: string;
}

export const ExpertCard: React.FC<IExpertCardProps> = (props) => {
  const {name, description} = props;
  return (
    <StyledExpertCard>
      <StyledExpertImg
        src={'https://img.freepik.com/free-photo/front-view-of-elegant-businesswoman-holding-clipboard-with-copy-space_23-2148788842.jpg?size=626&ext=jpg&ga=GA1.2.2140585734.1629504000'}/>
      <div>
        <StyledExpertName>{name}</StyledExpertName>
        <StyledExpertDescription>{description}</StyledExpertDescription>
      </div>
    </StyledExpertCard>
  );
};
