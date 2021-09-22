import {
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
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  VERIFY_USER_FAILURE,
  VERIFY_USER_REQUEST,
  VERIFY_USER_SUCCESS,
} from './actionTypes';

import { UserActions, UserState } from './types';

const initialState: UserState = {
  pending: false,
  api: null,
  errors: null,
  message: null,
};

const access_token = localStorage.getItem('access_token')
const refresh_token = localStorage.getItem('refresh_token')
const expires_in = localStorage.getItem('expires_in')
/* eslint-disable  @typescript-eslint/no-explicit-any */
export default (state = initialState, action: UserActions): any => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        ...action.payload.user,
        api: {
          access_token,
          refresh_token,
          expires_in,
        },
        errors: null,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        users: [],
        errors: action.payload.errors,
      };
    case VERIFY_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case VERIFY_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        email_verified_at: true,
        errors: null,
      };
    case VERIFY_USER_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload.errors,
      };
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        ...action.payload.user,
        errors: null,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload.errors,
      };
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        ...action.payload.user,
        api: action.payload.api,
        errors: null,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload.errors,
      };
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        ...action.payload.user,
        api: action.payload.api,
        errors: null,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload.errors,
      };

    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        initialState,
      };
    case REMOVE_USER_ERRORS:
      return {
        ...state,
        errors: null,
      };
    default:
      return {
        ...state,
      };
  }
};
