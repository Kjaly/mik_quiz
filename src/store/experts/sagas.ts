import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchExpertsFailure, fetchExpertsSuccess, } from './actions';
import { FETCH_EXPERTS_REQUEST, } from './actionTypes';
import $api from '../../http';
import { ExpertsResponse } from "../../models/response/ExpertsResponse";


const fetchExperts = (): Promise<AxiosResponse<ExpertsResponse>> =>
  $api.get<ExpertsResponse>(`${process.env.REACT_APP_API_URL}/experts?page[paginate]=0`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });


function* fetchExpertsSaga() {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(fetchExperts);
    yield put(
      fetchExpertsSuccess({
        expertsList: response.data.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchExpertsFailure({
        errors: e.response.data.errors,
      })
    );
  }
}


/* eslint-disable  @typescript-eslint/no-explicit-any */
function* expertSaga(): any {
  yield all([takeLatest(FETCH_EXPERTS_REQUEST, fetchExpertsSaga)]);

}

export default expertSaga;
