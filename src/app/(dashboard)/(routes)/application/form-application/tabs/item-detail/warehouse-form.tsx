import React, {useEffect, useMemo, useState} from "react";

import {
  type FieldErrors,
  useController,
  type UseFormGetValues,
  type UseFormRegister,
} from "react-hook-form";
import Select from "react-select";

import FormItem from "~/components/form";
import {Input, InputTextArea, Text} from "~/components/ui";
import GoogleMaps from "~/components/ui/Map";
import {useGetWarehouseList} from "~/services/warehouse/list";

import type {Control, FieldValues} from "react-hook-form";
import type {SingleValue} from "react-select";
import type {LatlongType} from "~/components/ui/Map";
import type {DetailItemType} from "~/interfaces/form/detailItem";
import type {Warehouse} from "~/interfaces/services/finance";
import type {WarehouseData} from "~/interfaces/services/warehouse";

const WarehouseForm: React.FC<{
  register: UseFormRegister<DetailItemType>;
  getValues: UseFormGetValues<DetailItemType>;
  errors: FieldErrors<DetailItemType>;
  partnerId: string;
  warehouseData?: Warehouse;
  control: Control<FieldValues>;
}> = ({register, errors, partnerId, warehouseData, control}) => {
  const [selectedWarehouse, setSelectedWarehouse] = useState<WarehouseData>();

  const {field: warehouseAddress} = useController({
    control,
    name: "warehouse_address",
  });
  const {field: warehouseId} = useController({control, name: "warehouse_id62"});

  const editData = useMemo(
    () => ({
      id62: warehouseData?.id62,
      name: warehouseData?.name,
      label: warehouseData?.name,
      address: {
        address: warehouseData?.address?.address,
        external_address: warehouseData?.address?.external_address,
        state: warehouseData?.address?.state,
        province: warehouseData?.address?.province,
        regency: warehouseData?.address?.regency,
        lat_lng: warehouseData?.address?.lat_lng,
      },
    }),
    [
      warehouseData?.address?.address,
      warehouseData?.address?.external_address,
      warehouseData?.address?.lat_lng,
      warehouseData?.address?.province,
      warehouseData?.address?.regency,
      warehouseData?.address?.state,
      warehouseData?.id62,
      warehouseData?.name,
    ],
  );

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (editData?.name && editData?.id62) {
        setSelectedWarehouse(editData as unknown as WarehouseData);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [editData, warehouseData]);

  const {data: dataWareHouse} = useGetWarehouseList(
    {partner_id: partnerId},
    {
      enabled: !!partnerId,
    },
  );

  const handleSelectWarehouse = (event: SingleValue<WarehouseData>) => {
    setSelectedWarehouse(event as WarehouseData);
    warehouseAddress.onChange(event?.address?.address);
    warehouseId.onChange(event?.id62);
  };

  const latlong = {
    lat: selectedWarehouse?.address?.lat_lng?.latitude,
    long: selectedWarehouse?.address?.lat_lng?.longitude,
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-6">
      <Text className="text-blue-600" weight="semi-bold">
        Lokasi Barang
      </Text>
      <FormItem
        label="Nama Gudang"
        error={errors.warehouse_id62}
        className="flex flex-col gap-4 md:flex-row"
        childClassName="w-full"
        labelClassName="md:min-w-[250px] lg:min-w-[250px]">
        <Select
          className="react-select"
          theme={(theme) => ({
            ...theme,
            borderRadius: 8,
          })}
          placeholder="Pilih Gudang"
          components={{IndicatorSeparator: null}}
          options={dataWareHouse}
          defaultValue={editData as unknown as WarehouseData}
          onChange={handleSelectWarehouse}
          styles={{
            menu: (provided) => ({...provided, zIndex: 9999}),
          }}
        />
      </FormItem>
      {selectedWarehouse ? (
        <>
          <GoogleMaps latlong={latlong as LatlongType} />
          <FormItem
            label="Longtitude"
            className="flex flex-col gap-4 md:flex-row"
            childClassName="w-full"
            labelClassName="md:min-w-[250px] lg:min-w-[250px]">
            <Input disabled value={latlong.long} />
          </FormItem>
          <FormItem
            label="Latitude"
            className="flex flex-col gap-4 md:flex-row"
            childClassName="w-full"
            labelClassName="md:min-w-[250px] lg:min-w-[250px]">
            <Input disabled value={latlong.long} />
          </FormItem>
          <FormItem
            label="Alamat Lengkap"
            error={errors.warehouse_address}
            className="flex flex-col gap-4 md:flex-row"
            childClassName="w-full"
            labelClassName="md:min-w-[250px] lg:min-w-[250px]">
            <InputTextArea
              disabled
              isError={!!errors.warehouse_address}
              {...register("warehouse_address")}
            />
          </FormItem>
        </>
      ) : null}
    </div>
  );
};

export default WarehouseForm;
