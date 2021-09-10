
// import axios from "axios";
import { all, takeLatest } from "redux-saga/effects";

// import { fetchUserFailure, fetchUserSuccess } from "./actions";
import { FETCH_USER_REQUEST } from "./actionTypes";
// import { IUser } from "./types";

/* eslint-disable  @typescript-eslint/no-explicit-any */
// const getUsers = (): any =>
//   axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");

/*
  Worker Saga: Fired on FETCH_USER_REQUEST action
*/
function* fetchUserSaga() {
  // try {
  //   /* eslint-disable  @typescript-eslint/no-explicit-any */
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   const response: any = yield call(getUsers);
  //   yield put(
  //     fetchUserSuccess({
  //       users: response.data,
  //     })
  //   );
  // } catch (e) {
  //   yield put(
  //     fetchUserFailure({
  //       error: e.message,
  //     })
  //   );
  // }
}


/* eslint-disable  @typescript-eslint/no-explicit-any */
function* userSaga(): any {
  yield all([takeLatest(FETCH_USER_REQUEST, fetchUserSaga)]);
}

export default userSaga;
