import {useMutation} from "@tanstack/react-query";
import axios from "axios";

import {baseApiUrl} from "~/constants/globals";

import type {UseMutationResult} from "@tanstack/react-query";
import type {AxiosError} from "axios";
import type {
  AuthLoginResponse,
  AuthUserData,
} from "~/interfaces/services/auth/login";

const handleGetAuthUser = async (): Promise<AuthUserData> => {
  const response = await axios.get<AuthLoginResponse>(`${baseApiUrl}/v1/auth`);

  return response.data.data;
};

const useGetAuthUser = (
  extraParams = {},
): UseMutationResult<AuthUserData, AxiosError, () => void> => {
  return useMutation<AuthUserData, AxiosError, () => void>(
    () => handleGetAuthUser(),
    {...extraParams},
  );
};

export {useGetAuthUser};
