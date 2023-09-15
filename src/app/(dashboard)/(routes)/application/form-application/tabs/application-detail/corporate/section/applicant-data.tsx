"use client";
import React from "react";

import {useAtom} from "jotai";
import debounce from "lodash/debounce";
import toNumber from "lodash/toNumber";
import {
  type FieldErrors,
  useController,
  type UseFormGetValues,
  type UseFormRegister,
} from "react-hook-form";
import Select from "react-select";

import FormItem from "~/components/form";
import {Input, InputNumber, Text} from "~/components/ui";
import {
  mitraListSearchAtom,
  selectedMitraIdAtom,
} from "~/state/formApplication";

import type {Control, FieldValues} from "react-hook-form";
import type {SingleValue} from "react-select";
import type {DetailApplicationCorporateType} from "~/interfaces/form/detailApplication";
import type {Partner} from "~/interfaces/services/finance";
import type {PartnerResult} from "~/interfaces/services/partner/list";

const ApplicantDataSection = ({
  errors,
  register,
  getValues,
  mitraData,
  isLoadingMitra,
  dataPartner,
  control,
}: {
  register: UseFormRegister<DetailApplicationCorporateType>;
  errors: FieldErrors<DetailApplicationCorporateType>;
  getValues: UseFormGetValues<DetailApplicationCorporateType>;
  mitraData?: PartnerResult[];
  isLoadingMitra?: boolean;
  dataPartner?: Partner;
  control: Control<FieldValues>;
}) => {
  const {field: mitraField} = useController({control, name: "partner_id"});
  const {field: numberOfEmployee} = useController({
    control,
    name: "number_of_employees",
  });

  const [, setMitraListSearch] = useAtom(mitraListSearchAtom);
  const [, setSelectedMitraId] = useAtom(selectedMitraIdAtom);

  const handleChangeMitraId = (
    eventChange: SingleValue<{
      value: string;
      label: string;
    }>,
  ) => {
    mitraField.onChange(eventChange?.value);
    setSelectedMitraId(eventChange?.value as string);
  };

  const handleSearchMitra = debounce((search: string) => {
    setMitraListSearch(search);
  }, 1500);

  return (
    <div className="mt-5 flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Data Pemohon
      </Text>

      <FormItem
        label="ID Mitra"
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        error={errors.partner_id}
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Select
          className="react-select"
          isLoading={isLoadingMitra}
          theme={(theme) => ({
            ...theme,
            borderRadius: 8,
          })}
          defaultValue={
            dataPartner
              ? {
                  value: dataPartner?.partner_id,
                  label: `${dataPartner?.no_registration} - ${dataPartner?.company_name}`,
                }
              : null
          }
          styles={{
            menu: (provided) => ({...provided, zIndex: 9999}),
          }}
          placeholder=""
          onInputChange={handleSearchMitra}
          onChange={handleChangeMitraId}
          components={{IndicatorSeparator: null}}
          options={mitraData?.map((mitra) => ({
            value: mitra.uuid,
            label: `${mitra.no_registration} - ${mitra.company_name}`,
          }))}
        />
      </FormItem>

      <FormItem
        label="Nama Pemohon"
        error={errors.applicant_name}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          disabled
          autoComplete="off"
          isError={!!errors.applicant_name}
          {...register("applicant_name")}
        />
      </FormItem>
      <FormItem
        label="Nama Perusahaan"
        error={errors.company_name}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          disabled
          isError={!!errors.company_name}
          {...register("company_name")}
        />
      </FormItem>
      <FormItem
        label="NPWP Pemohon"
        error={errors.applicant_npwp}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          isError={!!errors.applicant_npwp}
          {...register("applicant_npwp")}
        />
      </FormItem>
      <FormItem
        label="NPWP Perusahaan"
        error={errors.company_npwp}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          disabled
          isError={!!errors.company_npwp}
          {...register("company_npwp")}
        />
      </FormItem>
      <FormItem
        label="Bidang Usaha"
        error={errors.business_fields}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          disabled
          min={0}
          isError={!!errors.business_fields}
          {...register("business_fields")}
        />
      </FormItem>
      <FormItem
        label="No. Telepon Kantor"
        error={errors.no_telp}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          disabled
          min={0}
          isError={!!errors.no_telp}
          {...register("no_telp")}
        />
      </FormItem>
      <FormItem
        label="Alamat Email"
        error={errors.email}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          disabled
          type="email"
          isError={!!errors.email}
          {...register("email")}
        />
      </FormItem>
      <FormItem
        label="Jumlah Karyawan"
        error={errors.number_of_employees}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <InputNumber
          min={0}
          type="number"
          defaultValue={toNumber(getValues("number_of_employees"))}
          onChangeValue={(value) => numberOfEmployee.onChange(toNumber(value))}
          isError={!!errors.number_of_employees}
        />
      </FormItem>
    </div>
  );
};

export default ApplicantDataSection;
