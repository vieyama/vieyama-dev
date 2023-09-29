export interface AuthData {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  id: number;
  client_id: string;
  wms_token: string;
  name: string;
  user: User;
  role: {name: string; id: number};
}

export interface AuthUserData extends AuthData {
  accessToken: string;
  accessTokenExpiresAt: Date;
  refreshToken: string;
  refreshTokenExpiresAt: Date;
  user_id: string;
  created: Date;
  updated: Date;
}

export interface User {
  id: number;
  user_id: string;
  username: string;
  fullname: null;
  email: string;
  country_code: null;
  mobile_no: null;
  reg_type: string;
  is_verify: boolean;
  created: Date;
  updated: Date;
}

export interface AuthLoginResponse {
  data: AuthUserData;
  message: string;
}
