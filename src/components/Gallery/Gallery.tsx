import React, { useEffect, useState } from 'react';
import { StyledButton, StyledEmptyBlock, StyledGallery, StyledGalleryWrapper } from './Gallery.styled';
import { GalleryItem } from './GalleryItem';
import { Button } from '../Button';
import { IconArrowRight } from '../../Icons';
import { theme } from '../../theme';
import { TPublication } from '../../store/publications/types';
import { fetchPublicationsRequest } from '../../store/publications/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getMetasSelector } from '../../store/publications/selectors';
import { IFilterValues } from '../Filter/Filter';


interface IGalleryProps {
  publications?: Array<TPublication> | null;
  filter: IFilterValues;
}

export const Gallery: React.FC<IGalleryProps> = (props) => {
  const {publications, filter} = props;
  const dispatch = useDispatch();
  const [publicationsCount, setPublicationsCount] = useState(12);
  const meta = useSelector(getMetasSelector);
  const isMaxPage = publicationsCount >= meta?.total;
  const handleFetchPublications = () => {
    if (!isMaxPage) {
      setPublicationsCount(publicationsCount + 12);
    }
  };
  useEffect(() => {
    setPublicationsCount(12);
  }, [filter]);


  useEffect(() => {
    dispatch(fetchPublicationsRequest({size: publicationsCount, category_id: filter?.id, is_accepted:true}));
  }, [publicationsCount, filter]);

  return (
    <StyledGalleryWrapper>
      <StyledGallery>
        {publications?.length ?
          publications?.map((item, key) => (
            <GalleryItem publication={item} key={key} type={item.type}/>
          ))
          : (
            <StyledEmptyBlock>Публикации не найдены</StyledEmptyBlock>
          )}

      </StyledGallery>
      {!isMaxPage &&
      <StyledButton>
        <Button
          title={'Показать еще'}
          color={theme.color.blue}
          view={'bordered'}
          icon={IconArrowRight}
          borderColor={'rgba(61, 79, 135, 0.2)'}
          onClick={handleFetchPublications}
          reversed/>
      </StyledButton>
      }
    </StyledGalleryWrapper>
  );
};
