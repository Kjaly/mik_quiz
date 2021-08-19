import { combineReducers } from "redux";

import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  todo: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
