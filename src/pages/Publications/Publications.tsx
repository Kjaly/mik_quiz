import React, { useEffect } from 'react';
import { StyledFilesGrid, StyledPreviewBlock, StyledPublications } from './Publications.styled';
import { TitleBanner } from '../../components/TitleBanner';
import { UploadFile } from '../../components/UploadFile';
import { useDispatch, useSelector } from 'react-redux';
import { modalsActions } from '../../store/modals/actions';
import { ContentWrapper } from '../../components/ContentWrapper';
import { publicationsSelector } from '../../store/publications/selectors';
import { TPublication } from '../../store/publications/types';
import { GalleryItem } from '../../components/Gallery/GalleryItem';
import { deletePublicationRequest, fetchPublicationsRequest } from '../../store/publications/actions';
import { getUserIdSelector } from '../../store/user/selectors';

export const Publications: React.FC = () => {
  const publications: Array<TPublication> | null = useSelector(publicationsSelector.getPublicationsSelector);
  const dispatch = useDispatch();
  const userId = useSelector(getUserIdSelector);

  useEffect(() => {
    if (userId) dispatch(fetchPublicationsRequest({user_id: userId}));
  }, []);

  const handleClick = () => {
    dispatch(modalsActions.openModalAction({name: 'addPublicationModal'}));
  };


  const handleRemove = (id: number) => {
    dispatch(deletePublicationRequest({id, user_id: userId}));
  };
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
              <GalleryItem
                key={key}
                type={item.type}
                edit
                publication={item}
                handleRemove={handleRemove}/>
            );
          }) : null}

        </StyledFilesGrid>
      </ContentWrapper>
    </StyledPublications>
  );
};
