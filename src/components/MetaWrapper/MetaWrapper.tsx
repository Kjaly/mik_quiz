import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPagesRequest } from '../../store/pages/actions';
import { StyledMetaWrapper } from './MetaWrapper.styled';
import { routerSelectors } from '../../store/route';
import { getMetaSelector } from '../../store/pages/selectors';
import { Helmet } from 'react-helmet';

export const MetaWrapper: React.FC = (props) => {
  const {children} = props;
  const dispatch = useDispatch()

  let currentPathname = useSelector(routerSelectors.getLocationPathName)
  const meta = useSelector(getMetaSelector)
  if (currentPathname === '/') {
    currentPathname = '/index'
  }
  useEffect(() => {
    dispatch(fetchPagesRequest({slug: currentPathname}))
  }, []);

  const title = meta?.find(item => item.key === 'title')?.value
  const description = meta?.find(item => item.key === 'description')?.value || ''

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
      </Helmet>
      <StyledMetaWrapper>
        {children}
      </StyledMetaWrapper>
    </>
  );
};
