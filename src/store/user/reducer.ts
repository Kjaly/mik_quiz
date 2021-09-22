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
  LOGOUT_USER_FAILURE,
} from './actionTypes';

import { UserActions, UserState } from './types';

const initialState: UserState = {
  pending: false,
  api: null,
  errors: null,
  message: null,
};


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
        errors: null,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        users: [],
        errors: action.payload.errors,
      };
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case REGISTER_USER_SUCCESS:
      console.log(action.payload)
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
      console.log(action.payload)
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
