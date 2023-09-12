import isEmpty from "lodash/isEmpty";

import FormItem from "~/components/form";
import {Upload} from "~/components/ui";

import type {
  FieldError,
  FieldErrors,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import type {FilesType} from "~/components/ui/Upload";
import type {ReqruitmentDocCorporateType} from "~/interfaces/form/reqruitmentDoc";

type ValueFormName = keyof ReqruitmentDocCorporateType;

const LegalDocs = ({
  errors,
  setValue,
  watch,
}: {
  errors: FieldErrors<ReqruitmentDocCorporateType>;
  setValue: UseFormSetValue<ReqruitmentDocCorporateType>;
  watch: UseFormWatch<ReqruitmentDocCorporateType>;
}) => {
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
    <>
      <FormItem
        label="Kartu Identitas Direksi (e-KTP)"
        labelClassName="mb-3.5"
        error={errors.directors_ktp_photo as FieldError}
        className="mt-3.5">
        <Upload
          id="directors_ktp_photo"
          fileList={watch("directors_ktp_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "directors_ktp_photo")}
          onDelete={(value) => onDeleteFile(value, "directors_ktp_photo")}
          maxFile={5}
        />
      </FormItem>
      <FormItem
        error={errors.comisarist_ktp_photo as FieldError}
        label="Kartu Identitas Komisaris (e-KTP)"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload
          id="comisarist_ktp_photo"
          fileList={watch("comisarist_ktp_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "comisarist_ktp_photo")}
          onDelete={(value) => onDeleteFile(value, "comisarist_ktp_photo")}
          maxFile={3}
        />
      </FormItem>
      <FormItem
        error={errors.shareholders_ktp_photo as FieldError}
        label="Kartu Identitas Pemegang Saham (e-KTP)"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload
          id="shareholders_ktp_photo"
          fileList={watch("shareholders_ktp_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "shareholders_ktp_photo")}
          onDelete={(value) => onDeleteFile(value, "shareholders_ktp_photo")}
          maxFile={3}
        />
      </FormItem>
      <FormItem
        error={errors.directors_npwp_photo as FieldError}
        label="NPWP Direksi"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload
          id="directors_npwp_photo"
          fileList={watch("directors_npwp_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "directors_npwp_photo")}
          onDelete={(value) => onDeleteFile(value, "directors_npwp_photo")}
          maxFile={3}
        />
      </FormItem>
      <FormItem
        error={errors.comisarist_npwp_photo as FieldError}
        label="NPWP Komisaris"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload
          id="comisarist_npwp_photo"
          fileList={watch("comisarist_npwp_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "comisarist_npwp_photo")}
          onDelete={(value) => onDeleteFile(value, "comisarist_npwp_photo")}
          maxFile={3}
        />
      </FormItem>
      <FormItem
        error={errors.shareholders_npwp_photo as FieldError}
        label="NPWP Pemegang Saham"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload
          id="shareholders_npwp_photo"
          fileList={watch("shareholders_npwp_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "shareholders_npwp_photo")}
          onDelete={(value) => onDeleteFile(value, "shareholders_npwp_photo")}
          maxFile={3}
        />
      </FormItem>
      <FormItem
        error={errors.company_npwp_photo as FieldError}
        label="NPWP Perusahaan"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload
          id="company_npwp_photo"
          allowEmpty={false}
          fileList={watch("company_npwp_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "company_npwp_photo")}
          onDelete={(value) => onDeleteFile(value, "company_npwp_photo")}
          maxFile={3}
        />
      </FormItem>
      <FormItem
        error={errors.deed_of_incoraption_photo as FieldError}
        label="Akta Pendirian"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload
          id="deed_of_incoraption_photo"
          fileList={watch("deed_of_incoraption_photo") as FilesType}
          onChange={(value) =>
            onChangeUpload(value, "deed_of_incoraption_photo")
          }
          onDelete={(value) => onDeleteFile(value, "deed_of_incoraption_photo")}
          maxFile={3}
        />
      </FormItem>
      <FormItem
        error={errors.amendment_deed_photo as FieldError}
        optional
        label="Akta Perubahan"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload
          id="amendment_deed_photo"
          fileList={watch("amendment_deed_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "amendment_deed_photo")}
          onDelete={(value) => onDeleteFile(value, "amendment_deed_photo")}
          maxFile={3}
        />
      </FormItem>
      <FormItem
        error={errors.sk_kemenkumham_photo as FieldError}
        label="SK Kemenkumham"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload
          id="sk_kemenkumham_photo"
          fileList={watch("sk_kemenkumham_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "sk_kemenkumham_photo")}
          onDelete={(value) => onDeleteFile(value, "sk_kemenkumham_photo")}
          maxFile={3}
        />
      </FormItem>
      <FormItem
        error={errors.sk_kemenkumham_changes_photo as FieldError}
        optional
        label="SK Kemenkumham Perubahan"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload
          id="sk_kemenkumham_changes_photo"
          fileList={watch("sk_kemenkumham_changes_photo") as FilesType}
          onChange={(value) =>
            onChangeUpload(value, "sk_kemenkumham_changes_photo")
          }
          onDelete={(value) =>
            onDeleteFile(value, "sk_kemenkumham_changes_photo")
          }
          maxFile={3}
        />
      </FormItem>
      <FormItem
        error={errors.licensing_documents_photo as FieldError}
        label="SIUP, TDP atau NIB"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload
          id="licensing_documents_photo"
          fileList={watch("licensing_documents_photo") as FilesType}
          onChange={(value) =>
            onChangeUpload(value, "licensing_documents_photo")
          }
          onDelete={(value) => onDeleteFile(value, "licensing_documents_photo")}
          maxFile={3}
        />
      </FormItem>
    </>
  );
};

export default LegalDocs;
