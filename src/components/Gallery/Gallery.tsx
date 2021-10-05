import React, { useEffect, useState } from 'react';
import { StyledButton, StyledGallery, StyledGalleryWrapper } from './Gallery.styled';
import { GalleryItem } from './GalleryItem';
import { Button } from '../Button';
import { IconArrowRight } from '../../Icons';
import { theme } from '../../theme';
import { TPublication } from '../../store/publications/types';
import { fetchPublicationsRequest } from '../../store/publications/actions';
import { useDispatch } from 'react-redux';


interface IGalleryProps {
  publications: Array<TPublication>;
  filter: string;
}

export const Gallery: React.FC<IGalleryProps> = (props) => {
  const {publications, filter} = props;
  const dispatch = useDispatch();
  const [publicationsCount, setPublicationsCount] = useState(12);
  const handleFetchPublications = () => {
    setPublicationsCount(publicationsCount + 12);
  };

  useEffect(() => {
    dispatch(fetchPublicationsRequest({size: publicationsCount, category_id:+filter}));
  }, [publicationsCount, filter]);

  return (
    <StyledGalleryWrapper>
      <StyledGallery>
        {publications.slice(0, 12).map((item, key) => (
          <GalleryItem  publication={item} key={key} type={item.type}/>
        ))}
      </StyledGallery>
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
    </StyledGalleryWrapper>
  );
};
