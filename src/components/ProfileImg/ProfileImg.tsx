import React from 'react';
import { StyledProfileImg, StyledProfileImgWrapper } from './ProfileImg.styled';
import { IconUser } from '../../Icons';

interface IProfileImg {
  src: string;

}

export const ProfileImg: React.FC<IProfileImg> = (props) => {
  const {src} = props
  return (
    <StyledProfileImgWrapper>
      {src ? <StyledProfileImg src={src}/> : <IconUser/>}
    </StyledProfileImgWrapper>
  );
};
