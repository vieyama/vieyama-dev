import {useCallback} from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import {useController, useForm} from "react-hook-form";

import FormItem from "~/components/form";
import {Input, Text} from "~/components/ui";
import {useGetRegion} from "~/hooks/useGetRegion";
import {AdminDetailSchema} from "~/validations/AdminDetail";

import SelectComponent from "../../../components/select-component";
import UploadComponent from "../../../components/upload-component";
import FooterButton from "../../components/footer-button";

import type {FieldError} from "react-hook-form";
import type {SingleValue} from "react-select";
import type {QCAssignType} from "~/interfaces/form/adminDetail";
import type {FinanceResponseData} from "~/interfaces/services/finance";

const QCAssignment = ({}: {financeData?: FinanceResponseData}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<QCAssignType>({
    resolver: yupResolver(AdminDetailSchema),
  });

  const {
    setSearchCity,
    setSelectedProvince,
    setSelectedCity,
    provinceOption,
    cityOption,
  } = useGetRegion();

  const {field: provinceName} = useController({
    control,
    name: `province_name`,
  });
  const {field: cityName} = useController({
    control,
    name: `city_name`,
  });

  const handleChangeProvince = useCallback(
    (
      eventChange: SingleValue<{
        value: string;
        label: string;
      }>,
    ) => {
      setSelectedProvince({
        value: eventChange?.value as string,
        label: eventChange?.label as string,
      });
      provinceName.onChange(eventChange?.label);
    },
    [setSelectedProvince],
  );

  const handleChangeCity = useCallback(
    (
      eventChange: SingleValue<{
        value: string;
        label: string;
      }>,
    ) => {
      setSelectedCity({
        value: eventChange?.value as string,
        label: eventChange?.label as string,
      });
      cityName.onChange(eventChange?.label);
    },
    [setSelectedCity],
  );

  const handleSave = () => {};

  return (
    <div className="bg-white p-6">
      <Text
        weight="semi-bold"
        variant="sub-header-2"
        className="mb-3.5 text-blue-600">
        QC Assignment
      </Text>
      <form
        className="flex flex-col gap-3.5"
        onSubmit={handleSubmit(handleSave)}>
        <FormItem
          label="Nama Petugas QC"
          error={errors.qc_name}
          className="flex flex-col gap-4 md:flex-row"
          childClassName="w-full"
          labelClassName="md:min-w-[250px] lg:min-w-[250px]">
          <Input
            type="number"
            {...register("qc_name")}
            isError={!!errors.qc_name}
          />
        </FormItem>
        <SelectComponent
          control={control}
          errorMessage={errors.province_id as FieldError}
          label="Provinsi"
          fieldName="province_id"
          options={provinceOption}
          optionChange={handleChangeProvince}
        />

        <SelectComponent
          control={control}
          errorMessage={errors.city_id as FieldError}
          label="Kota"
          fieldName="city_id"
          onInputChange={(e) => setSearchCity(e)}
          options={cityOption}
          optionChange={handleChangeCity}
        />
        <UploadComponent
          control={control}
          type="input"
          errorMessage={errors.letter_of_assignment as FieldError}
          label="Rekening Koran 6 Bulan Terakhir"
          fieldName="letter_of_assignment"
        />
        <FooterButton />
      </form>
    </div>
  );
};

export default QCAssignment;
