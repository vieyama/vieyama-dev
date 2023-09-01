import isEmpty from "lodash/isEmpty";

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
  const onChangeUpload = (values: {id: string}[], formName: ValueFormName) => {
    const images = values.map((item) => item.id);
    const currentImage = getValues(formName);

    const setImage = currentImage ? [...currentImage, ...images] : images;
    setValue(formName, setImage);
  };

  const onDeleteFile = (files: string[], formName: ValueFormName) => {
    setValue(formName, isEmpty(files) ? undefined : files);
  };

  return (
    <div className="mt-6 flex flex-col gap-3.5">
      <Text className="text-blue-600" weight="semi-bold">
        Dokumen Foto
      </Text>

      <FormItem
        error={errors.house_photo as FieldError}
        label="Survey Rumah (Tampak Depan Dengan Nomor Rumah)"
        labelClassName="mb-3.5">
        <Upload
          fileList={getValues("house_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "house_photo")}
          onDelete={(value) => onDeleteFile(value, "house_photo")}
          maxFile={5}
        />
      </FormItem>
      <FormItem
        error={errors.selfie_pic_photo as FieldError}
        label="Foto Selfie Pemohon"
        labelClassName="mb-3.5">
        <Upload
          fileList={getValues("selfie_pic_photo") as FilesType}
          onChange={(value) => onChangeUpload(value, "selfie_pic_photo")}
          onDelete={(value) => onDeleteFile(value, "selfie_pic_photo")}
          maxFile={5}
        />
      </FormItem>
    </div>
  );
};

export default FinanceDoc;
