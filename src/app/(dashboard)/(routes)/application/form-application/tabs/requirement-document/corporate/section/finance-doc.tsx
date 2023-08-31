import {useSearchParams} from "next/navigation";

import FormItem from "~/components/form";
import {Text, Upload} from "~/components/ui";

const FinanceDoc = () => {
  const searchParams = useSearchParams();
  const applicationType = searchParams.get("payment");

  return (
    <div className="mt-6 flex flex-col gap-3.5">
      <Text className="text-blue-600" weight="semi-bold">
        Dokumen Keuangan
      </Text>

      <FormItem
        label="Laporan Keuangan 2 Tahun Terakhir (diutamakan yang telah diaudit) /
        InHouse yang sudah ditandatangani"
        labelClassName="mb-3.5">
        <Upload />
      </FormItem>
      <FormItem label="Rekening Koran 6 Bulan Terakhir" labelClassName="mb-3.5">
        <Upload />
      </FormItem>
      {applicationType !== "inventory" ? (
        <FormItem
          label="Invoice dan lainnya (MOU / SPK / PO / Tanda Terima)"
          labelClassName="mb-3.5">
          <Upload />
        </FormItem>
      ) : null}
    </div>
  );
};

export default FinanceDoc;
