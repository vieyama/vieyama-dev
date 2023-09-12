import isEmpty from "lodash/isEmpty";

import FormItem from "~/components/form";
import {Upload} from "~/components/ui";

import type {
  FieldError,
  FieldErrors,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import type {FilesType} from "~/components/ui/Upload";
import type {ReqruitmentDocIndividualType} from "~/interfaces/form/reqruitmentDoc";
type ValueFormName = keyof ReqruitmentDocIndividualType;

const LegalDocs = ({
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

  return (
    <>
      <FormItem
        error={errors.spouse_ktp_photo as FieldError}
        label="Kartu Identitas Pasangan (e-KTP)"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload
          id="spouse_ktp_photo"
          fileList={getValues("spouse_ktp_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "spouse_ktp_photo")}
          onDelete={(value) => onDeleteFile(value, "spouse_ktp_photo")}
          maxFile={5}
        />
      </FormItem>
      <FormItem
        error={errors.applicant_npwp_photo as FieldError}
        label="NPWP Pemohon"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload
          allowEmpty={false}
          id="applicant_npwp_photo"
          fileList={getValues("applicant_npwp_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "applicant_npwp_photo")}
          onDelete={(value) => onDeleteFile(value, "applicant_npwp_photo")}
          maxFile={5}
        />
      </FormItem>
      <FormItem
        error={errors.family_document_photo as FieldError}
        label="Kartu Keluarga / Buku Nikah (Jika Menikah)"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload
          id="family_document_photo"
          fileList={getValues("family_document_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "family_document_photo")}
          onDelete={(value) => onDeleteFile(value, "family_document_photo")}
          maxFile={5}
        />
      </FormItem>
      <FormItem
        error={errors.house_ownership_photo as FieldError}
        label="Bukti Kepemilikan Rumah (Sertifikat /  Akta Jual Beli / PBB / Rekening Listrik)"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload
          id="house_ownership_photo"
          fileList={getValues("house_ownership_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "house_ownership_photo")}
          onDelete={(value) => onDeleteFile(value, "house_ownership_photo")}
          maxFile={5}
        />
      </FormItem>
      <FormItem
        error={errors.bin_or_bussines_photo as FieldError}
        label="Nomor Induk Berusaha (NIB) atau Foto Usaha"
        labelClassName="mb-3.5"
        className="mt-3.5">
        <Upload
          id="bin_or_bussines_photo"
          fileList={getValues("bin_or_bussines_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "bin_or_bussines_photo")}
          onDelete={(value) => onDeleteFile(value, "bin_or_bussines_photo")}
          maxFile={5}
        />
      </FormItem>
    </>
  );
};

export default LegalDocs;
