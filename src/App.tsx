import React from "react";

import { CustomRouter } from "./components/CustomRouter";
import { Header } from "./components/Header";
import { AppContainer } from "./components/Containers/AppContainer";

const App = () => {
  return (
    <AppContainer>
      <Header/>
      <CustomRouter/>
    </AppContainer>
  );
};

export default App;
