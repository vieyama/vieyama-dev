import {useCallback, useEffect} from "react";

import {Disclosure} from "@headlessui/react";
import {useAtom} from "jotai";
import isEmpty from "lodash/isEmpty";
import toNumber from "lodash/toNumber";
import toString from "lodash/toString";
import {
  type FieldArrayWithId,
  type FieldErrors,
  useController,
  type UseFieldArrayRemove,
  type UseFormGetValues,
  type UseFormRegister,
} from "react-hook-form";
import Select from "react-select";

import FormItem from "~/components/form";
import {Button, Icon, Input, InputTextArea, Text} from "~/components/ui";
import {useGetRegion} from "~/hooks/useGetRegion";
import {deletedDirectorAtom} from "~/state/formApplication";

import type {Control, FieldValues} from "react-hook-form";
import type {SingleValue} from "react-select";
import type {
  DetailApplicationCorporateType,
  Directors,
} from "~/interfaces/form/detailApplication";

const CompanyDirectionForm: React.FC<{
  field: FieldArrayWithId<DetailApplicationCorporateType, "directors", "id">;
  index: number;
  errors: FieldErrors<DetailApplicationCorporateType>;
  register: UseFormRegister<DetailApplicationCorporateType>;
  fieldsLength: number;
  remove: UseFieldArrayRemove;
  getValues: UseFormGetValues<DetailApplicationCorporateType>;
  control: Control<FieldValues>;
}> = ({
  field,
  index,
  errors,
  register,
  fieldsLength,
  remove,
  getValues,
  control,
}) => {
  const {field: provinceId} = useController({
    control,
    name: `directors.${index}.province_id`,
  });
  const {field: provinceName} = useController({
    control,
    name: `directors.${index}.province_name`,
  });
  const {field: cityId} = useController({
    control,
    name: `directors.${index}.city_id`,
  });
  const {field: cityName} = useController({
    control,
    name: `directors.${index}.city_name`,
  });
  const {field: districtId} = useController({
    control,
    name: `directors.${index}.district_id`,
  });
  const {field: districtName} = useController({
    control,
    name: `directors.${index}.district_name`,
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

  const [deletedDirector, setDeletedDirector] = useAtom(deletedDirectorAtom);

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
    if (data.directors?.[index]?.province_id) {
      handleChangeProvince({
        value: toString(data.directors?.[index]?.province_id),
        label: data.directors?.[index]?.province_name as string,
      });
    }

    if (data.directors?.[index]?.city_id) {
      handleChangeCity({
        value: toString(data.directors?.[index]?.city_id),
        label: data.directors?.[index]?.city_name as string,
      });
    }

    if (data.directors?.[index]?.district_id) {
      handleChangeDistrict({
        value: toString(data.directors?.[index]?.district_id),
        label: data.directors?.[index]?.district_name as string,
      });
    }
  }, [
    data.directors,
    handleChangeCity,
    handleChangeDistrict,
    handleChangeProvince,
    index,
  ]);

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
                type="number"
                min={0}
                max={100}
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
                error={errors.directors?.[index]?.city_name}
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
                error={errors.directors?.[index]?.district_name}
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
              onClick={() => {
                if (data?.directors?.[index].name !== "") {
                  const deletedData = !isEmpty(deletedDirector)
                    ? [
                        ...(deletedDirector as Directors[]),
                        data?.directors?.[index],
                      ]
                    : [data?.directors?.[index]];

                  setDeletedDirector(deletedData as Directors[]);
                }
                return remove(index);
              }}>
              Hapus
            </Button>
          )}
        </div>
      )}
    </Disclosure>
  );
};

export default CompanyDirectionForm;
