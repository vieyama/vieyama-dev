import React from "react";

import FormItem from "~/components/form";
import {Input, InputNumber, Text} from "~/components/ui";
import {dialPhone} from "~/constants/dialPhones";

import type {FieldErrors, UseFormRegister} from "react-hook-form";
import type {DetailApplicationIndividualType} from "~/interfaces/form/detailApplication";

const SpouseDataSection = ({
  errors,
  register,
}: {
  register: UseFormRegister<DetailApplicationIndividualType>;
  errors: FieldErrors<DetailApplicationIndividualType>;
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
        error={errors.spouse_no_ktp}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          type="number"
          min={0}
          isError={!!errors.spouse_no_ktp}
          {...register("spouse_no_ktp")}
        />
      </FormItem>
      <FormItem
        label="No. Telepon"
        error={errors.spouse_no_hp}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex items-center gap-x-4">
          <select
            className={`block w-28 rounded-lg border ${
              errors.spousePhoneCode ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("spouse_no_hp")}
            defaultValue="+62"
            placeholder="No. Telepon">
            <option value="+62">+62</option>
            {dialPhone.map((dial) => (
              <option key={dial.id} value={dial.dial_code}>
                {dial.dial_code}
              </option>
            ))}
          </select>
          <Input
            type="number"
            min={0}
            isError={!!errors.spouse_no_hp}
            {...register("no_hp")}
          />
        </div>
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
          {...register("spouse_income")}
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
