import React from "react";

import FormItem from "~/components/form";
import {Input, InputTextArea, Text} from "~/components/ui";

import type {FieldErrors, UseFormRegister} from "react-hook-form";
import type {DetailApplicationType} from "~/interfaces/form/detailApplication";

const CompanyAddressData = ({
  errors,
  register,
}: {
  register: UseFormRegister<DetailApplicationType>;
  errors: FieldErrors<DetailApplicationType>;
}) => {
  return (
    <div className="mt-5 flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Alamat Perusahaan
      </Text>
      <FormItem
        label="Alamat Lengkap"
        error={errors.companyAddress}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <InputTextArea
          isError={!!errors.companyAddress}
          {...register("companyAddress")}
        />
      </FormItem>
      <FormItem
        label="Provinsi"
        error={errors.companyProvince}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className={`block w-full rounded-lg border ${
              errors.companyProvince ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("companyProvince")}
            defaultValue=""
            placeholder="Provinsi">
            <option value="">Pilih Provinsi</option>
            <option value="Jawa Tengah">Jawa Tengah</option>
            <option value="Jawa Barat">Jawa Barat</option>
            <option value="Jawa Timur">Jawa Timur</option>
          </select>
        </div>
      </FormItem>
      <FormItem
        label="Kota"
        error={errors.companyRegency}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className={`block w-full rounded-lg border ${
              errors.companyRegency ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("companyRegency")}
            defaultValue=""
            placeholder="Kota">
            <option value="">Pilih Kota</option>
            <option value="Jawa Tengah">Semarang</option>
            <option value="Jawa Barat">Surakarta</option>
            <option value="Jawa Timur">Banyumas</option>
          </select>
        </div>
      </FormItem>
      <FormItem
        label="Kecamatan"
        error={errors.companySubdistrict}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className={`block w-full rounded-lg border ${
              errors.companySubdistrict ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("companySubdistrict")}
            defaultValue=""
            placeholder="Kecamatan">
            <option value="">Pilih Kecamatan</option>
            <option value="Jawa Tengah">Semarang</option>
            <option value="Jawa Barat">Surakarta</option>
            <option value="Jawa Timur">Banyumas</option>
          </select>
        </div>
      </FormItem>
      <FormItem
        label="Kelurahan"
        error={errors.companyVillage}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className={`block w-full rounded-lg border ${
              errors.companyVillage ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("companyVillage")}
            defaultValue=""
            placeholder="Kelurahan">
            <option value="">Pilih Kelurahan</option>
            <option value="Jawa Tengah">Semarang</option>
            <option value="Jawa Barat">Surakarta</option>
            <option value="Jawa Timur">Banyumas</option>
          </select>
        </div>
      </FormItem>
      <FormItem
        label="Kode Pos"
        error={errors.companyPostalCode}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <Input
          {...register("companyPostalCode")}
          isError={!!errors.companyPostalCode}
        />
      </FormItem>
    </div>
  );
};

export default CompanyAddressData;
