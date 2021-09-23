import { all, fork } from 'redux-saga/effects';

import userSaga from './user/sagas';
import quizSaga from "./quiz/sagas";
import expertSaga from "./experts/sagas";

/* eslint-disable  @typescript-eslint/no-explicit-any */

export function* rootSaga(): any {
  yield all([fork(userSaga)]);
  yield all([fork(quizSaga)]);
  yield all([fork(expertSaga)]);
}
