import {useQuery} from "@tanstack/react-query";

import customAxios from "~/utils/client";

import type {UseQueryResult} from "@tanstack/react-query";
import type {AxiosError} from "axios";
import type {
  WarehouseData,
  WerehouseResponse,
} from "~/interfaces/services/warehouse";

type ParamsType = {
  partner_id: string;
};

const getWarehouseList = async (
  params: ParamsType,
): Promise<WarehouseData[]> => {
  const response = await customAxios.post<WerehouseResponse>(
    `/v1/warehouse/list`,
    params,
  );

  return response.data.data?.map((item) => ({...item, label: item?.name}));
};

const useGetWarehouseList = (
  params: ParamsType,
  extraParams = {},
): UseQueryResult<WarehouseData[], AxiosError> => {
  return useQuery<WarehouseData[], AxiosError>(
    ["warehouseList", params],
    () => getWarehouseList(params),
    {
      ...extraParams,
    },
  );
};

export {useGetWarehouseList};
