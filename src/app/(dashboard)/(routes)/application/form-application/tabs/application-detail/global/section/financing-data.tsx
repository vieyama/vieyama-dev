import React from "react";

import FormItem from "~/components/form";
import {InputNumber, Radio, Text} from "~/components/ui";

import type {FieldErrors, UseFormRegister} from "react-hook-form";
import type {
  DetailApplicationCorporateType,
  DetailApplicationIndividualType,
} from "~/interfaces/form/detailApplication";

const FinancingDataSection = ({
  errors,
  register,
}: {
  register: UseFormRegister<
    DetailApplicationCorporateType | DetailApplicationIndividualType
  >;
  errors: FieldErrors<
    DetailApplicationCorporateType | DetailApplicationIndividualType
  >;
}) => {
  return (
    <div className="flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Data Pembiayaan
      </Text>
      <FormItem
        label="Nilai Pembiayaan Diajukan"
        error={errors.proposed_value}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <InputNumber
          isError={!!errors.proposed_value}
          {...register("proposed_value")}
        />
      </FormItem>
      <FormItem
        label="Tenor"
        error={errors.tenor}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
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
        error={errors.payment_method}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <Radio
            rootClassName="sm:w-28 md:w-28 lg:w-36"
            value="installment"
            id="payment_method1"
            {...register("payment_method")}>
            Angsuran
          </Radio>
          <Radio
            value="end-of-tenor"
            id="payment_method2"
            {...register("payment_method")}>
            Pembayaran di Akhir Tenor
          </Radio>
        </div>
      </FormItem>
      <FormItem
        label="Tujuan Peminjaman"
        error={errors.loan_purposes}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className={`block w-full rounded-lg border ${
              errors.loan_purposes ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("loan_purposes")}
            defaultValue=""
            placeholder="Tujuan Pinjaman">
            <option value="">Pilih Tujuan Pinjaman</option>
            <option value="Perdagangan">Perdagangan</option>
            <option value="Peningkatan Modal Kerja">
              Peningkatan Modal Kerja
            </option>
            <option value="Ekspor/Impor">Ekspor/Impor</option>
            <option value="Rawat Inap/Medis">Rawat Inap/Medis</option>
            <option value="Pendidikan">Pendidikan</option>
            <option value="Perjalanan">Perjalanan</option>
            <option value="Konsumsi Pribadi">Konsumsi Pribadi</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
      </FormItem>
      <FormItem
        label="Storage"
        error={errors.storage}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className={`block w-full rounded-lg border ${
              errors.storage ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("storage")}
            defaultValue=""
            placeholder="Storage">
            <option value="">Pilih Storage</option>
            <option value="Fishlog Cold Storage">Fishlog Cold Storage</option>
            <option value="Mitra Cold Storage">Mitra Cold Storage</option>
          </select>
        </div>
      </FormItem>
    </div>
  );
};

export default FinancingDataSection;
