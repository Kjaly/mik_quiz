import {
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REMOVE_USER_ERRORS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_REQUEST, CHECK_AUTH_USER_FAILURE, CHECK_AUTH_USER_SUCCESS, CHECK_AUTH_USER_REQUEST,
} from './actionTypes';
import {
  FetchUserRequest,
  FetchUserSuccess,
  FetchUserSuccessPayload,
  FetchUserFailure,
  FetchUserFailurePayload,
  RegisterUserRequest,
  RegisterUserSuccess,
  RegisterUserFailure,
  AuthUserSuccessPayload,
  IUserRegistration,
  RemoveUserErrors,
  IUserLogin,
  LoginUserRequest,
  LoginUserFailure,
  LoginUserSuccess,
  LogoutUserRequest,
  LogoutUserSuccess,
  LogoutUserFailure,
  CheckAuthUserSuccess,
  CheckAuthUserRequest,
  CheckAuthUserFailure, IRefreshPayload,
} from './types';

export const fetchUserRequest = (): FetchUserRequest => ({
  type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (
  payload: FetchUserSuccessPayload
): FetchUserSuccess => ({
  type: FETCH_USER_SUCCESS,
  payload,
});

export const fetchUserFailure = (
  payload: FetchUserFailurePayload
): FetchUserFailure => ({
  type: FETCH_USER_FAILURE,
  payload,
});

export const loginUserRequest = (payload: IUserLogin): LoginUserRequest => ({
  type: LOGIN_USER_REQUEST,
  payload,
});

export const loginUserSuccess = (
  payload: AuthUserSuccessPayload
): LoginUserSuccess => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserFailure = (
  payload: FetchUserFailurePayload
): LoginUserFailure => ({
  type: LOGIN_USER_FAILURE,
  payload,
});

export const registerUserRequest = (payload: IUserRegistration): RegisterUserRequest => ({
  type: REGISTER_USER_REQUEST,
  payload,
});

export const registerUserSuccess = (
  payload: AuthUserSuccessPayload
): RegisterUserSuccess => ({
  type: REGISTER_USER_SUCCESS,
  payload,
});

export const registerUserFailure = (
  payload: FetchUserFailurePayload
): RegisterUserFailure => ({
  type: REGISTER_USER_FAILURE,
  payload,
});
export const checkAuthUserRequest = (): CheckAuthUserRequest => ({
  type: CHECK_AUTH_USER_REQUEST,
});

export const checkAuthUserSuccess = (
  payload: AuthUserSuccessPayload
): CheckAuthUserSuccess => ({
  type: CHECK_AUTH_USER_SUCCESS,
  payload,
});

export const checkAuthUserFailure = (
  payload: FetchUserFailurePayload
): CheckAuthUserFailure => ({
  type: CHECK_AUTH_USER_FAILURE,
  payload,
});

export const logoutUserRequest = (): LogoutUserRequest => ({
  type: LOGOUT_USER_REQUEST,
});

export const logoutUserSuccess = (
  payload: AuthUserSuccessPayload
): LogoutUserSuccess => ({
  type: LOGOUT_USER_SUCCESS,
  payload,
});


export const removeUserErrors = (): RemoveUserErrors => ({
  type: REMOVE_USER_ERRORS,
});
