import React from "react";

import {businessFieldList} from "~/app/(dashboard)/(routes)/application/constants";
import FormItem from "~/components/form";
import {Input, InputNumber, InputTextArea, Text} from "~/components/ui";

import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import type {DetailApplicationIndividualType} from "~/interfaces/form/detailApplication";

const PersonalWorkplaceDataSection = ({
  errors,
  register,
  setValue,
}: {
  register: UseFormRegister<DetailApplicationIndividualType>;
  errors: FieldErrors<DetailApplicationIndividualType>;
  setValue: UseFormSetValue<DetailApplicationIndividualType>;
}) => {
  return (
    <div className="mt-5 flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Data Pekerjaan / Usaha / Profesi
      </Text>

      <FormItem
        label="Nama Perusahaan"
        error={errors.personal_workplace_name}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          isError={!!errors.personal_workplace_name}
          {...register("personal_workplace_name")}
        />
      </FormItem>
      <FormItem
        label="Alamat Perusahaan"
        error={errors.personal_workplace_address}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <InputTextArea
          isError={!!errors.personal_workplace_address}
          {...register("personal_workplace_address")}
        />
      </FormItem>
      <FormItem
        label="Bidang Usaha"
        error={errors.personal_workplace_business_fields}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className={`block w-full rounded-lg border ${
              errors.personal_workplace_business_fields
                ? "border-error"
                : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("personal_workplace_business_fields")}
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
        label="Jabatan"
        error={errors.personal_workplace_position}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          isError={!!errors.personal_workplace_position}
          {...register(`personal_workplace_position`)}
        />
      </FormItem>

      <div className="flex gap-5">
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="md:min-w-[250px] lg:min-w-[250px]">
            Lama Bekerja / Usaha
          </div>
          <div className="w-full">
            <div className="flex w-full">
              <Input
                isError={!!errors.personal_workplace_length_of_work_year}
                {...register("personal_workplace_length_of_work_year")}
                type="number"
                min={0}
                inputWrapperClassName="w-full"
                className="w-full rounded-e-none text-end"
              />
              <div className="flex select-none items-center bg-gray-200 p-1.5">
                Tahun
              </div>
            </div>
            <span className="text-base text-error">
              {errors.personal_workplace_length_of_work_year?.message}
            </span>
          </div>
          <div className="w-full">
            <div className="flex w-full">
              <Input
                isError={!!errors.personal_workplace_length_of_work_month}
                inputWrapperClassName="w-full"
                {...register("personal_workplace_length_of_work_month")}
                type="number"
                min={0}
                className="w-full rounded-e-none text-end"
              />
              <div className="flex select-none items-center bg-gray-200 p-1.5">
                Bulan
              </div>
            </div>
            <span className="text-base text-error">
              {errors.personal_workplace_length_of_work_month?.message}
            </span>
          </div>
        </div>
      </div>

      <FormItem
        label="Penghasilan (Per Bulan)"
        error={errors.personal_workplace_income}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <InputNumber
          isError={!!errors.personal_workplace_income}
          onChangeValue={(value) =>
            setValue("personal_workplace_income", value)
          }
        />
      </FormItem>
      <FormItem
        optional
        label="Penghasilan Lainnya (Per Bulan)"
        error={errors.personal_workplace_other_income}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <InputNumber
          isError={!!errors.personal_workplace_other_income}
          onChangeValue={(value) =>
            setValue("personal_workplace_other_income", value)
          }
        />
      </FormItem>
      <FormItem
        label="Sumber Penghasilan Lainnya"
        optional
        error={errors.personal_workplace_additional_income}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <InputNumber
          isError={!!errors.personal_workplace_additional_income}
          onChangeValue={(value) =>
            setValue("personal_workplace_additional_income", value)
          }
        />
      </FormItem>
    </div>
  );
};

export default PersonalWorkplaceDataSection;
