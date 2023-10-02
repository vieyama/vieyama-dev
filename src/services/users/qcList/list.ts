import {useQuery} from "@tanstack/react-query";

import customAxios from "~/utils/client";

import type {UseQueryResult} from "@tanstack/react-query";
import type {AxiosError} from "axios";
import type {PaginateType} from "~/interfaces/components/pagination";
import type {DataQCList, QCListResponse} from "~/interfaces/services/users/qc";

const getQCList = async (params: PaginateType): Promise<DataQCList> => {
  const response = await customAxios.post<QCListResponse>(
    `/v1/user/list-qc`,
    params,
  );

  return response.data.data;
};

const useGetQCList = (
  params: PaginateType,
  extraParams = {},
): UseQueryResult<DataQCList, AxiosError> => {
  return useQuery<DataQCList, AxiosError>(
    ["qcList", params],
    () => getQCList(params),
    {
      ...extraParams,
    },
  );
};

export {useGetQCList};
