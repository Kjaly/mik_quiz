import {
  CHECK_AUTH_USER_FAILURE,
  CHECK_AUTH_USER_REQUEST,
  CHECK_AUTH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REMOVE_USER_ERRORS,
  RESEND_VERIFY_USER_FAILURE,
  RESEND_VERIFY_USER_REQUEST,
  RESEND_VERIFY_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  VERIFY_USER_FAILURE,
  VERIFY_USER_REQUEST,
  VERIFY_USER_SUCCESS,
} from './actionTypes';
import {
  AuthUserSuccessPayload,
  CheckAuthUserFailure,
  CheckAuthUserRequest,
  CheckAuthUserSuccess,
  FetchUserFailure,
  FetchUserFailurePayload,
  FetchUserRequest,
  FetchUserSuccess,
  FetchUserSuccessPayload,
  IEmailVerify,
  IResendEmailVerify,
  IUserLogin,
  IUserRegistration,
  IUserUpdatePayload,
  LoginUserFailure,
  LoginUserRequest,
  LoginUserSuccess,
  LogoutUserRequest,
  LogoutUserSuccess,
  RegisterUserFailure,
  RegisterUserRequest,
  RegisterUserSuccess,
  RemoveUserErrors,
  ResendVerifyUserFailure,
  ResendVerifyUserRequest,
  ResendVerifyUserSuccess,
  UpdateUserFailure,
  UpdateUserRequest,
  UpdateUserSuccess,
  VerifyUserFailure,
  VerifyUserRequest,
  VerifyUserSuccess,
  VerifyUserSuccessPayload,
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


export const updateUserRequest = (payload: IUserUpdatePayload): UpdateUserRequest => ({
  type: UPDATE_USER_REQUEST,
  payload,
});

export const updateUserSuccess = (
  payload: FetchUserSuccessPayload
): UpdateUserSuccess => ({
  type: UPDATE_USER_SUCCESS,
  payload,
});

export const updateUserFailure = (
  payload: FetchUserFailurePayload
): UpdateUserFailure => ({
  type: UPDATE_USER_FAILURE,
  payload,
});

export const verifyUserRequest = (payload: IEmailVerify): VerifyUserRequest => ({
  type: VERIFY_USER_REQUEST,
  payload,
});

export const verifyUserSuccess = (
  payload: FetchUserSuccessPayload
): VerifyUserSuccess => ({
  type: VERIFY_USER_SUCCESS,
  payload,
});

export const verifyUserFailure = (
  payload: FetchUserFailurePayload
): VerifyUserFailure => ({
  type: VERIFY_USER_FAILURE,
  payload,
});

export const resendVerifyUserRequest = (payload: IResendEmailVerify): ResendVerifyUserRequest => ({
  type: RESEND_VERIFY_USER_REQUEST,
  payload,
});

export const resendVerifyUserSuccess = (
  payload: VerifyUserSuccessPayload
): ResendVerifyUserSuccess => ({
  type: RESEND_VERIFY_USER_SUCCESS,
  payload,
});

export const resendVerifyUserFailure = (
  payload: FetchUserFailurePayload
): ResendVerifyUserFailure => ({
  type: RESEND_VERIFY_USER_FAILURE,
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
