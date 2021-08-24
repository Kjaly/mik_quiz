import React from "react";

import { RenderRoutes } from "./router/RenderRoutes";
import { Header } from "./components/Header";
import { AppContainer } from "./components/Containers/AppContainer";
import { ROUTES } from "./router/routes";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <AppContainer>
      <Header/>
      <RenderRoutes routes={ROUTES} />
      <Footer/>
    </AppContainer>
  );
};

export default App;
