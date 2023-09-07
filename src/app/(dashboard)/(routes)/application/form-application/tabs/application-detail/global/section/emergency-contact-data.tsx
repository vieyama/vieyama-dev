import {useSearchParams} from "next/navigation";

import FormItem from "~/components/form";
import {Input, InputTextArea, Text} from "~/components/ui";

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
        <Input
          type="number"
          min={0}
          isError={!!errors.emergency_no_hp}
          {...register(`emergency_no_hp`)}
        />
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
            <Input
              type="number"
              min={0}
              isError={!!errors.emergency_office_no_telp}
              {...register("emergency_office_no_telp")}
            />
          </FormItem>
          <FormItem
            label="No. Telepon Rumah"
            optional={true}
            error={errors.emergency_home_number}
            className="flex flex-col gap-4 md:flex-row"
            childClassName="w-full"
            labelClassName="md:min-w-[250px] lg:min-w-[250px]">
            <Input
              type="number"
              min={0}
              isError={!!errors.emergency_home_number}
              {...register("emergency_home_number")}
            />
          </FormItem>
        </>
      )}
    </div>
  );
};

export default EmergencyContactData;
