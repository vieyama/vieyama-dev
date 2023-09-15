import React, {useCallback, useEffect} from "react";

import {toNumber, toString} from "lodash";
import {
  type FieldErrors,
  useController,
  type UseFormGetValues,
  type UseFormRegister,
} from "react-hook-form";
import Select from "react-select";

import FormItem from "~/components/form";
import {Input, InputTextArea, Text} from "~/components/ui";
import {useGetRegion} from "~/hooks/useGetRegion";

import type {Control, FieldValues} from "react-hook-form";
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
  const {field: provinceId} = useController({
    control,
    name: `province_id`,
  });
  const {field: provinceName} = useController({
    control,
    name: `province_name`,
  });
  const {field: cityId} = useController({
    control,
    name: `city_id`,
  });
  const {field: cityName} = useController({
    control,
    name: `city_name`,
  });
  const {field: districtId} = useController({
    control,
    name: `district_id`,
  });
  const {field: districtName} = useController({
    control,
    name: `district_name`,
  });

  const {
    setSearchCity,
    setSearchDistrict,
    selectedProvince,
    setSelectedProvince,
    selectedCity,
    setSelectedCity,
    selectedDistrict,
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
      provinceId.onChange(toNumber(eventChange?.value));
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
      cityId.onChange(toNumber(eventChange?.value));
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
      districtId.onChange(toNumber(eventChange?.value));
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

      <FormItem
        label="Provinsi"
        error={errors.province_id}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Select
          className="react-select"
          value={{
            value: toString(selectedProvince?.value),
            label: selectedProvince?.label as string,
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 8,
          })}
          styles={{
            menu: (provided) => ({...provided, zIndex: 9999}),
          }}
          placeholder=""
          onChange={handleChangeProvince}
          components={{
            IndicatorSeparator: null,
          }}
          options={provinceOption}
        />
      </FormItem>

      <FormItem
        label="Kota"
        error={errors.city_id}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Select
          className="react-select"
          value={{
            value: toString(selectedCity?.value),
            label: selectedCity?.label as string,
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 8,
          })}
          styles={{
            menu: (provided) => ({...provided, zIndex: 9999}),
          }}
          placeholder=""
          onInputChange={(e) => setSearchCity(e)}
          onChange={handleChangeCity}
          components={{
            IndicatorSeparator: null,
          }}
          options={cityOption}
        />
      </FormItem>
      <FormItem
        label="Kecamatan"
        error={errors.district_id}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Select
          className="react-select"
          value={{
            value: toString(selectedDistrict?.value),
            label: selectedDistrict?.label as string,
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 8,
          })}
          styles={{
            menu: (provided) => ({...provided, zIndex: 9999}),
          }}
          placeholder=""
          onInputChange={(e) => setSearchDistrict(e)}
          onChange={handleChangeDistrict}
          components={{
            IndicatorSeparator: null,
          }}
          options={districtOption}
        />
      </FormItem>

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
