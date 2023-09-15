import {useSearchParams} from "next/navigation";

import UploadComponent from "~/app/(dashboard)/(routes)/application/components/upload-component";
import {Text} from "~/components/ui";

import type {
  Control,
  FieldError,
  FieldErrors,
  FieldValues,
} from "react-hook-form";
import type {ReqruitmentDocIndividualType} from "~/interfaces/form/reqruitmentDoc";

const FinanceDoc = ({
  errors,
  control,
}: {
  errors: FieldErrors<ReqruitmentDocIndividualType>;
  control: Control<FieldValues>;
}) => {
  const searchParams = useSearchParams();
  const applicationType = searchParams.get("payment");

  return (
    <div className="mt-6 flex flex-col gap-3.5">
      <Text className="text-blue-600" weight="semi-bold">
        Dokumen Keuangan
      </Text>

      <UploadComponent
        control={control}
        errorMessage={errors.bank_statement_photo as FieldError}
        label="Rekening Koran 6 Bulan Terakhir"
        fieldName="bank_statement_photo"
      />

      {applicationType !== "Inventory Financing" ? (
        <UploadComponent
          control={control}
          errorMessage={errors.invoices_others_photo as FieldError}
          label="Invoice dan lainnya (MOU / SPK / PO / Tanda Terima)"
          fieldName="invoices_others_photo"
        />
      ) : null}
    </div>
  );
};

export default FinanceDoc;
