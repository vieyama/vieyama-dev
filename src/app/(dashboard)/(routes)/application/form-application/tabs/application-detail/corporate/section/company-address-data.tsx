import React, {useCallback, useEffect} from "react";

import {toString} from "lodash";
import {
  type FieldErrors,
  useController,
  type UseFormGetValues,
  type UseFormRegister,
} from "react-hook-form";

import SelectComponent from "~/app/(dashboard)/(routes)/application/components/select-component";
import FormItem from "~/components/form";
import {Input, InputTextArea, Text} from "~/components/ui";
import {useGetRegion} from "~/hooks/useGetRegion";

import type {Control, FieldError, FieldValues} from "react-hook-form";
import type {SingleValue} from "react-select";
import type {DetailApplicationCorporateType} from "~/interfaces/form/detailApplication";

const CompanyAddressData = ({
  errors,
  register,
  getValues,
  control,
}: {
  register: UseFormRegister<DetailApplicationCorporateType>;
  errors: FieldErrors<DetailApplicationCorporateType>;
  getValues: UseFormGetValues<DetailApplicationCorporateType>;
  control: Control<FieldValues>;
}) => {
  const {field: provinceName} = useController({
    control,
    name: `province_name`,
  });
  const {field: cityName} = useController({
    control,
    name: `city_name`,
  });
  const {field: districtName} = useController({
    control,
    name: `district_name`,
  });

  const {
    setSearchCity,
    setSearchDistrict,
    setSelectedProvince,
    setSelectedCity,
    setSelectedDistrict,
    provinceOption,
    cityOption,
    districtOption,
  } = useGetRegion();

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

  const handleChangeDistrict = useCallback(
    (
      eventChange: SingleValue<{
        value: string;
        label: string;
      }>,
    ) => {
      setSelectedDistrict({
        value: eventChange?.value as string,
        label: eventChange?.label as string,
      });
      districtName.onChange(eventChange?.label);
    },
    [setSelectedDistrict],
  );

  const data = getValues();

  useEffect(() => {
    if (data.province_id) {
      handleChangeProvince({
        value: toString(data.province_id),
        label: data.province_name as string,
      });
    }

    if (data.city_id) {
      handleChangeCity({
        value: toString(data.city_id),
        label: data.city_name as string,
      });
    }

    if (data.district_id) {
      handleChangeDistrict({
        value: toString(data.district_id),
        label: data.district_name as string,
      });
    }
  }, [
    data.city_id,
    data.city_name,
    data.district_id,
    data.district_name,
    data.province_id,
    data.province_name,
    handleChangeCity,
    handleChangeDistrict,
    handleChangeProvince,
  ]);

  return (
    <div className="mt-5 flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Alamat Perusahaan
      </Text>
      <FormItem
        label="Alamat Lengkap"
        error={errors.address}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <InputTextArea
          disabled
          isError={!!errors.address}
          {...register("address")}
        />
      </FormItem>
      <SelectComponent
        control={control}
        errorMessage={errors.province_id as FieldError}
        label="Provinsi"
        fieldName="province_id"
        defaultValue={{
          value: toString(data.province_id),
          label: data?.province_name as string,
        }}
        options={provinceOption}
        optionChange={handleChangeProvince}
      />

      <SelectComponent
        control={control}
        errorMessage={errors.city_id as FieldError}
        label="Kota"
        fieldName="city_id"
        onInputChange={(e) => setSearchCity(e)}
        defaultValue={{
          value: toString(data.city_id),
          label: data?.city_name as string,
        }}
        options={cityOption}
        optionChange={handleChangeCity}
      />

      <SelectComponent
        control={control}
        errorMessage={errors.district_id as FieldError}
        label="Kecamatan"
        fieldName="district_id"
        onInputChange={(e) => setSearchDistrict(e)}
        defaultValue={{
          value: toString(data.district_id),
          label: data?.district_name as string,
        }}
        options={districtOption}
        optionChange={handleChangeDistrict}
      />

      <FormItem
        label="Kode Pos"
        error={errors.postal_code}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Input
          type="number"
          {...register("postal_code")}
          isError={!!errors.postal_code}
        />
      </FormItem>
    </div>
  );
};

export default CompanyAddressData;
