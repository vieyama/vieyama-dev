import {Text} from "~/components/ui";

import InputDisplay from "../../../components/input-display";
import TextAreaDisplay from "../../../components/textarea-display";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const AppraisalNotes = ({financeData}: {financeData?: FinanceResponseData}) => {
  return (
    <div className="flex flex-col gap-3.5 bg-white p-6">
      <Text
        weight="semi-bold"
        variant="sub-header-2"
        className="mb-3.5 text-blue-600">
        Catatan Penilaian
      </Text>
      <InputDisplay
        label="Tanggal dan waktu"
        value={financeData?.number ?? ""}
      />
      <InputDisplay
        label="Penangung Jawab Penilaian"
        value={
          financeData?.partner_type === "corporate"
            ? financeData?.no_telp
            : financeData?.no_hp ?? ""
        }
      />
      <TextAreaDisplay
        label="Catatan"
        value={financeData?.warehouse_address ?? ""}
      />
    </div>
  );
};

export default AppraisalNotes;
