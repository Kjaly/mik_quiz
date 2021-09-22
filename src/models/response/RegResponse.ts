import { IUser } from '../../store/user/types';

export interface AuthResponse {
  access_token:string;
  refresh_token:string;
  user: IUser
}
