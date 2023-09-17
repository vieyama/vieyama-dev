"use client";

import {useEffect, useState} from "react";

import {useAtom} from "jotai";
import debounce from "lodash/debounce";
import find from "lodash/find";
import isEmpty from "lodash/isEmpty";
import omit from "lodash/omit";
import toNumber from "lodash/toNumber";
import {
  type Control,
  type FieldArrayWithId,
  type FieldError,
  type FieldErrors,
  useController,
  type UseFieldArrayRemove,
  type UseFormRegister,
  useWatch,
} from "react-hook-form";

import SelectComponent from "~/app/(dashboard)/(routes)/application/components/select-component";
import FormItem from "~/components/form";
import ControllerWrapper from "~/components/form/Controller";
import {Button, Icon, InputNumber, Text, Upload} from "~/components/ui";
import {useGetBatchList} from "~/services/batch/list";
import {useGetInventoryList} from "~/services/inventory/list";
import {useGetProductList} from "~/services/product/list";
import {deletedItemsAtom} from "~/state/formApplication";

import type {SingleValue} from "react-select";
import type {FilesType} from "~/components/ui/Upload";
import type {DetailItemType, Items} from "~/interfaces/form/detailItem";

interface ItemFormProps {
  fields: FieldArrayWithId<DetailItemType, "items", "id">[];
  remove: UseFieldArrayRemove;
  index: number;
  errors: FieldErrors<DetailItemType>;
  partnerId: string;
  register: UseFormRegister<DetailItemType>;
  warehouseId62: string;
  control: Control<DetailItemType>;
  dataItem?: Items;
}

