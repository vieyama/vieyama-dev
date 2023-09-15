import {Text} from "~/components/ui";
import UploadComponent from "~/dashboard/(routes)/application/form-application/components/upload-component";

import type {
  Control,
  FieldError,
  FieldErrors,
  FieldValues,
} from "react-hook-form";
import type {ReqruitmentDocCorporateType} from "~/interfaces/form/reqruitmentDoc";

const FinanceDoc = ({
  errors,
  control,
}: {
  errors: FieldErrors<ReqruitmentDocCorporateType>;
  control: Control<FieldValues>;
}) => {
  return (
    <div className="mt-6 flex flex-col gap-3.5">
      <Text className="text-blue-600" weight="semi-bold">
        Dokumen Foto
      </Text>

      <UploadComponent
        control={control}
        errorMessage={errors.office_photo as FieldError}
        label="Kantor Beserta Aktifitasnya"
        fieldName="office_photo"
      />

      <UploadComponent
        control={control}
        errorMessage={errors.selfie_pic_photo as FieldError}
        label="Foto Selfie Penanggung Jawab"
        fieldName="selfie_pic_photo"
      />
      <UploadComponent
        control={control}
        errorMessage={errors.selfie_comisarist_photo as FieldError}
        label="Foto Selfie Komisaris"
        fieldName="selfie_comisarist_photo"
      />
    </div>
  );
};

export default FinanceDoc;
