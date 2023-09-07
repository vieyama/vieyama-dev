import {useQuery} from "@tanstack/react-query";

import customAxios from "~/utils/client";

import type {UseQueryResult} from "@tanstack/react-query";
import type {AxiosError} from "axios";
import type {PaginateType} from "~/interfaces/components/pagination";
import type {
  GetPartnerDetailResponse,
  PartnerDetailData,
} from "~/interfaces/services/partner/detail";
import type {
  DataPartnerList,
  GetPartnerListResponse,
} from "~/interfaces/services/partner/list";

const getPartnerList = async (
  params: PaginateType,
): Promise<DataPartnerList> => {
  const response = await customAxios.post<GetPartnerListResponse>(
    `/v1/partner/list`,
    params,
  );

  return response.data.data;
};

const getPartnerDetail = async (id: string): Promise<PartnerDetailData> => {
  const response = await customAxios.get<GetPartnerDetailResponse>(
    `/v1/partner/${id}`,
  );

  return response.data.data;
};

const useGetPartnerDetail = (
  id: string,
  extraParams = {},
): UseQueryResult<PartnerDetailData, AxiosError> => {
  return useQuery<PartnerDetailData, AxiosError>(
    ["partnerDetail", id],
    () => getPartnerDetail(id),
    {
      ...extraParams,
    },
  );
};

const useGetPartnerList = (
  params: PaginateType,
  extraParams = {},
): UseQueryResult<DataPartnerList, AxiosError> => {
  return useQuery<DataPartnerList, AxiosError>(
    ["partnerList", params],
    () => getPartnerList(params),
    {
      ...extraParams,
    },
  );
};

export {useGetPartnerList, useGetPartnerDetail};
