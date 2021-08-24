import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import './assets/fonts/Montserrat/Montserrat-Bold.ttf';

import "./index.css";
import store from "./store";
import App from "./App";
import { theme } from "./theme";
import { GlobalStyles } from "./theme/globalTheme";
import { history } from "./store/rootReducer";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <BrowserRouter>
            <App/>
          </BrowserRouter>
        </ConnectedRouter>
        <GlobalStyles/>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
