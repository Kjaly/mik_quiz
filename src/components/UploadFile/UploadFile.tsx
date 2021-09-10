import React from 'react';
import { StyledUploadFile, StyledButtonWrapper, StyledIcon, StyledPreview } from './UploadFile.styled';
import { IconCloud } from "../../Icons";
import { IconCurvedArrow } from "../../Icons";

interface IUploadFileProps {
  onClick: () => void;
  isEmpty: boolean;
}

export const UploadFile: React.FC<IUploadFileProps> = (props) => {
  const {onClick, isEmpty} = props

  return (
    <StyledUploadFile onClick={onClick}>
      <StyledButtonWrapper>
        <IconCloud/>
        <p>Добавить <br/>публикацию</p>
      </StyledButtonWrapper>
      <StyledPreview isEmpty={isEmpty}>
        <StyledIcon>
          <IconCurvedArrow/>
        </StyledIcon>
        <p>Добавьте свою первую публикацию!</p>
      </StyledPreview>
    </StyledUploadFile>
  );
};
