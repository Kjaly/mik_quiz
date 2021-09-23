import { IUser } from '../../store/user/types';

export interface ExpertsResponse {
  access_token: string;
  refresh_token: string;
  user: IUser
}

