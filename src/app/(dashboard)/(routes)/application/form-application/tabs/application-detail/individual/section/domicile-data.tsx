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
        Alamat Domisili
      </Text>

      <FormItem
        label="Alamat Lengkap"
        error={errors.domicile_address}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <InputTextArea
          disabled
          isError={!!errors.domicile_address}
          {...register(`domicile_address`)}
        />
      </FormItem>

      <FormItem
        label="Provinsi"
        error={errors.domicile_province_id}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          disabled
          {...register("domicile_province_name")}
          isError={!!errors.domicile_province_name}
        />
      </FormItem>

      <FormItem
        label="Kota"
        error={errors.domicile_city_id}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          disabled
          {...register("domicile_city_name")}
          isError={!!errors.domicile_city_name}
        />
      </FormItem>
      <FormItem
        label="Kecamatan"
        error={errors.domicile_district_id}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          disabled
          {...register("domicile_district_name")}
          isError={!!errors.domicile_district_name}
        />
      </FormItem>

      <FormItem
        label="Kode Pos"
        error={errors.domicile_postal_code}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          type="number"
          disabled
          {...register(`domicile_postal_code`)}
          isError={!!errors.domicile_postal_code}
        />
      </FormItem>
    </div>
  );
};

export default AddressData;
