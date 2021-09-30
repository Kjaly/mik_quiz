import {
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS,
  FETCH_PUBLICATION_FAILURE,
  FETCH_PUBLICATION_REQUEST,
  FETCH_PUBLICATION_SUCCESS,
  FETCH_PUBLICATIONS_FAILURE,
  FETCH_PUBLICATIONS_REQUEST,
  FETCH_PUBLICATIONS_SUCCESS,
  POST_PUBLICATION_FAILURE,
  POST_PUBLICATION_REQUEST,
  POST_PUBLICATION_SUCCESS,
} from './actionTypes';
import {
  FetchCategoriesFailure,
  FetchCategoriesRequest, FetchCategoriesSuccess,
  FetchCategoriesSuccessPayload,
  FetchPublicationFailure,
  FetchPublicationRequest,
  FetchPublicationRequestPayload,
  FetchPublicationsFailure,
  FetchPublicationsFailurePayload,
  FetchPublicationsRequest,
  FetchPublicationsSuccess,
  FetchPublicationsSuccessPayload,
  FetchPublicationSuccess,
  IPublicationRequestPayload,
  PostPublicationsFailure,
  PostPublicationsRequest,
  PostPublicationsSuccess,
} from './types';


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


export const fetchCategoriesRequest = (): FetchCategoriesRequest => ({
  type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesSuccess = (
  payload: FetchCategoriesSuccessPayload
): FetchCategoriesSuccess => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload,
});

export const fetchCategoriesFailure = (
  payload: FetchPublicationsFailurePayload
): FetchCategoriesFailure => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload,
});

export const postPublicationsRequest = (payload: IPublicationRequestPayload): PostPublicationsRequest => ({
  type: POST_PUBLICATION_REQUEST,
  payload
});

export const postPublicationsSuccess = (
  payload: FetchPublicationsSuccessPayload
): PostPublicationsSuccess => ({
  type: POST_PUBLICATION_SUCCESS,
  payload,
});

export const postPublicationsFailure = (
  payload: FetchPublicationsFailurePayload
): PostPublicationsFailure => ({
  type: POST_PUBLICATION_FAILURE,
  payload,
});
