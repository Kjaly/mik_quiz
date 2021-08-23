import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import './assets/fonts/Montserrat/Montserrat-Bold.ttf';

import "./index.css";
import store from "./store";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>,
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
