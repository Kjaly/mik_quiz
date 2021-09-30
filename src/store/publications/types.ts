import {
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

export type TCategory = {
  id:number,
  name:string,
  created_at:string,
  updated_at:string,
}

export interface IPublicationsState {
  publicationsList: Array<TPublication> | null;
  categories: Array<TCategory> | null;
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



export interface FetchPublicationsSuccessPayload {
  publications: Array<TPublication>;
}

export interface FetchCategoriesSuccessPayload {
  categories: Array<TCategory>;
}

export interface FetchPublicationsFailurePayload {
  errors: Record<string, Array<string>>;
}

export interface FetchPublicationRequestPayload {
  id: number;
}

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

export interface FetchCategoriesRequest {
  type: typeof FETCH_CATEGORIES_REQUEST;
}

export type FetchCategoriesSuccess = {
  type: typeof FETCH_CATEGORIES_SUCCESS;
  payload: FetchCategoriesSuccessPayload;
};

export type FetchCategoriesFailure = {
  type: typeof FETCH_CATEGORIES_FAILURE;
  payload: FetchPublicationsFailurePayload;
};


export interface PostPublicationsRequest {
  type: typeof POST_PUBLICATION_REQUEST;
  payload: IPublicationRequestPayload;
}

export type PostPublicationsSuccess = {
  type: typeof POST_PUBLICATION_SUCCESS;
  payload: FetchPublicationsSuccessPayload;
};

export type PostPublicationsFailure = {
  type: typeof POST_PUBLICATION_FAILURE;
  payload: FetchPublicationsFailurePayload;
};


export type TPublicationsActions =
  | FetchPublicationsRequest
  | FetchPublicationsSuccess
  | FetchPublicationsFailure
  | FetchPublicationRequest
  | FetchPublicationSuccess
  | FetchPublicationFailure
  | PostPublicationsRequest
  | PostPublicationsSuccess
  | PostPublicationsFailure
  | FetchCategoriesRequest
  | FetchCategoriesSuccess
  | FetchCategoriesFailure
