import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REMOVE_USER_ERRORS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE, CHECK_AUTH_USER_REQUEST, CHECK_AUTH_USER_SUCCESS, CHECK_AUTH_USER_FAILURE,
} from './actionTypes';

export interface IUser {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IApi {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

export interface IUserRegistration {
  first_name: string;
  last_name: string;
  middle_name: string;
  school: string;
  school_class: string;
  school_teacher_history: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface IUserLogin {
  email?: string;
  password?: string;
}

export interface IRefreshPayload {
 refresh_token: string;
}

export interface UserState extends Partial<IUser> {
  pending: boolean;
  api: IApi | null;
  errors: string | null;
  message: string | null;
}

export interface FetchUserSuccessPayload {
  user: IUser;
}

export interface AuthUserSuccessPayload {
  user: IUser | null;
  api: IApi | null
}

export interface FetchUserFailurePayload {
  errors: Record<string, Array<string>>;
}

export interface FetchUserRequest {
  type: typeof FETCH_USER_REQUEST;
}

export type FetchUserSuccess = {
  type: typeof FETCH_USER_SUCCESS;
  payload: FetchUserSuccessPayload;
};

export type FetchUserFailure = {
  type: typeof FETCH_USER_FAILURE;
  payload: FetchUserFailurePayload;
};

export interface LoginUserRequest {
  type: typeof LOGIN_USER_REQUEST;
  payload: IUserLogin;
}

export type LoginUserSuccess = {
  type: typeof LOGIN_USER_SUCCESS;
  payload: AuthUserSuccessPayload;
};

export type LoginUserFailure = {
  type: typeof LOGIN_USER_FAILURE;
  payload: FetchUserFailurePayload;
};

export interface RegisterUserRequest {
  type: typeof REGISTER_USER_REQUEST;
  payload: IUserRegistration;
}

export type RegisterUserSuccess = {
  type: typeof REGISTER_USER_SUCCESS;
  payload: AuthUserSuccessPayload;
};

export type RegisterUserFailure = {
  type: typeof REGISTER_USER_FAILURE;
  payload: FetchUserFailurePayload;
};

export interface CheckAuthUserRequest {
  type: typeof CHECK_AUTH_USER_REQUEST;
}

export type CheckAuthUserSuccess = {
  type: typeof CHECK_AUTH_USER_SUCCESS;
  payload: AuthUserSuccessPayload;
};

export type CheckAuthUserFailure = {
  type: typeof CHECK_AUTH_USER_FAILURE;
  payload: FetchUserFailurePayload;
};

export interface LogoutUserRequest {
  type: typeof LOGOUT_USER_REQUEST;
}

export type LogoutUserSuccess = {
  type: typeof LOGOUT_USER_SUCCESS;
  payload: AuthUserSuccessPayload;
};

export type LogoutUserFailure = {
  type: typeof LOGOUT_USER_FAILURE;
  payload: FetchUserFailurePayload;
};
export type RemoveUserErrors = {
  type: typeof REMOVE_USER_ERRORS;
};

export type UserActions =
  | FetchUserRequest
  | FetchUserSuccess
  | FetchUserFailure
  | RegisterUserRequest
  | RegisterUserSuccess
  | RegisterUserFailure
  | RemoveUserErrors
  | LoginUserRequest
  | LoginUserSuccess
  | LoginUserFailure
  | LogoutUserRequest
  | LogoutUserSuccess
  | LogoutUserFailure
  | CheckAuthUserRequest
  | CheckAuthUserSuccess
  | CheckAuthUserFailure
