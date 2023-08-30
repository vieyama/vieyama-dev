import React from "react";

import {
  educationList,
  maritalStatusList,
} from "~/app/(dashboard)/(routes)/application/constants";
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
            <option value="Milik Sendiri">Milik Sendiri</option>
            <option value="Milik Orang Tua / Keluarga">
              Milik Orang Tua / Keluarga
            </option>
            <option value="Kontrak (Sewa)">Kontrak (Sewa)</option>
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
              <div className="flex select-none items-center bg-gray-200 p-1.5">
                Tahun
              </div>
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
              <div className="flex select-none items-center bg-gray-200 p-1.5">
                Bulan
              </div>
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
            {educationList.map((edu) => (
              <option key={edu} value={edu}>
                {edu}
              </option>
            ))}
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
            {maritalStatusList.map((marital) => (
              <option key={marital} value={marital}>
                {marital}
              </option>
            ))}
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
