import { ADD_PUBLICATION, REMOVE_PUBLICATION, } from './actionTypes';

import { IPublicationsState, TPublicationsActions } from './types';

const initialState: IPublicationsState = {
  publications: [],
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
export default (state = initialState, action: TPublicationsActions):any => {
  switch (action.type) {
    case ADD_PUBLICATION:
      return {
        ...state,
        publications: state?.publications?.length ?  [...state.publications, action.payload] : [action.payload],
      };
    case REMOVE_PUBLICATION:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
