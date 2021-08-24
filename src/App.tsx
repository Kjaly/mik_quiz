import React from "react";

import { RenderRoutes } from "./router/RenderRoutes";
import { Header } from "./components/Header";
import { AppContainer } from "./components/Containers/AppContainer";
import { ROUTES } from "./router/routes";

const App = () => {
  return (
    <AppContainer>
      <Header/>
      <RenderRoutes routes={ROUTES} />
    </AppContainer>
  );
};

export default App;
