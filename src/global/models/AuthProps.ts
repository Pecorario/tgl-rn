import { TypeProps } from '@models/GameProps';

export interface UserProps {
  name?: string;
  email?: string;
  password?: string;
  token?: string;
}

export interface AuthProps {
  user: {
    id: number;
    email: string;
    isAdmin: number;
    name: string;
    token: string;
  } | null;
  tokenPassword: string;
  message: string;
  loading: boolean;
  saved: boolean;
}

export interface UpdateTypeProps {
  data?: any;
  id?: number;
  token: string;
}
