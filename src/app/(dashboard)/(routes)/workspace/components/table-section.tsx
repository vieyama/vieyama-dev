import React from "react";

import {Button, Icon} from "~/components/ui";

const TableSection = () => {
  return (
    <div className="relative mt-6 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Perusahaan
            </th>
            <th scope="col" className="px-6 py-3">
              Tipe Mitra
            </th>
            <th scope="col" className="px-6 py-3">
              Nama Pemohon
            </th>
            <th scope="col" className="px-6 py-3">
              No. Pendaftaraan
            </th>
            <th scope="col" className="px-6 py-3">
              Tipe
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
          {[...Array(10)].map((u, key) => (
            <tr
              key={key}
              className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <td className="px-6 py-4">{key + 1}</td>
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 text-gray-900">
                PT Chana Global Agridaya
              </th>
              <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                Individual
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                Bambang Sutisna
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                FAP-16842564
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                Inventory
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                Pending Appraisal Inventory
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-center text-gray-900">
                <Button variant="transparent" size="icon">
                  <Icon name="eyes" size={20} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSection;
