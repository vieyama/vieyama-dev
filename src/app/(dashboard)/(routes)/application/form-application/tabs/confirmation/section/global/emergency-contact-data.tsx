import {Text} from "~/components/ui";

import InputDisplay from "../../component/input-display";
import TextAreaDisplay from "../../component/textarea-display";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const EmergencyContactData: React.FC<{
  financeData?: FinanceResponseData;
  userType: string;
}> = ({financeData, userType}) => {
  return (
    <div className="flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Kontak Darurat
      </Text>

      <InputDisplay
        label="Nama Lengkap"
        value={financeData?.emergency_name ?? ""}
      />
      <InputDisplay
        label="Hubungan Dengan Pemohon"
        value={financeData?.emergency_relationship ?? ""}
      />
      <TextAreaDisplay
        label="Alamat Perusahaan"
        value={financeData?.emergency_address ?? ""}
      />
      <InputDisplay
        label="No. Handphone"
        value={financeData?.emergency_no_hp ?? ""}
      />
      {userType === "corporate" ? (
        <>
          <InputDisplay
            optional
            label="No. Telepon Kantor"
            value={financeData?.emergency_office_no_telp ?? ""}
          />
          <InputDisplay
            optional
            label="No. Telepon Rumah"
            value={financeData?.emergency_home_number ?? ""}
          />
        </>
      ) : null}
    </div>
  );
};

export default EmergencyContactData;
