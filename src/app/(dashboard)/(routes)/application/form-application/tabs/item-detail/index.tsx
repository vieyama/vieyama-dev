import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

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
    getValues,
    watch,
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

  useFormPersist("item-detail-form", {
    watch,
    setValue,
    storage: window.localStorage, // default window.sessionStorage
  });

  const onSubmit = (data: object) => {
    return data;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <WarehouseForm register={register} setValue={setValue} errors={errors} />
      <ItemsForm
        register={register}
        setValue={setValue}
        getValues={getValues}
        control={control}
        errors={errors}
      />
      <FooterButton isLoading={false} />
    </form>
  );
};

export default ItemDetailsForm;
