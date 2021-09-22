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
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REMOVE_USER_ERRORS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  VERIFY_USER_FAILURE,
  VERIFY_USER_REQUEST,
  VERIFY_USER_SUCCESS,
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
  avatar?: File | null;
  parental_agreement?: File | null;
}

export interface IUserLogin {
  email?: string;
  password?: string;
}

export interface IEmailVerify {
  id?: number;
  expires?: string;
  hash?: string;
  signature?: string;
}

export interface IRefreshPayload {
  refresh_token: string;
}

export interface IPhoto {
  alt:string,
  description:string,
  extension:string,
  hash:string,
  id:number,
  mime:string,
  name:string,
  original_name:string,
  url:string,
  user_id:number,
}

export interface UserState extends Partial<IUser> {
  pending: boolean;
  api: IApi | null;
  created_at?: string,
  city?: string,
  deleted_at?: string,
  email?: string;
  email_verified_at?: string;
  parental_agreement?: any;
  parental_agreement_id?: number;
  photo?: IPhoto | null;
  errors?: string | null;
  first_name?: string,
  id?: number,
  is_completed?: boolean,
  last_name?: string,
  message: string | null;
  middle_name?: string,
  name?: string,
  school?: string,
  school_class?: string,
  school_teacher_history?: string,
  updated_at?: string,
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

export interface UpdateUserRequest {
  type: typeof UPDATE_USER_REQUEST;
  payload: IUserRegistration;
}

export type UpdateUserSuccess = {
  type: typeof UPDATE_USER_SUCCESS;
  payload: FetchUserSuccessPayload;
};

export type UpdateUserFailure = {
  type: typeof UPDATE_USER_FAILURE;
  payload: FetchUserFailurePayload;
};

export interface VerifyUserRequest {
  type: typeof VERIFY_USER_REQUEST;
  payload: IEmailVerify;
}

export type VerifyUserSuccess = {
  type: typeof VERIFY_USER_SUCCESS;
  payload: FetchUserSuccessPayload;
};

export type VerifyUserFailure = {
  type: typeof VERIFY_USER_FAILURE;
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
  | UpdateUserRequest
  | UpdateUserSuccess
  | UpdateUserFailure
  | VerifyUserRequest
  | VerifyUserSuccess
  | VerifyUserFailure
