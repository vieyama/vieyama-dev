import {type FieldErrors, type UseFormClearErrors} from "react-hook-form";

import UploadComponent from "~/dashboard/(routes)/application/form-application/components/upload-component";

import type {Control, FieldError, FieldValues} from "react-hook-form";
import type {ReqruitmentDocCorporateType} from "~/interfaces/form/reqruitmentDoc";

const LegalDocs = ({
  errors,
  control,
}: {
  errors: FieldErrors<ReqruitmentDocCorporateType>;
  clearErrors: UseFormClearErrors<ReqruitmentDocCorporateType>;
  control: Control<FieldValues>;
}) => {
  return (
    <>
      <UploadComponent
        control={control}
        errorMessage={errors.directors_ktp_photo as FieldError}
        label="Kartu Identitas Direksi (e-KTP)"
        fieldName="directors_ktp_photo"
      />
      <UploadComponent
        control={control}
        errorMessage={errors.comisarist_ktp_photo as FieldError}
        label="Kartu Identitas Komisaris (e-KTP)"
        fieldName="comisarist_ktp_photo"
      />
      <UploadComponent
        control={control}
        errorMessage={errors.shareholders_ktp_photo as FieldError}
        label="Kartu Identitas Pemegang Saham (e-KTP)"
        fieldName="shareholders_ktp_photo"
      />
      <UploadComponent
        control={control}
        errorMessage={errors.directors_npwp_photo as FieldError}
        label="NPWP Direksi"
        fieldName="directors_npwp_photo"
      />
      <UploadComponent
        control={control}
        errorMessage={errors.comisarist_npwp_photo as FieldError}
        label="NPWP Komisaris"
        fieldName="comisarist_npwp_photo"
      />
      <UploadComponent
        control={control}
        errorMessage={errors.shareholders_npwp_photo as FieldError}
        label="NPWP Pemegang Saham"
        fieldName="shareholders_npwp_photo"
      />
      <UploadComponent
        control={control}
        errorMessage={errors.company_npwp_photo as FieldError}
        label="NPWP Perusahaan"
        fieldName="company_npwp_photo"
      />
      <UploadComponent
        control={control}
        errorMessage={errors.deed_of_incoraption_photo as FieldError}
        label="Akta Pendirian"
        fieldName="deed_of_incoraption_photo"
      />
      <UploadComponent
        control={control}
        optional
        errorMessage={errors.amendment_deed_photo as FieldError}
        label="Akta Perubahan"
        fieldName="amendment_deed_photo"
      />
      <UploadComponent
        control={control}
        errorMessage={errors.sk_kemenkumham_photo as FieldError}
        label="SK Kemenkumham"
        fieldName="sk_kemenkumham_photo"
      />
      <UploadComponent
        control={control}
        errorMessage={errors.sk_kemenkumham_changes_photo as FieldError}
        label="SK Kemenkumham Perubahan"
        fieldName="sk_kemenkumham_changes_photo"
        optional
      />
      <UploadComponent
        control={control}
        errorMessage={errors.licensing_documents_photo as FieldError}
        label="SIUP, TDP atau NIB"
        fieldName="licensing_documents_photo"
      />
    </>
  );
};

export default LegalDocs;
