import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchPublicationsFailure, fetchPublicationsSuccess, } from './actions';
import { FETCH_PUBLICATION_REQUEST, FETCH_PUBLICATIONS_REQUEST, POST_PUBLICATION_REQUEST, } from './actionTypes';
import $api from '../../http';
import { PublicationsResponse } from '../../models/response/PublicationsResponse';
import store from '../index';
import { setFileUploadStatus } from '../user/actions';
import { FetchPublicationRequestPayload, IPublicationRequestPayload } from './types';
import { Action } from 'redux-actions';


const fetchPublications = (): Promise<AxiosResponse<PublicationsResponse>> =>
  $api.get<PublicationsResponse>(`${process.env.REACT_APP_API_URL}/publications`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

const fetchPublication = (payload: { id: number }): Promise<AxiosResponse<PublicationsResponse>> =>
  $api.get<PublicationsResponse>(`${process.env.REACT_APP_API_URL}/publications/${payload.id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

const postPublication = (payload: IPublicationRequestPayload): Promise<AxiosResponse<PublicationsResponse>> => {

  function getFormData(object: any) {
    const formData = new FormData();
    Object.keys(object).forEach((key) => formData.append(key, object[key]));
    return formData;
  }

  const formData = getFormData(payload);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return $api.post<PublicationsResponse>(
    `${process.env.REACT_APP_API_URL}/auth/user?include=photo,parental_agreement&append=client_role`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: progressEvent => {
        if (progressEvent.loaded < progressEvent.total) {
          store.dispatch(setFileUploadStatus({
            status: 'loading',
          }))
        } else {
          store.dispatch(setFileUploadStatus({
            status: '',
          }))
        }

      }
    }
  );
};
function* fetchPublicationsSaga() {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(fetchPublications);
    console.log(response)
    yield put(
      fetchPublicationsSuccess({
        publications: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchPublicationsFailure({
        errors: e.response.data.errors,
      })
    );
  }
}
function* fetchPublicationSaga(action: Action<FetchPublicationRequestPayload>) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(fetchPublication, action.payload);
    console.log(response)
    yield put(
      fetchPublicationsSuccess({
        publications: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchPublicationsFailure({
        errors: e.response.data.errors,
      })
    );
  }
}


/* eslint-disable  @typescript-eslint/no-explicit-any */
function* publicationsSaga(): any {
  yield all([takeLatest(FETCH_PUBLICATIONS_REQUEST, fetchPublicationsSaga)]);
  yield all([takeLatest(FETCH_PUBLICATION_REQUEST, fetchPublicationSaga)]);
  yield all([takeLatest(POST_PUBLICATION_REQUEST, postPublication)]);
}

export default publicationsSaga;
