import {useMutation, useQuery} from "@tanstack/react-query";

import {baseApiUrl} from "~/constants/globals";
import customAxios from "~/utils/client";

import type {UseMutationResult, UseQueryResult} from "@tanstack/react-query";
import type {AxiosError} from "axios";
import type {PaginateType} from "~/interfaces/components/pagination";
import type {
  ApplicationDetailParams,
  DataFinances,
  FinanceResponseData,
  GetFinanceByIdResponse,
  GetFinanceResponse,
  InsertFinanceResponse,
} from "~/interfaces/services/finance";

const handleInsertApplicationFinance = async (
  params: ApplicationDetailParams,
): Promise<FinanceResponseData> => {
  const response = await customAxios.post<InsertFinanceResponse>(
    `${baseApiUrl}/v1/financing`,
    params,
  );

  return response.data.data;
};

const getFinancingList = async (
  params: PaginateType,
): Promise<DataFinances> => {
  const response = await customAxios.post<GetFinanceResponse>(
    `/v1/financing/list`,
    params,
  );

  return response.data.data;
};

const useGetFinancingList = (
  params: PaginateType,
  extraParams = {},
): UseQueryResult<DataFinances, AxiosError> => {
  return useQuery<DataFinances, AxiosError>(
    ["financingList", params],
    () => getFinancingList(params),
    {
      ...extraParams,
    },
  );
};

const getFinancingById = async (id: string): Promise<FinanceResponseData> => {
  const response = await customAxios.get<GetFinanceByIdResponse>(
    `/v1/financing/${id}`,
  );

  return response.data.data;
};

const useGetFinancingById = (
  id: string,
  extraParams = {},
): UseQueryResult<FinanceResponseData, AxiosError> => {
  return useQuery<FinanceResponseData, AxiosError>(
    ["financingById", id],
    () => getFinancingById(id),
    {
      ...extraParams,
    },
  );
};

const useInsertApplicationFinance = (
  extraParams = {},
): UseMutationResult<
  FinanceResponseData,
  AxiosError,
  ApplicationDetailParams,
  () => void
> => {
  return useMutation<
    FinanceResponseData,
    AxiosError,
    ApplicationDetailParams,
    () => void
  >(
    (params: ApplicationDetailParams) => handleInsertApplicationFinance(params),
    {
      ...extraParams,
    },
  );
};

export {useInsertApplicationFinance, useGetFinancingList, useGetFinancingById};
