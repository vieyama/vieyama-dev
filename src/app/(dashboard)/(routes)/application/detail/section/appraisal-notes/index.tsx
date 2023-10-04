import dayjs from "dayjs";
import {isEmpty} from "lodash";

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
        label="Nomor Penilaian"
        value={financeData?.qc_number ?? ""}
      />
      <InputDisplay
        label="Tanggal dan waktu"
        value={`${dayjs(financeData?.qc_submitted_at).format(
          "DD / MMMM / YYYY H:mm",
        )} WIB`}
      />
      <InputDisplay
        label="Penangung Jawab Penilaian"
        value={`${financeData?.qc?.name} (QC)`}
      />
      <TextAreaDisplay
        label="Catatan"
        value={
          isEmpty(financeData?.qc_notes) ? "-" : financeData?.qc_notes ?? ""
        }
      />
    </div>
  );
};

export default AppraisalNotes;
