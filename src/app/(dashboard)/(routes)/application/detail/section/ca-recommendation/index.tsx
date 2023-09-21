import {Text} from "~/components/ui";

import InputDisplay from "../../../components/input-display";
import TextAreaDisplay from "../../../components/textarea-display";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const CARecommendations = ({
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
        Rekomendasi Credit Analyst
      </Text>
      <InputDisplay
        label="Penanggung Jawab"
        value={financeData?.number ?? ""}
      />
      <TextAreaDisplay
        label="Catatan"
        value={financeData?.warehouse_address ?? ""}
      />
    </div>
  );
};

export default CARecommendations;
