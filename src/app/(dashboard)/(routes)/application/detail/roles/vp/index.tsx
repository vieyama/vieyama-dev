import React from "react";

import {Disclosure} from "@headlessui/react";
import {useAtom} from "jotai";

import {Icon, Text} from "~/components/ui";
import DisplayImage from "~/components/ui/Upload/DisplayImage";
import {authUserAtom} from "~/state/userAuth";

import InputDisplay from "../../../components/input-display";
import ApplicantInformation from "../../section/applicant-information";
import ApplicationInformation from "../../section/application-information";
import AppraisalNotes from "../../section/appraisal-notes";
import VPRecommendation from "../../section/vp-recommendation";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const VPSection: React.FC<{
  financeData?: FinanceResponseData;
}> = ({financeData}) => {
  const [authUser] = useAtom(authUserAtom);
  const roleId = authUser?.role?.id;

  return (
    <>
      <ApplicantInformation
        roleId={roleId as number}
        financeData={financeData}
      />
      <ApplicationInformation financeData={financeData} />
      <div className="mt-4 bg-white p-5.5">
        {financeData?.items?.map((item, index) => (
          <Disclosure defaultOpen key={item?.id}>
            {({open}) => (
              <div className="w-full">
                <Disclosure.Button className="flex w-full items-center justify-between border border-stroke bg-blue-50 p-3">
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
      <AppraisalNotes financeData={financeData} />
      <VPRecommendation financeData={financeData} />
    </>
  );
};

export default VPSection;
