import toString from "lodash/toString";

import InputDisplay from "~/app/(dashboard)/(routes)/application/components/input-display";
import RangeYearDisplay from "~/app/(dashboard)/(routes)/application/components/range-year-display";
import TextAreaDisplay from "~/app/(dashboard)/(routes)/application/components/textarea-display";
import {Text} from "~/components/ui";
import {getLengthOfStay} from "~/utils/getLengthOfStay";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const PersonalWorksplaceData: React.FC<{
  financeData?: FinanceResponseData;
}> = ({financeData}) => {
  const monthlyIncome = Number(
    financeData?.personal_workplace_income,
  ).toLocaleString();
  const monthlyOtherIncome = Number(
    financeData?.personal_workplace_other_income,
  ).toLocaleString();
  const monthlyAdditionalIncome = Number(
    financeData?.personal_workplace_additional_income,
  ).toLocaleString();

  return (
    <div className="flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Data Pekerjaan / Usaha / Profesi
      </Text>

      <InputDisplay
        label="Nama Perusahaan"
        value={financeData?.personal_workplace_name ?? ""}
      />
      <TextAreaDisplay
        label="Alamat Perusahaan"
        value={financeData?.personal_workplace_address ?? ""}
      />
      <InputDisplay
        label="Bidang Usaha"
        value={financeData?.personal_workplace_business_fields?.[0] ?? ""}
      />
      <InputDisplay
        label="Jabatan"
        value={financeData?.personal_workplace_position ?? ""}
      />
      <RangeYearDisplay
        label="Lama Tinggal"
        value1={
          toString(
            getLengthOfStay(financeData?.personal_workplace_length_of_work ?? 0)
              .year,
          ) ?? ""
        }
        value2={
          toString(
            getLengthOfStay(financeData?.personal_workplace_length_of_work ?? 0)
              .month,
          ) ?? ""
        }
      />
      <InputDisplay
        label="Penghasilan (Per Bulan)"
        value={`IDR ${monthlyIncome}`}
      />
      <InputDisplay
        optional
        label="Penghasilan Lainnya (Per Bulan)"
        value={`IDR ${monthlyOtherIncome}`}
      />
      <InputDisplay
        optional
        label="Sumber Penghasilan Lainnya"
        value={`IDR ${monthlyAdditionalIncome}`}
      />
    </div>
  );
};

export default PersonalWorksplaceData;
