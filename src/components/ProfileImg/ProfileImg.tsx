import React from 'react';
import { StyledProfileImg, StyledProfileImgWrapper } from './ProfileImg.styled';

interface IProfileImg {
  src: string;

}

export const ProfileImg: React.FC<IProfileImg> = (props) => {
  const {src} = props
  return (
    <StyledProfileImgWrapper>
      {src && <StyledProfileImg src={src}/>}
    </StyledProfileImgWrapper>
  );
};
