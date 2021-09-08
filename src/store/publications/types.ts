import {
  ADD_PUBLICATION,
  REMOVE_PUBLICATION,
} from "./actionTypes";

interface IPublication {
  id: number;
  category: string;
  type: string;
  url:string;
}

export interface IPhotoPublication extends IPublication {
  files:Array<File>;
}
export interface IVideoPublication extends IPublication {
  title:string;
  description:string;
}

 export type TPublication = IPhotoPublication | IVideoPublication

export interface IPublicationsState {
  publications: Array<TPublication> | any;
}

export interface ISetPublicationPayload {
  publication: TPublication;
}

export interface IRemovePublicationPayload {
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

export type TPublicationsActions =
  | IAddPublicationAction
  | IRemovePublicationAction
