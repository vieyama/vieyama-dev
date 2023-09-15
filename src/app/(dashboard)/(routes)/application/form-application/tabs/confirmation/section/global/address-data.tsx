import {Text} from "~/components/ui";

import InputDisplay from "../../component/input-display";
import TextAreaDisplay from "../../component/textarea-display";

const AddressData: React.FC<{
  title: string;
  addressData?: {
    address?: string;
    province?: string;
    city?: string;
    district?: string;
    postal_code?: string;
  };
}> = ({title, addressData}) => {
  return (
    <div className="mt-4 flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        {title}
      </Text>
      <TextAreaDisplay label="Alamat" value={addressData?.address ?? ""} />
      <InputDisplay label="Provinsi" value={addressData?.province ?? ""} />
      <InputDisplay label="Kota" value={addressData?.city ?? ""} />
      <InputDisplay label="Kecamatan" value={addressData?.district ?? ""} />
      <InputDisplay label="Kode Pos" value={addressData?.postal_code ?? ""} />
    </div>
  );
};

export default AddressData;
