import {
  DELETE_PUBLICATION_FAILURE,
  DELETE_PUBLICATION_REQUEST,
  DELETE_PUBLICATION_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_PUBLICATION_FAILURE,
  FETCH_PUBLICATION_REQUEST,
  FETCH_PUBLICATION_SUCCESS,
  FETCH_PUBLICATIONS_FAILURE,
  FETCH_PUBLICATIONS_REQUEST,
  FETCH_PUBLICATIONS_SUCCESS,
  POST_PUBLICATION_FAILURE,
  POST_PUBLICATION_REQUEST,
  POST_PUBLICATION_SUCCESS,
  REMOVE_PUBLICATION_IMG,
  UPDATE_PUBLICATION_FAILURE,
  UPDATE_PUBLICATION_REQUEST,
  UPDATE_PUBLICATION_SUCCESS,
} from './actionTypes';
import {
  DeletePublicationFailure,
  DeletePublicationRequest,
  DeletePublicationSuccess,
  FetchCategoriesFailure,
  FetchCategoriesRequest,
  FetchCategoriesSuccess,
  FetchCategoriesSuccessPayload,
  FetchPublicationFailure,
  FetchPublicationRequest,
  FetchPublicationRequestPayload,
  FetchPublicationsFailure,
  FetchPublicationsFailurePayload,
  FetchPublicationsRequest,
  FetchPublicationsRequestPayload,
  FetchPublicationsSuccess,
  FetchPublicationsSuccessPayload,
  FetchPublicationSuccess,
  PostPublicationsFailure,
  PostPublicationsRequest,
  PostPublicationsSuccess,
  RemovePublicationImg,
  RemovePublicationImgPayload,
  UpdatePublicationFailure,
  UpdatePublicationRequest,
  UpdatePublicationRequestPayload,
  UpdatePublicationSuccess,
} from './types';


export const fetchPublicationsRequest = (payload: FetchPublicationsRequestPayload): FetchPublicationsRequest => ({
  type: FETCH_PUBLICATIONS_REQUEST,
  payload,
});

export const fetchPublicationsSuccess = (
  payload: FetchPublicationsSuccessPayload,
): FetchPublicationsSuccess => ({
  type: FETCH_PUBLICATIONS_SUCCESS,
  payload,
});

export const fetchPublicationsFailure = (
  payload: FetchPublicationsFailurePayload,
): FetchPublicationsFailure => ({
  type: FETCH_PUBLICATIONS_FAILURE,
  payload,
});

export const fetchPublicationRequest = (payload: FetchPublicationRequestPayload): FetchPublicationRequest => ({
  type: FETCH_PUBLICATION_REQUEST,
  payload,
});

export const fetchPublicationSuccess = (
  payload: FetchPublicationsSuccessPayload,
): FetchPublicationSuccess => ({
  type: FETCH_PUBLICATION_SUCCESS,
  payload,
});

export const fetchPublicationFailure = (
  payload: FetchPublicationsFailurePayload,
): FetchPublicationFailure => ({
  type: FETCH_PUBLICATION_FAILURE,
  payload,
});


export const fetchCategoriesRequest = (): FetchCategoriesRequest => ({
  type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesSuccess = (
  payload: FetchCategoriesSuccessPayload,
): FetchCategoriesSuccess => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload,
});

export const fetchCategoriesFailure = (
  payload: FetchPublicationsFailurePayload,
): FetchCategoriesFailure => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload,
});

export const postPublicationsRequest = (payload: UpdatePublicationRequestPayload): PostPublicationsRequest => ({
  type: POST_PUBLICATION_REQUEST,
  payload,
});

export const postPublicationsSuccess = (
  payload: FetchPublicationsSuccessPayload,
): PostPublicationsSuccess => ({
  type: POST_PUBLICATION_SUCCESS,
  payload,
});

export const postPublicationsFailure = (
  payload: FetchPublicationsFailurePayload,
): PostPublicationsFailure => ({
  type: POST_PUBLICATION_FAILURE,
  payload,
});


export const deletePublicationRequest = (payload: FetchPublicationRequestPayload): DeletePublicationRequest => ({
  type: DELETE_PUBLICATION_REQUEST,
  payload,
});

export const deletePublicationSuccess = (
  payload: FetchPublicationsSuccessPayload,
): DeletePublicationSuccess => ({
  type: DELETE_PUBLICATION_SUCCESS,
  payload,
});

export const deletePublicationFailure = (
  payload: FetchPublicationsFailurePayload,
): DeletePublicationFailure => ({
  type: DELETE_PUBLICATION_FAILURE,
  payload,
});

export const updatePublicationRequest = (payload: UpdatePublicationRequestPayload): UpdatePublicationRequest => ({
  type: UPDATE_PUBLICATION_REQUEST,
  payload,
});

export const updatePublicationSuccess = (
  payload: FetchPublicationsSuccessPayload,
): UpdatePublicationSuccess => ({
  type: UPDATE_PUBLICATION_SUCCESS,
  payload,
});

export const updatePublicationFailure = (
  payload: FetchPublicationsFailurePayload,
): UpdatePublicationFailure => ({
  type: UPDATE_PUBLICATION_FAILURE,
  payload,
});

export const removePublicationImgRequest = (payload: RemovePublicationImgPayload): RemovePublicationImg => ({
  type: REMOVE_PUBLICATION_IMG,
  payload,
});
