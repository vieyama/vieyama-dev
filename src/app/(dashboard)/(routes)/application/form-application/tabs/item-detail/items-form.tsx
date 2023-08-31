import {useFieldArray} from "react-hook-form";
import Select from "react-select";

import FormItem from "~/components/form";
import {Button, Icon, Input, Text, Upload} from "~/components/ui";

import type {Control, FieldErrors, UseFormRegister} from "react-hook-form";
import type {DetailItemType} from "~/interfaces/form/detailItem";

const ItemsForm: React.FC<{
  register: UseFormRegister<DetailItemType>;
  control: Control<DetailItemType>;
  errors: FieldErrors<DetailItemType>;
}> = ({control, errors, register}) => {
  const {fields, append, remove} = useFieldArray({
    control,
    name: "items", // unique name for your Field Array
  });

  return (
    <div className="mt-4 flex flex-col gap-4 bg-white p-6">
      {fields.map((field, index) => (
        <div key={field.id}>
          <div className="mb-3 flex w-full items-center justify-between">
            <Text>Foto</Text>
            {fields.length > 1 ? (
              <Button
                size="icon"
                variant="transparent"
                onClick={() => remove(index)}>
                <Icon name="x" />
              </Button>
            ) : null}
          </div>
          <FormItem>
            <Upload />
          </FormItem>
          <FormItem
            label="Nama Barang"
            error={undefined}
            className="mt-5 flex flex-col gap-4 md:flex-row"
            childClassName="w-full"
            labelClassName="md:min-w-[250px] lg:min-w-[250px]">
            <Select
              className="react-select"
              theme={(theme) => ({
                ...theme,
                borderRadius: 8,
              })}
              styles={{
                menu: (provided) => ({...provided, zIndex: 9999}),
              }}
              placeholder="Pilih Barang"
              components={{IndicatorSeparator: null}}
              options={[
                {value: "Udang Merah", label: "Udang Merah"},
                {value: "Udang Biru", label: "Udang Biru"},
                {value: "Udang Kuning", label: "Udang Kuning"},
                {value: "Ikan Cakalang", label: "Ikan Cakalang"},
                {value: "Ikan Paus", label: "Ikan Paus"},
                {value: "Ikan Hiu", label: "Ikan Hiu"},
                {value: "Ikan Pari", label: "Ikan Pari"},
              ]}
              // menuPortalTarget={document.body}
            />
          </FormItem>
          <FormItem
            label="Nomor SKU"
            error={undefined}
            className="mt-5 flex flex-col gap-4 md:flex-row"
            childClassName="w-full"
            labelClassName="md:min-w-[250px] lg:min-w-[250px]">
            <Input placeholder="Nomor SKU" />
          </FormItem>
          <FormItem
            label="Nomor SKU"
            error={undefined}
            className="mt-5 flex flex-col gap-4 md:flex-row"
            childClassName="w-full"
            labelClassName="md:min-w-[250px] lg:min-w-[250px]">
            <select
              className={`block w-full rounded-lg border ${
                errors.items?.[index]?.sku_id62
                  ? "border-error"
                  : "border-gray-300"
              } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
              {...register(`items.${index}.sku_id62`)}
              placeholder="No. Telepon Kantor">
              <option value="Parsial Stok">Parsial Stok</option>
              <option value="Semua Stok">Parsial Stok</option>
            </select>
          </FormItem>
          <FormItem
            label="Nomor Batch"
            error={undefined}
            className="mt-5 flex flex-col gap-4 md:flex-row"
            childClassName="w-full"
            labelClassName="md:min-w-[250px] lg:min-w-[250px]">
            <Select
              className="react-select"
              theme={(theme) => ({
                ...theme,
                borderRadius: 8,
              })}
              placeholder="Pilih Nomor Batch"
              components={{IndicatorSeparator: null}}
              options={[
                {value: "Udang Merah", label: "Udang Merah"},
                {value: "Udang Biru", label: "Udang Biru"},
                {value: "Udang Kuning", label: "Udang Kuning"},
                {value: "Ikan Cakalang", label: "Ikan Cakalang"},
                {value: "Ikan Paus", label: "Ikan Paus"},
                {value: "Ikan Hiu", label: "Ikan Hiu"},
                {value: "Ikan Pari", label: "Ikan Pari"},
              ]}
              styles={{
                menu: (provided) => ({...provided, zIndex: 9999}),
              }}
            />
          </FormItem>
          <FormItem
            label="Kuantitas"
            error={undefined}
            className="mt-5 flex flex-col gap-4 md:flex-row"
            childClassName="w-full"
            labelClassName="md:min-w-[250px] lg:min-w-[250px]">
            <Input
              placeholder="Nomor SKU"
              suffix={
                <div className="flex h-full w-10 items-center justify-center rounded-e-lg bg-gray-200">
                  Kg
                </div>
              }
            />
          </FormItem>
        </div>
      ))}
      <Button
        variant="tertiary"
        onClick={() =>
          append({
            id: "",
            photos: [""],
            qty: 0,
            product_id62: "",
          })
        }>
        + Tambah Barang
      </Button>
    </div>
  );
};

export default ItemsForm;
