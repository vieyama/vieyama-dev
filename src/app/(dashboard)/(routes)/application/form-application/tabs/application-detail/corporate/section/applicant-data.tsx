"use client";
import React from "react";

import {businessFieldList} from "~/app/(dashboard)/(routes)/application/constants";
import FormItem from "~/components/form";
import {AutoComplete, Input, Text} from "~/components/ui";
import {phoneCodeIndonesia} from "~/constants/dialPhones";

import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import type {DetailApplicationCorporateType} from "~/interfaces/form/detailApplication";

const ApplicantDataSection = ({
  errors,
  register,
  setValue,
}: {
  register: UseFormRegister<DetailApplicationCorporateType>;
  errors: FieldErrors<DetailApplicationCorporateType>;
  setValue: UseFormSetValue<DetailApplicationCorporateType>;
}) => {
  const people = [
    {id: "1", value: "mitra ID 1"},
    {id: "2", value: "mitra ID 2"},
    {id: "3", value: "mitra ID 3"},
    {id: "4", value: "mitra ID 4"},
    {id: "5", value: "mitra ID 5"},
  ];

  const handleChangeMitraId = (id: string) => {
    const selected = people.find((data) => data.id === id);
    setValue("partner_id", selected?.value);
  };
  return (
    <div className="mt-5 flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Data Pemohon
      </Text>

      <FormItem
        label="ID Mitra"
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <AutoComplete options={people} onChange={handleChangeMitraId} />
      </FormItem>

      <FormItem
        label="Nama Pemohon"
        error={errors.applicant_name}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
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
        <Input isError={!!errors.company_name} {...register("company_name")} />
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
        <Input isError={!!errors.company_npwp} {...register("company_npwp")} />
      </FormItem>
      <FormItem
        label="Bidang Usaha"
        error={errors.business_fields}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className={`block w-full rounded-lg border ${
              errors.business_fields ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("business_fields")}
            defaultValue=""
            placeholder="Bidang Usaha">
            <option value="">Pilih Bidang Usaha</option>
            {businessFieldList.map((business) => (
              <option key={business} value={business}>
                {business}
              </option>
            ))}
          </select>
        </div>
      </FormItem>
      <FormItem
        label="No. Telepon Kantor"
        error={errors.no_telp}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex items-center gap-x-4">
          <select
            className={`block w-28 rounded-lg border ${
              errors.phoneCode ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("phoneCode")}
            defaultValue="021"
            placeholder="No. Telepon Kantor">
            <option value="021">021</option>
            {phoneCodeIndonesia.map((dial) => (
              <option key={dial.id} value={dial.id}>
                {dial.id}
              </option>
            ))}
          </select>
          <Input
            type="number"
            min={0}
            isError={!!errors.no_telp}
            {...register("no_telp")}
          />
        </div>
      </FormItem>
      <FormItem
        label="Alamat Email"
        error={errors.email}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input type="email" isError={!!errors.email} {...register("email")} />
      </FormItem>
      <FormItem
        label="Jumlah Karyawan"
        error={errors.number_of_employees}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          min={0}
          type="number"
          isError={!!errors.number_of_employees}
          {...register("number_of_employees")}
        />
      </FormItem>
    </div>
  );
};

export default ApplicantDataSection;
