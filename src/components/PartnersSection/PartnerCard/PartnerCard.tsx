import React from 'react';
import { StyledPartnerCard } from './PartnerCard.styled';


interface IPartnerCardProps {
  icon?: React.ElementType;


}

export const PartnerCard: React.FC<IPartnerCardProps> = (props) => {
  const {icon} = props

  const Icon = icon;

  return (
    <StyledPartnerCard>
      {Icon && <Icon/>}
    </StyledPartnerCard>
  );
};
