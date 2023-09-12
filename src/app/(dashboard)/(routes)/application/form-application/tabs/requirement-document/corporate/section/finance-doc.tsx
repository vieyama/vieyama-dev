import isEmpty from "lodash/isEmpty";
import {useSearchParams} from "next/navigation";

import FormItem from "~/components/form";
import {Text, Upload} from "~/components/ui";

import type {
  FieldError,
  FieldErrors,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import type {FilesType} from "~/components/ui/Upload";
import type {ReqruitmentDocCorporateType} from "~/interfaces/form/reqruitmentDoc";

type ValueFormName = keyof ReqruitmentDocCorporateType;

const FinanceDoc = ({
  errors,
  setValue,
  watch,
}: {
  errors: FieldErrors<ReqruitmentDocCorporateType>;
  setValue: UseFormSetValue<ReqruitmentDocCorporateType>;
  watch: UseFormWatch<ReqruitmentDocCorporateType>;
}) => {
  const searchParams = useSearchParams();
  const applicationType = searchParams.get("payment");

  const onChangeUpload = (values: string[], formName: ValueFormName) => {
    const images = values;
    const currentImage = watch(formName);

    const setImage = currentImage ? [...currentImage, ...images] : images;
    setValue(formName, setImage);
  };

  const onDeleteFile = (files: string[], formName: ValueFormName) => {
    setValue(formName, isEmpty(files) ? undefined : files);
  };

  return (
    <div className="mt-6 flex flex-col gap-3.5">
      <Text className="text-blue-600" weight="semi-bold">
        Dokumen Keuangan
      </Text>

      <FormItem
        error={errors.financial_statement_photo as FieldError}
        label="Laporan Keuangan 2 Tahun Terakhir (diutamakan yang telah diaudit) /
        InHouse yang sudah ditandatangani"
        labelClassName="mb-3.5">
        <Upload
          id="financial_statement_photo"
          fileList={watch("financial_statement_photo") as FilesType}
          onChange={(value) =>
            onChangeUpload(value, "financial_statement_photo")
          }
          onDelete={(value) => onDeleteFile(value, "financial_statement_photo")}
          maxFile={5}
        />
      </FormItem>
      <FormItem
        error={errors.bank_statement_photo as FieldError}
        label="Rekening Koran 6 Bulan Terakhir"
        labelClassName="mb-3.5">
        <Upload
          id="bank_statement_photo"
          fileList={watch("bank_statement_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "bank_statement_photo")}
          onDelete={(value) => onDeleteFile(value, "bank_statement_photo")}
          maxFile={5}
        />
      </FormItem>
      {applicationType !== "Inventory Financing" ? (
        <FormItem
          error={errors.invoices_others_photo as FieldError}
          label="Invoice dan lainnya (MOU / SPK / PO / Tanda Terima)"
          labelClassName="mb-3.5">
          <Upload
            id="invoices_others_photo"
            fileList={watch("invoices_others_photo") as FilesType}
            onChange={(value) => onChangeUpload(value, "invoices_others_photo")}
            onDelete={(value) => onDeleteFile(value, "invoices_others_photo")}
            maxFile={5}
          />
        </FormItem>
      ) : null}
    </div>
  );
};

export default FinanceDoc;
