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
import { UserState } from '../user/types';
import { TLink } from '../../models/response/PublicationsResponse';

export type TPublication = IPublicationRequestPayload

export type TCategory = {
  id: number,
  name: string,
  created_at: string,
  updated_at: string,
}

export interface IMeta {
  current_page: number,
  from: number,
  last_page: number,
  links: Array<TLink>,
  path: string,
  per_page: number,
  to: number,
  total: number,
}

export interface IPublicationsState {
  publicationsList: Array<TPublication> | null;
  categories: Array<TCategory> | null;
  meta: any;
}

export type TPhoto = {
  alt: string | null,
  created_at: string | null,
  description: string | null,
  extension: string,
  id: number,
  mime: string,
  name: string,
  original_name: string,
  size: number,
  url: string,
  user_id: number,

}

export interface IPublicationRequestPayload {
  category: number | null,
  created_at: string,
  updated_at: string,
  id: number,
  is_accepted: boolean,
  publication_category_id: number;
  type: number;
  photos_ids?: Array<number>;
  photos?: Array<TPhoto>;
  name?: string;
  description?: string;
  youtube_url?: string;
  user?: UserState,
}


export interface FetchPublicationsSuccessPayload {
  publications: Array<TPublication>;
  meta: IMeta;
}

export interface FetchPublicationsSuccessPayload {
  publications: Array<TPublication>;
  meta: IMeta;
}

export interface FetchCategoriesSuccessPayload {
  categories: Array<TCategory>;
}

export interface FetchPublicationsFailurePayload {
  errors: Record<string, Array<string>>;
}

export interface FetchPublicationRequestPayload {
  id: number;
  user_id?:number
}

export interface FetchPublicationsRequestPayload {
  size?: number
  category_id?: number
  user_id?:number
  type?:number
}

export interface UpdatePublicationRequestPayload {
  data: TPublication;
  user_id?:number
}

export interface RemovePublicationImgPayload {
  publicationsList: Array<TPublication>;
}

export interface FetchPublicationsRequest {
  type: typeof FETCH_PUBLICATIONS_REQUEST;
  payload: FetchPublicationsRequestPayload;
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
  payload: UpdatePublicationRequestPayload;
}

export type PostPublicationsSuccess = {
  type: typeof POST_PUBLICATION_SUCCESS;
  payload: FetchPublicationsSuccessPayload;
};

export type PostPublicationsFailure = {
  type: typeof POST_PUBLICATION_FAILURE;
  payload: FetchPublicationsFailurePayload;
};

export interface DeletePublicationRequest {
  type: typeof DELETE_PUBLICATION_REQUEST;
  payload: FetchPublicationRequestPayload;
}

export type DeletePublicationSuccess = {
  type: typeof DELETE_PUBLICATION_SUCCESS;
  payload: FetchPublicationsSuccessPayload;
};

export type DeletePublicationFailure = {
  type: typeof DELETE_PUBLICATION_FAILURE;
  payload: FetchPublicationsFailurePayload;
};


export interface UpdatePublicationRequest {
  type: typeof UPDATE_PUBLICATION_REQUEST;
  payload: UpdatePublicationRequestPayload;
}

export type UpdatePublicationSuccess = {
  type: typeof UPDATE_PUBLICATION_SUCCESS;
  payload: FetchPublicationsSuccessPayload;
};

export type UpdatePublicationFailure = {
  type: typeof UPDATE_PUBLICATION_FAILURE;
  payload: FetchPublicationsFailurePayload;
};
export type RemovePublicationImg = {
  type: typeof REMOVE_PUBLICATION_IMG;
  payload: RemovePublicationImgPayload;
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
  | DeletePublicationRequest
  | DeletePublicationSuccess
  | DeletePublicationFailure
  | UpdatePublicationRequest
  | UpdatePublicationSuccess
  | UpdatePublicationFailure
  | RemovePublicationImg
