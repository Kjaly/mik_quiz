import React from "react";
import 'swiper/swiper-bundle.css';

import { RenderRoutes } from "./router/RenderRoutes";
import { Header } from "./components/Header";
import { AppContainer } from "./components/Containers/AppContainer";
import { ROUTES } from "./router/routes";
import { Footer } from "./components/Footer";
import { ControlledReduxModal } from "./components/ControlledReduxModal";

const App = (): JSX.Element => {
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
