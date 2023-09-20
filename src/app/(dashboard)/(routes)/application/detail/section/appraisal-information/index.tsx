import {Text} from "~/components/ui";

import InputDisplay from "../../../components/input-display";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const AppraisalInformation = ({
  financeData,
}: {
  financeData?: FinanceResponseData;
}) => {
  return (
    <div className="flex flex-col gap-3.5 bg-white">
      <Text
        weight="semi-bold"
        variant="sub-header-2"
        className="mb-3.5 text-blue-600">
        Informasi Penilaian
      </Text>
      <InputDisplay label="Nomor Penilaian" value={financeData?.number ?? ""} />
      <InputDisplay
        label="Penangung Jawab Penilaian"
        value={financeData?.number ?? ""}
      />
      <InputDisplay
        label="Tanggal dan waktu Penilaian"
        value={financeData?.number ?? ""}
      />
    </div>
  );
};

export default AppraisalInformation;
