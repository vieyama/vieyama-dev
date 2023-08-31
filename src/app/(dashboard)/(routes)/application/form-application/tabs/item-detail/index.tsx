import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";

import {DetailItemSchema} from "~/validations/FormItemDetail";

import ItemsForm from "./items-form";
import WarehouseForm from "./warehouse-form";
import FooterButton from "../../components/footer-button";

import type {DetailItemType} from "~/interfaces/form/detailItem";

const ItemDetailsForm = () => {
  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: {errors},
  } = useForm<DetailItemType>({
    resolver: yupResolver(DetailItemSchema),
    defaultValues: {
      items: [
        {
          id: "",
          photos: [""],
          qty: 0,
          product_id62: "",
        },
      ],
    },
  });

  const onSubmit = (data: object) => {
    return data;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <WarehouseForm register={register} setValue={setValue} errors={errors} />
      <ItemsForm register={register} control={control} errors={errors} />
      <FooterButton />
    </form>
  );
};

export default ItemDetailsForm;
