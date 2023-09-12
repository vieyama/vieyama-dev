import isEmpty from "lodash/isEmpty";
import {useSearchParams} from "next/navigation";

import FormItem from "~/components/form";
import {Text, Upload} from "~/components/ui";

import type {
  FieldError,
  FieldErrors,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import type {FilesType} from "~/components/ui/Upload";
import type {ReqruitmentDocIndividualType} from "~/interfaces/form/reqruitmentDoc";

type ValueFormName = keyof ReqruitmentDocIndividualType;

const FinanceDoc = ({
  errors,
  setValue,
  getValues,
}: {
  errors: FieldErrors<ReqruitmentDocIndividualType>;
  setValue: UseFormSetValue<ReqruitmentDocIndividualType>;
  getValues: UseFormGetValues<ReqruitmentDocIndividualType>;
}) => {
  const onChangeUpload = (values: string[], formName: ValueFormName) => {
    const images = values;
    const currentImage = getValues(formName);

    const setImage = currentImage ? [...currentImage, ...images] : images;
    setValue(formName, setImage);
  };

  const onDeleteFile = (files: string[], formName: ValueFormName) => {
    setValue(formName, isEmpty(files) ? undefined : files);
  };
  const searchParams = useSearchParams();
  const applicationType = searchParams.get("payment");

  return (
    <div className="mt-6 flex flex-col gap-3.5">
      <Text className="text-blue-600" weight="semi-bold">
        Dokumen Keuangan
      </Text>

      <FormItem
        error={errors.bank_statement_photo as FieldError}
        label="Rekening Koran / Buku Tabunngan 6 Bulan Terakhir"
        labelClassName="mb-3.5">
        <Upload
          id="bank_statement_photo"
          fileList={getValues("bank_statement_photo") as FilesType}
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
            fileList={getValues("invoices_others_photo") as FilesType}
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
