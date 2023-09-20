import {Disclosure} from "@headlessui/react";
import {useForm} from "react-hook-form";

import CollapseComponent from "~/app/(dashboard)/(routes)/application/components/collapse-component";
import InputDisplay from "~/app/(dashboard)/(routes)/application/components/input-display";
import FormItem from "~/components/form";
import ControllerWrapper from "~/components/form/Controller";
import {Icon, InputNumber, Text} from "~/components/ui";
import DisplayImage from "~/components/ui/Upload/DisplayImage";

import WarehouseData from "../../../form-application/tabs/confirmation/section/global/warehouse-data";

import type {FieldError} from "react-hook-form";
import type {FinanceResponseData} from "~/interfaces/services/finance";

const ItemValuationDetails: React.FC<{
  financeData?: FinanceResponseData;
}> = ({financeData}) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<{appraisalItems?: {quantity?: number; price?: number}[]}>({
    defaultValues: {
      appraisalItems: financeData?.items?.map((item) => ({
        quantity: item?.quantity as number,
        price: 0,
      })),
    },
  });

  const dataAppraisal = watch("appraisalItems");

  const handleSave = () => {};

  return (
    <CollapseComponent title="Rincian Penilaian Barang">
      <WarehouseData financeData={financeData} />
      {financeData?.items?.map((item, index) => (
        <Disclosure defaultOpen key={item?.id}>
          {({open}) => (
            <div className="w-ful mt-4">
              <Disclosure.Button className="flex w-full items-center justify-between bg-background p-3">
                <Text weight="semi-bold">Rincian Barang #{index + 1}</Text>
                <Icon name={open ? "up-solid" : "down-solid"} size="13px" />
              </Disclosure.Button>
              <Disclosure.Panel className="mt-5 flex flex-col gap-5 pl-4">
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
                <form
                  className="flex flex-col gap-5"
                  onSubmit={handleSubmit(handleSave)}>
                  <FormItem
                    label="Kuantitas"
                    error={
                      errors.appraisalItems?.[index]?.quantity as FieldError
                    }
                    className="flex flex-col gap-4 md:flex-row"
                    childClassName="w-full"
                    labelClassName="md:min-w-[250px] lg:min-w-[250px]">
                    <ControllerWrapper
                      fieldName={`appraisalItems.${index}.quantity`}
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
                    error={errors.appraisalItems?.[index]?.price}
                    className="flex flex-col gap-4 md:flex-row"
                    childClassName="w-full"
                    labelClassName="md:min-w-[250px] lg:min-w-[250px]">
                    <ControllerWrapper
                      fieldName={`appraisalItems.${index}.price`}
                      control={control}>
                      {({onChange, value, onBlur}) => {
                        return (
                          <InputNumber
                            isError={!!errors.appraisalItems?.[index]?.price}
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
                </form>
                <InputDisplay
                  label="Total Nilai"
                  value={Number(
                    (dataAppraisal?.[index]?.quantity ?? 0) *
                      (dataAppraisal?.[index]?.price ?? 0),
                  ).toLocaleString()}
                />
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </CollapseComponent>
  );
};

export default ItemValuationDetails;
