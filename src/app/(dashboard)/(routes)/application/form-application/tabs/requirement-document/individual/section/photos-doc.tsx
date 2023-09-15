import {Text} from "~/components/ui";
import UploadComponent from "~/dashboard/(routes)/application/form-application/components/upload-component";

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
  return (
    <div className="mt-6 flex flex-col gap-3.5">
      <Text className="text-blue-600" weight="semi-bold">
        Dokumen Foto
      </Text>
      <UploadComponent
        control={control}
        errorMessage={errors.house_photo as FieldError}
        label="Survey Rumah (Tampak Depan Dengan Nomor Rumah)"
        fieldName="house_photo"
      />
      <UploadComponent
        control={control}
        errorMessage={errors.selfie_pic_photo as FieldError}
        label="Foto Selfie Pemohon"
        fieldName="selfie_pic_photo"
      />
    </div>
  );
};

export default FinanceDoc;
