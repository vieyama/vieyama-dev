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
import type {DetailApplicationType} from "~/interfaces/form/detailApplication";

const CompanyDirectionForm: React.FC<{
  field: FieldArrayWithId<DetailApplicationType, "companyDirction", "id">;
  index: number;
  errors: FieldErrors<DetailApplicationType>;
  register: UseFormRegister<DetailApplicationType>;
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
              error={errors.companyDirction?.[index]?.fullName}
              className="flex flex-col gap-4 md:flex-row"
              childClassName="w-full"
              labelClassName="md:min-w-[200px] lg:min-w-[240px]">
              <Input
                isError={!!errors.companyDirction?.[index]?.fullName}
                {...register(`companyDirction.${index}.fullName`)}
              />
            </FormItem>
            <FormItem
              label="No. KTP"
              error={errors.companyDirction?.[index]?.ktpNumber}
              className="flex flex-col gap-4 md:flex-row"
              childClassName="w-full"
              labelClassName="md:min-w-[200px] lg:min-w-[240px]">
              <Input
                type="number"
                isError={!!errors.companyDirction?.[index]?.ktpNumber}
                {...register(`companyDirction.${index}.ktpNumber`)}
              />
            </FormItem>
            <FormItem
              label="Tempat Lahir"
              error={errors.companyDirction?.[index]?.pob}
              className="flex flex-col gap-4 md:flex-row"
              childClassName="w-full"
              labelClassName="md:min-w-[200px] lg:min-w-[240px]">
              <div className="flex flex-col gap-4 md:flex-row">
                <select
                  className={`block w-full rounded-lg border ${
                    errors.companyDirction?.[index]?.pob
                      ? "border-error"
                      : "border-gray-300"
                  } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
                  {...register(`companyDirction.${index}.pob`)}
                  defaultValue=""
                  placeholder="Tempat Lahir">
                  <option value="">Pilih Kota</option>
                  <option value="Bogor">Bogor</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="Bandung">Bandung</option>
                </select>
              </div>
            </FormItem>
            <FormItem
              label="Tanggal Lahir"
              error={errors.companyDirction?.[index]?.ktpNumber}
              className="flex flex-col gap-4 md:flex-row"
              childClassName="w-full"
              labelClassName="md:min-w-[200px] lg:min-w-[240px]">
              <Input
                type="date"
                isError={!!errors.companyDirction?.[index]?.ktpNumber}
                {...register(`companyDirction.${index}.ktpNumber`)}
              />
            </FormItem>
            <FormItem
              label="Jabatan"
              error={errors.companyDirction?.[index]?.position}
              className="flex flex-col gap-4 md:flex-row"
              childClassName="w-full"
              labelClassName="md:min-w-[200px] lg:min-w-[240px]">
              <Input
                isError={!!errors.companyDirction?.[index]?.position}
                {...register(`companyDirction.${index}.position`)}
              />
            </FormItem>
            <FormItem
              label="No. Handphone"
              error={errors.companyDirction?.[index]?.phone}
              className="flex flex-col gap-4 md:flex-row"
              childClassName="w-full"
              labelClassName="md:min-w-[200px] lg:min-w-[240px]">
              <div className="flex items-center gap-x-4">
                <select
                  className={`block w-28 rounded-lg border ${
                    errors.companyDirction?.[index]?.phoneCode
                      ? "border-error"
                      : "border-gray-300"
                  } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
                  {...register(`companyDirction.${index}.phoneCode`)}
                  defaultValue="+62"
                  placeholder="No. Handphone">
                  <option value="+62">+62</option>
                  {dialPhone.map((dial) => (
                    <option key={dial.code} value={dial.dial_code}>
                      {dial.dial_code}
                    </option>
                  ))}
                </select>
                <Input
                  type="number"
                  isError={!!errors.companyPhone}
                  {...register(`companyDirction.${index}.phone`)}
                />
              </div>
            </FormItem>
            <FormItem
              label="Alamat Email"
              error={errors.companyDirction?.[index]?.email}
              className="flex flex-col gap-4 md:flex-row"
              childClassName="w-full"
              labelClassName="md:min-w-[200px] lg:min-w-[240px]">
              <Input
                type="email"
                isError={!!errors.companyDirction?.[index]?.email}
                {...register(`companyDirction.${index}.email`)}
              />
            </FormItem>
            <FormItem
              label="Kepemilikan Saham"
              error={errors.companyDirction?.[index]?.shareholding}
              className="flex flex-col gap-4 md:flex-row"
              childClassName="w-full"
              labelClassName="md:min-w-[200px] lg:min-w-[240px]">
              <Input
                isError={!!errors.companyDirction?.[index]?.shareholding}
                {...register(`companyDirction.${index}.shareholding`)}
              />
            </FormItem>

            <div className="mt-5 flex flex-col gap-y-5">
              <Text className="text-blue-600" weight="semi-bold">
                Alamat Lengkap (Sesuai KTP)
              </Text>
              <FormItem
                label="Alamat Lengkap"
                error={errors.companyDirction?.[index]?.addressById}
                className="flex flex-col gap-4 md:flex-row"
                childClassName="w-full"
                labelClassName="md:min-w-[200px] lg:min-w-[240px]">
                <InputTextArea
                  isError={!!errors.companyDirction?.[index]?.addressById}
                  {...register(`companyDirction.${index}.addressById`)}
                />
              </FormItem>
              <FormItem
                label="Provinsi"
                error={errors.companyDirction?.[index]?.provinceById}
                className="flex flex-col gap-4 md:flex-row"
                childClassName="w-full"
                labelClassName="md:min-w-[200px] lg:min-w-[240px]">
                <div className="flex flex-col gap-4 md:flex-row">
                  <select
                    className={`block w-full rounded-lg border ${
                      errors.companyDirction?.[index]?.provinceById
                        ? "border-error"
                        : "border-gray-300"
                    } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
                    {...register(`companyDirction.${index}.provinceById`)}
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
                error={errors.companyDirction?.[index]?.regencyById}
                className="flex flex-col gap-4 md:flex-row"
                childClassName="w-full"
                labelClassName="md:min-w-[200px] lg:min-w-[240px]">
                <div className="flex flex-col gap-4 md:flex-row">
                  <select
                    className={`block w-full rounded-lg border ${
                      errors.companyDirction?.[index]?.regencyById
                        ? "border-error"
                        : "border-gray-300"
                    } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
                    {...register(`companyDirction.${index}.regencyById`)}
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
                error={errors.companyDirction?.[index]?.districtById}
                className="flex flex-col gap-4 md:flex-row"
                childClassName="w-full"
                labelClassName="md:min-w-[200px] lg:min-w-[240px]">
                <div className="flex flex-col gap-4 md:flex-row">
                  <select
                    className={`block w-full rounded-lg border ${
                      errors.companyDirction?.[index]?.districtById
                        ? "border-error"
                        : "border-gray-300"
                    } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
                    {...register(`companyDirction.${index}.districtById`)}
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
                label="Kelurahan"
                error={errors.companyDirction?.[index]?.villageById}
                className="flex flex-col gap-4 md:flex-row"
                childClassName="w-full"
                labelClassName="md:min-w-[200px] lg:min-w-[240px]">
                <div className="flex flex-col gap-4 md:flex-row">
                  <select
                    className={`block w-full rounded-lg border ${
                      errors.companyDirction?.[index]?.villageById
                        ? "border-error"
                        : "border-gray-300"
                    } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
                    {...register(`companyDirction.${index}.villageById`)}
                    defaultValue=""
                    placeholder="Kelurahan">
                    <option value="">Pilih Kelurahan</option>
                    <option value="Jawa Tengah">Semarang</option>
                    <option value="Jawa Barat">Surakarta</option>
                    <option value="Jawa Timur">Banyumas</option>
                  </select>
                </div>
              </FormItem>
              <FormItem
                label="Kode Pos"
                error={errors.companyDirction?.[index]?.postalCodeById}
                className="flex flex-col gap-4 md:flex-row"
                childClassName="w-full"
                labelClassName="md:min-w-[200px] lg:min-w-[240px]">
                <Input
                  {...register(`companyDirction.${index}.postalCodeById`)}
                  isError={!!errors.companyDirction?.[index]?.postalCodeById}
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
