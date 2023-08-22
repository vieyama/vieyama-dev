import React from "react";

import FormItem from "~/components/form";
import {InputNumber, Radio, Text} from "~/components/ui";

import type {FieldErrors, UseFormRegister} from "react-hook-form";
import type {DetailApplicationType} from "~/interfaces/form/detailApplication";

const FinancingDataSection = ({
  errors,
  register,
}: {
  register: UseFormRegister<DetailApplicationType>;
  errors: FieldErrors<DetailApplicationType>;
}) => {
  return (
    <div className="flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Data Pembiayaan
      </Text>
      <FormItem
        label="Nilai Pembiayaan Diajukan"
        error={errors.financingValue}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <InputNumber
          isError={!!errors.financingValue}
          {...register("financingValue")}
        />
      </FormItem>
      <FormItem
        label="Tenor"
        error={errors.tenor}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <Radio
            value={1}
            id="tenor1"
            rootClassName="md:w-28 lg:w-36"
            {...register("tenor")}>
            1 Bulan
          </Radio>
          <Radio
            value={2}
            id="tenor2"
            rootClassName="sm:w-28 md:w-28 lg:w-36"
            {...register("tenor")}>
            2 Bulan
          </Radio>
          <Radio value={3} id="tenor3" {...register("tenor")}>
            3 Bulan
          </Radio>
        </div>
      </FormItem>
      <FormItem
        label="Metode Pembayaran"
        error={errors.paymentMethod}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <Radio
            rootClassName="sm:w-28 md:w-28 lg:w-36"
            value="installment"
            id="paymentMethod1"
            {...register("paymentMethod")}>
            Angsuran
          </Radio>
          <Radio
            value="end-of-tenor"
            id="paymentMethod2"
            {...register("paymentMethod")}>
            Pembayaran di Akhir Tenor
          </Radio>
        </div>
      </FormItem>
      <FormItem
        label="Tujuan Peminjaman"
        error={errors.paymentMethod}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className={`block w-full rounded-lg border ${
              !!errors.paymentMethod ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("loanPurposes")}
            placeholder="Tujuan Pinjaman">
            <option selected>Pilih Tujuan Pinjaman</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </FormItem>
      <FormItem
        label="Storage"
        error={errors.storages}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className={`block w-full rounded-lg border ${
              !!errors.paymentMethod ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("storages")}
            placeholder="Storage">
            <option selected>Pilih Storage</option>
            <option value="US">Fishlog Cold Storage</option>
            <option value="CA">Mitra Cold Storage</option>
          </select>
        </div>
      </FormItem>
    </div>
  );
};

export default FinancingDataSection;
