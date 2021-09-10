import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createRootReducer from './rootReducer';


export const history = createBrowserHistory()

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();


// Mount it on the Store
const store = createStore(createRootReducer(history), composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware)));

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;
