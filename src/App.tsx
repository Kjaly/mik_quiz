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
import { history } from './store';
import { Alert } from './components/Alert';
import { getUserRoleSelector } from './store/user/selectors';
import { modalsActions } from './store/modals/actions';

const App = (): JSX.Element => {
  const dispatch = useDispatch()

  const currentQuery = useSelector(routerSelectors.getLocationQuery)
  const currentPath = useSelector(routerSelectors.getLocationPathName)
  const role = useSelector(getUserRoleSelector)
  const isFinalist = role === 'quiz_finalist'


  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      dispatch(fetchUserRequest())
    }
  }, []);

  useEffect(() => {
    if (currentQuery && currentQuery.id) {
      const currentValues = {...currentQuery, id: +currentQuery?.id}
      if (currentPath.includes('verify-account')) {
        history.push('/')
        dispatch(verifyUserRequest(currentValues))
      }
    }
  }, []);

  useEffect(() => {
    if (currentPath.includes('reset-password')) {
      history.push('/')
      dispatch(modalsActions.openModalAction({
        name: 'recoveryPasswordModal',
        props: {isActive: true, token: currentQuery?.token, email: currentQuery?.email}
      }))
    }
  }, []);

  useEffect(() => {
    if (isFinalist) {
      dispatch(modalsActions.openModalAction({name: 'finalistModal'}))
    }
  }, [role]);

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
