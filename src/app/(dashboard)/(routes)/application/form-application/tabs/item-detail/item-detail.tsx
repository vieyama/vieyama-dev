import {useEffect, useState} from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import {useAtom} from "jotai";
import {isEmpty, toNumber} from "lodash";
import {useSearchParams} from "next/navigation";
import {useForm} from "react-hook-form";

import {useNext} from "~/hooks/useNext";
import useToast from "~/hooks/useToast";
import {useInsertFinance} from "~/services/finance";
import {deletedItemsAtom} from "~/state/formApplication";
import {DetailItemSchema} from "~/validations/FormItemDetail";

import ItemsForm from "./items-form";
import WarehouseForm from "./warehouse-form";
import FooterButton from "../../components/footer-button";

import type {DetailItemType} from "~/interfaces/form/detailItem";
import type {FinanceResponseData} from "~/interfaces/services/finance";

const ItemDetailsForm = ({data}: {data: FinanceResponseData}) => {
  const searchParams = useSearchParams();

  const financeId = searchParams.get("uuid");
  const applicationType = searchParams.get("payment");
  const userType = searchParams.get("type");
  const {toast} = useToast();

  const {
    register,
    setValue,
    control,
    handleSubmit,
    getValues,
    formState: {errors, isDirty},
  } = useForm<DetailItemType>({
    resolver: yupResolver(DetailItemSchema),
    defaultValues: {
      warehouse_id62: data?.warehouse_id62,
      warehouse_address: data?.warehouse_address,
      items:
        (data?.items?.length ?? 0) > 0
          ? data?.items?.map((item) => ({
              id: item?.id,
              photos: item?.photos,
              product_id62: item?.product_id62,
              stock_id62: item?.stock_id62,
              batch_number: item?.batch_number,
              selected_stock: item?.selected_stock,
              quantity: toNumber(item?.quantity),
            }))
          : [{id: null, photos: undefined, quantity: null}],
    },
  });

  const handleBeforeUnload = (e: {
    preventDefault: () => void;
    returnValue: string;
  }) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    if (isDirty) window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      if (isDirty)
        window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  const [deletedItems, setDeletedItems] = useAtom(deletedItemsAtom);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setDeletedItems(null);
    }

    return () => {
      isMounted = false;
    };
  }, [setDeletedItems]);

  const [saveType, setSaveType] = useState<"save" | "next">("save");
  const insertItemsDetail = useInsertFinance();
  const {handleNext} = useNext();

  const onSubmit = (data: DetailItemType) => {
    const items = isEmpty(deletedItems)
      ? data?.items
      : [...(data?.items as []), ...(deletedItems as [])];
    const dataSave = {
      step: "item_details",
      uuid: financeId,
      partner_type: userType as string,
      financing_type: applicationType,
      warehouse_id62: data?.warehouse_id62,
      warehouse_address: data?.warehouse_address,
      items: items?.map((item) => ({
        ...item,
        ...(item?.id && {id: toNumber(item?.id)}),
        quantity: toNumber(item.quantity),
      })),
    };

    if (!isDirty && saveType === "next") {
      return handleNext();
    }
    if (isDirty) {
      insertItemsDetail
        .mutateAsync(dataSave)
        .then(() => {
          setDeletedItems(null);
          if (saveType === "next") {
            return handleNext();
          }
        })
        .catch(() => {
          return toast({
            message: "Terjadi kesalahan, silahkan coba kembali!",
            type: "error",
          });
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <WarehouseForm
        partnerId={data?.partner_id}
        register={register}
        control={control}
        getValues={getValues}
        errors={errors}
        warehouseData={data?.warehouse}
      />
      <ItemsForm
        partnerId={data?.partner_id}
        dataItems={data?.items}
        register={register}
        setValue={setValue}
        control={control}
        errors={errors}
      />
      <FooterButton
        isLoading={insertItemsDetail.isLoading}
        setSaveType={setSaveType}
        isDirty={isDirty}
      />
    </form>
  );
};

export default ItemDetailsForm;
