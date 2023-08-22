import React from "react";

import {Button, Icon, Text} from "~/components/ui";

const TableSection = () => {
  const paymentType = ["Inventory", "PO / Invoice"];
  const status = [
    "Pending Appraisal Inventory",
    "Pending Admin Screening",
    "Pending CA Screening",
    "Disbursed",
    "Approved",
    "Draf",
  ];

  return (
    <>
      <div className="relative mt-6 overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
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
            {[...Array(10)].map((u, key) => (
              <tr
                key={key}
                className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                <td className="px-6 py-4">{key + 1}</td>
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 text-gray-900">
                  FAP-{Math.floor(Math.random() * (50000000 - 0 + 1)) + 0}
                </th>
                <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                  {9 % (key + 1) == 0 ? "Individual" : "Corporate"}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                  {9 % (key + 1) == 0 ? "-" : "PT Chana Global Agridaya"}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                  {paymentType[Math.floor(Math.random() * paymentType.length)]}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                  Bambang Sutisna
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                  {status[Math.floor(Math.random() * status.length)]}
                </td>
                <td className="flex gap-2 px-6 py-4 text-start text-gray-900">
                  <Button variant="transparent" size="icon">
                    <Icon name="eyes" size={20} />
                  </Button>
                  <Button variant="transparent" size="icon">
                    <Icon name="download" size={20} />
                  </Button>
                  <Button variant="transparent" size="icon">
                    <Icon name="edit" size={20} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <div className="mt-5 flex justify-between">
        <div className="flex items-center gap-x-3">
          <Button size="sm" variant="transparent" className="p-1">
            <Icon name="cheveron-left" size={24} />
          </Button>
          <Text>Page</Text>
          <Text>1</Text>
          <Text>of</Text>
          <Text>4</Text>
          <Button size="sm" variant="transparent" className="p-1">
            <Icon name="cheveron-right" size={24} />
          </Button>
        </div>
        <div className="flex items-center gap-x-3">
          <Text>Showing</Text>
          <select
            id="states"
            className="w-18 block rounded-lg border border-l-2 border-gray-300 border-l-gray-100 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500">
            <option selected>5</option>
            <option value="CA">10</option>
            <option value="TX">25</option>
            <option value="VG">50</option>
            <option value="GE">100</option>
            <option value="GE">200</option>
          </select>
          <Text>1 - 5 of 20 items</Text>
        </div>
      </div>
    </>
  );
};

export default TableSection;
