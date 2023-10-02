import {useMutation, type UseMutationResult} from "@tanstack/react-query";

import {baseApiUrl} from "~/constants/globals";
import customAxios from "~/utils/client";

import type {AxiosError} from "axios";
import type {
  FinancingLoanBodyParams,
  FinancingLoanResponseData,
  InsertFinancingResponse,
} from "~/interfaces/services/loan";

const handleInsertFinancingLoan = async (
  params: FinancingLoanBodyParams,
): Promise<FinancingLoanResponseData> => {
  const response = await customAxios.post<InsertFinancingResponse>(
    `${baseApiUrl}/v1/financing/loan`,
    params,
  );

  return response.data.data;
};

const useInsertFinancingLoan = (
  extraParams = {},
): UseMutationResult<
  FinancingLoanResponseData,
  AxiosError,
  FinancingLoanBodyParams,
  () => void
> => {
  return useMutation<
    FinancingLoanResponseData,
    AxiosError,
    FinancingLoanBodyParams,
    () => void
  >((params: FinancingLoanBodyParams) => handleInsertFinancingLoan(params), {
    ...extraParams,
  });
};

export {useInsertFinancingLoan};
