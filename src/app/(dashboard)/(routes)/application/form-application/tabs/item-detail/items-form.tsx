import {useFieldArray, useWatch} from "react-hook-form";

import {Button} from "~/components/ui";

import ItemForm from "./component/item-form";

import type {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import type {DetailItemType} from "~/interfaces/form/detailItem";

const ItemsForm: React.FC<{
  register: UseFormRegister<DetailItemType>;
  control: Control<DetailItemType>;
  errors: FieldErrors<DetailItemType>;
  setValue: UseFormSetValue<DetailItemType>;
  partnerId: string;
}> = ({control, errors, register, setValue, partnerId}) => {
  const {fields, append, remove} = useFieldArray({
    control,
    name: "items",
  });

  const warehouseId62 = useWatch({control, name: "warehouse_id62"});

  return (
    <div className="mt-4 flex flex-col gap-4 bg-white p-6">
      {fields.map((field, index) => (
        <ItemForm
          key={field.id}
          fields={fields}
          remove={remove}
          index={index}
          errors={errors}
          setValue={setValue}
          control={control}
          partnerId={partnerId}
          register={register}
          warehouseId62={warehouseId62 as string}
        />
      ))}
      <Button
        variant="tertiary"
        type="button"
        onClick={() => append({id: null})}>
        + Tambah Barang
      </Button>
    </div>
  );
};

export default ItemsForm;
