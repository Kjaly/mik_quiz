import React from 'react';
import { StyledPartnerCard } from './PartnerCard.styled';


interface IPartnerCardProps {
  img: string;
  name: string;
}

export const PartnerCard: React.FC<IPartnerCardProps> = (props) => {
  const {img, name} = props

  return (
    <StyledPartnerCard>
      <img src={img} alt={name}/>
    </StyledPartnerCard>
  );
};
