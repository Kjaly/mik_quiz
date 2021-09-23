import { FETCH_EXPERTS_FAILURE, FETCH_EXPERTS_REQUEST, FETCH_EXPERTS_SUCCESS } from "./actionTypes";


export interface IExpert {
  name: string;
  description: string;
  photo: { url:string };
}

export interface ExpertsState  {
  expertsList:Array<IExpert>
  pending: boolean,
  errors: string | null,
  message: string | null,
}

export interface FetchExpertsSuccessPayload {
  expertsList: Array<IExpert>;
}


export interface FetchExpertsFailurePayload {
  errors: Record<string, Array<string>>;
}

export interface FetchExpertsRequest {
  type: typeof FETCH_EXPERTS_REQUEST;
}

export type FetchExpertsSuccess = {
  type: typeof FETCH_EXPERTS_SUCCESS;
  payload: FetchExpertsSuccessPayload;
};

export type FetchExpertsFailure = {
  type: typeof FETCH_EXPERTS_FAILURE;
  payload: FetchExpertsFailurePayload;
};


export type ExpertsActions =
  | FetchExpertsRequest
  | FetchExpertsSuccess
  | FetchExpertsFailure
  