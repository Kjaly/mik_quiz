import {
  ADD_PUBLICATION,
  REMOVE_PUBLICATION,
} from "./actionTypes";

import { TPublicationsActions, IPublicationsState } from "./types";

const initialState: IPublicationsState = {
  publications: [],
};

export default (state = initialState, action: TPublicationsActions) => {
  switch (action.type) {
    case ADD_PUBLICATION:
      return {
        ...state,
        publications: [...state.publications, action.payload],
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
