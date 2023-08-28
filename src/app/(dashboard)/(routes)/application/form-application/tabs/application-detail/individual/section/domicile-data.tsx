import React, {useState} from "react";

import FormItem from "~/components/form";
import {Checkbox, Input, InputTextArea, Text} from "~/components/ui";

import type {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import type {DetailApplicationIndividualType} from "~/interfaces/form/detailApplication";

const AddressData = ({
  errors,
  register,
  getValues,
  setValue,
}: {
  register: UseFormRegister<DetailApplicationIndividualType>;
  errors: FieldErrors<DetailApplicationIndividualType>;
  getValues: UseFormGetValues<DetailApplicationIndividualType>;
  setValue: UseFormSetValue<DetailApplicationIndividualType>;
}) => {
  const [isDomicileSameWithKTP, setIsDomicileSameWithKTP] = useState(false);
  const handleCheckDomicleSameWithKTP = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const isChecked = event.target.checked;
    setIsDomicileSameWithKTP(isChecked);
    const addressData = getValues([
      "address",
      "province",
      "city",
      "district",
      "postal_code",
    ]);

    setValue("domicile_address", addressData?.[0]);
    setValue("domicile_province", addressData?.[1]);
    setValue("domicile_city", addressData?.[2]);
    setValue("domicile_district", addressData?.[3]);
    setValue("domicile_postal_code", addressData?.[4]);
  };
  return (
    <div className="mt-5 flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Alamat Domisili
      </Text>
      <FormItem
        error={undefined}
        className="flex flex-col gap-4 md:ml-[265px] md:flex-row lg:ml-[265px]"
        childClassName="w-full">
        <Checkbox onChange={handleCheckDomicleSameWithKTP}>
          Alamat Domisili Saya Sesuai Dengan KTP
        </Checkbox>
      </FormItem>
      <FormItem
        label="Alamat Lengkap"
        error={errors.domicile_address}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <InputTextArea
          disabled={isDomicileSameWithKTP}
          isError={!!errors.domicile_address}
          {...register(`domicile_address`)}
        />
      </FormItem>

      <FormItem
        label="Provinsi"
        error={errors.domicile_province}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            disabled={isDomicileSameWithKTP}
            className={`block w-full rounded-lg border ${
              errors.domicile_province ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register(`domicile_province`)}
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
        error={errors.domicile_city}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            disabled={isDomicileSameWithKTP}
            className={`block w-full rounded-lg border ${
              errors.domicile_city ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register(`domicile_city`)}
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
        error={errors.domicile_district}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            disabled={isDomicileSameWithKTP}
            className={`block w-full rounded-lg border ${
              errors.domicile_district ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register(`domicile_district`)}
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
        error={errors.domicile_postal_code}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          disabled={isDomicileSameWithKTP}
          {...register(`domicile_postal_code`)}
          isError={!!errors.domicile_postal_code}
        />
      </FormItem>
    </div>
  );
};

export default AddressData;
