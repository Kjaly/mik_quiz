import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchPagesSuccess, } from './actions';
import { FETCH_PAGES_REQUEST, } from './actionTypes';
import $api from '../../http';
import { PagesResponse } from '../../models/response/PagesResponse';
import { Action } from 'redux-actions';
import { FetchPagesRequestPayload } from './types';


const fetchPages = (payload:FetchPagesRequestPayload): Promise<AxiosResponse<PagesResponse>> =>
  $api.get<PagesResponse>(`${process.env.REACT_APP_API_URL}/pages${payload.slug}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });


function* fetchPagesSaga(action: Action<FetchPagesRequestPayload>) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(fetchPages, action.payload);
    yield put(
      fetchPagesSuccess({
        pagesList: response.data.data,
      })
    );
  } catch (e: any) {
    console.warn(e)
  }
}


/* eslint-disable  @typescript-eslint/no-explicit-any */
function* expertSaga(): any {
  yield all([takeLatest(FETCH_PAGES_REQUEST, fetchPagesSaga)]);

}

export default expertSaga;
