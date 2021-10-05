import { IPublicationsState, TPublicationsActions } from './types';
import {
  DELETE_PUBLICATION_FAILURE,
  DELETE_PUBLICATION_REQUEST, DELETE_PUBLICATION_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS, FETCH_PUBLICATIONS_FAILURE, FETCH_PUBLICATIONS_REQUEST,
  FETCH_PUBLICATIONS_SUCCESS, REMOVE_PUBLICATION_IMG,
} from './actionTypes';

const initialState: IPublicationsState = {
  publicationsList: null,
  categories: null,
  meta:null,
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default (state = initialState, action: TPublicationsActions): any => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        pending: false,
        categories: action.payload.categories,
        errors: null,
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        categories: [],
        errors: action.payload.errors,
      };

    case FETCH_PUBLICATIONS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PUBLICATIONS_SUCCESS:
      return {
        ...state,
        pending: false,
        publicationsList: action.payload.publications,
        meta: action.payload.meta,
        errors: null,
      };
    case FETCH_PUBLICATIONS_FAILURE:
      return {
        ...state,
        errors: action.payload.errors,
      };

    case DELETE_PUBLICATION_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case DELETE_PUBLICATION_SUCCESS:
      return {
        ...state,
        pending: false,
        errors: null,
      };
    case DELETE_PUBLICATION_FAILURE:
      return {
        ...state,
        errors: action.payload.errors,
      };
    case REMOVE_PUBLICATION_IMG:
      return {
        ...state,
        publicationsList: action.payload.publicationsList || state.publicationsList,
      };
    default:
      return {
        ...state,
      };
  }
};
