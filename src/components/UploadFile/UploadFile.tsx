import React from 'react';
import { StyledUploadFile, StyledButtonWrapper, StyledIcon, StyledPreview } from './UploadFile.styled';
import { IconCloud } from "../../Icons/IconCloud";
import { IconCurvedArrow } from "../../Icons/IconCurvedArrow";

interface IUploadFileProps {
  onClick: () => void;
}

export const UploadFile: React.FC<IUploadFileProps> = (props) => {
  const {onClick} = props
  return (
    <StyledUploadFile onClick={onClick}>
      <StyledButtonWrapper>
        <IconCloud/>
        <p>Добавить <br/>публикацию</p>
      </StyledButtonWrapper>
      <StyledPreview>
        <StyledIcon>
          <IconCurvedArrow/>
        </StyledIcon>
        <span>Добавьте свою первую публикацию!</span>
      </StyledPreview>
    </StyledUploadFile>
  );
};
