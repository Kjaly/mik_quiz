import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  deletePublicationFailure,
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
  fetchPublicationsFailure,
  fetchPublicationsRequest,
  fetchPublicationsSuccess,
  postPublicationsFailure,
  postPublicationsSuccess,
} from './actions';
import {
  DELETE_PUBLICATION_REQUEST,
  FETCH_CATEGORIES_REQUEST,
  FETCH_PUBLICATION_REQUEST,
  FETCH_PUBLICATIONS_REQUEST,
  POST_PUBLICATION_REQUEST,
  UPDATE_PUBLICATION_REQUEST,
} from './actionTypes';
import $api from '../../http';
import { CategoriesResponse, PublicationsResponse } from '../../models/response/PublicationsResponse';
import store from '../index';
import { setFileUploadStatus } from '../user/actions';
import {
  FetchPublicationRequestPayload,
  FetchPublicationsRequestPayload,
  IPublicationRequestPayload,
  TPublication,
  UpdatePublicationRequestPayload,
} from './types';
import { Action } from 'redux-actions';


function getFormData(object: any) {
  const formData: any = new FormData();
  Object.keys(object).forEach((key) => {
    if (Array.isArray(object[key])) {
      if (object[key].length) {
        for (let i = 0; i < object[key].length; i++) {
          formData.append(`${key}[]`, object[key][i] || null);
        }
      } else {
        return formData.append(`${key}[]`, []);
      }
    } else {
      return formData.append(key, object[key]);
    }
  });
  return formData;
}


const fetchPublications = (payload: FetchPublicationsRequestPayload): Promise<AxiosResponse<PublicationsResponse>> =>{
  return $api.get<PublicationsResponse>(`${process.env.REACT_APP_API_URL}/publications?include=user.photo,category,photos${payload.size
      ? `&page[size]=${payload.size}`
      : ''}${payload.category_id
      ? `&filter[category_id]=${payload.category_id}`
      : ''}${payload.is_accepted
      ? `&filter[is_accepted]=1`
      : ''}${payload.user_id
      ? `&filter[user_id]=${payload.user_id}`
      : ''}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
  }
;

const fetchPublication = (payload: { id: number }): Promise<AxiosResponse<PublicationsResponse>> =>
  $api.get<PublicationsResponse>(`${process.env.REACT_APP_API_URL}/publications/${payload.id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

const deletePublication = (payload: { id: number }): Promise<AxiosResponse<PublicationsResponse>> =>
  $api.delete<PublicationsResponse>(`${process.env.REACT_APP_API_URL}/publications/${payload.id}`, {
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

const postPublications = (payload: TPublication): Promise<AxiosResponse<PublicationsResponse>> => {
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
          }));
        } else {
          store.dispatch(setFileUploadStatus({
            status: '',
          }));
        }

      },
    },
  );
};

const updatePublications = (payload: IPublicationRequestPayload): Promise<AxiosResponse<PublicationsResponse>> => {
  const {id, ...currentPayload} = payload;
  const formData = getFormData(currentPayload);
  formData.append('_method', 'PATCH');

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return $api.post<PublicationsResponse>(
    `${process.env.REACT_APP_API_URL}/publications/${payload.id}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: progressEvent => {
        if (progressEvent.loaded < progressEvent.total) {
          store.dispatch(setFileUploadStatus({
            status: 'loading',
          }));
        } else {
          store.dispatch(setFileUploadStatus({
            status: '',
          }));
        }

      },
    },
  );
};


function* fetchPublicationsSaga(action: Action<FetchPublicationsRequestPayload>) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(fetchPublications, action.payload);
    yield put(
      fetchPublicationsSuccess({
        publications: response.data.data,
        meta: response.data.meta,
      }),
    );
  } catch (e: any) {
    yield put(
      fetchPublicationsFailure({
        errors: e.response.data.errors,
      }),
    );
  }
}

function* fetchPublicationSaga(action: Action<FetchPublicationRequestPayload>) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(fetchPublication, action.payload);
    yield put(
      fetchPublicationsSuccess({
        publications: response.data.data.data,
        meta: response.data.meta,
      }),
    );
  } catch (e: any) {
    yield put(
      fetchPublicationsFailure({
        errors: e.response.data.errors,
      }),
    );
  }
}

function* fetchCategoriesSaga() {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(fetchCategories);
    if (response.data) {
      yield put(
        fetchCategoriesSuccess({
          categories: response.data.data,
        }),
      );
    }
  } catch (e: any) {
    yield put(
      fetchCategoriesFailure({
        errors: e.response.data.errors,
      }),
    );
  }
}

function* postPublicationsSaga(action: Action<UpdatePublicationRequestPayload>) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(postPublications, action.payload.data);
    yield put(
      postPublicationsSuccess({
        publications: response.data,
        meta: response.data.meta,
      }),
    );
    yield put(fetchPublicationsRequest({user_id: action.payload.user_id}));
  } catch (e: any) {
    yield put(
      postPublicationsFailure({
        errors: e.response.data.errors,
      }),
    );
  }
}

function* deletePublicationSaga(action: Action<FetchPublicationRequestPayload>) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yield call(deletePublication, {id: action.payload?.id});
    yield put(fetchPublicationsRequest({user_id: action.payload.user_id}));

  } catch (e: any) {
    yield put(
      deletePublicationFailure({
        errors: e.response.data.errors,
      }),
    );
  }
}

function* updatePublicationSaga(action: Action<UpdatePublicationRequestPayload>) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yield call(updatePublications, action.payload?.data);
    yield put(fetchPublicationsRequest({user_id: action.payload?.user_id}));

  } catch (e: any) {
    yield put(
      deletePublicationFailure({
        errors: e.response.data.errors,
      }),
    );
  }
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
function* publicationsSaga(): any {
  yield all([takeLatest(FETCH_PUBLICATIONS_REQUEST, fetchPublicationsSaga)]);
  yield all([takeLatest(FETCH_PUBLICATION_REQUEST, fetchPublicationSaga)]);
  yield all([takeLatest(FETCH_CATEGORIES_REQUEST, fetchCategoriesSaga)]);
  yield all([takeLatest(POST_PUBLICATION_REQUEST, postPublicationsSaga)]);
  yield all([takeLatest(DELETE_PUBLICATION_REQUEST, deletePublicationSaga)]);
  yield all([takeLatest(UPDATE_PUBLICATION_REQUEST, updatePublicationSaga)]);
}

export default publicationsSaga;
