import { combineReducers } from "redux";

import userReducer from "./user/reducer";
import modalReducer from "./modals/reducer";
import publicationsReducer from "./publications/reducer";
import { connectRouter } from "connected-react-router";

import { createBrowserHistory } from "history";

export const history = createBrowserHistory()
const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  publicationsList: publicationsReducer,
  router: connectRouter(history),
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
