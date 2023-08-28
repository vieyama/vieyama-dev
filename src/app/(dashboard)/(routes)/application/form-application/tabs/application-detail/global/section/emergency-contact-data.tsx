import {useSearchParams} from "next/navigation";

import FormItem from "~/components/form";
import {Input, InputTextArea, Text} from "~/components/ui";
import {dialPhone, phoneCodeIndonesia} from "~/constants/dialPhones";

import type {FieldErrors, UseFormRegister} from "react-hook-form";
import type {
  DetailApplicationCorporateType,
  DetailApplicationIndividualType,
} from "~/interfaces/form/detailApplication";

const EmergencyContactData = ({
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
  const searchParam = useSearchParams();
  const userType = searchParam.get("type");
  return (
    <div className="mt-8 flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Kontak Darurat
      </Text>
      <FormItem
        label="Nama Lengkap"
        error={errors.emergency_name}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          isError={!!errors.emergency_name}
          {...register("emergency_name")}
        />
      </FormItem>
      <FormItem
        label="Hubungan Dengan Pemohon"
        error={errors.emergency_relationship}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          isError={!!errors.emergency_relationship}
          {...register("emergency_relationship")}
        />
      </FormItem>
      <FormItem
        label="Alamat"
        error={errors.emergency_address}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <InputTextArea
          isError={!!errors.emergency_address}
          {...register("emergency_address")}
        />
      </FormItem>
      <FormItem
        label="No. Handphone"
        error={errors.emergency_no_hp}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <div className="flex items-center gap-x-4">
          <select
            className={`block w-28 rounded-lg border ${
              errors.emergency_phone_code ? "border-error" : "border-gray-300"
            } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
            {...register(`emergency_phone_code`)}
            defaultValue="+62"
            placeholder="No. Handphone">
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
            isError={!!errors.emergency_no_hp}
            {...register(`emergency_no_hp`)}
          />
        </div>
      </FormItem>
      {userType === "corporate" && (
        <>
          <FormItem
            label="No. Telepon Kantor"
            error={errors.emergency_office_no_telp}
            optional={true}
            className="flex flex-col gap-4 md:flex-row"
            childClassName="w-full"
            labelClassName="md:min-w-[250px] lg:min-w-[250px]">
            <div className="flex items-center gap-x-4">
              <select
                className={`block w-28 rounded-lg border ${
                  errors.emergencyPhoneOfficeCode
                    ? "border-error"
                    : "border-gray-300"
                } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
                {...register("emergencyPhoneOfficeCode")}
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
                isError={!!errors.emergency_office_no_telp}
                {...register("emergency_office_no_telp")}
              />
            </div>
          </FormItem>
          <FormItem
            label="No. Telepon Rumah"
            optional={true}
            error={errors.emergency_home_number}
            className="flex flex-col gap-4 md:flex-row"
            childClassName="w-full"
            labelClassName="md:min-w-[250px] lg:min-w-[250px]">
            <div className="flex items-center gap-x-4">
              <select
                className={`block w-28 rounded-lg border ${
                  errors.emergencyPhoneHomeCode
                    ? "border-error"
                    : "border-gray-300"
                } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
                {...register("emergencyPhoneHomeCode")}
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
                isError={!!errors.emergency_home_number}
                {...register("emergency_home_number")}
              />
            </div>
          </FormItem>
        </>
      )}
    </div>
  );
};

export default EmergencyContactData;
