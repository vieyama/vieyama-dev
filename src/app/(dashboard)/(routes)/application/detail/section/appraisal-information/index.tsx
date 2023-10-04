import {Disclosure} from "@headlessui/react";
import dayjs from "dayjs";

import {Icon, Text} from "~/components/ui";
import DisplayImage from "~/components/ui/Upload/DisplayImage";

import InputDisplay from "../../../components/input-display";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const AppraisalInformation = ({
  financeData,
}: {
  financeData?: FinanceResponseData;
}) => {
  return (
    <div className="flex flex-col gap-3.5 bg-white p-5">
      <Text
        weight="semi-bold"
        variant="sub-header-2"
        className="mb-3.5 text-blue-600">
        Informasi Penilaian
      </Text>
      <InputDisplay
        label="Nomor Penilaian"
        value={financeData?.qc_number ?? ""}
      />
      <InputDisplay
        label="Penangung Jawab Penilaian"
        value={financeData?.qc?.name ?? ""}
      />
      <InputDisplay
        label="Tanggal dan waktu Penilaian"
        value={`${dayjs(financeData?.admin_submitted_at).format(
          "DD / MMMM / YYYY H:mm",
        )} WIB`}
      />
      <div className="mt-4">
        {financeData?.items?.map((item, index) => (
          <Disclosure defaultOpen key={item?.id}>
            {({open}) => (
              <div className="w-full">
                <Disclosure.Button className="flex w-full items-center justify-between border border-stroke bg-background p-1.5">
                  <Text weight="semi-bold">Rincian Barang #{index + 1}</Text>
                  <Icon name={open ? "up-solid" : "down-solid"} size="13px" />
                </Disclosure.Button>
                <Disclosure.Panel className="mt-5 flex flex-col gap-5">
                  {item?.photos ? (
                    <div className="flex gap-5">
                      {item?.photos?.map((file, index) => (
                        <DisplayImage
                          index={index}
                          allowEmpty={false}
                          key={file}
                          fileId={file}
                        />
                      ))}
                    </div>
                  ) : null}
                  <InputDisplay
                    label="Nama Barang"
                    value={item?.batch?.product?.name ?? ""}
                  />
                  <InputDisplay
                    label="Nomor SKU"
                    value={item?.batch?.sku?.SKU ?? ""}
                  />
                  <InputDisplay
                    label="Pilihan Stok"
                    value={
                      item?.selected_stock === "all" ? "Semua" : "Parsial Stok"
                    }
                  />
                  <InputDisplay
                    label="Nomor Batch"
                    value={item?.batch?.batch_number ?? ""}
                  />
                  <InputDisplay
                    label="Kuantitas"
                    value={item?.quantity ?? ""}
                  />
                  <InputDisplay
                    label="Harga pokok penjualan"
                    value={item?.qc_hpp ?? ""}
                  />

                  <InputDisplay
                    label="Total Nilai"
                    value={Number(
                      (item?.quantity ?? 0) * (item?.qc_hpp ?? 0),
                    ).toLocaleString()}
                  />
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default AppraisalInformation;
