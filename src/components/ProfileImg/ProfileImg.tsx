import React from 'react';
import { StyledError, StyledProfileImg, StyledProfileImgWrapper } from './ProfileImg.styled';
import { IconUser } from '../../Icons';
import { ErrorTip } from "../ErrorTip";

interface IProfileImg {
  src: string;
  error: string;
}

export const ProfileImg: React.FC<IProfileImg> = (props) => {
  const {src, error} = props
  return (
    <StyledProfileImgWrapper>
      {src ? <StyledProfileImg src={src}/> : <IconUser/>}
      <StyledError>
        <ErrorTip error={error}/>
      </StyledError>
    </StyledProfileImgWrapper>
  );
};
