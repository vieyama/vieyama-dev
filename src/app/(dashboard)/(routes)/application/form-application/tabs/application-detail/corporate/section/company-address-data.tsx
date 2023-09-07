import React, {useEffect, useState} from "react";

import {useAtom} from "jotai";
import {toNumber, toString} from "lodash";
import Select from "react-select";

import FormItem from "~/components/form";
import {Input, InputTextArea, Text} from "~/components/ui";
import {useGetRegionList} from "~/services/region/list";
import {
  selectedDomicileCityIdAtom,
  selectedDomicileProvinceIdAtom,
} from "~/state/formApplication";

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
  const [searchCity, setSearchCity] = useState("");
  const [searchDistrict, setSearchDistrict] = useState("");
  const [selectedDomicileProvinceId, setSelectedDomicileProvinceId] = useAtom(
    selectedDomicileProvinceIdAtom,
  );
  const [selectedDomicileCityId, setSelectedDomicileCityId] = useAtom(
    selectedDomicileCityIdAtom,
  );

  const {data: dataProvince} = useGetRegionList({
    url: "province",
    page: 1,
    per_page: 34,
    country_id: 105,
    search: "",
  });

  const {data: dataCity} = useGetRegionList(
    {
      url: "city",
      page: 1,
      per_page: 10,
      province_id: selectedDomicileProvinceId as number,
      search: searchCity,
    },
    {
      enabled: !!selectedDomicileProvinceId,
    },
  );

  const {data: dataDistrict} = useGetRegionList(
    {
      url: "district",
      page: 1,
      per_page: 10,
      city_id: selectedDomicileCityId as number,
      search: searchDistrict,
    },
    {
      enabled: !!selectedDomicileCityId,
    },
  );

  const handleChangeProvince = (
    eventChange: SingleValue<{
      value: string;
      label: string;
    }>,
  ) => {
    setSelectedDomicileProvinceId(toNumber(eventChange?.value));
    setValue("province_id", toNumber(eventChange?.value));
    setValue("province_name", eventChange?.label);
  };

  const handleChangeCity = (
    eventChange: SingleValue<{
      value: string;
      label: string;
    }>,
  ) => {
    setSelectedDomicileCityId(toNumber(eventChange?.value));
    setValue("city_id", toNumber(eventChange?.value));
    setValue("city_name", eventChange?.label);
  };

  const handleChangeDistrict = (
    eventChange: SingleValue<{
      value: string;
      label: string;
    }>,
  ) => {
    setValue("district_id", toNumber(eventChange?.value));
    setValue("district_name", eventChange?.label);
  };

  useEffect(() => {
    const data = getValues();

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
  }, []);

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
            value: toString(getValues("province_id")),
            label: getValues("province_name") as string,
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
          options={dataProvince?.results?.map((mitra) => ({
            value: mitra.id.toString(),
            label: mitra.name,
          }))}
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
            value: toString(getValues("city_id")),
            label: getValues("city_name") as string,
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
          options={dataCity?.results?.map((mitra) => ({
            value: mitra.id.toString(),
            label: mitra.name,
          }))}
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
            value: toString(getValues("district_id")),
            label: getValues("district_name") as string,
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
          options={dataDistrict?.results?.map((mitra) => ({
            value: mitra.id.toString(),
            label: mitra.name,
          }))}
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
