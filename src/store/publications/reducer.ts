import { ADD_PUBLICATION, REMOVE_PUBLICATION, } from './actionTypes';

import { IPublicationOLDsState, TPublicationsActions } from './types';

const initialState: IPublicationOLDsState = {
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
      console.log(action.payload)
      return {
        ...state,
        publications: action.payload.publications,
      };
    default:
      return {
        ...state,
      };
  }
};
