import {Disclosure} from "@headlessui/react";

import InputDisplay from "~/app/(dashboard)/(routes)/application/components/input-display";
import FormItem from "~/components/form";
import ControllerWrapper from "~/components/form/Controller";
import {Icon, InputNumber, Text} from "~/components/ui";
import DisplayImage from "~/components/ui/Upload/DisplayImage";

import type {
  Control,
  FieldError,
  FieldErrors,
  FieldValues,
  UseFormWatch,
} from "react-hook-form";
import type {QCValuationType} from "~/interfaces/form/adminDetail";
import type {FinanceResponseData} from "~/interfaces/services/finance";

const ItemValuationDetails: React.FC<{
  financeData?: FinanceResponseData;
  watch: UseFormWatch<QCValuationType>;
  control: Control<FieldValues>;
  errors: FieldErrors<QCValuationType>;
}> = ({financeData, watch, control, errors}) => {
  const dataAppraisal = watch("appraisalItems");

  return (
    <div className="flex flex-col gap-3.5 bg-white p-6">
      <Text className="text-blue-600" weight="semi-bold">
        Rincian Penilaian Barang
      </Text>
      {financeData?.items?.map((item, index) => (
        <Disclosure defaultOpen key={item?.id}>
          {({open}) => (
            <div className="w-full">
              <Disclosure.Button className="flex w-full items-center justify-between border border-stroke p-1.5">
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
                <FormItem
                  label="Kuantitas"
                  error={
                    errors.appraisalItems?.[index]?.qc_quantity as FieldError
                  }
                  className="flex flex-col gap-4 md:flex-row"
                  childClassName="w-full"
                  labelClassName="md:min-w-[250px] lg:min-w-[250px]">
                  <ControllerWrapper
                    fieldName={`appraisalItems.${index}.qc_quantity`}
                    control={control}>
                    {({onChange, value, onBlur}) => {
                      return (
                        <InputNumber
                          className="text-end"
                          onChangeValue={onChange}
                          onBlur={onBlur}
                          defaultValue={value}
                          customSuffix={
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center rounded-e-lg bg-gray-200 px-4">
                              Kg
                            </div>
                          }
                        />
                      );
                    }}
                  </ControllerWrapper>
                </FormItem>
                <FormItem
                  label="Harga pokok penjualan"
                  error={errors.appraisalItems?.[index]?.qc_hpp}
                  className="flex flex-col gap-4 md:flex-row"
                  childClassName="w-full"
                  labelClassName="md:min-w-[250px] lg:min-w-[250px]">
                  <ControllerWrapper
                    fieldName={`appraisalItems.${index}.qc_hpp`}
                    control={control}>
                    {({onChange, value, onBlur}) => {
                      return (
                        <InputNumber
                          isError={!!errors.appraisalItems?.[index]?.qc_hpp}
                          onChangeValue={onChange}
                          onBlur={onBlur}
                          defaultValue={value}
                          className="pl-[98px]"
                          customPrefix={
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-s-lg bg-gray-200 px-4">
                              IDR / Kg
                            </div>
                          }
                        />
                      );
                    }}
                  </ControllerWrapper>
                </FormItem>
                <InputDisplay
                  label="Total Nilai"
                  value={Number(
                    (dataAppraisal?.[index]?.qc_quantity ?? 0) *
                      (dataAppraisal?.[index]?.qc_hpp ?? 0),
                  ).toLocaleString()}
                />
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
};

export default ItemValuationDetails;
