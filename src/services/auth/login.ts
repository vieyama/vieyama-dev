import {useMutation} from "@tanstack/react-query";
import axios from "axios";

import {baseApiUrl} from "~/constants/globals";

import type {UseMutationResult} from "@tanstack/react-query";
import type {AxiosError} from "axios";
import type {
  AuthLoginResponse,
  AuthUserData,
} from "~/interfaces/services/auth/login";

interface LoginParams {
  email: string;
  password: string;
}

const handleLogin = async (params: LoginParams): Promise<AuthUserData> => {
  const response = await axios.post<AuthLoginResponse>(
    `${baseApiUrl}/v1/auth`,
    params,
  );

  return response.data.data;
};

const useLogin = (
  extraParams = {},
): UseMutationResult<AuthUserData, AxiosError, LoginParams, () => void> => {
  return useMutation<AuthUserData, AxiosError, LoginParams, () => void>(
    (params: LoginParams) => handleLogin(params),
    {...extraParams},
  );
};

export {useLogin};
