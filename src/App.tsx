import React, { useEffect } from 'react';
import 'swiper/swiper-bundle.css';

import { RenderRoutes } from './router/RenderRoutes';
import { Header } from './components/Header';
import { AppContainer } from './components/Containers/AppContainer';
import { ROUTES } from './router/routes';
import { Footer } from './components/Footer';
import { ControlledReduxModal } from './components/ControlledReduxModal';
import { useDispatch } from 'react-redux';
import { fetchUserRequest } from './store/user/actions';

const App = (): JSX.Element => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      dispatch(fetchUserRequest())
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
    </>
  );
};

export default App;
