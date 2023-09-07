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
        <InputTextArea
          disabled
          isError={!!errors.address}
          {...register(`address`)}
        />
      </FormItem>
      <FormItem
        label="Provinsi"
        error={errors.province_name}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          disabled
          {...register("province_name")}
          isError={!!errors.province_name}
        />
      </FormItem>
      <FormItem
        label="Kota"
        error={errors.city_name}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          disabled
          {...register("city_name")}
          isError={!!errors.city_name}
        />
      </FormItem>
      <FormItem
        label="Kecamatan"
        error={errors.district_id}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          disabled
          {...register("district_id")}
          isError={!!errors.district_id}
        />
      </FormItem>

      <FormItem
        label="Kode Pos"
        error={errors.postal_code}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          disabled
          type="number"
          {...register(`postal_code`)}
          isError={!!errors.postal_code}
        />
      </FormItem>
    </div>
  );
};

export default AddressData;
