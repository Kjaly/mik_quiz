import { all, fork } from 'redux-saga/effects';

import userSaga from './user/sagas';

/* eslint-disable  @typescript-eslint/no-explicit-any */

export function* rootSaga(): any {
  yield all([fork(userSaga)]);
}
