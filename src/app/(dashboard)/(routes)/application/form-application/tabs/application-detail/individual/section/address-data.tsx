import React from "react";

import FormItem from "~/components/form";
import {Input, InputTextArea, Text} from "~/components/ui";

import type {FieldErrors, UseFormRegister} from "react-hook-form";
import type {DetailApplicationIndividualType} from "~/interfaces/form/detailApplication";

const AddressData = ({
  errors,
  register,
}: {
  register: UseFormRegister<DetailApplicationIndividualType>;
  errors: FieldErrors<DetailApplicationIndividualType>;
}) => {
  return (
    <div className="mt-5 flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Alamat Lengkap (Sesuai KTP)
      </Text>
      <FormItem
        label="Alamat Lengkap"
        error={errors.address}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <InputTextArea isError={!!errors.address} {...register(`address`)} />
      </FormItem>
      <FormItem
        label="Provinsi"
        error={errors.province}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className={`block w-full rounded-lg border ${
              errors.province ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register(`province`)}
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
        error={errors.city}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className={`block w-full rounded-lg border ${
              errors.city ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register(`city`)}
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
        error={errors.district}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className={`block w-full rounded-lg border ${
              errors.district ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register(`district`)}
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
        label="Kode Pos"
        error={errors.postal_code}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input {...register(`postal_code`)} isError={!!errors.postal_code} />
      </FormItem>
    </div>
  );
};

export default AddressData;
