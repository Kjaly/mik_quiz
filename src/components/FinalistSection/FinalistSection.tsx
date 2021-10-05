import React, { useEffect, useState } from 'react';
import { Title } from '../Typography/Title';
import { StyledDecorativeWrapper, StyledFinalistSection, StyledTitleBlock } from './FinalistSection.styled';
import { ContentWrapper } from '../ContentWrapper';
import { theme } from '../../theme';
import { Filter } from '../Filter';
import { Gallery } from '../Gallery';
import { DecorativeLines } from '../DecorativeLines';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPublicationsRequest } from '../../store/publications/actions';
import { TPublication } from '../../store/publications/types';
import { publicationsSelector } from '../../store/publications/selectors';

export const FinalistSection: React.FC = () => {
  const publications: Array<TPublication> | null = useSelector(publicationsSelector.getPublicationsSelector);
  const [filter, setFilter] = useState('0');

  const dispatch = useDispatch();
  useEffect(() => {
    if (!publications?.length) {
      dispatch(fetchPublicationsRequest({}));
    }
  }, []);


  if (!publications?.length) {
    return null;
  }
  return (
    <StyledFinalistSection>
      <ContentWrapper customMargin={'left'}>
        <StyledDecorativeWrapper>
          <DecorativeLines opacity={0.3} color={theme.color.blue}/>
        </StyledDecorativeWrapper>
        <StyledTitleBlock>
          <Title customMargin={'0 0 20px 0'} color={theme.color.blue}>
            Финалисты
          </Title>
          <Filter filter={filter} setFilter={setFilter}/>
        </StyledTitleBlock>
        <Gallery filter={filter} publications={publications}/>
      </ContentWrapper>
      <StyledDecorativeWrapper>
        <DecorativeLines opacity={0.3} color={theme.color.blue}/>
      </StyledDecorativeWrapper>
    </StyledFinalistSection>
  );
};
