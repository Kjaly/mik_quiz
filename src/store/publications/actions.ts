import {
  ADD_PUBLICATION, FETCH_PUBLICATION_FAILURE, FETCH_PUBLICATION_REQUEST, FETCH_PUBLICATION_SUCCESS,
  FETCH_PUBLICATIONS_FAILURE,
  FETCH_PUBLICATIONS_REQUEST,
  FETCH_PUBLICATIONS_SUCCESS, POST_PUBLICATION_FAILURE, POST_PUBLICATION_REQUEST, POST_PUBLICATION_SUCCESS,
  REMOVE_PUBLICATION,
} from './actionTypes';
import {
  FetchPublicationFailure,
  FetchPublicationRequest, FetchPublicationRequestPayload,
  FetchPublicationsFailure,
  FetchPublicationsFailurePayload,
  FetchPublicationsRequest, FetchPublicationsSuccess,
  FetchPublicationsSuccessPayload, FetchPublicationSuccess,
  IAddPublicationAction,
  IRemovePublicationAction,
  IRemovePublicationPayload,
  ISetPublicationPayload, PostPublicationFailure, PostPublicationRequest, PostPublicationSuccess,
} from './types';

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

export const fetchPublicationsRequest = (): FetchPublicationsRequest => ({
  type: FETCH_PUBLICATIONS_REQUEST,
});

export const fetchPublicationsSuccess = (
  payload: FetchPublicationsSuccessPayload
): FetchPublicationsSuccess => ({
  type: FETCH_PUBLICATIONS_SUCCESS,
  payload,
});

export const fetchPublicationsFailure = (
  payload: FetchPublicationsFailurePayload
): FetchPublicationsFailure => ({
  type: FETCH_PUBLICATIONS_FAILURE,
  payload,
});

export const fetchPublicationRequest = (payload: FetchPublicationRequestPayload): FetchPublicationRequest => ({
  type: FETCH_PUBLICATION_REQUEST,
  payload
});

export const fetchPublicationSuccess = (
  payload: FetchPublicationsSuccessPayload
): FetchPublicationSuccess => ({
  type: FETCH_PUBLICATION_SUCCESS,
  payload,
});

export const fetchPublicationFailure = (
  payload: FetchPublicationsFailurePayload
): FetchPublicationFailure => ({
  type: FETCH_PUBLICATION_FAILURE,
  payload,
});

export const postPublicationRequest = (payload: FetchPublicationRequestPayload): PostPublicationRequest => ({
  type: POST_PUBLICATION_REQUEST,
  payload
});

export const postPublicationSuccess = (
  payload: FetchPublicationsSuccessPayload
): PostPublicationSuccess => ({
  type: POST_PUBLICATION_SUCCESS,
  payload,
});

export const postPublicationFailure = (
  payload: FetchPublicationsFailurePayload
): PostPublicationFailure => ({
  type: POST_PUBLICATION_FAILURE,
  payload,
});

export const publicationsActions = {
  addPublication,
  removePublication
}
