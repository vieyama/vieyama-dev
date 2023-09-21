import {Text} from "~/components/ui";

import InputDisplay from "../../../components/input-display";
import TextAreaDisplay from "../../../components/textarea-display";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const CreditOfferHistory = ({
  financeData,
}: {
  financeData?: FinanceResponseData;
}) => {
  return (
    <div className="flex flex-col gap-3.5 bg-white p-6">
      <Text
        weight="semi-bold"
        variant="sub-header-2"
        className="mb-3.5 text-blue-600">
        Credit Offer History
      </Text>
      <InputDisplay
        label="Tanggal dan Waktu"
        value={financeData?.number ?? ""}
      />
      <InputDisplay
        label="Lembaga Pembiayaan"
        value={financeData?.number ?? ""}
      />
      <InputDisplay label="Status" value={financeData?.number ?? ""} />
      <TextAreaDisplay
        label="Catatan"
        value={financeData?.warehouse_address ?? ""}
      />
    </div>
  );
};

export default CreditOfferHistory;
