import React, { useEffect } from 'react';
import 'swiper/swiper-bundle.css';

import { RenderRoutes } from './router/RenderRoutes';
import { Header } from './components/Header';
import { AppContainer } from './components/Containers/AppContainer';
import { ROUTES } from './router/routes';
import { Footer } from './components/Footer';
import { ControlledReduxModal } from './components/ControlledReduxModal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest, verifyUserRequest } from './store/user/actions';
import { routerSelectors } from './store/route';
import { IEmailVerify } from './store/user/types';
import { history } from './store';
import { Alert } from './components/Alert';

const App = (): JSX.Element => {
  const dispatch = useDispatch()

  const currentQuery = useSelector(routerSelectors.getLocationQuery) as IEmailVerify
  const currentPath = useSelector(routerSelectors.getLocationPathName)
  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      dispatch(fetchUserRequest())
    }
  }, []);

  useEffect(() => {
    if (currentQuery && currentQuery.id) {
      const currentValues = {...currentQuery, id: +currentQuery?.id}
      history.push('/')
      if (currentPath.includes('verify-account')) {
        dispatch(verifyUserRequest(currentValues))
      }
    }
  }, []);



  return (
    <>
      <AppContainer>
        <Header/>
        <RenderRoutes routes={ROUTES}/>
        <Footer/>
      </AppContainer>
      <ControlledReduxModal/>
      <Alert/>
    </>
  );
};

export default App;
