import {Text} from "~/components/ui";

import InputDisplay from "../../component/input-display";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const SpouseData: React.FC<{
  financeData?: FinanceResponseData;
}> = ({financeData}) => {
  return (
    <div className="flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Informasi Pasangan
      </Text>

      <InputDisplay
        label="Nama Lengkap (Sesuai KTP)"
        value={financeData?.spouse_name ?? ""}
      />
      <InputDisplay label="No. KTP" value={financeData?.spouse_ktp ?? ""} />
      <InputDisplay
        label="No. Telepon"
        value={financeData?.spouse_no_hp ?? ""}
      />
      <InputDisplay label="Pekerjaan" value={financeData?.spouse_job ?? ""} />
      <InputDisplay
        label="Penghasilan (Per Bulan)"
        value={financeData?.spouse_income ?? ""}
      />
      <InputDisplay
        label="Jumlah Tanggungan"
        value={financeData?.spouse_number_of_dependents ?? ""}
      />
    </div>
  );
};

export default SpouseData;
