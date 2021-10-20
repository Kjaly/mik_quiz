import { FETCH_PAGES_FAILURE, FETCH_PAGES_REQUEST, FETCH_PAGES_SUCCESS } from "./actionTypes";

interface IMeta {
  key:string,
  value:string | null
}

export interface IPage {
  content: string;
  created_at: string;
  id:string;
  is_visible: boolean;
  meta:Array<IMeta>
  name:string,
  slug:string,
  updated_at: string;
}

export interface IPagesState  {
  pagesList:IPage | null
  pending: boolean,
  errors: string | null,
  message: string | null,
}

export interface FetchPagesSuccessPayload {
  pagesList: Array<IPage>;
}
export interface FetchPagesRequestPayload {
  slug: string;
}


export interface FetchPagesFailurePayload {
  errors: Record<string, Array<string>>;
}

export interface FetchPagesRequest {
  type: typeof FETCH_PAGES_REQUEST;
  payload: FetchPagesRequestPayload;
}

export type FetchPagesSuccess = {
  type: typeof FETCH_PAGES_SUCCESS;
  payload: FetchPagesSuccessPayload;
};

export type FetchPagesFailure = {
  type: typeof FETCH_PAGES_FAILURE;
  payload: FetchPagesFailurePayload;
};


export type PagesActions =
  | FetchPagesRequest
  | FetchPagesSuccess
  | FetchPagesFailure
