import React from 'react';
import { StyledFilesGrid, StyledPreviewBlock, StyledPublications } from './Publications.styled';
import { TitleBanner } from "../../components/TitleBanner";
import { UploadFile } from '../../components/UploadFile';
import { useDispatch, useSelector } from "react-redux";
import { modalsActions } from "../../store/modals/actions";
import { ContentWrapper } from "../../components/ContentWrapper";
import { publicationsSelector } from "../../store/publications/selectors";
import { TPublication } from "../../store/publications/types";
import { GalleryItem } from "../../components/Gallery/GalleryItem";

export const Publications: React.FC = () => {
  const publications: Array<TPublication> = useSelector(publicationsSelector.getPublicationsSelector);

  const dispatch = useDispatch()


  const handleClick = () => {
    console.log(publications);
    console.log(publications.length)
    dispatch(modalsActions.openModalAction({name: 'addPublicationModal'}))
  }
  console.log(publications.length)
  return (
    <StyledPublications>
      <TitleBanner>Мои публикации</TitleBanner>
      <ContentWrapper>
        <StyledFilesGrid isEmpty={!publications.length}>
          {publications.length ? publications?.map((item, key) => {
            console.log(item)
            return (
              <GalleryItem key={key} type={item.type === 'Видео' ? 1 : 2} edit url={item?.url}/>
            )
          }) : null}
          <StyledPreviewBlock>
            <UploadFile isEmpty={!publications.length} onClick={handleClick}/>
          </StyledPreviewBlock>
        </StyledFilesGrid>
      </ContentWrapper>
    </StyledPublications>
  );
};
