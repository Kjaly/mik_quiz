import { IPublicationsState, TPublicationsActions } from './types';
import { FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS } from "./actionTypes";

const initialState: IPublicationsState = {
  publicationsList: null,
  categories: null,
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
    default:
      return {
        ...state,
      };
  }
};
