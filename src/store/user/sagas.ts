import axios, { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  checkAuthUserFailure,
  checkAuthUserSuccess,
  fetchUserFailure,
  fetchUserSuccess,
  loginUserFailure,
  loginUserSuccess,
  logoutUserSuccess,
  registerUserFailure,
  registerUserSuccess,
} from './actions';
import {
  CHECK_AUTH_USER_REQUEST,
  FETCH_USER_REQUEST,
  LOGIN_USER_REQUEST,
  LOGOUT_USER_REQUEST,
  REGISTER_USER_REQUEST,
} from './actionTypes';
import { IRefreshPayload, IUserLogin, IUserRegistration, RegisterUserRequest } from './types';
import { Action } from 'redux-actions';
import { modalsActions } from '../modals/actions';
import { AuthResponse } from '../../models/response/RegResponse';
import $api from '../../http';

const registrationUser = (payload: IUserRegistration): Promise<AxiosResponse<AuthResponse>> =>
  axios.post<AuthResponse>(`${process.env.REACT_APP_API_URL}/register`, {
    ...payload,
  });

const loginUser = (payload: IUserLogin): Promise<AxiosResponse<AuthResponse>> =>
  $api.post<AuthResponse>(`${process.env.REACT_APP_API_URL}/login`, {
    ...payload,
  });
const checkAuth = (payload: IRefreshPayload): Promise<AxiosResponse<AuthResponse>> =>
  axios.post<AuthResponse>(`${process.env.REACT_APP_API_URL}/refresh`, {
    refresh_token: payload.refresh_token,
  });
const fetchUser = (): Promise<AxiosResponse<AuthResponse>> =>
  $api.get<AuthResponse>(`${process.env.REACT_APP_API_URL}/user`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

function* fetchUserSaga() {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(fetchUser);
    yield put(
      fetchUserSuccess({
        user: response.data.data,
      })
    );
    if (!response.data?.data?.email_verified_at) {
      yield put(
        modalsActions.openModalAction({
          name: 'mailConfirmModal',
          props: { text: response.data?.message },
        })
      );
    }
  } catch (e: any) {
    yield put(
      fetchUserFailure({
        errors: e.response.data.errors,
      })
    );
  }
}

function* loginUserSaga(action: Action<RegisterUserRequest>) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(loginUser, action.payload);
    yield put(
      loginUserSuccess({
        user: response.data.data,
        api: {
          access_token: response.data?.access_token,
          refresh_token: response.data?.refresh_token,
          expires_in: response.data?.expires_in,
        },
      })
    );
    localStorage.setItem('access_token', response.data?.access_token);
    localStorage.setItem('refresh_token', response.data?.refresh_token);
    localStorage.setItem('expires_in', response.data?.expires_in);
    if (!response.data?.data?.email_verified_at) {
      yield put(
        modalsActions.openModalAction({
          name: 'mailConfirmModal',
          props: { text: response.data?.message },
        })
      );
    }
  } catch (e: any) {
    yield put(
      loginUserFailure({
        errors: e.response.data.errors || e.response.data.message,
      })
    );
  }
}

function* registerUserSaga(action: Action<RegisterUserRequest>) {
  console.log(action.payload);
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(registrationUser, action.payload);
    console.log(response);
    if (response?.data) {
      yield put(
        registerUserSuccess({
          user: response.data.data,
          api: {
            access_token: response.data?.access_token,
            refresh_token: response.data?.refresh_token,
            expires_in: response.data?.expires_in,
          },
        })
      );
      localStorage.setItem('access_token', response.data?.access_token);
      localStorage.setItem('refresh_token', response.data?.refresh_token);
      localStorage.setItem('expires_in', response.data?.expires_in);
      if (!response.data?.data?.email_verified_at) {
        yield put(
          modalsActions.openModalAction({
            name: 'mailConfirmModal',
            props: { text: response.data?.message },
          })
        );
      }
    }
  } catch (e: any) {
    console.log(e);
    yield put(
      registerUserFailure({
        errors: e.response?.data?.errors,
      })
    );
  }
}

function* logoutUserSaga() {
  yield put(
    logoutUserSuccess({
      user: null,
      api: null,
    })
  );
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('expires_in');
}

function* checkAuthSaga() {
  const refreshToken = localStorage.getItem('refresh_token');
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(checkAuth, { refresh_token: `${refreshToken}` });
    yield put(
      checkAuthUserSuccess({
        user: response.data.data,
        api: {
          access_token: response.data?.access_token,
          refresh_token: response.data?.refresh_token,
          expires_in: response.data?.expires_in,
        },
      })
    );
    localStorage.setItem('access_token', response.data?.access_token);
    localStorage.setItem('refresh_token', response.data?.refresh_token);
    localStorage.setItem('expires_in', response.data?.expires_in);
  } catch (e: any) {
    yield put(
      checkAuthUserFailure({
        errors: e.response.data.errors,
      })
    );
  }
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
function* userSaga(): any {
  yield all([takeLatest(FETCH_USER_REQUEST, fetchUserSaga)]);
  yield all([takeLatest(REGISTER_USER_REQUEST, registerUserSaga)]);
  yield all([takeLatest(LOGIN_USER_REQUEST, loginUserSaga)]);
  yield all([takeLatest(LOGOUT_USER_REQUEST, logoutUserSaga)]);
  yield all([takeLatest(CHECK_AUTH_USER_REQUEST, checkAuthSaga)]);
}

export default userSaga;