const ItemForm: React.FC<ItemFormProps> = ({
  fields,
  remove,
  index,
  errors,
  register,
  warehouseId62,
  partnerId,
  control,
  dataItem,
}) => {
  const {field: quantityField} = useController({
    control,
    name: `items.${index}.quantity`,
  });
  const {field: photosField} = useController({
    control,
    name: `items.${index}.photos`,
  });

  const [searchProduct, setSearchProduct] = useState("");
  const [searchInventory, setSearchInventory] = useState("");
  const [searchBatch, setSearchBatch] = useState("");
  const [deletedItem, setDeletedItem] = useAtom(deletedItemsAtom);

  const dataItems = useWatch({control, name: `items`});
  const productId = dataItems?.[index]?.product_id62;
  const selectedStock = dataItems?.[index]?.selected_stock;

  const [selectedInventory, setSelectedInventory] = useState<{
    skuId: string;
    owner: string;
    productType: string;
    tenant: string;
  }>();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setSelectedInventory({
        skuId: dataItem?.batch?.sku.id62 as string,
        owner: dataItem?.batch?.owner_name as string,
        productType: dataItem?.batch?.product_type as string,
        tenant: dataItem?.batch?.tenant?.id62 as string,
      });
    }
    return () => {
      isMounted = false;
    };
  }, [dataItem]);

  const {data: dataProduct} = useGetProductList({
    page: 1,
    per_page: 50,
    search: searchProduct,
  });

  const {data: dataInventory} = useGetInventoryList(
    {
      page: 1,
      per_page: 50,
      search: searchInventory,
      warehouse_id62: warehouseId62,
      product_id62: productId,
      partner_id: partnerId,
    },
    {enabled: !!productId && !!warehouseId62},
  );

  const {data: dataBatch} = useGetBatchList(
    {
      page: 1,
      per_page: 50,
      search: searchBatch,
      warehouse_id62: warehouseId62,
      sku_id62: selectedInventory?.skuId,
      product_type: selectedInventory?.productType,
      owner_name: selectedInventory?.owner,
      tenant_id62: selectedInventory?.tenant,
    },
    {
      enabled:
        !!warehouseId62 &&
        !!selectedInventory?.skuId &&
        !!selectedInventory?.owner &&
        !!selectedInventory?.tenant &&
        !!selectedInventory?.productType,
    },
  );

  const handleSearchProduct = debounce((search: string) => {
    setSearchProduct(search);
  }, 1500);

  const handleSearchInventory = debounce((search: string) => {
    setSearchInventory(search);
  }, 1500);

  const handleSearchBatch = debounce((search: string) => {
    setSearchBatch(search);
  }, 1500);

  const handleChangeInventory = (
    eventChange: SingleValue<{
      value: string;
      label: string;
      owner: string;
      productType: string;
      tenant: string;
      skuId: string;
    }>,
    onChange: (arg0?: string) => void,
  ) => {
    setSelectedInventory({
      skuId: eventChange?.skuId as string,
      owner: eventChange?.owner as string,
      productType: eventChange?.productType as string,
      tenant: eventChange?.tenant as string,
    });
    onChange(eventChange?.value);
  };

  const handleChangeBatch = (
    eventChange: SingleValue<{
      value: string;
      label: string;
      quantity: number;
    }>,
    onChange: (arg0?: string) => void,
  ) => {
    onChange(eventChange?.value);
    quantityField.onChange(toNumber(eventChange?.quantity));
  };

  const onChangeUpload = (values: string[], index: number) => {
    const images = values;
    const currentImage = dataItems?.[index].photos;

    const setImage = currentImage ? [...currentImage, ...images] : images;
    photosField.onChange(setImage);
  };

  const onDeleteFile = (files: string[]) => {
    photosField.onChange(isEmpty(files) ? [] : files);
  };

  return (
    <>
      <div className="mb-3 flex w-full items-center justify-between">
        <Text>Foto</Text>
        {fields.length > 1 ? (
          <Button
            size="icon"
            variant="transparent"
            onClick={() => {
              if (!!dataItem) {
                const deletedData = !isEmpty(deletedItem)
                  ? [...(deletedItem as Items[]), dataItems?.[index]]
                  : [dataItems?.[index]];
                setDeletedItem(
                  deletedData.map((item) => omit(item, "id")) as Items[],
                );
                photosField.onChange([]);
              }
              return remove(index);
            }}>
            <Icon name="x" />
          </Button>
        ) : null}
      </div>

      <FormItem error={errors.items?.[index]?.photos as FieldError}>
        <Upload
          id={`items.${index}.photos`}
          fileList={dataItems?.[index]?.photos as FilesType}
          onChange={(value) => onChangeUpload(value, index)}
          onDelete={(value) => onDeleteFile(value)}
          accept=".jpg, .png, .jpeg"
          fileTypeLimiter={["image/jpeg", "image/jpg", "image/png"]}
          maxFile={5}
        />
      </FormItem>
      <SelectComponent
        control={control}
        errorMessage={errors.items?.[index]?.product_id62 as FieldError}
        label="Nama Gudang"
        fieldName={`items.${index}.product_id62`}
        defaultValue={{
          label: dataItem?.batch?.product?.name as string,
          value: dataItem?.batch?.product?.id62 as string,
        }}
        onInputChange={handleSearchProduct}
        options={dataProduct?.results?.map((item) => ({
          label: item?.name,
          value: item?.id62,
        }))}
      />

      <SelectComponent
        control={control}
        errorMessage={errors.items?.[index]?.stock_id62 as FieldError}
        label="Nomor SKU"
        fieldName={`items.${index}.stock_id62`}
        onInputChange={handleSearchInventory}
        optionChange={handleChangeInventory}
        defaultValue={{
          label: dataItem?.batch?.sku?.SKU as string,
          value: dataItem?.batch?.id62 as string,
          owner: dataItem?.batch?.owner_name as string,
          productType: dataItem?.batch?.product_type as string,
          tenant: dataItem?.batch?.tenant?.id62 as string,
          skuId: dataItem?.batch?.sku?.id62 as string,
        }}
        options={dataInventory?.results?.map((item) => ({
          label: item?.sku.SKU,
          value: item?.id62,
          owner: item?.owner_name,
          productType: item?.product_type,
          tenant: item?.tenant.id62,
          skuId: item?.sku?.id62,
        }))}
      />

      <FormItem
        label="Pilihan Stok"
        error={errors.items?.[index]?.selected_stock as FieldError}
        className="mt-5 flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <select
          className={`block w-full rounded-lg border ${
            errors.items?.[index]?.selected_stock
              ? "border-error"
              : "border-gray-300"
          } p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500`}
          {...register(`items.${index}.selected_stock`)}>
          <option value="partial">Parsial Stok</option>
          <option value="all">Semua Stok</option>
        </select>
      </FormItem>

      <SelectComponent
        control={control}
        errorMessage={errors.items?.[index]?.batch_number as FieldError}
        label="Nomor Batch"
        fieldName={`items.${index}.batch_number`}
        onInputChange={handleSearchBatch}
        optionChange={handleChangeBatch}
        defaultValue={{
          label: dataItem?.batch?.batch_number as string,
          value: dataItem?.batch?.batch_number as string,
          quantity: dataItem?.batch?.stock as number,
        }}
        options={dataBatch?.results?.map((item) => ({
          label: item?.batch_number,
          value: item?.batch_number,
          quantity: item?.stock,
        }))}
        isOptionDisabled={(items) => {
          const isSame = find(
            dataItems,
            (item) => item.batch_number === items.value,
          );
          return isSame?.batch_number === items.value;
        }}
      />

      <FormItem
        label="Kuantitas"
        error={errors.items?.[index]?.quantity as FieldError}
        className="mt-5 flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <ControllerWrapper
          fieldName={`items.${index}.quantity`}
          control={control}>
          {({onChange, value, onBlur}) => {
            return (
              <InputNumber
                className="text-end"
                disabled={selectedStock === "all"}
                {...register(`items.${index}.quantity`)}
                onChangeValue={onChange}
                onBlur={onBlur}
                defaultValue={value}
                customSuffix={
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center rounded-e-lg bg-gray-200 px-4">
                    Kg
                  </div>
                }
              />
            );
          }}
        </ControllerWrapper>
      </FormItem>
    </>
  );
};

export default ItemForm;
