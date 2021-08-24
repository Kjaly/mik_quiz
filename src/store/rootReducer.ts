import { combineReducers } from "redux";

import userReducer from "./user/reducer";
import { connectRouter } from "connected-react-router";

import { createBrowserHistory } from "history";

export const history = createBrowserHistory()
const rootReducer = combineReducers({
  user: userReducer,
  router: connectRouter(history),
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
