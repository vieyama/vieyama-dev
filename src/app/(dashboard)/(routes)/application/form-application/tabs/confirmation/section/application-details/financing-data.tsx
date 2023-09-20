import InputDisplay from "~/app/(dashboard)/(routes)/application/components/input-display";
import {Text} from "~/components/ui";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const FinancingData: React.FC<{
  financeData?: FinanceResponseData;
}> = ({financeData}) => {
  const proposedValue = Number(financeData?.proposed_value).toLocaleString();

  return (
    <div className="flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Data Pembiayaan
      </Text>
      <InputDisplay
        label="Nilai Pembiayaan Diajukan"
        value={`IDR ${proposedValue}`}
      />
      <InputDisplay label="Tenor" value={`${financeData?.tenor} Bulan`} />
      <InputDisplay
        label="Metoda Pembayaran"
        value={
          financeData?.payment_method === "installment"
            ? "Angsuran"
            : "Pembayaran di Akhir Tenor"
        }
      />
      <InputDisplay
        label="Tujuan Pinjaman"
        value={financeData?.loan_purposes ?? ""}
      />
      <InputDisplay label="Storage" value={financeData?.storage ?? ""} />
    </div>
  );
};

export default FinancingData;
