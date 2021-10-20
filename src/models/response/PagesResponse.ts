import { IUser } from '../../store/user/types';

export interface PagesResponse {
  access_token: string;
  refresh_token: string;
  user: IUser
}

