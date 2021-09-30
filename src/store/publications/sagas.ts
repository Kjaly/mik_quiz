import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
  fetchPublicationsFailure,
  fetchPublicationsSuccess,
  postPublicationsFailure,
  postPublicationsSuccess,
} from './actions';
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_PUBLICATION_REQUEST,
  FETCH_PUBLICATIONS_REQUEST,
  POST_PUBLICATION_REQUEST,
} from './actionTypes';
import $api from '../../http';
import { CategoriesResponse, PublicationsResponse } from '../../models/response/PublicationsResponse';
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

const fetchCategories = (): Promise<AxiosResponse<CategoriesResponse>> =>
  $api.get<CategoriesResponse>(`${process.env.REACT_APP_API_URL}/publication-categories`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

const postPublications = (payload: IPublicationRequestPayload): Promise<AxiosResponse<PublicationsResponse>> => {

  function getFormData(object: any) {
    const formData = new FormData();
    Object.keys(object).forEach((key) => formData.append(key, object[key]));
    return formData;
  }

  const formData = getFormData(payload);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return $api.post<PublicationsResponse>(
    `${process.env.REACT_APP_API_URL}/publications`,
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
function* fetchCategoriesSaga() {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(fetchCategories);
    if (response.data){
      yield put(
        fetchCategoriesSuccess({
          categories: response.data.data,
        })
      );
    }
  } catch (e: any) {
    yield put(
      fetchCategoriesFailure({
        errors: e.response.data.errors,
      })
    );
  }
}
function* postPublicationsSaga(action: Action<FetchPublicationRequestPayload>) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(postPublications, action.payload);
    yield put(
      postPublicationsSuccess({
        publications: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      postPublicationsFailure({
        errors: e.response.data.errors,
      })
    );
  }
}


/* eslint-disable  @typescript-eslint/no-explicit-any */
function* publicationsSaga(): any {
  yield all([takeLatest(FETCH_PUBLICATIONS_REQUEST, fetchPublicationsSaga)]);
  yield all([takeLatest(FETCH_PUBLICATION_REQUEST, fetchPublicationSaga)]);
  yield all([takeLatest(FETCH_CATEGORIES_REQUEST, fetchCategoriesSaga)]);
  yield all([takeLatest(POST_PUBLICATION_REQUEST, postPublicationsSaga)]);
}

export default publicationsSaga;
