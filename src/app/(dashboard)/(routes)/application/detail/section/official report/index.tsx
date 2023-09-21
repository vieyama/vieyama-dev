import React, {useEffect, useMemo, useState} from "react";

import {yupResolver} from "@hookform/resolvers/yup";
import {useController, useForm} from "react-hook-form";

import SelectComponent from "~/app/(dashboard)/(routes)/application/components/select-component";
import FormItem from "~/components/form";
import ControllerWrapper from "~/components/form/Controller";
import {Checkbox, Input, InputTextArea, Text} from "~/components/ui";
import GoogleMaps from "~/components/ui/Map";
import {useGetWarehouseList} from "~/services/warehouse/list";
import {DetailItemSchema} from "~/validations/FormItemDetail";

import type {FieldError} from "react-hook-form";
import type {SingleValue} from "react-select";
import type {LatlongType} from "~/components/ui/Map";
import type {DetailItemType} from "~/interfaces/form/detailItem";
import type {FinanceResponseData} from "~/interfaces/services/finance";
import type {WarehouseData} from "~/interfaces/services/warehouse";

const OfficialReport: React.FC<{
  financeData?: FinanceResponseData;
}> = ({financeData}) => {
  const partnerId = financeData?.partner_id;
  const warehouseData = financeData?.warehouse;
  const {
    register,
    control,
    formState: {errors},
  } = useForm<DetailItemType>({
    resolver: yupResolver(DetailItemSchema),
    defaultValues: {
      warehouse_id62: financeData?.warehouse_id62,
      warehouse_address: financeData?.warehouse_address,
    },
  });
  const [selectedWarehouse, setSelectedWarehouse] = useState<WarehouseData>();

  const {field: warehouseAddress} = useController({
    control,
    name: "warehouse_address",
  });

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
    {partner_id: partnerId as string},
    {
      enabled: !!partnerId,
    },
  );

  const handleSelectWarehouse = (
    event: SingleValue<WarehouseData>,
    onChange: (arg0?: string) => void,
  ) => {
    setSelectedWarehouse(event as WarehouseData);
    warehouseAddress.onChange(event?.address?.address);
    onChange(event?.id62);
  };

  const latlong = useMemo(
    () => ({
      lat: selectedWarehouse?.address?.lat_lng?.latitude as number,
      long: selectedWarehouse?.address?.lat_lng?.longitude as number,
    }),
    [
      selectedWarehouse?.address?.lat_lng?.latitude,
      selectedWarehouse?.address?.lat_lng?.longitude,
    ],
  );

  const [latLong, setLatLong] = useState<LatlongType>();
  useEffect(() => {
    return latlong && setLatLong(latlong);
  }, [latlong]);

  const onChangeLatLong = (latlongValue: LatlongType) => {
    setLatLong(latlongValue);
  };
  return (
    <div className="flex flex-col gap-4 bg-white p-6">
      <FormItem error={errors.warehouse_id62}>
        <ControllerWrapper fieldName="approved" control={control}>
          {({onChange, value}) => (
            <Checkbox checked={value} onChange={onChange}>
              Penyimpanan tidak sesuai dengan daftar pada formulir penilaian
            </Checkbox>
          )}
        </ControllerWrapper>
      </FormItem>
      <Text className="text-blue-600" weight="semi-bold">
        Berita Acara
      </Text>
      <SelectComponent
        control={control}
        errorMessage={errors.warehouse_id62 as FieldError}
        label="Nama Gudang"
        fieldName="warehouse_id62"
        defaultValue={editData as unknown as WarehouseData}
        options={dataWareHouse}
        optionChange={handleSelectWarehouse}
      />

      {selectedWarehouse ? (
        <>
          <GoogleMaps
            latlong={latlong as LatlongType}
            allowToChangePointing
            onChangeLatLong={onChangeLatLong}
          />
          <FormItem
            label="Longtitude"
            className="flex flex-col gap-4 md:flex-row"
            childClassName="w-full"
            labelClassName="md:min-w-[250px] lg:min-w-[250px]">
            <Input disabled value={latLong?.long} />
          </FormItem>
          <FormItem
            label="Latitude"
            className="flex flex-col gap-4 md:flex-row"
            childClassName="w-full"
            labelClassName="md:min-w-[250px] lg:min-w-[250px]">
            <Input disabled value={latLong?.lat} />
          </FormItem>
          <FormItem
            label="Alamat Lengkap"
            error={errors.warehouse_address}
            className="flex flex-col gap-4 md:flex-row"
            childClassName="w-full"
            labelClassName="md:min-w-[250px] lg:min-w-[250px]">
            <InputTextArea
              isError={!!errors.warehouse_address}
              {...register("warehouse_address")}
            />
          </FormItem>
        </>
      ) : null}
    </div>
  );
};

export default OfficialReport;
