import React from "react";

import FormItem from "~/components/form";
import {Input, Text} from "~/components/ui";
import {dialPhone} from "~/constants/dialPhones";

import type {FieldErrors, UseFormRegister} from "react-hook-form";
import type {DetailApplicationType} from "~/interfaces/form/detailApplication";

const ApplicantDataSection = ({
  errors,
  register,
}: {
  register: UseFormRegister<DetailApplicationType>;
  errors: FieldErrors<DetailApplicationType>;
}) => {
  return (
    <div className="mt-5 flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Data Pemohon
      </Text>

      <FormItem
        label="ID Mitra"
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <div className="flex w-full items-center">
          <input
            type="number"
            className="block h-9 w-full rounded-s-lg border border-gray-300 bg-white p-2.5 text-base text-gray-900 outline-none placeholder:text-sm placeholder:text-gray-400 focus:border-blue-500"
            placeholder="Cari ID Mitra"
          />
          <button className="h-9 w-20 rounded-e-lg bg-blue-600 text-white">
            Cari
          </button>
        </div>
      </FormItem>

      <FormItem
        label="Nama Perusahaan"
        error={errors.companyName}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <Input isError={!!errors.companyName} {...register("companyName")} />
      </FormItem>
      <FormItem
        label="NPWP Perusahaan"
        error={errors.companyNpwp}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <Input isError={!!errors.companyNpwp} {...register("companyNpwp")} />
      </FormItem>
      <FormItem
        label="Bidang Usaha"
        error={errors.businessField}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className={`block w-full rounded-lg border ${
              errors.paymentMethod ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("businessField")}
            defaultValue=""
            placeholder="Bidang Usaha">
            <option value="">Pilih Bidang Usaha</option>
            <option value="Penyedia Sarana Produksi Perikanan">
              Penyedia Sarana Produksi Perikanan
            </option>
            <option value="Pengusaha Makanan & Minuman Siap Saji">
              Pengusaha Makanan & Minuman Siap Saji
            </option>
            <option value="Penjual Eceran (Ikan Beku)">
              Penjual Eceran (Ikan Beku)
            </option>
            <option value="Penyedia Transportasi berpendingin">
              Penyedia Transportasi berpendingin
            </option>
            <option value="Penyewaan Cold Storage (per satuan berat)">
              Penyewaan Cold Storage (per satuan berat)
            </option>
            <option value="Penyewaan Cold Storage (per ruang / gedung)">
              Penyewaan Cold Storage (per ruang / gedung)
            </option>
            <option value="Perdagangan / Trading Grosir">
              Perdagangan / Trading Grosir
            </option>
            <option value="Pemrosesan Ikan">Pemrosesan Ikan</option>
            <option value="Pengusaha Budidaya">Pengusaha Budidaya</option>
            <option value="Penangkapan (Nelayan)">Penangkapan (Nelayan)</option>
            <option value="Exporter">Exporter</option>
            <option value="Importer">Importer</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
      </FormItem>
      <FormItem
        label="No. Telepon Kantor"
        error={errors.companyPhone}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <div className="flex items-center gap-x-4">
          <select
            className={`block w-28 rounded-lg border ${
              errors.companyPhoneCode ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("companyPhoneCode")}
            defaultValue="+62"
            placeholder="No. Telepon Kantor">
            <option value="+62">+62</option>
            {dialPhone.map((dial) => (
              <option key={dial.code} value={dial.dial_code}>
                {dial.dial_code}
              </option>
            ))}
          </select>
          <Input
            type="number"
            isError={!!errors.companyPhone}
            {...register("companyPhone")}
          />
        </div>
      </FormItem>
      <FormItem
        label="Alamat Email"
        error={errors.companyEmail}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <Input
          type="email"
          isError={!!errors.companyEmail}
          {...register("companyEmail")}
        />
      </FormItem>
      <FormItem
        label="Jumlah Karyawan"
        error={errors.numberOfEmployee}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[200px] lg:min-w-[240px]">
        <Input
          type="number"
          isError={!!errors.numberOfEmployee}
          {...register("numberOfEmployee")}
        />
      </FormItem>
    </div>
  );
};

export default ApplicantDataSection;
