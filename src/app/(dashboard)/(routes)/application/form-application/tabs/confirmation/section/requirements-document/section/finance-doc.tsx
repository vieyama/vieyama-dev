import {useSearchParams} from "next/navigation";

import ImageDisplay from "~/app/(dashboard)/(routes)/application/components/image-display";
import {Text} from "~/components/ui";

import type {FinanceResponseData} from "~/interfaces/services/finance";

const FinanceDoc: React.FC<{
  financeData?: FinanceResponseData;
}> = ({financeData}) => {
  const searchParams = useSearchParams();
  const applicationType = searchParams.get("payment");
  const mitraType = searchParams.get("type");

  const IndividualDisplay = () => {
    return (
      <>
        <ImageDisplay
          fileList={financeData?.bank_statement_photo}
          label="Rekening Koran / Buku Tabunngan 6 Bulan Terakhir"
        />
        {applicationType === "Inventory Financing" ? (
          <ImageDisplay
            fileList={financeData?.invoices_others_photo}
            label="Invoice dan lainnya (MOU / SPK / PO / Tanda Terima) - PO dan Invoice"
          />
        ) : null}
      </>
    );
  };

  const CorporateDisplay = () => {
    return (
      <>
        <ImageDisplay
          fileList={financeData?.financial_statement_photo}
          label="Laporan Keuangan 2 Tahun Terakhir (diutamakan yang telah diaudit) /
          InHouse yang sudah ditandatangani"
        />
        <ImageDisplay
          fileList={financeData?.bank_statement_photo}
          label="Rekening Koran / Buku Tabunngan 6 Bulan Terakhir"
        />
        {applicationType === "Inventory Financing" ? (
          <ImageDisplay
            fileList={financeData?.invoices_others_photo}
            label="Invoice dan lainnya (MOU / SPK / PO / Tanda Terima) - PO dan Invoice"
          />
        ) : null}
      </>
    );
  };

  return (
    <div className="flex flex-col gap-4 bg-white p-3">
      <Text className="text-blue-600" weight="semi-bold">
        Dokumen Keuangan
      </Text>

      {mitraType === "corporate" ? <CorporateDisplay /> : <IndividualDisplay />}
    </div>
  );
};

export default FinanceDoc;
