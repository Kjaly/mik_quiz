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
  verifyUserFailure,
  verifyUserSuccess,
} from './actions';
import {
  CHECK_AUTH_USER_REQUEST,
  FETCH_USER_REQUEST,
  LOGIN_USER_REQUEST,
  LOGOUT_USER_REQUEST,
  REGISTER_USER_REQUEST,
  UPDATE_USER_REQUEST,
  VERIFY_USER_REQUEST,
} from './actionTypes';
import {
  IRefreshPayload,
  IUserLogin,
  IUserRegistration,
  RegisterUserRequest,
  UpdateUserRequest,
} from './types';
import { Action } from 'redux-actions';
import { modalsActions } from '../modals/actions';
import { AuthResponse } from '../../models/response/RegResponse';
import $api from '../../http';
import { alertsActions } from '../alerts/actions';

const registrationUser = (payload: IUserRegistration): Promise<AxiosResponse<AuthResponse>> =>
  $api.post<AuthResponse>(`${process.env.REACT_APP_API_URL}/auth/register`, {
    ...payload,
  });

const loginUser = (payload: IUserLogin): Promise<AxiosResponse<AuthResponse>> =>
  $api.post<AuthResponse>(`${process.env.REACT_APP_API_URL}/auth/login`, {
    ...payload,
  });
const checkAuth = (payload: IRefreshPayload): Promise<AxiosResponse<AuthResponse>> =>
  $api.post<AuthResponse>(`${process.env.REACT_APP_API_URL}/auth/refresh`, {
    refresh_token: payload.refresh_token,
  });

const updateUser = (payload: IUserRegistration): Promise<AxiosResponse<AuthResponse>> => {
  function getFormData(object: any) {
    const formData = new FormData();
    Object.keys(object).forEach((key) => formData.append(key, object[key]));
    return formData;
  }

  const formData = getFormData(payload);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  formData.append('_method', 'PATCH');
  return $api.post<AuthResponse>(
    `${process.env.REACT_APP_API_URL}/auth/user?include=photo,parental_agreement`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

const fetchUser = (): Promise<AxiosResponse<AuthResponse>> =>
  $api.get<AuthResponse>(
    `${process.env.REACT_APP_API_URL}/auth/user?include=photo,parental_agreement`,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  );

const logoutUser = (): Promise<AxiosResponse<AuthResponse>> =>
  $api.post<AuthResponse>(`${process.env.REACT_APP_API_URL}/auth/logout`);

const verifyUser = (payload: IUserRegistration): Promise<AxiosResponse<AuthResponse>> =>
  axios.get<AuthResponse>(`${process.env.REACT_APP_API_URL}/auth/verify`, {
    ...payload,
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
    if (!response.data?.data?.is_completed) {
      yield put(
        modalsActions.openModalAction({
          name: 'mailConfirmModal',
          props: {
            text: 'Для использования сайта, без ограничений. Пожалуйста заполните свой профиль',
            noMail: true,
          },
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
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(registrationUser, action.payload);
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
    yield put(
      registerUserFailure({
        errors: e.response?.data?.errors,
      })
    );
  }
}

function* updateUserSaga(action: Action<UpdateUserRequest>) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(updateUser, action.payload);
    if (response?.data) {
      yield put(
        verifyUserSuccess({
          user: response.data.data,
        })
      );

      yield put(
        alertsActions.openAlertAction({
          text: 'Сохранено!',
        })
      );
    }
  } catch (e: any) {
    yield put(
      verifyUserFailure({
        errors: e.response?.data?.errors,
      })
    );
  }
}

function* verifyUserSaga(action: Action<UpdateUserRequest>) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(verifyUser, action.payload);
    if (response?.data) {
      yield put(
        verifyUserSuccess({
          user: response.data.data,
        })
      );
    }
  } catch (e: any) {
    yield put(
      verifyUserFailure({
        errors: e.response?.data?.errors,
      })
    );
  }
}

function* logoutUserSaga() {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(logoutUser);
    if (response) {
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
  } catch (e: any) {
    console.warn('logout');
  }
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
  yield all([takeLatest(UPDATE_USER_REQUEST, updateUserSaga)]);
  yield all([takeLatest(VERIFY_USER_REQUEST, verifyUserSaga)]);
}

export default userSaga;
