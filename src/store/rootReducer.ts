import { CombinedState, combineReducers, Reducer } from 'redux';

import userReducer from './user/reducer';
import modalReducer from './modals/reducer';
import publicationsReducer from './publications/reducer';
import { connectRouter, RouterState } from 'connected-react-router';
import { AppState } from './store.types';
import { History } from 'history';

export type IRootReducer<R = undefined> = Reducer<CombinedState<AppState<R>>>;

const rootReducer = {
  user: userReducer,
  modal: modalReducer,
  publicationsList: publicationsReducer,
};

export const createRootReducer = (history: History): IRootReducer<RouterState> =>
  combineReducers({
    router: connectRouter(history),
    ...rootReducer,
  });



export default createRootReducer;
