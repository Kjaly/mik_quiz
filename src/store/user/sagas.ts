import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import store from '../../store'

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
  resendVerifyUserFailure,
  resendVerifyUserSuccess,
  setFileUploadStatus,
  updateUserFailure,
  updateUserSuccess,
  verifyUserFailure,
  verifyUserSuccess,
} from './actions';
import {
  CHECK_AUTH_USER_REQUEST,
  FETCH_USER_REQUEST,
  LOGIN_USER_REQUEST,
  LOGOUT_USER_REQUEST,
  REGISTER_USER_REQUEST,
  RESEND_VERIFY_USER_REQUEST,
  RESET_USER_PASSWORD_REQUEST,
  UPDATE_USER_REQUEST,
  VERIFY_USER_REQUEST,
} from './actionTypes';
import {
  IEmailVerify,
  IRefreshPayload,
  IResendEmailVerify,
  IUserLogin,
  IUserRegistration,
  IUserUpdatePayload,
  RegisterUserRequest,
  ResetUserPasswordPayload,
  UpdateUserRequest,
  VerifyUserRequest
} from './types';
import { Action } from 'redux-actions';
import { modalsActions } from '../modals/actions';
import { AuthResponse, VerifyResponse } from '../../models/response/RegResponse';
import $api from '../../http';
import { alertsActions } from '../alerts/actions';
import { history } from '../index';

const registrationUser = (payload: IUserRegistration): Promise<AxiosResponse<AuthResponse>> =>
  $api.post<AuthResponse>(`${process.env.REACT_APP_API_URL}/auth/register`, {
    ...payload,
  });

const loginUser = (payload: IUserLogin): Promise<AxiosResponse<AuthResponse>> =>
  $api.post<AuthResponse>(`${process.env.REACT_APP_API_URL}/auth/login?include=roles,photo,parental_agreement`, {
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

const fetchUser = (): Promise<AxiosResponse<AuthResponse>> =>
  $api.get<AuthResponse>(
    `${process.env.REACT_APP_API_URL}/auth/user?include=photo,parental_agreement&append=client_role`,
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  );

const logoutUser = (): Promise<AxiosResponse<AuthResponse>> =>
  $api.post<AuthResponse>(`${process.env.REACT_APP_API_URL}/auth/logout`);

const verifyUser = (payload: IEmailVerify): Promise<AxiosResponse<VerifyResponse>> => {
  return $api.get<VerifyResponse>(`${process.env.REACT_APP_API_URL}/auth/verify`, {
    params: {
      ...payload
    }
  });
}

const resendVerifyUser = (payload: IResendEmailVerify): Promise<AxiosResponse<VerifyResponse>> => {
  return $api.get<VerifyResponse>(`${process.env.REACT_APP_API_URL}/auth/verify/resend`, {
    params: {
      ...payload
    }
  });
}

const forgotUserPassword = (payload: IUserLogin): Promise<AxiosResponse<AuthResponse>> =>
  $api.post<AuthResponse>(`${process.env.REACT_APP_API_URL}/auth/password/forgot`, {
    ...payload,
  });
const resetUserPassword = (payload: IUserLogin): Promise<AxiosResponse<AuthResponse>> =>
  $api.post<AuthResponse>(`${process.env.REACT_APP_API_URL}/auth/password/reset`, {
    ...payload,
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
      if (response.data?.data?.email_verified_at) {
        if (history.location.pathname.includes('/profile')) return null;
        yield put(
          modalsActions.openModalAction({
            name: 'mailConfirmModal',
            props: {
              text: 'Чтобы твои результаты были учтены, тебе необходимо (если ты совершеннолетний) или твоим родителям (опекунам) заполнить свой профиль и форму Согласия на обработку персональных данных и публикацию итогов викторины. Для этого распечатай соответствующий бланк, заполни и загрузи его в личном кабинете. Важно! Без этого документа твои результаты не будут засчитаны. Добавить Согласие можно в течение трех дней после завершения онлайн-викторины.',
              noMail: true
            },
          })
        );
      } else {
        yield put(
          modalsActions.openModalAction({
            name: 'mailConfirmModal',
            props: {text: response.data?.message},
          })
        )
      }
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
          props: {text: response.data?.message},
        })
      );
    } else {
      yield put(modalsActions.closeModalAction())
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
            props: {text: response.data?.message},
          })
        );
      }
    }
  } catch (e: any) {
    yield put(
      registerUserFailure({
        errors: e.response.data.errors || e.response.data.message,
      })
    );
  }
}

function* resetUserPasswordSaga(action: Action<ResetUserPasswordPayload>) {
  try {

    if (action.payload?.data?.token) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      yield call(resetUserPassword, action.payload.data);
      yield put(
        modalsActions.openModalAction({
          name: 'mailConfirmModal',
          props: {
            title:'Смена пароля',
            text: `Пароль успешно измененен`,
          },
        })
      );
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      yield call(forgotUserPassword, action.payload.data);
      yield put(
        modalsActions.openModalAction({
          name: 'mailConfirmModal',
          props: {
            title:'Проверьте электронную почту',
            text: `Мы отправили письмо c инструкцией на <a>${action.payload?.data.email}</a>`,
          },
        })
      );
    }

  } catch (e: any) {
    yield put(
      registerUserFailure({
        errors: e.response.data.errors || e.response.data.message,
      })
    );
  }
}


function* updateUserSaga(action: Action<IUserUpdatePayload>) {
  const {data} = action.payload
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(updateUser, data,);
    if (response?.data) {
      yield put(
        updateUserSuccess({
          user: response.data.data,
        })
      );

      yield put(
        alertsActions.openAlertAction({
          text: 'Сохранено!',
        })
      );

      if (!response.data.data.email_verified_at) {
        yield put(
          modalsActions.openModalAction({
            name: 'mailConfirmModal',
            props: {text: response.data?.message},
          })
        );
      }
    }
  } catch (e: any) {
    yield put(
      updateUserFailure({
        errors: e.response?.data?.errors,
      })
    );
  }
}

function* verifyUserSaga(action: Action<VerifyUserRequest>) {
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

      yield put(
        modalsActions.openModalAction({
          name: 'mailConfirmModal',
          props: {text: response.data?.message},
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

function* resendVerifyUserSaga(action: Action<UpdateUserRequest>) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(resendVerifyUser, action.payload);
    if (response?.data) {
      yield put(
        resendVerifyUserSuccess({message: response.data?.message}
        )
      );

      yield put(
        modalsActions.openModalAction({
          name: 'mailConfirmModal',
          props: {text: response.data?.message},
        })
      );
    }
  } catch (e: any) {
    yield put(
      resendVerifyUserFailure({
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
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    yield call(logoutUser);
  } catch (e: any) {
    console.warn('logout');
  }
  history.push('/')
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('expires_in');
  localStorage.removeItem('answers');
  localStorage.removeItem('essay');
  localStorage.removeItem('isQuizStarted');
}

function* checkAuthSaga() {
  const refreshToken = localStorage.getItem('refresh_token');
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const response = yield call(checkAuth, {refresh_token: `${refreshToken}`});
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
  yield all([takeLatest(RESEND_VERIFY_USER_REQUEST, resendVerifyUserSaga)]);
  yield all([takeLatest(RESET_USER_PASSWORD_REQUEST, resetUserPasswordSaga)]);
}

export default userSaga;
