import UploadComponent from "~/app/(dashboard)/(routes)/application/components/upload-component";

import type {
  Control,
  FieldError,
  FieldErrors,
  FieldValues,
} from "react-hook-form";
import type {ReqruitmentDocIndividualType} from "~/interfaces/form/reqruitmentDoc";

const LegalDocs = ({
  errors,
  control,
}: {
  errors: FieldErrors<ReqruitmentDocIndividualType>;
  control: Control<FieldValues>;
}) => {
  return (
    <>
      <UploadComponent
        control={control}
        errorMessage={errors.spouse_ktp_photo as FieldError}
        label="Kartu Identitas Pasangan (e-KTP)"
        fieldName="spouse_ktp_photo"
      />
      <UploadComponent
        control={control}
        errorMessage={errors.applicant_npwp_photo as FieldError}
        label="NPWP Pemohon"
        fieldName="applicant_npwp_photo"
      />

      <UploadComponent
        control={control}
        errorMessage={errors.family_document_photo as FieldError}
        label="Kartu Keluarga / Buku Nikah (Jika Menikah)"
        fieldName="family_document_photo"
      />
      <UploadComponent
        control={control}
        errorMessage={errors.house_ownership_photo as FieldError}
        label="Bukti Kepemilikan Rumah (Sertifikat /  Akta Jual Beli / PBB / Rekening Listrik)"
        fieldName="house_ownership_photo"
      />
      <UploadComponent
        control={control}
        errorMessage={errors.bin_or_bussines_photo as FieldError}
        label="Nomor Induk Berusaha (NIB) atau Foto Usaha"
        fieldName="bin_or_bussines_photo"
      />
    </>
  );
};

export default LegalDocs;
