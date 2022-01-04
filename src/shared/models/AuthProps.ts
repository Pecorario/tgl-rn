export interface UserProps {
  name?: string;
  email?: string;
  password?: string;
  token?: string;
}

export interface ResetPasswordProps {
  req: {
    password: string | undefined;
  };
  token: string | null;
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

export interface BodyReqTypeProps {
  data?: any;
  id?: number;
}

export interface ReqTypeProps {
  req?: {
    type: string;
    description: string;
    range: number;
    price: number;
    max_number: number;
    color: string;
  };
  id?: number;
}
