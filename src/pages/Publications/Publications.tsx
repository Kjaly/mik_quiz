import React from 'react';
import { StyledFilesGrid, StyledPreviewBlock, StyledPublications } from './Publications.styled';
import { TitleBanner } from "../../components/TitleBanner";
import { UploadFile } from '../../components/UploadFile';
import { useDispatch } from "react-redux";
import { modalsActions } from "../../store/modals/actions";

export const Publications: React.FC = () => {

  const dispatch = useDispatch()
  const handleClick = () => {
    console.log(1);
    dispatch(modalsActions.openModalAction({name: 'addPublicationModal'}))
  }

  return (
    <StyledPublications>
      <TitleBanner>Мои публикации</TitleBanner>
      <StyledFilesGrid>
        <StyledPreviewBlock>
          <UploadFile onClick={handleClick}/>
        </StyledPreviewBlock>
      </StyledFilesGrid>
    </StyledPublications>
  );
};
