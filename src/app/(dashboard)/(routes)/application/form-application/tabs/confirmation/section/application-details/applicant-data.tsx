import dayjs from "dayjs";
import toNumber from "lodash/toNumber";
import toString from "lodash/toString";

import InputDisplay from "~/app/(dashboard)/(routes)/application/components/input-display";
import RangeYearDisplay from "~/app/(dashboard)/(routes)/application/components/range-year-display";
import {Text} from "~/components/ui";
import {getLengthOfStay} from "~/utils/getLengthOfStay";

import type {FinanceResponseData} from "~/interfaces/services/finance";
import "dayjs/locale/id";

dayjs.locale("id");

const ApplicantData: React.FC<{
  financeData?: FinanceResponseData;
}> = ({financeData}) => {
  const userType = financeData?.partner_type;

  const IndividualDisplay = () => {
    return (
      <>
        <InputDisplay
          label="Nama Lengkap (Sesuai KTP)"
          value={financeData?.applicant_name ?? ""}
        />
        <InputDisplay label="No. KTP" value={financeData?.no_ktp ?? ""} />
        <InputDisplay label="Tempat Lahir" value={financeData?.pob ?? ""} />
        <InputDisplay
          label="Tanggal Lahir"
          value={
            dayjs(toNumber(financeData?.dob)).format("DD / MMMM / YYYY") ?? ""
          }
        />
        <InputDisplay
          label="Nama Gadis Ibu Kandung"
          value={financeData?.mothers_maiden_name ?? ""}
        />
        <InputDisplay
          label="Status Kepemilikan Rumah"
          value={financeData?.house_ownership_status ?? ""}
        />
        <RangeYearDisplay
          label="Lama Tinggal"
          value1={
            toString(getLengthOfStay(financeData?.length_of_stay ?? 0).year) ??
            ""
          }
          value2={
            toString(getLengthOfStay(financeData?.length_of_stay ?? 0).month) ??
            ""
          }
        />
        <InputDisplay
          label="Pendidikan Terakhir"
          value={financeData?.last_education ?? ""}
        />
        <InputDisplay
          label="Status Perkawinan"
          value={financeData?.marital_status ?? ""}
        />
        <InputDisplay
          label="No. Telepon Rumah"
          value={financeData?.no_telp ?? ""}
        />
        <InputDisplay
          label="No. Handphone #1"
          value={financeData?.no_hp ?? ""}
        />
        <InputDisplay
          optional
          label="No. Handphone #2 (Opsional)"
          value={
            financeData?.no_hp_other === "NaN"
              ? ""
              : financeData?.no_hp_other ?? ""
          }
        />
        <InputDisplay label="Alamat Email" value={financeData?.email ?? ""} />
      </>
    );
  };

  const CorporateDisplay = () => {
    return (
      <>
        <InputDisplay
          label="Nama Pemohon"
          value={financeData?.applicant_name ?? ""}
        />
        <InputDisplay
          label="Nama Perusahaan"
          value={financeData?.company_name ?? ""}
        />
        <InputDisplay
          label="NPWP Pemohon"
          value={financeData?.applicant_npwp ?? ""}
        />

        <InputDisplay
          label="NPWP Perusahaan"
          value={financeData?.company_npwp ?? ""}
        />
        <InputDisplay
          label="Bidang Usaha"
          value={financeData?.business_fields?.[0] ?? ""}
        />

        <InputDisplay
          label="No. Telepon Kantor"
          value={financeData?.no_telp ?? ""}
        />
        <InputDisplay label="Alamat Email" value={financeData?.email ?? ""} />
        <InputDisplay
          label="Jumlah Karyawan"
          value={toString(financeData?.number_of_employees) ?? ""}
        />
      </>
    );
  };

  return (
    <div className="mt-5 flex flex-col gap-y-5">
      <Text className="text-blue-600" weight="semi-bold">
        Data Pemohon
      </Text>
      {userType === "corporate" ? <CorporateDisplay /> : <IndividualDisplay />}
    </div>
  );
};

export default ApplicantData;
