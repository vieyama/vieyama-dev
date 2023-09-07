import {useState} from "react";

import {Disclosure} from "@headlessui/react";
import {useAtom} from "jotai";
import {toNumber, toString} from "lodash";
import Select from "react-select";

import FormItem from "~/components/form";
import {Button, Icon, Input, InputTextArea, Text} from "~/components/ui";
import {useGetRegionList} from "~/services/region/list";
import {
  selectedDomicileCityIdAtom,
  selectedDomicileProvinceIdAtom,
} from "~/state/formApplication";

import type {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import type {SingleValue} from "react-select";
import type {DetailApplicationCorporateType} from "~/interfaces/form/detailApplication";

const CompanyDirectionForm: React.FC<{
  field: FieldArrayWithId<DetailApplicationCorporateType, "directors", "id">;
  index: number;
  errors: FieldErrors<DetailApplicationCorporateType>;
  register: UseFormRegister<DetailApplicationCorporateType>;
  fieldsLength: number;
  remove: UseFieldArrayRemove;
  getValues: UseFormGetValues<DetailApplicationCorporateType>;
  setValue: UseFormSetValue<DetailApplicationCorporateType>;
}> = ({
  field,
  index,
  errors,
  register,
  fieldsLength,
  remove,
  getValues,
  setValue,
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
    setValue(`directors.${index}.province_id`, toNumber(eventChange?.value));
    setValue(`directors.${index}.province_name`, eventChange?.label);
  };

  const handleChangeCity = (
    eventChange: SingleValue<{
      value: string;
      label: string;
    }>,
  ) => {
    setSelectedDomicileCityId(toNumber(eventChange?.value));
    setValue(`directors.${index}.city_id`, toNumber(eventChange?.value));
    setValue(`directors.${index}.city_name`, eventChange?.label);
  };

  const handleChangeDistrict = (
    eventChange: SingleValue<{
      value: string;
      label: string;
    }>,
  ) => {
    setValue(`directors.${index}.district_id`, toNumber(eventChange?.value));
    setValue(`directors.${index}.district_name`, eventChange?.label);
  };

  return (
    <Disclosure key={field.id} defaultOpen>
      {({open}) => (
        /* Use the `open` state to conditionally change the direction of an icon. */
        <div className="w-full">
          <div className="flex w-full items-center justify-between">
            <Text className="text-blue-600" weight="semi-bold">
              Data Pemegang Saham / Direksi #{index + 1}
            </Text>
            <Disclosure.Button>
              <Icon name={open ? "up-solid" : "down-solid"} />
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="mt-5 flex flex-col gap-5">
            <FormItem
              label="Alamat Lengkap"
              error={errors.directors?.[index]?.name}
              className="flex flex-col gap-4 md:flex-row"
              childClassName="w-full"
              labelClassName="md:min-w-[250px] lg:min-w-[250px]">
              <InputTextArea
                isError={!!errors.directors?.[index]?.name}
                {...register(`directors.${index}.name`)}
              />
            </FormItem>
            <FormItem
              label="No. KTP"
              error={errors.directors?.[index]?.no_ktp}
              className="flex flex-col gap-4 md:flex-row"
              childClassName="w-full"
              labelClassName="md:min-w-[250px] lg:min-w-[250px]">
              <Input
                type="number"
                min={0}
                isError={!!errors.directors?.[index]?.no_ktp}
                {...register(`directors.${index}.no_ktp`)}
              />
            </FormItem>
            <FormItem
              label="Tempat Lahir"
              error={errors.directors?.[index]?.pob}
              className="flex flex-col gap-4 md:flex-row"
              childClassName="w-full"
              labelClassName="md:min-w-[250px] lg:min-w-[250px]">
              <Input
                isError={!!errors.directors?.[index]?.pob}
                {...register(`directors.${index}.pob`)}
              />
            </FormItem>
            <FormItem
              label="Tanggal Lahir"
              error={errors.directors?.[index]?.dob}
              className="flex flex-col gap-4 md:flex-row"
              childClassName="w-full"
              labelClassName="md:min-w-[250px] lg:min-w-[250px]">
              <Input
                type="date"
                isError={!!errors.directors?.[index]?.dob}
                {...register(`directors.${index}.dob`)}
              />
            </FormItem>
            <FormItem
              label="Jabatan"
              error={errors.directors?.[index]?.position}
              className="flex flex-col gap-4 md:flex-row"
              childClassName="w-full"
              labelClassName="md:min-w-[250px] lg:min-w-[250px]">
              <Input
                isError={!!errors.directors?.[index]?.position}
                {...register(`directors.${index}.position`)}
              />
            </FormItem>
            <FormItem
              label="No. Handphone"
              error={errors.directors?.[index]?.no_hp}
              className="flex flex-col gap-4 md:flex-row"
              childClassName="w-full"
              labelClassName="md:min-w-[250px] lg:min-w-[250px]">
              <Input
                type="number"
                min={0}
                isError={!!errors.directors?.[index]?.no_hp}
                {...register(`directors.${index}.no_hp`)}
              />
            </FormItem>
            <FormItem
              label="Alamat Email"
              error={errors.directors?.[index]?.email}
              className="flex flex-col gap-4 md:flex-row"
              childClassName="w-full"
              labelClassName="md:min-w-[250px] lg:min-w-[250px]">
              <Input
                type="email"
                isError={!!errors.directors?.[index]?.email}
                {...register(`directors.${index}.email`)}
              />
            </FormItem>
            <FormItem
              label="Kepemilikan Saham"
              error={errors.directors?.[index]?.share_ownership}
              className="flex flex-col gap-4 md:flex-row"
              childClassName="w-full"
              labelClassName="md:min-w-[250px] lg:min-w-[250px]">
              <Input
                isError={!!errors.directors?.[index]?.share_ownership}
                {...register(`directors.${index}.share_ownership`)}
              />
            </FormItem>

            <div className="mt-5 flex flex-col gap-y-5">
              <Text className="text-blue-600" weight="semi-bold">
                Alamat Lengkap (Sesuai KTP)
              </Text>
              <FormItem
                label="Alamat Lengkap"
                error={errors.directors?.[index]?.address}
                className="flex flex-col gap-4 md:flex-row"
                childClassName="w-full"
                labelClassName="md:min-w-[250px] lg:min-w-[250px]">
                <InputTextArea
                  isError={!!errors.directors?.[index]?.address}
                  {...register(`directors.${index}.address`)}
                />
              </FormItem>
              <FormItem
                label="Provinsi"
                error={errors.directors?.[index]?.province_name}
                className="flex flex-col gap-4 md:flex-row"
                childClassName="w-full"
                labelClassName="md:min-w-[250px] lg:min-w-[250px]">
                <Select
                  className="react-select"
                  value={{
                    value: toString(
                      getValues(`directors.${index}.province_id`),
                    ),
                    label: getValues(
                      `directors.${index}.province_name`,
                    ) as string,
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
                error={errors.directors?.[index]?.city_name}
                className="flex flex-col gap-4 md:flex-row"
                childClassName="w-full"
                labelClassName="md:min-w-[250px] lg:min-w-[250px]">
                <Select
                  className="react-select"
                  value={{
                    value: toString(getValues(`directors.${index}.city_id`)),
                    label: getValues(`directors.${index}.city_name`) as string,
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
                error={errors.directors?.[index]?.district_name}
                className="flex flex-col gap-4 md:flex-row"
                childClassName="w-full"
                labelClassName="md:min-w-[250px] lg:min-w-[250px]">
                <Select
                  className="react-select"
                  value={{
                    value: toString(
                      getValues(`directors.${index}.district_id`),
                    ),
                    label: getValues(
                      `directors.${index}.district_name`,
                    ) as string,
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
                error={errors.directors?.[index]?.postal_code}
                className="flex flex-col gap-4 md:flex-row"
                childClassName="w-full"
                labelClassName="md:min-w-[250px] lg:min-w-[250px]">
                <Input
                  type="number"
                  {...register(`directors.${index}.postal_code`)}
                  isError={!!errors.directors?.[index]?.postal_code}
                />
              </FormItem>
            </div>
          </Disclosure.Panel>
          {fieldsLength > 1 && (
            <Button
              type="button"
              variant="link"
              size="icon"
              className="text-error"
              onClick={() => remove(index)}>
              Hapus
            </Button>
          )}
        </div>
      )}
    </Disclosure>
  );
};

export default CompanyDirectionForm;
