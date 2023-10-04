import dayjs from "dayjs";

import {Text} from "~/components/ui";

import InputDisplay from "../../../components/input-display";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const AppraisalInformation = ({
  financeData,
}: {
  financeData?: FinanceResponseData;
}) => {
  return (
    <div className="flex flex-col gap-3.5 bg-white p-5">
      <Text
        weight="semi-bold"
        variant="sub-header-2"
        className="mb-3.5 text-blue-600">
        Informasi Penilaian
      </Text>
      <InputDisplay
        label="Nomor Penilaian"
        value={financeData?.qc_number ?? ""}
      />
      <InputDisplay
        label="Penangung Jawab Penilaian"
        value={financeData?.qc?.name ?? ""}
      />
      <InputDisplay
        label="Tanggal dan waktu Penilaian"
        value={`${dayjs(financeData?.admin_submitted_at).format(
          "DD / MMMM / YYYY H:mm",
        )} WIB`}
      />
    </div>
  );
};

export default AppraisalInformation;
