import {useQuery} from "@tanstack/react-query";

import customAxios from "~/utils/client";

import type {UseQueryResult} from "@tanstack/react-query";
import type {AxiosError} from "axios";
import type {PaginateType} from "~/interfaces/components/pagination";
import type {
  DataInventory,
  InventoryResponse,
} from "~/interfaces/services/inventory";

const getInventoryList = async (
  params: PaginateType,
): Promise<DataInventory> => {
  const response = await customAxios.post<InventoryResponse>(
    `/v1/stock-inventory/list`,
    params,
  );

  return response.data.data;
};

const useGetInventoryList = (
  params: PaginateType,
  extraParams = {},
): UseQueryResult<DataInventory, AxiosError> => {
  return useQuery<DataInventory, AxiosError>(
    ["inventoryList", params],
    () => getInventoryList(params),
    {
      ...extraParams,
    },
  );
};

export {useGetInventoryList};
