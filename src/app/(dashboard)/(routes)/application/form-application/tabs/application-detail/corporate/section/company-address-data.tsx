import React, {useCallback, useEffect} from "react";

import {toNumber, toString} from "lodash";
import Select from "react-select";

import FormItem from "~/components/form";
import {Input, InputTextArea, Text} from "~/components/ui";
import {useGetRegion} from "~/hooks/useGetRegion";

import type {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import type {SingleValue} from "react-select";
import type {DetailApplicationCorporateType} from "~/interfaces/form/detailApplication";

const CompanyAddressData = ({
  errors,
  register,
  setValue,
  getValues,
}: {
  register: UseFormRegister<DetailApplicationCorporateType>;
  errors: FieldErrors<DetailApplicationCorporateType>;
  getValues: UseFormGetValues<DetailApplicationCorporateType>;
  setValue: UseFormSetValue<DetailApplicationCorporateType>;
}) => {
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
      setValue("province_id", toNumber(eventChange?.value));
      setValue("province_name", eventChange?.label);
    },
    [setSelectedProvince, setValue],
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
      setValue("city_id", toNumber(eventChange?.value));
      setValue("city_name", eventChange?.label);
    },
    [setSelectedCity, setValue],
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
      setValue("district_id", toNumber(eventChange?.value));
      setValue("district_name", eventChange?.label);
    },
    [setSelectedDistrict, setValue],
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
