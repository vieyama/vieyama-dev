import dayjs from "dayjs";
import Link from "next/link";

import {Icon, Text} from "~/components/ui";
import {googleApisFmsUrl} from "~/constants/globals";

import InputDisplay from "../../../components/input-display";
import TextAreaDisplay from "../../../components/textarea-display";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const ApplicantInformation = ({
  financeData,
  roleId,
}: {
  financeData?: FinanceResponseData;
  roleId: number;
}) => {
  return (
    <div className="flex flex-col gap-3.5 bg-white p-6">
      <Text className="text-blue-600" weight="semi-bold">
        Informasi Pemohon
      </Text>
      <InputDisplay
        label="No. Formulir Aplikasi Pembiayaan"
        value={financeData?.number ?? ""}
      />
      <InputDisplay
        label="Nama Pemohon"
        value={financeData?.applicant_name ?? ""}
      />
      <InputDisplay
        label={financeData?.partner_type === "corporate" ? "NPWP" : "No. KTP"}
        value={
          financeData?.partner_type === "corporate"
            ? financeData?.company_npwp
            : financeData?.no_ktp ?? ""
        }
      />
      <InputDisplay
        label="No. Handphone"
        value={
          financeData?.partner_type === "corporate"
            ? financeData?.no_telp
            : financeData?.no_hp ?? ""
        }
      />
      <TextAreaDisplay
        label="Lokasi Barang"
        value={financeData?.warehouse_address ?? ""}
      />
      <InputDisplay
        label="Tanggal dan waktu pengiriman"
        value={`${dayjs(financeData?.submitted_at).format(
          "DD / MMMM / YYYY H:mm",
        )} WIB`}
      />
      {roleId === 3 ? (
        <div className="items-left flex w-full flex-col gap-y-3 md:flex-row md:items-center">
          <Text className="w-[270px]">Surat Tugas</Text>
          <div className="flex w-full justify-between">
            <Text>{financeData?.qc_assignment_letter}</Text>
            <Link
              href={`${googleApisFmsUrl}/attachment/${financeData?.qc_assignment_letter}`}
              target="_blank">
              <Icon name="download" size={24} />
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ApplicantInformation;
