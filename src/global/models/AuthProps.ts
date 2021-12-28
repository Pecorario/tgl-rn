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
}
