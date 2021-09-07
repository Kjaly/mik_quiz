import { ADD_PUBLICATION, REMOVE_PUBLICATION, } from "./actionTypes";
import {
  IAddPublicationAction,
  IRemovePublicationAction,
  IRemovePublicationPayload,
  ISetPublicationPayload,
} from "./types";

const addPublication = (payload: ISetPublicationPayload): IAddPublicationAction => ({
  type: ADD_PUBLICATION,
  payload,
});

const removePublication = (
  payload: IRemovePublicationPayload
): IRemovePublicationAction => ({
  type: REMOVE_PUBLICATION,
  payload,
});

export const piblicationsActions = {
  addPublication,
  removePublication
}