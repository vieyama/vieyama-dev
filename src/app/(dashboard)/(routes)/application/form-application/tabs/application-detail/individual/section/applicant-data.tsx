import React from "react";

import FormItem from "~/components/form";
import {AutoComplete, Input, Text} from "~/components/ui";
import {dialPhone, phoneCodeIndonesia} from "~/constants/dialPhones";

import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import type {DetailApplicationIndividualType} from "~/interfaces/form/detailApplication";

const ApplicantDataSection = ({
  errors,
  register,
  setValue,
}: {
  register: UseFormRegister<DetailApplicationIndividualType>;
  errors: FieldErrors<DetailApplicationIndividualType>;
  setValue: UseFormSetValue<DetailApplicationIndividualType>;
}) => {
  const people = [
    {id: "1", value: "mitra ID 1"},
    {id: "2", value: "mitra ID 2"},
    {id: "3", value: "mitra ID 3"},
    {id: "4", value: "mitra ID 4"},
    {id: "5", value: "mitra ID 5"},
  ];

  const handleChangeMitraId = (id: string) => {
    const selected = people.find((data) => data.id === id);
    setValue("partner_id", selected?.value);
  };
  return (
    <div className="mt-5 flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Data Pemohon
      </Text>

      <FormItem
        label="ID Mitra"
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <AutoComplete options={people} onChange={handleChangeMitraId} />
      </FormItem>

      <FormItem
        label="Nama Lengkap (Sesuai KTP)"
        error={errors.applicant_name}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          isError={!!errors.applicant_name}
          {...register("applicant_name")}
        />
      </FormItem>
      <FormItem
        label="No. KTP"
        error={errors.no_ktp}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          type="number"
          min={0}
          isError={!!errors.no_ktp}
          {...register("no_ktp")}
        />
      </FormItem>
      <FormItem
        label="Tempat Lahir"
        error={errors.pob}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input isError={!!errors.pob} {...register("pob")} />
      </FormItem>
      <FormItem
        label="Tanggal Lahir"
        error={errors.dob}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input type="date" isError={!!errors.dob} {...register("dob")} />
      </FormItem>

      <FormItem
        label="Nama Gadis Ibu Kandung"
        error={errors.mothers_maiden_name}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          isError={!!errors.mothers_maiden_name}
          {...register("mothers_maiden_name")}
        />
      </FormItem>

      <FormItem
        label="Status Kepemilikan Rumah"
        error={errors.house_ownership_status}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className={`block w-full rounded-lg border ${
              errors.house_ownership_status ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("house_ownership_status")}
            defaultValue=""
            placeholder="Status Kepemilikan Rumah">
            <option value="">Pilih Status Kepemilikan Rumah</option>
            <option value="Penyedia Sarana Produksi Perikanan">
              Orang Tua / Keluarga
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

      <div className="flex gap-5">
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="md:min-w-[250px] lg:min-w-[250px]">Lama Tinggal</div>
          <div className="w-full">
            <div className="flex w-full">
              <Input
                isError={!!errors.length_of_stay_year}
                {...register("length_of_stay_year")}
                type="number"
                min={0}
                inputWrapperClassName="w-full"
                className="w-full rounded-e-none text-end"
              />
              <div className="flex items-center bg-gray-200 p-1.5">Tahun</div>
            </div>
            <span className="text-base text-error">
              {errors.length_of_stay_year?.message}
            </span>
          </div>
          <div className="w-full">
            <div className="flex w-full">
              <Input
                isError={!!errors.length_of_stay_month}
                inputWrapperClassName="w-full"
                {...register("length_of_stay_month")}
                type="number"
                min={0}
                className="w-full rounded-e-none text-end"
              />
              <div className="flex items-center bg-gray-200 p-1.5">Bulan</div>
            </div>
            <span className="text-base text-error">
              {errors.length_of_stay_month?.message}
            </span>
          </div>
        </div>
      </div>

      <FormItem
        label="Pendidikan Terakhir"
        error={errors.last_education}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className={`block w-full rounded-lg border ${
              errors.last_education ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("last_education")}
            defaultValue=""
            placeholder="Pendidikan Terakhir">
            <option value="">Pilih Pendidikan Terkahir</option>
            <option value="STRATA III">STRATA III</option>
            <option value="STRATA II">STRATA II</option>
            <option value="DilpomaIV/Strata I">DilpomaIV/Strata I</option>
            <option value="Akademi/Diploma III/S. Muda">
              Akademi/Diploma III/S. Muda
            </option>
            <option value="Diploma I/II">Diploma I/II</option>
            <option value="SLTA/Sederjat">SLTA/Sederjat</option>
            <option value="SLTP/Sederajat">SLTP/Sederajat</option>
            <option value="SD/Sederajat">SD/Sederajat</option>
          </select>
        </div>
      </FormItem>

      <FormItem
        label="Status Perkawinan"
        error={errors.marital_status}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex flex-col gap-4 md:flex-row">
          <select
            className={`block w-full rounded-lg border ${
              errors.marital_status ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("marital_status")}
            defaultValue=""
            placeholder="Status Perkawinan">
            <option value="">Pilih Status Perkawinan</option>
            <option value="Kawin">Kawin</option>
            <option value="Belum Kawin">Belum Kawin</option>
            <option value="Cerai Hidup">Cerai Hidup</option>
            <option value="Cerai Mati">Cerai Mati</option>
          </select>
        </div>
      </FormItem>
      <FormItem
        label="No. Telepon Rumah"
        error={errors.no_telp}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex items-center gap-x-4">
          <select
            className={`block w-28 rounded-lg border ${
              errors.noTelpCode ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("noTelpCode")}
            defaultValue="021"
            placeholder="No. Telepon Kantor">
            <option value="021">021</option>
            {phoneCodeIndonesia.map((dial) => (
              <option key={dial.id} value={dial.id}>
                {dial.id}
              </option>
            ))}
          </select>
          <Input
            type="number"
            min={0}
            isError={!!errors.no_telp}
            {...register("no_telp")}
          />
        </div>
      </FormItem>
      <FormItem
        label="No. Handpone #1"
        error={errors.no_hp}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex items-center gap-x-4">
          <select
            className={`block w-28 rounded-lg border ${
              errors.phoneCode ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("phoneCode")}
            defaultValue="+62"
            placeholder="No. Handphone #1">
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
            isError={!!errors.no_hp}
            {...register("no_hp")}
          />
        </div>
      </FormItem>
      <FormItem
        label="No. Handpone #2"
        optional={true}
        error={errors.no_hp2}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex items-center gap-x-4">
          <select
            className={`block w-28 rounded-lg border ${
              errors.phoneCode2 ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register("phoneCode2")}
            defaultValue="+62"
            placeholder="No. Handphone #2">
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
            isError={!!errors.no_hp2}
            {...register("no_hp2")}
          />
        </div>
      </FormItem>
      <FormItem
        label="Alamat Email"
        error={errors.email}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input type="email" isError={!!errors.email} {...register("email")} />
      </FormItem>
    </div>
  );
};

export default ApplicantDataSection;
