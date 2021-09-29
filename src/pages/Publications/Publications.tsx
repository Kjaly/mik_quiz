import React from 'react';
import { StyledFilesGrid, StyledPreviewBlock, StyledPublications } from './Publications.styled';
import { TitleBanner } from '../../components/TitleBanner';
import { UploadFile } from '../../components/UploadFile';
import { useDispatch, useSelector } from 'react-redux';
import { modalsActions } from '../../store/modals/actions';
import { ContentWrapper } from '../../components/ContentWrapper';
import { publicationsSelector } from '../../store/publications/selectors';
import { TPublication } from '../../store/publications/types';
import { GalleryItem } from '../../components/Gallery/GalleryItem';
import { publicationsActions } from '../../store/publications/actions';

export const Publications: React.FC = () => {
  const publications: Array<TPublication> = useSelector(publicationsSelector.getPublicationsSelector);

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(modalsActions.openModalAction({name: 'addPublicationModal'}))
  }

  const handleRemove = (id: string) => {
    console.log(id)
    const currentPublications = publications.filter(item => item.id !== id)
    dispatch(publicationsActions.removePublication({publications: currentPublications}))
  }
  return (
    <StyledPublications>
      <TitleBanner>Мои публикации</TitleBanner>
      <ContentWrapper>

        <StyledFilesGrid isEmpty={!publications?.length}>
          <StyledPreviewBlock>
            <UploadFile isEmpty={!publications?.length} onClick={handleClick}/>
          </StyledPreviewBlock>
          {publications?.length ? publications?.map((item, key) => {
            return (
              <GalleryItem key={key} type={item.type === 'Видео' ? 1 : 2} edit publication={item}
                           handleRemove={handleRemove}/>
            )
          }) : null}

        </StyledFilesGrid>
      </ContentWrapper>
    </StyledPublications>
  );
};
