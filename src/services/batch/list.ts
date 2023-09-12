import {useQuery} from "@tanstack/react-query";

import customAxios from "~/utils/client";

import type {UseQueryResult} from "@tanstack/react-query";
import type {AxiosError} from "axios";
import type {PaginateType} from "~/interfaces/components/pagination";
import type {BatchData, BatchResponse} from "~/interfaces/services/batch";

const getBatchList = async (params: PaginateType): Promise<BatchData> => {
  const response = await customAxios.post<BatchResponse>(
    `/v1/stock-batch/list`,
    params,
  );

  return response.data.data;
};

const useGetBatchList = (
  params: PaginateType,
  extraParams = {},
): UseQueryResult<BatchData, AxiosError> => {
  return useQuery<BatchData, AxiosError>(
    ["batchList", params],
    () => getBatchList(params),
    {
      ...extraParams,
    },
  );
};

export {useGetBatchList};
