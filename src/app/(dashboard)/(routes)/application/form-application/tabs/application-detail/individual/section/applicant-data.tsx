import React from "react";

import {useAtom} from "jotai";
import {debounce} from "lodash";
import {
  type FieldErrors,
  useController,
  type UseFormGetValues,
  type UseFormRegister,
} from "react-hook-form";

import SelectComponent from "~/app/(dashboard)/(routes)/application/components/select-component";
import {
  educationList,
  maritalStatusList,
} from "~/app/(dashboard)/(routes)/application/constants";
import FormItem from "~/components/form";
import {Input, Text} from "~/components/ui";
import {mitraListSearchAtom} from "~/state/formApplication";

import type {Control, FieldError, FieldValues} from "react-hook-form";
import type {DetailApplicationIndividualType} from "~/interfaces/form/detailApplication";
import type {Partner} from "~/interfaces/services/finance";
import type {PartnerResult} from "~/interfaces/services/partner/list";

const ApplicantDataSection = ({
  errors,
  register,
  mitraData,
  isLoadingMitra,
  dataPartner,
  control,
}: {
  register: UseFormRegister<DetailApplicationIndividualType>;
  errors: FieldErrors<DetailApplicationIndividualType>;
  getValues: UseFormGetValues<DetailApplicationIndividualType>;
  mitraData?: PartnerResult[];
  isLoadingMitra?: boolean;
  dataPartner?: Partner;
  control: Control<FieldValues>;
}) => {
  const {field: mitraKtp} = useController({control, name: "no_ktp"});

  const [, setMitraListSearch] = useAtom(mitraListSearchAtom);

  const handleSearchMitra = debounce((search: string) => {
    setMitraListSearch(search);
  }, 1500);

  return (
    <div className="mt-5 flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Data Pemohon
      </Text>
      <SelectComponent
        control={control}
        errorMessage={errors.partner_id as FieldError}
        label="ID Mitra"
        fieldName="partner_id"
        isLoading={isLoadingMitra}
        defaultValue={
          dataPartner
            ? {
                value: dataPartner?.partner_id,
                label: `${dataPartner?.no_registration} - ${dataPartner?.name}`,
              }
            : null
        }
        onInputChange={handleSearchMitra}
        options={mitraData?.map((mitra) => ({
          value: mitra.uuid,
          label: `${mitra.no_registration} - ${mitra.name}`,
        }))}
      />

      <FormItem
        label="Nama Lengkap (Sesuai KTP)"
        error={errors.applicant_name}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          isError={!!errors.applicant_name}
          disabled
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
          disabled
          min={0}
          isError={!!errors.no_ktp}
          {...mitraKtp}
        />
      </FormItem>
      <FormItem
        label="Tempat Lahir"
        error={errors.pob}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input isError={!!errors.pob} {...register("pob")} disabled />
      </FormItem>
      <FormItem
        label="Tanggal Lahir"
        error={errors.dob}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          type="date"
          isError={!!errors.dob}
          disabled
          {...register("dob", {
            valueAsDate: true,
          })}
        />
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
        <Input
          disabled
          min={0}
          isError={!!errors.no_telp}
          {...register("no_telp")}
        />
      </FormItem>
      <FormItem
        label="No. Handpone #1"
        error={errors.no_hp}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          min={0}
          disabled
          isError={!!errors.no_hp}
          {...register("no_hp")}
        />
      </FormItem>
      <FormItem
        label="No. Handpone #2"
        optional={true}
        error={errors.no_hp2}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          type="number"
          min={0}
          isError={!!errors.no_hp2}
          {...register("no_hp2")}
        />
      </FormItem>
      <FormItem
        label="Alamat Email"
        error={errors.email}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          type="email"
          disabled
          isError={!!errors.email}
          {...register("email")}
        />
      </FormItem>
    </div>
  );
};

export default ApplicantDataSection;
