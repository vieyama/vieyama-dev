import {Disclosure} from "@headlessui/react";

import FormItem from "~/components/form";
import {Button, Icon, Input, InputTextArea, Text} from "~/components/ui";
import {dialPhone} from "~/constants/dialPhones";

import type {
  FieldArrayWithId,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from "react-hook-form";
import type {DetailApplicationCorporateType} from "~/interfaces/form/detailApplication";

const CompanyDirectionForm: React.FC<{
  field: FieldArrayWithId<DetailApplicationCorporateType, "directors", "id">;
  index: number;
  errors: FieldErrors<DetailApplicationCorporateType>;
  register: UseFormRegister<DetailApplicationCorporateType>;
  fieldsLength: number;
  remove: UseFieldArrayRemove;
}> = ({field, index, errors, register, fieldsLength, remove}) => {
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
              <Icon name={open ? "minus-circle" : "plus-circle"} />
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
              <div className="flex items-center gap-x-4">
                <select
                  className={`block w-28 rounded-lg border ${
                    errors.directors?.[index]?.phoneCode
                      ? "border-error"
                      : "border-gray-300"
                  } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
                  {...register(`directors.${index}.phoneCode`)}
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
                  isError={!!errors.directors?.[index]?.no_hp}
                  {...register(`directors.${index}.no_hp`)}
                />
              </div>
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
                error={errors.directors?.[index]?.province}
                className="flex flex-col gap-4 md:flex-row"
                childClassName="w-full"
                labelClassName="md:min-w-[250px] lg:min-w-[250px]">
                <div className="flex flex-col gap-4 md:flex-row">
                  <select
                    className={`block w-full rounded-lg border ${
                      errors.directors?.[index]?.province
                        ? "border-error"
                        : "border-gray-300"
                    } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
                    {...register(`directors.${index}.province`)}
                    defaultValue=""
                    placeholder="Provinsi">
                    <option value="">Pilih Provinsi</option>
                    <option value="Jawa Tengah">Jawa Tengah</option>
                    <option value="Jawa Barat">Jawa Barat</option>
                    <option value="Jawa Timur">Jawa Timur</option>
                  </select>
                </div>
              </FormItem>
              <FormItem
                label="Kota"
                error={errors.directors?.[index]?.city}
                className="flex flex-col gap-4 md:flex-row"
                childClassName="w-full"
                labelClassName="md:min-w-[250px] lg:min-w-[250px]">
                <div className="flex flex-col gap-4 md:flex-row">
                  <select
                    className={`block w-full rounded-lg border ${
                      errors.directors?.[index]?.city
                        ? "border-error"
                        : "border-gray-300"
                    } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
                    {...register(`directors.${index}.city`)}
                    defaultValue=""
                    placeholder="Kota">
                    <option value="">Pilih Kota</option>
                    <option value="Jawa Tengah">Semarang</option>
                    <option value="Jawa Barat">Surakarta</option>
                    <option value="Jawa Timur">Banyumas</option>
                  </select>
                </div>
              </FormItem>
              <FormItem
                label="Kecamatan"
                error={errors.directors?.[index]?.district}
                className="flex flex-col gap-4 md:flex-row"
                childClassName="w-full"
                labelClassName="md:min-w-[250px] lg:min-w-[250px]">
                <div className="flex flex-col gap-4 md:flex-row">
                  <select
                    className={`block w-full rounded-lg border ${
                      errors.directors?.[index]?.district
                        ? "border-error"
                        : "border-gray-300"
                    } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
                    {...register(`directors.${index}.district`)}
                    defaultValue=""
                    placeholder="Kecamatan">
                    <option value="">Pilih Kecamatan</option>
                    <option value="Jawa Tengah">Semarang</option>
                    <option value="Jawa Barat">Surakarta</option>
                    <option value="Jawa Timur">Banyumas</option>
                  </select>
                </div>
              </FormItem>

              <FormItem
                label="Kode Pos"
                error={errors.directors?.[index]?.postal_code}
                className="flex flex-col gap-4 md:flex-row"
                childClassName="w-full"
                labelClassName="md:min-w-[250px] lg:min-w-[250px]">
                <Input
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
