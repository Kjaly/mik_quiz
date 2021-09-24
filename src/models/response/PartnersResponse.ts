import { IUser } from '../../store/user/types';

export interface PartnersResponse {
  access_token: string;
  refresh_token: string;
  user: IUser
}

