import React, {useState} from "react";

import Select from "react-select";

import FormItem from "~/components/form";
import {Input, InputTextArea, Text} from "~/components/ui";
import GoogleMaps from "~/components/ui/Map";

import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import type {SingleValue} from "react-select";
import type {LatlongType} from "~/components/ui/Map";
import type {DetailItemType} from "~/interfaces/form/detailItem";

type WarehouseType = {
  id: string;
  value: string;
  latlong: {
    lat: number;
    long: number;
  };
  address: string;
};

const WarehouseForm: React.FC<{
  register: UseFormRegister<DetailItemType>;
  setValue: UseFormSetValue<DetailItemType>;
  errors: FieldErrors<DetailItemType>;
}> = ({register, setValue, errors}) => {
  const [selectedWarehouse, setSelectedWarehouse] = useState<WarehouseType>();

  const dummyGudang = [
    {
      id: "1",
      value: "1",
      label: "Gudang Jakarta",
      latlong: {lat: -6.17511, long: 106.865036},
      address:
        "Jl. Re. Martadinata No.33, RT.01/RW.09, Ciwaringin, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat",
    },
    {
      id: "2",
      value: "2",
      label: "Gudang Bogor",
      latlong: {lat: -6.597147, long: 106.806038},
      address:
        "Jl. Re. Martadinata No.33, RT.01/RW.09, Ciwaringin, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat",
    },
    {
      id: "3",
      value: "3",
      label: "Gudang Pantai Indah Kapuk",
      latlong: {lat: -6.11153, long: 106.752571},
      address:
        "Jl. Re. Martadinata No.33, RT.01/RW.09, Ciwaringin, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat",
    },
    {
      id: "4",
      value: "4",
      label: "Gudang Cilacap",
      latlong: {lat: -7.74202, long: 109.014519},
      address:
        "Jl. Re. Martadinata No.33, RT.01/RW.09, Ciwaringin, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat",
    },
  ];

  const handleSelectWarehouse = (event: SingleValue<WarehouseType>) => {
    setSelectedWarehouse(event as WarehouseType);
    setValue("warehouse_address", event?.address);
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-6">
      <Text className="text-blue-600" weight="semi-bold">
        Lokasi Barang
      </Text>
      <FormItem
        label="Nama Gudang"
        error={undefined}
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
          options={dummyGudang}
          onChange={handleSelectWarehouse}
          styles={{
            menu: (provided) => ({...provided, zIndex: 9999}),
          }}
        />
      </FormItem>
      {selectedWarehouse ? (
        <>
          <GoogleMaps latlong={selectedWarehouse?.latlong as LatlongType} />
          <FormItem
            label="Longtitude"
            className="flex flex-col gap-4 md:flex-row"
            childClassName="w-full"
            labelClassName="md:min-w-[250px] lg:min-w-[250px]">
            <Input disabled value={selectedWarehouse?.latlong.lat} />
          </FormItem>
          <FormItem
            label="Latitude"
            className="flex flex-col gap-4 md:flex-row"
            childClassName="w-full"
            labelClassName="md:min-w-[250px] lg:min-w-[250px]">
            <Input disabled value={selectedWarehouse?.latlong.lat} />
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

export default WarehouseForm;
