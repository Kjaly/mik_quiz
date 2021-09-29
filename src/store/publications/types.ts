import {
  ADD_PUBLICATION,
  FETCH_PUBLICATION_FAILURE,
  FETCH_PUBLICATION_REQUEST,
  FETCH_PUBLICATION_SUCCESS,
  FETCH_PUBLICATIONS_FAILURE,
  FETCH_PUBLICATIONS_REQUEST,
  FETCH_PUBLICATIONS_SUCCESS,
  POST_PUBLICATION_FAILURE,
  POST_PUBLICATION_REQUEST,
  POST_PUBLICATION_SUCCESS,
  REMOVE_PUBLICATION,
} from './actionTypes';

interface IPublicationOLD {
  id: string;
  category: string;
  type: string;
  url: string;
}


export interface IPhotoPublication extends IPublicationOLD {
  files: Array<File>;
}

export interface IVideoPublication extends IPublicationOLD {
  title: string;
  description: string;
}

export type TPublication = IPhotoPublication | IVideoPublication

export interface IPublicationOLDsState {
  publications: Array<TPublication> | any;
}

export interface IPublicationRequestPayload {
  publication_category_id: number;
  type: number;
  photos_ids?: Array<number>;
  photos?: Array<File>;
  name?: string;
  description?: string;
  youtube_url?: string;
}

export interface ISetPublicationPayload {
  publication: TPublication;
}

export interface IRemovePublicationPayload {
  publications: Array<TPublication>;
}

export interface FetchPublicationsSuccessPayload {
  publications: Array<TPublication>;

}

export interface FetchPublicationsFailurePayload {
  errors: Record<string, Array<string>>;
}

export interface FetchPublicationRequestPayload {
  id: number;
}
export interface PostPublicationRequestPayload {
  id: number;
}


export type IAddPublicationAction = {
  type: typeof ADD_PUBLICATION;
  payload: ISetPublicationPayload;
};

export type IRemovePublicationAction = {
  type: typeof REMOVE_PUBLICATION;
  payload: IRemovePublicationPayload;
};


export interface FetchPublicationsRequest {
  type: typeof FETCH_PUBLICATIONS_REQUEST;
}

export type FetchPublicationsSuccess = {
  type: typeof FETCH_PUBLICATIONS_SUCCESS;
  payload: FetchPublicationsSuccessPayload;
};

export type FetchPublicationsFailure = {
  type: typeof FETCH_PUBLICATIONS_FAILURE;
  payload: FetchPublicationsFailurePayload;
};

export interface FetchPublicationRequest {
  type: typeof FETCH_PUBLICATION_REQUEST;
  payload: FetchPublicationRequestPayload;
}

export type FetchPublicationSuccess = {
  type: typeof FETCH_PUBLICATION_SUCCESS;
  payload: FetchPublicationsSuccessPayload;
};

export type FetchPublicationFailure = {
  type: typeof FETCH_PUBLICATION_FAILURE;
  payload: FetchPublicationsFailurePayload;
};

export interface PostPublicationRequest {
  type: typeof POST_PUBLICATION_REQUEST;
  payload: PostPublicationRequestPayload;
}

export type PostPublicationSuccess = {
  type: typeof POST_PUBLICATION_SUCCESS;
  payload: FetchPublicationsSuccessPayload;
};

export type PostPublicationFailure = {
  type: typeof POST_PUBLICATION_FAILURE;
  payload: FetchPublicationsFailurePayload;
};


export type TPublicationsActions =
  | IAddPublicationAction
  | IRemovePublicationAction
  | FetchPublicationsRequest
  | FetchPublicationsSuccess
  | FetchPublicationsFailure
  | FetchPublicationRequest
  | FetchPublicationSuccess
  | FetchPublicationFailure
  | PostPublicationRequest
  | PostPublicationSuccess
  | PostPublicationFailure
