import {
  FETCH_PAGES_FAILURE,
  FETCH_PAGES_REQUEST,
  FETCH_PAGES_SUCCESS,

} from './actionTypes';

import { PagesActions, IPagesState } from './types';

const initialState: IPagesState = {
  pagesList: null,
  pending: false,
  errors: null,
  message: null,
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default (state = initialState, action: PagesActions): any => {
  switch (action.type) {
    case FETCH_PAGES_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PAGES_SUCCESS:
      return {
        ...state,
        pending: false,
        pagesList: action.payload.pagesList,
        errors: null,
      };
    case FETCH_PAGES_FAILURE:
      return {
        ...state,
        pending: false,
        errors: action.payload.errors,
      };
    default:
      return {
        ...state,
      };
  }
};

