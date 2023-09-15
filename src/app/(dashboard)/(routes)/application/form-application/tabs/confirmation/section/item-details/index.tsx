import {Disclosure} from "@headlessui/react";

import {Icon, Text} from "~/components/ui";
import DisplayImage from "~/components/ui/Upload/DisplayImage";

import CollapseComponent from "../../component/collapse-component";
import InputDisplay from "../../component/input-display";
import WarehouseData from "../global/warehouse-data";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const ItemDetails: React.FC<{
  financeData?: FinanceResponseData;
}> = ({financeData}) => {
  return (
    <CollapseComponent title="Rincian Barang">
      <WarehouseData financeData={financeData} />
      {financeData?.items?.map((item, index) => (
        <Disclosure defaultOpen key={item?.id}>
          {({open}) => (
            <div className="w-ful mt-4">
              <Disclosure.Button className="flex w-full items-center justify-between bg-background p-3">
                <Text weight="semi-bold">Rincian Barang #{index + 1}</Text>
                <Icon name={open ? "up-solid" : "down-solid"} size="13px" />
              </Disclosure.Button>
              <Disclosure.Panel className="mt-5 flex flex-col gap-5 px-4">
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
                  inputClassName="text-end"
                  value={`${
                    Number(item?.batch?.stock).toLocaleString() ?? ""
                  } Kg`}
                />
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </CollapseComponent>
  );
};

export default ItemDetails;
