import React from 'react';
import { StyledProfileImg, StyledProfileImgWrapper } from './ProfileImg.styled';

interface IProfileImg {
  src: string;

}

export const ProfileImg: React.FC<IProfileImg> = (props) => {
  const {src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'} = props
  return (
    <StyledProfileImgWrapper>
      <StyledProfileImg src={src}/>
    </StyledProfileImgWrapper>
  );
};
