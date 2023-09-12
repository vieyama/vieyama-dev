import {useQuery} from "@tanstack/react-query";

import customAxios from "~/utils/client";

import type {UseQueryResult} from "@tanstack/react-query";
import type {AxiosError} from "axios";
import type {PaginateType} from "~/interfaces/components/pagination";
import type {
  DataProducts,
  ProductsResponse,
} from "~/interfaces/services/product";

const getProductList = async (params: PaginateType): Promise<DataProducts> => {
  const response = await customAxios.post<ProductsResponse>(
    `/v1/product/list`,
    params,
  );

  return response.data.data;
};

const useGetProductList = (
  params: PaginateType,
  extraParams = {},
): UseQueryResult<DataProducts, AxiosError> => {
  return useQuery<DataProducts, AxiosError>(
    ["productList", params],
    () => getProductList(params),
    {
      ...extraParams,
    },
  );
};

export {useGetProductList};
