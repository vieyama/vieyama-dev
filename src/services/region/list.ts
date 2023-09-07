import {useQuery} from "@tanstack/react-query";

import customAxios from "~/utils/client";

import type {UseQueryResult} from "@tanstack/react-query";
import type {AxiosError} from "axios";
import type {PaginateType} from "~/interfaces/components/pagination";
import type {
  RegionData,
  RegionListResponse,
} from "~/interfaces/services/region";

const getRegionList = async (params: PaginateType): Promise<RegionData> => {
  const {url, ...result} = params;
  const response = await customAxios.post<RegionListResponse>(
    `/v1/${url}/list`,
    result,
  );

  return response.data.data;
};

const useGetRegionList = (
  params: PaginateType,
  extraParams = {},
): UseQueryResult<RegionData, AxiosError> => {
  return useQuery<RegionData, AxiosError>(
    ["regionList", params],
    () => getRegionList(params),
    {
      ...extraParams,
    },
  );
};

export {useGetRegionList};
