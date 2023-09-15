import {Text} from "~/components/ui";
import GoogleMaps from "~/components/ui/Map";

import InputDisplay from "../../component/input-display";
import TextAreaDisplay from "../../component/textarea-display";

import type {LatlongType} from "~/components/ui/Map";
import type {FinanceResponseData} from "~/interfaces/services/finance";

const WarehouseData: React.FC<{
  financeData?: FinanceResponseData;
}> = ({financeData}) => {
  return (
    <div className="mt-4 flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Alamat Gudang
      </Text>

      <InputDisplay
        label="Nama Gudang"
        value={financeData?.warehouse?.name ?? ""}
      />
      {financeData?.warehouse ? (
        <GoogleMaps
          latlong={
            {
              lat: financeData?.warehouse?.address?.lat_lng?.latitude,
              long: financeData?.warehouse?.address?.lat_lng?.longitude,
            } as LatlongType
          }
        />
      ) : null}

      <InputDisplay
        label="Longtitude"
        value={financeData?.warehouse?.address?.lat_lng?.longitude ?? 0}
      />
      <InputDisplay
        label="Latitude"
        value={financeData?.warehouse?.address?.lat_lng?.latitude ?? 0}
      />
      <TextAreaDisplay
        label="Alamat Lengkap"
        value={financeData?.warehouse_address ?? ""}
      />
    </div>
  );
};

export default WarehouseData;
