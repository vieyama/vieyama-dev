"use client";

import {useState} from "react";

import {useAtom} from "jotai";
import toNumber from "lodash/toNumber";
import Link from "next/link";

import {Button, Icon, TableSkeleton, Text} from "~/components/ui";
import {useGetFinancingList} from "~/services/finance";
import {financingListSearchAtom} from "~/state/workspace";

const TableSection = () => {
  const [financingListSearch] = useAtom(financingListSearchAtom);
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 10,
  });

  const {data, isLoading} = useGetFinancingList({
    page: pagination.page,
    per_page: pagination.perPage,
    search: financingListSearch,
  });

  return (
    <>
      <div className="relative mt-6 overflow-x-auto">
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <table className="w-full text-left text-base text-gray-500">
            <thead className="bg-gray-50 text-base text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  No. Pendaftaraan
                </th>
                <th scope="col" className="px-6 py-3">
                  Tipe Mitra
                </th>
                <th scope="col" className="px-6 py-3">
                  Perusahaan
                </th>
                <th scope="col" className="px-6 py-3">
                  Tipe Pembiayaan
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama Pemohon
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {(data?.results?.length || 0) > 0 ? (
                data?.results.map((data, key) => (
                  <tr
                    key={data.id}
                    className="border-b bg-white hover:bg-gray-50">
                    <td className="px-6 py-4">{key + 1}</td>
                    <td
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 text-gray-900">
                      {data.number}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-900 first-letter:uppercase">
                      {data.partner_type}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                      {!!data.company_name ? data.company_name : "-"}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                      {data.financing_type}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                      {data.applicant_name ?? "-"}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-900 first-letter:uppercase">
                      {data.status}
                    </td>
                    <td className="flex gap-2 px-6 py-4 text-start text-gray-900">
                      <Link
                        href={`/application/form-application?process=confirmation&type=${data.partner_type}&payment=${data.financing_type}&uuid=${data.uuid}&preview=true`}>
                        <Icon name="eyes" size={20} />
                      </Link>
                      <Button variant="transparent" size="icon">
                        <Icon name="download" size={20} />
                      </Button>
                      <Link
                        href={`/application/form-application?process=application-details&type=${data.partner_type}&payment=${data.financing_type}&uuid=${data.uuid}`}>
                        <Icon name="edit" size={20} />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <>
                  <tr className="text-center">
                    <td colSpan={8} className="py-10">
                      Data tidak ditemukan
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* pagination */}
      <div className="mt-5 flex justify-between">
        <div className="flex items-center gap-x-3">
          <Button
            disabled={
              data?.page === 1 ||
              data?.page === 0 ||
              (data?.results?.length || 0) <= 0
            }
            size="sm"
            variant="transparent"
            onClick={() =>
              setPagination({...pagination, page: pagination.page - 1})
            }
            className="p-1">
            <Icon name="cheveron-left" size={24} />
          </Button>
          <Text>Page</Text>
          <Text>{data?.page ?? 0}</Text>
          <Text>of</Text>
          <Text>{data?.total_pages ?? 0}</Text>
          <Button
            size="sm"
            variant="transparent"
            disabled={
              data?.page === data?.total_pages ||
              data?.page === 0 ||
              (data?.results?.length || 0) <= 0
            }
            onClick={() =>
              setPagination({...pagination, page: pagination.page + 1})
            }
            className="p-1">
            <Icon name="cheveron-right" size={24} />
          </Button>
        </div>
        <div className="flex items-center gap-x-3">
          <Text>Showing</Text>
          <select
            id="states"
            defaultValue={10}
            onChange={(e) =>
              setPagination({page: 1, perPage: toNumber(e.target.value)})
            }
            className="w-18 block rounded-lg border border-l-2 border-gray-300 border-l-gray-100 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500">
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={200}>200</option>
          </select>
          <Text>
            1 - {pagination.perPage} of {data?.count} items
          </Text>
        </div>
      </div>
    </>
  );
};

export default TableSection;
