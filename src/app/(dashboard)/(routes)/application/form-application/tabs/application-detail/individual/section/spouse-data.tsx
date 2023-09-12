import React from "react";

import {toNumber} from "lodash";

import FormItem from "~/components/form";
import {Input, InputNumber, Text} from "~/components/ui";

import type {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import type {DetailApplicationIndividualType} from "~/interfaces/form/detailApplication";

const SpouseDataSection = ({
  errors,
  register,
  setValue,
  getValues,
}: {
  register: UseFormRegister<DetailApplicationIndividualType>;
  errors: FieldErrors<DetailApplicationIndividualType>;
  setValue: UseFormSetValue<DetailApplicationIndividualType>;
  getValues: UseFormGetValues<DetailApplicationIndividualType>;
}) => {
  return (
    <div className="mt-5 flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Informasi Pasangan
      </Text>

      <FormItem
        label="Nama Lengkap (Sesuai KTP)"
        error={errors.spouse_name}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input isError={!!errors.spouse_name} {...register("spouse_name")} />
      </FormItem>
      <FormItem
        label="No. KTP"
        error={errors.spouse_ktp}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          type="number"
          min={0}
          isError={!!errors.spouse_ktp}
          {...register("spouse_ktp")}
        />
      </FormItem>
      <FormItem
        label="No. Telepon"
        error={errors.spouse_no_hp}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          type="number"
          min={0}
          isError={!!errors.spouse_no_hp}
          {...register("spouse_no_hp")}
        />
      </FormItem>
      <FormItem
        label="Pekerjaan"
        error={errors.spouse_job}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input isError={!!errors.spouse_job} {...register("spouse_job")} />
      </FormItem>
      <FormItem
        label="Penghasilan (Per Bulan)"
        error={errors.spouse_income}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <InputNumber
          isError={!!errors.spouse_income}
          onChangeValue={(value) => setValue("spouse_income", toNumber(value))}
          defaultValue={toNumber(getValues("spouse_income"))}
          addBefore={
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-s-lg bg-gray-200 px-4">
              IDR
            </div>
          }
        />
      </FormItem>
      <FormItem
        label="Jumlah Tanggungan"
        error={errors.spouse_number_of_dependents}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          type="number"
          min={0}
          isError={!!errors.spouse_number_of_dependents}
          {...register("spouse_number_of_dependents")}
        />
      </FormItem>
    </div>
  );
};

export default SpouseDataSection;
